# Edge Function: `send-quote-request`

Da deployare sul tuo progetto **Supabase esterno** (non Lovable Cloud).

## 1. Secrets da configurare su Supabase

In Supabase Dashboard → Project Settings → Edge Functions → Secrets:

- `RESEND_API_KEY` → la tua API key di Resend (https://resend.com/api-keys)
- `TO_EMAIL` → `sangiorgitrasporti@gmail.com`
- `FROM_EMAIL` → es. `Sangiorgi Trasporti <preventivi@tuo-dominio-verificato.it>`  
  (in fase di test: `onboarding@resend.dev`)

## 2. config.toml (disabilita JWT)

```toml
[functions.send-quote-request]
verify_jwt = false
```

## 3. Codice — `supabase/functions/send-quote-request/index.ts`

```ts
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Tutti i campi opzionali accettano string vuota / null / undefined
const optStr = z.string().nullish().transform((v) => (v ?? "").toString().trim());

const Schema = z.object({
  nome: z.string().min(1, "Nome obbligatorio").max(200),
  azienda: optStr,
  email: z.string().email("Email non valida").max(255),
  telefono: optStr,
  tipoMerce: optStr,
  tratta: optStr,
  peso: optStr,
  volume: optStr,
  lunghezzaMax: optStr,
  doganaCH: z.boolean().nullish().transform((v) => Boolean(v)),
  noteDocumenti: optStr,
  dataPrevista: optStr,
  note: optStr,
});

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const row = (label: string, value: string) =>
  `<tr><td style="padding:6px 12px;font-weight:600;background:#f5f5f5;width:200px;">${label}</td><td style="padding:6px 12px;">${esc(value || "-")}</td></tr>`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const TO_EMAIL = Deno.env.get("TO_EMAIL") ?? "sangiorgitrasporti@gmail.com";
    const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "onboarding@resend.dev";
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY mancante");

    const body = await req.json().catch(() => ({}));
    const parsed = Schema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Dati non validi", details: parsed.error.flatten() }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const d = parsed.data;

    const html = `
      <h2 style="font-family:Arial,sans-serif;">Nuova richiesta preventivo dal sito Sangiorgi Trasporti</h2>
      <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;border:1px solid #e5e5e5;">
        ${row("Nome e Cognome", d.nome)}
        ${row("Azienda", d.azienda)}
        ${row("Email", d.email)}
        ${row("Telefono", d.telefono)}
        ${row("Tipo di merce", d.tipoMerce)}
        ${row("Tratta", d.tratta)}
        ${row("Peso (ton)", d.peso)}
        ${row("Volume (m³)", d.volume)}
        ${row("Lunghezza max (m)", d.lunghezzaMax)}
        ${row("Sdoganamento Svizzera", d.doganaCH ? "Sì" : "No")}
        ${row("Note documentazione", d.noteDocumenti)}
        ${row("Data prevista", d.dataPrevista)}
        ${row("Note", d.note)}
      </table>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: d.email,
        subject: "Nuova richiesta preventivo dal sito Sangiorgi Trasporti",
        html,
      }),
    });

    if (!resendRes.ok) {
      const text = await resendRes.text();
      console.error("Resend error:", resendRes.status, text);
      return new Response(
        JSON.stringify({ success: false, error: "Errore invio email" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
```

## 4. Deploy

```bash
supabase functions deploy send-quote-request --no-verify-jwt
```

## 5. Variabile ambiente frontend (Vercel)

```
VITE_SUPABASE_FUNCTION_URL = https://<project-ref>.supabase.co/functions/v1/send-quote-request
```

Poi **redeploy** su Vercel (Vite inietta le env a build time).
