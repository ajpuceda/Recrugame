// Genera TODOS los clips de audio del juego, en 3 idiomas (pl / es / en).
// Uso (Windows CMD):
//   set MISTRAL_API_KEY=tu_clave
//   node tools/gen-audio.js          -> genera los 3 idiomas (18 clips)
//   node tools/gen-audio.js es       -> solo español (6 clips)
// La clave NUNCA se escribe en el código ni se commitea.
//
// Voces (librería Mistral, modelo voxtral-mini-tts-3-0):
//   pl -> Leon    (voice_3154, polaco)        — Anna y Marek
//   es -> Elena   (voice_483, español)       — Anna y Marek
//   en -> Jane    (gb_jane_neutral, UK)      — Anna
//        Oliver  (gb_oliver_neutral, UK)     — Marek
// Librería: https://docs.mistral.ai/studio/audio/text-to-speech/voices

import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const API_KEY = process.env.MISTRAL_API_KEY;
if (!API_KEY) {
  console.error("Falta MISTRAL_API_KEY en el entorno.");
  process.exit(1);
}

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const only = (process.argv[2] || "all").toLowerCase(); // pl | es | en | all

const VOICES = { pl: "voice_3154", es: "voice_483", en: "gb_jane_neutral" };
const VOICE_MAREK_EN = "gb_oliver_neutral";

const SCRIPTS = {
  prologue: { // Narrador: la señal del radar conecta el Prólogo con el Acto 1
    pl: "Twój radar wyłapał sygnał w szumie: Marek, Data Engineer, Warszawa. Za chwilę zadzwoni telefon.",
    es: "Tu radar ha detectado una señal en el ruido: Marek, Data Engineer, Varsovia. En unos segundos sonará el teléfono.",
    en: "Your radar just caught a signal in the noise: Marek, Data Engineer, Warsaw. The phone is about to ring."
  },
  act1: { // Anna: el brief nocturno (Acto 1)
    pl: "Cześć! Potrzebuję senior Data Engineera ze Sparkiem dla Warszawy, na trzy tygodnie — a LinkedIn jest pusty. Znajdziesz kogoś?",
    es: "¡Hola! Necesito un Data Engineer senior con Spark para Varsovia, en tres semanas — y LinkedIn está vacío. ¿Encontrarás a alguien?",
    en: "Hi! I need a senior Data Engineer with Spark for Warsaw, in three weeks — and LinkedIn is empty. Can you find someone?"
  },
  act2: { // Anna: seguimiento (Acto 2)
    pl: "Wysyłam ci szczegóły mailem. Trzy tygodnie, start w Warszawie. LinkedIn nic nie pokazuje — spróbuj X-Ray w Google.",
    es: "Te envío los detalles por correo. Tres semanas, incorporación en Varsovia. LinkedIn no muestra nada — prueba con X-Ray en Google.",
    en: "I'm emailing you the details. Three weeks, starting in Warsaw. LinkedIn shows nothing — try an X-Ray search on Google."
  },
  act3: { // Marek: saludo en la entrevista (Acto 3)
    pl: "Dzień dobry! Słyszałem, że szukacie kogoś do migracji systemu. W ostatnim projekcie samodzielnie przeprowadziłem pełną migrację.",
    es: "¡Buenos días! He oído que buscáis a alguien para una migración de sistema. En mi último proyecto lideré yo solo la migración completa.",
    en: "Good morning! I heard you're looking for someone for a system migration. In my last project I single-handedly led the full migration."
  },
  act4: { // Anna: alerta urgente (Acto 4)
    pl: "Pilne! Marek właśnie dostał ofertę od konkurencji, o dwadzieścia procent wyższą. Ma dwadzieścia cztery godziny na decyzję.",
    es: "¡Urgente! Marek acaba de recibir una oferta de la competencia, un veinte por ciento más alta. Tiene veinticuatro horas para decidir.",
    en: "Urgent! Marek just received an offer from a competitor, twenty percent higher. He has twenty-four hours to decide."
  },
  epilogue: { // Anna: veredicto (Epílogo)
    pl: "Dziękuję za przeprowadzenie tej rekrutacji. Twój sposób myślenia był bardzo wartościowy — wrócimy do Ciebie przy następnej trudnej obsadzie.",
    es: "Gracias por liderar este proceso de selección. Tu forma de pensar aportó mucho valor — volveremos a ti en la próxima vacante difícil.",
    en: "Thank you for running this hiring process. Your way of thinking added real value — we'll come back to you for the next hard-to-fill role."
  }
};

const langs = ["pl", "es", "en"].filter(l => only === "all" || l === only);
if (!langs.length) {
  console.error("Idioma no válido:", only, "(usa pl, es, en o all)");
  process.exit(1);
}

let ok = 0, fail = 0;

for (const l of langs) {
  const outDir = join(ROOT, "assets", "audio", l);
  mkdirSync(outDir, { recursive: true });
  for (const [clip, texts] of Object.entries(SCRIPTS)) {
    const file = l + "/" + clip + ".mp3";
    const voice = (l === "en" && clip === "act3") ? VOICE_MAREK_EN : VOICES[l];
    try {
      const resp = await fetch("https://api.mistral.ai/v1/audio/speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "voxtral-mini-tts-3-0",
          input: texts[l],
          voice_id: voice,
          response_format: "mp3"
        })
      });
      if (!resp.ok) {
        console.error("FALLO", file, "->", resp.status, (await resp.text()).slice(0, 200));
        fail++;
        continue;
      }
      const data = await resp.json();
      const buf = Buffer.from(data.audio_data, "base64");
      if (buf.length < 1000) {
        console.error("FALLO", file, "-> audio sospechosamente pequeño:", buf.length, "bytes");
        fail++;
        continue;
      }
      writeFileSync(join(outDir, clip + ".mp3"), buf);
      console.log("OK", file, buf.length, "bytes");
      ok++;
    } catch (e) {
      console.error("FALLO", file, "->", e?.message || e);
      fail++;
    }
  }
}

console.log("\nResumen: " + ok + " OK, " + fail + " fallos. " + (fail ? "⚠ Revisa los errores de arriba." : "✔ Todo listo."));
if (fail) process.exit(1);
