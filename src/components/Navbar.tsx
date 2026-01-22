import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoC2B from "@/assets/logo-c2b.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "inicio", label: "Início" },
    { id: "valores", label: "Valores" },
    { id: "servicos", label: "Serviços" },
    { id: "portfolio", label: "Portfólio" },
    { id: "voce-sabia", label: "Você Sabia?" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md border-b border-gray-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoC2B} alt="C2B Logo" className="h-10" />
            <div className="hidden sm:block">
              <span className={`text-lg font-semibold ${scrolled ? 'text-charcoal' : 'text-white'}`}>
                C2B
              </span>
              <span className={`text-sm ml-2 ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                Inteligência em Energia
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.slice(0, -1).map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-teal' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-teal hover:bg-teal/90 text-white font-medium text-sm px-6 rounded"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={24} className="stroke-[2.5]" /> : <Menu size={24} className="stroke-[2.5]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-card animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-600 hover:text-teal font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
