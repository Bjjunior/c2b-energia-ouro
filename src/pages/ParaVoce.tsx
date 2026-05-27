import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ServiceCarousel from "@/components/ServiceCarousel";
import ServicePageCard from "@/components/ServicePageCard";
import AgendeCTA from "@/components/AgendeCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Car, Sun, Cpu, Home, Lightbulb, ShieldCheck } from "lucide-react";

import servicoEvImg from "@/assets/servico-ev.jpg";
import servicoSolarImg from "@/assets/servico-solar.jpg";
import servicoAutomacaoImg from "@/assets/servico-automacao.jpg";
import servicoIluminacaoImg from "@/assets/servico-iluminacao.jpg";
import servicoInstalacoesImg from "@/assets/servico-instalacoes.jpg";
import servicoQualidadeImg from "@/assets/servico-qualidade.jpg";

const carouselItems = [
  {
    image: servicoEvImg,
    title: "Carregadores para Veículos Elétricos",
    description: "Instale um carregador na sua garagem e carregue seu veículo elétrico com praticidade e economia.",
  },
  {
    image: servicoSolarImg,
    title: "Energia Solar Residencial",
    description: "Reduza até 95% da sua conta de energia com painéis solares de alta performance e retorno garantido.",
  },
  {
    image: servicoAutomacaoImg,
    title: "Automação Residencial",
    description: "Controle iluminação, climatização e segurança da sua casa pelo celular com automação inteligente.",
  },
];

const services = [
  {
    icon: Car,
    title: "Carregador EV Residencial",
    description: "Instalação de carregadores para veículos elétricos na sua residência. Carregue seu carro com praticidade enquanto dorme, com integração com energia solar para economia máxima.",
    features: ["Wallbox", "Carga rápida", "App", "Solar integrado"],
    image: servicoEvImg,
  },
  {
    icon: Sun,
    title: "Energia Solar",
    description: "Sistemas fotovoltaicos residenciais de alta performance. Reduza até 95% da conta de energia com painéis que duram mais de 25 anos e retorno do investimento em 3 a 5 anos.",
    features: ["Economia 95%", "25+ anos", "Monitoramento", "Garantia"],
    image: servicoSolarImg,
  },
  {
    icon: Cpu,
    title: "Automação Residencial",
    description: "Controle total da sua casa pelo celular. Iluminação, cortinas, climatização, câmeras e fechaduras inteligentes integrados em um só sistema.",
    features: ["Iluminação", "Climatização", "Segurança", "Alexa/Google"],
    image: servicoAutomacaoImg,
  },
  {
    icon: Lightbulb,
    title: "Iluminação LED",
    description: "Projetos de iluminação residencial com tecnologia LED para conforto visual, economia de energia e valorização do ambiente.",
    features: ["LED", "Economia 70%", "Design", "Dimerizável"],
    image: servicoIluminacaoImg,
  },
  {
    icon: Home,
    title: "Instalações Elétricas",
    description: "Instalações e reformas elétricas residenciais completas, desde o quadro de distribuição até tomadas e pontos de iluminação.",
    features: ["Projeto", "Execução", "Normas", "Segurança"],
    image: servicoInstalacoesImg,
  },
  {
    icon: ShieldCheck,
    title: "Laudo e Segurança",
    description: "Laudos técnicos de instalações elétricas residenciais para segurança da sua família e conformidade com normas.",
    features: ["Laudo técnico", "ABNT", "Aterramento", "DR/DPS"],
    image: servicoQualidadeImg,
  },
];

const ParaVoce = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Automação e Elétrica Residencial Premium | C2B"
        description="Soluções elétricas residenciais premium: automação, energia solar, carregadores EV e projetos personalizados para sua casa."
        path="/para-voce"
      />
      <Navbar />
      <PageHero
        title="Para"
        highlight="Você"
        subtitle="Tecnologia e conforto para sua casa. Carregadores EV, painéis solares e automação residencial para uma vida mais inteligente e sustentável."
        backgroundImage={servicoSolarImg}
      />

      <section className="premium-section py-20">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-10">
            <div className="premium-eyebrow mb-4">Destaques</div>
            <h2 className="premium-title">
              Soluções <span className="premium-accent">Residenciais</span>
            </h2>
            <div className="premium-divider" />
          </div>
          <ServiceCarousel items={carouselItems} />
        </div>
      </section>

      <section id="servicos-page" className="premium-section py-20">
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="premium-eyebrow mb-4">Especialidades</div>
            <h2 className="premium-title">
              Serviços para sua <span className="premium-accent">Residência</span>
            </h2>
            <div className="premium-divider" />
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Transforme sua casa com tecnologia, economia e sustentabilidade
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => (
              <ServicePageCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <AgendeCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ParaVoce;
