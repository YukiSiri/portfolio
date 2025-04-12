import React from 'react';

export default function TechWatchSection() {
  const techWatchTopics = [
    {
      title: "Langages de programmation à la mode en 2025",
      method: "Recherches effectuées via des sources fiables et récentes (mars-avril 2025). Consultation de l'index TIOBE (référence mondiale de classement des langages). Analyse de blogs spécialisés (Blog du Modérateur, Free-Work, etc.).",
      results: {
        leaders: ["Python", "C++", "Java", "C", "C#", "JavaScript", "Go", "SQL"],
        emerging: ["Rust (cybersécurité)", "Go (cloud)", "TypeScript (web)", "Swift (iOS)", "Kotlin (Android)"],
        trends: [
          "Python reste le plus utilisé grâce à sa polyvalence.",
          "Rust et Go sont de plus en plus populaires pour leurs performances et sécurité.",
          "Le typage statique gagne du terrain dans le développement web avec TypeScript."
        ]
      }
    },
    {
      title: "Automatisation / RPA en 2025",
      method: "Recherches sur des blogs professionnels spécialisés (Blue Prism, LinkedIn Tech, The Verge). Analyse de rapports de tendances publiés en 2025 par des entreprises de RPA. Lecture d'articles sur les perspectives d'évolution de la RPA.",
      results: {
        generalTrend: "Passage de la RPA simple à une automatisation intelligente, intégrant l'IA.",
        keyEvolutions: [
          "Hyperautomatisation : combinaison RPA + IA + analyse de processus.",
          "Bots intelligents : traitement du langage naturel, documents, e-mails.",
          "Plateformes low-code/no-code : accessibilité accrue.",
          "Automatisation sans surveillance : processus autonomes.",
          "Agents IA : bots capables de prendre des décisions complexes."
        ]
      }
    }
  ];

  return (
    <section id="tech-watch" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Veille Technologique</h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Découvrez les dernières tendances technologiques.
          </p>
        </div>

        <div className="grid gap-8">
          {techWatchTopics.map((topic, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{topic.title}</h3>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Méthode utilisée :</h4>
                <p className="text-neutral-600">{topic.method}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Résultats :</h4>
                {topic.title === "Langages de programmation à la mode en 2025" ? (
                  <ul className="list-disc list-inside text-neutral-600">
                    <li>Langages leaders : {topic.results.leaders?.join(", ") || "Aucun langage leader trouvé"}</li>
                    <li>Langages émergents : {topic.results.emerging?.join(", ") || "Aucun langage émergent trouvé"}</li>
                    <li>Tendances :</li>
                    <ul className="list-disc list-inside ml-4">
                      {topic.results.trends?.map((trend, i) => (
                        <li key={i}>{trend}</li>
                      ))}
                    </ul>
                  </ul>
                ) : (
                  <div className="text-neutral-600">
                    <p>{topic.results.generalTrend}</p>
                    <h5 className="font-semibold">Évolutions clés :</h5>
                    <ul className="list-disc list-inside ml-4">
                      {topic.results.keyEvolutions?.map((evolution, i) => (
                        <li key={i}>{evolution}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}