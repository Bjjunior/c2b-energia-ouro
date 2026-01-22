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

        {/* Values Grid - Animated Cards with Slide Transitions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-8 shadow-subtle hover:shadow-elevated hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal/0 via-teal/5 to-teal/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Top accent line with slide animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-teal/80 to-teal/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Bottom glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-teal/30 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative z-10 text-center">
                  {/* Icon container with complex animation */}
                  <div className="mb-6 inline-block">
                    <div className="relative">
                      {/* Pulse ring */}
                      <div className="absolute inset-0 w-16 h-16 rounded-full bg-teal/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-700 delay-100" />
                      
                      <div className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto group-hover:border-teal group-hover:bg-teal group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-teal/30">
                        <Icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title with underline slide animation */}
                  <h3 className="text-lg font-semibold text-charcoal mb-3 group-hover:text-teal transition-colors duration-300 relative inline-block">
                    {valor.title}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />
                  </h3>
                  
                  {/* Description with fade animation */}
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-all duration-500 transform group-hover:translate-y-0">
                    {valor.description}
                  </p>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-teal/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal/3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 delay-100" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-0 group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Valores;
