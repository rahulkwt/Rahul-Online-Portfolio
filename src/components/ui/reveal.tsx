import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger index — each step adds 60ms so rows resolve in sequence. */
  index?: number
  /** Distance travelled on entry, in px. */
  distance?: number
  as?: "div" | "li" | "section" | "article"
}

/**
 * Scroll-triggered entrance. Plays once, and collapses to a no-op when the
 * visitor has asked for reduced motion so nothing is hidden behind an observer.
 */
export function Reveal({
  children,
  className,
  index = 0,
  distance = 18,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  if (reduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -60px 0px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(index, 6) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}
