import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="relative py-24 bg-gradient-dark overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Entre em Contato
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-grey-light max-w-2xl mx-auto">
            Vamos conversar sobre como podemos otimizar sua gestão de energia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-grey-dark/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-semibold mb-8 text-white">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-grey-light">contato@c2benergia.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telefone</h4>
                    <p className="text-grey-light">+55 (XX) XXXXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Endereço</h4>
                    <p className="text-grey-light">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-grey-dark/30 backdrop-blur-sm p-6 rounded-lg border border-gold/20">
              <p className="text-grey-light italic">
                "Transformando energia em inteligência para o futuro do seu negócio"
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="bg-grey-dark/50 border-white/10 text-white placeholder:text-grey 
                    focus:border-gold focus:ring-gold h-12"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-grey-dark/50 border-white/10 text-white placeholder:text-grey 
                    focus:border-gold focus:ring-gold h-12"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="telefone"
                  placeholder="Seu telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="bg-grey-dark/50 border-white/10 text-white placeholder:text-grey 
                    focus:border-gold focus:ring-gold h-12"
                />
              </div>

              <div>
                <Textarea
                  name="mensagem"
                  placeholder="Sua mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-grey-dark/50 border-white/10 text-white placeholder:text-grey 
                    focus:border-gold focus:ring-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-black font-semibold text-lg py-6 shadow-gold"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
