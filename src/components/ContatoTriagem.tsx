import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import {
  MessageCircle,
  Zap,
  AlertTriangle,
  Car,
  FileCheck,
  Wrench,
  MapPin,
  Phone,
  Instagram,
} from "lucide-react";

type Especialidade = "cabines" | "emergencia" | "carregadores" | "laudos" | "manutencao";
type Regiao = "capital" | "abc" | "litoral" | "interior";
type Emergencia = "sim" | "nao";

const especialidades: { id: Especialidade; label: string; icon: React.ElementType; desc: string }[] = [
  { id: "cabines", label: "Cabines Primárias", icon: Zap, desc: "Subestações & média tensão" },
  { id: "emergencia", label: "Emergência", icon: AlertTriangle, desc: "Pane elétrica agora" },
  { id: "carregadores", label: "Carregadores EV", icon: Car, desc: "Wallbox e instalação premium" },
  { id: "laudos", label: "Laudos & Projetos", icon: FileCheck, desc: "Termografia, NR-10, ART" },
  { id: "manutencao", label: "Manutenção", icon: Wrench, desc: "Preventiva e preditiva" },
];

const regioes: { id: Regiao; label: string }[] = [
  { id: "capital", label: "São Paulo Capital" },
  { id: "abc", label: "Grande ABC" },
  { id: "litoral", label: "Litoral" },
  { id: "interior", label: "Interior de São Paulo" },
];

const ContatoTriagem = () => {
  const navigate = useNavigate();
  const [especialidade, setEspecialidade] = useState<Especialidade | null>(null);
  const [regiao, setRegiao] = useState<Regiao | null>(null);
  const [emergencia, setEmergencia] = useState<Emergencia | null>(null);

  const espLabel = especialidades.find((e) => e.id === especialidade)?.label ?? "";
  const regLabel = regioes.find((r) => r.id === regiao)?.label ?? "";

  const whatsappUrl = useMemo(() => {
    const msg =
      `Olá C2B! Vim pelo site.\n\n` +
      `• Especialidade: ${espLabel}\n` +
      `• Região: ${regLabel}\n` +
      `• Emergência: ${emergencia === "sim" ? "SIM 🚨" : "Não"}\n\n` +
      `Gostaria de mais informações.`;
    return `https://wa.me/551151961096?text=${encodeURIComponent(msg)}`;
  }, [espLabel, regLabel, emergencia]);

  const canSend = especialidade && regiao && emergencia;

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!canSend) return;
    trackEvent("triagem_submit", {
      especialidade: espLabel,
      regiao: regLabel,
      emergencia,
    });
    navigate("/orcamento-enviado", {
      state: {
        whatsappUrl,
        especialidade: espLabel,
        regiao: regLabel,
        emergencia,
      },
    });
  };

  return (
    <section id="contato" className="premium-section py-24 md:py-32">
      <div className="absolute inset-0 premium-glow-radial" />
      <div className="absolute inset-0 premium-mosaic" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="premium-eyebrow mb-8">
            <MessageCircle className="w-4 h-4" />
            Fale Conosco
          </div>
          <h2 className="premium-title mb-2">
            Atendimento direto pelo <span className="premium-accent">WhatsApp</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-lg text-gray-400 font-light">
            Responda 3 perguntas rápidas e fale com o especialista certo para sua demanda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto premium-card p-6 md:p-10 space-y-10">
          {/* Step 1 */}
          <div>
            <Step number={1} title="Qual especialidade podemos te atender?" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {especialidades.map((e) => {
                const Icon = e.icon;
                const active = especialidade === e.id;
                return (
                  <button
                    key={e.id}
                    onClick={() => { setEspecialidade(e.id); trackEvent("triagem_step", { step: 1, value: e.label }); }}
                    className={`group p-4 rounded-lg border text-left transition-all duration-300 ${
                      active
                        ? "border-teal bg-teal/10 shadow-lg shadow-teal/20"
                        : "border-white/10 bg-black/40 hover:border-teal/40"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-3 ${active ? "text-teal" : "text-gray-400 group-hover:text-teal"}`} />
                    <p className="text-white font-medium text-sm leading-tight">{e.label}</p>
                    <p className="text-gray-500 text-xs mt-1">{e.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <Step number={2} title="Qual a região?" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {regioes.map((r) => {
                const active = regiao === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => { setRegiao(r.id); trackEvent("triagem_step", { step: 2, value: r.label }); }}
                    className={`p-4 rounded-lg border text-left transition-all duration-300 flex items-center gap-2 ${
                      active
                        ? "border-teal bg-teal/10 shadow-lg shadow-teal/20"
                        : "border-white/10 bg-black/40 hover:border-teal/40"
                    }`}
                  >
                    <MapPin className={`w-4 h-4 ${active ? "text-teal" : "text-gray-400"}`} />
                    <span className="text-white text-sm font-medium">{r.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <Step number={3} title="É uma emergência?" />
            <div className="grid grid-cols-2 gap-3 max-w-md">
              {(["sim", "nao"] as Emergencia[]).map((opt) => {
                const active = emergencia === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => { setEmergencia(opt); trackEvent("triagem_step", { step: 3, value: opt }); }}
                    className={`p-4 rounded-lg border font-medium transition-all duration-300 ${
                      active
                        ? opt === "sim"
                          ? "border-teal bg-teal/15 text-white shadow-lg shadow-teal/30"
                          : "border-teal bg-teal/10 text-white shadow-lg shadow-teal/20"
                        : "border-white/10 bg-black/40 text-gray-300 hover:border-teal/40"
                    }`}
                  >
                    {opt === "sim" ? "🚨 Sim, é urgente" : "Não, é planejado"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Send */}
          <div className="pt-4 border-t border-white/10">
            <Button
              onClick={handleSubmit}
              disabled={!canSend}
              className="w-full bg-teal hover:bg-teal/90 text-white font-medium text-base py-6 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-teal/30"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {canSend ? "Solicitar orçamento via WhatsApp" : "Responda as 3 perguntas acima"}
            </Button>
          </div>
        </div>

        {/* Contact info row */}
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-3 gap-4">
          <InfoCard
            icon={MapPin}
            label="Endereço"
            value="Tv. das Sensitivas, 59 — Vila Helena, Santo André/SP"
          />
          <InfoCard
            icon={Phone}
            label="Telefone"
            value="+55 (11) 5196-1096"
            href="tel:+551151961096"
          />
          <InfoCard
            icon={Instagram}
            label="Instagram"
            value="@c2bengenharia"
            href="https://instagram.com/c2bengenharia"
          />
        </div>
      </div>
    </section>
  );
};

const Step = ({ number, title }: { number: number; title: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="w-8 h-8 rounded-full bg-teal/15 border border-teal/40 text-teal text-sm font-semibold flex items-center justify-center">
      {number}
    </span>
    <h3 className="text-white text-lg md:text-xl font-semibold">{title}</h3>
  </div>
);

const InfoCard = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="premium-card p-5 flex items-center gap-4 h-full group">
      <div className="w-11 h-11 bg-teal/10 border border-teal/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors duration-500">
        <Icon className="w-5 h-5 text-teal group-hover:text-black transition-colors duration-500" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-white text-sm font-medium truncate">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

export default ContatoTriagem;