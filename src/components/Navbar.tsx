import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoC2B from "@/assets/logo-c2b.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navLinks = [
    { id: "inicio", label: "Início" },
    { id: "emergencia", label: "Emergência 24/7" },
  ];

  const especialidades = [
    { path: "/cabines-primarias", label: "Cabines Primárias" },
    { path: "/carregadores-eletricos", label: "Carregadores Elétricos" },
    { path: "/manutencao-emergencial", label: "Manutenção Emergencial" },
    { path: "/laudos-e-projetos", label: "Laudos & Projetos" },
  ];

  const segmentos = [
    { path: "/para-empresa", label: "Para Empresas" },
    { path: "/para-condominio", label: "Para Condomínios" },
  ];

  const allSolucoes = [...especialidades, ...segmentos];
  const isSolucoesActive = allSolucoes.some((s) => s.path === location.pathname);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-teal/20 shadow-lg shadow-teal/5"
          : "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center space-x-3">
            <img src={logoC2B} alt="C2B Logo" className="h-10" />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-white">C2B</span>
              <span className="text-sm ml-2 text-teal">Inteligência em Energia</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-300 hover:text-teal transition-colors duration-300 hover:scale-105"
              >
                {link.label}
              </button>
            ))}

            {/* Soluções dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`inline-flex items-center gap-1 text-sm font-medium outline-none transition-colors duration-300 ${
                  isSolucoesActive ? "text-teal" : "text-gray-300 hover:text-teal"
                }`}
              >
                Soluções
                <ChevronDown className="w-4 h-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-72 bg-black/95 backdrop-blur-xl border border-teal/20 shadow-2xl shadow-teal/10 p-2"
              >
                <p className="px-2 pt-1 pb-2 text-[10px] uppercase tracking-wider text-gray-500">
                  Especialidades
                </p>
                {especialidades.map((s) => (
                  <DropdownMenuItem
                    key={s.path}
                    onClick={() => navigate(s.path)}
                    className={`cursor-pointer rounded-md px-3 py-2 text-sm focus:bg-teal/10 ${
                      location.pathname === s.path ? "text-teal" : "text-gray-200"
                    }`}
                  >
                    {s.label}
                  </DropdownMenuItem>
                ))}
                <div className="my-2 border-t border-white/10" />
                <p className="px-2 pb-2 text-[10px] uppercase tracking-wider text-gray-500">
                  Segmentos
                </p>
                {segmentos.map((s) => (
                  <DropdownMenuItem
                    key={s.path}
                    onClick={() => navigate(s.path)}
                    className={`cursor-pointer rounded-md px-3 py-2 text-sm focus:bg-teal/10 ${
                      location.pathname === s.path ? "text-teal" : "text-gray-200"
                    }`}
                  >
                    {s.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-teal hover:bg-teal/90 text-white font-medium text-sm px-6 rounded-lg shadow-lg shadow-teal/30"
            >
              Orçamento
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white"
            >
              {mobileMenuOpen ? <X size={24} className="stroke-[2.5]" /> : <Menu size={24} className="stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-teal/20 shadow-2xl shadow-teal/10 animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-300 hover:text-teal font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-white/10 pt-3">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Especialidades</p>
                {especialidades.map((s) => (
                  <button
                    key={s.path}
                    onClick={() => { navigate(s.path); setMobileMenuOpen(false); }}
                    className={`block w-full text-left font-medium py-2 ${
                      location.pathname === s.path
                        ? 'text-teal'
                        : 'text-gray-300 hover:text-teal'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Segmentos</p>
                {segmentos.map((s) => (
                  <button
                    key={s.path}
                    onClick={() => { navigate(s.path); setMobileMenuOpen(false); }}
                    className={`block w-full text-left font-medium py-2 ${
                      location.pathname === s.path
                        ? 'text-teal'
                        : 'text-gray-300 hover:text-teal'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left text-teal font-medium py-2"
              >
                Orçamento
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
