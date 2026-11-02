// Genera los clips de audio del juego con Voxtral TTS (Mistral).
// Uso:  MISTRAL_API_KEY=tu_clave node tools/gen-audio.js
// La clave NUNCA se escribe en el código ni se commitea.

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
    text: "Necesito un Data Engineer senior con Spark para Varsovia, en tres semanas, y LinkedIn está vacío."
  },
  {
    file: "candidate-lines.mp3",
    text: "En mi último proyecto lideré la migración completa del sistema. Fue un gran logro para todo el equipo."
  }
];

for (const clip of CLIPS) {
  const resp = await fetch("https://api.mistral.ai/v1/audio/speech", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "voxtral-tts-latest",
      input: clip.text,
      voice: "default"
    })
  });
  if (!resp.ok) {
    console.error(clip.file, "->", resp.status, await resp.text());
    continue;
  }
  const buf = Buffer.from(await resp.arrayBuffer());
  writeFileSync(join(OUT, clip.file), buf);
  console.log("OK", clip.file, buf.length, "bytes");
}
