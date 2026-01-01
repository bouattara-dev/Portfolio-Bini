import { Briefcase, CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre avec icône */}
        <h2 className="flex items-center gap-3 text-3xl font-bold text-primary mb-12">
          <Briefcase className="w-7 h-7" />
          Expérience professionnelle
        </h2>

        {/* Expérience principale */}
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="text-xl font-semibold text-textMain">
              Consultant Système DPI
            </h3>
            <span className="text-sm text-textMuted">
              Winlogic — En cours
            </span>
          </div>

          <p className="text-textMuted mb-6">
            Projet de mise en œuvre et de pilotage d’un Dossier Patient Informatisé (DPI),
            destiné à améliorer la gestion des soins, la traçabilité des données médicales
            et la performance des établissements de santé.
          </p>

          {/* Liste avec icônes */}
          <ul className="space-y-3 text-textMain">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Analyse fonctionnelle et compréhension des besoins métiers</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Accompagnement des utilisateurs (personnel médical et administratif)</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Paramétrage et suivi du système DPI</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Contribution à la fiabilité et à la sécurité des données de santé</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Collaboration avec les parties prenantes institutionnelles</span>
            </li>
          </ul>

          <div className="mt-6 text-sm text-textMuted">
            <strong>Partenaires :</strong> DISD · UCP · Banque Mondiale
          </div>
        </div>
      </div>
    </section>
  );
}
