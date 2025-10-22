import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-gold">C2B</span>
              <span className="text-white"> | </span>
              <span className="text-white text-lg">Inteligência em Energia</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-white hover:text-gold transition-colors duration-300"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("valores")}
              className="text-white hover:text-gold transition-colors duration-300"
            >
              Valores
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-white hover:text-gold transition-colors duration-300"
            >
              Serviços
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-gold hover:bg-gold/90 text-black font-semibold shadow-gold"
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
