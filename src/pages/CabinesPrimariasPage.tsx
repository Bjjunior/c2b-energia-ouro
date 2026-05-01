import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServiceCarousel from "@/components/ServiceCarousel";
import ServicePageCard from "@/components/ServicePageCard";
import AgendeCTA from "@/components/AgendeCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Sparkles,
  Flame,
  Activity,
  FileCheck,
  Cpu,
  Zap,
  Cable,
  ShieldCheck,
  Crown,
  Award,
  Wrench,
  AlertTriangle,
} from "lucide-react";

import cabineHero from "@/assets/cabine-hero-page.jpg";
import cabineLimpeza from "@/assets/cabine-limpeza.jpg";
import cabineTermografia from "@/assets/cabine-termografia.jpg";
import cabineReles from "@/assets/cabine-reles.jpg";
import cabineTrafo from "@/assets/cabine-trafo.jpg";
import cabineCabeamento from "@/assets/cabine-cabeamento.jpg";
import cabineFut1 from "@/assets/cabine-futurista-1.jpg";
import cabineFut3 from "@/assets/cabine-futurista-3.jpg";

const carouselItems = [
  {
    image: cabineHero,
    title: "Engenharia de Média Tensão Premium",
    description:
      "Cabines primárias projetadas, executadas e mantidas com rigor de engenharia consultiva e padrão construtivo de excelência.",
  },
  {
    image: cabineTermografia,
    title: "Termografia de Precisão",
    description:
      "Inspeções termográficas que antecipam falhas críticas — diagnóstico preditivo para máxima continuidade operacional.",
  },
  {
    image: cabineReles,
    title: "Modernização de Proteções",
    description:
      "Parametrização e comissionamento de relés digitais multifunção — proteção cirúrgica e seletividade absoluta.",
  },
  {
    image: cabineTrafo,
    title: "Transformadores & Ensaios",
    description:
      "Manutenção, ensaios elétricos e análise de óleo isolante — preservando o coração da sua subestação.",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "Limpeza Técnica Especializada",
    description:
      "Higienização criteriosa de barramentos, isoladores, disjuntores e compartimentos com produtos dielétricos certificados. Procedimento que prolonga a vida útil de toda a cabine e evita falhas por contaminação.",
    features: ["Dielétrico", "Barramentos", "Isoladores", "Procedimento", "Registro"],
    image: cabineLimpeza,
  },
  {
    icon: Flame,
    title: "Laudos Termográficos",
    description:
      "Inspeção termográfica de alta resolução com câmeras certificadas. Identificamos pontos quentes em conexões, contatos e barramentos antes que se tornem falhas catastróficas. Relatório técnico com plano de ação.",
    features: ["Termografia HD", "Pontos quentes", "Laudo ART", "Plano de ação", "Periódico"],
    image: cabineTermografia,
  },
  {
    icon: Activity,
    title: "Testes de Seletividade",
    description:
      "Estudos completos de coordenação e seletividade de proteções com software especializado. Garantimos que apenas o trecho com defeito desligue, preservando o restante da operação.",
    features: ["Coordenação", "Seletividade", "Curto-circuito", "Software", "Memorial"],
    image: cabineReles,
  },
  {
    icon: FileCheck,
    title: "Regularização & Concessionária",
    description:
      "Projeto elétrico, ART, vistorias, comissionamento e adequação completa às normas NBR 14039 e exigências da distribuidora local. Conduzimos todo o processo até a energização oficial.",
    features: ["NBR 14039", "ART", "Projeto", "Vistoria", "Energização"],
    image: cabineHero,
  },
  {
    icon: Cpu,
    title: "Relés Digitais de Proteção",
    description:
      "Especificação, parametrização, comissionamento e modernização de relés digitais multifunção das principais marcas (SEL, Schneider, ABB, Siemens, Pextron). Migração de relés eletromecânicos para tecnologia digital.",
    features: ["SEL", "Schneider", "ABB", "Siemens", "Modernização"],
    image: cabineReles,
  },
  {
    icon: Zap,
    title: "Transformadores de Potência",
    description:
      "Manutenção preventiva, corretiva e preditiva de transformadores. Ensaios elétricos completos, análise físico-química do óleo isolante, regeneração, troca e dimensionamento de novos equipamentos.",
    features: ["Ensaios", "Análise de óleo", "Regeneração", "Substituição", "Dimensionamento"],
    image: cabineTrafo,
  },
  {
    icon: Cable,
    title: "Cabeamento & Muflas MT",
    description:
      "Substituição de cabos de média tensão, conexões, muflas termocontráteis e terminações poliméricas. Equipe certificada NR-10 SEP com domínio total de técnicas de emendas e terminações em campo.",
    features: ["MT 15kV/24kV", "Muflas", "Terminações", "NR-10 SEP", "Emendas"],
    image: cabineCabeamento,
  },
  {
    icon: ShieldCheck,
    title: "Manutenção Nível Engenharia",
    description:
      "Plano completo preventivo, preditivo e corretivo executado com rigor de engenharia consultiva. Cronograma anual, indicadores de confiabilidade e relatório executivo para gestores.",
    features: ["Preventiva", "Preditiva", "Corretiva", "Cronograma", "KPIs"],
    image: cabineFut1,
  },
  {
    icon: AlertTriangle,
    title: "Atendimento Emergencial 24/7",
    description:
      "Equipe de plantão para emergências em cabines primárias e subestações. Resposta rápida, diagnóstico em campo e restabelecimento prioritário da operação. Disponibilidade total, todos os dias do ano.",
    features: ["24/7", "Plantão", "Resposta rápida", "Diagnóstico", "Restabelecimento"],
    image: cabineFut3,
  },
];

const CabinesPrimariasPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PageHero
        title="Cabines"
        highlight="Primárias"
        subtitle="Engenharia elétrica de média e alta tensão executada no mais alto padrão do mercado. Da limpeza técnica à modernização completa, dominamos cada detalhe que mantém sua operação energizada com segurança absoluta."
        backgroundImage={cabineHero}
      />

      {/* Manifesto */}
      <section className="premium-section py-24">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-teal/20 blur-3xl rounded-full" />
              <img
                src={cabineFut1}
                alt="Cabine primária premium"
                className="relative rounded-xl border border-teal/30 shadow-2xl shadow-teal/30"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="premium-eyebrow mb-6">
                <Crown className="w-3 h-3" /> Especialidade Suprema
              </div>
              <h2 className="premium-title mb-6">
                A engenharia que <span className="premium-accent">não pode falhar</span>.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Cabines primárias são o coração da infraestrutura elétrica de qualquer
                grande consumidor. Indústrias, hospitais, shoppings, condomínios de luxo
                e data centers dependem de cada componente operando em perfeita harmonia
                — 24 horas, 365 dias por ano.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                A C2B é referência absoluta neste segmento. Reunimos engenheiros sêniores,
                técnicos NR-10 SEP, instrumentação certificada e processos auditados para
                entregar o que ninguém entrega: <span className="text-teal">confiabilidade
                total e desempenho previsível</span>.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="premium-card p-4 text-center">
                  <div className="text-2xl font-light text-teal mb-1">100%</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">NBR 14039</div>
                </div>
                <div className="premium-card p-4 text-center">
                  <div className="text-2xl font-light text-teal mb-1">24/7</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Plantão</div>
                </div>
                <div className="premium-card p-4 text-center">
                  <div className="text-2xl font-light text-teal mb-1">+15</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="premium-section py-20">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-10">
            <div className="premium-eyebrow mb-4 mx-auto">Destaques</div>
            <h2 className="premium-title">
              Excelência em <span className="premium-accent">Média Tensão</span>
            </h2>
            <div className="premium-divider" />
          </div>
          <ServiceCarousel items={carouselItems} />
        </div>
      </section>

      {/* Services */}
      <section id="servicos-page" className="premium-section py-20">
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="premium-eyebrow mb-4 mx-auto">Especialidades</div>
            <h2 className="premium-title">
              Serviços para <span className="premium-accent">Cabines Primárias</span>
            </h2>
            <div className="premium-divider" />
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Cada serviço executado com rigor técnico, instrumentação certificada
              e documentação completa de engenharia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => (
              <ServicePageCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="premium-section py-24">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="premium-eyebrow mb-6 mx-auto">
              <Award className="w-3 h-3" /> Padrão C2B
            </div>
            <h2 className="premium-title mb-6">
              Por que somos <span className="premium-accent">referência</span>.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12 text-lg">
              Não somos apenas uma empresa de manutenção elétrica.
              Somos engenheiros consultivos especializados no que há de mais crítico
              em uma instalação.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Wrench,
                  title: "Instrumentação Certificada",
                  desc: "Câmeras térmicas, analisadores de qualidade, megômetros e equipamentos com calibração rastreável Inmetro.",
                },
                {
                  icon: Crown,
                  title: "Engenharia Sênior",
                  desc: "Equipe formada por engenheiros eletricistas com CREA ativo e técnicos certificados NR-10 SEP.",
                },
                {
                  icon: ShieldCheck,
                  title: "Documentação Completa",
                  desc: "Cada intervenção entregue com ART, memorial, fotos, laudos e plano de ação executivo.",
                },
              ].map((item) => (
                <div key={item.title} className="premium-card p-6 text-left group">
                  <div className="premium-corner-accent" />
                  <div className="premium-icon-box mb-4">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AgendeCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CabinesPrimariasPage;