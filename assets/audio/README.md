# Audio placeholders — HeadHunter Challenge

Genera los clips reales con `node tools/gen-audio.js` (usa Voxtral TTS de Mistral; la clave va por variable de entorno `MISTRAL_API_KEY`, nunca en el código).

| Archivo | Escena | Texto a sintetizar |
|---|---|---|
| `client-brief.mp3` | Acto 1 | "Necesito un Data Engineer senior con Spark para Varsovia, en 3 semanas, y LinkedIn está vacío." (y variantes pl/en en I18N) |
| `candidate-lines.mp3` | Acto 3 | Líneas del candidato (modo demo / precarga) |

Los subtítulos siempre están visibles en pantalla al reproducir (ver `subtitle-brief` en `index.html`).
