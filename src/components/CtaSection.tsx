import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  const handleContactSales = () => {
    // Create mailto link with pre-filled subject and body
    const subject = encodeURIComponent("SmartTrack PNG - Sales Inquiry");
    const body = encodeURIComponent(
      "Hello SmartTrack PNG Team,\n\nI am interested in learning more about your vehicle tracking solutions. Please contact me to discuss pricing and features.\n\nBest regards"
    );
    const mailtoLink = `mailto:info@terunapng.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-20 bg-smarttrack-red-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-96 w-96 rounded-full bg-white/30 -top-20 -left-20"></div>
        <div className="absolute h-96 w-96 rounded-full bg-white/30 -bottom-20 -right-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-0 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Fleet Operations?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join hundreds of businesses that trust SmartTrack for their vehicle tracking needs. Get started today with a free quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-smarttrack-red hover:bg-gray-100 text-lg px-8">
                Get a Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black bg-white hover:bg-gray-100 hover:text-smarttrack-red"
              onClick={handleContactSales}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
