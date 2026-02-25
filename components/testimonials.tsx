import { FadeIn } from "@/components/fade-in"

const testimonials = [
  {
    quote:
      "We\u2019d tried compliance tools before and nothing stuck. Askara was the first time our whole team actually got it \u2014 and enjoyed the process.",
    name: "Sarah M.",
    role: "Operations Lead",
    company: "45-person SaaS company",
  },
  {
    quote:
      "We got certified faster than we expected, and more importantly, our team\u2019s mindset genuinely shifted. It doesn\u2019t feel like a checkbox anymore.",
    name: "Tom V.",
    role: "CEO",
    company: "Scale-up (80 employees)",
  },
  {
    quote:
      "Finally a compliance platform that doesn\u2019t make my eyes glaze over. The team actually look forward to the sessions.",
    name: "Lena K.",
    role: "Head of People",
    company: "30-person tech company",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-4">
            What teams say
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy text-balance max-w-3xl mx-auto">
            Teams who stopped performing security — and started living it.
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <FadeIn key={t.name}>
              <div className="bg-background border border-[#e5e5e5] rounded-2xl p-8 h-full flex flex-col shadow-sm border-l-4 border-l-brand-green">
                <blockquote className="text-foreground leading-relaxed flex-1">
                  {"\u201C"}{t.quote}{"\u201D"}
                </blockquote>
                <div className="mt-6 pt-4 border-t border-[#e5e5e5]">
                  <p className="font-bold text-brand-navy">{t.name}</p>
                  <p className="text-sm text-foreground/60">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
