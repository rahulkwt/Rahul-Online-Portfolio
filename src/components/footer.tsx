import { ArrowUp } from "lucide-react"
import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-muted">
            {profile.location} · Built with React, Tailwind CSS and Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-5">
          <span className="figure font-mono text-xs text-muted">
            &copy; {new Date().getFullYear()}
          </span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-raised/60 px-3.5 py-2 text-xs transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
