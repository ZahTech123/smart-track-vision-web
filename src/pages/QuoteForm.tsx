import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import PricingTable from "@/components/quote/PricingTable";
import CustomerDetailsForm from "@/components/quote/CustomerDetailsForm";
import { QuoteFormData } from "@/types/quote";
import { plans } from "@/data/plans";
import { sendQuoteRequest } from "@/services/emailService";
import { ChevronLeft } from "lucide-react";

const QuoteForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<QuoteFormData>({
    selectedPlan: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    numVehicles: 1,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field: keyof QuoteFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const selectedPlanDetails = plans.find(plan => plan.id === formData.selectedPlan);
      
      await sendQuoteRequest(formData, selectedPlanDetails);
      
      toast.success("Your quote request has been submitted! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        selectedPlan: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        numVehicles: 1,
        message: "",
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to submit quote request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/apec_haus_backdrop.JPG')" }}>
      <div className="min-h-screen bg-gradient-to-r from-smarttrack-black/90 to-smarttrack-black-light/90 py-12">
        <div className="max-w-5xl mx-auto bg-white/90 rounded-xl shadow-2xl relative">
          <Button
            size="icon"
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
            aria-label="Go back"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <header className="text-center pt-8 pb-6">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-bold">
                <span className="text-smarttrack-red">Smart</span>Track
              </span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">GET A QUOTE</h1>
            <p className="text-gray-600 mt-2">Select a plan and tell us about your needs.</p>
          </header>

          <form onSubmit={handleSubmit} className="px-6 md:px-10 pb-10">
            <PricingTable
              plans={plans}
              selectedPlan={formData.selectedPlan}
              onPlanSelect={(planId) => handleFieldChange('selectedPlan', planId)}
            />

            <CustomerDetailsForm
              formData={formData}
              onFieldChange={handleFieldChange}
            />

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-smarttrack-red hover:bg-smarttrack-red-light transform hover:-translate-y-1 transition-all text-lg font-bold uppercase px-10 py-6 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Get My Quote"}
              </Button>
            </div>
          </form>

          <footer className="px-6 md:px-10 py-6 text-center text-gray-600 border-t border-gray-100">
            <p className="bg-gray-50 p-3 rounded-lg text-sm mb-4">
              <strong>SECO is Secure Engine Cut Off:</strong> This feature enables remotely turning off fuel supply,
              therefore, slowing the vehicle down safely to a halt.
            </p>
            <div className="text-sm">
              <span className="inline-flex items-center mx-2">
                <i className="fas fa-envelope mr-1 text-smarttrack-red"></i> info@terunapng.com
              </span>
              <span className="inline-block mx-2">|</span>
              <span className="inline-flex items-center mx-2">
                <i className="fas fa-phone mr-1 text-smarttrack-red"></i> +675 8244 5259
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
