"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import ArrowButton from "../../components/ArrowButton";
import { site, whatsappHref } from "../../config/site";

const detail = [
  { label: "Phone", value: site.phone, icon: "📞", href: `tel:${site.whatsappNumber}` },
  { label: "WhatsApp", value: site.phone, icon: "💬", href: whatsappHref() },
  { label: "Email", value: site.email, icon: "✉️", href: `mailto:${site.email}` },
  { label: "Business Location", value: "Punjab / Haryana, India", icon: "📍" },
];

function Field({ label, value, onChange, type = "text", required, placeholder = "" }) {
  return (
    <div>
      <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-violet-soft">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-[6px] border border-violet-brand/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-brand"
      />
    </div>
  );
}

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Failed to send message. Please reach us on WhatsApp.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please message us directly on WhatsApp or call.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    `Namaste! My name is ${form.name || "Customer"}. I submitted an inquiry for: ${form.subject || "General Inquiry"}. Message: ${form.message || ""}`
  )}`;

  return (
    <div className="bg-cream">
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in Touch"
        title="Let's Connect For Sacred Traditions."
        subtitle="Questions, bulk temple supplies or custom requirements — we are here to assist."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[40%_60%] lg:gap-20">
          {/* Details */}
          <div>
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">Direct Contact</h2>
            <p className="mt-4 text-ink-soft">
              Reach out directly to our team via phone call, WhatsApp, or email. We typically respond within a few hours.
            </p>
            <div className="mt-10 space-y-5">
              {detail.map((d) => (
                <Reveal key={d.label}>
                  <div className="flex items-start gap-4 rounded-[6px] border border-violet-brand/10 bg-cream-2 p-5">
                    <span className="text-xl">{d.icon}</span>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-violet-soft">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 block text-ink hover:text-violet-brand font-medium">
                          {d.value}
                        </a>
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
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pitambari/20 text-3xl">✓</span>
                <h3 className="font-serif text-2xl text-ink">Inquiry Received!</h3>
                <p className="max-w-md text-sm text-ink-soft leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. Your message has been sent directly to our support mailbox (<strong>{site.email}</strong>). We will get back to you shortly.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-brand px-6 py-3 text-xs font-semibold uppercase tracking-wider text-cream hover:bg-violet-deep"
                  >
                    <span>Also Message on WhatsApp</span>
                    <span className="text-pitambari">↗</span>
                  </a>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-violet-brand underline underline-offset-4 cursor-pointer px-4 py-3"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                {errorMsg && (
                  <div className="rounded-[6px] border border-rose-300 bg-rose-50 p-4 text-xs text-rose-700">
                    {errorMsg}
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your Name *" value={form.name} onChange={update("name")} required placeholder="e.g. Rameshwar" />
                  <Field label="Phone Number" value={form.phone} onChange={update("phone")} type="tel" placeholder="+91 98150 97248" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email Address" value={form.email} onChange={update("email")} type="email" placeholder="you@example.com" />
                  <Field label="Subject" value={form.subject} onChange={update("subject")} placeholder="e.g. Bulk cow dung powder inquiry" />
                </div>
                <div>
                  <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-violet-soft">Message *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    placeholder="Tell us about your requirements, questions, or temple orders..."
                    className="w-full resize-none rounded-[6px] border border-violet-brand/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-brand"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-violet-brand px-7 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-violet-deep cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span>Sending to {site.email}...</span>
                  ) : (
                    <>
                      <span>Send Message to Team</span>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

