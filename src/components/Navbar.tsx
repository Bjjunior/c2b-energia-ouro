import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoC2B from "@/assets/logo-c2b.png";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const solucoes = [
    { path: "/para-empresa", label: "Para sua Empresa" },
    { path: "/para-condominio", label: "Para seu Condomínio" },
    { path: "/para-voce", label: "Para Você" },
  ];

  const navLinks = [
    { id: "inicio", label: "Início" },
    { id: "valores", label: "Valores" },
    { id: "servicos", label: "Serviços" },
    { id: "voce-sabia", label: "Você Sabia?" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-950 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center space-x-3">
            <img src={logoC2B} alt="C2B Logo" className="h-10" />
            <div className="hidden sm:block">
              <span className={`text-lg font-semibold ${scrolled ? 'text-charcoal dark:text-white' : 'text-white'}`}>
                C2B
              </span>
              <span className={`text-sm ml-2 ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                Inteligência em Energia
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:scale-105 ${
                  scrolled
                    ? 'text-gray-600 dark:text-gray-300 hover:text-teal'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Soluções Dropdown */}
            <div className="relative" onMouseEnter={() => setSolucoesOpen(true)} onMouseLeave={() => setSolucoesOpen(false)}>
              <button
                className={`text-sm font-medium transition-colors duration-300 hover:scale-105 flex items-center gap-1 ${
                  scrolled
                    ? 'text-gray-600 dark:text-gray-300 hover:text-teal'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Soluções <ChevronDown className="w-3 h-3" />
              </button>
              {solucoesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white dark:bg-gray-900 rounded-lg shadow-elevated border border-gray-100 dark:border-white/10 py-2 animate-fade-in">
                  {solucoes.map((s) => (
                    <button
                      key={s.path}
                      onClick={() => { navigate(s.path); setSolucoesOpen(false); }}
                      className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-teal hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <ThemeToggle />

            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-teal hover:bg-teal/90 text-white font-medium text-sm px-6 rounded"
            >
              Contato
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${scrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={24} className="stroke-[2.5]" /> : <Menu size={24} className="stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/10 shadow-card animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-teal font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-gray-100 dark:border-white/10 pt-3">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Soluções</p>
                {solucoes.map((s) => (
                  <button
                    key={s.path}
                    onClick={() => { navigate(s.path); setMobileMenuOpen(false); }}
                    className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-teal font-medium py-2"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left text-teal font-medium py-2"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
