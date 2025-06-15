
import emailjs from '@emailjs/browser';
import { PlanDetails, QuoteFormData } from '@/types/quote';
import { isValidEmailFormat } from '@/utils/emailValidation';

export const sendQuoteRequest = async (
  formData: QuoteFormData,
  selectedPlanDetails: PlanDetails | undefined
) => {
  // Validate email format before sending
  if (!isValidEmailFormat(formData.email)) {
    throw new Error('Invalid email address format. Please check and try again.');
  }

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

  console.log('Sending quote request with email:', formData.email);
  
  return await emailjs.send(
    "service_tluuz6g",
    "template_iiptxnr", 
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "TNL5_-KPkeziCpnNz"
  );
};

export const sendAutoResponse = async (
  formData: QuoteFormData,
  selectedPlanDetails: PlanDetails | undefined
) => {
  // Validate email format before sending auto-response
  if (!isValidEmailFormat(formData.email)) {
    throw new Error('Invalid email address format. Cannot send auto-response.');
  }

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
    ).join('\n') || 'No features listed',
    additional_message: formData.message || '',
    submission_time: new Date().toLocaleString(),
    closing_message: 'Thank you for choosing Smart Track. For a tailored solution, like asset tracking, personnel trackers, guard patrols, vessel tracking, email us on info@smarttrackpng.com for more information.',
    email: formData.email // This is the key parameter for recipient
  };

  console.log('Sending auto-response with parameters:', templateParams);

  try {
    const result = await emailjs.send(
      "service_tluuz6g",
      "template_ew4z10r",
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "TNL5_-KPkeziCpnNz"
    );
    
    console.log('Auto-response sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Failed to send auto-response:', error);
    throw new Error('Failed to send confirmation email. Please check your email address.');
  }
};
