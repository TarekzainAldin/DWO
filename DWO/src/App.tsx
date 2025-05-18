
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Board from "./pages/Board";
import Committees from "./pages/Committees";
import Meetings from "./pages/Meetings";
import Users from "./pages/Users";
import Tickets from "./pages/Tickets";
import Financial from "./pages/Financial";
import Documents from "./pages/Documents";
import Partners from "./pages/Partners";
import Ethics from "./pages/Ethics";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/board" element={<Board />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
