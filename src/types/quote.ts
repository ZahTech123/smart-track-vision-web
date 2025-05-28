
export type PlanDetails = {
  id: string;
  name: string;
  priceType: "standard" | "special";
  price: string;
  tagline: string;
  features: {
    text: string;
    included: boolean;
  }[];
  details: {
    label: string;
    value: string | JSX.Element;
  }[];
};

export type QuoteFormData = {
  selectedPlan: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  numVehicles: number;
  message: string;
};
