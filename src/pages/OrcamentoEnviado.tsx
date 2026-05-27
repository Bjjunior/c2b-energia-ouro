import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { trackEvent, trackConversion, trackWhatsApp } from "@/lib/analytics";

const REDIRECT_SECONDS = 4;

const OrcamentoEnviado = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = (location.state || {}) as {
    whatsappUrl?: string;
    especialidade?: string;
    regiao?: string;
    emergencia?: string;
  };

  const [seconds, setSeconds] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    if (!state.whatsappUrl) {
      navigate("/", { replace: true });
      return;
    }

    trackEvent("generate_lead", {
      especialidade: state.especialidade,
      regiao: state.regiao,
      emergencia: state.emergencia,
      value: state.emergencia === "sim" ? 500 : 250,
      currency: "BRL",
    });
    trackEvent("orcamento_enviado", {
      especialidade: state.especialidade,
      regiao: state.regiao,
      emergencia: state.emergencia,
    });
    // TODO: substituir AW-CONVERSION_ID/LABEL pelo conversion ID do Google Ads quando disponível
    // trackConversion("AW-XXXXXXX/abcDEFghIJ", { value: 250, currency: "BRL" });

    const tick = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    const redirect = setTimeout(() => {
      window.location.href = state.whatsappUrl!;
    }, REDIRECT_SECONDS * 1000);

    return () => {
      clearInterval(tick);
      clearTimeout(redirect);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SEO
        title="Orçamento enviado | C2B Engenharia"
        description="Sua solicitação foi registrada. Redirecionando ao WhatsApp para falar com um especialista C2B."
        path="/orcamento-enviado"
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 premium-glow-radial" />
        <div className="absolute inset-0 premium-mosaic opacity-50" />

        <div className="relative z-10 max-w-2xl w-full premium-card p-10 md:p-14 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal/15 border border-teal/40 flex items-center justify-center shadow-lg shadow-teal/30">
            <CheckCircle2 className="w-10 h-10 text-teal" />
          </div>

          <div className="premium-eyebrow mb-6 inline-flex">Solicitação registrada</div>

          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Obrigado! Recebemos sua <span className="premium-accent">solicitação de orçamento</span>.
          </h1>

          <div className="premium-divider mx-auto" />

          <p className="text-gray-400 text-base md:text-lg font-light mb-8">
            Você será redirecionado ao WhatsApp em{" "}
            <span className="text-teal font-medium">{seconds}s</span> para falar diretamente com um especialista C2B.
          </p>

          {(state.especialidade || state.regiao) && (
            <div className="grid sm:grid-cols-3 gap-3 mb-8 text-left">
              {state.especialidade && (
                <Info label="Especialidade" value={state.especialidade} />
              )}
              {state.regiao && <Info label="Região" value={state.regiao} />}
              {state.emergencia && (
                <Info label="Emergência" value={state.emergencia === "sim" ? "Sim" : "Não"} />
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={state.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("orcamento_enviado", { especialidade: state.especialidade })}
            >
              <Button className="bg-teal hover:bg-teal/90 text-white font-medium px-6 py-6 rounded-lg shadow-lg shadow-teal/30 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Abrir WhatsApp agora
              </Button>
            </a>
            <Link to="/">
              <Button
                variant="outline"
                className="border-white/15 bg-transparent text-gray-200 hover:bg-white/5 hover:text-white px-6 py-6 rounded-lg w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
    <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">{label}</p>
    <p className="text-white text-sm font-medium">{value}</p>
  </div>
);

export default OrcamentoEnviado;