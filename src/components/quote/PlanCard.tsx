
import React from "react";
import { Check } from "lucide-react";
import { PlanDetails } from "@/types/quote";

interface PlanCardProps {
  plan: PlanDetails;
  isSelected: boolean;
  onSelect: (planId: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isSelected, onSelect }) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onSelect(plan.id);
  };

  const handleLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    onSelect(plan.id);
  };

  return (
    <div className="relative">
      <input
        type="radio"
        name="selected_plan"
        id={plan.id}
        value={plan.id}
        checked={isSelected}
        onChange={handleRadioChange}
        className="absolute opacity-0 w-0 h-0"
        required
      />
      <label
        htmlFor={plan.id}
        onClick={handleLabelClick}
        className={`block relative rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
          isSelected ? "ring-2 ring-smarttrack-red shadow-[0_0_20px_rgba(204,12,37,0.5)]" : ""
        }`}
        style={isSelected ? { boxShadow: '0 0 20px rgba(204, 12, 37, 0.5)' } : {}}
      >
        <div className={`rounded-lg overflow-hidden ${
          plan.priceType === "special" 
            ? "bg-white border border-smarttrack-red" 
            : plan.id === "corp-std" 
              ? "bg-smarttrack-black text-white" 
              : "bg-white border border-smarttrack-black"
        }`}>
          <div className={`${
            plan.id === "corp-std" 
              ? "bg-smarttrack-black text-white"
              : plan.priceType === "special" 
                ? "bg-smarttrack-red text-white" 
                : "bg-smarttrack-black text-white"
          } py-2 px-4 rounded-t-lg`}>
            <p className="font-bold uppercase text-center">{plan.tagline}</p>
          </div>
          
          <div className={`p-6 ${
            plan.id === "corp-std" 
              ? "bg-smarttrack-black text-white" 
              : "bg-white"
          }`}>
            <h3 className={`text-xl font-bold text-center mb-2 ${
              plan.id === "corp-std" 
                ? "text-white" 
                : "text-smarttrack-red"
            }`}>
              {plan.name}
            </h3>
            
            <div className="text-center mb-4">
              <span className={`text-4xl font-bold ${
                plan.id === "corp-std" 
                  ? "text-white" 
                  : "text-smarttrack-red"
              }`}>
                {plan.price}
              </span>
              <span className={`text-sm ${
                plan.id === "corp-std" 
                  ? "text-white" 
                  : "text-gray-600"
              }`}>/month</span>
            </div>
            
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className={`flex items-start ${
                  plan.id === "corp-std" 
                    ? "text-white" 
                    : "text-gray-600"
                }`}>
                  {feature.included ? (
                    <i className={`fas fa-check mr-2 mt-1 ${
                      plan.id === "corp-std" 
                        ? "text-white" 
                        : "text-green-600"
                    }`}></i>
                  ) : (
                    <i className="fas fa-times text-red-600 mr-2 mt-1"></i>
                  )}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="text-sm space-y-1 mb-4">
              {plan.details.slice(0, 4).map((detail, i) => (
                <p key={i} className={`flex justify-between ${
                  plan.id === "corp-std" 
                    ? "text-white" 
                    : "text-gray-700"
                }`}>
                  <strong>{detail.label}:</strong> 
                  <span className="ml-2">{detail.value}</span>
                </p>
              ))}
            </div>
            
            <div className={`w-full rounded-full py-2 px-4 font-medium text-center transition-all duration-300 flex items-center justify-center gap-2 ${
              isSelected 
                ? plan.id === "corp-std" 
                  ? "bg-smarttrack-red text-white shadow-lg" 
                  : "bg-smarttrack-red text-white shadow-lg"
                : plan.id === "corp-std" 
                  ? "bg-white text-smarttrack-black hover:bg-gray-100" 
                  : "bg-smarttrack-red text-white hover:bg-smarttrack-red-light"
            }`}>
              {isSelected && <Check className="h-4 w-4" />}
              <span>{isSelected ? "Selected" : "Select"}</span>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default PlanCard;
