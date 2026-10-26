"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { site } from "../config/site";

const slides = [
  {
    eyebrow: "★ 4.9/5 Rated • 100% Desi Gir Cow Dung",
    title: ["Pure Vedic Traditions.", "Naturally Reimagined."],
    text: "Handcrafted chemical-free, charcoal-free cow-dung puja products created for serene daily prayers and sacred rituals.",
    primaryCta: { label: "Shop Puja Essentials", to: "/products" },
    whatsappMsg: "Namaste! I want to order Radha Dhoops pure cow dung puja products.",
    card: {
      title: "Sabrani Sambrani Cups",
      category: "Pure Havan Aroma",
      price: "₹249",
      rating: "5.0 ★",
      img: "/products/sabrani-cups.png",
      slug: "sabrani-cups",
    },
    image:
      "https://images.pexels.com/photos/3160978/pexels-photo-3160978.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1280",
  },
  {
    eyebrow: "New Launch • Sacred Gomay Churna",
    title: ["Organic Cow Dung", "Powder for Havan & Soil."],
    text: "100% pure, sun-dried Desi Gir cow dung powder for sacred agnihotra, havan rituals, and thriving organic plant nutrition.",
    primaryCta: { label: "Explore Cow Dung Powder", to: "/products/cow-dung-powder" },
    whatsappMsg: "Namaste! I want to enquire about Organic Desi Cow Dung Powder.",
    card: {
      title: "Desi Cow Dung Powder",
      category: "100% Gir Cow",
      price: "₹199",
      rating: "4.9 ★",
      img: "/products/cow-dung-powder.jpg",
      slug: "cow-dung-powder",
    },
    image:
      "/products/cow-dung-powder.jpg",
  },
  {
    eyebrow: "Authentic Temple Fragrance • Charcoal Free",
    title: ["Pure Sabrani Dhoops", "& Sacred Diyas."],
    text: "Pre-filled ready-to-light sambrani cups and herbal dhoop sticks that purify indoor air, repel insects, and bring deep peace.",
    primaryCta: { label: "Explore Dhoop Collection", to: "/products?cat=dhoop" },
    whatsappMsg: "Namaste! I want to order Sabrani Dhoop and Diyas.",
    card: {
      title: "Sabrani Diyas (12 Pack)",
      category: "Eco-Friendly Clay",
      price: "₹180",
      rating: "4.9 ★",
      img: "/products/sabrani-diya.png",
      slug: "sabrani-diya",
    },
    image:
      "https://images.pexels.com/photos/38920473/pexels-photo-38920473.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1280",
  },
];

const DURATION = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);

  const go = useCallback((n) => setIndex((n + slides.length) % slides.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [index, paused, next]);

  const slide = slides[index];
  const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(slide.whatsappMsg)}`;

  return (
    <section
      className="relative flex min-h-[580px] sm:min-h-[620px] lg:h-[86vh] lg:min-h-[660px] w-full flex-col justify-between overflow-hidden bg-violet-deep pt-24 sm:pt-28 lg:pt-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (startX.current === null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (dx > 50) prev();
        else if (dx < -50) next();
        startX.current = null;
      }}
    >
      {/* Background imagery */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.9 }, scale: { duration: 6, ease: "linear" } }}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-deep/95 via-violet-deep/60 to-violet-deep/20 sm:w-4/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-violet-deep via-transparent to-violet-deep/50 opacity-90" />
      <div className="absolute inset-0 bg-black/15 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.05]" />

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-5 sm:px-8 py-6">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-8 text-cream">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {/* Eyebrow Pill */}
                <div className="mb-3.5 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-pitambari/35 bg-violet-deep/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-pitambari shadow-sm backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-pitambari animate-pulse" />
                  {slide.eyebrow}
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-3xl leading-[1.08] tracking-tight sm:text-5xl md:text-[3.6rem] lg:text-[4.1rem] drop-shadow-md">
                  {slide.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                {/* Subtitle */}
                <p className="mt-3.5 sm:mt-4 max-w-xl text-xs leading-relaxed text-cream/85 sm:text-sm md:text-base">
                  {slide.text}
                </p>

                {/* Polished Button Arrangement */}
                <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Primary CTA */}
                  <Link
                    href={slide.primaryCta.to}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-pitambari px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-[0.78rem] font-bold uppercase tracking-wider text-violet-deep shadow-md hover:bg-cream hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <span>{slide.primaryCta.label}</span>
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>

                  {/* Secondary WhatsApp CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/35 bg-cream/10 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-[0.78rem] font-semibold uppercase tracking-wider text-cream backdrop-blur-md hover:bg-cream hover:text-violet-deep transition-all hover:-translate-y-0.5"
                  >
                    <svg className="h-3.5 w-3.5 text-pitambari fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Desktop Luxury Spotlight Card) */}
          {slide.card && (
            <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  className="w-full max-w-[280px] rounded-[10px] border border-white/20 bg-violet-deep/60 p-3.5 shadow-2xl backdrop-blur-xl"
                >
                  <div className="relative aspect-square overflow-hidden rounded-[8px] bg-warm/20">
                    <img
                      src={slide.card.img}
                      alt={slide.card.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute top-2 left-2 rounded-full bg-violet-brand px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-cream shadow">
                      {slide.card.category}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-cream">
                    <div>
                      <p className="font-serif text-base font-semibold leading-snug">{slide.card.title}</p>
                      <p className="text-xs text-pitambari font-bold mt-0.5">{slide.card.price}</p>
                    </div>
                    <span className="text-xs text-pitambari font-medium">{slide.card.rating}</span>
                  </div>
                  <Link
                    href={`/products/${slide.card.slug}`}
                    className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-pitambari/40 py-2 text-center text-[0.7rem] font-semibold uppercase tracking-wider text-pitambari hover:bg-pitambari hover:text-violet-deep transition-colors"
                  >
                    <span>View Product</span>
                    <span>→</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Slider Navigation Bar (Separated from buttons) */}
      <div className="relative z-20 border-t border-white/10 bg-violet-deep/40 backdrop-blur-sm py-3.5 sm:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Slide Arrow Controls & Counter */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-pitambari hover:text-pitambari cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={next}
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-pitambari hover:text-pitambari cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <span className="ml-2 font-serif text-xs text-cream/75">
              <span className="font-semibold text-pitambari">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-1.5 text-cream/40">/</span>
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="relative h-1.5 w-7 sm:w-10 overflow-hidden rounded-full bg-cream/25 cursor-pointer"
                aria-label={`Go to slide ${i + 1}`}
              >
                {i === index && !paused && (
                  <motion.span
                    key={index}
                    className="absolute inset-y-0 left-0 bg-pitambari"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                )}
                {i === index && paused && <span className="absolute inset-0 bg-pitambari" />}
                {i < index && <span className="absolute inset-0 bg-cream/60" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

