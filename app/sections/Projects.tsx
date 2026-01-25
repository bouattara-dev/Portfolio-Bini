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
              Dashboard Analytics Système
            </h3>

            <p className="text-textMuted mb-4">
              Dashboard interactif pour la visualisation des données de santé en temps réel,
              avec des graphiques dynamiques et des alertes personnalisées.
            </p>

            {/* Liste avec icônes */}
            <ul className="text-textMain space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>React + TypeScript + Chart.js</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>API REST avec Node.js</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Base de données PostgreSQL</span>
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
              Gestionnaire de Cabinet Médical
            </h3>

            <p className="text-textMuted mb-4">
              Application complète pour la gestion des rendez-vous, patients et dossiers médicaux
              développée lors du projet de fin de licence.
            </p>

            {/* Liste avec icônes */}
            <ul className="text-textMain space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Next.js + Tailwind CSS</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Authentication & Sécurité</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Export PDF des rapports</span>
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
