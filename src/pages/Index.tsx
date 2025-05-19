
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import FooterSection from "../components/FooterSection";

const Index = () => {
  useEffect(() => {
    console.log("Index page rendered");
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
      
      {/* Admin link - typically this would be hidden or placed in a more discreet location */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link 
          to="/admin" 
          className="p-2 bg-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-300 transition-colors"
        >
          Admin Login
        </Link>
      </div>
    </div>
  );
};

export default Index;
