import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [], light = false }) {
  const base = light ? "text-cream/60" : "text-ink-soft";
  const active = light ? "text-pitambari" : "text-violet-brand";
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs tracking-wide">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {it.to && !last ? (
                <Link to={it.to} className={`${base} transition-colors hover:${active}`}>
                  {it.label}
                </Link>
              ) : (
                <span className={last ? active : base}>{it.label}</span>
              )}
              {!last && <span className={base}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
