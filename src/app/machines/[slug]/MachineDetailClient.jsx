"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SectionHeading from "../../../components/SectionHeading";
import ArrowButton from "../../../components/ArrowButton";
import { whatsappHref } from "../../../config/site";

function Accordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-violet-brand/12">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="font-medium text-ink">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-brand/25 text-violet-brand transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-ink-soft">{a}</p>
      </motion.div>
    </div>
  );
}

export default function MachineDetailClient({ machine }) {
  const [main, setMain] = useState(0);

  const specs = [
    { label: "Capacity", value: machine.capacity },
    { label: "Dimensions", value: machine.dimensions },
    { label: "Power", value: machine.power },
    ...(machine.specifications || []),
  ].filter((s) => s.value);

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="pb-16 pt-28 sm:pt-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Machines", href: "/machines" },
              { label: machine.name },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[55%_45%] lg:gap-14">
            {/* Gallery */}
            <div>
              <div className="overflow-hidden rounded-[6px] bg-warm sm:aspect-[4/3] aspect-[4/3]">
                <motion.img
                  key={main}
                  src={machine.images[main]}
                  alt={machine.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover"
                />
              </div>
              {machine.images.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {machine.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setMain(i)}
                      className={`h-20 w-20 overflow-hidden rounded-[4px] border-2 transition-colors sm:h-24 sm:w-24 cursor-pointer ${
                        main === i ? "border-violet-brand" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="lg:pt-2">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-violet-soft">
                Machine
              </span>
              <h1 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-5xl">
                {machine.name}
              </h1>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft">
                {machine.shortDescription}
              </p>

              {machine.features?.length > 0 && (
                <ul className="mt-7 space-y-3">
                  {machine.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pitambari/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-pitambari" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-9 flex flex-wrap gap-4">
                <ArrowButton href={whatsappHref()} variant="solid">Enquire on WhatsApp</ArrowButton>
                <ArrowButton href="/contact" variant="outline">Contact Us</ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full description */}
      {machine.description && (
        <section className="border-t border-violet-brand/10 bg-cream-2 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-violet-soft">About This Machine</span>
            <p className="mt-5 font-serif text-xl leading-relaxed text-ink sm:text-2xl">{machine.description}</p>
          </div>
        </section>
      )}

      {/* Specifications */}
      <section className="border-y border-violet-brand/10 bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="Technical Details" title="Specifications" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[6px] border border-violet-brand/10 bg-violet-brand/10 sm:grid-cols-2">
            {specs.map((s) => (
              <div key={s.label} className="bg-cream-2 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-violet-soft">{s.label}</p>
                <p className="mt-1.5 text-ink">{s.value}</p>
              </div>
            ))}
          </div>

          {machine.applications?.length > 0 && (
            <div className="mt-6 rounded-[6px] border border-pitambari/40 bg-pitambari/10 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-violet-brand">Applications</p>
              <p className="mt-1.5 text-sm text-ink-soft">{machine.applications.join(" • ")}</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      {machine.faqs?.length > 0 && (
        <section className="bg-cream-2 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
            <div className="mt-8">
              {machine.faqs.map((f) => (
                <Accordion key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
