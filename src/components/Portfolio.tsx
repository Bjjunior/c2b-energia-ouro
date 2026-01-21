import { useState } from "react";
import { ArrowRight, X, MapPin, Calendar, CheckCircle } from "lucide-react";
import servicoSolar from "@/assets/servico-solar.jpg";
import servicoEv from "@/assets/servico-ev.jpg";
import servicoAutomacao from "@/assets/servico-automacao.jpg";

const projetos = [
  {
    id: 1,
    title: "Usina Solar Industrial",
    category: "Energia Solar",
    location: "São Paulo, SP",
    year: "2024",
    image: servicoSolar,
    description: "Instalação de sistema fotovoltaico de 500kWp em indústria metalúrgica, gerando economia de R$ 80.000/mês.",
    highlights: [
      "500 kWp de potência instalada",
      "Economia de 95% na conta de energia",
      "Retorno do investimento em 3 anos",
      "Redução de 180 toneladas de CO2/ano"
    ]
  },
  {
    id: 2,
    title: "Estacionamento EV Corporativo",
    category: "Carregadores EV",
    location: "Campinas, SP",
    year: "2024",
    image: servicoEv,
    description: "Implantação de 20 pontos de carregamento para veículos elétricos em sede corporativa multinacional.",
    highlights: [
      "20 carregadores de 22kW",
      "Sistema de gestão inteligente",
      "Integração com energia solar",
      "App para reserva de vagas"
    ]
  },
  {
    id: 3,
    title: "Automação Predial Completa",
    category: "Automação",
    location: "Rio de Janeiro, RJ",
    year: "2023",
    image: servicoAutomacao,
    description: "Automação completa de edifício comercial com 15 andares, incluindo iluminação, climatização e segurança.",
    highlights: [
      "150 pontos de controle",
      "Redução de 35% no consumo",
      "Controle centralizado",
      "Integração com IA preditiva"
    ]
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-charcoal">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="group relative bg-black/30 rounded-lg overflow-hidden cursor-pointer"
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
                <div className="flex items-center gap-2 mt-4 text-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Ver detalhes</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
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
