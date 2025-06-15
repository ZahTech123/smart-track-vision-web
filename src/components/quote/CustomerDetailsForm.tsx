
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QuoteFormData } from "@/types/quote";
import { validateEmail } from "@/utils/emailValidation";
import { cn } from "@/lib/utils";

interface CustomerDetailsFormProps {
  formData: QuoteFormData;
  onFieldChange: (field: keyof QuoteFormData, value: string | number) => void;
  errors?: Partial<Record<keyof QuoteFormData, string>>;
}

const CustomerDetailsForm: React.FC<CustomerDetailsFormProps> = ({ 
  formData, 
  onFieldChange, 
  errors = {} 
}) => {
  const [emailValidation, setEmailValidation] = useState<{ isValid: boolean; error?: string }>({ isValid: true });

  const handleEmailChange = (email: string) => {
    onFieldChange('email', email);
    
    // Real-time email validation
    if (email) {
      const validation = validateEmail(email);
      setEmailValidation(validation);
    } else {
      setEmailValidation({ isValid: true });
    }
  };

  const getEmailInputClassName = () => {
    if (!formData.email) return "";
    if (emailValidation.isValid) return "border-green-500 focus:border-green-500";
    return "border-red-500 focus:border-red-500";
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-center text-smarttrack-red mb-6 uppercase">
        YOUR DETAILS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-semibold text-gray-700">
            Full Name <span className="text-smarttrack-red">*</span>
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => onFieldChange('name', e.target.value)}
            className={cn(errors.name && "border-red-500")}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block font-semibold text-gray-700">
            Email Address <span className="text-smarttrack-red">*</span>
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleEmailChange(e.target.value)}
            className={cn(getEmailInputClassName(), errors.email && "border-red-500")}
            required
          />
          {!emailValidation.isValid && emailValidation.error && (
            <p className="text-red-500 text-sm">{emailValidation.error}</p>
          )}
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          {formData.email && emailValidation.isValid && (
            <p className="text-green-600 text-sm">✓ Valid email address</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="block font-semibold text-gray-700">
            Phone Number <span className="text-smarttrack-red">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => onFieldChange('phone', e.target.value)}
            className={cn(errors.phone && "border-red-500")}
            required
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="block font-semibold text-gray-700">
            Company Name (Optional)
          </label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => onFieldChange('company', e.target.value)}
          />
        </div>
        
        <div className="space-y-2 col-span-full">
          <label htmlFor="num_vehicles" className="block font-semibold text-gray-700">
            Number of Vehicles <span className="text-smarttrack-red">*</span>
          </label>
          <Input
            id="num_vehicles"
            type="number"
            min="1"
            value={formData.numVehicles}
            onChange={(e) => onFieldChange('numVehicles', parseInt(e.target.value))}
            className={cn(errors.numVehicles && "border-red-500")}
            required
          />
          {errors.numVehicles && <p className="text-red-500 text-sm">{errors.numVehicles}</p>}
        </div>
        
        <div className="space-y-2 col-span-full">
          <label htmlFor="message" className="block font-semibold text-gray-700">
            Additional Message (Optional)
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => onFieldChange('message', e.target.value)}
            rows={4}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerDetailsForm;
