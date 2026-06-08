import { Car, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { trackCTA } from "@/lib/analytics";
import carregadorHero from "@/assets/carregador-hero.jpg";

const brands = ["BYD", "GWM", "VOLVO", "BMW", "VOLKSWAGEN", "TOYOTA", "GEELY"];

const CarregadoresHighlight = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    trackCTA("Saiba mais carregadores", "landing_carregadores");
    navigate("/carregadores-eletricos");
  };

  return (
    <section id="carregadores-ev" className="premium-section py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-teal/40 to-transparent blur-2xl opacity-50" />
            <img
              src={carregadorHero}
              alt="Carregador elétrico premium instalado em residência com BMW iX e Volvo"
              loading="lazy"
              width={1600}
              height={900}
              className="relative rounded-xl border border-teal/20 shadow-2xl shadow-teal/10"
            />
          </div>

          {/* Content */}
          <div>
            <div className="premium-eyebrow mb-6">
              <Car className="w-4 h-4" />
              Mobilidade Elétrica
            </div>
            <h2 className="premium-title mb-3">
              Carregadores <span className="premium-accent">Veiculares</span> de alta performance
            </h2>
            <div className="premium-divider !mx-0" />
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Projeto, dimensionamento e instalação de wallboxes premium em residências, condomínios e empresas.
              Compatibilidade com as principais marcas do mercado, com adequação elétrica completa e segurança certificada.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: Zap, label: "Wallbox 7,4 a 22 kW" },
                { icon: ShieldCheck, label: "Adequação NBR/NR-10" },
                { icon: Car, label: "Multi-marca premium" },
                { icon: ShieldCheck, label: "Garantia e suporte" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-black/40">
                  <Icon className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="text-gray-200 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Brands strip */}
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-3">
              Compatível com as principais montadoras
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {brands.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 text-xs font-semibold tracking-wider text-gray-200 bg-white/[0.04] border border-white/10 rounded-md hover:border-teal/40 transition"
                >
                  {b}
                </span>
              ))}
            </div>

            <Button
              onClick={handleCTA}
              className="bg-teal hover:bg-teal/90 text-white font-medium text-base px-8 py-6 rounded-lg shadow-lg shadow-teal/30 group"
            >
              Conhecer soluções de recarga
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarregadoresHighlight;