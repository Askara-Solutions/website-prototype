import { FadeIn } from "@/components/fade-in"
import { Cpu, Zap, Wallet, Brain, TrendingUp, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Cpu,
    label: "AI-powered, human-delivered",
    desc: "Smart tools, real people",
  },
  {
    icon: Zap,
    label: "Faster to certification",
    desc: "No months of back-and-forth",
  },
  {
    icon: Wallet,
    label: "Built for SMB budgets",
    desc: "Enterprise-grade, SME-friendly pricing",
  },
  {
    icon: Brain,
    label: "Behavioral change",
    desc: "Not box-ticking, actual culture shift",
  },
  {
    icon: TrendingUp,
    label: "Scales with your team",
    desc: "Grows as you grow",
  },
  {
    icon: MessageCircle,
    label: "Jargon-free",
    desc: "Compliance in plain language",
  },
]

export function KeyBenefits() {
  return (
    <section id="for-teams" className="bg-brand-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-4">
            Built for real teams
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-balance">
            Everything compliance should be. Finally.
          </h2>
        </FadeIn>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <FadeIn key={b.label}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <b.icon className="h-6 w-6 text-brand-green" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{b.label}</h3>
                  <p className="mt-1 text-sm text-white/70">{b.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
