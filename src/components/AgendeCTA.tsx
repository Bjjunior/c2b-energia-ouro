import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const AgendeCTA = () => {
  const whatsappUrl = "https://wa.me/551151961096?text=Olá! Gostaria de agendar uma visita técnica.";

  return (
    <section id="contato-page" className="py-20 bg-charcoal dark:bg-black">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <Calendar className="w-12 h-12 text-teal mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Agende sua <span className="font-semibold text-teal">Visita Técnica</span>
          </h2>
          <div className="w-12 h-[2px] bg-teal mx-auto my-6" />
          <p className="text-gray-400 mb-8 leading-relaxed">
            Nossa equipe de engenheiros certificados fará uma avaliação completa e gratuita
            das suas necessidades. Sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal hover:bg-teal/90 text-white font-medium text-base px-8 py-6 rounded-lg w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Agendar via WhatsApp
              </Button>
            </a>
            <a href="/#contato">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-medium text-base px-8 py-6 rounded-lg w-full sm:w-auto">
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
