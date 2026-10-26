"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "../config/site";

// 1. Mobile Quick-Category Pills (Mobile D2C Pattern)
export function CategoryQuickBar({ categories }) {
  const categoryIcons = {
    "gau-may": "🌿",
    diyas: "🪔",
    dhoop: "🌸",
    machines: "⚙️",
  };

  return (
    <section className="border-b border-violet-brand/10 bg-cream py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center justify-between pb-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-violet-soft">
            Explore Sacred Collections
          </p>
          <Link
            href="/products"
            className="text-[0.72rem] font-semibold uppercase tracking-wider text-violet-brand hover:underline"
          >
            All Products →
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar sm:grid sm:grid-cols-4 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?cat=${cat.slug}`}
              className="group flex min-w-[140px] flex-1 items-center gap-3 rounded-full border border-violet-brand/12 bg-cream-2 px-4 py-3 transition-all hover:border-violet-brand hover:bg-violet-brand/5 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-lg shadow-sm border border-violet-brand/10 group-hover:scale-110 transition-transform">
                {categoryIcons[cat.id] || "🪔"}
              </span>
              <div className="min-w-0 flex-1">
                <span className="block truncate font-serif text-sm font-medium text-ink group-hover:text-violet-brand">
                  {cat.name}
                </span>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-pitambari">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Trust Assurance Strip
export function TrustAssuranceStrip() {
  const assurances = [
    {
      icon: "🌿",
      title: "100% Desi Gir Cow Dung",
      desc: "Ethically sourced from grass-fed indigenous cows",
    },
    {
      icon: "🚫",
      title: "Zero Charcoal & Toxins",
      desc: "No synthetic perfumes, pure aromatic herbs",
    },
    {
      icon: "🕉️",
      title: "Vedic Ritual Standards",
      desc: "Formulated for Agnihotra, Havan & Daily Puja",
    },
    {
      icon: "📦",
      title: "Safe Pan-India Dispatch",
      desc: "Direct delivery to your doorstep within 48h",
    },
  ];

  return (
    <section className="border-y border-violet-brand/10 bg-cream-2 py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          {assurances.map((item, i) => (
            <div key={i} className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-xl shadow-sm border border-violet-brand/10">
                {item.icon}
              </span>
              <div>
                <h4 className="font-serif text-sm font-semibold text-ink sm:text-base">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. Comparison Section: Chemical Incense vs Radha Dhoops
export function PurityComparison() {
  return (
    <section className="bg-cream py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-violet-soft">
            The Conscious Choice
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            Why Switch to Pure Gau May Puja Essentials?
          </h2>
          <p className="mt-3 text-sm text-ink-soft">
            Most commercial market agarbattis rely on black coal powder, benzene chemicals, and synthetic aromas that cause indoor air pollution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Negative Card */}
          <div className="rounded-[8px] border border-rose-200 bg-rose-50/40 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-xs uppercase tracking-wider">
              <span>✕</span> Ordinary Chemical Incense & Diyas
            </div>
            <h3 className="mt-3 font-serif text-xl text-ink">Commercial Artificial Products</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Contains toxic coal dust, charcoal, and chemical binding agents.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Produces dense black carbon soot that irritates eyes and throat.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Synthetic petroleum perfumes that leave lingering chemical smells.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Factory mass-produced with zero connection to Indian traditions.</span>
              </li>
            </ul>
          </div>

          {/* Positive Card */}
          <div className="rounded-[8px] border-2 border-violet-brand bg-cream-2 p-6 sm:p-8 shadow-xl shadow-violet-brand/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-violet-brand text-pitambari text-[0.62rem] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-[8px]">
              Vedic Pure
            </div>
            <div className="flex items-center gap-2 text-violet-brand font-semibold text-xs uppercase tracking-wider">
              <span>✓</span> Radha Dhoops Sacred Formulations
            </div>
            <h3 className="mt-3 font-serif text-xl text-violet-brand">100% Desi Cow Dung & Natural Herbs</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Made purely with sun-dried Desi Gir cow dung and Ayurvedic herbs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Releases sanctifying white smoke that purifies indoor air and repels insects.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Infused with pure natural resins like Sambrani, Loban, and Guggal.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Directly supports indigenous Gaushalas and self-reliant rural families.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. Devotee Testimonials & Social Proof
export function DevoteeReviews() {
  const reviews = [
    {
      name: "Pandit Rameshwar Joshi",
      location: "Kashi (Varanasi), UP",
      role: "Temple Priest & Vedic Scholar",
      rating: 5,
      review:
        "The Desi Cow Dung Powder (गोमय चूर्ण) is exceptionally fine and pure. We use it for daily morning Havan and Agnihotra. Unlike commercial products, it has zero foul smell and creates a divine, fragrant ambiance.",
    },
    {
      name: "Ananya Sharma",
      location: "Bengaluru, Karnataka",
      role: "Verified Buyer",
      rating: 5,
      review:
        "The Sabrani Sambrani Cups are a game changer! Pre-filled and so easy to light without any messy coal. The fragrance feels exactly like stepping into an ancient South Indian temple. Highly recommended!",
    },
    {
      name: "Devendra Patel",
      location: "Ahmedabad, Gujarat",
      role: "Organic Home Gardener",
      rating: 5,
      review:
        "I purchased the cow dung powder for both home pooja and my terrace garden. My flowering plants are blooming like never before, and the delivery was super quick through WhatsApp order.",
    },
  ];

  return (
    <section className="bg-cream-2 py-14 sm:py-20 border-t border-violet-brand/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-violet-soft">
            Devotee Love & Trust
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
            Blessed by Over 2,500+ Devotees
          </h2>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex text-pitambari text-base">{"★".repeat(5)}</div>
            <span className="text-sm font-semibold text-ink">4.9 / 5 Overall Rating</span>
            <span className="text-xs text-ink-soft">• 100% Genuine Devotee Feedback</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-[8px] border border-violet-brand/12 bg-cream p-6 shadow-sm sm:p-7"
            >
              <div>
                <div className="flex text-pitambari text-sm mb-3">{"★".repeat(r.rating)}</div>
                <p className="text-sm leading-relaxed text-ink-soft italic">
                  "{r.review}"
                </p>
              </div>
              <div className="mt-6 border-t border-violet-brand/10 pt-4">
                <p className="font-serif text-base font-semibold text-ink">{r.name}</p>
                <p className="text-xs text-violet-brand">{r.role}</p>
                <p className="text-[0.7rem] text-ink-soft">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. Wholesale & Temple Bulk Order Banner
export function BulkOrderBanner() {
  const bulkMsg = `Namaste Radha Dhoops! I am interested in wholesale/bulk purchase of Cow Dung Puja Products for temple/retail store/event. Please share catalog and quotations.`;
  const wholesaleLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(bulkMsg)}`;

  return (
    <section className="bg-violet-brand py-12 text-cream sm:py-16 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-pitambari">
            B2B · Temples · Ashrams · Retailers
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-cream">
            Bulk Supplies for Temples, Gaushalas & Retailers
          </h2>
          <p className="mt-3 text-sm text-cream/80 max-w-xl">
            We provide wholesale bulk bags (10kg, 25kg, 50kg) of pure cow dung powder and bulk boxes of sambrani cups & diyas across all Indian states at manufacturer pricing.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <a
            href={wholesaleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-violet-deep shadow-lg hover:bg-pitambari transition-colors"
          >
            Get Wholesale Quote ↗
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-cream/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-cream hover:bg-cream/10 transition-colors"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </section>
  );
}

// 6. Homepage FAQ Accordion (Essential for SEO & Conversion)
export function HomeFaqSection() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "Does Radha Dhoops Cow Dung Powder or Dhoop have any foul smell?",
      a: "Not at all. Our cow dung is sourced strictly from indigenous Desi cows and undergoes a traditional sun-drying and natural aerating process. It has a pleasant, mild earthy scent reminiscent of sacred village soil, blended with pure natural sambrani and herbs.",
    },
    {
      q: "Can the Cow Dung Powder be used for daily Agnihotra and Yagya?",
      a: "Yes, absolutely. It is 100% unadulterated, micronized, and free from any chemicals or synthetic binders, making it the purest offering according to Vedic ritual scriptures.",
    },
    {
      q: "How does Cow Dung Powder benefit potted plants and home gardens?",
      a: "It acts as a rich bio-fertilizer and soil conditioner containing essential micro-nutrients (NPK) and beneficial soil microbes. It improves aeration, promotes root growth, and helps retain soil moisture.",
    },
    {
      q: "How can I order and what is the delivery timeline?",
      a: "You can easily order directly through our website by clicking 'Order on WhatsApp' or visiting the Products section. We dispatch within 24 to 48 hours across all serviceable pin codes in India.",
    },
  ];

  return (
    <section className="bg-cream py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-violet-soft">
            Clarity & Purity
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-ink">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-ink-soft">
            Everything you need to know about our sacred puja essentials and ordering process.
          </p>
        </div>

        <div className="divide-y divide-violet-brand/12 rounded-[8px] border border-violet-brand/12 bg-cream-2 p-5 sm:p-8">
          {faqs.map((f, i) => (
            <div key={i} className="py-4 first:pt-0 last:pb-0">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 text-left font-serif text-lg text-ink hover:text-violet-brand transition-colors cursor-pointer"
              >
                <span>{f.q}</span>
                <span className="text-xl text-violet-brand font-bold">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
