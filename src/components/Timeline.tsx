import type { Item } from "@/data/portfolio";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";

export function Timeline({ items }: { items: Item[] }) {
  return (
    <ol>
      {items.map((it, i) => (
        <li key={it.title + it.subtitle} className="relative pl-20 pb-12 md:pl-24 last:pb-0">
          {i < items.length - 1 && <span className="absolute left-8 top-14 bottom-0 w-px bg-line" aria-hidden="true" />}
          <span className="absolute left-0 top-0">
            <Badge name={it.subtitle ?? it.title} badge={it.badge} logo={it.logo} />
          </span>
          <Reveal>
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-xl font-semibold leading-snug tracking-tight">{it.title}</h3>
                {it.subtitle && <p className="text-muted">{it.subtitle}</p>}
              </div>
              <p className="tnum shrink-0 text-sm text-subtle">{it.period}</p>
            </header>
            <p className="mt-4 max-w-[68ch] text-pretty text-[1.02rem] leading-7 text-foreground/85">{it.summary}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
