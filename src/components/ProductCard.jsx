"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "../config/site";

export default function ProductCard({ product, index = 0 }) {
  const discount =
    product.originalPrice && product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const orderMsg = `Namaste! I would like to enquire about ordering ${product.name} (₹${product.price}).`;
  const whatsappBuyLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(orderMsg)}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
      className="group relative flex h-full flex-col rounded-[8px] border border-violet-brand/10 bg-cream p-3 transition-all duration-300 hover:border-violet-brand/25 hover:shadow-xl hover:shadow-violet-brand/5 sm:p-4"
    >
      <Link href={`/products/${product.slug}`} className="flex flex-1 flex-col">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-warm">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-deep/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Top Badges */}
          <div className="absolute left-2.5 top-2.5 flex flex-wrap gap-1.5 sm:left-3 sm:top-3">
            {product.badge && (
              <span className="rounded-full bg-violet-brand px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-cream shadow-sm">
                {product.badge}
              </span>
            )}
            {discount && (
              <span className="rounded-full bg-pitambari px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-violet-deep shadow-sm">
                -{discount}%
              </span>
            )}
          </div>

          <span className="absolute bottom-2.5 right-2.5 rounded-full bg-cream/90 px-2.5 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-violet-brand backdrop-blur">
            {product.categoryLabel}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col pt-3.5">
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1.5 text-xs">
              <div className="flex text-pitambari">
                {"★".repeat(5)}
              </div>
              <span className="font-semibold text-ink">{product.rating}</span>
              {product.reviewCount && (
                <span className="text-[0.72rem] text-ink-soft">({product.reviewCount})</span>
              )}
            </div>
          )}

          <h3 className="mt-1.5 font-serif text-lg font-medium leading-snug text-ink transition-colors group-hover:text-violet-brand sm:text-xl">
            {product.name}
          </h3>

          <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink-soft line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Pricing */}
          <div className="mt-3 flex items-baseline gap-2">
            {product.price && (
              <span className="font-serif text-lg font-semibold text-violet-brand sm:text-xl">
                ₹{product.price}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-xs text-ink-soft line-through">
                ₹{product.originalPrice}
              </span>
            )}
            {product.quantity && (
              <span className="text-[0.68rem] text-ink-soft/80">/ {product.quantity}</span>
            )}
          </div>
        </div>
      </Link>

      {/* Selling CTA Buttons */}
      <div className="mt-3.5 flex items-center gap-2 border-t border-violet-brand/10 pt-3">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 rounded-[4px] border border-violet-brand/20 py-2 text-center text-[0.72rem] font-semibold uppercase tracking-wider text-violet-brand transition-colors hover:bg-violet-brand hover:text-cream"
        >
          Details
        </Link>
        <a
          href={whatsappBuyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-[4px] bg-violet-brand px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-violet-deep"
          title="Direct Order on WhatsApp"
        >
          <span>Order</span>
          <svg className="h-3.5 w-3.5 text-pitambari" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

