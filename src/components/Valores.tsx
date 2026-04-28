import { Zap, Target, Shield, Lightbulb, Sparkles } from "lucide-react";

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
      className="premium-section py-24 md:py-32"
    >
      {/* Premium overlays */}
      <div className="absolute inset-0 premium-glow-radial" />
      <div className="absolute inset-0 premium-mosaic" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="premium-eyebrow mb-8">
            <Sparkles className="w-4 h-4" />
            Nossos Princípios
          </div>
          <h2 className="premium-title mb-2">
            Valores que nos <span className="premium-accent">definem</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-lg text-gray-400 font-light">
            Os pilares que sustentam cada projeto entregue pela C2B.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <div
                key={index}
                className="group premium-card p-7 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="premium-corner-accent" />
                <div className="relative z-10 text-center">
                  <div className="premium-icon-box mx-auto mb-5">
                    <Icon className="w-6 h-6 text-teal group-hover:text-black transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal transition-colors">
                    {valor.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {valor.description}
                  </p>
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
