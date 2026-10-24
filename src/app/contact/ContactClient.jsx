"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import ArrowButton from "../../components/ArrowButton";
import { site, whatsappHref } from "../../config/site";

const detail = [
  { label: "Phone", value: site.phone, icon: "📞" },
  { label: "WhatsApp", value: "Chat with us", icon: "💬", href: whatsappHref() },
  { label: "Email", value: site.email, icon: "✉️" },
  { label: "Address", value: site.address, icon: "📍" },
];

function Field({ label, value, onChange, type = "text", required }) {
  return (
    <div>
      <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-violet-soft">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-[6px] border border-violet-brand/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-brand"
      />
    </div>
  );
}

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-cream">
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in Touch"
        title="Let's Create Something Meaningful."
        subtitle="Questions, collaborations or bulk enquiries — we'd love to hear from you."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[40%_60%] lg:gap-20">
          {/* Details */}
          <div>
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">Contact Information</h2>
            <p className="mt-4 text-ink-soft">Reach out through any channel below. Details will be updated with our official business information.</p>
            <div className="mt-10 space-y-5">
              {detail.map((d) => (
                <Reveal key={d.label}>
                  <div className="flex items-start gap-4 rounded-[6px] border border-violet-brand/10 bg-cream-2 p-5">
                    <span className="text-xl">{d.icon}</span>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-violet-soft">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} target="_blank" rel="noreferrer" className="mt-1 block text-ink hover:text-violet-brand">{d.value}</a>
                      ) : (
                        <p className="mt-1 text-ink">{d.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[8px] border border-violet-brand/10 bg-cream-2 p-6 sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pitambari/20 text-3xl">🪔</span>
                <h3 className="font-serif text-2xl text-ink">Thank You!</h3>
                <p className="max-w-sm text-ink-soft">
                  Your message has been noted on this device. This is a frontend-only form — please reach us on WhatsApp for a quick response.
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-3">
                  <ArrowButton href={whatsappHref()} variant="solid">Message on WhatsApp</ArrowButton>
                  <button onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }} className="text-sm text-violet-brand underline underline-offset-4 cursor-pointer">Send another</button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" value={form.name} onChange={update("name")} required />
                  <Field label="Phone" value={form.phone} onChange={update("phone")} type="tel" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" value={form.email} onChange={update("email")} type="email" />
                  <Field label="Subject" value={form.subject} onChange={update("subject")} />
                </div>
                <div>
                  <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-violet-soft">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    className="w-full resize-none rounded-[6px] border border-violet-brand/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-brand"
                  />
                </div>
                <button type="submit" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-violet-brand px-7 py-4 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:bg-violet-deep cursor-pointer">
                  Send Message
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
