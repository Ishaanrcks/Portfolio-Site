import { stats } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <Reveal>
      <dl className="grid grid-cols-2 gap-y-10 border-y border-line py-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`flex flex-col px-2 md:px-8 ${i > 0 ? "md:border-l md:border-line" : "md:pl-0"} ${i % 2 === 1 ? "border-l border-line md:border-l" : ""}`}>
            <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
            <dd className="tnum order-1 text-4xl font-semibold tracking-tight md:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
