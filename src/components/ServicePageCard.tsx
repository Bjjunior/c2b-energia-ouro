import { useState } from "react";
import { ChevronRight, X } from "lucide-react";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServicePageCard = ({ service }: { service: ServiceItem }) => {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="premium-card w-full text-left overflow-hidden group cursor-pointer"
      >
        <div className="premium-corner-accent" />
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="premium-icon-box w-10 h-10 mb-2">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base font-semibold text-white">{service.title}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-3">
            {service.description}
          </p>
          <span className="inline-flex items-center gap-1 text-teal text-sm font-medium">
            Ver detalhes <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div
            className="premium-card !bg-black rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl shadow-teal/30 animate-scale-in border border-teal/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 md:h-72">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-teal/80 border border-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-teal flex items-center justify-center shadow-lg shadow-teal/50">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((f, i) => (
                  <span key={i} className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full text-teal bg-teal/10 border border-teal/30 font-medium">
                    {f}
                  </span>
                ))}
              </div>
              <a
                href="#contato-page"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-lg shadow-teal/40"
              >
                Agende sua visita técnica
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicePageCard;
