import logoC2B from "@/assets/logo-c2b.png";

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img src={logoC2B} alt="C2B Logo" className="h-8" />
            <div>
              <span className="text-white font-semibold">C2B</span>
              <span className="text-gray-500 text-sm ml-2">Inteligência em Energia</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} C2B Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
