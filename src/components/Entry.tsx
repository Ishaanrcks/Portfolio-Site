import type { Item } from "@/data/portfolio";

const btn =
  "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors";

export function Entry({ item, repo = false }: { item: Item; repo?: boolean }) {
  const { title, subtitle, period, summary, result, stack, github, links } = item;
  return (
    <article className="border-b border-line py-10 first:pt-0 last:border-b-0 last:pb-0">
      <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-xl font-semibold leading-snug tracking-tight">{title}</h3>
          {subtitle && <p className="mt-0.5 text-muted">{subtitle}</p>}
        </div>
        <p className="tnum shrink-0 text-sm text-subtle">{period}</p>
      </header>

      <p className="mt-4 max-w-[66ch] text-pretty text-[1.02rem] leading-7 text-foreground/85">{summary}</p>

      {result && (
        <p className="mt-3 max-w-[66ch] text-[1.02rem] leading-7">
          <span className="font-semibold">Result: </span>
          <span className="text-foreground/85">{result}</span>
        </p>
      )}

      {stack && stack.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {stack.map((t) => (
            <li key={t} className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-muted">
              {t}
            </li>
          ))}
        </ul>
      )}

      {(repo || (links && links.length > 0)) && (
        <div className="mt-5 flex flex-wrap gap-2.5">
          {repo &&
            (github ? (
              <a href={github} target="_blank" rel="noreferrer" className={`${btn} border-foreground bg-foreground text-background hover:opacity-85`}>
                View code on GitHub <span aria-hidden>↗</span>
              </a>
            ) : (
              <span aria-disabled="true" title="Repository link coming soon" className={`${btn} border-dashed border-subtle/50 text-subtle`}>
                GitHub link coming soon
              </span>
            ))}
          {links?.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={`${btn} border-line hover:border-foreground`}>
              {l.label} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
