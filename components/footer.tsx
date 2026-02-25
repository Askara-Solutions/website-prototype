import { Linkedin } from "lucide-react"
import Link from "next/link"
import { AskaraLogo } from "@/components/askara-logo"

export function Footer() {
  return (
    <footer className="bg-[#000000] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo & tagline */}
          <div className="flex flex-col gap-2">
            <Link href="/">
              <AskaraLogo textColor="text-white" />
            </Link>
            <p className="text-sm text-white/50">
              Cyber security, minus the theater.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">
            <a href="/#how-it-works" className="text-sm text-white hover:text-brand-green transition-colors">
              How it Works
            </a>
            <a href="/#why-askara" className="text-sm text-white hover:text-brand-green transition-colors">
              Why Askara
            </a>
            <a href="/#for-teams" className="text-sm text-white hover:text-brand-green transition-colors">
              For Teams
            </a>
            <Link href="/free-analysis" className="text-sm text-white hover:text-brand-green transition-colors">
              Get Free Analysis
            </Link>
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@askara.solutions"
              className="text-sm text-white hover:text-brand-green transition-colors"
            >
              hello@askara.solutions
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/60 hover:text-brand-green transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            {"© 2025 Askara. All rights reserved."}
          </p>
          <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
