import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Flame,
  Sparkles,
  Activity,
  FileCheck,
  Cpu,
  Cable,
  ShieldCheck,
  Zap,
  ArrowRight,
  Crown,
} from "lucide-react";
import cabine1 from "@/assets/cabine-futurista-1.jpg";
import cabine2 from "@/assets/cabine-futurista-2.jpg";
import cabine3 from "@/assets/cabine-futurista-3.jpg";
import cabine4 from "@/assets/cabine-futurista-4.jpg";
import mosaico1 from "@/assets/mosaico-teal-1.jpg";
import mosaico2 from "@/assets/mosaico-teal-2.jpg";

const slides = [cabine1, mosaico1, cabine3, mosaico2, cabine2, cabine4];

const especialidades = [
  {
    icon: Sparkles,
    title: "Limpeza Técnica Especializada",
    description: "Higienização criteriosa de barramentos, isoladores e compartimentos com produtos dielétricos certificados.",
  },
  {
    icon: Flame,
    title: "Laudos Termográficos",
    description: "Inspeção termográfica de precisão para identificar pontos quentes antes que se tornem falhas críticas.",
  },
  {
    icon: Activity,
    title: "Testes de Seletividade",
    description: "Coordenação e seletividade de proteções garantindo desligamentos cirúrgicos e operação contínua.",
  },
  {
    icon: FileCheck,
    title: "Regularização junto à Concessionária",
    description: "Projetos, ART, vistorias e adequação completa às normas NBR 14039 e exigências da distribuidora.",
  },
  {
    icon: Cpu,
    title: "Relés de Proteção",
    description: "Parametrização, comissionamento e modernização de relés digitais multifunção de última geração.",
  },
  {
    icon: Zap,
    title: "Transformadores",
    description: "Manutenção, ensaios elétricos, análise de óleo isolante e substituição de trafos de potência.",
  },
  {
    icon: Cable,
    title: "Substituição de Cabeamento MT",
    description: "Troca de cabos de média tensão, conexões, muflas e terminações com técnicos certificados NR-10 SEP.",
  },
  {
    icon: ShieldCheck,
    title: "Manutenção Nível Engenharia",
    description: "Plano preventivo, preditivo e corretivo executado com rigor de engenharia consultiva premium.",
  },
];

const CabinesPrimarias = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contato");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cabines-primarias"
      className="relative py-24 md:py-32 overflow-hidden bg-black transition-colors duration-500"
    >
      {/* Background carousel */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Premium dark overlay with teal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--teal)/0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--teal)/0.18),transparent_55%)]" />

      {/* Geometric mosaic overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300cccc' stroke-width='1'%3E%3Cpath d='M40 0L80 23v34L40 80 0 57V23z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Top & bottom fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-teal/40 rounded-full bg-teal/10 backdrop-blur-sm">
            <Crown className="w-4 h-4 text-teal" />
            <span className="text-teal text-xs font-semibold tracking-[0.25em] uppercase">
              Nossa Especialidade Suprema
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.05]">
            Cabines{" "}
            <span
              className="font-semibold text-teal"
              style={{
                textShadow:
                  "0 0 20px hsl(var(--teal) / 0.6), 0 0 40px hsl(var(--teal) / 0.3)",
              }}
            >
              Primárias
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-teal to-transparent mx-auto my-8" />

          <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            Engenharia elétrica de média e alta tensão executada no
            <span className="text-teal font-medium"> mais alto padrão do mercado</span>.
            Da limpeza técnica à modernização completa, dominamos cada detalhe
            que mantém sua operação energizada com segurança absoluta.
          </p>
        </div>

        {/* Premium stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20 bg-teal/20 border border-teal/30 rounded-lg overflow-hidden backdrop-blur-md">
          {[
            { n: "100%", l: "Conformidade NBR 14039" },
            { n: "24/7", l: "Atendimento Emergencial" },
            { n: "+15", l: "Anos de Experiência" },
            { n: "NR-10", l: "Equipe Certificada SEP" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-black/80 p-6 md:p-8 text-center hover:bg-teal/10 transition-colors duration-500"
            >
              <div className="text-3xl md:text-4xl font-light text-teal mb-2">{s.n}</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Especialidades grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {especialidades.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative p-6 md:p-7 rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md hover:border-teal/60 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--teal)/0.5)] transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal/0 via-teal/0 to-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 border border-teal/30 flex items-center justify-center mb-5 group-hover:bg-teal group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-6 h-6 text-teal group-hover:text-black transition-colors duration-500" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-300 mb-8 font-light italic">
            "Confiabilidade absoluta para quem não pode parar."
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-teal hover:bg-teal/90 text-white font-medium text-base px-10 py-7 rounded-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-teal/30 group"
          >
            Solicite uma Avaliação Premium
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "bg-teal w-10" : "bg-white/20 w-4 hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabinesPrimarias;