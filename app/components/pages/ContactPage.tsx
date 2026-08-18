"use client";

import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { partnerProfiles } from "../../data/contact";
import { locations } from "../../data/site";
import { Icon } from "../Icon";
import { PageHero } from "../PageHero";
import { SocialLinks } from "../SocialLinks";
import { LocationCard } from "../ui";

type FormState = { name: string; email: string; company: string; phone: string; interest: string; message: string; consent: boolean };

const initialForm: FormState = { name: "", email: "", company: "", phone: "", interest: "Essential", message: "", consent: false };

export function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const fields = [
    { id: "name", label: "Name", type: "text", required: true },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "company", label: "Company (optional)", type: "text", required: false },
    { id: "phone", label: "Phone (optional)", type: "tel", required: false },
  ] as const;

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setTouched(true);
    if (!form.name || !form.email || !form.consent) return;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  };

  return (
    <div>
      <PageHero kicker="Contact" title="Tell us what you sell and where you are" body="We will tell you what we would do, what it costs, and whether you need us at all. First reply within 8 business hours." />

      <section className="reveal mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 px-5 py-[clamp(48px,7vw,88px)] sm:px-8 md:grid-cols-2 lg:gap-14 lg:px-12">
        <form onSubmit={submit} className="cut-card grid gap-5 rounded-[18px] border border-line bg-card p-[30px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields.map((field) => {
              const invalid = touched && field.required && !form[field.id];
              return (
                <div key={field.id} className="grid gap-1.5">
                  <label htmlFor={field.id} className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted">{field.label}</label>
                  <input id={field.id} name={field.id} type={field.type} value={form[field.id]} onChange={(event) => setForm({ ...form, [field.id]: event.target.value })} aria-invalid={invalid} className="min-h-12 rounded-[10px] border border-line bg-page px-3.5 text-ink" />
                  {invalid && <p className="text-[12.5px] text-amber-text">{field.id === "email" ? "Enter an email we can reply to." : "This one we need."}</p>}
                </div>
              );
            })}
          </div>
          <div className="grid gap-1.5">
            <span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted">Interest</span>
            <div className="flex flex-wrap gap-2">
              {["Essential", "Growth", "Custom", "Something else"].map((interest) => <button key={interest} type="button" onClick={() => setForm({ ...form, interest })} className={`min-h-11 cursor-pointer rounded-full border px-[18px] text-sm ${form.interest === interest ? "border-inverse bg-inverse text-on-inverse" : "border-line bg-transparent text-ink"}`}>{interest}</button>)}
            </div>
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="message" className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted">What do you need</label>
            <textarea id="message" rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="A shop in Ettelbruck, no website yet, we want to be on Maps." className="resize-y rounded-[10px] border border-line bg-page p-3.5 text-ink placeholder:text-muted" />
          </div>
          <label className="flex items-start gap-3 text-sm leading-[1.5] text-muted">
            <input type="checkbox" checked={form.consent} onChange={(event) => setForm({ ...form, consent: event.target.checked })} className="mt-0.5 h-5 w-5 accent-amber" />
            <span>I agree that Luminetis may store what I send in order to reply to me.</span>
          </label>
          {touched && !form.consent && <p className="text-[12.5px] text-amber-text">Please confirm that we may store your message to reply.</p>}
          <button type="submit" disabled={sending} className="flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-[10px] border-0 bg-amber px-6 font-medium text-on-amber disabled:cursor-wait disabled:opacity-70">
            {sent ? "Sent" : sending ? "Sending…" : "Send message"}
            <Icon name={sent ? "check" : sending ? "hourglass_top" : "send"} className="text-[20px]" />
          </button>
          <p aria-live="polite" className="min-h-5 text-sm text-link">{sent ? "Thanks. We will reply within one business day." : touched && (!form.name || !form.email) ? "Two fields still need filling in." : ""}</p>
        </form>

        <div className="grid gap-5">
          <div className="cut-card-reverse rounded-[18px] border border-line bg-card p-[26px]">
            <p className="mb-[18px] font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted">Direct</p>
            <a href="mailto:info@luminetis.com" className="flex flex-wrap items-center gap-3.5 border-t border-line py-3.5 transition hover:text-link">
              <Icon name="mail" className="text-[20px] text-amber-text" />
              <span className="flex-1 text-sm text-muted">Email</span>
              <span className="font-mono text-sm">info@luminetis.com</span>
            </a>
            {partnerProfiles.map((partner) => (
              <a key={partner.name} href={partner.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-wrap items-center gap-3.5 border-t border-line py-3.5 transition hover:text-link" aria-label={`${partner.name} · LinkedIn`}>
                <FaLinkedinIn aria-hidden="true" className="text-[20px] text-amber-text" />
                <span className="flex-1 text-sm text-muted">{partner.name}</span>
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
            ))}
            <div className="flex flex-wrap items-center gap-3.5 border-t border-line py-3.5">
              <Icon name="schedule" className="text-[20px] text-amber-text" />
              <span className="flex-1 text-sm text-muted">First reply</span>
              <span className="font-mono text-sm">within 8 business hours</span>
            </div>
            <SocialLinks className="border-t border-line pt-5" />
          </div>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">{locations.slice(0, 2).map((location) => <LocationCard key={location.city} {...location} />)}</div>
          <div className="rounded-[18px] bg-inverse p-6 text-sm leading-[1.65] text-on-inverse">We reply within 8 business hours, usually the same day. Site-down incidents on a care plan are acknowledged within two hours during business hours.</div>
        </div>
      </section>
    </div>
  );
}
