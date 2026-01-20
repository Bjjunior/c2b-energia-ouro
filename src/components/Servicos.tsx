import { Battery, Gauge, LineChart, Wrench, RefreshCw, Settings, Building2, Sun, Car, Cpu, ArrowRight, Lightbulb } from "lucide-react";

// Serviços em destaque (especialidades principais)
const servicosDestaque = [
  {
    icon: Sun,
    title: "Energia Solar",
    description: "Projetos completos de sistemas fotovoltaicos para residências, empresas e indústrias. Reduza até 95% da sua conta de energia com tecnologia de ponta e retorno garantido do investimento.",
    features: ["Projeto personalizado", "Instalação certificada", "Monitoramento 24/7", "Garantia estendida"],
  },
  {
    icon: Car,
    title: "Carregadores para Veículos Elétricos",
    description: "Instalação de estações de carregamento para veículos elétricos. Soluções completas para residências, condomínios, empresas e estacionamentos comerciais.",
    features: ["Carregadores rápidos", "Gestão de energia", "Múltiplos pontos", "App de controle"],
  },
  {
    icon: Cpu,
    title: "Automação Inteligente",
    description: "Sistemas de automação residencial, predial e industrial. Controle total de iluminação, climatização, segurança e consumo de energia.",
    features: ["Integração total", "Controle remoto", "Eficiência energética", "Escalabilidade"],
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
  return (
    <section
      id="servicos"
      className="py-24 md:py-32 bg-gray-50"
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

        {/* Featured Services - Sophisticated List */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="space-y-6">
            {servicosDestaque.map((servico, index) => {
              const Icon = servico.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded p-8 md:p-10 shadow-subtle hover:shadow-card transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-teal/10 rounded flex items-center justify-center group-hover:bg-teal group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-8 h-8 text-teal group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-charcoal mb-3 group-hover:text-teal transition-colors">
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
                            className="text-xs uppercase tracking-wider text-teal bg-teal/5 px-3 py-1.5 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center">
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-teal group-hover:translate-x-1 transition-all duration-300" />
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
                  className="group bg-white border border-gray-100 rounded p-5 hover:border-teal/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-teal/10 transition-colors">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-teal transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-charcoal mb-1">
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
