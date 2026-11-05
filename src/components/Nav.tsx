import { profile } from "@/data/portfolio";

const items = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Competitions", "#competitions"],
  ["Contact", "#contact"],
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-medium tracking-tight">
          {profile.name}
        </a>
        <ul className="flex gap-5 text-sm text-muted">
          {items.map(([label, href], i) => (
            <li key={href} className={i === 2 ? "hidden md:block" : i === 1 || i === 0 ? "hidden sm:block" : ""}>
              <a href={href} className="transition-colors hover:text-foreground">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
