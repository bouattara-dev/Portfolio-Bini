"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [diplomaOpen, setDiplomaOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <span className="text-xl font-bold text-primary">
          Ismael Bini
        </span>

        {/* Navigation desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-textMain">
          <li><Link href="#hero">Accueil</Link></li>
          <li><Link href="#about">Profil</Link></li>
          <li><Link href="#experience">Expérience</Link></li>
          <li><Link href="#projects">Projets</Link></li>
          <li><Link href="#skills">Compétences</Link></li>
          <li><Link href="#certifications">Certifications</Link></li>
          <li><Link href="#testimonials">Témoignages</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Boutons desktop */}
        <div className="hidden md:flex gap-3">
          <a
            href="/cv.pdf"
            download
            className="border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition"
          >
            CV
          </a>
          
          {/* Menu déroulant diplômes */}
          <div className="relative">
            <button
              onClick={() => setDiplomaOpen(!diplomaOpen)}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition flex items-center gap-2"
            >
              Diplômes
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {diplomaOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white border rounded-lg shadow-lg min-w-[200px] z-50">
                <a
                  href="/Diplome-Licence.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-3 text-sm text-textMain hover:bg-gray-50 transition border-b"
                >
                  <Download size={16} />
                  Licence
                </a>
                <a
                  href="/Admissibilité.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-3 text-sm text-textMain hover:bg-gray-50 transition border-b"
                >
                  <Download size={16} />
                  Admissibilité
                </a>
                <a
                  href="/bac.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-3 text-sm text-textMain hover:bg-gray-50 transition"
                >
                  <Download size={16} />
                  BAC
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col px-6 py-6 space-y-4 text-textMain font-medium">
            <li><Link href="#hero" onClick={() => setOpen(false)}>Accueil</Link></li>
            <li><Link href="#about" onClick={() => setOpen(false)}>Profil</Link></li>
            <li><Link href="#experience" onClick={() => setOpen(false)}>Expérience</Link></li>
            <li><Link href="#projects" onClick={() => setOpen(false)}>Projets</Link></li>
            <li><Link href="#skills" onClick={() => setOpen(false)}>Compétences</Link></li>
            <li><Link href="#certifications" onClick={() => setOpen(false)}>Certifications</Link></li>
            <li><Link href="#testimonials" onClick={() => setOpen(false)}>Témoignages</Link></li>
            <li><Link href="#contact" onClick={() => setOpen(false)}>Contact</Link></li>

            {/* Boutons mobile */}
            <div className="pt-4 space-y-3">
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 w-full border border-primary text-primary py-3 rounded-lg"
              >
                <Download size={18} />
                Télécharger CV
              </a>

              {/* Menu déroulant diplômes mobile */}
              <div className="relative">
                <button
                  onClick={() => setDiplomaOpen(!diplomaOpen)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg"
                >
                  <Download size={18} />
                  Diplômes
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {diplomaOpen && (
                  <div className="mt-2 bg-white border rounded-lg shadow-lg">
                    <a
                      href="/Diplome-Licence.pdf"
                      download
                      className="flex items-center gap-2 px-4 py-3 text-sm text-textMain hover:bg-gray-50 transition border-b"
                    >
                      <Download size={16} />
                      Licence
                    </a>
                    <a
                      href="/Admissibilité.pdf"
                      download
                      className="flex items-center gap-2 px-4 py-3 text-sm text-textMain hover:bg-gray-50 transition border-b"
                    >
                      <Download size={16} />
                      Admissibilité
                    </a>
                    <a
                      href="/bac.pdf"
                      download
                      className="flex items-center gap-2 px-4 py-3 text-sm text-textMain hover:bg-gray-50 transition"
                    >
                      <Download size={16} />
                      BAC
                    </a>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
