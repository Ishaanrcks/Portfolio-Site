import { Reveal } from "./Reveal";

export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-20 md:py-28">
      <Reveal>
        <div className="mb-10 max-w-2xl md:mb-14">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
