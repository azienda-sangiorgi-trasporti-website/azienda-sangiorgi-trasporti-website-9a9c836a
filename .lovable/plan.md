## Fix definitivo build error `@import`

**1. `src/index.css`** — rimuovere la prima riga:
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```
Il file inizierà direttamente con il commento `/* Sangiorgi Alessandro Trasporti - Premium Corporate Design System */` seguito dalle direttive `@tailwind`. Nessun'altra modifica al CSS (colori, layer, componenti invariati).

**2. `index.html`** — aggiungere dentro `<head>` (subito dopo il `<meta name="viewport">`) i tag di caricamento font:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```
Nessun'altra modifica a `index.html` (title, meta, JSON-LD invariati).

**3. Verifica** — eseguire `npx vite build` per confermare che l'errore `@import must precede all other statements` sia risolto.

Non vengono toccati: form Contatti, edge functions, Supabase, Resend, env vars Vercel, layout, font-family CSS (resta `'Inter', system-ui, ...` in `body`).
