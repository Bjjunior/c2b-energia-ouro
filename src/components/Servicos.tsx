import { useEffect, useState, useRef } from "react";
import { Battery, Gauge, LineChart, Wrench } from "lucide-react";

const servicos = [
  {
    icon: Battery,
    title: "Eficiência Energética",
    description: "Análise e otimização do consumo de energia para redução de custos operacionais",
  },
  {
    icon: Gauge,
    title: "Gestão de Demanda",
    description: "Monitoramento e controle inteligente de demanda elétrica em tempo real",
  },
  {
    icon: LineChart,
    title: "Análise de Qualidade",
    description: "Avaliação detalhada da qualidade de energia e correção de problemas",
  },
  {
    icon: Wrench,
    title: "Projetos Elétricos",
    description: "Desenvolvimento de projetos completos de instalações elétricas industriais",
  },
];

const Servicos = () => {
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
      id="servicos"
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${(scrollY - 1600) * 0.4}px)`,
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nossos Serviços
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-grey-light max-w-2xl mx-auto">
            Soluções completas em engenharia elétrica e gestão de energia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicos.map((servico, index) => {
            const Icon = servico.icon;
            return (
              <div
                key={index}
                className={`group relative bg-grey-dark/30 backdrop-blur-sm p-10 rounded-lg 
                  border border-gold/20 hover:border-gold hover:shadow-gold
                  transition-all duration-500 overflow-hidden
                  ${inView ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center 
                      group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-10 h-10 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {servico.title}
                  </h3>
                  <p className="text-grey-light text-lg leading-relaxed">
                    {servico.description}
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

export default Servicos;
