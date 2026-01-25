import { useState } from "react";
import { Battery, Gauge, LineChart, Wrench, RefreshCw, Settings, Building2, Sun, Car, Cpu, Lightbulb, X, ChevronDown } from "lucide-react";

// Import local images
import servicoSolarImg from "@/assets/servico-solar.jpg";
import servicoEvImg from "@/assets/servico-ev.jpg";
import servicoAutomacaoImg from "@/assets/servico-automacao.jpg";
import servicoEficienciaImg from "@/assets/servico-eficiencia.jpg";
import servicoDemandaImg from "@/assets/servico-demanda.jpg";
import servicoQualidadeImg from "@/assets/servico-qualidade.jpg";
import servicoProjetosImg from "@/assets/servico-projetos.jpg";
import servicoRetrofitImg from "@/assets/servico-retrofit.jpg";
import servicoManutencaoImg from "@/assets/servico-manutencao.jpg";
import servicoInstalacoesImg from "@/assets/servico-instalacoes.jpg";
import servicoIluminacaoImg from "@/assets/servico-iluminacao.jpg";

// Serviços principais (destaque)
const servicosPrincipais = [
  {
    id: "energia-solar",
    icon: Sun,
    title: "Energia Solar",
    shortDesc: "Sistemas fotovoltaicos de alta performance",
    description: "Projetos completos de sistemas fotovoltaicos para residências, empresas e indústrias. Reduza até 95% da sua conta de energia com tecnologia de ponta e retorno garantido do investimento.",
    features: ["Projeto personalizado", "Instalação certificada", "Monitoramento 24/7", "Garantia estendida"],
    benefits: [
      "Economia de até 95% na conta de energia",
      "Retorno do investimento em 3-5 anos",
      "Valorização do imóvel em até 8%",
      "Vida útil de mais de 25 anos"
    ],
    image: servicoSolarImg,
  },
  {
    id: "carregadores-ev",
    icon: Car,
    title: "Carregadores EV",
    shortDesc: "Infraestrutura para mobilidade elétrica",
    description: "Instalação de estações de carregamento para veículos elétricos. Soluções completas para residências, condomínios, empresas e estacionamentos comerciais.",
    features: ["Carregadores rápidos", "Gestão de energia", "Múltiplos pontos", "App de controle"],
    benefits: [
      "Carregamento até 10x mais rápido",
      "Integração com energia solar",
      "Gestão inteligente de múltiplos pontos",
      "Monitoramento via aplicativo"
    ],
    image: servicoEvImg,
  },
  {
    id: "automacao",
    icon: Cpu,
    title: "Automação Inteligente",
    shortDesc: "Controle inteligente de sistemas",
    description: "Sistemas de automação residencial, predial e industrial. Controle total de iluminação, climatização, segurança e consumo de energia.",
    features: ["Integração total", "Controle remoto", "Eficiência energética", "Escalabilidade"],
    benefits: [
      "Redução de até 30% no consumo",
      "Controle centralizado",
      "Aumento de segurança e conforto",
      "Integração com assistentes virtuais"
    ],
    image: servicoAutomacaoImg,
  },
  {
    id: "manutencao-industrial",
    icon: Settings,
    title: "Manutenção Industrial",
    shortDesc: "Manutenção preventiva e corretiva",
    description: "Manutenção preventiva e corretiva de instalações elétricas industriais. Equipe certificada NR-10 disponível 24/7.",
    features: ["Preventiva", "Corretiva", "24/7", "NR-10"],
    benefits: [
      "Redução de paradas não programadas",
      "Aumento da vida útil dos equipamentos",
      "Equipe certificada NR-10",
      "Atendimento emergencial"
    ],
    image: servicoManutencaoImg,
  },
  {
    id: "projetos",
    icon: Wrench,
    title: "Projetos Elétricos",
    shortDesc: "Engenharia elétrica completa",
    description: "Desenvolvimento de projetos completos de instalações elétricas conforme ABNT e NR-10 para indústrias, comércios e edificações.",
    features: ["ABNT", "NR-10", "ART/RRT", "As-Built"],
    benefits: [
      "Projetos conforme normas vigentes",
      "Dimensionamento otimizado",
      "Memorial de cálculo completo",
      "Documentação técnica inclusa"
    ],
    image: servicoProjetosImg,
  },
];

// Serviços secundários (também oferecemos)
const servicosSecundarios = [
  {
    id: "eficiencia",
    icon: Battery,
    title: "Eficiência Energética",
    shortDesc: "Otimização do consumo de energia",
    description: "Análise e otimização do consumo para redução de custos operacionais através de diagnóstico energético completo.",
    features: ["Diagnóstico", "Otimização", "Economia", "Relatórios"],
    benefits: [
      "Redução média de 25% nos custos",
      "Identificação de desperdícios ocultos",
      "Plano de ação personalizado",
      "Acompanhamento de resultados"
    ],
    image: servicoEficienciaImg,
  },
  {
    id: "demanda",
    icon: Gauge,
    title: "Gestão de Demanda",
    shortDesc: "Monitoramento inteligente em tempo real",
    description: "Monitoramento e controle inteligente de demanda em tempo real para evitar multas e otimizar a contratação.",
    features: ["Monitoramento", "Alertas", "Dashboard", "Relatórios"],
    benefits: [
      "Evita multas por ultrapassagem",
      "Dashboard em tempo real",
      "Alertas automáticos configuráveis",
      "Relatórios gerenciais detalhados"
    ],
    image: servicoDemandaImg,
  },
  {
    id: "qualidade",
    icon: LineChart,
    title: "Análise de Qualidade",
    shortDesc: "Avaliação da qualidade de energia",
    description: "Avaliação detalhada da qualidade de energia e correção de problemas que podem danificar equipamentos.",
    features: ["Harmônicos", "Fator de Potência", "ANEEL", "Laudos"],
    benefits: [
      "Identificação de distorções",
      "Proteção de equipamentos sensíveis",
      "Conformidade com normas ANEEL",
      "Laudos técnicos completos"
    ],
    image: servicoQualidadeImg,
  },
  {
    id: "retrofit",
    icon: RefreshCw,
    title: "Retrofit",
    shortDesc: "Modernização de sistemas existentes",
    description: "Modernização de sistemas elétricos existentes, substituindo componentes obsoletos por tecnologias atuais.",
    features: ["Modernização", "Segurança", "Normas", "Eficiência"],
    benefits: [
      "Atualização sem parar operação",
      "Aumento de confiabilidade",
      "Redução de custos de manutenção",
      "Adequação às normas vigentes"
    ],
    image: servicoRetrofitImg,
  },
  {
    id: "instalacoes",
    icon: Building2,
    title: "Novas Instalações",
    shortDesc: "Instalações em BT, MT e AT",
    description: "Instalações elétricas completas em baixa, média e alta tensão, desde o projeto até o comissionamento.",
    features: ["BT/MT/AT", "Turnkey", "Comissionamento", "Testes"],
    benefits: [
      "Execução turnkey completa",
      "Comissionamento e startup",
      "Testes e medições certificados",
      "Documentação as-built"
    ],
    image: servicoInstalacoesImg,
  },
  {
    id: "iluminacao",
    icon: Lightbulb,
    title: "Iluminação LED",
    shortDesc: "Iluminação eficiente profissional",
    description: "Projetos de iluminação eficiente para ambientes corporativos e industriais com tecnologia LED.",
    features: ["LED", "Economia", "NBR ISO/CIE", "Conforto"],
    benefits: [
      "Economia de até 70% em iluminação",
      "Melhoria do ambiente de trabalho",
      "Conformidade com NBR ISO/CIE",
      "Payback em até 18 meses"
    ],
    image: servicoIluminacaoImg,
  },
];

interface ServicoType {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
}

const Servicos = () => {
  const [expandedServico, setExpandedServico] = useState<ServicoType | null>(null);
  const [hoveredSecundario, setHoveredSecundario] = useState<number | null>(null);

  const handleOpenModal = (servico: ServicoType) => {
    setExpandedServico(servico);
  };

  const handleCloseModal = () => {
    setExpandedServico(null);
  };

  return (
    <section id="servicos" className="py-16 md:py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Especialidades
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
            Nossos <span className="font-semibold">Serviços</span>
          </h2>
          <div className="w-12 h-[2px] bg-teal mx-auto mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Soluções completas em engenharia elétrica para empresas e indústrias
          </p>
        </div>

        {/* Serviços Principais - Cards Grandes */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primeiro card grande (destaque) */}
            <div className="sm:col-span-2 lg:col-span-2">
              {(() => {
                const servico = servicosPrincipais[0];
                const Icon = servico.icon;
                return (
                  <button
                    onClick={() => handleOpenModal(servico)}
                    id={servico.id}
                    className="w-full h-full text-left bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 scroll-mt-24 group cursor-pointer"
                  >
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={servico.image}
                        alt={servico.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-teal flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">{servico.title}</h3>
                        </div>
                        <p className="text-white/80 text-sm mb-3 max-w-md">{servico.shortDesc}</p>
                        <span className="inline-flex items-center gap-2 text-teal text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                          Saiba mais <ChevronDown className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })()}
            </div>

            {/* Demais cards principais */}
            {servicosPrincipais.slice(1).map((servico) => {
              const Icon = servico.icon;
              return (
                <button
                  key={servico.id}
                  onClick={() => handleOpenModal(servico)}
                  id={servico.id}
                  className="w-full text-left bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 scroll-mt-24 group cursor-pointer"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={servico.image}
                      alt={servico.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-teal flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{servico.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {servico.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-teal text-sm font-medium">
                      Saiba mais <ChevronDown className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Também oferecemos - Cards menores com hover */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-light text-charcoal">
              Também <span className="font-semibold">oferecemos</span>
            </h3>
            <div className="w-8 h-[2px] bg-teal mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicosSecundarios.map((servico, index) => {
              const Icon = servico.icon;
              const isHovered = hoveredSecundario === index;

              return (
                <div 
                  key={servico.id}
                  className="relative"
                  onMouseEnter={() => setHoveredSecundario(index)}
                  onMouseLeave={() => setHoveredSecundario(null)}
                >
                  <button
                    onClick={() => handleOpenModal(servico)}
                    id={servico.id}
                    className="w-full text-left bg-white rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 scroll-mt-24 group cursor-pointer"
                  >
                    <div className="relative h-24 overflow-hidden">
                      <img
                        src={servico.image}
                        alt={servico.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-lg bg-teal/90 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3 text-center">
                      <h4 className="text-xs font-semibold text-charcoal leading-tight">
                        {servico.title}
                      </h4>
                    </div>
                  </button>

                  {/* Hover Card Expandido */}
                  {isHovered && (
                    <div className="absolute z-40 left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white rounded-lg shadow-elevated p-4 animate-fade-in pointer-events-none">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-charcoal">{servico.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{servico.shortDesc}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {servico.features.slice(0, 3).map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full text-teal bg-teal/10 font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-sm" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {expandedServico && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-48 md:h-64">
              <img
                src={expandedServico.image}
                alt={expandedServico.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              {/* Title overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-teal flex items-center justify-center">
                    <expandedServico.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{expandedServico.title}</h3>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                {expandedServico.description}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {expandedServico.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full text-teal bg-teal/10 font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* Benefits */}
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="text-sm uppercase tracking-wider text-teal font-semibold mb-4">
                  Benefícios
                </h4>
                <ul className="space-y-3">
                  {expandedServico.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-teal rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <a
                  href="#contato"
                  onClick={handleCloseModal}
                  className="flex-1 bg-teal text-white text-center py-3 rounded-lg font-medium hover:bg-teal/90 transition-colors"
                >
                  Solicitar Orçamento
                </a>
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Servicos;
