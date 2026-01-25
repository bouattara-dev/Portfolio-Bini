import { Quote, Star, Building } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre avec icône */}
        <h2 className="flex items-center gap-3 text-3xl font-bold text-primary mb-12">
          <Quote className="w-7 h-7" />
          Témoignages clients
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Témoignage 1 - DISD */}
          <div className="bg-gray-50 border rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-textMuted mb-4 italic">
              "L'expertise d'Ismael sur les systèmes DPI a été déterminante pour la réussite 
              de notre projet. Sa capacité à comprendre nos besoins métiers et à former 
              nos équipes a dépassé nos attentes."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                D
              </div>
              <div>
                <div className="font-semibold text-textMain">Dr. Koné</div>
                <div className="text-sm text-textMuted">Directeur Technique - DISD</div>
              </div>
            </div>
          </div>

          {/* Témoignage 2 - UCP */}
          <div className="bg-gray-50 border rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-textMuted mb-4 italic">
              "Professionnalisme et rigueur caractérisent notre collaboration. Ismael a su 
              adapter le système DPI aux contraintes universitaires tout en garantissant 
              la conformité réglementaire."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                U
              </div>
              <div>
                <div className="font-semibold text-textMain">Prof. Touré</div>
                <div className="text-sm text-textMuted">Doyen - UCP</div>
              </div>
            </div>
          </div>

          {/* Témoignage 3 - Winlogic */}
          <div className="bg-gray-50 border rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-textMuted mb-4 italic">
              "Un consultant exceptionnel qui combine expertise technique et compréhension 
              métier. Sa contribution a été essentielle pour livrer un projet DPI de haute 
              qualité dans les délais impartis."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                W
              </div>
              <div>
                <div className="font-semibold text-textMain">M. Bamba</div>
                <div className="text-sm text-textMuted">Chef de Projet - Winlogic</div>
              </div>
            </div>
          </div>

        </div>

        {/* Métriques globales */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-primary mb-6">Impact global du projet</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-textMuted">Satisfaction clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-textMuted">Institutions partenaires</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">18mois</div>
              <div className="text-sm text-textMuted">Durée projet</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-sm text-textMuted">Incidents critiques</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
