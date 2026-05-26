import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServiceCarousel from "@/components/ServiceCarousel";
import AgendeCTA from "@/components/AgendeCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Clock,
  Zap,
  ShieldCheck,
  Phone,
  Wrench,
  Activity,
  Flame,
  Cable,
  Cpu,
  Crown,
} from "lucide-react";

import hero from "@/assets/cabine-hero-page.jpg";
import img1 from "@/assets/cabine-reles.jpg";
import img2 from "@/assets/cabine-termografia.jpg";
import img3 from "@/assets/cabine-cabeamento.jpg";
import img4 from "@/assets/cabine-trafo.jpg";

const whatsappUrl =
  "https://wa.me/551151961096?text=" +
  encodeURIComponent("🚨 EMERGÊNCIA — Preciso de atendimento técnico imediato.");

const carouselItems = [
  { image: hero, title: "Plantão 24/7", description: "Equipe técnica e engenheiros prontos para deslocamento imediato, todos os dias do ano." },
  { image: img2, title: "Diagnóstico Rápido", description: "Termografia, análise de proteções e medições em campo para identificar a causa raiz em minutos." },
  { image: img1, title: "Restabelecimento Seguro", description: "Manobras coordenadas com a concessionária e protocolos NR-10 para retomar a operação com zero risco." },
  { image: img4, title: "Relatório Pós-Ocorrência", description: "Laudo técnico completo com causa, ações corretivas e plano de prevenção para evitar reincidência." },
];

const services = [
  { icon: AlertTriangle, title: "Resposta a Faltas e Curtos-Circuitos", description: "Identificação, isolamento e correção de faltas em média e baixa tensão com segurança operacional." },
  { icon: Zap, title: "Restabelecimento de Energia", description: "Manobras emergenciais em cabines primárias, QGBT e painéis para retomar o fornecimento rapidamente." },
  { icon: Activity, title: "Reparo de Relés e Proteções", description: "Reset, reparametrização e substituição emergencial de relés digitais e disjuntores." },
  { icon: Flame, title: "Atendimento a Pontos Quentes", description: "Intervenção imediata em conexões superaquecidas detectadas por termografia ou inspeção." },
  { icon: Cable, title: "Substituição de Cabos e Barramentos", description: "Troca emergencial de cabos, terminações e barramentos danificados por curto ou sobrecarga." },
  { icon: Cpu, title: "Recuperação de Painéis e CCMs", description: "Diagnóstico e reparo de painéis elétricos, CCMs e quadros de comando fora de operação." },
  { icon: Wrench, title: "Manutenção Corretiva em Trafos", description: "Atendimento a transformadores com falha, vazamento ou ruído anormal — testes e reparo em campo." },
  { icon: ShieldCheck, title: "Apoio Pericial e Concessionária", description: "Suporte técnico em ocorrências com a concessionária, laudos e interlocução regulatória." },
  { icon: Crown, title: "Engenheiro Responsável On-Site", description: "Engenheiro eletricista sênior presente em ocorrências críticas, com ART emitida." },
];

const ManutencaoEmergencial = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PageHero
        title="Manutenção"
        highlight="Emergencial 24/7"
        subtitle="Plantão técnico ininterrupto para cabines primárias, subestações, painéis e instalações industriais — engenharia sênior em campo quando você mais precisa."
        backgroundImage={hero}
      />

      {/* SLA bar */}
      <section className="premium-section py-12 border-y border-teal/20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
          {[
            { icon: Clock, label: "24/7", desc: "Plantão" },
            { icon: Zap, label: "≤ 90 min", desc: "Resposta Grande SP" },
            { icon: ShieldCheck, label: "NR-10 / NR-12", desc: "100% conformidade" },
            { icon: Crown, label: "ART", desc: "Engenheiro responsável" },
          ].map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="premium-card p-5">
                <Icon className="w-6 h-6 text-teal mx-auto mb-2" />
                <p className="text-white font-bold text-xl">{m.label}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hotline CTA */}
      <section className="premium-section py-20">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <div className="premium-eyebrow mb-6 mx-auto">
            <AlertTriangle className="w-3 h-3" /> Acionamento Imediato
          </div>
          <h2 className="premium-title mb-2">
            Pane agora? <span className="premium-accent">Acione o plantão.</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-gray-400 mb-8 leading-relaxed">
            Ligue ou envie uma mensagem — em poucos minutos um engenheiro fará o pré-diagnóstico
            remoto e despachará a equipe técnica para o seu endereço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal hover:bg-teal/90 text-white font-medium text-base px-8 py-6 rounded-lg shadow-lg shadow-teal/40 w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp 24h
              </Button>
            </a>
            <a href="tel:+551151961096">
              <Button variant="outline" className="border-teal/40 bg-transparent text-white hover:bg-teal/10 hover:text-teal font-medium text-base px-8 py-6 rounded-lg w-full sm:w-auto">
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ServiceCarousel items={carouselItems} />

      {/* Services grid */}
      <section id="servicos-page" className="premium-section py-24">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="premium-eyebrow mb-6 mx-auto">
              <Wrench className="w-3 h-3" /> Escopo Emergencial
            </div>
            <h2 className="premium-title mb-2">
              O que <span className="premium-accent">resolvemos no plantão</span>
            </h2>
            <div className="premium-divider" />
            <p className="text-gray-400 font-light">
              Cobertura completa para ocorrências críticas em média e baixa tensão.
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

export default ManutencaoEmergencial;

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