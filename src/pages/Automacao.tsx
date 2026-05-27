import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ServiceCarousel from "@/components/ServiceCarousel";
import ServicePageCard from "@/components/ServicePageCard";
import AgendeCTA from "@/components/AgendeCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Lightbulb,
  Tv,
  ShieldCheck,
  Wind,
  Blinds,
  Smartphone,
  Server,
  Sparkles,
  Mic,
  Music,
  Zap,
  Award,
} from "lucide-react";

import automacaoHero from "@/assets/automacao-hero.jpg";
import automacaoIluminacao from "@/assets/automacao-iluminacao.jpg";
import automacaoMultimidia from "@/assets/automacao-multimidia.jpg";
import automacaoSeguranca from "@/assets/automacao-seguranca.jpg";
import automacaoClimatizacao from "@/assets/automacao-climatizacao.jpg";
import automacaoCortinas from "@/assets/automacao-cortinas.jpg";
import automacaoApp from "@/assets/automacao-app.jpg";
import automacaoRack from "@/assets/automacao-rack.jpg";
import automacaoCenarios from "@/assets/automacao-cenarios.jpg";

const carouselItems = [
  {
    image: automacaoHero,
    title: "Living Inteligente",
    description:
      "Cenários integrados de iluminação, áudio, vídeo e clima — tudo orquestrado por um único toque, com requinte arquitetônico.",
  },
  {
    image: automacaoMultimidia,
    title: "Home Theater Premium",
    description:
      "Salas de cinema com projeção motorizada, blackout automático e acústica calibrada por engenheiros especialistas.",
  },
  {
    image: automacaoSeguranca,
    title: "Segurança 360°",
    description:
      "CFTV de alta resolução, fechaduras biométricas e perímetro inteligente integrados a centrais com IA.",
  },
  {
    image: automacaoIluminacao,
    title: "Cenários de Iluminação",
    description:
      "Controle DALI/KNX com ajustes circadianos, dimerização precisa e arquitetura visual luminotécnica de luxo.",
  },
];

const services = [
  {
    icon: Lightbulb,
    title: "Iluminação Cênica & Circadiana",
    description:
      "Projetos luminotécnicos com protocolos KNX, DALI e DMX. Cenários personalizados para cada ambiente, ajuste circadiano que acompanha a luz natural e dimerização imperceptível para conforto absoluto.",
    features: ["KNX", "DALI", "Cenários", "Circadiano", "Dimerização HD"],
    image: automacaoIluminacao,
  },
  {
    icon: Tv,
    title: "Multimídia & Home Theater",
    description:
      "Salas de cinema dedicadas, multiroom audio com áudio distribuído de alta fidelidade, projeção 4K/8K motorizada, telas Lumina Series e calibração acústica profissional.",
    features: ["8K", "Dolby Atmos", "Multiroom", "Acústica", "Calibração"],
    image: automacaoMultimidia,
  },
  {
    icon: ShieldCheck,
    title: "Segurança Inteligente",
    description:
      "CFTV IP em 4K com analítica por IA, fechaduras biométricas, controle de acesso, alarme integrado e perímetro virtual com notificações em tempo real.",
    features: ["CFTV IA", "Biometria", "Perímetro", "Acesso", "Notificações"],
    image: automacaoSeguranca,
  },
  {
    icon: Wind,
    title: "Climatização Inteligente",
    description:
      "Integração de VRF, piso radiante e ventilação mecânica com sensores de presença, qualidade do ar e umidade. Conforto térmico autônomo com economia energética real.",
    features: ["VRF", "Sensores IAQ", "Zonas", "Programação", "Economia"],
    image: automacaoClimatizacao,
  },
  {
    icon: Blinds,
    title: "Cortinas e Persianas Motorizadas",
    description:
      "Acionamento Somfy, Lutron e equivalentes premium para cortinas, persianas, blackout e brises. Sincronizadas a horários, sensores solares e cenários da casa.",
    features: ["Somfy", "Lutron", "Solar Sync", "Silencioso", "RF/IP"],
    image: automacaoCortinas,
  },
  {
    icon: Smartphone,
    title: "Controle por App e Voz",
    description:
      "Interface unificada via iPad, smartphones e painéis touch arquitetônicos. Integração total com Alexa, Google Assistant e Apple HomeKit para controle por voz natural.",
    features: ["iOS/Android", "Alexa", "Google", "HomeKit", "Touch panels"],
    image: automacaoApp,
  },
  {
    icon: Server,
    title: "Infraestrutura & Rack Premium",
    description:
      "Cabeamento estruturado categoria 6A/Fibra, racks organizados com gestão térmica, no-break dedicado, redundância de rede mesh Wi-Fi 6E e VLANs segregadas.",
    features: ["CAT6A", "Fibra", "Wi-Fi 6E", "No-break", "VLANs"],
    image: automacaoRack,
  },
  {
    icon: Sparkles,
    title: "Cenários Personalizados",
    description:
      "Programação fina de cenas exclusivas: 'Bom dia', 'Cinema', 'Jantar', 'Boa noite', 'Romance' — cada uma orquestrando luz, som, clima, cortinas e segurança simultaneamente.",
    features: ["Cenas", "Programação", "Eventos", "Triggers", "Astronômico"],
    image: automacaoCenarios,
  },
  {
    icon: Music,
    title: "Áudio Distribuído High-End",
    description:
      "Sistemas multiroom com amplificação dedicada, caixas embutidas premium (B&W, KEF, Sonance) e streaming hi-res por ambiente, controlado individualmente.",
    features: ["Hi-Res", "B&W", "Multiroom", "Streaming", "Embutido"],
    image: automacaoMultimidia,
  },
];

const Automacao = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Automação Residencial High-End em São Paulo | C2B"
        description="Automação residencial e predial premium: iluminação cênica, climatização, cortinas, multimídia e segurança integrada. Soluções high-end para arquitetos e usuários finais."
        path="/automacao"
      />
      <Navbar />
      <PageHero
        title="Automação"
        highlight="Residencial High-End"
        subtitle="Engenharia de luxo aplicada à sua casa. Iluminação cênica, multimídia, segurança e clima orquestrados em uma única experiência sensorial — projetada em parceria com arquitetos e designers de interiores."
        backgroundImage={automacaoHero}
      />

      {/* Manifesto Section */}
      <section className="premium-section py-24">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="premium-eyebrow mb-6">
                <Award className="w-3 h-3" /> Manifesto C2B Smart Living
              </div>
              <h2 className="premium-title mb-6">
                A casa que <span className="premium-accent">antecipa</span> seus desejos.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Automação residencial deixou de ser luxo opcional para se tornar a assinatura
                de projetos arquitetônicos de alto padrão. Na C2B, integramos as melhores
                marcas globais — KNX, Lutron, Crestron, Control4, Bang & Olufsen, Somfy — com
                engenharia elétrica de excelência.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Trabalhamos lado a lado com arquitetos e designers desde a fase de projeto,
                garantindo que cada cabo, sensor e dispositivo desapareça no acabamento e
                permaneça invisível ao olho — visível apenas pela experiência.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="premium-card p-4 text-center">
                  <div className="text-2xl font-light text-teal mb-1">KNX</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Certified</div>
                </div>
                <div className="premium-card p-4 text-center">
                  <div className="text-2xl font-light text-teal mb-1">10+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Anos</div>
                </div>
                <div className="premium-card p-4 text-center">
                  <div className="text-2xl font-light text-teal mb-1">24/7</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Suporte</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-teal/20 blur-3xl rounded-full" />
              <img
                src={automacaoApp}
                alt="Controle de automação residencial"
                className="relative rounded-xl border border-teal/30 shadow-2xl shadow-teal/30"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="premium-section py-20">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-10">
            <div className="premium-eyebrow mb-4">Experiências</div>
            <h2 className="premium-title">
              Ambientes <span className="premium-accent">Imersivos</span>
            </h2>
            <div className="premium-divider" />
          </div>
          <ServiceCarousel items={carouselItems} />
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos-page" className="premium-section py-20">
        <div className="absolute inset-0 premium-mosaic pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="premium-eyebrow mb-4">Especialidades</div>
            <h2 className="premium-title">
              Sistemas de <span className="premium-accent">Smart Living</span>
            </h2>
            <div className="premium-divider" />
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Cada sistema é projetado em parceria com arquitetos para integrar
              tecnologia e design sem comprometer a estética do ambiente.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => (
              <ServicePageCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Para Arquitetos */}
      <section className="premium-section py-24">
        <div className="absolute inset-0 premium-glow-radial pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="premium-eyebrow mb-6">
              <Zap className="w-3 h-3" /> Parceria com Arquitetos & Designers
            </div>
            <h2 className="premium-title mb-6">
              Seu projeto, <span className="premium-accent">amplificado</span>.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12 text-lg">
              Atendemos escritórios de arquitetura e design de interiores em todo o
              processo: do anteprojeto à entrega chave-na-mão. Compatibilizamos plantas,
              especificamos infraestrutura invisível e treinamos sua equipe.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Mic, title: "Consultoria Técnica", desc: "Reuniões dedicadas e visitas de obra para alinhamento total." },
                { icon: Sparkles, title: "Especificação Premium", desc: "Memorial descritivo e BIM com as melhores marcas globais." },
                { icon: Award, title: "Programa de Indicação", desc: "Comissionamento e parceria comercial para escritórios." },
              ].map((item) => (
                <div key={item.title} className="premium-card p-6 text-left group">
                  <div className="premium-corner-accent" />
                  <div className="premium-icon-box mb-4">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AgendeCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Automacao;