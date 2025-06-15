import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import PricingTable from "@/components/quote/PricingTable";
import CustomerDetailsForm from "@/components/quote/CustomerDetailsForm";
import { QuoteFormData } from "@/types/quote";
import { plans } from "@/data/plans";
import { sendQuoteRequest, sendAutoResponse } from "@/services/emailService";
import { quoteFormSchema } from "@/schemas/quoteFormSchema";
import { validateEmail } from "@/utils/emailValidation";
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
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});

  const handleFieldChange = (field: keyof QuoteFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      // Validate with Zod schema
      quoteFormSchema.parse(formData);
      
      // Additional email validation
      const emailValidation = validateEmail(formData.email);
      if (!emailValidation.isValid) {
        setErrors({ email: emailValidation.error });
        return false;
      }
      
      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
      
      if (error.errors) {
        error.errors.forEach((err: any) => {
          const field = err.path[0] as keyof QuoteFormData;
          newErrors[field] = err.message;
        });
      }
      
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const selectedPlanDetails = plans.find(plan => plan.id === formData.selectedPlan);
      
      console.log('Starting form submission for email:', formData.email);
      
      // Send quote request to admin
      await sendQuoteRequest(formData, selectedPlanDetails);
      console.log('Quote request sent successfully');
      
      // Send auto-response to customer with plan details
      try {
        await sendAutoResponse(formData, selectedPlanDetails);
        console.log('Auto-response sent successfully to:', formData.email);
        toast.success("Your quote request has been submitted! Please check your email for confirmation.");
      } catch (autoResponseError) {
        console.error('Auto-response failed:', autoResponseError);
        toast.success("Your quote request has been submitted! We'll get back to you soon.");
        toast.error("Note: Confirmation email could not be sent. Please verify your email address.");
      }
      
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
      setErrors({});
      
    } catch (error) {
      console.error('Form submission error:', error);
      if (error instanceof Error && error.message.includes('email')) {
        toast.error("Invalid email address. Please check your email and try again.");
        setErrors({ email: "Please enter a valid email address" });
      } else {
        toast.error("Failed to submit quote request. Please try again or contact us directly.");
      }
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
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logo.png" alt="SmartTrack Logo" className="h-16 mx-auto" />
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
            {errors.selectedPlan && (
              <p className="text-red-500 text-sm text-center mb-4">{errors.selectedPlan}</p>
            )}

            <CustomerDetailsForm
              formData={formData}
              onFieldChange={handleFieldChange}
              errors={errors}
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
