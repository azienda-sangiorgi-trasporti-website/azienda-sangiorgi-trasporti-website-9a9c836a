

# Piano: Logo Google SEO + Structured Data

## Cosa faremo

1. **Copiare il logo** fornito (`Gemini_Generated_Image_5szoyq5szoyq5szo.png`) in `public/logo-square.png`
2. **Aggiungere JSON-LD** structured data nel `<head>` di `index.html` con Organization schema
3. **Bonus**: rimuovere "operativi dal 2017" dalla meta description (coerenza con richiesta precedente)

## Dettagli tecnici

### File modificati

| File | Modifica |
|------|----------|
| `public/logo-square.png` | Nuovo file — copia del logo caricato |
| `index.html` | Aggiunta `<script type="application/ld+json">` prima di `</head>` |

### JSON-LD da inserire

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sangiorgi Alessandro Trasporti",
  "url": "https://sangiorgitrasporti.com",
  "logo": "https://sangiorgitrasporti.com/logo-square.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39-340-810-7572",
    "contactType": "customer service"
  }
}
</script>
```

### Cosa NON tocchiamo
- Favicon (già funzionante)
- Nessun altro file o componente

### Nota
Il logo PNG caricato ha sfondo trasparente e buona risoluzione. Google richiede minimo 112x112px — questo file lo supera ampiamente. Dopo il deploy su `sangiorgitrasporti.com`, il logo sarà accessibile all'URL `https://sangiorgitrasporti.com/logo-square.png` e Google potrà indicizzarlo.

