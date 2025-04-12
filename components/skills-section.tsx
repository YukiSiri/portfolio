import { Code, Database, Layout, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6" />,
      skills: ["C#", "Java", "Python", "PHP"],
    },
    {
      title: "Design",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma", "UI/UX"],
    },
    {
      title: "Autres",
      icon: <Code className="h-6 w-6" />,
      skills: ["Git", "TypeScript", "Linux", "Postgres"],
    },
  ]

  return (
    <section id="skills" className="bg-neutral-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Mes compétences</h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Les technologies et outils avec lesquels j&apos;aime travailler.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>Mes compétences en {category.title.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-neutral-800"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
