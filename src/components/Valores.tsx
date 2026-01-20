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

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <div
                key={index}
                className="group text-center p-8"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 border border-gray-200 rounded-full flex items-center justify-center mx-auto group-hover:border-teal group-hover:bg-teal/5 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gray-400 group-hover:text-teal transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  {valor.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {valor.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Valores;
