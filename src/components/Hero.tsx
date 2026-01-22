import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sun, Car, Cpu } from "lucide-react";
import logoC2B from "@/assets/logo-c2b.png";

// Background images for hero
const heroBackgrounds = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80", // Solar panels
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80", // EV charging
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", // Industrial automation
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80", // Power lines sunset
];

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("valores");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceHighlights = [
    {
      id: "energia-solar",
      icon: Sun,
      title: "Energia Solar",
      description: "Sistemas fotovoltaicos de alta performance"
    },
    {
      id: "carregadores-ev",
      icon: Car,
      title: "Carregadores EV",
      description: "Infraestrutura para mobilidade elétrica"
    },
    {
      id: "automacao",
      icon: Cpu,
      title: "Automação",
      description: "Controle inteligente de sistemas"
    }
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with Transition */}
      {heroBackgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentBgIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Logo and Brand with fade-in animation */}
          <div className="text-center mb-16 animate-fade-in">
            <img 
              src={logoC2B} 
              alt="C2B Logo" 
              className="h-24 md:h-32 mx-auto mb-8 animate-scale-in" 
            />
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4">
              Inteligência em <span className="font-semibold text-teal animate-pulse">Energia</span>
            </h1>
            <div className="w-16 h-[2px] bg-teal mx-auto my-8" />
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Engenharia elétrica de excelência para empresas que buscam 
              eficiência, inovação e sustentabilidade
            </p>
          </div>

          {/* Service Highlights with staggered animation */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className="text-center p-6 border border-white/20 rounded-lg bg-white/[0.05] backdrop-blur-sm hover:bg-white/[0.12] hover:border-teal/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Icon className="w-10 h-10 text-teal mx-auto mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500" />
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-teal transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{service.description}</p>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={scrollToNext}
              className="bg-teal hover:bg-teal/90 text-white font-medium text-base px-10 py-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-teal/20"
            >
              Conheça Nossa Empresa
            </Button>
          </div>
        </div>
      </div>

      {/* Background indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroBackgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBgIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentBgIndex 
                ? "bg-teal w-6" 
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator with bounce animation */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-teal transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
