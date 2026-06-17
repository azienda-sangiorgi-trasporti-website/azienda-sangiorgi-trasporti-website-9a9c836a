## Fix build error CSS — ordine @import in `src/index.css`

**Problema**: Vite/PostCSS richiede che `@import` sia la primissima istruzione del file. Attualmente in `src/index.css` l'ordine è:
1. `@tailwind base/components/utilities;`
2. Commento `/* Sangiorgi... */`
3. `@import url('https://fonts.googleapis.com/css2?family=Inter...')`

Sia le direttive `@tailwind` sia il commento precedono l'`@import`, causando l'errore.

### Modifica

Riordinare le prime righe di `src/index.css` così:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* Sangiorgi Alessandro Trasporti - Premium Corporate Design System */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Nessun'altra modifica al file (colori, token, layer, animazioni restano invariati).

### Non toccato
- Nessun altro file
- Nessuna logica form / Supabase / Resend
- Nessun design token modificato
