// HeadHunter Challenge — narrative grader worker (Cloudflare Workers)
// Endpoints: POST /api/grade, /api/candidate, /api/letter
// Deploy: wrangler deploy   |   Secret: wrangler secret put MISTRAL_API_KEY

const DAILY_CAP = 500;
const RATE_LIMIT_PER_IP = 10; // per hour, in-memory (use a Rate Limiting Binding in production)

const ipBuckets = new Map();
const daily = { date: today(), count: 0 };

function today() { return new Date().toISOString().slice(0, 10); }

function checkRateLimit(ip) {
  const hour = Math.floor(Date.now() / 3600000);
  const entry = ipBuckets.get(ip);
  if (!entry || entry.resetAt !== hour) { ipBuckets.set(ip, { count: 1, resetAt: hour }); return true; }
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

const GRADER_SYSTEM = `Eres un evaluador experto en selección de personal. Puntúa la pregunta de seguimiento del reclutador de 0 a 10 según esta rúbrica: ¿verifica el rol real del candidato (no solo "lideré")? ¿pide datos concretos (equipo, cifras, tecnologías, resultado)? ¿es una pregunta de seguimiento con estructura (STAR/paradójica)? ¿es concisa? Responde SOLO JSON válido.`;

const CANDIDATE_SYSTEM = `Eres Marek, un candidato senior Data Engineer experto pero evasivo. Respondes con frases tipo "lideré la migración completa", sin dar cifras ni detalles concretos salvo que te presionen con buenas preguntas. Mantén un tono profesional y ligeramente reserved. Responde SOLO en texto plano, 1–2 frases, en el idioma indicado.`;

const LETTER_SYSTEM = `Eres Anna, la clienta. Escribe una carta cálida y personalizada al headhunter según su puntuación (0–100) y su nivel. 3–4 frases, tono profesional pero cercano. Responde SOLO JSON válido.`;

async function callMistral(messages, schemaName, schema, apiKey) {
  const resp = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages,
      response_format: { type: "json_schema", json_schema: { name: schemaName, strict: true, schema } }
    })
  });
  if (!resp.ok) throw new Error(`Mistral error ${resp.status}`);
  const data = await resp.json();
  return JSON.parse(data.choices[0].message.content);
}

const SCORE_SCHEMA = {
  type: "object",
  properties: { score: { type: "number", minimum: 0, maximum: 10 }, feedback: { type: "string" } },
  required: ["score", "feedback"],
  additionalProperties: false
};
const REPLY_SCHEMA = {
  type: "object",
  properties: { reply: { type: "string" } },
  required: ["reply"],
  additionalProperties: false
};
const LETTER_SCHEMA = {
  type: "object",
  properties: { letter: { type: "string" } },
  required: ["letter"],
  additionalProperties: false
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = env.ALLOWED_ORIGIN || "";
    if (!allowed) {
      return new Response(JSON.stringify({ error: "Forbidden: ALLOWED_ORIGIN not configured" }), { status: 403, headers: { "Content-Type": "application/json" } });
    }
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin === allowed ? allowed : "null",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    const path = new URL(request.url).pathname;
    const isApi = ["/api/grade", "/api/candidate", "/api/letter"].some(p => path.endsWith(p));
    if (request.method !== "POST" || !isApi) {
      return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (origin !== allowed) {
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
    const lang = ["pl", "es", "en"].includes(body.lang) ? body.lang : "pl";

    try {
      if (path.endsWith("/api/grade")) {
        const answer = body.answer;
        if (typeof answer !== "string" || answer.trim().length < 5 || answer.length > 2000) {
          return new Response(JSON.stringify({ error: "Invalid answer" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
        }
        const parsed = await callMistral([
          { role: "system", content: GRADER_SYSTEM },
          { role: "user", content: `Idioma: ${lang}. Candidato dijo: "En mi último proyecto lideré la migración completa del sistema". Respuesta del reclutador: ${answer.trim()}` }
        ], "grade", SCORE_SCHEMA, env.MISTRAL_API_KEY);
        return new Response(JSON.stringify({
          score: Math.max(0, Math.min(100, Math.round(parsed.score * 10))),
          feedback: String(parsed.feedback || "")
        }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }

      if (path.endsWith("/api/candidate")) {
        const message = body.message;
        if (typeof message !== "string" || message.trim().length < 3 || message.length > 1000) {
          return new Response(JSON.stringify({ error: "Invalid message" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
        }
        const history = Array.isArray(body.history) ? body.history.slice(-6).map(m => ({ role: m.role === "user" ? "user" : "assistant", content: String(m.content).slice(0, 500) })) : [];
        const parsed = await callMistral([
          { role: "system", content: `${CANDIDATE_SYSTEM} Idioma de respuesta: ${lang}.` },
          ...history,
          { role: "user", content: message.trim() }
        ], "reply", REPLY_SCHEMA, env.MISTRAL_API_KEY);
        return new Response(JSON.stringify({ reply: String(parsed.reply || "…") }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }

      if (path.endsWith("/api/letter")) {
        const score = Math.max(0, Math.min(100, Number(body.score) || 0));
        const rank = String(body.rank || "").slice(0, 60);
        const parsed = await callMistral([
          { role: "system", content: `${LETTER_SYSTEM} Idioma: ${lang}.` },
          { role: "user", content: `El headhunter obtuvo ${score}/100 (nivel: ${rank}). Escribe la carta.` }
        ], "letter", LETTER_SCHEMA, env.MISTRAL_API_KEY);
        return new Response(JSON.stringify({ letter: String(parsed.letter || "") }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
    } catch {
      return new Response(JSON.stringify({ error: "Upstream failed" }), { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
  }
};
