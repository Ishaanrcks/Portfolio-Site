import Image from "next/image";

/** Logo tile: real logo if provided, otherwise initials. */
export function Badge({ name, badge, logo, size = 40 }: { name: string; badge?: string; logo?: string; size?: number }) {
  return (
    <span
      className="inline-grid shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white text-[0.7rem] font-semibold tracking-tight text-muted"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {logo ? <Image src={logo} alt="" width={size} height={size} className="h-full w-full object-contain p-1.5" /> : badge}
      <span className="sr-only">{name}</span>
    </span>
  );
}
