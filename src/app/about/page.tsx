import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "A brand rooted in Indian tradition — creating thoughtful cow-dung products for पूजा and ritual.",
};

const sections = [
  {
    title: "Our Beginning",
    text: "Radha Dhoops began with a simple observation — that a naturally available resource, deeply woven into rural Indian life, could be given a thoughtful, purposeful new form. We set out to create products that honour tradition while feeling at home in a modern world.",
    img: "https://images.pexels.com/photos/13114795/pexels-photo-13114795.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=760",
  },
  {
    title: "Why Cow Dung?",
    text: "Cow dung has held a respected place in Indian tradition for generations. Naturally available and rooted in rural life, it carries a quiet cultural significance. We reimagine it into refined products for पूजा and ritual — without exaggerated claims, simply with respect for its heritage.",
    img: "https://images.pexels.com/photos/16967639/pexels-photo-16967639.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=760",
  },
  {
    title: "What We Believe",
    text: "We believe tradition can evolve without losing its soul. Every product we make connects nature, tradition, transformation and sacred use — thoughtfully crafted, beautifully presented and honest in what it is.",
    img: "https://images.pexels.com/photos/8485807/pexels-photo-8485807.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=760",
  },
];

const values = [
  { t: "Purity", d: "Honesty in materials and in the way we present them." },
  { t: "Tradition", d: "A deep respect for India's timeless ritual practices." },
  { t: "Responsibility", d: "Thoughtful use of a naturally available resource." },
  { t: "Craftsmanship", d: "Care and consistency in every piece we make." },
  { t: "Sustainability", d: "A purposeful approach to product development." },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="Our Story"
        title="A Brand Rooted in Indian Tradition"
        subtitle="Transforming a naturally available resource into meaningful products for traditional Indian rituals."
        image="https://images.pexels.com/photos/33895613/pexels-photo-33895613.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900"
      />

      {/* Story sections */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 sm:px-8 sm:gap-24">
          {sections.map((s, i) => (
            <div key={s.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-[6px]">
                  <img src={s.img} alt={s.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
              </Reveal>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-serif text-lg text-pitambari">0{i + 1}</span>
                <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{s.title}</h2>
                <p className="mt-5 leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="bg-violet-brand py-16 text-cream sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[6px] border border-cream/15 p-8 sm:p-10">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-pitambari">Our Vision</span>
              <p className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">
                To become India's most trusted name for thoughtfully crafted, natural पूजा products.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[6px] border border-cream/15 p-8 sm:p-10">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-pitambari">Our Mission</span>
              <p className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">
                To give a naturally available resource a meaningful place in everyday tradition.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our Values" title="The Principles That Guide Us." align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={(i % 5) * 0.08}>
                <div className="h-full border-t-2 border-pitambari pt-5">
                  <h3 className="font-serif text-xl text-violet-brand">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Join Our Journey" title="Discover Products Made With Purpose." />
    </div>
  );
}
