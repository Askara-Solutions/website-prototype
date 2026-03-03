import Link from "next/link"
import { FadeIn } from "@/components/fade-in"

export function FreeAnalysisCTA() {
  return (
    <section className="bg-grad-deep-canopy py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <p className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-green mb-6">
            Free · No obligation
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-parchment-1 text-balance">
            Find out exactly where your team stands.
          </h2>
          <p className="mt-4 text-parchment-1/75 leading-relaxed max-w-lg mx-auto">
            Leave your email and company name. We{"'"}ll run a full security
            analysis of your organisation and come back to you personally. No
            sales pitch. No obligation.
          </p>

          <div className="mt-10">
            <Link
              href="/free-analysis"
              className="inline-flex items-center rounded-full bg-green-hover px-8 py-3.5 text-base font-bold text-navy hover:brightness-95 transition shadow-glow-green hover:shadow-glow-green-hover"
            >
              {"Get Your Free Analysis \u2192"}
            </Link>
          </div>

          <p className="mt-4 text-xs text-parchment-1/40">
            We{"'"}ll reach out within 2 business days. No spam. Just real
            insights.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
