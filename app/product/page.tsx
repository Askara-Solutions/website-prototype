"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export default function ProductPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Waitlist Signup — ${company}`
    )
    const bodyParts = [
      `Name: ${name}`,
      `Work Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role}`,
    ]
    const body = encodeURIComponent(bodyParts.join("\n"))

    window.location.href = `mailto:hello@askara.solutions?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-parchment-2">

        {/* Hero */}
        <div className="bg-grad-navy-depth py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-green mb-6">
              Coming soon
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-parchment-1 text-balance leading-tight">
              ISO 27001 certification your team will actually get behind.
            </h1>
            <p className="mt-6 text-parchment-1/75 text-lg leading-relaxed max-w-xl mx-auto">
              Askara automates the compliance work so you can focus on the part
              that matters — building a security culture that holds long after
              the audit.
            </p>
          </div>
        </div>

        {/* What you get */}
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-extrabold text-navy text-center mb-10">
            What Askara does differently
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "Automates the paperwork",
                body: "Evidence collection, policy templates, and audit prep — handled. Your team focuses on real security, not documentation.",
              },
              {
                label: "Built for SMEs, not enterprises",
                body: "Sized for 10–150 person teams. No enterprise pricing, no bloated feature sets your CTO doesn't have time to configure.",
              },
              {
                label: "Culture, not just a certificate",
                body: "Training your team will actually remember. Compliance that holds after the audit because your team genuinely gets it.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-background p-6 border border-border">
                <p className="text-sm font-bold text-navy mb-2">{item.label}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Waitlist form */}
        <div className="mx-auto max-w-2xl px-6 pb-20">
          {!submitted ? (
            <div className="rounded-2xl bg-background p-8 md:p-12 shadow-sm border border-border">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy text-balance">
                  Join the waitlist
                </h2>
                <p className="mt-3 text-foreground/70 leading-relaxed max-w-md mx-auto">
                  We{"'"}re onboarding a small group of European SMEs first.
                  Leave your details and we{"'"}ll reach out when your spot is ready.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-green focus:ring-2 focus:ring-green/20 transition"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-sm font-medium text-foreground">
                    Your role
                  </label>
                  <input
                    id="role"
                    type="text"
                    required
                    placeholder="COO, CTO, Head of Security..."
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-green focus:ring-2 focus:ring-green/20 transition"
                  />
                </div>

                {/* Work email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-green focus:ring-2 focus:ring-green/20 transition"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company name
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Acme Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-green focus:ring-2 focus:ring-green/20 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-green-hover px-6 py-3.5 text-base font-bold text-navy hover:brightness-95 transition"
                >
                  {"Join the waitlist \u2192"}
                </button>

                <p className="text-center text-xs text-foreground/40 mt-1">
                  No spam. We{"'"}ll only reach out when your spot is ready.
                </p>
              </form>
            </div>
          ) : (
            <div className="rounded-2xl bg-background p-8 md:p-12 shadow-sm border border-border text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-hover/15">
                  <CheckCircle2 className="h-8 w-8 text-green" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
                You{"'"}re on the list, {name}.
              </h2>
              <p className="mt-4 text-foreground/70 leading-relaxed max-w-md mx-auto">
                We{"'"}re onboarding carefully. When your spot opens up, you{"'"}ll
                hear from us directly — no automated blasts, just a real message.
              </p>
              <p className="mt-3 text-foreground/50 text-sm">
                In the meantime, want to understand exactly where{" "}
                {company || "your team"} stands on ISO 27001 right now?
              </p>
              <Link
                href="/free-analysis"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-green-hover px-6 py-3 text-sm font-bold text-navy hover:brightness-95 transition"
              >
                {"Get a free security analysis \u2192"}
              </Link>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-navy transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to homepage
                </Link>
              </div>
            </div>
          )}
        </div>

      </main>
      <Footer />
    </>
  )
}
