import {
  Award,
  Code2,
  Hospital,
  Laptop,
  CheckCircle
} from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre avec icône */}
        <h2 className="flex items-center gap-3 text-3xl font-bold text-primary mb-12">
          <Award className="w-7 h-7" />
          Compétences
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Bloc 1 – Génie logiciel */}
          <div className="bg-white border rounded-xl p-8 hover:shadow-md transition">
            <h3 className="flex items-center gap-2 font-semibold text-lg text-textMain mb-4">
              <Code2 className="w-5 h-5 text-primary" />
              Génie logiciel
            </h3>

            <ul className="space-y-3 text-textMuted">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Analyse & conception (UML)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Architecture logicielle</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Modélisation des données</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Bonnes pratiques de développement</span>
              </li>
            </ul>
          </div>

          {/* Bloc 2 – SI Santé */}
          <div className="bg-white border rounded-xl p-8 hover:shadow-md transition">
            <h3 className="flex items-center gap-2 font-semibold text-lg text-textMain mb-4">
              <Hospital className="w-5 h-5 text-primary" />
              Systèmes d’information santé
            </h3>

            <ul className="space-y-3 text-textMuted">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Dossier Patient Informatisé (DPI)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Processus métiers hospitaliers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Qualité & sécurité des données</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>Accompagnement des utilisateurs</span>
              </li>
            </ul>
          </div>

          {/* Bloc 3 – Technologies */}
          <div className="bg-white border rounded-xl p-8 hover:shadow-md transition">
            <h3 className="flex items-center gap-2 font-semibold text-lg text-textMain mb-4">
              <Laptop className="w-5 h-5 text-primary" />
              Technologies
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-textMain font-medium">JavaScript / TypeScript</span>
                  <span className="text-sm text-primary font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-textMain font-medium">React / Next.js</span>
                  <span className="text-sm text-primary font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-textMain font-medium">Tailwind CSS</span>
                  <span className="text-sm text-primary font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-textMain font-medium">Bases de données relationnelles</span>
                  <span className="text-sm text-primary font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-textMain font-medium">Node.js / API REST</span>
                  <span className="text-sm text-primary font-semibold">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
