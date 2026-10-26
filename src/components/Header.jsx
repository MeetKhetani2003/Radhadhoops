"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../config/site";
import Logo from "./Logo";
import ArrowButton from "./ArrowButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement Bar for High Conversion */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-center gap-2 border-b border-white/10 bg-violet-deep px-4 py-1.5 text-center text-[0.7rem] font-medium tracking-wide text-cream sm:gap-3 sm:text-[0.74rem]">
        <span className="flex items-center gap-1.5 text-pitambari font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-pitambari animate-pulse" />
          Pure Desi Cow Products
        </span>
        <span className="hidden sm:inline text-cream/30">•</span>
        <span className="hidden sm:inline text-cream/85">100% Charcoal-Free & Vedic Formulated</span>
        <span className="hidden md:inline text-cream/30">•</span>
        <span className="hidden md:inline text-cream/85">Pan-India Dispatch</span>
        <span className="text-cream/30">•</span>
        <a
          href={`https://wa.me/${site.whatsappNumber}?text=Namaste!%20I%20want%20to%20order%20puja%20products.`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-pitambari underline underline-offset-2 transition-colors hover:text-cream"
        >
          Order on WhatsApp ↗
        </a>
      </div>

      <header
        className={`fixed left-1/2 z-40 flex w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 flex-col justify-center transition-all duration-500 sm:w-[calc(100%-3rem)] ${
          scrolled
            ? "top-9 rounded-full border border-violet-brand/15 bg-cream/95 py-2.5 shadow-xl shadow-violet-brand/5 backdrop-blur-md"
            : "top-11 rounded-full border border-white/20 bg-cream/85 py-3.5 shadow-lg backdrop-blur-md"
        }`}
      >

        <div className="flex w-full items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => {
              const isActive =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname?.startsWith(item.to + "/");
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`group relative text-[0.82rem] font-medium tracking-wide transition-colors ${
                    isActive ? "text-violet-brand" : "text-ink-soft hover:text-violet-brand"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-pitambari transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <ArrowButton href="/products" variant="solid" className="!px-6 !py-3">
              Explore Products
            </ArrowButton>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="group flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-violet-brand/15 bg-cream/50 backdrop-blur transition-all hover:bg-violet-brand/5 lg:hidden"
            aria-label="Open menu"
          >
            <span className="h-[1.5px] w-5 bg-violet-brand transition-all group-hover:w-6" />
            <span className="h-[1.5px] w-5 bg-violet-brand transition-all" />
            <span className="h-[1.5px] w-3.5 bg-pitambari transition-all group-hover:w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-violet-deep/95 text-cream backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <Logo variant="light" />
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-cream/10 backdrop-blur transition-colors hover:bg-cream/20"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6 sm:px-10">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.5 }}
                >
                  <Link
                    href={item.to}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-cream/10 py-4"
                  >
                    <span className="font-serif text-xs text-pitambari/70">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-3xl tracking-tight">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="px-6 pb-10 sm:px-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <ArrowButton
                href="/products"
                variant="light"
                className="w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Explore Products
              </ArrowButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
