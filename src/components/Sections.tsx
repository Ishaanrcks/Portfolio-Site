import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { Timeline } from "./Timeline";
import { awards, competitions, education, experience, leadership, profile, projects, skills } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Research and engineering roles, in labs and on product teams.">
      <Timeline items={experience} />
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Things I have built, with what happened and where the code is.">
      <div className="grid items-start gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} item={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

export function Competitions() {
  return (
    <Section id="competitions" title="Competitions" intro="Hackathons and data-science contests.">
      <div className="grid items-start gap-6 md:grid-cols-2">
        {competitions.map((p, i) => (
          <ProjectCard key={p.title + p.subtitle} item={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

export function Leadership() {
  return (
    <Section id="leadership" title="Leadership">
      <Timeline items={leadership} />
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="text-sm font-medium text-subtle">{g.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-full bg-chip px-3 py-1 text-sm text-muted">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education & awards">
      <ul className="space-y-6">
        {education.map((e) => (
          <li key={e.school} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <p className="font-medium">{e.school}</p>
              <p className="text-muted">{e.detail}</p>
            </div>
            <p className="tnum shrink-0 font-mono text-sm text-subtle">{e.period}</p>
          </li>
        ))}
      </ul>
      <ul className="mt-12 max-w-[68ch] space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
        {awards.map((a) => (
          <li key={a} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-subtle">
            {a}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 md:py-28">
      <Reveal>
        <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">Let&apos;s work on something together.</h2>
        <p className="mt-4 max-w-[52ch] text-lg text-muted">Open to research collaborations and internships. The quickest way to reach me is email.</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-md border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85">{profile.email}</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-line bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-foreground">LinkedIn</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="rounded-md border border-line bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-foreground">GitHub</a>
        </div>
        <p className="mt-6 text-sm text-subtle">{profile.phone}</p>
      </Reveal>
    </section>
  );
}
