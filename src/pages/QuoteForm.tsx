
import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type PlanDetails = {
  id: string;
  name: string;
  priceType: "standard" | "special";
  features: {
    text: string;
    included: boolean;
  }[];
  details: {
    label: string;
    value: string | JSX.Element;
  }[];
};

const QuoteForm = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [numVehicles, setNumVehicles] = useState<number>(1);
  const [message, setMessage] = useState("");

  const plans: PlanDetails[] = [
    {
      id: "basic-std",
      name: "BASIC PLAN",
      priceType: "standard",
      features: [
        { text: "Mobile App", included: true },
        { text: "Desktop Tracking", included: true },
        { text: "Anti-Theft SECO", included: false },
        { text: "Reports", included: true },
        { text: "User Access", included: true },
      ],
      details: [
        { label: "Number of Users", value: "1" },
        { label: "Minimum Vehicles", value: "1" },
        { label: "Contract Length", value: "6 Months" },
        { label: "Hardware Cost (Per Unit)", value: "K450" },
        { label: "Install (Min Hours)", value: "1" },
        { label: "Install Rate (Per Hour)", value: "K150" },
        { label: "Monthly Fee (Per Vehicle)", value: "K65" },
      ],
    },
    {
      id: "corp-std",
      name: "CORPORATE USER",
      priceType: "standard",
      features: [
        { text: "Mobile App", included: true },
        { text: "Desktop Tracking", included: true },
        { text: "Anti-Theft SECO", included: true },
        { text: "Reports (Manual)", included: true },
        { text: "User Access", included: true },
      ],
      details: [
        { label: "Number of Users", value: "Unlimited" },
        { label: "Minimum Vehicles", value: ">5 & <20" },
        { label: "Contract Length", value: "12 Months" },
        { label: "Hardware Cost (Per Unit)", value: "K450" },
        { label: "Install (Min Hours)", value: "3" },
        { label: "Install Rate (Per Hour)", value: "Free" },
        { label: "Monthly Fee (Per Vehicle)", value: "K99" },
        { label: "Monitoring Response", value: "Contract" },
        { label: "Reports (Auto)", value: <i className="fas fa-check text-green-600"></i> },
        { label: "User Access (Super)", value: <i className="fas fa-check text-green-600"></i> },
        { label: "User Access (Admin)", value: <i className="fas fa-check text-green-600"></i> },
      ],
    },
    {
      id: "basic-spc",
      name: "BASIC PLAN",
      priceType: "special",
      features: [
        { text: "Mobile App", included: true },
        { text: "Desktop Tracking", included: true },
        { text: "Anti-Theft SECO", included: true },
        { text: "Reports (Manual)", included: true },
        { text: "User Access (Normal)", included: true },
      ],
      details: [
        { label: "Number of Users", value: "2" },
        { label: "Minimum Vehicles", value: "1" },
        { label: "Contract Length", value: "24 Months" },
        { label: "Hardware Cost (Per Unit)", value: "K450" },
        { label: "Install (Min Hours)", value: "3" },
        { label: "Install Rate (Per Hour)", value: "Free" },
        { label: "Monthly Fee (Per Vehicle)", value: "K65" },
      ],
    },
    {
      id: "corp-spc",
      name: "CORPORATE USER",
      priceType: "special",
      features: [
        { text: "Mobile App", included: true },
        { text: "Desktop Tracking", included: true },
        { text: "Anti-Theft SECO", included: true },
        { text: "Reports (Manual)", included: true },
        { text: "User Access (Normal)", included: true },
      ],
      details: [
        { label: "Number of Users", value: "Unlimited" },
        { label: "Minimum Vehicles", value: "20" },
        { label: "Contract Length", value: "24 Months" },
        { label: "Hardware Cost (Per Unit)", value: "Free" },
        { label: "Install (Min Hours)", value: "3" },
        { label: "Install Rate (Per Hour)", value: "Free" },
        { label: "Monthly Fee (Per Vehicle)", value: "K99" },
        { label: "Monitoring Response", value: "Contract" },
        { label: "Reports (Auto)", value: <i className="fas fa-check text-green-600"></i> },
        { label: "User Access (Super)", value: <i className="fas fa-check text-green-600"></i> },
        { label: "User Access (Admin)", value: <i className="fas fa-check text-green-600"></i> },
      ],
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // In a real application, we would send this data to a server
    // For now, we'll just log it and show a success toast
    console.log({
      selectedPlan,
      name,
      email,
      phone,
      company,
      numVehicles,
      message,
    });
    
    toast.success("Your quote request has been submitted! We'll get back to you soon.");
    
    // Reset form
    setSelectedPlan("");
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setNumVehicles(1);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
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
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-center text-smarttrack-red mb-6 uppercase">
              CHOOSE YOUR PLAN
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plans.map((plan) => (
                <div key={plan.id} className="relative">
                  <input
                    type="radio"
                    name="selected_plan"
                    id={plan.id}
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={() => setSelectedPlan(plan.id)}
                    className="absolute opacity-0 w-0 h-0"
                    required
                  />
                  <label
                    htmlFor={plan.id}
                    className={`block relative cursor-pointer border-2 transition-all duration-300 rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl ${
                      selectedPlan === plan.id
                        ? "border-[#E4592E] shadow-lg bg-amber-50"
                        : "border-transparent shadow"
                    } ${
                      plan.priceType === "special" ? "bg-amber-50" : "bg-[#f8f0e3]"
                    }`}
                  >
                    <span className={`absolute top-0 right-0 py-1 px-4 text-sm font-bold ${
                      plan.priceType === "special"
                        ? "bg-orange-400 text-gray-800"
                        : "bg-[#D88D5A] text-white"
                    }`}>
                      {plan.priceType === "special" ? "Special Price" : "Standard Price"}
                    </span>
                    
                    <div className="p-6">
                      <h3 className={`text-xl font-bold text-center mb-4 ${
                        plan.priceType === "special" ? "text-[#E4592E]" : "text-smarttrack-red"
                      }`}>
                        {plan.name}
                      </h3>
                      
                      <ul className="space-y-2 mb-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="text-gray-600 flex items-start">
                            {feature.included ? (
                              <i className="fas fa-check text-green-600 mr-2 mt-1"></i>
                            ) : (
                              <i className="fas fa-times text-red-600 mr-2 mt-1"></i>
                            )}
                            <span>{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-sm space-y-1 text-gray-700">
                        {plan.details.map((detail, i) => (
                          <p key={i} className="flex justify-between">
                            <strong>{detail.label}:</strong> 
                            <span className="ml-2">{detail.value}</span>
                          </p>
                        ))}
                      </div>
                      
                      <div className={`mt-4 py-2 text-center font-bold text-white rounded ${
                        selectedPlan === plan.id 
                          ? "bg-[#E4592E]" 
                          : "bg-gray-700"
                      }`}>
                        Select Plan
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </section>

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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="block font-semibold text-gray-700">
                  Company Name (Optional)
                </label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
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
                  value={numVehicles}
                  onChange={(e) => setNumVehicles(parseInt(e.target.value))}
                  required
                />
              </div>
              
              <div className="space-y-2 col-span-full">
                <label htmlFor="message" className="block font-semibold text-gray-700">
                  Additional Message (Optional)
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          </section>

          <div className="text-center">
            <Button
              type="submit"
              className="bg-smarttrack-red hover:bg-[#B3201B] transform hover:-translate-y-1 transition-all text-lg font-bold uppercase px-10 py-6"
            >
              Get My Quote
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
  );
};

export default QuoteForm;
