export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[10rem_1fr] md:gap-12">
        <h2 className="text-2xl font-semibold tracking-tight md:sticky md:top-24 md:self-start">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
