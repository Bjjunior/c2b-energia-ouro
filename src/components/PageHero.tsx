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
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </button>
        <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
          {title} <span className="font-semibold text-teal">{highlight}</span>
        </h1>
        <div className="w-16 h-[2px] bg-teal mx-auto my-6" />
        <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Button
          onClick={() => {
            const el = document.getElementById("servicos-page");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-8 bg-teal hover:bg-teal/90 text-white font-medium text-base px-10 py-6 rounded-lg"
        >
          Conheça nossos serviços
        </Button>
      </div>
    </section>
  );
};

export default PageHero;
