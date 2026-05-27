import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ServiceCarousel from "@/components/ServiceCarousel";
import ServicePageCard from "@/components/ServicePageCard";
import AgendeCTA from "@/components/AgendeCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Settings, Wrench, Cpu, Battery, RefreshCw, Building2, Lightbulb, Gauge, LineChart } from "lucide-react";

import servicoManutencaoImg from "@/assets/servico-manutencao.jpg";
import servicoProjetosImg from "@/assets/servico-projetos.jpg";
import servicoAutomacaoImg from "@/assets/servico-automacao.jpg";
import servicoEficienciaImg from "@/assets/servico-eficiencia.jpg";
import servicoRetrofitImg from "@/assets/servico-retrofit.jpg";
import servicoInstalacoesImg from "@/assets/servico-instalacoes.jpg";
import servicoIluminacaoImg from "@/assets/servico-iluminacao.jpg";
import servicoDemandaImg from "@/assets/servico-demanda.jpg";
import servicoQualidadeImg from "@/assets/servico-qualidade.jpg";

const carouselItems = [
  {
    image: servicoManutencaoImg,
    title: "Manutenção Industrial Especializada",
    description: "Equipe NR-10 disponível 24/7 para manutenção preventiva e corretiva de instalações elétricas industriais.",
  },
  {
    image: servicoProjetosImg,
    title: "Projetos Elétricos sob Medida",
    description: "Desenvolvimento completo conforme ABNT e NR-10 para indústrias e grandes empreendimentos.",
  },
  {
    image: servicoAutomacaoImg,
    title: "Automação de Processos",
    description: "Automação industrial com controle inteligente de sistemas para máxima eficiência operacional.",
  },
  {
    image: servicoEficienciaImg,
    title: "Eficiência Energética",
    description: "Diagnóstico completo e plano de ação para redução de custos operacionais com energia.",
  },
];

const services = [
  {
    icon: Settings,
    title: "Manutenção Industrial",
    description: "Manutenção preventiva e corretiva de instalações elétricas industriais. Equipe certificada NR-10 disponível 24/7 para minimizar paradas e garantir a continuidade operacional.",
    features: ["Preventiva", "Corretiva", "24/7", "NR-10", "Termografia"],
    image: servicoManutencaoImg,
  },
  {
    icon: Wrench,
    title: "Projetos Elétricos",
    description: "Desenvolvimento de projetos completos de instalações elétricas conforme ABNT e NR-10 para indústrias, comércios e edificações corporativas.",
    features: ["ABNT", "NR-10", "ART/RRT", "As-Built", "Memorial de Cálculo"],
    image: servicoProjetosImg,
  },
  {
    icon: Cpu,
    title: "Automação Industrial",
    description: "Sistemas de automação para processos industriais com controle inteligente, CLPs, IHMs e integração de sistemas SCADA.",
    features: ["CLP", "SCADA", "IHM", "Integração", "Indústria 4.0"],
    image: servicoAutomacaoImg,
  },
  {
    icon: Battery,
    title: "Eficiência Energética",
    description: "Análise e otimização do consumo energético industrial para redução de custos operacionais e pegada de carbono.",
    features: ["Diagnóstico", "ISO 50001", "Economia", "Sustentabilidade"],
    image: servicoEficienciaImg,
  },
  {
    icon: RefreshCw,
    title: "Retrofit Elétrico",
    description: "Modernização de painéis, quadros e sistemas elétricos obsoletos sem parar a operação.",
    features: ["Modernização", "Segurança", "Normas", "Zero Parada"],
    image: servicoRetrofitImg,
  },
  {
    icon: Building2,
    title: "Novas Instalações",
    description: "Instalações elétricas completas em BT, MT e AT, do projeto ao comissionamento para plantas industriais.",
    features: ["BT/MT/AT", "Turnkey", "Comissionamento", "Testes"],
    image: servicoInstalacoesImg,
  },
  {
    icon: Lightbulb,
    title: "Iluminação Industrial LED",
    description: "Projetos de iluminação eficiente para galpões, linhas de produção e áreas externas com tecnologia LED.",
    features: ["LED", "NBR ISO/CIE", "Economia 70%", "Payback rápido"],
    image: servicoIluminacaoImg,
  },
  {
    icon: Gauge,
    title: "Gestão de Demanda",
    description: "Monitoramento e controle inteligente de demanda em tempo real para evitar multas e otimizar contratação.",
    features: ["Monitoramento", "Alertas", "Dashboard", "ANEEL"],
    image: servicoDemandaImg,
  },
  {
    icon: LineChart,
    title: "Qualidade de Energia",
    description: "Avaliação de harmônicos, fator de potência e distorções para proteger equipamentos sensíveis.",
    features: ["Harmônicos", "Fator de Potência", "Laudos", "PRODIST"],
    image: servicoQualidadeImg,
  },
];

const ParaEmpresa = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Soluções Elétricas para Empresas e Indústria | C2B"
        description="Engenharia elétrica corporativa: cabines primárias, manutenção industrial, eficiência energética, automação e laudos técnicos para empresas em São Paulo."
        path="/para-empresa"
      />
      <Navbar />
      <PageHero
        title="Para sua"
        highlight="Empresa"
        subtitle="Soluções completas em engenharia elétrica industrial. Manutenção, projetos, automação e eficiência energética para sua operação."
        backgroundImage={servicoManutencaoImg}
      />

      {/* Carousel */}
      <section className="premium-section py-20">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-10">
            <div className="premium-eyebrow mb-4">Destaques</div>
            <h2 className="premium-title">
              Soluções <span className="premium-accent">Industriais</span>
            </h2>
            <div className="premium-divider" />
          </div>
          <ServiceCarousel items={carouselItems} />
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos-page" className="premium-section py-20">
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="premium-eyebrow mb-4">Especialidades</div>
            <h2 className="premium-title">
              Serviços para <span className="premium-accent">Indústria</span>
            </h2>
            <div className="premium-divider" />
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Cada solução é dimensionada para as necessidades específicas da sua operação
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

export default ParaEmpresa;
