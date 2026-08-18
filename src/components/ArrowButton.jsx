import { Link } from "react-router-dom";

// A premium button with an animated arrow.
// variant: "solid" | "outline" | "ghost" | "light"
export default function ArrowButton({
  to,
  href,
  onClick,
  children,
  variant = "solid",
  className = "",
  type,
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-all duration-300";
  const variants = {
    solid:
      "bg-violet-brand text-cream hover:bg-violet-deep shadow-[0_10px_30px_-12px_rgba(84,40,102,0.7)]",
    outline:
      "border border-violet-brand/30 text-violet-brand hover:border-violet-brand hover:bg-violet-brand hover:text-cream",
    ghost: "text-violet-brand hover:text-violet-deep",
    light:
      "bg-pitambari text-violet-deep hover:bg-pitambari-soft shadow-[0_10px_30px_-12px_rgba(230,181,46,0.8)]",
    lightOutline:
      "border border-cream/30 text-cream hover:border-pitambari hover:text-pitambari",
  };
  const inner = (
    <>
      <span>{children}</span>
      <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        <svg
          className="absolute h-4 w-4 -translate-x-5 transition-transform duration-300 group-hover:translate-x-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </>
  );
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} onClick={onClick} className={cls}>{inner}</Link>;
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  return (
    <button type={type || "button"} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
