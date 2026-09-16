import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/reveal"

type SectionProps = {
  id: string
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, lede, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="container">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow">{eyebrow}</span>
            <span className="rule flex-1" />
          </div>
        </Reveal>

        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-end">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.75rem]">
              {title}
            </h2>
          </Reveal>
          {lede ? (
            <Reveal index={1}>
              <p className="max-w-prose text-[0.975rem] leading-relaxed text-muted">{lede}</p>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
