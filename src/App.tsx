
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import Submissions from "./pages/admin/Submissions";
import Customize from "./pages/admin/Customize";
import QuoteForm from "./pages/QuoteForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quote" element={<QuoteForm />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/submissions" element={<Submissions />} />
            <Route path="/admin/customize" element={<Customize />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
