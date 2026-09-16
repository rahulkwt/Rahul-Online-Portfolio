import { Suspense, lazy } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons"
import { profile, metrics } from "@/data/profile"
import portrait from "@/assets/rahul-sunil.png"

// tsparticles is ~300kB of the bundle and purely decorative, so it loads after
// the hero has already painted.
const SparklesCore = lazy(() =>
  import("@/components/ui/sparkles").then((m) => ({ default: m.SparklesCore })),
)

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume}`

export function Hero() {
  const reduceMotion = useReducedMotion()

  // The page-load sequence: label, name, then supporting copy and portrait.
  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <header id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      {/* Ambient particle field — warm dust in a light shaft, not a starfield. */}
      <div className="pointer-events-none absolute inset-0 -z-10 mask-fade-b" aria-hidden="true">
        {reduceMotion ? null : (
          <Suspense fallback={null}>
            <SparklesCore
              id="hero-sparkles"
              background="transparent"
              minSize={0.5}
              maxSize={1.3}
              particleDensity={70}
              speed={1.1}
              particleColor="#E9C08B"
              className="h-full w-full"
            />
          </Suspense>
        )}
      </div>

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          {/* ---------- Copy ---------- */}
          <div>
            <motion.div {...rise(0)} className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-raised/70 px-3 py-1.5 font-mono text-eyebrow uppercase text-accent-soft">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Open to 2026 new-grad roles
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-eyebrow uppercase text-muted">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {profile.location} · {profile.relocation}
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-7 text-balance font-display text-[clamp(2.75rem,9vw,5.25rem)] font-extrabold leading-[0.95] tracking-[-0.03em]"
            >
              Rahul
              <br />
              <span className="text-accent">Sunil</span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-6 max-w-prose text-lg leading-relaxed text-muted sm:text-xl"
            >
              Computer Science senior at the University of Houston. I build full-stack
              applications, and I spend my days reconciling real inventory data — {" "}
              <span className="text-fg">8,000+ SKUs a project at 97%+ accuracy</span>.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
              >
                See the work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-raised/60 px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:border-accent/60 hover:text-accent"
              >
                Resume
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub — ${profile.githubLabel}`}
                  className="rounded-full border border-transparent p-3 text-muted transition-colors hover:border-line hover:text-fg"
                >
                  <GithubIcon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`LinkedIn — ${profile.linkedinLabel}`}
                  className="rounded-full border border-transparent p-3 text-muted transition-colors hover:border-line hover:text-fg"
                >
                  <LinkedinIcon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ---------- Portrait ---------- */}
          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.94 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const },
                })}
            className="relative mx-auto w-full max-w-[19rem] lg:max-w-none"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,hsl(var(--accent)/0.22),transparent_68%)] blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-raised">
              <img
                src={portrait}
                alt={`${profile.name}, Computer Science senior at the University of Houston`}
                width={640}
                height={640}
                className="aspect-square w-full max-w-full object-cover"
                fetchPriority="high"
              />
              {/* Scan rail — a nod to the barcode work, kept to a single hairline. */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden"
                aria-hidden="true"
              >
                <div className="h-px w-full animate-rail-sweep bg-gradient-to-r from-transparent via-accent to-transparent" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-eyebrow uppercase text-muted">
              <span>{profile.role}</span>
              <span className="text-accent-soft">UH &apos;26</span>
            </div>
          </motion.div>
        </div>

        {/* ---------- Metrics strip ---------- */}
        <motion.dl
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] as const },
              })}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-20 lg:grid-cols-4"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-surface px-5 py-6">
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="figure block font-display text-3xl font-bold tracking-tight text-accent-soft sm:text-4xl">
                  {metric.value}
                </span>
                <span className="mt-2 block text-sm leading-snug text-muted">{metric.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </header>
  )
}
