// components/reports-section.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReportsSection() {
  const reports = [
    {
      title: "Rapport de stage - Entreprise La tête dans la toile",
      description: "Stage de développement web - 5 semaines",
      date: "Avril - Mai 2024",
      fileUrl: "../documents/Rapport-de-stage-LEVENEZ-Alexandre-1.pdf",
      fileName: "Rapport-de-stage-LEVENEZ-Alexandre-1.pdf", // Nom du fichier à télécharger
    },
    {
      title: "Rapport de stage - Entreprise PLR Conseil",
      description: "Stage de développement - 5 semaines",
      date: "Janvier - Février 2025",
      fileUrl: "../documents/Rapport-de-stage-LEVENEZ-Alexandre-2.pdf",
      fileName: "Rapport-de-stage-LEVENEZ-Alexandre-2.pdf", // Nom du fichier à télécharger
    },
  ];

  return (
    <section id="reports" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Mes Rapports</h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Téléchargez mes rapports de stage.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {reports.map((report, index) => (
            <Link key={index} href={report.fileUrl} download={report.fileName}>
              <Button variant="outline" className="mb-4">
                {report.title} - {report.date}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}