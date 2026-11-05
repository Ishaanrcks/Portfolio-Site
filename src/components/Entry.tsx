import type { Link } from "@/data/portfolio";

export function Entry({
  title,
  subtitle,
  period,
  objective,
  points,
  stack,
  links,
}: {
  title: string;
  subtitle?: string;
  period: string;
  objective?: string;
  points: string[];
  stack?: string[];
  links?: Link[];
}) {
  return (
    <article className="group pb-14 last:pb-0">
      <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-lg font-semibold leading-snug tracking-tight">
          {title}
          {subtitle && <span className="text-muted font-normal"> · {subtitle}</span>}
        </h3>
        <p className="tnum shrink-0 font-mono text-sm text-subtle">{period}</p>
      </header>
      {objective && <p className="mt-3 max-w-[68ch] text-pretty text-foreground">{objective}</p>}
      <Points items={points.slice(0, 2)} />
      {points.length > 2 && (
        <details className="group/d mt-3 max-w-[68ch]">
          <summary className="cursor-pointer list-none text-sm text-accent hover:underline [&::-webkit-details-marker]:hidden">
            <span className="group-open/d:hidden">Show {points.length - 2} more</span>
            <span className="hidden group-open/d:inline">Show less</span>
          </summary>
          <div className="mt-3">
            <Points items={points.slice(2)} />
          </div>
        </details>
      )}
      {stack && stack.length > 0 && (
        <p className="mt-4 font-mono text-xs text-subtle">{stack.join(" · ")}</p>
      )}
      {links && links.length > 0 && (
        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {links.map((l) =>
            l.href ? (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="text-accent underline decoration-accent/40 hover:decoration-accent">
                {l.label} ↗
              </a>
            ) : (
              <span key={l.label} aria-disabled="true" title="Link coming soon" className="text-subtle">
                {l.label} <span className="text-xs">(link soon)</span>
              </span>
            ),
          )}
        </p>
      )}
    </article>
  );
}

function Points({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-4 max-w-[68ch] space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
      {items.map((p) => (
        <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-subtle">
          {p}
        </li>
      ))}
    </ul>
  );
}
