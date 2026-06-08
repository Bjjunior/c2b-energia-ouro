import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ServiceCarousel from "@/components/ServiceCarousel";
import ServicePageCard from "@/components/ServicePageCard";
import AgendeCTA from "@/components/AgendeCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Car, Battery, Settings, Zap, ShieldCheck, Gauge } from "lucide-react";

import servicoEvImg from "@/assets/servico-ev.jpg";
import servicoEficienciaImg from "@/assets/servico-eficiencia.jpg";
import servicoManutencaoImg from "@/assets/servico-manutencao.jpg";
import servicoInstalacoesImg from "@/assets/servico-instalacoes.jpg";
import servicoQualidadeImg from "@/assets/servico-qualidade.jpg";
import servicoDemandaImg from "@/assets/servico-demanda.jpg";

const carouselItems = [
  {
    image: servicoEvImg,
    title: "Eletropostos para Condomínios",
    description: "Instalação de estações de carregamento para veículos elétricos nas vagas do condomínio com gestão de consumo individual.",
  },
  {
    image: servicoManutencaoImg,
    title: "Cabines Primárias",
    description: "Manutenção preventiva e corretiva de cabines primárias e subestações condominiais.",
  },
  {
    image: servicoEficienciaImg,
    title: "Análise de Energia",
    description: "Diagnóstico completo do consumo energético do condomínio com plano de redução de custos.",
  },
  {
    image: servicoInstalacoesImg,
    title: "Atendimento Emergencial",
    description: "Equipe técnica disponível 24/7 para emergências elétricas no seu condomínio.",
  },
];

const services = [
  {
    icon: Car,
    title: "Eletropostos",
    description: "Instalação de estações de carregamento para veículos elétricos com sistema de medição individual. Ideal para condomínios que querem se preparar para o futuro da mobilidade.",
    features: ["Medição individual", "Gestão via app", "Múltiplos pontos", "Adequação ABNT"],
    image: servicoEvImg,
  },
  {
    icon: Battery,
    title: "Análise de Energia",
    description: "Diagnóstico energético completo do condomínio com identificação de desperdícios e plano de ação para redução da conta de energia nas áreas comuns.",
    features: ["Diagnóstico", "Redução de custos", "Relatório", "Plano de ação"],
    image: servicoEficienciaImg,
  },
  {
    icon: Zap,
    title: "Geradores",
    description: "Instalação, manutenção e adequação de grupos geradores para garantir o funcionamento do condomínio em quedas de energia.",
    features: ["Instalação", "Manutenção", "Adequação", "Testes periódicos"],
    image: servicoInstalacoesImg,
  },
  {
    icon: Settings,
    title: "Cabines Primárias",
    description: "Manutenção preventiva e corretiva de cabines primárias, subestações e transformadores condominiais conforme normas da concessionária.",
    features: ["Preventiva", "Corretiva", "Termografia", "Laudos"],
    image: servicoManutencaoImg,
  },
  {
    icon: ShieldCheck,
    title: "Emergências 24/7",
    description: "Atendimento emergencial para problemas elétricos críticos no condomínio. Equipe NR-10 pronta para agir a qualquer hora.",
    features: ["24 horas", "NR-10", "Resposta rápida", "Plantão"],
    image: servicoQualidadeImg,
  },
  {
    icon: Gauge,
    title: "Gestão de Demanda",
    description: "Monitoramento do consumo de energia do condomínio para evitar multas por ultrapassagem de demanda e otimizar a contratação.",
    features: ["Monitoramento", "Alertas", "Dashboard", "Economia"],
    image: servicoDemandaImg,
  },
];

const ParaCondominio = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Engenharia Elétrica para Condomínios em SP | C2B"
        description="Manutenção elétrica preventiva, cabines primárias, carregadores EV e laudos para condomínios residenciais e comerciais em São Paulo."
        path="/para-condominio"
      />
      <Navbar />
      <PageHero
        title="Para seu"
        highlight="Condomínio"
        subtitle="Segurança, economia e modernidade para a infraestrutura elétrica do seu condomínio. Eletropostos, geradores, cabines primárias e atendimento emergencial."
        backgroundImage={servicoInstalacoesImg}
      />

      <section className="premium-section py-20">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-10">
            <div className="premium-eyebrow mb-4">Destaques</div>
            <h2 className="premium-title">
              Soluções <span className="premium-accent">Condominiais</span>
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
              Serviços para <span className="premium-accent">Condomínios</span>
            </h2>
            <div className="premium-divider" />
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Infraestrutura elétrica segura e moderna para o seu condomínio
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

export default ParaCondominio;
