import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";
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
    
    // Validate inputs
    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um email válido.");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          nome: formData.nome.trim(),
          email: formData.email.trim(),
          telefone: formData.telefone.trim() || undefined,
          mensagem: formData.mensagem.trim(),
        },
      });

      if (error) {
        console.error("Error sending email:", error);
        toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
        return;
      }

      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@c2bengenharia.com",
      href: "mailto:contato@c2bengenharia.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 5196-1096",
      href: "tel:+551151961096",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: null,
    },
  ];

  return (
    <section id="contato" className="py-24 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Fale Conosco
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Entre em <span className="font-semibold">Contato</span>
          </h2>
          <div className="w-12 h-[2px] bg-teal mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos otimizar sua gestão de energia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-teal/10 rounded flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowRight className="w-4 h-4 text-gray-500 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="p-6 border border-white/10 rounded">
              <p className="text-gray-400 text-sm leading-relaxed">
                "Transformando energia em inteligência para o futuro do seu negócio. 
                Conte com nossa expertise para soluções sob medida."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="nome"
                placeholder="Nome *"
                value={formData.nome}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 
                  focus:border-teal focus:ring-teal h-12 rounded disabled:opacity-50"
              />

              <Input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 
                  focus:border-teal focus:ring-teal h-12 rounded disabled:opacity-50"
              />

              <Input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                disabled={isLoading}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 
                  focus:border-teal focus:ring-teal h-12 rounded disabled:opacity-50"
              />

              <Textarea
                name="mensagem"
                placeholder="Mensagem *"
                value={formData.mensagem}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={5}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 
                  focus:border-teal focus:ring-teal resize-none rounded disabled:opacity-50"
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-teal hover:bg-teal/90 text-white font-medium text-base py-6 rounded disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
