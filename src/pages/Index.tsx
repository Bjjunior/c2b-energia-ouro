import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CabinesPrimarias from "@/components/CabinesPrimarias";
import Emergencia24h from "@/components/Emergencia24h";
import ContatoTriagem from "@/components/ContatoTriagem";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="C2B Engenharia | Cabines Primárias, Manutenção 24h e Automação em SP"
        description="Engenharia elétrica premium em São Paulo: cabines primárias, manutenção emergencial 24/7, automação residencial high-end e laudos NR-10. Atendimento Grande SP, ABC, Litoral e Interior."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "C2B Inteligência em Energia",
          url: "https://c2b-energia-ouro.lovable.app",
          inLanguage: "pt-BR",
          potentialAction: {
            "@type": "ContactAction",
            target: "https://wa.me/551151961096",
          },
        }}
      />
      <Navbar />
      <Hero />
      <CabinesPrimarias />
      <Emergencia24h />
      <ContatoTriagem />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
