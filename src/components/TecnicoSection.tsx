import { useState, useEffect } from "react";
import { Zap, FileText, BarChart3, AlertTriangle, Sparkles } from "lucide-react";

const technicalItems = [
  {
    id: "alta-tensao", icon: Zap, title: "Alta Tensão", subtitle: "Subestações e Linhas",
    description: "Projetos e instalações em alta tensão com segurança e conformidade normativa",
    stats: ["13.8kV a 230kV", "Subestações", "Proteção"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
  },
  {
    id: "projetos", icon: FileText, title: "Projetos Elétricos", subtitle: "Engenharia de Precisão",
    description: "Desenvolvimento de projetos completos conforme ABNT e NR-10",
    stats: ["Memorial Técnico", "ART/RRT", "As-Built"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    id: "qualidade", icon: BarChart3, title: "Análise de Qualidade", subtitle: "Monitoramento Avançado",
    description: "Medição e correção de harmônicos, fator de potência e distorções",
    stats: ["THD < 5%", "FP > 0.92", "ANEEL"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
  },
  {
    id: "seguranca", icon: AlertTriangle, title: "Segurança Elétrica", subtitle: "NR-10 e NR-12",
    description: "Adequação às normas regulamentadoras e laudos técnicos",
    stats: ["Laudos SPDA", "Aterramento", "NR-10"],
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
  },
];

const TecnicoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technicalItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="premium-section py-24 md:py-32">
      <div className="absolute inset-0 premium-glow-radial" />
      <div className="absolute inset-0 premium-mosaic" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="premium-eyebrow mb-8">
            <Sparkles className="w-4 h-4" />
            Expertise Técnica
          </div>
          <h2 className="premium-title mb-2">
            Excelência em <span className="premium-accent">Engenharia Elétrica</span>
          </h2>
          <div className="premium-divider" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image Display */}
            <div className="relative h-[400px] md:h-[450px] rounded-xl overflow-hidden border border-teal/30 shadow-2xl shadow-teal/20">
              {technicalItems.map((item, index) => (
                <div key={item.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-8 h-8 text-teal" />
                      <span className="text-teal text-sm uppercase tracking-wider font-medium">{item.subtitle}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 max-w-md">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.stats.map((stat, idx) => (
                        <span key={idx} className="px-3 py-1 bg-teal/20 border border-teal/30 rounded text-teal text-xs font-medium">{stat}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="absolute top-6 right-6 flex gap-2">
                {technicalItems.map((_, index) => (
                  <button key={index} onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-teal w-8" : "bg-white/30 w-4 hover:bg-white/50"}`} />
                ))}
              </div>
            </div>

            {/* Right - Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {technicalItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === currentIndex;
                return (
                  <button key={item.id} onClick={() => setCurrentIndex(index)}
                    className={`text-left p-5 rounded-lg border backdrop-blur-md transition-all duration-300 group ${
                      isActive
                        ? "bg-teal/10 border-teal/60 shadow-lg shadow-teal/30"
                        : "bg-white/[0.03] border-white/10 hover:border-teal/40 hover:bg-white/[0.06]"
                    }`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive ? "bg-teal" : "bg-teal/10 border border-teal/30 group-hover:bg-teal/40"
                    }`}>
                      <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-white" : "text-teal group-hover:text-white"}`} />
                    </div>
                    <h4 className={`font-semibold mb-1 transition-colors ${isActive ? "text-teal" : "text-white group-hover:text-teal"}`}>{item.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-2">{item.subtitle}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecnicoSection;
