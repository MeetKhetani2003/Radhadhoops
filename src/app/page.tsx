import Link from "next/link";
import HeroCarousel from "../components/HeroCarousel";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import CTASection from "../components/CTASection";
import ArrowButton from "../components/ArrowButton";
import { categories } from "../data/categories";
import { featuredProducts } from "../data/products";

const pillars = [
  { n: "01", label: "Natural", text: "Built around naturally available materials." },
  { n: "02", label: "Traditional", text: "Inspired by timeless Indian पूजा practices." },
  { n: "03", label: "Thoughtful", text: "Designed with care, purpose and consistency." },
];

const whyCards = [
  { title: "Rooted in Tradition", text: "Inspired by timeless Indian पूजा practices." },
  { title: "Naturally Focused", text: "Built around naturally available materials." },
  { title: "Thoughtfully Crafted", text: "Designed with care and consistency." },
  { title: "Purpose Driven", text: "Creating products with a meaningful purpose." },
  { title: "Indian at Heart", text: "Rooted in Indian culture, modern in presentation." },
];

const stages = [
  { n: "01", title: "Natural Resource", text: "A naturally available material, gathered responsibly." },
  { n: "02", title: "Thoughtful Processing", text: "Prepared with care and consistency." },
  { n: "03", title: "Purposeful Product", text: "Shaped into products for पूजा and ritual." },
  { n: "04", title: "Sacred Use", text: "Given a meaningful place in tradition." },
];

const galleryPreview = [
  "https://images.pexels.com/photos/34644588/pexels-photo-34644588.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=900",
  "https://images.pexels.com/photos/11465621/pexels-photo-11465621.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=520",
  "https://images.pexels.com/photos/38920473/pexels-photo-38920473.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=520",
  "https://images.pexels.com/photos/12430842/pexels-photo-12430842.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=900",
];

export default function HomePage() {
  const feat = featuredProducts();

  return (
    <div>
      <HeroCarousel />

      {/* 02 — Brand Philosophy */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[6px]">
                <img
                  src="https://images.pexels.com/photos/3160978/pexels-photo-3160978.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1200"
                  alt="A lit cow dung diya surrounded by flower petals"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-[6px] border border-violet-brand/10 bg-cream p-5 shadow-xl sm:block">
                <p className="font-serif text-4xl text-violet-brand">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-soft">Natural Material</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="The Radha Dhoops Philosophy"
              title="Tradition Can Evolve Without Losing Its Soul."
              subtitle="Radha Dhoops creates cow-dung-based products inspired by traditional पूजा practices — presented through a modern, thoughtful brand. We connect nature, tradition, transformation and sacred use into one meaningful journey."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.1}>
                  <div className="border-t border-violet-brand/15 pt-4">
                    <span className="font-serif text-2xl text-pitambari">{p.n}</span>
                    <h4 className="mt-2 text-sm font-semibold uppercase tracking-wide text-violet-brand">{p.label}</h4>
                    <p className="mt-1.5 text-sm text-ink-soft">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Product Categories */}
      <section className="bg-cream-2 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Explore Our Collection"
            title="Purposeful Products Inspired by India's Sacred Traditions."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-6 md:grid-rows-2">
            {categories.map((cat, i) => {
              const spans = [
                "md:col-span-4 md:row-span-1",
                "md:col-span-2 md:row-span-1",
                "md:col-span-2 md:row-span-1",
                "md:col-span-2 md:row-span-1",
                "md:col-span-2 md:row-span-1",
              ];
              return (
                <Reveal key={cat.id} delay={(i % 3) * 0.08} className={spans[i]}>
                  <Link
                    href={`/products?cat=${cat.slug}`}
                    className="group relative flex h-64 items-end overflow-hidden rounded-[6px] md:h-full md:min-h-[260px]"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-deep/85 via-violet-deep/25 to-transparent" />
                    <div className="relative z-10 p-6 text-cream">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-pitambari">{cat.label}</span>
                      <h3 className="mt-1.5 font-serif text-2xl">{cat.name}</h3>
                      <p className="mt-2 max-w-sm text-sm text-cream/75">{cat.short}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
                        Explore
                        <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — Featured Products */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Made for Sacred Moments"
              title="A Collection Crafted With Purpose."
            />
            <ArrowButton href="/products" variant="outline">View All</ArrowButton>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
            {feat.slice(0, 4).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Tradition → Nature Story */}
      <section className="relative overflow-hidden bg-violet-brand py-12 text-cream sm:py-16">
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionHeading
              light
              eyebrow="Purpose · Nature · Tradition"
              title="A Story That Begins in Nature and Finds Its Home in Ritual."
              subtitle="Every Radha Dhoops product follows a simple journey — from a naturally available resource, through thoughtful craft, into a meaningful place in India's sacred traditions."
            />
            <div className="mt-8">
              <ArrowButton href="/sustainability" variant="light">Our Approach</ArrowButton>
            </div>
          </div>
          <Reveal className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/13114795/pexels-photo-13114795.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=760" alt="Cow grazing in a green field" loading="lazy" className="mt-8 aspect-[3/4] w-full rounded-[6px] object-cover" />
              <img src="https://images.pexels.com/photos/34700588/pexels-photo-34700588.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600&h=760" alt="Dhoop smoke rising" loading="lazy" className="aspect-[3/4] w-full rounded-[6px] object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — Why Radha Dhoops */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Why Radha Dhoops?" title="Built on Values We Never Compromise." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[6px] border border-violet-brand/10 bg-violet-brand/10 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="group h-full bg-cream p-8 transition-colors hover:bg-cream-2">
                  <span className="font-serif text-lg text-pitambari">0{i + 1}</span>
                  <h3 className="mt-3 font-serif text-xl text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <Link href="/about" className="flex h-full flex-col justify-between bg-violet-brand p-8 text-cream transition-colors hover:bg-violet-deep">
                <span className="font-serif text-lg text-pitambari">↗</span>
                <div>
                  <h3 className="font-serif text-xl">Learn Our Story</h3>
                  <p className="mt-2 text-sm text-cream/70">Discover the beginning, belief and vision behind the brand.</p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 — Transformation */}
      <section className="bg-cream-2 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="From Nature. Into Tradition." title="Four Stages, One Meaningful Journey." align="center" />
          <div className="relative mt-16">
            <div className="absolute left-6 top-0 h-full w-px bg-violet-brand/15 md:left-0 md:top-8 md:h-px md:w-full" />
            <div className="grid gap-10 md:grid-cols-4 md:gap-6">
              {stages.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.12}>
                  <div className="relative pl-16 md:pl-0 md:pt-16 md:text-center">
                    <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-violet-brand font-serif text-cream md:left-1/2 md:-translate-x-1/2">
                      {s.n}
                    </span>
                    <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft md:mx-auto md:max-w-[16rem]">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Gallery Preview */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Moments & Rituals" title="A Glimpse Into Our World." />
            <ArrowButton href="/gallery" variant="outline">View Gallery</ArrowButton>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryPreview.map((src, i) => (
              <Reveal key={i} delay={(i % 4) * 0.07} className={i % 3 === 0 ? "row-span-2" : ""}>
                <div className="overflow-hidden rounded-[6px]">
                  <img src={src} alt="Radha Dhoops ritual moment" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — Machines Collection */}
      <section className="bg-cream-2 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-center gap-8 rounded-[8px] border border-violet-brand/10 bg-cream p-10 text-center sm:p-14">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-violet-soft">Radha Dhoops Machines</span>
            <h3 className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
              Purpose-Built Solutions for a Growing Natural-Products Ecosystem.
            </h3>
            <p className="max-w-lg text-ink-soft">Explore our dedicated line of machines designed to support the creation of natural cow-dung products at scale.</p>
            <ArrowButton href="/machines" variant="solid">Explore Machines</ArrowButton>
          </div>
        </div>
      </section>

      {/* 10 — CTA */}
      <CTASection />
    </div>
  );
}
