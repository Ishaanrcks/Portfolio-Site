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
        <h3 className="text-lg font-medium leading-snug tracking-tight">
          {title}
          {subtitle && <span className="text-muted font-normal"> · {subtitle}</span>}
        </h3>
        <p className="tnum shrink-0 font-mono text-sm text-subtle">{period}</p>
      </header>
      {objective && <p className="mt-3 max-w-[68ch] text-pretty text-foreground/90">{objective}</p>}
      <ul className="mt-4 max-w-[68ch] space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
        {points.map((p) => (
          <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-subtle">
            {p}
          </li>
        ))}
      </ul>
      {stack && stack.length > 0 && (
        <p className="mt-4 font-mono text-xs text-subtle">{stack.join(" · ")}</p>
      )}
      {links && links.length > 0 && (
        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-accent underline decoration-accent/40 hover:decoration-accent">
              {l.label} ↗
            </a>
          ))}
        </p>
      )}
    </article>
  );
}
