import { useEffect, useState, useRef } from "react";
import { Battery, Gauge, LineChart, Wrench, RefreshCw, Settings, Building2, Sun, Car, Cpu } from "lucide-react";

// Serviços em destaque (especialidades principais)
const servicosDestaque = [
  {
    icon: Sun,
    title: "Energia Solar",
    description: "Projetos completos de sistemas fotovoltaicos para residências, empresas e indústrias. Reduza até 95% da sua conta de energia.",
  },
  {
    icon: Car,
    title: "Carregadores Elétricos",
    description: "Instalação de estações de carregamento para veículos elétricos. Soluções residenciais, comerciais e corporativas.",
  },
  {
    icon: Cpu,
    title: "Automação",
    description: "Sistemas inteligentes de automação residencial, predial e industrial. Controle total de iluminação, climatização e energia.",
  },
];

// Demais serviços
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
  {
    icon: RefreshCw,
    title: "Retrofit",
    description: "Modernização e atualização de sistemas elétricos existentes para maior eficiência",
  },
  {
    icon: Settings,
    title: "Manutenção",
    description: "Manutenção preventiva e corretiva de instalações elétricas industriais",
  },
  {
    icon: Building2,
    title: "Novas Instalações",
    description: "Instalações elétricas residenciais, prediais e industriais em baixa, média e alta tensão",
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
            Especialistas em energia solar, mobilidade elétrica e automação inteligente
          </p>
        </div>

        {/* Serviços em Destaque */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-semibold text-gold text-center mb-10 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            ⚡ Nossas Especialidades
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicosDestaque.map((servico, index) => {
              const Icon = servico.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-sm p-10 rounded-2xl 
                    border-2 border-gold shadow-gold
                    transition-all duration-500 overflow-hidden hover:scale-105
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-gold opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center 
                        group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300 mx-auto">
                        <Icon className="w-12 h-12 text-gold" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gold text-center">
                      {servico.title}
                    </h3>
                    <p className="text-white text-lg leading-relaxed text-center">
                      {servico.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Outros Serviços */}
        <div>
          <h3 className={`text-xl md:text-2xl font-semibold text-grey-light text-center mb-10 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Também oferecemos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {servicos.map((servico, index) => {
              const Icon = servico.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-grey-dark/30 backdrop-blur-sm p-6 rounded-lg 
                    border border-gold/20 hover:border-gold hover:shadow-gold
                    transition-all duration-500 overflow-hidden
                    ${inView ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center 
                        group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {servico.title}
                    </h3>
                    <p className="text-grey-light text-sm leading-relaxed">
                      {servico.description}
                    </p>
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
