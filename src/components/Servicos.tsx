import { useState } from "react";
import { Battery, Gauge, LineChart, Wrench, RefreshCw, Settings, Building2, Sun, Car, Cpu, ArrowRight, Lightbulb, X } from "lucide-react";
import servicoSolar from "@/assets/servico-solar.jpg";
import servicoEv from "@/assets/servico-ev.jpg";
import servicoAutomacao from "@/assets/servico-automacao.jpg";

// Serviços em destaque (especialidades principais)
const servicosDestaque = [
  {
    icon: Sun,
    title: "Energia Solar",
    description: "Projetos completos de sistemas fotovoltaicos para residências, empresas e indústrias. Reduza até 95% da sua conta de energia com tecnologia de ponta e retorno garantido do investimento.",
    features: ["Projeto personalizado", "Instalação certificada", "Monitoramento 24/7", "Garantia estendida"],
    image: servicoSolar,
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
    icon: Car,
    title: "Carregadores para Veículos Elétricos",
    description: "Instalação de estações de carregamento para veículos elétricos. Soluções completas para residências, condomínios, empresas e estacionamentos comerciais.",
    features: ["Carregadores rápidos", "Gestão de energia", "Múltiplos pontos", "App de controle"],
    image: servicoEv,
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
    icon: Cpu,
    title: "Automação Inteligente",
    description: "Sistemas de automação residencial, predial e industrial. Controle total de iluminação, climatização, segurança e consumo de energia.",
    features: ["Integração total", "Controle remoto", "Eficiência energética", "Escalabilidade"],
    image: servicoAutomacao,
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

// Demais serviços
const servicos = [
  {
    icon: Battery,
    title: "Eficiência Energética",
    description: "Análise e otimização do consumo para redução de custos operacionais",
  },
  {
    icon: Gauge,
    title: "Gestão de Demanda",
    description: "Monitoramento e controle inteligente de demanda em tempo real",
  },
  {
    icon: LineChart,
    title: "Análise de Qualidade",
    description: "Avaliação detalhada da qualidade de energia e correção de problemas",
  },
  {
    icon: Wrench,
    title: "Projetos Elétricos",
    description: "Desenvolvimento de projetos completos de instalações industriais",
  },
  {
    icon: RefreshCw,
    title: "Retrofit",
    description: "Modernização de sistemas elétricos existentes",
  },
  {
    icon: Settings,
    title: "Manutenção",
    description: "Manutenção preventiva e corretiva de instalações",
  },
  {
    icon: Building2,
    title: "Novas Instalações",
    description: "Instalações elétricas em baixa, média e alta tensão",
  },
  {
    icon: Lightbulb,
    title: "Iluminação",
    description: "Projetos de iluminação eficiente para ambientes corporativos e industriais",
  },
];

const Servicos = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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

        {/* Featured Services - Interactive Cards */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="space-y-6">
            {servicosDestaque.map((servico, index) => {
              const Icon = servico.icon;
              const isExpanded = expandedIndex === index;
              
              return (
                <div
                  key={index}
                  className="group"
                >
                  {/* Main Card */}
                  <div
                    onClick={() => toggleExpand(index)}
                    className={`bg-white border rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ${
                      isExpanded 
                        ? "border-teal shadow-lg" 
                        : "border-gray-100 shadow-subtle hover:shadow-card hover:border-teal/30"
                    }`}
                  >
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded flex items-center justify-center transition-all duration-300 ${
                            isExpanded 
                              ? "bg-teal scale-110" 
                              : "bg-teal/10 group-hover:bg-teal group-hover:scale-105"
                          }`}>
                            <Icon className={`w-8 h-8 transition-colors duration-300 ${
                              isExpanded ? "text-white" : "text-teal group-hover:text-white"
                            }`} />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className={`text-xl md:text-2xl font-semibold mb-3 transition-colors ${
                            isExpanded ? "text-teal" : "text-charcoal group-hover:text-teal"
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
                                  isExpanded 
                                    ? "text-white bg-teal" 
                                    : "text-teal bg-teal/5"
                                }`}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Arrow / Close */}
                        <div className="hidden md:flex items-center">
                          {isExpanded ? (
                            <X className="w-6 h-6 text-teal transition-transform duration-300" />
                          ) : (
                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-teal group-hover:translate-x-1 transition-all duration-300" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <div className="border-t border-gray-100">
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image */}
                          <div className="relative h-64 md:h-80 overflow-hidden">
                            <img 
                              src={servico.image} 
                              alt={servico.title}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
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
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded p-5 hover:border-teal/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-teal/10 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-teal transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-charcoal mb-1 group-hover:text-teal transition-colors">
                        {servico.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {servico.description}
                      </p>
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
