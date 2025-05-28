
import React from "react";
import PlanCard from "./PlanCard";
import { PlanDetails } from "@/types/quote";

interface PricingTableProps {
  plans: PlanDetails[];
  selectedPlan: string;
  onPlanSelect: (planId: string) => void;
}

const PricingTable: React.FC<PricingTableProps> = ({ plans, selectedPlan, onPlanSelect }) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="text-gray-700">Pricing</span> <span className="text-smarttrack-red">Table</span>
        <div className="w-12 h-1 bg-smarttrack-red mx-auto mt-2"></div>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan === plan.id}
            onSelect={onPlanSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
