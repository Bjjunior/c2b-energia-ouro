import logoC2B from "@/assets/logo-c2b.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center space-x-3">
            <img src={logoC2B} alt="C2B Logo" className="h-10" />
            <div>
              <span className="text-2xl font-bold text-white">C2B</span>
              <span className="text-grey-light text-xl"> | Inteligência em Energia</span>
            </div>
          </div>
          <p className="text-grey-light mb-4">
            Soluções inovadoras em engenharia elétrica e gestão inteligente de energia
          </p>
          <p className="text-grey text-sm">
            © {new Date().getFullYear()} C2B - Inteligência em Energia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
