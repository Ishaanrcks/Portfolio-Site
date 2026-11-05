import { profile } from "@/data/portfolio";

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

/**
 * Sends the contact form to your inbox through Resend (https://resend.com).
 * Set these in Vercel > Project > Settings > Environment Variables:
 *   RESEND_API_KEY      (required)
 *   CONTACT_TO_EMAIL    (optional, defaults to the email in portfolio.ts)
 *   CONTACT_FROM_EMAIL  (optional, e.g. "Portfolio <hello@yourdomain.com>"; defaults to Resend's test sender)
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden field: real visitors leave it empty, bots fill it in.
  if (typeof data.website === "string" && data.website.trim() !== "") return Response.json({ ok: true });

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || name.length > 120) return Response.json({ error: "Please enter your name." }, { status: 400 });
  if (!isEmail(email) || email.length > 200) return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (message.length < 10 || message.length > 5000) return Response.json({ error: "Please write a message of at least 10 characters." }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return Response.json({ error: `The form is not set up yet. Please email ${profile.email} directly.` }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || profile.email],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      html: `<p><strong>${esc(name)}</strong> (${esc(email)})</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
      text: `${name} (${email})\n\n${message}`,
    }),
  });

  if (!res.ok) return Response.json({ error: `Could not send your message. Please email ${profile.email} directly.` }, { status: 502 });
  return Response.json({ ok: true });
}
