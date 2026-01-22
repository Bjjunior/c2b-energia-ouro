import { useState, useEffect } from "react";
import { X, MapPin, Calendar, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const projetos = [
  {
    id: 1,
    title: "Usina Solar Industrial",
    category: "Energia Solar",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    description: "Instalação de sistema fotovoltaico de 500kWp em indústria metalúrgica, gerando economia de R$ 80.000/mês.",
    highlights: ["500 kWp de potência instalada", "Economia de 95% na conta de energia", "Retorno do investimento em 3 anos", "Redução de 180 toneladas de CO2/ano"]
  },
  {
    id: 2,
    title: "Estacionamento EV Corporativo",
    category: "Carregadores EV",
    location: "Campinas, SP",
    year: "2024",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    description: "Implantação de 20 pontos de carregamento para veículos elétricos em sede corporativa multinacional.",
    highlights: ["20 carregadores de 22kW", "Sistema de gestão inteligente", "Integração com energia solar", "App para reserva de vagas"]
  },
  {
    id: 3,
    title: "Automação Predial Completa",
    category: "Automação",
    location: "Rio de Janeiro, RJ",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "Automação completa de edifício comercial com 15 andares, incluindo iluminação, climatização e segurança.",
    highlights: ["150 pontos de controle", "Redução de 35% no consumo", "Controle centralizado", "Integração com IA preditiva"]
  },
  {
    id: 4,
    title: "Usina Solar Fazenda Agrícola",
    category: "Energia Solar",
    location: "Ribeirão Preto, SP",
    year: "2024",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    description: "Sistema fotovoltaico de 1.2MWp para propriedade rural, com sistema de irrigação automatizado.",
    highlights: ["1.2 MWp instalados", "Irrigação 100% solar", "Monitoramento remoto", "Zero emissões"]
  },
  {
    id: 5,
    title: "Retrofit Industrial",
    category: "Eficiência Energética",
    location: "Guarulhos, SP",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    description: "Modernização completa do parque elétrico de indústria alimentícia, incluindo subestação.",
    highlights: ["Nova subestação 13.8kV", "Quadros inteligentes", "Economia de 40%", "Adequação NR-10"]
  },
  {
    id: 6,
    title: "Condomínio Smart Building",
    category: "Automação",
    location: "Alphaville, SP",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description: "Automação residencial de condomínio de alto padrão com 120 unidades e áreas comuns.",
    highlights: ["120 apartamentos", "Portaria autônoma", "Iluminação LED", "App condominial"]
  },
  {
    id: 7,
    title: "Frota EV Shopping Center",
    category: "Carregadores EV",
    location: "Curitiba, PR",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    description: "Instalação de 50 pontos de carregamento rápido em shopping center com gestão integrada.",
    highlights: ["50 carregadores", "Carga rápida 150kW", "Pagamento no app", "Energia 100% verde"]
  },
  {
    id: 8,
    title: "Hospital Solar + Storage",
    category: "Energia Solar",
    location: "Belo Horizonte, MG",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
    description: "Sistema híbrido solar com baterias para hospital, garantindo autonomia em emergências.",
    highlights: ["800 kWp solar", "500 kWh baterias", "Backup 4 horas", "Gerador integrado"]
  },
  {
    id: 9,
    title: "Centro de Distribuição LED",
    category: "Iluminação",
    location: "Jundiaí, SP",
    year: "2024",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    description: "Projeto luminotécnico completo para centro de distribuição de 50.000m².",
    highlights: ["50.000m² iluminados", "3.000 luminárias LED", "Economia de 65%", "Sensores de presença"]
  },
  {
    id: 10,
    title: "Indústria 4.0 - Automação Total",
    category: "Automação",
    location: "Sorocaba, SP",
    year: "2024",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    description: "Digitalização completa de linha de produção com integração SCADA e analytics.",
    highlights: ["500 sensores IoT", "Dashboard em tempo real", "Manutenção preditiva", "OEE +25%"]
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projetos.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Cases de Sucesso
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Nosso <span className="font-semibold">Portfólio</span>
          </h2>
          <div className="w-12 h-[2px] bg-teal mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projetos realizados com excelência e resultados comprovados
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-teal transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-teal transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {projetos.map((projeto) => (
                <div
                  key={projeto.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div
                    className="group relative bg-black/30 rounded-lg overflow-hidden cursor-pointer h-full"
                    onClick={() => setSelectedProject(projeto.id)}
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={projeto.image}
                        alt={projeto.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block text-teal text-xs uppercase tracking-wider font-medium mb-2">
                        {projeto.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal transition-colors">
                        {projeto.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {projeto.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {projeto.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-teal w-6" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {projetos
                .filter((p) => p.id === selectedProject)
                .map((projeto) => (
                  <div key={projeto.id}>
                    {/* Image */}
                    <div className="relative h-64 md:h-80">
                      <img
                        src={projeto.image}
                        alt={projeto.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-6 left-6">
                        <span className="inline-block bg-teal text-white text-xs uppercase tracking-wider font-medium px-3 py-1 rounded mb-2">
                          {projeto.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                          {projeto.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-6 mb-6 text-gray-500 text-sm">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-teal" />
                          {projeto.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-teal" />
                          {projeto.year}
                        </span>
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {projeto.description}
                      </p>

                      <h4 className="text-sm uppercase tracking-wider text-teal font-medium mb-4">
                        Destaques do Projeto
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {projeto.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-gray-600"
                          >
                            <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
