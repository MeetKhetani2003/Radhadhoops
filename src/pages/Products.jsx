import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { products, filterProducts } from "../data/products";
import { filters } from "../data/categories";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("cat") || "all";
  const [active, setActive] = useState(
    filters.some((f) => f.id === initial) ? initial : "all"
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    const cat = params.get("cat");
    if (cat && filters.some((f) => f.id === cat)) setActive(cat);
  }, [params]);

  const setFilter = (id) => {
    setActive(id);
    if (id === "all") setParams({});
    else setParams({ cat: id });
  };

  const results = useMemo(() => {
    let list = filterProducts(products, active);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
    }
    return list;
  }, [active, query]);

  return (
    <div className="bg-cream">
      <Seo
        title="Cow Dung Puja Products | Radha Dhoops"
        description="Explore naturally crafted cow-dung products created for पूजा, rituals and sacred spaces — diyas, dhoop, agarbatti, samidha and more."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-violet-brand pb-16 pt-32 text-cream sm:pt-40">
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-pitambari/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Breadcrumbs light items={[{ label: "Home", to: "/" }, { label: "Products" }]} />
          <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">Our Products</h1>
          <p className="mt-5 max-w-xl text-cream/75">
            Explore naturally crafted products created for पूजा, rituals and sacred spaces.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[68px] z-30 border-b border-violet-brand/10 bg-cream/90 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] transition-all ${
                  active === f.id
                    ? "bg-violet-brand text-cream"
                    : "border border-violet-brand/20 text-ink-soft hover:border-violet-brand hover:text-violet-brand"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" strokeLinecap="round" /></svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full rounded-full border border-violet-brand/20 bg-cream py-2.5 pl-9 pr-4 text-sm text-ink outline-none transition-colors focus:border-violet-brand"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-8 text-sm text-ink-soft">
            {results.length} {results.length === 1 ? "product" : "products"}
          </p>
          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
              <p className="font-serif text-2xl text-ink">No products found</p>
              <p className="text-ink-soft">Try a different category or search term.</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {results.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
