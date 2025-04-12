import { Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsSection() {
  const categories = ["Tous", "Web", "Mobile", "Design"]

  const projects = [
    {
      id: 1,
      title: "Stage informatique de BTS (1ère année)",
      description: "Développeur Full Stack - La tête dans la toile - avr / mai 2024. Correction de bugs en PHP, création de maquettes en HTML / SCSS, mise en place d’une application de surveillance.",
      category: "Web",
    },
    {
      id: 2,
      title: "Stage informatique de BTS (2e année)",
      description: "Développeur Full Stack - PLR Conseil - janv / fev 2025. Mis Utilisation de PostgreSQL et Liquibase, mise en place du backend en Java Spring Boot avec JooQ. Avec un frontend en Next.js.",
      category: "Web",
    },
    {
      id: 3,
      title: "Projet de fin de formation BTS SIO",
      description: "Mise en place d'une API en .NET avec un client lourd en WPF avec une base de données en SQL Server. Puis création d'un service web avec symfony qui utilise l'API .NET.",
      category: "Web",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Mes projets</h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Découvrez une sélection de mes travaux récents et de mes réalisations.
          </p>
        </div>

        <Tabs defaultValue="Tous" className="mb-12">
          <TabsList className="mx-auto flex w-fit">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => category === "Tous" || project.category === category)
                  .reverse() // Inverser l'ordre des projets
                  .map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                            {project.category}
                          </span>
                        </div>
                        <p className="mb-4 text-neutral-600">{project.description}</p>
                        <div className="flex gap-3">
                          {project.githubUrl && (
                            <Button asChild size="sm" variant="outline">
                              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </Link>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center">
          <Button variant="outline">Voir plus de projets</Button>
        </div>
      </div>
    </section>
  )
}
