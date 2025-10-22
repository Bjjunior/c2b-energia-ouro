import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Valores from "@/components/Valores";
import Servicos from "@/components/Servicos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Valores />
      <Servicos />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
