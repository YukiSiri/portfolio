import { Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Me contacter</h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Vous avez un projet en tête ou une question ? N&apos;hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Email</h3>
              <p className="text-neutral-600">alexandre.levenez1@gmail.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Localisation</h3>
              <p className="text-neutral-600">Nantes, France</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
