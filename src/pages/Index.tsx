import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CabinesPrimarias from "@/components/CabinesPrimarias";
import Valores from "@/components/Valores";
import TecnicoSection from "@/components/TecnicoSection";
import Servicos from "@/components/Servicos";
import VoceSabia from "@/components/VoceSabia";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-black dark:bg-gray-950 transition-colors duration-500">
      <Navbar />
      <Hero />
      <CabinesPrimarias />
      <Valores />
      <TecnicoSection />
      <Servicos />
      <VoceSabia />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
