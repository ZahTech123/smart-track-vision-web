
import emailjs from '@emailjs/browser';
import { PlanDetails, QuoteFormData } from '@/types/quote';

export const sendQuoteRequest = async (
  formData: QuoteFormData,
  selectedPlanDetails: PlanDetails | undefined
) => {
  const templateParams = {
    customer_name: formData.name,
    customer_email: formData.email,
    customer_phone: formData.phone,
    customer_company: formData.company || 'Not provided',
    number_of_vehicles: formData.numVehicles.toString(),
    selected_plan_name: selectedPlanDetails?.name || 'Not selected',
    selected_plan_price: selectedPlanDetails?.price || 'N/A',
    selected_plan_tagline: selectedPlanDetails?.tagline || 'N/A',
    selected_plan_features: selectedPlanDetails?.features.map(f => 
      `${f.included ? '✓' : '✗'} ${f.text}`
    ).join(', ') || 'No features listed',
    plan_details: selectedPlanDetails?.details.map(d => 
      `${d.label}: ${typeof d.value === 'string' ? d.value : 'Included'}`
    ).join(', ') || 'No details available',
    additional_message: formData.message || 'No additional message',
    submission_time: new Date().toLocaleString(),
    to_email: 'zahtech13@gmail.com,info@terunapng.com'
  };

  return await emailjs.send(
    "service_tluuz6g",
    "template_iiptxnr", 
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "TNL5_-KPkeziCpnNz"
  );
};
