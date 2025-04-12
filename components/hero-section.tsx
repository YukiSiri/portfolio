import { ArrowDown, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden py-20">
      <div className="absolute -top-40 left-0 right-0 h-96 w-full bg-gradient-to-br from-neutral-100 to-transparent opacity-50" />
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">Bonjour, je suis</span>
          <span className="mt-2 block bg-gradient-to-r from-neutral-800 to-neutral-500 bg-clip-text text-transparent">
            Levenez Alexandre
          </span>
        </h1>
        <p className="mb-8 max-w-2xl text-xl text-neutral-600">
          Développeur en cours de formation.
        </p>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">Voir mes projets</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Me contacter</Link>
          </Button>
        </div>
        <div className="flex gap-6">
          <Link
            href="https://github.com/YukiSiri"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-neutral-100 p-3 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/alexandre-levenez-/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-neutral-100 p-3 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
      >
        <span>Découvrir</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </Link>
    </section>
  )
}
