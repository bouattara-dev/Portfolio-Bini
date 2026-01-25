import { User, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Colonne gauche – Profil */}
        <div>
          <h2 className="flex items-center gap-3 text-3xl font-bold text-primary mb-6">
            <User className="w-7 h-7" />
            Profil
          </h2>

          <p className="text-textMain leading-relaxed mb-4">
            Informaticien titulaire d'une licence en Mathématiques et Informatique,
            option Génie Logiciel. Je conçois et accompagne la mise en œuvre de
            systèmes d'information fiables, évolutifs et adaptés aux environnements
            institutionnels.
          </p>

          <p className="text-textMuted leading-relaxed">
            Actuellement consultant sur un système de gestion de santé (DPI),
            piloté par l'entreprise Winlogic, en partenariat avec la DISD,
            l'UCP et la Banque Mondiale.
          </p>
        </div>

        {/* Colonne droite – Photo dans fond orange */}
        <div className="bg-primary rounded-2xl p-8 flex items-center justify-center">
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Ismael Bini - Photo professionnelle"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-4 bg-white text-primary p-3 rounded-full shadow-lg">
              <User className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Section expertise en dessous */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-gray-50 border rounded-xl p-8">
          <h3 className="flex items-center gap-2 font-semibold text-lg mb-4 text-textMain">
            <CheckCircle className="w-5 h-5 text-primary" />
            Domaines d'expertise
          </h3>

          <ul className="grid md:grid-cols-2 gap-3 text-textMuted">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Systèmes d'Information de Santé (DPI)</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Analyse & conception logicielle (UML)</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Déploiement et accompagnement utilisateur</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Applications web modernes</span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span>Sécurité et fiabilité des données</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
