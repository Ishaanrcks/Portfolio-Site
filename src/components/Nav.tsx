import { profile } from "@/data/portfolio";

const items = [
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-base font-semibold tracking-tight">{profile.name}</a>
        <ul className="hidden gap-8 text-sm text-muted md:flex">
          {items.map(([label, href]) => (
            <li key={href}><a href={href} className="transition-colors hover:text-foreground">{label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85">Contact me</a>
      </nav>
    </header>
  );
}
