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
      className="py-24 md:py-32 bg-gray-200"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Nossos Princípios
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6">
            Valores que nos <span className="font-semibold">definem</span>
          </h2>
          <div className="w-12 h-[2px] bg-teal mx-auto" />
        </div>

        {/* Values Grid - Animated Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-8 shadow-subtle hover:shadow-card hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-teal/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="relative z-10 text-center">
                  {/* Icon container with animation */}
                  <div className="mb-6 inline-block">
                    <div className="w-16 h-16 border border-gray-200 rounded-full flex items-center justify-center mx-auto group-hover:border-teal group-hover:bg-teal group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-all duration-500" />
                    </div>
                  </div>
                  
                  {/* Title with underline animation */}
                  <h3 className="text-lg font-semibold text-charcoal mb-3 group-hover:text-teal transition-colors duration-300 relative inline-block">
                    {valor.title}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {valor.description}
                  </p>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-teal/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Valores;
