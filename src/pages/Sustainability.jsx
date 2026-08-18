import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";

const flow = [
  { n: "01", title: "Natural Resource", text: "A naturally available material, gathered responsibly from rural sources.", img: "https://images.pexels.com/photos/12266229/pexels-photo-12266229.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=560" },
  { n: "02", title: "Thoughtful Processing", text: "Prepared and shaped with care, ensuring consistency and quality.", img: "https://images.pexels.com/photos/8021229/pexels-photo-8021229.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=560" },
  { n: "03", title: "Crafting", text: "Formed into refined products designed for पूजा and ritual use.", img: "https://images.pexels.com/photos/3160978/pexels-photo-3160978.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=560" },
  { n: "04", title: "Puja Product", text: "Given a meaningful place in India's sacred, everyday traditions.", img: "https://images.pexels.com/photos/38920473/pexels-photo-38920473.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=560" },
];

const pillars = [
  { t: "Natural Resource Utilization", d: "We work with a naturally available material, giving it a considered, purposeful use." },
  { t: "Traditional Practices", d: "Our products are inspired by India's timeless पूजा and ritual traditions." },
  { t: "Responsible Development", d: "We develop products thoughtfully, with respect for their origin and purpose." },
  { t: "Future Innovation", d: "Our ecosystem is designed to grow — with new products and dedicated machines to come." },
];

export default function Sustainability() {
  return (
    <div className="bg-cream">
      <Seo title="Sustainability | Radha Dhoops" description="A natural resource, a new purpose — how Radha Dhoops transforms naturally available materials into meaningful पूजा products." />
      <PageHero
        crumbs={[{ label: "Home", to: "/" }, { label: "Sustainability" }]}
        eyebrow="Our Approach"
        title="A Natural Resource. A New Purpose."
        subtitle="We give a naturally available material a meaningful, purposeful new form — rooted in tradition, presented with care."
        image="https://images.pexels.com/photos/16967639/pexels-photo-16967639.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900"
      />

      {/* Flow */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="From Nature to Ritual" title="The Journey of Transformation." align="center" />
          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            {flow.map((f, i) => (
              <Reveal key={f.n} delay={i * 0.1}>
                <div className="group relative">
                  <div className="overflow-hidden rounded-[6px]">
                    <img src={f.img} alt={f.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="mt-5 block font-serif text-lg text-pitambari">{f.n}</span>
                  <h3 className="mt-1 font-serif text-xl text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.text}</p>
                  {i < flow.length - 1 && (
                    <span className="absolute -right-4 top-[28%] hidden text-2xl text-violet-brand/40 md:block">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-cream-2 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our Commitments" title="A Thoughtful Way Forward." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={(i % 2) * 0.1}>
                <div className="flex h-full gap-5 rounded-[6px] border border-violet-brand/10 bg-cream p-7">
                  <span className="font-serif text-2xl text-pitambari">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{p.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm italic text-ink-soft">
            We keep our messaging honest — focusing on tradition, purpose and thoughtful craft rather than exaggerated environmental or scientific claims.
          </p>
        </div>
      </section>

      <CTASection eyebrow="Be Part of the Story" title="Explore Products Made With Purpose." />
    </div>
  );
}
