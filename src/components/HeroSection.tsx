
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-smarttrack-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home_page_banner_backdrop.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-smarttrack-black/0 to-smarttrack-black/50"></div>
      </div>
      
      <div className="container relative z-10 mx-auto h-full flex flex-col justify-center px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              data-editable-id="hero-section-headline"
              data-name="Hero Headline"
            >
              <span className="text-smarttrack-red">Smart</span> Fleet Management Made Simple
            </h1>
            <p 
              className="text-xl text-gray-200 mb-8 max-w-lg"
              data-editable-id="hero-section-subtitle"
              data-name="Hero Subtitle"
            >
              Track your vehicles in real-time and optimize your business operations with our advanced GPS tracking solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button 
                  size="lg" 
                  className="bg-smarttrack-red hover:bg-smarttrack-red-light text-white text-lg px-8"
                  data-editable-id="hero-section-cta-button"
                  data-name="Hero CTA Button"
                >
                  Get a Quote
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="border-white text-smarttrack-black hover:bg-white hover:text-smarttrack-black">
                    Learn More
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-smarttrack-red">
                      Smarter Fleet Management Starts Here
                    </DialogTitle>
                    <DialogDescription className="text-lg text-gray-700">
                      At SmartTrack PNG, we provide real-time GPS tracking solutions that empower you to take full control of your vehicles and assets—anytime, anywhere.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-smarttrack-black">Why Choose SmartTrack?</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-smarttrack-red">Live Vehicle Tracking</h4>
                          <p className="text-gray-600">Monitor your fleet in real-time with pinpoint GPS accuracy.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-smarttrack-red">SECO</h4>
                          <p className="text-gray-600">Secure Engine Cut Off, to safely immobilise the vehicle by cutting fuel supply to slow the vehicle down to a halt.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-smarttrack-red">Dashboard Camera</h4>
                          <p className="text-gray-600">Integrating dashcam into vehicle tracking. You track and review road incidents making accident or incident reconstruction so much easier.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-smarttrack-red">Driver Performance Monitoring</h4>
                          <p className="text-gray-600">Track speed, idle time, and driving behavior to improve safety and accountability.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-smarttrack-red">Geo-Fencing Alerts</h4>
                          <p className="text-gray-600">Get instant notifications when a vehicle enters or leaves a designated area.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-smarttrack-red">Comprehensive Reports</h4>
                          <p className="text-gray-600">Access detailed reports for better decision-making and compliance.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-smarttrack-black">Built for PNG Businesses</h3>
                      <p className="text-gray-600 mb-4">
                        Whether you're managing a small fleet or a large operation, our platform is designed to work reliably in Papua New Guinea's unique environment.
                      </p>
                    </div>
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-semibold mb-4 text-smarttrack-black">Ready to take control of your fleet?</h3>
                      <p className="text-gray-600 mb-4">
                        Get in touch or Request a Demo to see how SmartTrack PNG can transform your operations.
                      </p>
                      <Link to="/quote">
                        <Button className="bg-smarttrack-red hover:bg-smarttrack-red-light text-white">
                          Request a Demo
                        </Button>
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <img
              src="/images/red_truck.png"
              alt="Red truck in background"
              className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-xl animate-fade-in z-0"
              style={{ animationDelay: "0.2s", transform: 'translateY(70px)' }}
            />
            <div 
              className="relative z-10 w-full max-w-md mx-auto" 
              style={{ transform: 'scaleX(-1) translateY(180px)' }}
            >
              <img
                src="/images/red_car.png"
                alt="Red car with GPS tracking"
                className="w-full rounded-lg shadow-2xl animate-slide-in-right"
                style={{ transform: 'scale(1.5)' }}
              />
            </div>
            <img
              src="/images/mobile_phone.png"
              alt="Mobile phone displaying tracking app"
              className="absolute -bottom-10 -left-10 w-64 animate-fade-in z-20"
              style={{ animationDelay: "0.5s", transform: 'scale(0.8) translateY(250px)' }}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#benefits" 
          className="animate-bounce text-white"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
