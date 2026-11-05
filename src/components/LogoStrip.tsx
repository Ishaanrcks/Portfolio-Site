import { orgs } from "@/data/portfolio";
import { Badge } from "./Badge";

export function LogoStrip() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {orgs.map((o) => (
        <li key={o.name} className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted">
          <Badge name={o.name} badge={o.badge} logo={o.logo} size={36} />
          {o.name}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="py-12">
      <p className="mb-6 text-center text-sm text-subtle">Research and engineering with</p>
      <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
