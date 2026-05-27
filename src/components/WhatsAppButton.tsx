import { MessageCircle } from "lucide-react";
import { trackWhatsApp } from "@/lib/analytics";

const WhatsAppButton = () => {
  const phoneNumber = "551151961096";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp("floating_button")}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
