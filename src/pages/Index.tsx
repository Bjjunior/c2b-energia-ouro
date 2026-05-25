import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CabinesPrimarias from "@/components/CabinesPrimarias";
import Emergencia24h from "@/components/Emergencia24h";
import ContatoTriagem from "@/components/ContatoTriagem";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
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
