export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-primarySoft flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-primary font-semibold">
            Consultant Systèmes d’Information Santé & Developpeur Full Stack.
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-textMain leading-tight">
            DPI & Génie Logiciel  
            <span className="text-primary"> à impact</span>
          </h1>

          <p className="mt-6 text-textMuted max-w-xl">
            Informaticien, titulaire d’une licence Mathématiques & Informatique
            (Génie Logiciel). Consultant sur un système DPI piloté par Winlogic,
            en collaboration avec la DISD, l’UCP et la Banque Mondiale.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow hover:opacity-90"
            >
              Me contacter
            </a>

            <a
              href="#projects"
              className="border border-primary text-primary px-6 py-3 rounded-lg font-medium"
            >
              Voir mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
