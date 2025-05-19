
import { useEffect, useRef } from "react";

const HowItWorksSection = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observerRef.current?.observe(el);
    });
    
    return () => {
      if (observerRef.current) {
        elements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Install Tracking Devices",
      description: "We install compact GPS trackers in your vehicles that are discreet and tamper-proof."
    },
    {
      number: "02",
      title: "Connect to Platform",
      description: "Devices sync with our cloud-based platform to provide real-time data access."
    },
    {
      number: "03",
      title: "Monitor & Analyze",
      description: "Access your custom dashboard to view locations, routes, and generate reports."
    },
    {
      number: "04",
      title: "Optimize Operations",
      description: "Use insights to improve efficiency, reduce costs, and enhance customer service."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-smarttrack-red">Smart</span>Track Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple four-step process gets you up and running with minimal disruption to your operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gray-50 rounded-lg p-8 h-full border-t-4 border-smarttrack-red shadow-md hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-smarttrack-red text-white text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-full">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-smarttrack-red" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
