
import { useEffect, useRef } from "react";

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      quote: "SmartTrack has transformed our delivery operations. We've reduced fuel costs by 23% and improved on-time deliveries by 18%.",
      name: "Sarah Johnson",
      position: "Operations Manager",
      company: "Express Logistics"
    },
    {
      quote: "The real-time tracking capabilities have greatly enhanced our customer service. Our clients appreciate knowing exactly when their deliveries will arrive.",
      name: "Michael Chen",
      position: "Fleet Director",
      company: "Global Shipping Co."
    },
    {
      quote: "After implementing SmartTrack, we've seen a significant reduction in unauthorized vehicle usage and improved driver safety across our entire fleet.",
      name: "David Rodriguez",
      position: "Safety Coordinator",
      company: "City Transit Services"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-smarttrack-red">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it - hear from businesses that have transformed their operations with SmartTrack.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -top-5 left-10 text-5xl text-smarttrack-red">"</div>
              <p className="text-gray-600 mb-6 pt-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
