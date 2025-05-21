import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
              <Button size="lg" variant="outline" className="border-white text-smarttrack-black hover:bg-white hover:text-smarttrack-black">
                Learn More
              </Button>
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
