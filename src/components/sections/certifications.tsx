import { BadgeCheck } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { certifications } from "@/data/profile"

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Coursework I went looking for.</>}
      lede="Programmes taken alongside my degree, each one aimed at a gap I wanted closed."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {certifications.map((cert, index) => (
          <Reveal as="li" key={cert.name} index={index}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent/40">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <p className="eyebrow">{cert.issuer}</p>
              </div>

              <h3 className="mt-4 text-balance font-display text-lg font-semibold leading-snug tracking-tight">
                {cert.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">{cert.focus}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
