import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
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
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">Let&apos;s work on something together.</h2>
          <p className="mt-4 max-w-[40ch] text-lg text-muted">Open to research collaborations and internships. Send a message and I will reply by email.</p>
          <ul className="mt-8 space-y-2 text-muted">
            <li><a className="hover:text-foreground" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li>{profile.phone}</li>
            <li><a className="hover:text-foreground" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            <li><a className="hover:text-foreground" href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm email={profile.email} />
        </Reveal>
      </div>
    </section>
  );
}
