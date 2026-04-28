import { useState } from "react";
import { Battery, Gauge, LineChart, Wrench, RefreshCw, Settings, Building2, Sun, Car, Cpu, Lightbulb, X, ChevronDown, Sparkles } from "lucide-react";

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

const servicosPrincipais = [
  {
    id: "carregadores-ev", icon: Car, title: "Carregadores EV", shortDesc: "Infraestrutura para mobilidade elétrica",
    description: "Instalação de estações de carregamento para veículos elétricos. Soluções completas para residências, condomínios, empresas e estacionamentos comerciais.",
    features: ["Carregadores rápidos", "Gestão de energia", "Múltiplos pontos", "App de controle"],
    benefits: ["Carregamento até 10x mais rápido", "Integração com energia solar", "Gestão inteligente de múltiplos pontos", "Monitoramento via aplicativo"],
    image: servicoEvImg,
  },
  {
    id: "automacao", icon: Cpu, title: "Automação Inteligente", shortDesc: "Controle inteligente de sistemas",
    description: "Sistemas de automação residencial, predial e industrial. Controle total de iluminação, climatização, segurança e consumo de energia.",
    features: ["Integração total", "Controle remoto", "Eficiência energética", "Escalabilidade"],
    benefits: ["Redução de até 30% no consumo", "Controle centralizado", "Aumento de segurança e conforto", "Integração com assistentes virtuais"],
    image: servicoAutomacaoImg,
  },
  {
    id: "manutencao-industrial", icon: Settings, title: "Manutenção Industrial", shortDesc: "Manutenção preventiva e corretiva",
    description: "Manutenção preventiva e corretiva de instalações elétricas industriais. Equipe certificada NR-10 disponível 24/7.",
    features: ["Preventiva", "Corretiva", "24/7", "NR-10"],
    benefits: ["Redução de paradas não programadas", "Aumento da vida útil dos equipamentos", "Equipe certificada NR-10", "Atendimento emergencial"],
    image: servicoManutencaoImg,
  },
  {
    id: "projetos", icon: Wrench, title: "Projetos Elétricos", shortDesc: "Engenharia elétrica completa",
    description: "Desenvolvimento de projetos completos de instalações elétricas conforme ABNT e NR-10 para indústrias, comércios e edificações.",
    features: ["ABNT", "NR-10", "ART/RRT", "As-Built"],
    benefits: ["Projetos conforme normas vigentes", "Dimensionamento otimizado", "Memorial de cálculo completo", "Documentação técnica inclusa"],
    image: servicoProjetosImg,
  },
  {
    id: "energia-solar", icon: Sun, title: "Energia Solar", shortDesc: "Sistemas fotovoltaicos de alta performance",
    description: "Projetos completos de sistemas fotovoltaicos para residências, empresas e indústrias. Reduza até 95% da sua conta de energia.",
    features: ["Projeto personalizado", "Instalação certificada", "Monitoramento 24/7", "Garantia estendida"],
    benefits: ["Economia de até 95% na conta de energia", "Retorno do investimento em 3-5 anos", "Valorização do imóvel em até 8%", "Vida útil de mais de 25 anos"],
    image: servicoSolarImg,
  },
];

const servicosSecundarios = [
  { id: "eficiencia", icon: Battery, title: "Eficiência Energética", shortDesc: "Otimização do consumo de energia", description: "Análise e otimização do consumo para redução de custos operacionais.", features: ["Diagnóstico", "Otimização", "Economia", "Relatórios"], benefits: ["Redução média de 25% nos custos", "Identificação de desperdícios ocultos", "Plano de ação personalizado", "Acompanhamento de resultados"], image: servicoEficienciaImg },
  { id: "demanda", icon: Gauge, title: "Gestão de Demanda", shortDesc: "Monitoramento inteligente em tempo real", description: "Monitoramento e controle inteligente de demanda em tempo real.", features: ["Monitoramento", "Alertas", "Dashboard", "Relatórios"], benefits: ["Evita multas por ultrapassagem", "Dashboard em tempo real", "Alertas automáticos configuráveis", "Relatórios gerenciais detalhados"], image: servicoDemandaImg },
  { id: "qualidade", icon: LineChart, title: "Análise de Qualidade", shortDesc: "Avaliação da qualidade de energia", description: "Avaliação detalhada da qualidade de energia e correção de problemas.", features: ["Harmônicos", "Fator de Potência", "ANEEL", "Laudos"], benefits: ["Identificação de distorções", "Proteção de equipamentos sensíveis", "Conformidade com normas ANEEL", "Laudos técnicos completos"], image: servicoQualidadeImg },
  { id: "retrofit", icon: RefreshCw, title: "Retrofit", shortDesc: "Modernização de sistemas existentes", description: "Modernização de sistemas elétricos existentes.", features: ["Modernização", "Segurança", "Normas", "Eficiência"], benefits: ["Atualização sem parar operação", "Aumento de confiabilidade", "Redução de custos de manutenção", "Adequação às normas vigentes"], image: servicoRetrofitImg },
  { id: "instalacoes", icon: Building2, title: "Novas Instalações", shortDesc: "Instalações em BT, MT e AT", description: "Instalações elétricas completas em baixa, média e alta tensão.", features: ["BT/MT/AT", "Turnkey", "Comissionamento", "Testes"], benefits: ["Execução turnkey completa", "Comissionamento e startup", "Testes e medições certificados", "Documentação as-built"], image: servicoInstalacoesImg },
  { id: "iluminacao", icon: Lightbulb, title: "Iluminação LED", shortDesc: "Iluminação eficiente profissional", description: "Projetos de iluminação eficiente com tecnologia LED.", features: ["LED", "Economia", "NBR ISO/CIE", "Conforto"], benefits: ["Economia de até 70% em iluminação", "Melhoria do ambiente de trabalho", "Conformidade com NBR ISO/CIE", "Payback em até 18 meses"], image: servicoIluminacaoImg },
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

  const handleOpenModal = (servico: ServicoType) => setExpandedServico(servico);
  const handleCloseModal = () => setExpandedServico(null);

  return (
    <section id="servicos" className="premium-section py-24 md:py-32">
      <div className="absolute inset-0 premium-glow-radial" />
      <div className="absolute inset-0 premium-mosaic" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="premium-eyebrow mb-8">
            <Sparkles className="w-4 h-4" />
            Especialidades
          </div>
          <h2 className="premium-title mb-2">
            Nossos <span className="premium-accent">Serviços</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-lg text-gray-400 font-light">
            Soluções completas em engenharia elétrica para empresas e indústrias.
          </p>
        </div>

        {/* Serviços Principais */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {servicosPrincipais.map((servico) => {
              const Icon = servico.icon;
              return (
                <button
                  key={servico.id}
                  onClick={() => handleOpenModal(servico)}
                  id={servico.id}
                  className="w-full text-left premium-card overflow-hidden scroll-mt-24 group cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img src={servico.image} alt={servico.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-white leading-tight">{servico.title}</h3>
                    </div>
                  </div>
                  <div className="p-3 bg-black/40">
                    <p className="text-gray-400 text-xs leading-relaxed mb-2 line-clamp-2">{servico.shortDesc}</p>
                    <span className="inline-flex items-center gap-1 text-teal text-xs font-medium">
                      Saiba mais <ChevronDown className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Também oferecemos */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-white">
              Também <span className="premium-accent">oferecemos</span>
            </h3>
            <div className="w-8 h-[2px] bg-teal mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicosSecundarios.map((servico, index) => {
              const Icon = servico.icon;
              const isHovered = hoveredSecundario === index;
              return (
                <div key={servico.id} className="relative" onMouseEnter={() => setHoveredSecundario(index)} onMouseLeave={() => setHoveredSecundario(null)}>
                  <button
                    onClick={() => handleOpenModal(servico)}
                    id={servico.id}
                    className="w-full text-left premium-card overflow-hidden scroll-mt-24 group cursor-pointer"
                  >
                    <div className="relative h-24 overflow-hidden">
                      <img src={servico.image} alt={servico.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-lg bg-teal/90 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3 text-center bg-black/40">
                      <h4 className="text-xs font-semibold text-white leading-tight">{servico.title}</h4>
                    </div>
                  </button>

                  {isHovered && (
                    <div className="absolute z-40 left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-gray-950 border border-teal/30 rounded-lg shadow-2xl shadow-teal/20 p-4 animate-fade-in pointer-events-none">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{servico.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{servico.shortDesc}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {servico.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full text-teal bg-teal/10 font-medium">{feature}</span>
                        ))}
                      </div>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-950 border-t border-l border-teal/30 rotate-45" />
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in" onClick={handleCloseModal}>
          <div className="bg-gray-950 border border-teal/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl shadow-teal/20 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48 md:h-64">
              <img src={expandedServico.image} alt={expandedServico.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/60 to-transparent" />
              <button onClick={handleCloseModal} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-teal flex items-center justify-center">
                    <expandedServico.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{expandedServico.title}</h3>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-gray-300 leading-relaxed mb-6">{expandedServico.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {expandedServico.features.map((feature, idx) => (
                  <span key={idx} className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full text-teal bg-teal/10 font-medium">{feature}</span>
                ))}
              </div>
              <div className="bg-black/60 border border-white/10 rounded-lg p-5">
                <h4 className="text-sm uppercase tracking-wider text-teal font-semibold mb-4">Benefícios</h4>
                <ul className="space-y-3">
                  {expandedServico.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-teal rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#contato" onClick={handleCloseModal} className="flex-1 bg-teal text-white text-center py-3 rounded-lg font-medium hover:bg-teal/90 transition-colors">
                  Solicitar Orçamento
                </a>
                <button onClick={handleCloseModal} className="px-6 py-3 border border-white/20 rounded-lg text-gray-300 hover:bg-white/5 transition-colors">
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
