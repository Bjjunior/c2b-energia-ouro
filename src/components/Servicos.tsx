import { useState, useEffect } from "react";
import { Battery, Gauge, LineChart, Wrench, RefreshCw, Settings, Building2, Sun, Car, Cpu, Lightbulb } from "lucide-react";

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

// Serviços em destaque (especialidades principais)
const servicosDestaque = [
  {
    id: "energia-solar",
    icon: Sun,
    title: "Energia Solar",
    description: "Projetos completos de sistemas fotovoltaicos para residências, empresas e indústrias. Reduza até 95% da sua conta de energia.",
    features: ["Projeto personalizado", "Instalação certificada", "Monitoramento 24/7", "Garantia estendida"],
    image: servicoSolarImg,
  },
  {
    id: "carregadores-ev",
    icon: Car,
    title: "Carregadores para Veículos Elétricos",
    description: "Instalação de estações de carregamento para veículos elétricos. Soluções para residências, condomínios e empresas.",
    features: ["Carregadores rápidos", "Gestão de energia", "Múltiplos pontos", "App de controle"],
    image: servicoEvImg,
  },
  {
    id: "automacao",
    icon: Cpu,
    title: "Automação Inteligente",
    description: "Sistemas de automação residencial, predial e industrial. Controle total de iluminação, climatização e segurança.",
    features: ["Integração total", "Controle remoto", "Eficiência energética", "Escalabilidade"],
    image: servicoAutomacaoImg,
  },
  {
    id: "manutencao-industrial",
    icon: Settings,
    title: "Manutenção Industrial",
    description: "Manutenção preventiva e corretiva de instalações elétricas industriais. Equipe certificada NR-10.",
    features: ["Preventiva", "Corretiva", "24/7", "NR-10"],
    image: servicoManutencaoImg,
  },
  {
    id: "projetos",
    icon: Wrench,
    title: "Projetos Elétricos",
    description: "Desenvolvimento de projetos completos de instalações elétricas conforme ABNT e NR-10.",
    features: ["ABNT", "NR-10", "ART/RRT", "As-Built"],
    image: servicoProjetosImg,
  },
];

// Demais serviços
const servicos = [
  {
    icon: Battery,
    title: "Eficiência Energética",
    description: "Análise e otimização do consumo para redução de custos",
    image: servicoEficienciaImg,
    benefits: ["Redução de 25% nos custos", "Identificação de desperdícios", "Plano personalizado"],
  },
  {
    icon: Gauge,
    title: "Gestão de Demanda",
    description: "Monitoramento e controle inteligente de demanda",
    image: servicoDemandaImg,
    benefits: ["Evita multas", "Monitoramento em tempo real", "Alertas automáticos"],
  },
  {
    icon: LineChart,
    title: "Análise de Qualidade",
    description: "Avaliação da qualidade de energia e correção",
    image: servicoQualidadeImg,
    benefits: ["Harmônicos", "Proteção de equipamentos", "Conformidade ANEEL"],
  },
  {
    icon: RefreshCw,
    title: "Retrofit",
    description: "Modernização de sistemas elétricos existentes",
    image: servicoRetrofitImg,
    benefits: ["Atualização tecnológica", "Aumento de segurança", "Adequação às normas"],
  },
  {
    icon: Building2,
    title: "Novas Instalações",
    description: "Instalações elétricas em baixa, média e alta tensão",
    image: servicoInstalacoesImg,
    benefits: ["Turnkey completo", "Comissionamento", "Testes certificados"],
  },
  {
    icon: Lightbulb,
    title: "Iluminação LED",
    description: "Projetos de iluminação eficiente para ambientes",
    image: servicoIluminacaoImg,
    benefits: ["Economia de 70%", "Melhoria do ambiente", "NBR ISO/CIE"],
  },
];

const Servicos = () => {
  const [hoveredSecondaryIndex, setHoveredSecondaryIndex] = useState<number | null>(null);

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
            Especialistas em energia solar, mobilidade elétrica e automação inteligente
          </p>
        </div>

        {/* Featured Services - Static Cards with Images */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicosDestaque.map((servico, index) => {
              const Icon = servico.icon;
              
              return (
                <div
                  key={index}
                  id={servico.id}
                  className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 scroll-mt-24 group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={servico.image}
                      alt={servico.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{servico.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {servico.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {servico.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs uppercase tracking-wider px-2 py-1 rounded text-teal bg-teal/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Services - With hover animation */}
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 uppercase tracking-[0.15em] text-xs font-medium mb-8">
            Também oferecemos
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    className={`group bg-white border rounded-lg overflow-hidden transition-all duration-300 ${
                      isHovered 
                        ? "border-teal shadow-lg" 
                        : "border-gray-100 hover:border-teal/30 hover:shadow-card"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={servico.image}
                        alt={servico.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isHovered ? "scale-110" : ""
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className={`absolute bottom-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isHovered ? "bg-teal" : "bg-white/90"
                      }`}>
                        <Icon className={`w-4 h-4 transition-colors ${
                          isHovered ? "text-white" : "text-teal"
                        }`} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <h4 className={`text-sm font-semibold mb-1.5 transition-colors ${
                        isHovered ? "text-teal" : "text-charcoal"
                      }`}>
                        {servico.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed mb-3">
                        {servico.description}
                      </p>
                      
                      {/* Benefits on hover */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                      }`}>
                        <ul className="space-y-1 pt-2 border-t border-gray-100">
                          {servico.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-500 text-xs">
                              <span className="w-1 h-1 bg-teal rounded-full" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
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
