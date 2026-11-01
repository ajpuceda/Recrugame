# 🎯 HeadHunter Challenge

Juego web estático (HTML + CSS + JS vanilla, sin frameworks ni build step) que mide las habilidades de reclutadores y headhunters. Campaña de marketing B2B: quienes juegan y puntúan bien son leads para un servicio de sourcing de puestos especialistas. Mobile-first, pensado para compartirse en LinkedIn.

## Estructura

```
index.html      — sitio estático (pantallas, modal RGPD)
styles.css      — tema oscuro verde + acento dorado
app.js          — CONFIG, I18N (pl/es), flujo del juego, heurística demo
worker/         — Cloudflare Worker que evalúa el nivel 3 con Mistral AI
  worker.js
  wrangler.toml
```

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
