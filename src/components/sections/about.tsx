import { GraduationCap, Users } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { education, extracurricular, profile } from "@/data/profile"

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Two halves of the same habit: build it, then check it.</>}
      lede={profile.summary}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="space-y-5 text-[1.0625rem] leading-relaxed text-muted">
          <p>
            Most of my week is spent on a plant or warehouse floor, counting assets against a
            client&apos;s books and finding out where the two disagree. It has made me
            unreasonably careful about data — a number is not finished until it reconciles.
          </p>
          <p>
            The other half is building. Full-stack React and Node applications, a MySQL schema
            with fifteen-plus tables behind them, and lately LLM-backed workflows that take the
            repetitive parts of a task off someone&apos;s plate. <span className="text-fg">Baymax</span>,
            an AI academic co-pilot, came out of that interest and took first place against ten
            other teams.
          </p>
          <p>
            I started at Houston Community College, transferred to the University of Houston, and
            graduate in {profile.graduation}. I&apos;m based in Houston and open to relocating —
            currently looking for Summer 2027 internships and full-time roles.
          </p>
        </Reveal>

        <div className="space-y-5">
          <Reveal index={1}>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" />
                <h3 className="eyebrow text-fg">Education</h3>
              </div>

              <ul className="mt-5 space-y-5">
                {education.map((item) => (
                  <li key={item.school} className="border-l border-line pl-4">
                    <p className="font-display text-base font-semibold leading-snug">
                      {item.credential}
                    </p>
                    <p className="mt-0.5 text-sm text-fg/85">{item.school}</p>
                    <p className="figure mt-1.5 font-mono text-xs text-muted">{item.period}</p>
                    <p className="mt-1.5 text-sm leading-snug text-muted">{item.detail}</p>
                    {item.coursework.length > 0 ? (
                      <p className="mt-2.5 text-sm leading-snug text-muted">
                        <span className="text-fg/70">Coursework:</span>{" "}
                        {item.coursework.join(" · ")}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal index={2}>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-center gap-2.5">
                <Users className="h-4 w-4 text-accent" aria-hidden="true" />
                <h3 className="eyebrow text-fg">Outside class</h3>
              </div>
              <p className="mt-4 font-display text-base font-semibold">
                {extracurricular.role}, {extracurricular.org}
              </p>
              <p className="figure mt-1 font-mono text-xs text-muted">{extracurricular.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{extracurricular.detail}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
