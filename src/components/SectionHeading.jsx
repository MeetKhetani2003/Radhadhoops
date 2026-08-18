import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  number,
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`mb-4 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] ${
              light ? "text-pitambari" : "text-violet-soft"
            }`}
          >
            {number && (
              <span className="font-serif text-xs opacity-60">{number}</span>
            )}
            <span className="h-px w-8 bg-pitambari" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`max-w-3xl font-serif text-3xl leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-[2.9rem] ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={`mt-5 max-w-xl text-[0.98rem] leading-relaxed ${
              light ? "text-cream/70" : "text-ink-soft"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
