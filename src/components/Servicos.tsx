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

// Todos os serviços combinados
const todosServicos = [
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

const Servicos = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="servicos" className="py-16 md:py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Soluções
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
            Nossos <span className="font-semibold">Serviços</span>
          </h2>
          <div className="w-12 h-[2px] bg-teal mx-auto mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Soluções completas em engenharia elétrica para empresas e indústrias
          </p>
        </div>

        {/* Services Grid - Responsive with no gaps */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {todosServicos.map((servico, index) => {
              const Icon = servico.icon;
              const isExpanded = expandedIndex === index;
              
              return (
                <div key={index} className="relative">
                  {/* Card */}
                  <button
                    onClick={() => handleCardClick(index)}
                    id={servico.id}
                    className={`w-full text-left bg-white rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 scroll-mt-24 group cursor-pointer ${
                      isExpanded ? "ring-2 ring-teal" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={servico.image}
                        alt={servico.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-sm font-semibold text-white leading-tight">{servico.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Short Description */}
                    <div className="p-3">
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {servico.shortDesc}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-teal text-xs font-medium">
                          {isExpanded ? "Fechar" : "Saiba mais"}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-teal transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`} />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content - Modal Overlay */}
                  {isExpanded && (
                    <div 
                      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in"
                      onClick={() => setExpandedIndex(null)}
                    >
                      <div 
                        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Header Image */}
                        <div className="relative h-48 md:h-64">
                          <img
                            src={servico.image}
                            alt={servico.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          
                          {/* Close button */}
                          <button
                            onClick={() => setExpandedIndex(null)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                          >
                            <X className="w-5 h-5 text-white" />
                          </button>
                          
                          {/* Title overlay */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-12 h-12 rounded-lg bg-teal flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-2xl font-semibold text-white">{servico.title}</h3>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 md:p-8">
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {servico.description}
                          </p>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {servico.features.map((feature, idx) => (
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
                              {servico.benefits.map((benefit, idx) => (
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
                              onClick={() => setExpandedIndex(null)}
                              className="flex-1 bg-teal text-white text-center py-3 rounded-lg font-medium hover:bg-teal/90 transition-colors"
                            >
                              Solicitar Orçamento
                            </a>
                            <button
                              onClick={() => setExpandedIndex(null)}
                              className="px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                              Fechar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
