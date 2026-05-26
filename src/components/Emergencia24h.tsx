import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Clock, ShieldCheck, Zap } from "lucide-react";

const Emergencia24h = () => {
  const whatsappUrl =
    "https://wa.me/551151961096?text=" +
    encodeURIComponent("🚨 EMERGÊNCIA — Preciso de atendimento técnico imediato.");

  const features = [
    { icon: Clock, label: "Atendimento 24h", desc: "Plantão ininterrupto, todos os dias do ano." },
    { icon: Zap, label: "Resposta Rápida", desc: "Equipe a caminho em até 90 minutos na Grande SP." },
    { icon: ShieldCheck, label: "Engenharia Sênior", desc: "Engenheiros responsáveis em todas as ocorrências." },
  ];

  return (
    <section id="emergencia" className="premium-section relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
      <div className="absolute inset-0 premium-mosaic pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="premium-eyebrow mb-6">
              <AlertTriangle className="w-4 h-4" />
              Emergência 24/7
            </div>
            <h2 className="premium-title mb-2 text-left">
              Pane elétrica? <br />
              <span className="premium-accent">Atendemos agora.</span>
            </h2>
            <div className="premium-divider !mx-0" />
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
              Manutenção emergencial em cabines primárias, subestações, painéis e instalações
              industriais. Plantão técnico 24 horas com engenheiros e equipe especializada,
              prontos para restabelecer sua operação com segurança e rastreabilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-teal hover:bg-teal/90 text-white font-medium text-base px-8 py-6 rounded-lg w-full sm:w-auto shadow-lg shadow-teal/40">
                  <Phone className="w-5 h-5 mr-2" />
                  Acionar Plantão Agora
                </Button>
              </a>
              <a href="/manutencao-emergencial">
                <Button
                  variant="outline"
                  className="border-teal/40 bg-transparent text-white hover:bg-teal/10 hover:text-teal font-medium text-base px-8 py-6 rounded-lg w-full sm:w-auto"
                >
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="premium-card p-6 flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-teal/10 border border-teal/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors duration-500">
                    <Icon className="w-5 h-5 text-teal group-hover:text-black transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{f.label}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergencia24h;