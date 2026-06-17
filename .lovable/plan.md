## Verifica build Vite

Non posso eseguire `npm run build` manualmente per due motivi:

1. **Plan mode** — in questa fase non posso eseguire comandi di stato (build, install, deploy).
2. **Policy del progetto** — la build viene eseguita automaticamente dall'harness dopo ogni modifica; non devo lanciarla a mano (creerebbe rumore e duplicazione).

### Cosa è già stato verificato
La modifica precedente ha riordinato `src/index.css` così:

```
@import url('...Inter...');   ← riga 1
/* commento */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Questo è l'ordine richiesto da PostCSS e risolve esattamente l'errore `@import must precede all other statements`.

### Come confermare il fix
- L'harness build viene rilanciato in automatico: se compare ancora un errore, lo vedrai segnalato nell'interfaccia.
- Puoi anche aprire la **Preview** (già attiva su `/contatti`): se la pagina si carica con il font Inter applicato e senza schermata di errore Vite, il build è andato a buon fine.
- Se invece vedi un nuovo errore in console o nell'overlay Vite, incollamelo e lo analizzo.

### Prossimo passo
Nessuna modifica al codice necessaria ora. Se confermi che la preview si carica correttamente, possiamo considerare chiuso il fix CSS.
