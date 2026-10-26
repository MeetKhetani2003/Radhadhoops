import Link from "next/link";
import HeroCarousel from "../components/HeroCarousel";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import CTASection from "../components/CTASection";
import ArrowButton from "../components/ArrowButton";
import { categories } from "../data/categories";
import { products } from "../data/products";
import {
  CategoryQuickBar,
  TrustAssuranceStrip,
  PurityComparison,
  DevoteeReviews,
  BulkOrderBanner,
  HomeFaqSection,
} from "../components/HomeClientSections";

const stages = [
  { n: "01", title: "Pure Gau-Dhan", text: "Pure Desi cow dung ethically gathered from healthy grass-fed cows." },
  { n: "02", title: "Natural Sun-Drying", text: "Sun-cured and aerated naturally without any toxic charcoal or chemical heat." },
  { n: "03", title: "Herbal Formulation", text: "Blended with pure Vedic herbs, Sambrani, Guggal and sacred clays." },
  { n: "04", title: "Sanctified Rituals", text: "Bringing purifying aroma and positive cosmic vibrations to every home." },
];

const galleryPreview = [
  { src: "https://images.pexels.com/photos/34644588/pexels-photo-34644588.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=900", title: "Sacred Daily Aarti" },
  { src: "/products/cow-dung-powder.jpg", title: "Pure Gomay Churna" },
  { src: "https://images.pexels.com/photos/38920473/pexels-photo-38920473.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=520", title: "Sambrani Cup Cleansing" },
  { src: "https://images.pexels.com/photos/12430842/pexels-photo-12430842.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=900", title: "Sacred Diya Glow" },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://radhadhoop.com/#organization",
        name: "Radha Dhoops",
        url: "https://radhadhoop.com",
        logo: "https://radhadhoop.com/products/sabrani-diya.png",
        description:
          "Manufacturer & supplier of 100% natural Desi cow dung puja products: Gomay powder, Sambrani dhoop cups, herbal diyas, and cattle tools.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://radhadhoop.com/#website",
        url: "https://radhadhoop.com",
        name: "Radha Dhoops",
        description: "Rooted in Tradition. Inspired by Nature. Pure Cow Dung Puja Products.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://radhadhoop.com/products?cat={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does Radha Dhoops Cow Dung Powder or Dhoop have any foul smell?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, our cow dung is sourced strictly from indigenous Desi cows and undergoes a traditional sun-drying and natural aerating process with pure sambrani and herbs, resulting in an earthy sacred aroma.",
            },
          },
          {
            "@type": "Question",
            name: "Can the Cow Dung Powder be used for daily Agnihotra and Yagya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, it is 100% unadulterated, micronized and chemical-free, prepared strictly according to Vedic standards.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 01 — Hero Carousel */}
      <HeroCarousel />

      {/* 02 — Mobile Quick-Category Pills (App-Style Bar) */}
      <CategoryQuickBar categories={categories} />

      {/* 03 — Trust Assurances Bar */}
      <TrustAssuranceStrip />

      {/* 04 — Bestselling Products Showcase */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Sacred Bestsellers"
              title="Handcrafted Puja Essentials for Every Home."
              subtitle="100% pure cow-dung formulations made without toxic charcoal or chemical perfumes. Direct from gaushalas."
            />
            <ArrowButton href="/products" variant="outline">
              View All Products
            </ArrowButton>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Purity Comparison (Why Switch to Pure Gau May) */}
      <PurityComparison />

      {/* 06 — Rich SEO Authority Section: Vedic Significance */}
      <section className="bg-cream-2 py-14 sm:py-20 border-y border-violet-brand/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[8px] shadow-lg border border-violet-brand/10">
                <img
                  src="/products/cow-dung-powder.jpg"
                  alt="Pure organic Desi cow dung powder Gomay Churna with havan herbs"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 hidden rounded-[6px] border border-violet-brand/10 bg-cream p-4 shadow-xl sm:block">
                <p className="font-serif text-2xl text-violet-brand">गोमये वसते लक्ष्मी</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-ink-soft">
                  Padma Purana Vedic Truth
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Vedic Wisdom & Science"
              title="The Sacred Power of Desi Cow Dung in Sanatan Rituals."
              subtitle="Ancient scriptures declare that Goddess Lakshmi resides in Gau-May (गोमय). Modern environmental science reveals that burning pure cow dung releases natural formaldehyde and ethylene oxide vapors that neutralize airborne pathogens and purify living spaces."
            />

            <div className="mt-8 space-y-4 text-sm text-ink-soft leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pitambari/30 text-violet-brand font-bold text-xs mt-0.5">
                  1
                </span>
                <p>
                  <strong className="text-ink">Natural Bio-Air Purifier:</strong> In Vedic Agnihotra and daily Havan, burning sun-dried cow dung with pure ghee releases negative ions that cleanse smog and neutralize bacteria without irritating sensitive lungs.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pitambari/30 text-violet-brand font-bold text-xs mt-0.5">
                  2
                </span>
                <p>
                  <strong className="text-ink">Charcoal-Free Health Protection:</strong> Commercial dhoops burn coal powder emitting dangerous benzene. Radha Dhoops uses only pure Gau May and dried Ayurvedic flora.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pitambari/30 text-violet-brand font-bold text-xs mt-0.5">
                  3
                </span>
                <p>
                  <strong className="text-ink">Sustainable Gaushala Empowerment:</strong> Every product purchased creates a dignified, sustainable revenue model for indigenous Indian cows and local gaushala caretakers.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ArrowButton href="/sustainability" variant="solid">
                Discover Our Sourcing
              </ArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Devotee Reviews (Social Proof) */}
      <DevoteeReviews />

      {/* 08 — Transformation Story */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="From Gau-Dhan to Sacred Moments"
            title="Four Sacred Stages, One Meaningful Journey."
            align="center"
          />
          <div className="relative mt-14">
            <div className="absolute left-6 top-0 h-full w-px bg-violet-brand/15 md:left-0 md:top-7 md:h-px md:w-full" />
            <div className="grid gap-8 md:grid-cols-4 md:gap-6">
              {stages.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.1}>
                  <div className="relative pl-14 md:pl-0 md:pt-14 md:text-center">
                    <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-violet-brand font-serif text-cream md:left-1/2 md:-translate-x-1/2 shadow-md">
                      {s.n}
                    </span>
                    <h3 className="font-serif text-lg text-ink font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft md:mx-auto md:max-w-[15rem]">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09 — B2B & Temple Wholesale Banner */}
      <BulkOrderBanner />

      {/* 10 — FAQ Accordion (SEO & Buyer Confidence) */}
      <HomeFaqSection />

      {/* 11 — Moments & Rituals Gallery */}
      <section className="bg-cream-2 py-14 sm:py-20 border-t border-violet-brand/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeading eyebrow="Moments & Rituals" title="A Glimpse Into Sacred Living." />
            <ArrowButton href="/gallery" variant="outline">
              View Full Gallery
            </ArrowButton>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryPreview.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-[6px] shadow-sm bg-warm">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-deep/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="text-xs font-serif text-cream">{item.title}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — Machines Collection */}
      <section className="bg-cream py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-center gap-6 rounded-[8px] border border-violet-brand/12 bg-cream-2 p-8 text-center sm:p-12 shadow-sm">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-violet-soft">
              Radha Dhoops Machines
            </span>
            <h3 className="max-w-2xl font-serif text-2xl leading-tight text-ink sm:text-3xl">
              Equipping Gaushalas & Farmers With Precision Machinery
            </h3>
            <p className="max-w-lg text-xs sm:text-sm text-ink-soft">
              Explore our veterinary and farming line including accurate cow-weight measuring tapes and processing machinery designed to help gaushalas scale organically.
            </p>
            <ArrowButton href="/machines" variant="solid">
              Explore Machines & Tools
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* 13 — CTA */}
      <CTASection />
    </div>
  );
}

