# 🎯 HeadHunter Challenge

Juego web estático (HTML + CSS + JS vanilla, sin frameworks ni build step) que mide las habilidades de reclutadores y headhunters. Campaña de marketing B2B: quienes juegan y puntúan bien son leads para un servicio de sourcing de puestos especialistas. Mobile-first, pensado para compartirse en LinkedIn.

## Estructura

```
index.html      — 4 actos narrativos + epílogo + modal RGPD
styles.css      — tema oscuro verde + dorado, Ken Burns, chat, transiciones
app.js          — CONFIG, I18N (pl/es/en), flujo narrativo, heurística demo
worker/         — Cloudflare Worker (Mistral AI): /api/grade, /api/candidate, /api/letter
  worker.js
  wrangler.toml
assets/img/     — placeholders SVG + README con prompts de generación
assets/audio/   — placeholders de audio + README
tools/gen-audio.js — genera los clips con Voxtral TTS (clave por env, nunca en código)
```

## Experiencia narrativa (4 actos + epílogo, 7–10 min)

1. **Acto 1 — El Brief**: despacho de noche con efecto Ken Burns, audio del cliente con subtítulos visibles, elección sí/no (el "no" da giro humorístico y reinicia).
2. **Acto 2 — La Búsqueda**: email del cliente renderizado como cliente de correo; elección de sourcing; feedback como respuesta del cliente.
3. **Acto 3 — La Entrevista**: chat con avatar del candidato, indicador "escribiendo…", 2–3 mensajes que puntúa el proxy vía `/api/grade` y responde el candidato vía `/api/candidate` (persona evasiva definida en el system prompt).
4. **Acto 4 — El Twist**: contraoferta urgente; decisión ética del jugador.
5. **Epílogo — El Veredicto**: carta del cliente generada vía `/api/letter`, puntuación 0–100, badge, compartir y CTA.

Rendimiento: lazy-load de imágenes de escenas (`loading="lazy"` + precarga manual al avanzar), preload del audio siguiente, todo el proyecto ~66 KB con placeholders (objetivo < 2.5 MB con assets reales).

## Despliegue

1. **Sitio estático**: sube `index.html`, `styles.css` y `app.js` a Cloudflare Pages (o Netlify/Vercel). Sin build step.
2. **Worker**: entra en `worker/` y ejecuta:
   ```bash
   npm install -g wrangler
   wrangler login
   wrangler secret put MISTRAL_API_KEY   # nunca hardcodeada en el código
   # edita wrangler.toml y pon tu dominio del juego en ALLOWED_ORIGIN
   wrangler deploy
   ```
3. **Configura el frontend**: en `app.js`, pon `DEMO_MODE: false` y la URL del worker en `CONFIG.API_ENDPOINT` (p. ej. `https://headhunter-grader.tu-cuenta.workers.dev/api/grade`). Configura también `CTA_URL` y `LEAD_ENDPOINT`.

   > Antes de lanzar la campaña, haz una prueba real de recepción del lead: envía un formulario de prueba y verifica que el registro llegue correctamente a tu endpoint (Tally/Supabase). El envío usa `mode: "no-cors"` con `Content-Type: text/plain;charset=UTF-8`, así que si el body no llega, los leads se perderían silenciosamente.
4. **Clave de Mistral**: crea una clave de API de Mistral solo para este proyecto en la consola de Mistral y fija un límite de gasto mensual antes de lanzar la campaña.

## Notas de seguridad

- Ninguna API key vive en el frontend; la evaluación pasa por el Worker.
- El Worker valida el origen (CORS con `ALLOWED_ORIGIN`), limita a 10 peticiones/hora por IP (Map en memoria; en producción conviene un Rate Limiting Binding de Cloudflare) y tiene un tope global de 500 evaluaciones/día (`DAILY_CAP`).
- `DEMO_MODE: true` usa una heurística local para probar el flujo sin backend.

## Placeholders a sustituir

- `[TU-EMAIL]` → email de contacto (CTA `mailto:`)
- `[TU EMPRESA]` / `[EMAIL]` → datos del responsable en la política de privacidad
- `[URL-DEL-WORKER]` → URL del Worker desplegado
- `[LEAD-ENDPOINT]` → endpoint de leads (Tally/Supabase/etc.)
