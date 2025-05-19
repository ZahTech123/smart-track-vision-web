
import { DollarSign, Check, ArrowUp } from "lucide-react";

const BenefitsIcons = ({ icon }: { icon: string }) => {
  const iconStyle = "w-14 h-14 text-smarttrack-red";

  switch (icon) {
    case "cost-savings":
      // Using 'K' for Kina instead of dollar sign
      return (
        <div className="rounded-full bg-white p-4 shadow-md inline-flex items-center justify-center">
          <div className="relative">
            <span className="text-4xl font-bold text-smarttrack-red">K</span>
          </div>
        </div>
      );
    case "efficiency":
      return (
        <div className="rounded-full bg-white p-4 shadow-md inline-flex items-center justify-center">
          <ArrowUp className={iconStyle} />
        </div>
      );
    case "safety":
      return (
        <div className="rounded-full bg-white p-4 shadow-md inline-flex items-center justify-center">
          <Check className={iconStyle} />
        </div>
      );
    default:
      return null;
  }
};

export default BenefitsIcons;
