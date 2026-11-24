// Thrive AI proxy - keeps your AI key secret on the server. See README.md section 2.
import { createClient } from "npm:@supabase/supabase-js@2";
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
    });
    const { data: u } = await sb.auth.getUser();
    if (!u?.user) return json({ error: "Please sign in again." }, 401);
    const key = Deno.env.get("THRIVE_AI_API_KEY");
    if (!key) return json({ error: "THRIVE_AI_API_KEY secret is not set." }, 500);
    const model = Deno.env.get("THRIVE_AI_MODEL") || "gemini-2.5-flash";
    const { messages = [], system = "" } = await req.json();
    const contents = (messages as { role: string; content: string }[]).slice(-12).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: String(m.content).slice(0, 8000) }],
    }));
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: String(system).slice(0, 4000) }] }, contents }),
    });
    const j = await r.json();
    if (!r.ok) return json({ error: "AI provider error", detail: j?.error?.message ?? r.status }, 502);
    const text = j?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? "").join("") ?? "";
    return json({ text });
  } catch (e) {
    return json({ error: "AI request failed", detail: String(e) }, 500);
  }
});
