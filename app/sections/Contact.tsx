import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Download,
  Contact as ContactIcon
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Titre avec icône */}
        <h2 className="flex justify-center items-center gap-3 text-3xl font-bold text-primary mb-6">
          <ContactIcon className="w-7 h-7" />
          Contact
        </h2>

        <p className="text-textMuted mb-10">
          Vous souhaitez échanger sur un projet, un besoin en système
          d’information ou une collaboration professionnelle ?
        </p>

        {/* Carte contact */}
        <div className="bg-gray-50 border rounded-xl p-8 space-y-6">

          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href="mailto:ismaelbini31@gmail.com"
              className="font-medium text-textMain hover:text-primary"
            >
              ismaelbini31@gmail.com
            </a>
          </div>

          {/* Téléphone */}
          <div className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <a
              href="tel:+2250565585778"
              className="font-medium text-textMain hover:text-primary"
            >
              +225 05 65 58 57 78 
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-center gap-3">
            <MessageCircle className="w-5 h-5 text-primary" />
            <a
              href="https://wa.me/2250565585778"
              target="_blank"
              className="font-medium text-textMain hover:text-primary"
            >
              WhatsApp
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center gap-3">
            <Linkedin className="w-5 h-5 text-primary" />
            <a
              href="https://www.linkedin.com/in/ismael-bini"
              target="_blank"
              className="font-medium text-textMain hover:text-primary"
            >
              LinkedIn
            </a>
          </div>

          {/* Bouton CV */}
          <div className="pt-6">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              <Download className="w-5 h-5" />
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* Localisation */}
        <p className="mt-8 text-sm text-textMuted">
          Consultant SI — Côte d’Ivoire
        </p>
      </div>
    </section>
  );
}
