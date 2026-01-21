import { Button } from "@/components/ui/button";
import { ChevronDown, Sun, Car, Cpu } from "lucide-react";
import logoC2B from "@/assets/logo-c2b.png";

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById("valores");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceHighlights = [
    {
      id: "energia-solar",
      icon: Sun,
      title: "Energia Solar",
      description: "Sistemas fotovoltaicos de alta performance"
    },
    {
      id: "carregadores-ev",
      icon: Car,
      title: "Carregadores EV",
      description: "Infraestrutura para mobilidade elétrica"
    },
    {
      id: "automacao",
      icon: Cpu,
      title: "Automação",
      description: "Controle inteligente de sistemas"
    }
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-charcoal to-black"
    >
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Logo and Brand */}
          <div className="text-center mb-16">
            <img 
              src={logoC2B} 
              alt="C2B Logo" 
              className="h-24 md:h-32 mx-auto mb-8" 
            />
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4">
              Inteligência em <span className="font-semibold text-teal">Energia</span>
            </h1>
            <div className="w-16 h-[2px] bg-teal mx-auto my-8" />
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Engenharia elétrica de excelência para empresas que buscam 
              eficiência, inovação e sustentabilidade
            </p>
          </div>

          {/* Service Highlights - Now clickable */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {serviceHighlights.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className="text-center p-6 border border-white/10 rounded bg-white/[0.02] hover:bg-white/[0.06] hover:border-teal/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-teal mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-teal transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={scrollToNext}
              className="bg-teal hover:bg-teal/90 text-white font-medium text-base px-8 py-6 rounded"
            >
              Conheça Nossa Empresa
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-teal transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
