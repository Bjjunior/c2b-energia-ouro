import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, email, telefone, mensagem }: ContactEmailRequest = await req.json();

    if (!nome || !email || !mensagem) {
      return new Response(
        JSON.stringify({ error: "Nome, email e mensagem são obrigatórios" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "C2B Engenharia <onboarding@resend.dev>",
      to: ["contato@c2bengenharia.com"],
      subject: `Novo contato de ${nome} - Site C2B`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #008B8B;">Novo Contato via Site</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
          <p><strong>Mensagem:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${mensagem}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">Este email foi enviado através do formulário de contato do site C2B Engenharia.</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
