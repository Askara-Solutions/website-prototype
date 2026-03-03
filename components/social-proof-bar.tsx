import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const logos = [
  {
    name: "Tehnopol",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tehnopol_logo_GRAY-YPK1EgfhgbJaIsFYR7np8obVz6hoWA.png",
    width: 140,
    height: 60,
  },
  {
    name: "Co-funded by the European Union",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/co-funded-by-eu-nnmhr00MkglAY2rulPgphJLlXCsrJq.png",
    width: 180,
    height: 50,
  },
  {
    name: "TalTech",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taltech_logo-FxH6ovSUK18DnrlyqAUYUmuV8yCZk6.png",
    width: 100,
    height: 55,
  },
  {
    name: "Qwello",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Qwello%20logo-vssHSHHEAIHXdCj3dODUCHmzENtrW2.png",
    width: 140,
    height: 45,
  },
]

export function SocialProofBar() {
  return (
    <section className="bg-grad-navy-depth py-10">
      <FadeIn>
        <p className="text-center text-sm text-parchment-1/70 mb-8">
          Trusted by growing teams and organisations across Europe
        </p>
        <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-10 px-6 md:gap-14">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-10 md:h-12 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
