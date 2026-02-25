export function AskaraLogo({
  className = "",
  textColor = "text-brand-navy",
  size = "default",
}: {
  className?: string
  textColor?: string
  size?: "default" | "large"
}) {
  const iconSize = size === "large" ? "h-10 w-10" : "h-8 w-8"
  const textSize = size === "large" ? "text-2xl" : "text-xl"

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className={iconSize}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8CFF33" />
            <stop offset="100%" stopColor="#5BCF1A" />
          </linearGradient>
        </defs>
        {/* Shield shape */}
        <path
          d="M20 2 L36 10 L36 22 C36 30 28 37 20 39 C12 37 4 30 4 22 L4 10 Z"
          fill="url(#logoGrad)"
        />
        {/* Checkmark */}
        <path
          d="M14 20 L18 24 L27 15"
          stroke="#003049"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className={`${textSize} font-bold ${textColor}`}>Askara</span>
    </span>
  )
}
