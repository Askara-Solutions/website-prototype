export function TeamIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 400" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8CFF33" />
          <stop offset="100%" stopColor="#5BCF1A" />
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C42" />
          <stop offset="100%" stopColor="#FF5500" />
        </linearGradient>
      </defs>
      {/* Background shapes */}
      <rect x="60" y="80" width="360" height="240" rx="24" fill="url(#greenGrad)" opacity="0.12" />
      <circle cx="380" cy="100" r="40" fill="url(#orangeGrad)" opacity="0.15" />
      <circle cx="100" cy="300" r="30" fill="url(#greenGrad)" opacity="0.2" />
      {/* Desk */}
      <rect x="120" y="250" width="240" height="12" rx="6" fill="#003049" opacity="0.15" />
      {/* Person 1 */}
      <circle cx="180" cy="180" r="28" fill="url(#greenGrad)" />
      <rect x="162" y="210" width="36" height="50" rx="10" fill="url(#greenGrad)" opacity="0.8" />
      <circle cx="180" cy="180" r="10" fill="#003049" opacity="0.2" />
      {/* Person 2 */}
      <circle cx="260" cy="170" r="32" fill="url(#greenGrad)" opacity="0.85" />
      <rect x="240" y="204" width="40" height="56" rx="12" fill="url(#greenGrad)" opacity="0.7" />
      <circle cx="260" cy="170" r="12" fill="#003049" opacity="0.2" />
      {/* Person 3 */}
      <circle cx="340" cy="185" r="26" fill="url(#orangeGrad)" opacity="0.7" />
      <rect x="324" y="213" width="32" height="46" rx="10" fill="url(#orangeGrad)" opacity="0.5" />
      <circle cx="340" cy="185" r="9" fill="#003049" opacity="0.2" />
      {/* Checkmark / badge */}
      <circle cx="260" cy="120" r="22" fill="url(#greenGrad)" />
      <path d="M250 120 L257 127 L272 112" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Floating elements */}
      <rect x="130" y="120" width="28" height="28" rx="6" fill="url(#orangeGrad)" opacity="0.3" />
      <rect x="370" y="220" width="24" height="24" rx="5" fill="url(#greenGrad)" opacity="0.35" />
      <circle cx="400" cy="160" r="8" fill="url(#orangeGrad)" opacity="0.4" />
      <circle cx="110" cy="200" r="6" fill="url(#greenGrad)" opacity="0.4" />
    </svg>
  )
}

export function PaperworkIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 240" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="orangeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C42" />
          <stop offset="100%" stopColor="#FF5500" />
        </linearGradient>
      </defs>
      {/* Stacked papers */}
      <rect x="60" y="40" width="160" height="180" rx="12" fill="url(#orangeGrad2)" opacity="0.12" />
      <rect x="72" y="50" width="140" height="160" rx="10" fill="url(#orangeGrad2)" opacity="0.18" />
      <rect x="84" y="60" width="120" height="140" rx="8" fill="url(#orangeGrad2)" opacity="0.25" />
      {/* Lines on paper */}
      <rect x="100" y="85" width="80" height="6" rx="3" fill="url(#orangeGrad2)" opacity="0.4" />
      <rect x="100" y="100" width="60" height="6" rx="3" fill="url(#orangeGrad2)" opacity="0.4" />
      <rect x="100" y="115" width="70" height="6" rx="3" fill="url(#orangeGrad2)" opacity="0.4" />
      <rect x="100" y="130" width="50" height="6" rx="3" fill="url(#orangeGrad2)" opacity="0.4" />
      {/* Person overwhelmed */}
      <circle cx="200" cy="100" r="22" fill="url(#orangeGrad2)" opacity="0.6" />
      <circle cx="200" cy="100" r="8" fill="#003049" opacity="0.2" />
      <rect x="186" y="124" width="28" height="40" rx="8" fill="url(#orangeGrad2)" opacity="0.5" />
      {/* X marks */}
      <g stroke="url(#orangeGrad2)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5">
        <line x1="108" y1="148" x2="118" y2="158" />
        <line x1="118" y1="148" x2="108" y2="158" />
      </g>
      <g stroke="url(#orangeGrad2)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5">
        <line x1="132" y1="148" x2="142" y2="158" />
        <line x1="142" y1="148" x2="132" y2="158" />
      </g>
    </svg>
  )
}

export function ConfidentTeamIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 240" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="greenGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8CFF33" />
          <stop offset="100%" stopColor="#5BCF1A" />
        </linearGradient>
      </defs>
      {/* Glow background */}
      <ellipse cx="140" cy="130" rx="110" ry="90" fill="url(#greenGrad2)" opacity="0.1" />
      {/* Person 1 */}
      <circle cx="100" cy="110" r="24" fill="url(#greenGrad2)" />
      <rect x="84" y="136" width="32" height="44" rx="10" fill="url(#greenGrad2)" opacity="0.8" />
      <circle cx="100" cy="110" r="9" fill="#003049" opacity="0.2" />
      {/* Person 2 */}
      <circle cx="180" cy="105" r="28" fill="url(#greenGrad2)" opacity="0.85" />
      <rect x="162" y="135" width="36" height="50" rx="10" fill="url(#greenGrad2)" opacity="0.7" />
      <circle cx="180" cy="105" r="10" fill="#003049" opacity="0.2" />
      {/* Checkmarks */}
      <circle cx="140" cy="60" r="18" fill="url(#greenGrad2)" />
      <path d="M132 60 L137 65 L149 53" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Rising arrow */}
      <path d="M60 200 L140 140 L220 90" stroke="url(#greenGrad2)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
      <polygon points="220,82 228,94 212,94" fill="url(#greenGrad2)" opacity="0.4" />
      {/* Dots */}
      <circle cx="60" cy="80" r="5" fill="url(#greenGrad2)" opacity="0.3" />
      <circle cx="230" cy="150" r="7" fill="url(#greenGrad2)" opacity="0.25" />
    </svg>
  )
}

export function AssessIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gIco1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8CFF33" />
          <stop offset="100%" stopColor="#5BCF1A" />
        </linearGradient>
      </defs>
      <rect x="12" y="8" width="40" height="48" rx="8" fill="url(#gIco1)" opacity="0.2" />
      <circle cx="32" cy="28" r="10" stroke="url(#gIco1)" strokeWidth="3" fill="none" />
      <line x1="39" y1="35" x2="46" y2="42" stroke="url(#gIco1)" strokeWidth="3" strokeLinecap="round" />
      <rect x="20" y="44" width="24" height="4" rx="2" fill="url(#gIco1)" opacity="0.5" />
    </svg>
  )
}

export function EngageIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gIco2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8CFF33" />
          <stop offset="100%" stopColor="#5BCF1A" />
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="48" height="40" rx="8" fill="url(#gIco2)" opacity="0.2" />
      <circle cx="24" cy="28" r="8" fill="url(#gIco2)" opacity="0.6" />
      <circle cx="40" cy="28" r="8" fill="url(#gIco2)" opacity="0.6" />
      <path d="M20 42 Q32 50 44 42" stroke="url(#gIco2)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function CertifyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gIco3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8CFF33" />
          <stop offset="100%" stopColor="#5BCF1A" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="28" r="20" fill="url(#gIco3)" opacity="0.2" />
      <path d="M24 28 L30 34 L42 22" stroke="url(#gIco3)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M26 48 L32 54 L38 48" stroke="url(#gIco3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="26" y1="48" x2="26" y2="40" stroke="url(#gIco3)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="48" x2="38" y2="40" stroke="url(#gIco3)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
