import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({
  eyebrow = "",
  title,
  subtitle = "",
  crumbs = [],
  image = "",
}) {
  return (
    <section className="relative overflow-hidden bg-violet-brand pb-16 pt-32 text-cream sm:pt-40">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-deep/90 to-violet-brand/70" />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-pitambari/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {crumbs && crumbs.length > 0 && <Breadcrumbs light items={crumbs} />}
        {eyebrow && (
          <span className="mt-6 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-pitambari">
            <span className="h-px w-8 bg-pitambari" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] text-balance sm:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-xl text-cream/75">{subtitle}</p>}
      </div>
    </section>
  );
}
