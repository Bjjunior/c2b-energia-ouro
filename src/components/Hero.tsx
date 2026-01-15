import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logoC2B from "@/assets/logo-c2b.png";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("valores");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <img 
            src={logoC2B} 
            alt="C2B Logo" 
            className="h-40 md:h-48 mx-auto mb-8 drop-shadow-2xl" 
          />
          <div className="h-1 w-32 bg-gold mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-light mb-8 text-white">
            Inteligência em Energia
          </h2>
          <p className="text-xl md:text-2xl text-grey-light max-w-3xl mx-auto mb-6 leading-relaxed">
            Especialistas em <span className="text-gold font-semibold">energia solar</span>, 
            <span className="text-gold font-semibold"> carregadores para veículos elétricos</span> e 
            <span className="text-gold font-semibold"> automação inteligente</span>
          </p>
          <p className="text-lg text-grey-light/80 max-w-2xl mx-auto mb-12">
            Soluções completas em engenharia elétrica para residências, empresas e indústrias
          </p>
          <Button
            onClick={scrollToNext}
            className="bg-gold hover:bg-gold/90 text-black font-semibold text-lg px-8 py-6 shadow-gold"
          >
            Conheça Nossos Valores
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-bounce"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;
