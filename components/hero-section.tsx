import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { InteractiveGraph } from "@/components/interactive-graph"

export function HeroSection() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <FadeIn className="flex-1 text-center lg:text-left">
          <p className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-green mb-6">
            ISO 27001 · Built for European SMEs
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight text-balance">
            ISO 27001 certification your team will actually get behind.
          </h1>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-foreground leading-relaxed">
            Askara automates the compliance work so you can focus on the part
            that matters — building a security culture that holds long after
            the audit.
          </p>
          <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
            <Link
              href="/free-analysis"
              className="inline-flex items-center rounded-full bg-green-hover px-8 py-3.5 text-base font-bold text-navy hover:brightness-95 transition shadow-glow-green hover:shadow-glow-green-hover"
            >
              {"Get Your Free Analysis \u2192"}
            </Link>
            <p className="text-sm text-foreground/60">
              Leave your details. We{"'"}ll do the rest — for free.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="flex-1 flex justify-center">
          <div className="w-full max-w-md lg:max-w-lg aspect-square">
            <InteractiveGraph />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
