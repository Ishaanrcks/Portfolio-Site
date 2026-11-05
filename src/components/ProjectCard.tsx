import Image from "next/image";
import type { Item } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const btn = "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors";

export function ProjectCard({ item, index = 0 }: { item: Item; index?: number }) {
  const { title, subtitle, period, blurb, summary, result, stack, github, links, image } = item;
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <article className="card flex h-full flex-col rounded-2xl border border-line bg-white p-6 md:p-7">
        {image && <Image src={image} alt={`${title} screenshot`} width={800} height={450} className="-mx-1 mb-5 rounded-xl border border-line" />}
        <p className="tnum text-sm text-subtle">{period}</p>
        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight">{title}</h3>
        {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        <p className="mt-3 text-[1.02rem] leading-7 text-foreground/85">{blurb ?? summary}</p>

        {result && (
          <div className="mt-4 rounded-lg border border-line bg-background px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wider text-subtle">Result</p>
            <p className="mt-1 text-[0.95rem] leading-6 text-foreground">{result}</p>
          </div>
        )}

        {blurb && (
          <details className="group mt-4">
            <summary className="cursor-pointer list-none text-sm font-medium text-foreground hover:text-accent [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">What I did <span aria-hidden>+</span></span>
              <span className="hidden group-open:inline">Hide details <span aria-hidden>−</span></span>
            </summary>
            <p className="mt-3 text-[0.95rem] leading-7 text-muted">{summary}</p>
          </details>
        )}

        {stack && stack.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {stack.map((t) => (
              <li key={t} className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-muted">{t}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
          {github ? (
            <a href={github} target="_blank" rel="noreferrer" className={`${btn} border-foreground bg-foreground text-background hover:opacity-85`}>
              View code on GitHub <span aria-hidden>↗</span>
            </a>
          ) : (
            <span aria-disabled="true" title="Repository link coming soon" className={`${btn} border-dashed border-subtle/50 text-subtle`}>
              GitHub link coming soon
            </span>
          )}
          {links?.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={`${btn} border-line hover:border-foreground`}>
              {l.label} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
