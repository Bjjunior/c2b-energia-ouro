import { Zap, Target, Shield, Lightbulb } from "lucide-react";

const valores = [
  {
    icon: Zap,
    title: "Inovação",
    description: "Tecnologias de ponta em energia solar, mobilidade elétrica e automação para resultados superiores",
  },
  {
    icon: Target,
    title: "Precisão",
    description: "Projetos executados com rigor técnico e atenção meticulosa aos detalhes",
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Compromisso absoluto com segurança e qualidade em todas as instalações",
  },
  {
    icon: Lightbulb,
    title: "Sustentabilidade",
    description: "Soluções de energia limpa que reduzem custos e impacto ambiental",
  },
];

const Valores = () => {
  return (
    <section
      id="valores"
      className="py-16 md:py-20 bg-gray-200"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Nossos Princípios
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
            Valores que nos <span className="font-semibold">definem</span>
          </h2>
          <div className="w-12 h-[2px] bg-teal mx-auto" />
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-6 shadow-subtle hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal/0 via-teal/5 to-teal/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Top accent line with slide animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-teal/80 to-teal/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="relative z-10 text-center">
                  {/* Icon container with padding fix */}
                  <div className="mb-5 inline-block">
                    <div className="relative">
                      <div className="w-14 h-14 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto group-hover:border-teal group-hover:bg-teal group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-teal/30">
                        <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title with proper spacing */}
                  <h3 className="text-base font-semibold text-charcoal mb-2 group-hover:text-teal transition-colors duration-300">
                    {valor.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {valor.description}
                  </p>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-teal/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Valores;
