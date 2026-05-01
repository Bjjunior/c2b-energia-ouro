import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const AgendeCTA = () => {
  const whatsappUrl = "https://wa.me/551151961096?text=Olá! Gostaria de agendar uma visita técnica.";

  return (
    <section id="contato-page" className="premium-section py-24">
      <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
      <div className="absolute inset-0 premium-mosaic pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="premium-eyebrow mb-6 mx-auto"><Calendar className="w-3 h-3" /> Atendimento Premium</div>
          <h2 className="premium-title mb-2">
            Agende sua <span className="premium-accent">Visita Técnica</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-gray-400 mb-10 leading-relaxed">
            Nossa equipe de engenheiros certificados fará uma avaliação completa e gratuita
            das suas necessidades. Sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal hover:bg-teal/90 text-white font-medium text-base px-8 py-6 rounded-lg w-full sm:w-auto shadow-lg shadow-teal/40">
                <Phone className="w-5 h-5 mr-2" />
                Agendar via WhatsApp
              </Button>
            </a>
            <a href="/#contato">
              <Button variant="outline" className="border-teal/40 bg-transparent text-white hover:bg-teal/10 hover:text-teal font-medium text-base px-8 py-6 rounded-lg w-full sm:w-auto">
                Enviar Mensagem
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendeCTA;
