import Link from "next/link";
import { site, whatsappHref } from "../config/site";
import Logo from "./Logo";

const col = (title, links) => ({ title, links });

const columns = [
  col("Explore", [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Machines", to: "/machines" },
  ]),
  col("Discover", [
    { label: "Sustainability", to: "/sustainability" },
    { label: "Gallery", to: "/gallery" },
    { label: "FAQ", to: "/faq" },
  ]),
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-violet-deep text-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-soft/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <Logo variant="light" />
            <p className="mt-6 max-w-xs font-serif text-lg leading-snug text-cream/90">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Transforming a naturally available resource into meaningful products
              for traditional Indian rituals.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-pitambari">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      href={l.to}
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-pitambari">
              Connect
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <a href={whatsappHref()} target="_blank" rel="noreferrer" className="transition-colors hover:text-cream">
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-cream">
                  Contact
                </Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-cream">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.whatsappNumber}`} className="transition-colors hover:text-cream">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-pitambari/60 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream/50">
            © 2026 Radha Dhoops. All Rights Reserved.
          </p>
          <p className="text-xs text-cream/40">
            Traditional Soul — Modern Interface.
          </p>
        </div>
      </div>
    </footer>
  );
}
