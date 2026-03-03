import Image from "next/image"

export function AskaraLogo({
  className = "",
  textColor = "text-navy",
  size = "default",
}: {
  className?: string
  textColor?: string
  size?: "default" | "large"
}) {
  const iconSize = size === "large" ? 40 : 32
  const textSize = size === "large" ? "text-2xl" : "text-xl"

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/askara-logo.png"
        alt="Askara"
        width={iconSize}
        height={iconSize}
        className="object-contain"
      />
      <span className={`${textSize} font-bold ${textColor}`}>Askara</span>
    </span>
  )
}
