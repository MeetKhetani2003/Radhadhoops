"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import ArrowButton from "../../components/ArrowButton";
import { whatsappHref } from "../../config/site";

const faqs = [
  { q: "What are Radha Dhoops products made of?", a: "Our products are crafted primarily from naturally available cow dung, shaped and finished with care for पूजा and traditional rituals." },
  { q: "Are the products suitable for daily पूजा?", a: "Yes. Our diyas, dhoop and agarbatti are designed for daily worship as well as festivals and special occasions." },
  { q: "Do you make exaggerated health or environmental claims?", a: "No. We keep our messaging honest and believable — focusing on tradition, purpose and thoughtful craft rather than unsupported claims." },
  { q: "How should I store the products?", a: "Store in a cool, dry place away from moisture. Specific guidance is provided on each product page." },
  { q: "Do you sell machines?", a: "Radha Dhoops Machines is a separate business category. The catalogue is coming soon and fully ready for future products." },
  { q: "How can I place an order or enquiry?", a: "You can reach us on WhatsApp or through the contact form. Ordering and payment infrastructure will be added in future." },
  { q: "Can products be gifted?", a: "Yes. Several of our products, including the Puja Essentials set, are presented in a premium, gift-ready form." },
  { q: "Where are the products made?", a: "Our products are rooted in Indian craftsmanship. Detailed sourcing information will be shared as the brand grows." },
];

function Item({ q, a, open, onClick }) {
  return (
    <div className="border-b border-violet-brand/12">
      <button onClick={onClick} className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer">
        <span className="font-medium text-ink">{q}</span>
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-brand/25 text-violet-brand transition-transform ${open ? "rotate-45" : ""}`}>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
        </span>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-ink-soft">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqClient() {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-cream">
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        eyebrow="Good to Know"
        title="Frequently Asked Questions"
        subtitle="Everything you might want to know about Radha Dhoops."
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
          <div className="mt-12 flex flex-col items-center gap-4 rounded-[8px] border border-violet-brand/10 bg-cream-2 p-8 text-center">
            <p className="font-serif text-xl text-ink">Still have questions?</p>
            <ArrowButton href={whatsappHref()} variant="solid">Ask on WhatsApp</ArrowButton>
          </div>
        </div>
      </section>
    </div>
  );
}
