import Link from "next/link"
import { FadeIn } from "@/components/fade-in"

export function FreeAnalysisCTA() {
  return (
    <section className="bg-brand-navy py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-balance">
            Find out exactly where your team stands — for free.
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed max-w-lg mx-auto">
            Leave your email and company name. We{"'"}ll run a full security
            analysis of your organisation and come back to you personally. No
            sales pitch. No obligation.
          </p>

          <div className="mt-10">
            <Link
              href="/free-analysis"
              className="inline-flex items-center rounded-full bg-brand-green px-8 py-3.5 text-base font-bold text-brand-navy hover:brightness-95 transition"
            >
              {"Get Your Free Analysis \u2192"}
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/50">
            We{"'"}ll reach out within 2 business days. No spam. Just real
            insights.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
