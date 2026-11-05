import Image from "next/image";

/** Logo tile: real logo if provided, otherwise initials. */
export function Badge({ name, badge, logo }: { name: string; badge?: string; logo?: string }) {
  return (
    <span className="inline-grid h-12 w-16 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white text-xs font-semibold tracking-tight text-muted" aria-hidden="true">
      {logo ? <Image src={logo} alt="" width={64} height={48} unoptimized className="h-9 w-[3.25rem] object-contain" /> : badge}
      <span className="sr-only">{name}</span>
    </span>
  );
}
