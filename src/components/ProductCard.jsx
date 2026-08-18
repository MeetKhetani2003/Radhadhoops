import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
    >
      <Link
        to={`/products/${product.slug}`}
        className="group flex h-full flex-col"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-warm">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-deep/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-violet-brand backdrop-blur">
            {product.categoryLabel}
          </span>
        </div>
        <div className="flex flex-1 flex-col pt-5">
          <h3 className="font-serif text-xl text-ink transition-colors group-hover:text-violet-brand">
            {product.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft line-clamp-2">
            {product.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-violet-brand">
            Explore
            <span className="h-px w-6 bg-pitambari transition-all duration-300 group-hover:w-10" />
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
