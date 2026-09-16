import { ArrowUpRight, FileText, Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons"
import { Section } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"
import { profile } from "@/data/profile"

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume}`

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: resumeUrl,
  },
]

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Hiring for Summer 2026 or a December 2026 start?</>}
      lede="I graduate in December 2026 and I'm looking for software and data roles. Houston-based, open to relocation — email is the fastest way to reach me."
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-6">
        <Reveal className="min-w-0">
          <a
            href={`mailto:${profile.email}`}
            className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-accent/30 bg-accent/[0.07] p-7 transition-colors duration-200 hover:border-accent/60 sm:p-8"
          >
            <span className="eyebrow text-accent">Start here</span>
            <span>
              <span className="block font-display text-xl font-bold leading-tight tracking-tight [overflow-wrap:anywhere] sm:text-2xl lg:text-3xl">
                {profile.email}
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
                Send a message
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </span>
          </a>
        </Reveal>

        <Reveal index={1} className="min-w-0">
          <ul className="grid h-full gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {channels.map((channel) => (
              <li key={channel.label} className="bg-surface">
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex h-full items-center gap-3.5 p-5 transition-colors duration-200 hover:bg-raised"
                >
                  <channel.icon
                    className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <span className="eyebrow block">{channel.label}</span>
                    <span className="mt-1.5 block truncate text-[0.9375rem] text-fg/90">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
