import { useEffect, useState, useRef } from "react";
import { Zap, Target, Shield, Lightbulb } from "lucide-react";

const valores = [
  {
    icon: Zap,
    title: "Inovação",
    description: "Pioneiros em energia solar, mobilidade elétrica e automação para um futuro sustentável",
  },
  {
    icon: Target,
    title: "Precisão",
    description: "Projetos executados com excelência técnica e atenção aos mínimos detalhes",
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Compromisso com a segurança e qualidade em todas as instalações",
  },
  {
    icon: Lightbulb,
    title: "Sustentabilidade",
    description: "Energia limpa e renovável para reduzir sua pegada de carbono e custos",
  },
];

const Valores = () => {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setInView(rect.top < window.innerHeight * 0.75);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="valores"
      ref={sectionRef}
      className="relative py-24 bg-gradient-dark overflow-hidden"
    >
      {/* Parallax Background Element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80')",
          backgroundSize: "cover",
          transform: `translateY(${(scrollY - 800) * 0.3}px)`,
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nossos Valores
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-grey-light max-w-2xl mx-auto">
            Princípios que guiam nossa excelência em engenharia elétrica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <div
                key={index}
                className={`group bg-grey-dark/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 
                  hover:border-gold hover:shadow-gold transition-all duration-500
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center 
                    group-hover:bg-gold/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-gold transition-colors">
                  {valor.title}
                </h3>
                <p className="text-grey-light leading-relaxed">
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
