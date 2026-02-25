"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AskaraLogo } from "@/components/askara-logo"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export default function FreeAnalysisPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [newsletter, setNewsletter] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Free Analysis Request — ${company}`
    )
    const bodyParts = [
      `Name: ${name}`,
      `Work Email: ${email}`,
      `Company: ${company}`,
      `Newsletter: ${newsletter ? "Yes, subscribe me" : "No thanks"}`,
    ]
    const body = encodeURIComponent(bodyParts.join("\n"))

    window.location.href = `mailto:hello@askara.solutions?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-light-bg">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-brand-navy transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          {!submitted ? (
            <div className="rounded-2xl bg-background p-8 md:p-12 shadow-sm border border-[#e5e5e5]">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="flex justify-center mb-6">
                  <AskaraLogo size="large" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy text-balance">
                  Get Your Free Security Analysis
                </h1>
                <p className="mt-4 text-foreground/70 leading-relaxed max-w-md mx-auto">
                  Fill in your details below and we{"'"}ll run a full security
                  analysis of your organisation. No sales pitch. No obligation.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border border-[#e5e5e5] bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition"
                  />
                </div>

                {/* Work email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border border-[#e5e5e5] bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition"
                  />
                </div>

                {/* Company name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-foreground"
                  >
                    Company name
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Acme Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="rounded-xl border border-[#e5e5e5] bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition"
                  />
                </div>

                {/* Newsletter checkbox */}
                <div className="mt-2 rounded-xl bg-light-bg p-4">
                  <label
                    htmlFor="newsletter"
                    className="flex items-start gap-3 cursor-pointer"
                  >
                    <input
                      id="newsletter"
                      type="checkbox"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-0.5 h-5 w-5 shrink-0 rounded border-[#e5e5e5] accent-brand-green cursor-pointer"
                    />
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        Subscribe to the Askara newsletter
                      </span>
                      <p className="mt-0.5 text-xs text-foreground/60 leading-relaxed">
                        Get insights on how AI is changing cybersecurity and
                        compliance for startups and SMEs. No spam — just useful
                        reads, once or twice a month.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-brand-green px-6 py-3.5 text-base font-bold text-brand-navy hover:brightness-95 transition"
                >
                  {"Submit & Get Your Free Analysis \u2192"}
                </button>

                <p className="text-center text-xs text-foreground/40 mt-1">
                  We{"'"}ll reach out within 2 business days. Your data stays
                  safe — always.
                </p>
              </form>
            </div>
          ) : (
            /* Success state */
            <div className="rounded-2xl bg-background p-8 md:p-12 shadow-sm border border-[#e5e5e5] text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15">
                  <CheckCircle2 className="h-8 w-8 text-brand-green" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy">
                Thank you, {name}!
              </h2>
              <p className="mt-4 text-foreground/70 leading-relaxed max-w-md mx-auto">
                Your email client should have opened with your details
                pre-filled. Just hit send and we{"'"}ll get back to you within 2
                business days with a full security analysis for {company}.
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white hover:bg-brand-navy/90 transition"
              >
                <ArrowLeft size={16} />
                Back to homepage
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
