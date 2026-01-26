import {
  FolderKanban,
  Building2,
  CheckCircle,
  Clock,
  Github,
  ExternalLink,
  Code
} from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre avec icône */}
        <h2 className="flex items-center gap-3 text-3xl font-bold text-primary mb-12">
          <FolderKanban className="w-7 h-7" />
          Projets réalisés
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Projet DPI */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">

            <span className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Building2 className="w-4 h-4" />
              Projet institutionnel
            </span>

            <h3 className="text-xl font-semibold text-textMain mt-2 mb-4">
              Système de Dossier Patient Informatisé (DPI)
            </h3>

            <p className="text-textMuted mb-4">
              Conception et accompagnement de la mise en œuvre d’un système DPI
              destiné à centraliser, sécuriser et exploiter les données médicales
              au sein des établissements de santé.
            </p>

            {/* Liste avec icônes */}
            <ul className="text-textMain space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Analyse des processus métiers de santé</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Paramétrage fonctionnel du DPI</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Support et formation des utilisateurs</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Contribution à la qualité des données</span>
              </li>
            </ul>

            <div className="text-sm text-textMuted">
              <strong>Contexte :</strong> Winlogic · DISD · UCP · Banque Mondiale
            </div>
          </div>

          {/* Projets personnels */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">

            <span className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Code className="w-4 h-4" />
              Projet personnel
            </span>

            <h3 className="text-xl font-semibold text-textMain mt-2 mb-4">
              gestion_personnel
            </h3>

            <p className="text-textMuted mb-4">
              C'est une application web de gestion du personnel pour une administration.Elle permet de gérer :Employés,Services,Congés , permissions,Présence etComptes utilisateurs
            </p>

            {/* Liste avec icônes */}
            <ul className="text-textMain space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Next.js+ TypeScript + Chart.js</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>API Routes / Route Handlers</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Prisma pour parler à PostgreSQL</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <a
                href="https://github.com/ismaelbini/health-dashboard"
                target="_blank"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Github className="w-4 h-4" />
                Voir le code
              </a>
              <a
                href="https://health-dashboard-demo.vercel.app"
                target="_blank"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Démo live
              </a>
            </div>
          </div>

          {/* Projet académique */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">

            <span className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Code className="w-4 h-4" />
              Projet académique
            </span>

            <h3 className="text-xl font-semibold text-textMain mt-2 mb-4">
              Système de détection / reconnaissance faciale
            </h3>

            <p className="text-textMuted mb-4">
              Projet universitaire : Système de détection et reconnaissance faciale

Développement d’une application de vision par ordinateur en Python

Utilisation d’OpenCV pour la capture vidéo et la détection de visages en temps réel

Visualisation des résultats avec Matplotlib

Implémentation d’algorithmes de traitement d’images et de classification
            </p>

            {/* Liste avec icônes */}
            <ul className="text-textMain space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Python</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>OpenCV</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Matplotlib</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <a
                href="https://github.com/ismaelbini/medical-office"
                target="_blank"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Github className="w-4 h-4" />
                Voir le code
              </a>
              <a
                href="https://medical-office-demo.vercel.app"
                target="_blank"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Démo live
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
