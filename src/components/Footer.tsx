const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold text-gold">C2B</span>
            <span className="text-white text-xl"> | Inteligência em Energia</span>
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
