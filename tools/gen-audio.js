// Genera los clips de audio del juego con Voxtral TTS (Mistral).
// Uso (Windows):  set MISTRAL_API_KEY=tu_clave   y luego:  node tools/gen-audio.js
// La clave NUNCA se escribe en el código ni se commitea.
//
// CORREGIDO (v2):
//  - modelo correcto: voxtral-mini-tts-3-0
//  - voice_id (no "voice"), de la librería de voces:
//    https://docs.mistral.ai/studio/audio/text-to-speech/voices
//  - la API devuelve JSON con audio_data en base64 → hay que decodificar

import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const API_KEY = process.env.MISTRAL_API_KEY;
if (!API_KEY) {
  console.error("Falta MISTRAL_API_KEY en el entorno.");
  process.exit(1);
}

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "assets", "audio");
mkdirSync(OUT, { recursive: true });

const CLIPS = [
  {
    file: "client-brief.mp3",
    voice_id: "gb_jane_neutral",
    text: "Cześć! Potrzebuję senior Data Engineera ze Sparkiem dla Warszawy, na trzy tygodnie — a LinkedIn jest pusty. Znajdziesz kogoś?"
  },
  {
    file: "candidate-lines.mp3",
    voice_id: "gb_jane_neutral",
    text: "W ostatnim projekcie samodzielnie przeprowadziłem pełną migrację systemu. Był to duży sukces dla całego zespołu."
  }
];

for (const clip of CLIPS) {
  try {
    const resp = await fetch("https://api.mistral.ai/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "voxtral-mini-tts-3-0",
        input: clip.text,
        voice_id: clip.voice_id,
        response_format: "mp3"
      })
    });
    if (!resp.ok) {
      console.error(clip.file, "->", resp.status, await resp.text());
      continue;
    }
    const data = await resp.json();
    const buf = Buffer.from(data.audio_data, "base64");
    if (buf.length < 1000) {
      console.error(clip.file, "-> audio sospechosamente pequeño:", buf.length, "bytes");
      continue;
    }
    writeFileSync(join(OUT, clip.file), buf);
    console.log("OK", clip.file, buf.length, "bytes");
  } catch (e) {
    console.error(clip.file, "-> error:", e?.message || e);
  }
}
