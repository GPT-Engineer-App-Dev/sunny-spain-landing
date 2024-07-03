import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Globe, Utensils, Phone } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import Culture from "./pages/Culture.jsx";
import Tourism from "./pages/Tourism.jsx";
import Cuisine from "./pages/Cuisine.jsx";
import Contact from "./pages/Contact.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Culture",
    to: "/culture",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Tourism",
    to: "/tourism",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Cuisine",
    to: "/cuisine",
    icon: <Utensils className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="culture" element={<Culture />} />
              <Route path="tourism" element={<Tourism />} />
              <Route path="cuisine" element={<Cuisine />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;