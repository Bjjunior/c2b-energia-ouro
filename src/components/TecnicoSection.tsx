import { useState, useEffect } from "react";
import { Zap, FileText, BarChart3, AlertTriangle } from "lucide-react";

const technicalItems = [
  {
    id: "alta-tensao",
    icon: Zap,
    title: "Alta Tensão",
    subtitle: "Subestações e Linhas",
    description: "Projetos e instalações em alta tensão com segurança e conformidade normativa",
    stats: ["13.8kV a 230kV", "Subestações", "Proteção"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
  },
  {
    id: "projetos",
    icon: FileText,
    title: "Projetos Elétricos",
    subtitle: "Engenharia de Precisão",
    description: "Desenvolvimento de projetos completos conforme ABNT e NR-10",
    stats: ["Memorial Técnico", "ART/RRT", "As-Built"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    id: "qualidade",
    icon: BarChart3,
    title: "Análise de Qualidade",
    subtitle: "Monitoramento Avançado",
    description: "Medição e correção de harmônicos, fator de potência e distorções",
    stats: ["THD < 5%", "FP > 0.92", "ANEEL"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
  },
  {
    id: "seguranca",
    icon: AlertTriangle,
    title: "Segurança Elétrica",
    subtitle: "NR-10 e NR-12",
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
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M20 20h20v20H20V20zm0-20h20v20H20V0zM0 20h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Orange/Yellow accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-400 uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Expertise Técnica
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Excelência em <span className="font-semibold text-amber-400">Engenharia Elétrica</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 mx-auto" />
        </div>

        {/* Main Content - Image + Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image Display */}
            <div className="relative h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl">
              {technicalItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-8 h-8 text-amber-400" />
                      <span className="text-orange-400 text-sm uppercase tracking-wider font-medium">
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 max-w-md">
                      {item.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.stats.map((stat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-orange-300 text-xs font-medium"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Progress indicators */}
              <div className="absolute top-6 right-6 flex gap-2">
                {technicalItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-amber-400 w-8"
                        : "bg-white/30 w-4 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {technicalItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === currentIndex;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`text-left p-5 rounded-lg border transition-all duration-300 group ${
                      isActive
                        ? "bg-gradient-to-br from-orange-500/20 to-amber-500/10 border-orange-500/50 shadow-lg shadow-orange-500/10"
                        : "bg-white/5 border-white/10 hover:border-orange-500/30 hover:bg-white/10"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-orange-500 to-amber-500"
                        : "bg-gray-700 group-hover:bg-gradient-to-br group-hover:from-orange-500/50 group-hover:to-amber-500/50"
                    }`}>
                      <Icon className={`w-5 h-5 transition-colors ${
                        isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                      }`} />
                    </div>
                    
                    <h4 className={`font-semibold mb-1 transition-colors ${
                      isActive ? "text-amber-400" : "text-white group-hover:text-amber-400"
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {item.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Projetos Executados" },
            { value: "15+", label: "Anos de Experiência" },
            { value: "100%", label: "Conformidade NR-10" },
            { value: "24/7", label: "Suporte Técnico" },
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-1">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TecnicoSection;
