import { Linkedin } from "lucide-react"
import Link from "next/link"
import { AskaraLogo } from "@/components/askara-logo"

export function Footer() {
  return (
    <footer className="bg-grad-navy-depth py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo & tagline */}
          <div className="flex flex-col gap-2">
            <Link href="/">
              <AskaraLogo textColor="text-parchment-1" />
            </Link>
            <p className="text-sm text-parchment-1/50">
              Cyber security, minus the theater.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">
            <a href="/#how-it-works" className="text-sm text-parchment-1/70 hover:text-green transition-colors">
              How it Works
            </a>
            <a href="/#why-askara" className="text-sm text-parchment-1/70 hover:text-green transition-colors">
              Why Askara
            </a>
            <a href="/#for-teams" className="text-sm text-parchment-1/70 hover:text-green transition-colors">
              For Teams
            </a>
            <Link href="/product" className="text-sm text-parchment-1/70 hover:text-green transition-colors">
              Product
            </Link>
            <Link href="/free-analysis" className="text-sm text-parchment-1/70 hover:text-green transition-colors">
              Get Free Analysis
            </Link>
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@askara.solutions"
              className="text-sm text-parchment-1/70 hover:text-green transition-colors"
            >
              hello@askara.solutions
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-parchment-1/50 hover:text-green transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-parchment-1/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-parchment-1/30">
            {"© 2026 Askara. All rights reserved."}
          </p>
          <a href="#" className="text-xs text-parchment-1/30 hover:text-parchment-1/60 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
