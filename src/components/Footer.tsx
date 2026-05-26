import logoC2B from "@/assets/logo-c2b.png";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/551151961096";
const instagramUrl = "https://instagram.com/c2bengenharia";

const Footer = () => {
  return (
    <footer className="relative bg-black pt-16 pb-8 border-t border-teal/20 overflow-hidden">
      <div className="absolute inset-0 premium-glow-radial opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoC2B} alt="C2B Logo" className="h-9" />
              <div>
                <span className="text-white font-semibold">C2B</span>
                <span className="text-teal text-sm ml-2">Inteligência em Energia</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Engenharia elétrica premium — cabines primárias, automação, laudos e plantão 24/7.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-wider text-teal mb-3">Contato</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-teal transition-colors">
              <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>WhatsApp 24/7</span>
            </a>
            <a href="tel:+551151961096" className="flex items-start gap-3 text-gray-400 hover:text-teal transition-colors">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>+55 (11) 5196-1096</span>
            </a>
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Tv. das Sensitivas, 59 — Vila Helena, Santo André/SP</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-wider text-teal mb-3">Siga-nos</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-teal/30 bg-teal/5 text-white hover:bg-teal/15 hover:border-teal transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium">@c2bengenharia</span>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} C2B Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">CREA-SP · ART em todos os projetos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
