"use client";

import { useState } from "react";

type State = { status: "idle" | "sending" | "sent" | "error"; message?: string };

const field =
  "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-foreground placeholder:text-subtle/70 transition-colors focus:border-foreground focus:outline-none";

export function ContactForm({ email }: { email: string }) {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setState({ status: "sent" });
    } catch (err) {
      setState({ status: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (state.status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-white p-8">
        <p className="text-xl font-semibold tracking-tight">Message sent</p>
        <p className="mt-2 text-muted">Thanks for reaching out. I will reply to you by email.</p>
        <button type="button" onClick={() => setState({ status: "idle" })} className="mt-5 text-sm font-medium underline underline-offset-4 hover:text-accent">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-medium">Name</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" maxLength={120} placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-medium">Email</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" maxLength={200} placeholder="you@example.com" className={field} />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="cf-message" className="text-sm font-medium">Message</label>
        <textarea id="cf-message" name="message" required rows={6} maxLength={5000} placeholder="How can I help?" className={`${field} resize-y`} />
      </div>
      {/* Honeypot: hidden from people, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="rounded-md border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          {state.status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-subtle">
          or email <a className="underline underline-offset-4 hover:text-foreground" href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
      <p role="alert" className="mt-4 min-h-6 text-sm text-red-700">{state.status === "error" ? state.message : ""}</p>
    </form>
  );
}
