
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import FooterSection from "../components/FooterSection";
import BenefitsIcons from "../components/BenefitsIcons";

const Index = () => {
  useEffect(() => {
    // Create image files in the public directory
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
    </div>
  );
};

export default Index;
