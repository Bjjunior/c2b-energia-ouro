import logoC2B from "@/assets/logo-c2b.png";

const Footer = () => {
  return (
    <footer className="relative bg-black py-12 border-t border-teal/20 overflow-hidden">
      <div className="absolute inset-0 premium-glow-radial opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <img src={logoC2B} alt="C2B Logo" className="h-8" />
            <div>
              <span className="text-white font-semibold">C2B</span>
              <span className="text-teal text-sm ml-2">Inteligência em Energia</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} C2B Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
