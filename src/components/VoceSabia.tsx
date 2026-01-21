import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

import voceSabia1 from "@/assets/voce-sabia-1.jpg";
import voceSabia2 from "@/assets/voce-sabia-2.jpg";
import voceSabia3 from "@/assets/voce-sabia-3.jpg";
import voceSabia4 from "@/assets/voce-sabia-4.jpg";
import voceSabia5 from "@/assets/voce-sabia-5.jpg";
import voceSabia6 from "@/assets/voce-sabia-6.jpg";
import voceSabia7 from "@/assets/voce-sabia-7.jpg";
import voceSabia8 from "@/assets/voce-sabia-8.jpg";
import voceSabia9 from "@/assets/voce-sabia-9.jpg";
import voceSabia10 from "@/assets/voce-sabia-10.jpg";

const curiosidades = [
  {
    image: voceSabia1,
    title: "Eficiência Solar",
    fact: "Painéis solares modernos podem gerar energia mesmo em dias nublados, aproveitando até 25% da luz difusa.",
  },
  {
    image: voceSabia2,
    title: "Crescimento EV",
    fact: "O mercado de veículos elétricos no Brasil cresceu 91% em 2023, com mais de 90.000 unidades vendidas.",
  },
  {
    image: voceSabia3,
    title: "Automação Residencial",
    fact: "Casas inteligentes podem reduzir o consumo de energia em até 30% através de automação eficiente.",
  },
  {
    image: voceSabia4,
    title: "Potencial Solar Brasileiro",
    fact: "O Brasil recebe energia solar suficiente para gerar 30 vezes mais energia do que todo o consumo nacional.",
  },
  {
    image: voceSabia5,
    title: "Redução de Carbono",
    fact: "Um sistema solar residencial de 4kWp evita a emissão de aproximadamente 2 toneladas de CO2 por ano.",
  },
  {
    image: voceSabia6,
    title: "Iluminação LED",
    fact: "Lâmpadas LED consomem até 80% menos energia que incandescentes e duram 25 vezes mais.",
  },
  {
    image: voceSabia7,
    title: "Gestão de Energia",
    fact: "Indústrias que implementam gestão inteligente de energia economizam em média 20% nos custos operacionais.",
  },
  {
    image: voceSabia8,
    title: "Economia com EV",
    fact: "Abastecer um veículo elétrico custa até 70% menos que um veículo a combustão para a mesma distância.",
  },
  {
    image: voceSabia9,
    title: "Durabilidade Solar",
    fact: "Painéis solares têm vida útil de mais de 25 anos, mantendo mais de 80% da eficiência original.",
  },
  {
    image: voceSabia10,
    title: "Futuro Renovável",
    fact: "Até 2030, estima-se que 50% da energia global será proveniente de fontes renováveis.",
  },
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
    <section id="voce-sabia" className="py-24 md:py-32 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" />
            Curiosidades
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6">
            Você <span className="font-semibold">Sabia?</span>
          </h2>
          <div className="w-12 h-[2px] bg-teal mx-auto" />
        </div>

        {/* Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={curiosidades[currentIndex].image}
                  alt={curiosidades[currentIndex].title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:bg-gradient-to-l md:from-white/20 md:to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <span className="text-teal text-sm uppercase tracking-wider font-medium mb-2">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(curiosidades.length).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">
                  {curiosidades[currentIndex].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {curiosidades[currentIndex].fact}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-charcoal hover:text-teal hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-charcoal hover:text-teal hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {curiosidades.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-teal w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
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
