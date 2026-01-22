import { useState, useEffect } from "react";
import { Battery, Gauge, LineChart, Wrench, RefreshCw, Settings, Building2, Sun, Car, Cpu, ArrowRight, Lightbulb, X } from "lucide-react";

// Images for featured services slideshow (4 per service)
const servicoSolarImages = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
  "https://images.unsplash.com/photo-1559302504-64aae6ca6548?w=800&q=80",
];

const servicoEvImages = [
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
  "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
  "https://images.unsplash.com/photo-1647429724247-f7e8ba34fcec?w=800&q=80",
  "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?w=800&q=80",
];

const servicoAutomacaoImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
];

// Secondary service images
const secondaryServiceImages = {
  eficiencia: [
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
    "https://images.unsplash.com/photo-1581092921461-39b9d1905ab8?w=800&q=80",
  ],
  demanda: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  ],
  qualidade: [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
    "https://images.unsplash.com/photo-1581092921461-39b9d1905ab8?w=800&q=80",
    "https://images.unsplash.com/photo-1497436072909-f81a93a0cfee?w=800&q=80",
  ],
  projetos: [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  ],
  retrofit: [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  ],
  manutencao: [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
  ],
  instalacoes: [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  ],
  iluminacao: [
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  ],
};

// Serviços em destaque (especialidades principais)
const servicosDestaque = [
  {
    id: "energia-solar",
    icon: Sun,
    title: "Energia Solar",
    description: "Projetos completos de sistemas fotovoltaicos para residências, empresas e indústrias. Reduza até 95% da sua conta de energia com tecnologia de ponta e retorno garantido do investimento.",
    features: ["Projeto personalizado", "Instalação certificada", "Monitoramento 24/7", "Garantia estendida"],
    images: servicoSolarImages,
    detailedInfo: {
      title: "Sistemas Fotovoltaicos Completos",
      benefits: [
        "Economia de até 95% na conta de energia",
        "Retorno do investimento em 3-5 anos",
        "Valorização do imóvel em até 8%",
        "Vida útil de mais de 25 anos"
      ],
      process: "Nossa equipe realiza análise completa do local, dimensionamento personalizado, instalação certificada e monitoramento contínuo do sistema."
    }
  },
  {
    id: "carregadores-ev",
    icon: Car,
    title: "Carregadores para Veículos Elétricos",
    description: "Instalação de estações de carregamento para veículos elétricos. Soluções completas para residências, condomínios, empresas e estacionamentos comerciais.",
    features: ["Carregadores rápidos", "Gestão de energia", "Múltiplos pontos", "App de controle"],
    images: servicoEvImages,
    detailedInfo: {
      title: "Infraestrutura de Mobilidade Elétrica",
      benefits: [
        "Carregamento até 10x mais rápido que tomada comum",
        "Integração com sistemas de energia solar",
        "Gestão inteligente de múltiplos pontos",
        "Monitoramento via aplicativo"
      ],
      process: "Instalamos desde carregadores residenciais até infraestrutura completa para frotas empresariais, com projeto elétrico adequado e certificação."
    }
  },
  {
    id: "automacao",
    icon: Cpu,
    title: "Automação Inteligente",
    description: "Sistemas de automação residencial, predial e industrial. Controle total de iluminação, climatização, segurança e consumo de energia.",
    features: ["Integração total", "Controle remoto", "Eficiência energética", "Escalabilidade"],
    images: servicoAutomacaoImages,
    detailedInfo: {
      title: "Automação Residencial e Predial",
      benefits: [
        "Redução de até 30% no consumo de energia",
        "Controle centralizado de todos os sistemas",
        "Aumento de segurança e conforto",
        "Integração com assistentes virtuais"
      ],
      process: "Desenvolvemos projetos personalizados de automação que integram iluminação, climatização, segurança e gestão de energia em uma única plataforma."
    }
  },
];

// Demais serviços com informações detalhadas
const servicos = [
  {
    icon: Battery,
    title: "Eficiência Energética",
    description: "Análise e otimização do consumo para redução de custos operacionais",
    images: secondaryServiceImages.eficiencia,
    detailedInfo: {
      title: "Consultoria em Eficiência Energética",
      benefits: [
        "Redução média de 25% nos custos de energia",
        "Identificação de desperdícios ocultos",
        "Plano de ação personalizado",
        "Acompanhamento de resultados"
      ],
      description: "Realizamos diagnóstico energético completo, identificando oportunidades de economia e implementando soluções que otimizam o consumo sem comprometer a operação."
    }
  },
  {
    icon: Gauge,
    title: "Gestão de Demanda",
    description: "Monitoramento e controle inteligente de demanda em tempo real",
    images: secondaryServiceImages.demanda,
    detailedInfo: {
      title: "Sistema de Gestão de Demanda",
      benefits: [
        "Evita multas por ultrapassagem de demanda",
        "Dashboard de monitoramento em tempo real",
        "Alertas automáticos configuráveis",
        "Relatórios gerenciais detalhados"
      ],
      description: "Implantamos sistemas de monitoramento que permitem controlar a demanda contratada, evitando penalidades e otimizando a contratação de energia."
    }
  },
  {
    icon: LineChart,
    title: "Análise de Qualidade",
    description: "Avaliação detalhada da qualidade de energia e correção de problemas",
    images: secondaryServiceImages.qualidade,
    detailedInfo: {
      title: "Análise de Qualidade de Energia",
      benefits: [
        "Identificação de harmônicos e distorções",
        "Proteção de equipamentos sensíveis",
        "Conformidade com normas ANEEL",
        "Laudos técnicos completos"
      ],
      description: "Utilizamos equipamentos de última geração para medir e analisar a qualidade da energia, identificando problemas que podem danificar equipamentos ou aumentar custos."
    }
  },
  {
    icon: Wrench,
    title: "Projetos Elétricos",
    description: "Desenvolvimento de projetos completos de instalações industriais",
    images: secondaryServiceImages.projetos,
    detailedInfo: {
      title: "Projetos Elétricos Industriais",
      benefits: [
        "Projetos conforme ABNT e NR-10",
        "Dimensionamento otimizado",
        "Memorial de cálculo completo",
        "ART/RRT incluso"
      ],
      description: "Desenvolvemos projetos elétricos completos para indústrias, comércios e edificações, com foco em segurança, eficiência e conformidade normativa."
    }
  },
  {
    icon: RefreshCw,
    title: "Retrofit",
    description: "Modernização de sistemas elétricos existentes",
    images: secondaryServiceImages.retrofit,
    detailedInfo: {
      title: "Retrofit de Instalações Elétricas",
      benefits: [
        "Atualização tecnológica sem parar operação",
        "Aumento de segurança e confiabilidade",
        "Redução de custos de manutenção",
        "Adequação às normas vigentes"
      ],
      description: "Modernizamos instalações elétricas existentes, substituindo componentes obsoletos por tecnologias atuais, sem necessidade de parada total das operações."
    }
  },
  {
    icon: Settings,
    title: "Manutenção",
    description: "Manutenção preventiva e corretiva de instalações",
    images: secondaryServiceImages.manutencao,
    detailedInfo: {
      title: "Manutenção Elétrica Industrial",
      benefits: [
        "Planos preventivos personalizados",
        "Atendimento emergencial 24/7",
        "Equipe certificada NR-10",
        "Redução de paradas não programadas"
      ],
      description: "Oferecemos contratos de manutenção preventiva e corretiva, garantindo a disponibilidade e confiabilidade das instalações elétricas."
    }
  },
  {
    icon: Building2,
    title: "Novas Instalações",
    description: "Instalações elétricas em baixa, média e alta tensão",
    images: secondaryServiceImages.instalacoes,
    detailedInfo: {
      title: "Instalações Elétricas BT/MT/AT",
      benefits: [
        "Execução turnkey completa",
        "Comissionamento e startup",
        "Testes e medições certificados",
        "Documentação as-built"
      ],
      description: "Executamos instalações elétricas completas em baixa, média e alta tensão, desde o projeto até o comissionamento e entrega final."
    }
  },
  {
    icon: Lightbulb,
    title: "Iluminação",
    description: "Projetos de iluminação eficiente para ambientes corporativos e industriais",
    images: secondaryServiceImages.iluminacao,
    detailedInfo: {
      title: "Projetos de Iluminação LED",
      benefits: [
        "Economia de até 70% em iluminação",
        "Melhoria do ambiente de trabalho",
        "Conformidade com NBR ISO/CIE",
        "Payback em até 18 meses"
      ],
      description: "Desenvolvemos projetos luminotécnicos completos, com foco em eficiência energética e qualidade do ambiente, utilizando tecnologia LED de última geração."
    }
  },
];

// Image slideshow component
const ImageSlideshow = ({ images, isActive }: { images: string[]; isActive: boolean }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isActive, images.length]);

  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
      
      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentImageIndex ? "bg-teal w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Servicos = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSecondaryIndex, setHoveredSecondaryIndex] = useState<number | null>(null);

  return (
    <section
      id="servicos"
      className="py-24 md:py-32 bg-gray-200"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Soluções
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6">
            Nossos <span className="font-semibold">Serviços</span>
          </h2>
          <div className="w-12 h-[2px] bg-teal mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Especialistas em energia solar, mobilidade elétrica e automação inteligente
          </p>
        </div>

        {/* Featured Services - Hover to expand */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="space-y-6">
            {servicosDestaque.map((servico, index) => {
              const Icon = servico.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={index}
                  id={servico.id}
                  className="group scroll-mt-24"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Main Card */}
                  <div
                    className={`bg-white border rounded-lg overflow-hidden transition-all duration-500 ${
                      isHovered 
                        ? "border-teal shadow-lg" 
                        : "border-gray-100 shadow-subtle hover:shadow-card hover:border-teal/30"
                    }`}
                  >
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded flex items-center justify-center transition-all duration-300 ${
                            isHovered 
                              ? "bg-teal scale-110" 
                              : "bg-teal/10 group-hover:bg-teal group-hover:scale-105"
                          }`}>
                            <Icon className={`w-8 h-8 transition-colors duration-300 ${
                              isHovered ? "text-white" : "text-teal group-hover:text-white"
                            }`} />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className={`text-xl md:text-2xl font-semibold mb-3 transition-colors ${
                            isHovered ? "text-teal" : "text-charcoal group-hover:text-teal"
                          }`}>
                            {servico.title}
                          </h3>
                          <p className="text-gray-500 leading-relaxed mb-6">
                            {servico.description}
                          </p>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-3">
                            {servico.features.map((feature, idx) => (
                              <span 
                                key={idx}
                                className={`text-xs uppercase tracking-wider px-3 py-1.5 rounded transition-colors ${
                                  isHovered 
                                    ? "text-white bg-teal" 
                                    : "text-teal bg-teal/5"
                                }`}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex items-center">
                          <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                            isHovered ? "text-teal translate-x-1" : "text-gray-300"
                          }`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Content with Image Slideshow */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isHovered ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <div className="border-t border-gray-100">
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image Slideshow */}
                          <div className="relative">
                            <ImageSlideshow images={servico.images} isActive={isHovered} />
                            <div className="absolute bottom-6 left-6 right-6">
                              <h4 className="text-white text-xl font-semibold">
                                {servico.detailedInfo.title}
                              </h4>
                            </div>
                          </div>
                          
                          {/* Details */}
                          <div className="p-8 bg-gray-50">
                            <h5 className="text-sm uppercase tracking-wider text-teal font-medium mb-4">
                              Benefícios
                            </h5>
                            <ul className="space-y-3 mb-6">
                              {servico.detailedInfo.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-600">
                                  <span className="w-1.5 h-1.5 bg-teal rounded-full mt-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                            <p className="text-sm text-gray-500 leading-relaxed">
                              {servico.detailedInfo.process}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Services */}
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 uppercase tracking-[0.15em] text-xs font-medium mb-10">
            Também oferecemos
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicos.map((servico, index) => {
              const Icon = servico.icon;
              const isHovered = hoveredSecondaryIndex === index;
              
              return (
                <div 
                  key={index} 
                  className="relative"
                  onMouseEnter={() => setHoveredSecondaryIndex(index)}
                  onMouseLeave={() => setHoveredSecondaryIndex(null)}
                >
                  <div
                    className={`group bg-white border rounded overflow-hidden transition-all duration-300 ${
                      isHovered 
                        ? "border-teal shadow-lg" 
                        : "border-gray-100 hover:border-teal/30 hover:shadow-card hover:-translate-y-1"
                    }`}
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isHovered 
                            ? "bg-teal scale-110" 
                            : "bg-gray-50 group-hover:bg-teal/10 group-hover:scale-110"
                        }`}>
                          <Icon className={`w-5 h-5 transition-colors ${
                            isHovered ? "text-white" : "text-gray-400 group-hover:text-teal"
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-sm font-semibold mb-1 transition-colors ${
                            isHovered ? "text-teal" : "text-charcoal group-hover:text-teal"
                          }`}>
                            {servico.title}
                          </h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {servico.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Subcard with Image Slideshow */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isHovered ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <div className="border-t border-gray-100">
                        {/* Image slideshow */}
                        <ImageSlideshow images={servico.images} isActive={isHovered} />
                        
                        {/* Details */}
                        <div className="p-4 bg-gray-50">
                          <h5 className="text-xs uppercase tracking-wider text-teal font-medium mb-3">
                            Benefícios
                          </h5>
                          <ul className="space-y-2 mb-4">
                            {servico.detailedInfo.benefits.slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600 text-xs">
                                <span className="w-1 h-1 bg-teal rounded-full mt-1.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                            {servico.detailedInfo.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
