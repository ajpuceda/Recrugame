// HeadHunter Challenge — grader worker (Cloudflare Workers)
// Deploy: wrangler deploy   |   Secret: wrangler secret put MISTRAL_API_KEY

const DAILY_CAP = 500;
const RATE_LIMIT_PER_IP = 10; // per hour, in-memory (use a Rate Limiting Binding in production)

const ipBuckets = new Map(); // ip -> { count, resetAt }
const daily = { date: today(), count: 0 };

function today() {
  return new Date().toISOString().slice(0, 10);
}

function checkRateLimit(ip) {
  const now = Date.now();
  const hour = Math.floor(now / 3600000);
  const entry = ipBuckets.get(ip);
  if (!entry || entry.resetAt !== hour) {
    ipBuckets.set(ip, { count: 1, resetAt: hour });
    return true;
  }
  entry.count++;
  return entry.count <= RATE_LIMIT_PER_IP;
}

function checkDailyCap() {
  const d = today();
  if (daily.date !== d) { daily.date = d; daily.count = 0; }
  if (daily.count >= DAILY_CAP) return false;
  daily.count++;
  return true;
}

const SYSTEM_PROMPT = `Eres un evaluador experto en selección de personal. Puntúa la pregunta de seguimiento del reclutador de 0 a 10 según esta rúbrica: ¿verifica el rol real del candidato (no solo "lideré")? ¿pide datos concretos (equipo, cifras, tecnologías, resultado)? ¿es una pregunta de seguimiento con estructura (STAR/paradójica)? ¿es concisa? Responde SOLO JSON válido.`;

async function gradeWithMistral(answer, lang, apiKey) {
  const resp = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `Idioma de la respuesta: ${lang}. Pregunta del candidato: "En mi último proyecto lideré la migración completa del sistema". Respuesta del reclutador a evaluar: ${answer}` }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "grade",
          strict: true,
          schema: {
            type: "object",
            properties: {
              score: { type: "number", minimum: 0, maximum: 10 },
              feedback: { type: "string" }
            },
            required: ["score", "feedback"],
            additionalProperties: false
          }
        }
      }
    })
  });
  if (!resp.ok) throw new Error(`Mistral error ${resp.status}`);
  const data = await resp.json();
  const parsed = JSON.parse(data.choices[0].message.content);
  return {
    score: Math.max(0, Math.min(100, Math.round(parsed.score * 10))),
    feedback: String(parsed.feedback || "")
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = env.ALLOWED_ORIGIN || "";
    const corsHeaders = {
      "Access-Control-Allow-Origin": allowed && origin === allowed ? allowed : "null",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    if (request.method !== "POST" || !new URL(request.url).pathname.endsWith("/api/grade")) {
      return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (allowed && origin !== allowed) {
      return new Response(JSON.stringify({ error: "Forbidden origin" }), { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    if (!checkRateLimit(ip)) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (!checkDailyCap()) {
      return new Response(JSON.stringify({ error: "Daily cap reached" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    let body;
    try { body = await request.json(); } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const { answer, lang } = body || {};
    if (typeof answer !== "string" || answer.trim().length < 5 || answer.length > 2000) {
      return new Response(JSON.stringify({ error: "Invalid answer" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    try {
      const result = await gradeWithMistral(answer.trim(), lang === "es" ? "es" : "pl", env.MISTRAL_API_KEY);
      return new Response(JSON.stringify(result), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Grading failed" }), { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
  }
};
