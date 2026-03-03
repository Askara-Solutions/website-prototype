"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { AskaraLogo } from "@/components/askara-logo"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <AskaraLogo />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#how-it-works" className="text-sm font-medium text-foreground hover:text-navy transition-colors">
            How it Works
          </a>
          <a href="/#why-askara" className="text-sm font-medium text-foreground hover:text-navy transition-colors">
            Why Askara
          </a>
          <a href="/#for-teams" className="text-sm font-medium text-foreground hover:text-navy transition-colors">
            For Teams
          </a>
          <Link href="/product" className="text-sm font-medium text-foreground hover:text-navy transition-colors">
            Product
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/free-analysis"
          className="hidden md:inline-flex items-center rounded-full bg-green-hover px-6 py-2.5 text-sm font-bold text-navy hover:brightness-95 transition shadow-glow-green hover:shadow-glow-green-hover"
        >
          {"Get Your Free Analysis \u2192"}
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 flex flex-col gap-4">
          <a href="/#how-it-works" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">
            How it Works
          </a>
          <a href="/#why-askara" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">
            Why Askara
          </a>
          <a href="/#for-teams" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">
            For Teams
          </a>
          <Link href="/product" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">
            Product
          </Link>
          <Link
            href="/free-analysis"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-green-hover px-6 py-2.5 text-sm font-bold text-navy"
          >
            {"Get Your Free Analysis \u2192"}
          </Link>
        </div>
      )}
    </nav>
  )
}
