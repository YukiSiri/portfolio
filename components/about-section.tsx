import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">À propos</h2>
          <p className="mx-auto max-w-2xl text-neutral-600">Apprenez-en plus sur mon parcours et mes passions.</p>
        </div>

        <div className="grid gap-12 md:grid-cols-1">
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl text-center font-bold">Qui suis-je?</h3>
            <p className="mb-6 text-neutral-600 text-center">
              Je suis actuellement un étudiant en développement web et mobile.
              J&apos;aime apprendre de nouvelles technologies et mettre en pratique mes connaissances.
              Je suis un passionné de la programmation et de la création de sites web.
            </p>
            <p className="mb-8 text-neutral-600 text-center">
              En dehors du code, je m&apos;intéresse à la course à pied, à la pop culture en générale.
              Je suis toujours à la recherche de nouvelles technologies à explorer et de nouveaux défis à relever.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="../public/documents/cv.pdf" download="cv.pdf">
                <Button variant="outline" className="w-full sm:w-auto">
                  Télécharger mon CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
