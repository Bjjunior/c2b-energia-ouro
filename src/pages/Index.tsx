import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Valores from "@/components/Valores";
import Servicos from "@/components/Servicos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Valores />
      <Servicos />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
