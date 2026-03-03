import { FadeIn } from "@/components/fade-in"
import {
  CertifyIcon,
  EngageIcon,
  AssessIcon,
} from "@/components/illustrations"

const steps = [
  {
    number: "01",
    title: "Certify",
    description:
      "We automate your ISO 27001 workflows so you get certified quickly and affordably \u2014 and stay certified, without the annual consultant bill.",
    Icon: CertifyIcon,
  },
  {
    number: "02",
    title: "Monitor",
    description:
      "Askara continuously analyses the real cyber threats your company faces \u2014 phishing, social engineering, targeted attacks \u2014 and keeps you informed as the landscape evolves.",
    Icon: AssessIcon,
  },
  {
    number: "03",
    title: "Train & Sustain",
    description:
      "We turn best practices into real habits through engaging, ongoing employee training. Your team learns, adapts, and actually becomes more secure \u2014 for good.",
    Icon: EngageIcon,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-parchment-2 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-balance">
            From overwhelmed to certified — without the pain.
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <FadeIn key={step.number}>
              <div className="bg-background rounded-2xl p-8 h-full flex flex-col items-start shadow-sm border border-border">
                <span className="text-4xl font-extrabold text-green">
                  {step.number}
                </span>
                <step.Icon className="w-16 h-16 mt-4" />
                <h3 className="mt-4 text-xl font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
