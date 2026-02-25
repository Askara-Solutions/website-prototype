import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { InteractiveGraph } from "@/components/interactive-graph"

export function HeroSection() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <FadeIn className="flex-1 text-center lg:text-left">
          <p className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-6">
            Cyber security, minus the theater.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-tight text-balance">
            Feel genuinely secure.
            <br />
            Not just certified.
          </h1>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-foreground leading-relaxed">
            Askara helps growing teams build real cybersecurity culture — with
            AI-powered compliance that{"'"}s human, fast, and actually something
            your team will get behind.
          </p>
          <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
            <Link
              href="/free-analysis"
              className="inline-flex items-center rounded-full bg-brand-green px-8 py-3.5 text-base font-bold text-brand-navy hover:brightness-95 transition"
            >
              {"Get Your Free Analysis \u2192"}
            </Link>
            <p className="text-sm text-foreground/60">
              Leave your email and company name. We{"'"}ll do the rest — for free.
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
