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
          
          {/* Témoignage 1 - Directeur de centre */}
          <div className="bg-gray-50 border rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-textMuted mb-4 italic">
              "Ismael s'est parfaitement intégré à notre équipe sur site. Sa maîtrise du système DPI 
              et sa capacité à former nos équipes ont considérablement amélioré l'adoption de l'outil. 
              Un consultant fiable et compétent."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                SA
              </div>
              <div>
                <div className="font-semibold text-textMain">Dr. Sidibe Adama</div>
                <div className="text-sm text-textMuted">Directeur de l'EPHR Touba</div>
              </div>
            </div>
          </div>

          {/* Témoignage 2 - Utilisateur final */}
          <div className="bg-gray-50 border rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-textMuted mb-4 italic">
              "Grâce à la formation dispensée par Ismael, notre personnel médical utilise 
              le DPI avec beaucoup plus d'aisance. Il est toujours disponible pour répondre 
              à nos questions et nous accompagne dans la transition numérique."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                NG
              </div>
              <div>
                <div className="font-semibold text-textMain">M. N'Gamaleu</div>
                <div className="text-sm text-textMuted">Medecin Chef </div>
              </div>
            </div>
          </div>

          {/* Témoignage 3 - Chef de projet consultants */}
          <div className="bg-gray-50 border rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-textMuted mb-4 italic">
              "Ismael est l'un de nos meilleurs consultants sur site. Sa capacité à gérer 
              les relations clients tout en assurant la qualité technique du projet DPI 
              fait de lui un atout majeur pour notre équipe."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                KM
              </div>
              <div>
                <div className="font-semibold text-textMain">M. keita Mamady</div>
                <div className="text-sm text-textMuted">Chef de Projets - Winlogic</div>
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
