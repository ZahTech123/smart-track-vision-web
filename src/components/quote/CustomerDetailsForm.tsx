
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QuoteFormData } from "@/types/quote";

interface CustomerDetailsFormProps {
  formData: QuoteFormData;
  onFieldChange: (field: keyof QuoteFormData, value: string | number) => void;
}

const CustomerDetailsForm: React.FC<CustomerDetailsFormProps> = ({ formData, onFieldChange }) => {
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
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block font-semibold text-gray-700">
            Email Address <span className="text-smarttrack-red">*</span>
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onFieldChange('email', e.target.value)}
            required
          />
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
            required
          />
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
            required
          />
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
