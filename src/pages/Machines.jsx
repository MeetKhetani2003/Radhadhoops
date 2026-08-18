import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ArrowButton from "../components/ArrowButton";
import Reveal from "../components/Reveal";
import { whatsappHref } from "../config/site";
import { machines } from "../data/machines";

export default function Machines() {
  return (
    <div className="bg-cream">
      <Seo title="Cow Dung Product Machines | Radha Dhoops" description="Purpose-built machines for a growing natural-products ecosystem. Machine collection coming soon." />
      <PageHero
        crumbs={[{ label: "Home", to: "/" }, { label: "Machines" }]}
        eyebrow="A Second Ecosystem"
        title="Radha Dhoops Machines"
        subtitle="Purpose-built solutions for a growing natural-products ecosystem."
      />

      {machines.length === 0 ? (
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <Reveal>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-violet-brand/15 bg-cream-2">
                <span className="text-4xl">⚙️</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-serif text-3xl text-ink sm:text-4xl">Machine Collection Coming Soon</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-lg text-ink-soft">
                We are building a dedicated line of machines to support the creation of natural
                cow-dung products at scale. This catalogue is fully prepared for what's next.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <ArrowButton href={whatsappHref()} variant="solid">Talk to Us</ArrowButton>
                <ArrowButton to="/products" variant="outline">Explore Products</ArrowButton>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-4 text-left sm:grid-cols-3">
              {["Purpose-Built", "Reliable", "Scalable"].map((t, i) => (
                <Reveal key={t} delay={0.3 + i * 0.08}>
                  <div className="rounded-[6px] border border-violet-brand/10 bg-cream-2 p-6">
                    <span className="font-serif text-lg text-pitambari">0{i + 1}</span>
                    <h3 className="mt-2 font-serif text-lg text-ink">{t}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
            {machines.map((m) => (
              <Link key={m.id} to={`/machines/${m.slug}`} className="group flex flex-col">
                <div className="aspect-[4/3] overflow-hidden rounded-[6px] bg-warm">
                  <img src={m.images?.[0]} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-ink">{m.name}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{m.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
