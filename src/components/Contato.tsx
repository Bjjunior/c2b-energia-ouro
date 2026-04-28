import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um email válido.");
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          nome: formData.nome.trim(),
          email: formData.email.trim(),
          telefone: formData.telefone.trim() || undefined,
          mensagem: formData.mensagem.trim(),
        },
      });
      if (error) {
        toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
        return;
      }
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch {
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contato@c2bengenharia.com", href: "mailto:contato@c2bengenharia.com" },
    { icon: Phone, label: "Telefone", value: "+55 (11) 5196-1096", href: "tel:+551151961096" },
    { icon: MapPin, label: "Localização", value: "São Paulo, SP - Brasil", href: null },
  ];

  return (
    <section id="contato" className="premium-section py-24 md:py-32">
      <div className="absolute inset-0 premium-glow-radial" />
      <div className="absolute inset-0 premium-mosaic" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="premium-eyebrow mb-8">
            <MessageCircle className="w-4 h-4" />
            Fale Conosco
          </div>
          <h2 className="premium-title mb-2">
            Entre em <span className="premium-accent">Contato</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-lg text-gray-400 font-light">
            Vamos conversar sobre como podemos otimizar sua gestão de energia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 p-5 premium-card group">
                    <div className="w-12 h-12 bg-teal/10 border border-teal/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors duration-500">
                      <Icon className="w-5 h-5 text-teal group-hover:text-black transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowRight className="w-4 h-4 text-gray-500 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                );
                return item.href ? (
                  <a key={index} href={item.href} className="block">{content}</a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
            <div className="p-6 premium-card">
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "Transformando energia em inteligência para o futuro do seu negócio. 
                Conte com nossa expertise para soluções sob medida."
              </p>
            </div>
          </div>

          <div className="premium-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" name="nome" placeholder="Nome *" value={formData.nome} onChange={handleChange} required disabled={isLoading}
                className="bg-black/40 border-white/10 text-white placeholder:text-gray-500 focus:border-teal focus:ring-teal h-12 rounded-lg disabled:opacity-50" />
              <Input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required disabled={isLoading}
                className="bg-black/40 border-white/10 text-white placeholder:text-gray-500 focus:border-teal focus:ring-teal h-12 rounded-lg disabled:opacity-50" />
              <Input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} disabled={isLoading}
                className="bg-black/40 border-white/10 text-white placeholder:text-gray-500 focus:border-teal focus:ring-teal h-12 rounded-lg disabled:opacity-50" />
              <Textarea name="mensagem" placeholder="Mensagem *" value={formData.mensagem} onChange={handleChange} required disabled={isLoading} rows={5}
                className="bg-black/40 border-white/10 text-white placeholder:text-gray-500 focus:border-teal focus:ring-teal resize-none rounded-lg disabled:opacity-50" />
              <Button type="submit" disabled={isLoading}
                className="w-full bg-teal hover:bg-teal/90 text-white font-medium text-base py-6 rounded-lg disabled:opacity-50 shadow-lg shadow-teal/30">
                {isLoading ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" />Enviando...</>) : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
