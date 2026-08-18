import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import ArrowButton from "../components/ArrowButton";
import Lightbox from "../components/Lightbox";
import { whatsappHref } from "../config/site";
import { getProduct, relatedProducts } from "../data/products";
import NotFound from "./NotFound";

function Accordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-violet-brand/12">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-ink">{q}</span>
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-brand/25 text-violet-brand transition-transform ${open ? "rotate-45" : ""}`}>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
        </span>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} className="overflow-hidden">
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

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const [main, setMain] = useState(0);
  const [lb, setLb] = useState(null);

  if (!product) return <NotFound />;

  const related = relatedProducts(product, 3);

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
      <Seo
        title={`${product.name} | Radha Dhoops`}
        description={product.shortDescription}
      />

      {/* Hero */}
      <section className="pb-16 pt-28 sm:pt-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: product.name },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[55%_45%] lg:gap-14">
            {/* Gallery */}
            <div>
              <div
                className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden rounded-[6px] bg-warm sm:aspect-[5/5]"
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
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream/85 text-violet-brand opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4M11 8v6M8 11h6" strokeLinecap="round" /></svg>
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMain(i)}
                    className={`h-20 w-20 overflow-hidden rounded-[4px] border-2 transition-colors sm:h-24 sm:w-24 ${
                      main === i ? "border-violet-brand" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:pt-2">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-violet-soft">
                {product.categoryLabel}
              </span>
              <h1 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft">
                {product.shortDescription}
              </p>

              {product.highlights?.length > 0 && (
                <ul className="mt-7 space-y-3">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pitambari/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-pitambari" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-9 flex flex-wrap gap-4">
                <ArrowButton href={whatsappHref()} variant="solid">Enquire on WhatsApp</ArrowButton>
                <ArrowButton to="/contact" variant="outline">Contact Us</ArrowButton>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-[6px] border border-violet-brand/12 bg-cream-2 p-4 text-sm text-ink-soft">
                <span className="text-lg">🪔</span>
                Crafted from naturally available materials with thoughtful, consistent care.
              </div>
            </div>
          </div>
        </div>
      </section>

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
            { title: "How It Fits Into Your Puja", text: product.suitableFor + " " + (product.usage?.length ? "Ideal for " + product.usage.join(", ") + "." : ""), img: storyImages[1], reverse: true },
            { title: "Crafted With Purpose", text: "Every piece is shaped with care from naturally available materials, giving a timeless ritual a natural, purposeful identity.", img: storyImages[2], reverse: false },
          ].map((block, i) => (
            <div key={i} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${block.reverse ? "" : ""}`}>
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

      <Lightbox images={product.images} index={lb} setIndex={setLb} onClose={() => setLb(null)} />
    </div>
  );
}
