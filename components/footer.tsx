import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col items-center gap-4 md:items-start">
                        <Link href="#top" className="text-xl font-bold tracking-tight">
                            Portfolio
                        </Link>
                        <p className="text-center text-sm text-neutral-600 md:text-left">
                        Développeur en cours de formation.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 md:items-end">
                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/YukiSiri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-neutral-100 p-2 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href="https://linkedin.com/in/alexandre-levenez-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-neutral-100 p-2 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                        <p className="text-sm text-neutral-500">© {currentYear} Alexandre Levenez. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
