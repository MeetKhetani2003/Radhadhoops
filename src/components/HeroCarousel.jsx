import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    eyebrow: "Rooted in Tradition",
    title: ["Sacred Traditions.", "Naturally Reimagined."],
    text: "Thoughtfully crafted cow-dung products inspired by India's timeless पूजा traditions.",
    ctas: [
      { label: "Explore Products", to: "/products", variant: "light" },
      { label: "Discover Our Story", to: "/about", variant: "outline" },
    ],
    image:
      "https://images.pexels.com/photos/3160978/pexels-photo-3160978.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1280",
  },
  {
    eyebrow: "From Nature to Ritual",
    title: ["From Gau-Dhan", "to Sacred Moments."],
    text: "Giving naturally available materials a meaningful place in everyday पूजा and traditional practices.",
    ctas: [{ label: "Explore the Collection", to: "/products", variant: "light" }],
    image:
      "https://images.pexels.com/photos/38920473/pexels-photo-38920473.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1280",
  },
  {
    eyebrow: "The Radha Dhoops Collection",
    title: ["A More Natural Way", "to Continue Tradition."],
    text: "Discover a growing collection of पूजा products created with purpose, tradition and thoughtful craftsmanship.",
    ctas: [{ label: "View Products", to: "/products", variant: "light" }],
    image:
      "https://images.pexels.com/photos/34644588/pexels-photo-34644588.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1280",
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

  return (
    <section
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-violet-deep"
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
      {/* Background images */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.1 }, scale: { duration: 6, ease: "linear" } }}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays - Elegant cinematic fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-deep/95 via-violet-deep/50 to-transparent sm:w-4/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-violet-deep via-violet-deep/10 to-violet-deep/30 opacity-90" />
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.05]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl pt-16 text-cream">
            <AnimatePresence mode="wait">
              <motion.div key={index}>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-6 inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-pitambari"
                >
                  <span className="h-px w-10 bg-pitambari" />
                  {slide.eyebrow}
                </motion.span>

                <h1 className="font-serif text-[2.75rem] leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-[5rem] lg:text-[5.5rem] drop-shadow-lg">
                  {slide.title.map((line, i) => (
                    <span key={i} className="block overflow-hidden">
                      <motion.span
                        className="block"
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-7 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg"
                >
                  {slide.text}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.6 }}
                  className="mt-9 flex flex-wrap gap-4"
                >
                  {slide.ctas.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      className={`group inline-flex items-center gap-3 rounded-full px-8 py-4 text-[0.85rem] font-medium uppercase tracking-[0.18em] transition-all duration-500 ${
                        c.variant === "light"
                          ? "bg-cream text-violet-deep shadow-[0_0_20px_rgba(255,253,247,0.15)] hover:bg-pitambari hover:shadow-[0_0_30px_rgba(230,181,46,0.3)] hover:-translate-y-0.5"
                          : "border border-cream/30 bg-cream/5 text-cream backdrop-blur-md hover:border-pitambari hover:bg-cream/10 hover:text-pitambari hover:-translate-y-0.5"
                      }`}
                    >
                      {c.label}
                      <svg className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls & progress */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-5 pb-8 sm:px-8">
          <div className="flex items-center gap-5">
            <button onClick={prev} className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-pitambari hover:text-pitambari" aria-label="Previous slide">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button onClick={next} className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-pitambari hover:text-pitambari" aria-label="Next slide">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <span className="ml-2 font-serif text-sm text-cream/80">
              <span className="text-pitambari">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-cream/40">—</span>
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="relative h-[3px] w-12 overflow-hidden rounded-full bg-cream/25"
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
