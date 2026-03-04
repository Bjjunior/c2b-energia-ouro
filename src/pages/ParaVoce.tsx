import Navbar from "@/components/Navbar";
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
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <PageHero
        title="Para"
        highlight="Você"
        subtitle="Tecnologia e conforto para sua casa. Carregadores EV, painéis solares e automação residencial para uma vida mais inteligente e sustentável."
        backgroundImage={servicoSolarImg}
      />

      <section className="py-16 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-teal uppercase tracking-[0.2em] text-sm font-medium mb-3">Destaques</p>
            <h2 className="text-3xl font-light text-charcoal dark:text-white">
              Soluções <span className="font-semibold">Residenciais</span>
            </h2>
            <div className="w-12 h-[2px] bg-teal mx-auto mt-4" />
          </div>
          <ServiceCarousel items={carouselItems} />
        </div>
      </section>

      <section id="servicos-page" className="py-16 bg-gray-200 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal uppercase tracking-[0.2em] text-sm font-medium mb-3">Especialidades</p>
            <h2 className="text-3xl font-light text-charcoal dark:text-white">
              Serviços para sua <span className="font-semibold">Residência</span>
            </h2>
            <div className="w-12 h-[2px] bg-teal mx-auto mt-4 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm">
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
