
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CustomerPortalSection from "../components/CustomerPortalSection";
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
      <CustomerPortalSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
