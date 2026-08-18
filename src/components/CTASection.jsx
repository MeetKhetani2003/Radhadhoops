import Reveal from "./Reveal";
import ArrowButton from "./ArrowButton";
import { whatsappHref } from "../config/site";

export default function CTASection({
  eyebrow = "Begin Your Ritual",
  title = "Bring a Natural Touch to Your Sacred Space.",
  text = "Explore a growing collection of cow-dung products crafted with purpose, tradition and thoughtful care.",
}) {
  return (
    <section className="relative overflow-hidden bg-violet-brand py-20 text-cream sm:py-28">
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-pitambari/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-soft/30 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="flex items-center justify-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-pitambari">
            <span className="h-px w-8 bg-pitambari" />
            {eyebrow}
            <span className="h-px w-8 bg-pitambari" />
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-serif text-3xl leading-tight text-balance sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-cream/70">{text}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ArrowButton to="/products" variant="light">
              Explore Products
            </ArrowButton>
            <ArrowButton href={whatsappHref()} variant="lightOutline">
              Talk to Us
            </ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
