"use client";

import { useRef, useState } from "react";
import { profile } from "@/data/profile";

type Fields = { name: string; email: string; message: string };

const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
const CONTROL_RE = /[\u0000-\u001f\u007f]/g;

function validate(v: Fields): Partial<Fields> {
  const e: Partial<Fields> = {};
  if (v.name.trim().length < 2 || v.name.length > 80) e.name = "Enter your name (2–80 characters).";
  if (!EMAIL_RE.test(v.email.trim()) || v.email.length > 254) e.email = "Enter a valid email address.";
  if (v.message.trim().length < 10 || v.message.length > 1000) e.message = "Message must be 10–1000 characters.";
  return e;
}

const field =
  "mt-1 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-fg aria-[invalid=true]:border-red-500";

/**
 * No backend, no API keys: the form validates input, then opens the visitor's
 * email app with a ready-to-send message addressed to the portfolio owner.
 */
export default function ContactForm() {
  const [values, setValues] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState("");
  const honeypot = useRef<HTMLInputElement>(null);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot.current?.value) return; // bot filled the hidden field
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("Please fix the highlighted fields.");
      return;
    }
    // Strip control characters so nothing can inject extra mail headers or lines into the subject.
    const clean = (s: string) => s.replace(CONTROL_RE, " ").trim();
    const subject = `Portfolio message from ${clean(values.name)}`;
    const body = `${values.message.trim()}\n\n${clean(values.name)}\n${clean(values.email)}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(`Your email app should open with the message ready to send. If it doesn't, email me at ${profile.email}.`);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-status">
      <div>
        <label htmlFor="cf-name" className="font-semibold">Name</label>
        <input id="cf-name" name="name" autoComplete="name" required maxLength={80} value={values.name} onChange={set("name")}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} className={field} />
        {errors.name && <p id="cf-name-err" className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="cf-email" className="font-semibold">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={set("email")}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} className={field} />
        {errors.email && <p id="cf-email-err" className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="cf-message" className="font-semibold">Message</label>
        <textarea id="cf-message" name="message" rows={6} required maxLength={1000} value={values.message} onChange={set("message")}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined} className={field} />
        {errors.message && <p id="cf-message-err" className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button type="submit" className="btn btn-primary">Send message</button>
      <p id="form-status" role="status" aria-live="polite" className="text-sm text-muted">{status}</p>
    </form>
  );
}
