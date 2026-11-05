import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Competitions, Contact, Education, Experience, Leadership, Projects, Skills } from "@/components/Sections";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        <Hero />
        <Experience />
        <Projects />
        <Competitions />
        <Leadership />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-subtle">
        {profile.name}
      </footer>
    </>
  );
}
