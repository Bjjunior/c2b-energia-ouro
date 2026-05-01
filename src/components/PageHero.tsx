import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeroProps {
  title: string;
  highlight: string;
  subtitle: string;
  backgroundImage: string;
}

const PageHero = ({ title, highlight, subtitle, backgroundImage }: PageHeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="premium-section relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div
        className="absolute inset-0 scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
      <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
      <div className="absolute inset-0 premium-mosaic pointer-events-none" />

      {/* Back button - top left, separated from title block */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-24 left-6 md:left-10 z-20 inline-flex items-center gap-2 text-gray-400 hover:text-teal transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar ao início
      </button>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="premium-eyebrow mb-6 mx-auto">Soluções C2B</div>
        <h1 className="premium-title mb-2">
          {title} <span className="premium-accent">{highlight}</span>
        </h1>
        <div className="premium-divider" />
        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Button
          onClick={() => {
            const el = document.getElementById("servicos-page");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-10 bg-teal hover:bg-teal/90 text-white font-medium text-base px-10 py-6 rounded-lg shadow-lg shadow-teal/40"
        >
          Conheça nossos serviços
        </Button>
      </div>
    </section>
  );
};

export default PageHero;
