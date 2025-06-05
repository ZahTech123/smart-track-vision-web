import { useEffect, useRef } from "react";

const FeaturesSection = () => {
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

  return (
    <section id="features" className="py-20 bg-smarttrack-black text-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="text-smarttrack-red">Tracking Features</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our platform provides comprehensive vehicle management capabilities designed for modern businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 animate-on-scroll">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-smarttrack-red rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time GPS Tracking</h3>
                  <p className="text-gray-300">Monitor your vehicles with precise location data updated every 10 seconds.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-smarttrack-red rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Geofencing Capabilities</h3>
                  <p className="text-gray-300">Create virtual boundaries and receive alerts when vehicles enter or exit designated areas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-smarttrack-red rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Driver Behavior Monitoring</h3>
                  <p className="text-gray-300">Track speeding, harsh braking, and other driving behaviors to improve safety.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-smarttrack-red rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Reporting</h3>
                  <p className="text-gray-300">Generate comprehensive reports on vehicle usage, mileage, fuel consumption, and more.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-on-scroll">
            <img 
              src="/images/dashboard.png" 
              alt="Smart Track Dashboard" 
              className="rounded-lg shadow-lg mx-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
