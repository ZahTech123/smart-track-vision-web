
import { useEffect, useRef } from "react";
import { 
  DollarSign, 
  Shield, 
  CheckCircle, 
  BarChart, 
  Clock 
} from "lucide-react";

const BenefitsSection = () => {
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
  
  const benefits = [
    {
      icon: <DollarSign className="h-12 w-12 text-smarttrack-red" />,
      title: "Cost Savings",
      description: "Reduce fuel consumption, prevent unauthorized use, and optimize routes to save on operational costs."
    },
    {
      icon: <Shield className="h-12 w-12 text-smarttrack-red" />,
      title: "Asset Protection",
      description: "Keep your vehicles secure with real-time alerts, geofencing, and anti-theft features."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-smarttrack-red" />,
      title: "Enhanced Safety",
      description: "Monitor driver behavior, reduce speeding incidents, and improve overall fleet safety."
    },
    {
      icon: <BarChart className="h-12 w-12 text-smarttrack-red" />,
      title: "Improved Efficiency",
      description: "Streamline dispatching, reduce idle time, and optimize routes for maximum productivity."
    },
    {
      icon: <Clock className="h-12 w-12 text-smarttrack-red" />,
      title: "Real-Time Monitoring",
      description: "Access live location data, receive instant alerts, and make informed decisions quickly."
    }
  ];
  
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits of <span className="text-smarttrack-red">Vehicle Tracking</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our advanced tracking solutions can transform your business operations and boost your bottom line.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="feature-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
