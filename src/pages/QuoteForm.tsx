
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
      price: "K65",
      tagline: "Economic",
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
      price: "K99",
      tagline: "Premium",
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
      price: "K65",
      tagline: "Business",
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
      price: "K99",
      tagline: "Enterprise",
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
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg')" }}>
      <div className="min-h-screen bg-gradient-to-r from-blue-900/90 to-blue-800/90 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl">
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
              <h2 className="text-3xl font-bold text-center mb-10">
                <span className="text-gray-700">Pricing</span> <span className="text-blue-700">Table</span>
                <div className="w-12 h-1 bg-blue-600 mx-auto mt-2"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      className={`block relative rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                        selectedPlan === plan.id ? "ring-2 ring-blue-600" : ""
                      }`}
                    >
                      <div className={`${
                        plan.priceType === "special" 
                          ? "bg-white border border-blue-600" 
                          : plan.id === "corp-std" 
                            ? "bg-blue-600 text-white" 
                            : "bg-white border border-blue-600"
                      }`}>
                        <div className={`${
                          plan.id === "corp-std" 
                            ? "bg-blue-600 text-white"
                            : "bg-blue-600 text-white"
                        } py-2 px-4 rounded-t-lg`}>
                          <p className="font-bold uppercase text-center">{plan.tagline}</p>
                        </div>
                        
                        <div className={`p-6 ${
                          plan.id === "corp-std" 
                            ? "bg-blue-600 text-white" 
                            : "bg-white"
                        }`}>
                          <h3 className={`text-xl font-bold text-center mb-2 ${
                            plan.id === "corp-std" 
                              ? "text-white" 
                              : "text-blue-600"
                          }`}>
                            {plan.name}
                          </h3>
                          
                          <div className="text-center mb-4">
                            <span className={`text-4xl font-bold ${
                              plan.id === "corp-std" 
                                ? "text-white" 
                                : "text-blue-600"
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
                          
                          <button className={`w-full rounded-full py-2 px-4 font-medium text-center ${
                            plan.id === "corp-std" 
                              ? "bg-white text-blue-600 hover:bg-gray-100" 
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}>
                            Select
                          </button>
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
    </div>
  );
};

export default QuoteForm;
