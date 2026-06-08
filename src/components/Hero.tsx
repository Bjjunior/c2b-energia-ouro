import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Zap, Car, AlertTriangle, Settings, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoC2B from "@/assets/logo-c2b.png";
import { useParallax } from "@/hooks/useParallax";
import { trackCTA } from "@/lib/analytics";
import cabine1 from "@/assets/cabine-futurista-1.jpg";
import cabine2 from "@/assets/cabine-futurista-2.jpg";
import cabine3 from "@/assets/cabine-futurista-3.jpg";
import cabine4 from "@/assets/cabine-futurista-4.jpg";
import cabine5 from "@/assets/cabine-futurista-5.jpg";
import cabine6 from "@/assets/cabine-futurista-6.jpg";
import cabine7 from "@/assets/cabine-futurista-7.jpg";
import cabine8 from "@/assets/cabine-futurista-8.jpg";
import mosaico1 from "@/assets/mosaico-teal-1.jpg";
import mosaico2 from "@/assets/mosaico-teal-2.jpg";
import mosaico3 from "@/assets/mosaico-teal-3.jpg";

// Background images for hero — futuristic cabines + premium teal mosaics
const heroBackgrounds = [
  cabine1,
  mosaico1,
  cabine5,
  cabine3,
  mosaico2,
  cabine6,
  cabine2,
  mosaico3,
  cabine7,
  cabine4,
  cabine8,
];

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const parallaxRef = useParallax<HTMLDivElement>(0.25);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    trackCTA("Conheça Nossa Empresa", "hero");
    const element = document.getElementById("valores");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("cabines-primarias")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceHighlights: { id: string; icon: any; title: string; description: string; route?: string; scrollTo?: string }[] = [
    { id: "cabines-primarias", icon: Zap, title: "Cabines Primárias", description: "Subestações e média tensão", route: "/cabines-primarias" },
    { id: "carregadores-ev", icon: Car, title: "Carregadores EV", description: "Wallbox premium para sua garagem", route: "/carregadores-eletricos" },
    { id: "emergencia-24h", icon: AlertTriangle, title: "Emergência 24/7", description: "Plantão técnico imediato", scrollTo: "emergencia" },
    { id: "manutencao", icon: Settings, title: "Manutenção", description: "Preventiva, corretiva e preditiva", route: "/manutencao-emergencial" },
    { id: "laudos-projetos", icon: FileText, title: "Laudos & Projetos", description: "Termografia, NR-10 e ART", route: "/laudos-e-projetos" },
  ];

  const goToService = (s: { id: string; route?: string; scrollTo?: string }) => {
    trackCTA(s.id, "hero_highlight");
    if (s.route) { navigate(s.route); return; }
    document.getElementById(s.scrollTo || s.id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with Parallax + Transition */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform" style={{ height: "120%" }}>
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
      </div>
      
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => goToService(service)}
                  className="text-center p-4 md:p-5 border border-white/20 rounded-lg bg-white/[0.05] backdrop-blur-sm hover:bg-white/[0.12] hover:border-teal/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-teal mx-auto mb-3 group-hover:scale-110 transition-all duration-500" />
                  <h3 className="text-sm md:text-base font-medium text-white mb-1 group-hover:text-teal transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-xs hidden md:block group-hover:text-gray-300 transition-colors">{service.description}</p>
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
