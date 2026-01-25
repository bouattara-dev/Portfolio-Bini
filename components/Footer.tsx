import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* Identité */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">
            Ismael Bini
          </h3>
          <p className="text-sm text-textMuted leading-relaxed">
            Consultant en Systèmes d’Information & Génie Logiciel.
            Spécialisé dans les projets institutionnels, santé (DPI)
            et solutions numériques fiables.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-textMain mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-textMuted">
            <li><Link href="#hero" className="hover:text-primary">Accueil</Link></li>
            <li><Link href="#about" className="hover:text-primary">Profil</Link></li>
            <li><Link href="#experience" className="hover:text-primary">Expérience</Link></li>
            <li><Link href="#projects" className="hover:text-primary">Projets</Link></li>
            <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Contact rapide */}
        <div>
          <h4 className="text-sm font-semibold text-textMain mb-4">
            Contact
          </h4>

          <ul className="space-y-2 text-sm text-textMuted">
            <li>📧 ismaelbini31@gmail.com</li>
            <li>📞 +225 05 65 58 57 78</li>
            <li>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/ismael-bini"
                target="_blank"
                className="hover:text-primary"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <a
              href="/cv.pdf"
              download
              className="inline-block text-sm font-medium text-primary hover:underline"
            >
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>

      {/* Bas de footer */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-textMuted">
          © {new Date().getFullYear()} Ismael Bini — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
