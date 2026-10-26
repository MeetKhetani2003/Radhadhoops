"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Reveal from "../../../components/Reveal";
import SectionHeading from "../../../components/SectionHeading";
import ProductCard from "../../../components/ProductCard";
import ArrowButton from "../../../components/ArrowButton";
import Lightbox from "../../../components/Lightbox";
import { site, whatsappHref } from "../../../config/site";

function Accordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-violet-brand/12">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
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

const storyImages = [
  "https://images.pexels.com/photos/16967639/pexels-photo-16967639.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  "https://images.pexels.com/photos/18354294/pexels-photo-18354294.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  "https://images.pexels.com/photos/8485807/pexels-photo-8485807.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
];

export default function ProductDetailClient({ product, related }) {
  const [main, setMain] = useState(0);
  const [lb, setLb] = useState(null);
  const [qty, setQty] = useState(1);

  const discount =
    product.originalPrice && product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const totalAmount = product.price ? product.price * qty : null;

  const orderMsg = `Namaste Radha Dhoops! I want to order:
• Product: ${product.name}
• Quantity: ${qty} (${product.quantity || "Standard Pack"})
• Total Approx: ₹${totalAmount || "Enquiry"}
Please confirm availability and dispatch details.`;

  const wholesaleMsg = `Namaste Radha Dhoops! I am interested in wholesale/bulk enquiry for ${product.name}. Please share pricing and bulk minimum order quantities.`;

  const whatsappDirectOrder = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(orderMsg)}`;
  const whatsappWholesaleOrder = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(wholesaleMsg)}`;

  const specs = [
    { label: "Material", value: product.material },
    { label: "Dimensions", value: product.dimensions },
    { label: "Weight", value: product.weight },
    { label: "Pack Size", value: product.packSize },
    { label: "Quantity", value: product.quantity },
    { label: "Suitable For", value: product.suitableFor },
    { label: "Storage", value: product.storage },
  ].filter((s) => s.value);

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="pb-16 pt-28 sm:pt-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[55%_45%] lg:gap-14">
            {/* Gallery */}
            <div>
              <div
                className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden rounded-[8px] bg-warm border border-violet-brand/10 sm:aspect-[5/5]"
                onClick={() => setLb(main)}
              >
                <motion.img
                  key={main}
                  src={product.images[main]}
                  alt={product.name}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover"
                />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-violet-brand opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4M11 8v6M8 11h6" strokeLinecap="round" /></svg>
                </span>
                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-violet-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream shadow-md">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMain(i)}
                    className={`h-20 w-20 overflow-hidden rounded-[6px] border-2 transition-all sm:h-24 sm:w-24 cursor-pointer ${
                      main === i ? "border-violet-brand shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-violet-soft">
                  {product.categoryLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  In Stock & Ready to Dispatch
                </span>
              </div>

              <h1 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-5xl">
                {product.name}
              </h1>

              {/* Star Rating */}
              <div className="mt-3 flex items-center gap-3">
                <div className="flex text-pitambari text-sm">
                  {"★".repeat(5)}
                </div>
                <span className="text-sm font-semibold text-ink">{product.rating || "4.9"}</span>
                <span className="text-xs text-ink-soft">({product.reviewCount || 120} verified reviews)</span>
              </div>

              {/* Pricing section */}
              <div className="mt-5 flex items-baseline gap-3 rounded-[6px] border border-violet-brand/10 bg-cream-2 p-4">
                {product.price && (
                  <span className="font-serif text-3xl font-bold text-violet-brand">
                    ₹{product.price}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-base text-ink-soft line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {discount && (
                  <span className="rounded-full bg-pitambari/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-violet-deep border border-pitambari/40">
                    Save {discount}% OFF
                  </span>
                )}
                {product.quantity && (
                  <span className="ml-auto text-xs text-ink-soft">
                    Pack: <strong className="text-ink">{product.quantity}</strong>
                  </span>
                )}
              </div>

              <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft">
                {product.shortDescription}
              </p>

              {/* Quantity Selector */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink">Quantity:</span>
                <div className="flex items-center rounded-full border border-violet-brand/20 bg-cream">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-9 w-9 items-center justify-center text-lg text-ink transition-colors hover:text-violet-brand"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-serif text-sm font-semibold text-ink">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="flex h-9 w-9 items-center justify-center text-lg text-ink transition-colors hover:text-violet-brand"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                {totalAmount && (
                  <span className="text-xs text-ink-soft">
                    Total: <strong className="text-violet-brand font-serif text-base">₹{totalAmount}</strong>
                  </span>
                )}
              </div>

              {product.highlights?.length > 0 && (
                <ul className="mt-6 space-y-2.5">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pitambari/30 text-violet-brand font-bold text-[0.65rem]">
                        ✓
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {/* Buying CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappDirectOrder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-violet-brand px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-lg shadow-violet-brand/20 transition-all hover:bg-violet-deep hover:shadow-xl"
                >
                  <svg className="h-4 w-4 text-pitambari" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>Order on WhatsApp (₹{totalAmount || product.price})</span>
                </a>
                <a
                  href={whatsappWholesaleOrder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-violet-brand/30 bg-cream px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-violet-brand transition-all hover:border-violet-brand hover:bg-violet-brand/5"
                >
                  Bulk / Wholesale
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-violet-brand/12 pt-6 sm:grid-cols-4">
                <div className="flex items-center gap-2 text-xs text-ink-soft">
                  <span className="text-base">🌿</span>
                  <span>100% Pure Desi Cow</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-soft">
                  <span className="text-base">🚫</span>
                  <span>Zero Charcoal</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-soft">
                  <span className="text-base">📦</span>
                  <span>Pan-India Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-soft">
                  <span className="text-base">🕉️</span>
                  <span>Sacred Gaushala Sourced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Order Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-between border-t border-violet-brand/15 bg-cream/95 p-3 backdrop-blur-md lg:hidden">
        <div>
          <p className="text-[0.65rem] uppercase tracking-wider text-ink-soft">{product.name}</p>
          <p className="font-serif text-lg font-bold text-violet-brand">₹{totalAmount || product.price}</p>
        </div>
        <a
          href={whatsappDirectOrder}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-violet-brand px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream shadow-md"
        >
          <svg className="h-3.5 w-3.5 text-pitambari" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
          Order Now
        </a>
      </div>


      {/* Full description */}
      {product.description && (
        <section className="border-t border-violet-brand/10 bg-cream-2 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-violet-soft">About This Product</span>
            <p className="mt-5 font-serif text-xl leading-relaxed text-ink sm:text-2xl">{product.description}</p>
          </div>
        </section>
      )}

      {/* Storytelling */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 sm:px-8 sm:gap-24">
          {[
            { title: "Why This Product?", text: product.benefits?.join(" ") || product.shortDescription, img: storyImages[0], reverse: false },
            { title: "How It Fits Into Your Puja", text: (product.suitableFor || "") + " " + (product.usage?.length ? "Ideal for " + product.usage.join(", ") + "." : ""), img: storyImages[1], reverse: true },
            { title: "Crafted With Purpose", text: "Every piece is shaped with care from naturally available materials, giving a timeless ritual a natural, purposeful identity.", img: storyImages[2], reverse: false },
          ].map((block, i) => (
            <div key={i} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={block.reverse ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-[6px]">
                  <img src={block.img} alt={block.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
              </Reveal>
              <div className={block.reverse ? "lg:order-1" : ""}>
                <span className="font-serif text-lg text-pitambari">0{i + 1}</span>
                <h3 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">{block.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{block.text}</p>
                {i === 1 && product.howToUse?.length > 0 && (
                  <ol className="mt-6 space-y-3">
                    {product.howToUse.map((step, si) => (
                      <li key={si} className="flex gap-3 text-sm text-ink">
                        <span className="font-serif text-violet-brand">{si + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications */}
      <section className="border-y border-violet-brand/10 bg-cream-2 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="Product Details" title="Specifications" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[6px] border border-violet-brand/10 bg-violet-brand/10 sm:grid-cols-2">
            {specs.map((s) => (
              <div key={s.label} className="bg-cream p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-violet-soft">{s.label}</p>
                <p className="mt-1.5 text-ink">{s.value}</p>
              </div>
            ))}
          </div>
          {product.safety && (
            <div className="mt-6 rounded-[6px] border border-pitambari/40 bg-pitambari/10 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-violet-brand">Handling & Safety</p>
              <p className="mt-1.5 text-sm text-ink-soft">{product.safety}</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      {product.faqs?.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
            <div className="mt-8">
              {product.faqs.map((f) => (
                <Accordion key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related?.length > 0 && (
        <section className="border-t border-violet-brand/10 bg-cream-2 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Continue Exploring" title="You May Also Like" />
            <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Lightbox images={product.images} index={lb} setIndex={setLb} onClose={() => setLb(null)} />
    </div>
  );
}
