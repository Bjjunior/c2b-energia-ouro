import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ServiceCarousel from "@/components/ServiceCarousel";
import AgendeCTA from "@/components/AgendeCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  FileCheck,
  Flame,
  ShieldCheck,
  Cpu,
  Activity,
  Crown,
  Zap,
  Cable,
  Award,
} from "lucide-react";

import hero from "@/assets/cabine-termografia.jpg";
import img1 from "@/assets/cabine-reles.jpg";
import img2 from "@/assets/cabine-trafo.jpg";
import img3 from "@/assets/cabine-hero-page.jpg";

const carouselItems = [
  { image: hero, title: "Laudos Técnicos Premium", description: "Termografia, NR-10, SPDA, aterramento e harmônicas — documentação de engenharia em padrão consultivo." },
  { image: img3, title: "Projetos Elétricos Completos", description: "Projetos de média e baixa tensão com memorial, dimensionamento e ART do engenheiro responsável." },
  { image: img1, title: "Estudos de Proteção e Seletividade", description: "Coordenação de proteções, curto-circuito e seletividade de relés para máxima continuidade operacional." },
  { image: img2, title: "Regularização & Conformidade", description: "Adequação à concessionária, NBR 5410, NBR 14039 e normas regulatórias com rastreabilidade total." },
];

const services = [
  { icon: Flame, title: "Laudo Termográfico", description: "Inspeção termográfica de painéis, cabines e instalações com câmera certificada e relatório fotográfico." },
  { icon: ShieldCheck, title: "Laudo NR-10", description: "Avaliação de conformidade à NR-10 com plano de ação, prontuário e documentação completa." },
  { icon: Zap, title: "Laudo SPDA & Aterramento", description: "Inspeção de para-raios, medição de malha de aterramento e laudo conforme NBR 5419." },
  { icon: Activity, title: "Análise de Qualidade de Energia", description: "Medição de harmônicas, flicker, afundamentos e fator de potência com proposta de mitigação." },
  { icon: FileCheck, title: "Projetos Elétricos MT/BT", description: "Projetos completos com memorial, plantas, diagramas unifilares e ART do engenheiro." },
  { icon: Cpu, title: "Estudo de Curto-Circuito", description: "Cálculo de correntes de curto, dimensionamento de proteções e seletividade." },
  { icon: Cable, title: "Projetos de Cabine Primária", description: "Projeto executivo de subestações abrigadas e ao tempo, com aprovação na concessionária." },
  { icon: Crown, title: "ART & Responsabilidade Técnica", description: "Emissão de ART junto ao CREA por engenheiro eletricista sênior." },
  { icon: Award, title: "Consultoria Regulatória", description: "Suporte em adequações, autuações e interlocução com concessionária e órgãos reguladores." },
];

const LaudosProjetos = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Laudos Técnicos, Termografia e Projetos Elétricos NR-10 | C2B"
        description="Laudos termográficos, projetos elétricos, ART, NR-10, SPDA e adequação à NBR 14039. Engenharia consultiva premium em São Paulo."
        path="/laudos-e-projetos"
      />
      <Navbar />
      <PageHero
        title="Laudos &"
        highlight="Projetos"
        subtitle="Engenharia consultiva, laudos técnicos e projetos elétricos premium — com ART, rastreabilidade e padrão de excelência."
        backgroundImage={hero}
      />

      <ServiceCarousel items={carouselItems} />

      <section id="servicos-page" className="premium-section py-24">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="premium-eyebrow mb-6 mx-auto">
              <FileCheck className="w-3 h-3" /> Escopo de Engenharia
            </div>
            <h2 className="premium-title mb-2">
              Documentação <span className="premium-accent">de nível consultivo</span>
            </h2>
            <div className="premium-divider" />
            <p className="text-gray-400 font-light">
              Laudos e projetos que sustentam decisões técnicas e atendem rigorosamente às normas vigentes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
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

export default LaudosProjetos;

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="premium-card p-6 group">
    <div className="w-12 h-12 bg-teal/10 border border-teal/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal transition-colors duration-500">
      <Icon className="w-5 h-5 text-teal group-hover:text-black transition-colors duration-500" />
    </div>
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);