import { Award, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre avec icône */}
        <h2 className="flex items-center gap-3 text-3xl font-bold text-primary mb-12">
          <Award className="w-7 h-7" />
          Certifications & Formation
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Timeline de formation */}
          <div className="bg-white border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-textMain mb-6">Parcours académique</h3>
            
            <div className="space-y-6">
              {/* Licence */}
              <div className="relative pl-8 pb-6 border-l-2 border-primary">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h4 className="font-semibold text-textMain">Licence Mathématiques & Informatique</h4>
                  <span className="text-sm text-textMuted">2021 - 2024</span>
                </div>
                
                <p className="text-textMuted text-sm mb-2">Université Félix Houphouët-Boigny</p>
                <p className="text-textMuted text-sm">Option Génie Logiciel</p>
                
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-xs text-textMuted">Abidjan, Côte d'Ivoire</span>
                </div>
              </div>

              {/* BAC */}
              <div className="relative pl-8 pb-6 border-l-2 border-gray-300">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gray-300 rounded-full -translate-x-1/2"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h4 className="font-semibold text-textMain">Baccalauréat Scientifique</h4>
                  <span className="text-sm text-textMuted">2020 - 2021</span>
                </div>
                
                <p className="text-textMuted text-sm mb-2">Lycée Moderne de Yamoussoukro</p>
                <p className="text-textMuted text-sm">Mention Assez Bien</p>
                
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-xs text-textMuted">Yamoussoukro, Côte d'Ivoire</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications professionnelles */}
          <div className="bg-white border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-textMain mb-6">Certifications techniques</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-textMain">Développeur Full Stack React</h4>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">2024</span>
                </div>
                <p className="text-textMuted text-sm">OpenClassrooms - Certification professionnelle</p>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-textMuted">Validé</span>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-textMain">Gestion de Projets SI</h4>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">2023</span>
                </div>
                <p className="text-textMuted text-sm">Coursera - Université de Minnesota</p>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-textMuted">Validé</span>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-textMain">Sécurité des Données de Santé</h4>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">2023</span>
                </div>
                <p className="text-textMuted text-sm">DISD - Formation spécialisée DPI</p>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-textMuted">Validé</span>
                </div>
              </div>

              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-textMain">Cloud Computing AWS</h4>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">En cours</span>
                </div>
                <p className="text-textMuted text-sm">AWS Academy - Certification Cloud Practitioner</p>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-3 h-3 text-orange-500" />
                  <span className="text-xs text-textMuted">Prévu Q1 2025</span>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold text-textMain mb-4">Badges & Compétences</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">React Expert</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">DPI Specialist</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">UML Designer</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Agile/Scrum</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Healthcare IT</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
