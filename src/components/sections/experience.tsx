import { Section } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { experience } from "@/data/profile"

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Three roles, in reverse order.</>}
      lede="Field data work, team training at volume, and my first production web build — each one left a habit behind."
    >
      {/* Reverse-chronological rail: the order carries the information. */}
      <ol className="relative space-y-12 border-l border-line pl-6 sm:space-y-14 sm:pl-10">
        {experience.map((role, index) => (
          <Reveal as="li" key={role.company} index={index} className="relative">
            <span
              className={
                role.current
                  ? "absolute -left-[1.6875rem] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-ink sm:-left-[2.9375rem]"
                  : "absolute -left-[1.6875rem] top-2 h-2.5 w-2.5 rounded-full border border-line bg-raised ring-4 ring-ink sm:-left-[2.9375rem]"
              }
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                {role.title}
              </h3>
              {role.current ? (
                <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-accent">
                  Current
                </span>
              ) : null}
            </div>

            <p className="mt-1.5 text-[0.9375rem] text-fg/85">
              {role.company}
              <span className="text-muted"> · {role.location}</span>
            </p>
            <p className="figure mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              {role.period}
            </p>

            <p className="mt-4 max-w-prose text-[0.975rem] leading-relaxed text-muted">
              {role.summary}
            </p>

            <ul className="mt-5 space-y-2.5">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted">
                  <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                  <span className="max-w-prose">{bullet}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2">
              {role.stack.map((tool) => (
                <li
                  key={tool}
                  className="rounded-md border border-line bg-raised px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
