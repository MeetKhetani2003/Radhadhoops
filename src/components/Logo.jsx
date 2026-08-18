import { Link } from "react-router-dom";
import { site } from "../config/site";

// variant: "dark" (for light bg) | "light" (for violet bg)
export default function Logo({ variant = "dark", className = "" }) {
  const first = variant === "light" ? "text-cream" : "text-violet-brand";
  return (
    <Link
      to="/"
      className={`group inline-flex flex-col leading-none ${className}`}
      aria-label="Radha Dhoops — home"
    >
      <span className="flex items-baseline gap-[0.28em]">
        <span
          className={`font-serif text-2xl tracking-tight sm:text-[1.7rem] ${first}`}
        >
          {site.brandFirst}
        </span>
        <span className="font-serif text-2xl tracking-tight text-pitambari sm:text-[1.7rem]">
          {site.brandSecond}
        </span>
        {/* tiny diya flame mark */}
        <span
          aria-hidden
          className="ml-[0.15em] inline-block h-2 w-2 -translate-y-1 rounded-full bg-pitambari shadow-[0_0_10px_rgba(230,181,46,0.8)]"
        />
      </span>
      <span className="mt-1.5 flex w-full flex-col gap-[3px]">
        <span className="h-[1.5px] w-full bg-violet-brand/70" />
        <span className="h-[1.5px] w-2/3 bg-pitambari" />
      </span>
    </Link>
  );
}
