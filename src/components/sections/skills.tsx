import { motion, useReducedMotion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { skillGroups } from "@/data/profile"

const ticker = skillGroups.flatMap((group) => group.items)

export function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The toolkit, grouped by what it actually does.</>}
      lede="Languages and frameworks I ship with, plus the data tooling I use on client engagements every week."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} index={groupIndex} className="bg-surface">
            <div className="h-full p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-semibold tracking-tight">{group.title}</h3>
                <span className="eyebrow shrink-0">{group.note}</span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block rounded-lg border border-line bg-raised px-3 py-1.5 text-sm text-fg/90 transition-colors duration-200 hover:border-accent/50 hover:text-accent">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Quiet ambient ticker — the same list, moving, as a section outro. */}
      {reduceMotion ? null : (
        <div className="mask-fade-x mt-10 overflow-hidden" aria-hidden="true">
          <motion.div className="flex w-max animate-marquee-x gap-3">
            {[...ticker, ...ticker].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] text-muted/55"
              >
                {item}
                <span className="ml-3 text-accent/45">/</span>
              </span>
            ))}
          </motion.div>
        </div>
      )}
    </Section>
  )
}
