import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

import cabine1 from "@/assets/cabine-futurista-1.jpg";
import cabine2 from "@/assets/cabine-futurista-2.jpg";
import cabine3 from "@/assets/cabine-futurista-3.jpg";
import cabine4 from "@/assets/cabine-futurista-4.jpg";
import cabine5 from "@/assets/cabine-futurista-5.jpg";
import cabine6 from "@/assets/cabine-futurista-6.jpg";
import cabine7 from "@/assets/cabine-futurista-7.jpg";
import cabine8 from "@/assets/cabine-futurista-8.jpg";
import voceSabia6 from "@/assets/voce-sabia-6.jpg";
import voceSabia7 from "@/assets/voce-sabia-7.jpg";

const curiosidades = [
  { image: cabine1, title: "Cabine Primária Energizada", fact: "Cerca de 70% das falhas em cabines primárias têm origem em manutenção inadequada — inspeções termográficas anuais reduzem esse risco em até 90%." },
  { image: cabine6, title: "Vida Útil de Transformadores", fact: "Um transformador de potência bem mantido opera por mais de 30 anos. Sem manutenção preventiva, pode falhar em menos de 8." },
  { image: cabine4, title: "Relés de Proteção Modernos", fact: "Relés digitais multifunção atuam em menos de 30 milissegundos, evitando danos catastróficos a equipamentos de alta tensão." },
  { image: cabine7, title: "Indústria 4.0 e Energia", fact: "Plantas industriais com automação integrada e gestão inteligente de energia reduzem custos operacionais em até 35%." },
  { image: cabine2, title: "Termografia Salva Vidas", fact: "Laudos termográficos detectam pontos quentes até 6 meses antes de uma falha real, evitando paradas e acidentes graves." },
  { image: cabine3, title: "Seletividade de Proteções", fact: "Estudos de seletividade bem executados isolam apenas o circuito com defeito, mantendo até 95% da planta industrial em operação." },
  { image: cabine8, title: "Automação Residencial Premium", fact: "Casas com automação integrada economizam até 30% em energia e valorizam o imóvel em até 20% no mercado." },
  { image: cabine5, title: "Cabines Modernas e Seguras", fact: "Cabines primárias compactas com monitoramento remoto reduzem em 80% o tempo de resposta a emergências elétricas." },
  { image: voceSabia7, title: "Custo de uma Parada Industrial", fact: "Uma hora parada em uma indústria de médio porte pode custar até R$ 500 mil — manutenção preventiva paga-se sozinha." },
  { image: voceSabia6, title: "Conformidade NBR 14039", fact: "Cabines primárias devem ter manutenção formal anual com laudo técnico — exigência da concessionária e do Corpo de Bombeiros." },
];

const VoceSabia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % curiosidades.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + curiosidades.length) % curiosidades.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  return (
    <section id="voce-sabia" className="premium-section py-24 md:py-32">
      <div className="absolute inset-0 premium-glow-radial" />
      <div className="absolute inset-0 premium-mosaic" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="premium-eyebrow mb-8">
            <Lightbulb className="w-4 h-4" />
            Curiosidades
          </div>
          <h2 className="premium-title mb-2">
            Você <span className="premium-accent">Sabia?</span>
          </h2>
          <div className="premium-divider" />
        </div>

        {/* Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-lg premium-card">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-80">
                <img
                  src={curiosidades[currentIndex].image}
                  alt={curiosidades[currentIndex].title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 md:bg-gradient-to-l md:from-black/60 md:to-transparent" />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <span className="text-teal text-sm uppercase tracking-wider font-medium mb-2">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(curiosidades.length).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {curiosidades[currentIndex].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {curiosidades[currentIndex].fact}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-gray-950 border border-teal/30 rounded-full shadow-lg shadow-teal/20 flex items-center justify-center text-white hover:text-teal hover:bg-black hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-gray-950 border border-teal/30 rounded-full shadow-lg shadow-teal/20 flex items-center justify-center text-white hover:text-teal hover:bg-black hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {curiosidades.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? "bg-teal w-10" 
                    : "bg-white/20 w-4 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoceSabia;
