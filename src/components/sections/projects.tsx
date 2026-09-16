import { Trophy } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { projects, profile } from "@/data/profile"

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I built, and what they had to survive.</>}
      lede="A hackathon winner, a five-role clinic platform, and a client storefront that is still running."
    >
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Reveal key={project.name} index={index}>
            <article className="group grid gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="figure font-mono text-eyebrow uppercase text-muted">
                    {project.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-accent">
                    <Trophy className="h-3 w-3" aria-hidden="true" />
                    {project.award}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-[0.9375rem] text-accent-soft">{project.subtitle}</p>

                <p className="mt-4 max-w-prose text-[0.975rem] leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md border border-line bg-raised px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="space-y-3 lg:border-l lg:border-line lg:pl-12">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted"
                  >
                    <span
                      className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                      aria-hidden="true"
                    />
                    <span className="max-w-prose">{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal index={3}>
        <p className="mt-8 text-sm text-muted">
          More on GitHub —{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            @{profile.githubLabel}
          </a>
        </p>
      </Reveal>
    </Section>
  )
}
