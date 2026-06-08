import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ParaEmpresa from "./pages/ParaEmpresa";
import ParaCondominio from "./pages/ParaCondominio";
import CabinesPrimariasPage from "./pages/CabinesPrimariasPage";
import ManutencaoEmergencial from "./pages/ManutencaoEmergencial";
import LaudosProjetos from "./pages/LaudosProjetos";
import CarregadoresEletricos from "./pages/CarregadoresEletricos";
import OrcamentoEnviado from "./pages/OrcamentoEnviado";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/para-empresa" element={<ParaEmpresa />} />
          <Route path="/para-condominio" element={<ParaCondominio />} />
          <Route path="/cabines-primarias" element={<CabinesPrimariasPage />} />
          <Route path="/manutencao-emergencial" element={<ManutencaoEmergencial />} />
          <Route path="/laudos-e-projetos" element={<LaudosProjetos />} />
          <Route path="/carregadores-eletricos" element={<CarregadoresEletricos />} />
          <Route path="/orcamento-enviado" element={<OrcamentoEnviado />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
