import { FadeIn } from "@/components/fade-in"
import {
  PaperworkIllustration,
  ConfidentTeamIllustration,
} from "@/components/illustrations"

export function ProblemSolution() {
  return (
    <section id="why-askara" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-4 text-center">
            Why Askara
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-12">
          {/* Problem */}
          <FadeIn>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <PaperworkIllustration className="w-48 h-auto mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy text-balance">
                Compliance theater is everywhere.
              </h2>
              <p className="mt-4 text-foreground leading-relaxed max-w-md">
                Compliance has become a badge. Expensive to get, painful to
                maintain, and completely disconnected from the real threats your
                company faces every day. Your certificate sits on the wall while
                your team clicks suspicious links.
              </p>
            </div>
          </FadeIn>

          {/* Solution */}
          <FadeIn>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <ConfidentTeamIllustration className="w-48 h-auto mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy text-balance">
                We make security actually stick.
              </h2>
              <p className="mt-4 text-foreground leading-relaxed max-w-md">
                Askara gives you certification that lasts, monitoring that never
                stops, and training that changes how your team actually behaves
                — not just what they know.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
