import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { trackEvent, trackCTA } from "@/lib/analytics";
import {
  Car,
  Zap,
  ShieldCheck,
  Gauge,
  Home,
  Building2,
  Briefcase,
  MapPin,
  Clock,
  Award,
  Cable,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import carregadorHero from "@/assets/carregador-hero.jpg";
import carregadorInstal from "@/assets/carregador-instalacao.jpg";

const brandsTop = [
  { name: "WALLBOX", desc: "Pulsar Plus · Commander" },
  { name: "ABB", desc: "Terra AC · Terra DC" },
  { name: "SCHNEIDER", desc: "EVlink Home & Pro" },
  { name: "WEG", desc: "WEMOB · linha nacional" },
  { name: "ENEL X", desc: "JuiceBox Pro" },
  { name: "EFACEC", desc: "HomeCharger Pro" },
];

const montadoras = [
  "BYD", "GWM", "VOLVO", "BMW", "VOLKSWAGEN", "TOYOTA", "GEELY",
];

type TipoLocal = "residencia" | "condominio" | "empresa";
type Marca = typeof montadoras[number] | "OUTRA";
type Potencia = "ate7" | "11-22" | "dc";
type Regiao = "capital" | "abc" | "litoral" | "interior";

const tipos: { id: TipoLocal; label: string; icon: any; desc: string }[] = [
  { id: "residencia", label: "Residência", icon: Home, desc: "Casa ou apartamento" },
  { id: "condominio", label: "Condomínio", icon: Building2, desc: "Vagas comuns ou individuais" },
  { id: "empresa", label: "Empresa / Frota", icon: Briefcase, desc: "Corporativo, frota ou cliente" },
];

const potencias: { id: Potencia; label: string; desc: string }[] = [
  { id: "ate7", label: "Até 7,4 kW (AC)", desc: "Monofásico residencial" },
  { id: "11-22", label: "11 a 22 kW (AC)", desc: "Trifásico — recarga rápida" },
  { id: "dc", label: "DC Fast Charger", desc: "Acima de 25 kW — comercial" },
];

const regioes: { id: Regiao; label: string }[] = [
  { id: "capital", label: "São Paulo Capital" },
  { id: "abc", label: "Grande ABC" },
  { id: "litoral", label: "Litoral" },
  { id: "interior", label: "Interior de SP" },
];

const CarregadoresEletricos = () => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState<TipoLocal | null>(null);
  const [marca, setMarca] = useState<Marca | null>(null);
  const [potencia, setPotencia] = useState<Potencia | null>(null);
  const [regiao, setRegiao] = useState<Regiao | null>(null);

  const tipoLabel = tipos.find((t) => t.id === tipo)?.label ?? "";
  const potLabel = potencias.find((p) => p.id === potencia)?.label ?? "";
  const regLabel = regioes.find((r) => r.id === regiao)?.label ?? "";

  const whatsappUrl = useMemo(() => {
    const msg =
      `Olá C2B! Vim pelo site — *Carregadores Elétricos*.\n\n` +
      `• Tipo de local: ${tipoLabel}\n` +
      `• Marca do veículo: ${marca ?? ""}\n` +
      `• Potência desejada: ${potLabel}\n` +
      `• Região: ${regLabel}\n\n` +
      `Gostaria de um orçamento para instalação do carregador.`;
    return `https://wa.me/551151961096?text=${encodeURIComponent(msg)}`;
  }, [tipoLabel, marca, potLabel, regLabel]);

  const canSend = tipo && marca && potencia && regiao;

  const handleSubmit = () => {
    if (!canSend) return;
    trackEvent("triagem_carregadores_submit", {
      tipo: tipoLabel, marca, potencia: potLabel, regiao: regLabel,
    });
    navigate("/orcamento-enviado", {
      state: {
        whatsappUrl,
        especialidade: `Carregadores EV — ${tipoLabel}`,
        regiao: regLabel,
        emergencia: "nao",
      },
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Carregadores para Veículos Elétricos | Instalação Premium SP — C2B"
        description="Instalação profissional de carregadores elétricos (wallbox) para BYD, GWM, Volvo, BMW, Volkswagen, Toyota e Geely em São Paulo, Grande ABC, Litoral e Interior. Projeto, adequação e garantia."
        path="/carregadores-eletricos"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Instalação de Carregadores para Veículos Elétricos",
          provider: { "@type": "Organization", name: "C2B Inteligência em Energia" },
          areaServed: "São Paulo, Grande ABC, Litoral e Interior de SP",
          description: "Projeto e instalação de wallbox AC e DC para residências, condomínios e empresas.",
        }}
      />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${carregadorHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
        <div className="absolute inset-0 premium-glow-radial opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="premium-eyebrow mb-6">
              <Car className="w-4 h-4" />
              Mobilidade Elétrica Premium
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
              Carregadores para <span className="font-semibold text-teal">Veículos Elétricos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              Da especificação à energização: projeto e instalação de wallboxes premium
              compatíveis com as principais montadoras do mercado. Atendimento técnico em São Paulo,
              Grande ABC, Litoral e Interior.
            </p>
            <Button
              onClick={() => { trackCTA("Solicitar orçamento", "carregador_hero"); document.getElementById("triagem-carregador")?.scrollIntoView({ behavior: "smooth" }); }}
              className="bg-teal hover:bg-teal/90 text-white font-medium text-base px-10 py-6 rounded-lg shadow-lg shadow-teal/30"
            >
              Solicitar orçamento agora
            </Button>
          </div>
        </div>
      </section>

      {/* BRANDS — MONTADORAS */}
      <section className="py-16 border-y border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-8">
            Referência em instalação para as principais montadoras
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {montadoras.map((b) => (
              <span
                key={b}
                className="text-xl md:text-2xl font-bold tracking-[0.15em] text-gray-400 hover:text-teal transition-colors duration-500"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="premium-section py-20 md:py-28">
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="premium-eyebrow mb-4">Por que a C2B</div>
            <h2 className="premium-title">
              Engenharia <span className="premium-accent">de verdade</span> por trás do seu carregador
            </h2>
            <div className="premium-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              { icon: ShieldCheck, t: "NR-10 + NBR 17019", d: "Adequação total do quadro, aterramento e DPS para a recarga segura." },
              { icon: Gauge, t: "Dimensionamento técnico", d: "Estudo de carga, demanda contratada e impacto na instalação existente." },
              { icon: Cable, t: "Infra dedicada", d: "Cabos, eletrodutos e proteções dimensionados para a corrente do EV." },
              { icon: Award, t: "Garantia + ART", d: "Recolhimento de ART, laudo de instalação e suporte pós-obra." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="premium-card p-6 group">
                <div className="w-12 h-12 rounded-lg bg-teal/10 border border-teal/30 flex items-center justify-center mb-4 group-hover:bg-teal transition-colors duration-500">
                  <Icon className="w-5 h-5 text-teal group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-white text-base font-semibold mb-2">{t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FABRICANTES DE CARREGADORES */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 premium-glow-radial opacity-40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="premium-eyebrow mb-4">Marcas Top do Mercado</div>
              <h2 className="premium-title !text-left mb-4">
                Trabalhamos com os melhores <span className="premium-accent">wallboxes</span>
              </h2>
              <div className="premium-divider !mx-0" />
              <p className="text-gray-400 leading-relaxed mb-8">
                Indicamos e instalamos equipamentos das principais fabricantes do mundo —
                Wallbox, ABB, Schneider, Enel X, WEG e Efacec — selecionando o modelo ideal
                para o seu veículo, sua instalação e seu uso.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {brandsTop.map((b) => (
                  <div
                    key={b.name}
                    className="p-4 rounded-lg border border-white/10 bg-white/[0.03] hover:border-teal/40 transition-all duration-500"
                  >
                    <p className="text-white font-semibold tracking-wider text-sm">{b.name}</p>
                    <p className="text-gray-500 text-xs mt-1">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal/30 to-transparent blur-2xl opacity-50" />
              <img
                src={carregadorInstal}
                alt="Instalação profissional de carregador elétrico"
                loading="lazy"
                width={1280}
                height={800}
                className="relative rounded-xl border border-teal/20 shadow-2xl shadow-teal/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="premium-section py-20 md:py-28">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="premium-eyebrow mb-4">Como funciona</div>
            <h2 className="premium-title">
              Do orçamento à <span className="premium-accent">energização</span>
            </h2>
            <div className="premium-divider" />
          </div>
          <div className="grid md:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              { n: "01", t: "Triagem técnica", d: "Você responde 4 perguntas e falamos pelo WhatsApp." },
              { n: "02", t: "Visita & projeto", d: "Avaliação do quadro, distância e definição do equipamento." },
              { n: "03", t: "Instalação", d: "Equipe certificada NR-10 com infraestrutura dedicada." },
              { n: "04", t: "Entrega + ART", d: "Energização, testes, laudo e ART recolhida." },
            ].map((s) => (
              <div key={s.n} className="premium-card p-6 relative">
                <span className="absolute top-4 right-4 text-4xl font-light text-teal/30">{s.n}</span>
                <CheckCircle2 className="w-5 h-5 text-teal mb-3" />
                <h3 className="text-white font-semibold mb-2">{s.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIAGEM EXCLUSIVA */}
      <section id="triagem-carregador" className="premium-section py-24 md:py-32">
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="premium-eyebrow mb-6">
              <MessageCircle className="w-4 h-4" />
              Orçamento via WhatsApp
            </div>
            <h2 className="premium-title mb-2">
              Vamos dimensionar o <span className="premium-accent">seu carregador</span>
            </h2>
            <div className="premium-divider" />
            <p className="text-lg text-gray-400 font-light">
              Responda 4 perguntas rápidas e fale com um especialista agora.
            </p>
          </div>

          <div className="max-w-4xl mx-auto premium-card p-6 md:p-10 space-y-10">
            {/* 1 - Tipo */}
            <div>
              <StepHeader n={1} title="Onde será a instalação?" />
              <div className="grid sm:grid-cols-3 gap-3">
                {tipos.map((t) => {
                  const Icon = t.icon;
                  const active = tipo === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => { setTipo(t.id); trackEvent("triagem_ev", { step: 1, value: t.label }); }}
                      className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                        active
                          ? "border-teal bg-teal/10 shadow-lg shadow-teal/20"
                          : "border-white/10 bg-black/40 hover:border-teal/40"
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${active ? "text-teal" : "text-gray-400"}`} />
                      <p className="text-white font-medium text-sm">{t.label}</p>
                      <p className="text-gray-500 text-xs mt-1">{t.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2 - Marca */}
            <div>
              <StepHeader n={2} title="Qual a marca do seu veículo?" />
              <div className="flex flex-wrap gap-2">
                {[...montadoras, "OUTRA"].map((m) => {
                  const active = marca === m;
                  return (
                    <button
                      key={m}
                      onClick={() => { setMarca(m as Marca); trackEvent("triagem_ev", { step: 2, value: m }); }}
                      className={`px-4 py-2 rounded-md border text-sm font-semibold tracking-wider transition-all duration-300 ${
                        active
                          ? "border-teal bg-teal/15 text-white shadow-md shadow-teal/20"
                          : "border-white/10 bg-black/40 text-gray-300 hover:border-teal/40"
                      }`}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3 - Potência */}
            <div>
              <StepHeader n={3} title="Potência desejada?" />
              <div className="grid sm:grid-cols-3 gap-3">
                {potencias.map((p) => {
                  const active = potencia === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => { setPotencia(p.id); trackEvent("triagem_ev", { step: 3, value: p.label }); }}
                      className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                        active
                          ? "border-teal bg-teal/10 shadow-lg shadow-teal/20"
                          : "border-white/10 bg-black/40 hover:border-teal/40"
                      }`}
                    >
                      <Zap className={`w-5 h-5 mb-2 ${active ? "text-teal" : "text-gray-400"}`} />
                      <p className="text-white font-medium text-sm">{p.label}</p>
                      <p className="text-gray-500 text-xs mt-1">{p.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4 - Região */}
            <div>
              <StepHeader n={4} title="Qual a região?" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {regioes.map((r) => {
                  const active = regiao === r.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => { setRegiao(r.id); trackEvent("triagem_ev", { step: 4, value: r.label }); }}
                      className={`p-4 rounded-lg border text-left flex items-center gap-2 transition-all duration-300 ${
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

            <div className="pt-4 border-t border-white/10">
              <Button
                onClick={handleSubmit}
                disabled={!canSend}
                className="w-full bg-teal hover:bg-teal/90 text-white font-medium text-base py-6 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-teal/30"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {canSend ? "Solicitar orçamento via WhatsApp" : "Responda as 4 perguntas acima"}
              </Button>
              <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1.5">
                <Clock className="w-3 h-3" /> Atendimento em até 1h em horário comercial
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const StepHeader = ({ n, title }: { n: number; title: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="w-8 h-8 rounded-full bg-teal/15 border border-teal/40 text-teal text-sm font-semibold flex items-center justify-center">
      {n}
    </span>
    <h3 className="text-white text-lg md:text-xl font-semibold">{title}</h3>
  </div>
);

export default CarregadoresEletricos;