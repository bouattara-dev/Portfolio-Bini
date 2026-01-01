import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo / Nom */}
        <span className="text-xl font-bold text-primary">
          Ismael Bini
        </span>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-textMain">
          <li><Link href="#hero" className="hover:text-primary">Accueil</Link></li>
          <li><Link href="#about" className="hover:text-primary">Profil</Link></li>
          <li><Link href="#experience" className="hover:text-primary">Expérience</Link></li>
          <li><Link href="#projects" className="hover:text-primary">Projets</Link></li>
          <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
        </ul>

        {/* Boutons documents */}
        <div className="hidden md:flex gap-3">
          <a
            href="cv.pdf"
            download
            className="border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition"
          >
            Télécharger CV
          </a>

          <a
            href="diplome.pdf"
            download
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Diplôme
          </a>
        </div>
      </nav>
    </header>
  );
}
