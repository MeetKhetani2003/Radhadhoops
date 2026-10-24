"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import Lightbox from "../../components/Lightbox";

const G = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

const items = [
  { src: G(3160978, 800, 1000), span: "row-span-2", alt: "Lit diya with petals" },
  { src: G(11465621, 800, 600), span: "", alt: "Burning incense sticks" },
  { src: G(38920473, 800, 600), span: "", alt: "Puja thali with diya" },
  { src: G(34700588, 800, 1000), span: "row-span-2", alt: "Incense smoke" },
  { src: G(12430842, 800, 600), span: "", alt: "Ritual fire" },
  { src: G(16967639, 800, 600), span: "", alt: "Cows on green hills" },
  { src: G(8485807, 800, 1000), span: "row-span-2", alt: "Adorned altar with garlands" },
  { src: G(34644588, 800, 600), span: "", alt: "Diwali diyas" },
  { src: G(6634433, 800, 600), span: "", alt: "Meditation with incense" },
  { src: G(33895613, 800, 1000), span: "row-span-2", alt: "Marigold garlands" },
  { src: G(7686352, 800, 600), span: "", alt: "Decorated puja thali" },
  { src: G(5253723, 800, 600), span: "", alt: "Wood fire" },
];

export default function GalleryClient() {
  const [lb, setLb] = useState(null);
  const images = items.map((i) => i.src);

  return (
    <div className="bg-cream">
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        eyebrow="Moments & Rituals"
        title="A Glimpse Into Our World"
        subtitle="Products, rituals and the natural world that inspires everything we make."
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((it, i) => (
              <Reveal key={i} delay={(i % 4) * 0.06} className={it.span}>
                <button
                  onClick={() => setLb(i)}
                  className="group block h-full w-full overflow-hidden rounded-[6px] bg-warm cursor-pointer"
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Lightbox images={images} index={lb} setIndex={setLb} onClose={() => setLb(null)} />
    </div>
  );
}
