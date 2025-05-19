
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-smarttrack-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-cityscape.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-smarttrack-black/80 to-smarttrack-black/30"></div>
      </div>
      
      <div className="container relative z-10 mx-auto h-full flex flex-col justify-center px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="text-smarttrack-red">Smart</span> Fleet Management Made Simple
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg">
              Track your vehicles in real-time and optimize your business operations with our advanced GPS tracking solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-smarttrack-red hover:bg-smarttrack-red-light text-white text-lg px-8">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-smarttrack-black">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <img 
              src="/red-suv.png" 
              alt="Red SUV with GPS tracking" 
              className="w-full max-w-md mx-auto animate-slide-in-right" 
            />
            <img 
              src="/mobile-app.png" 
              alt="Mobile tracking app" 
              className="absolute -bottom-10 -left-10 w-64 animate-fade-in" 
              style={{ animationDelay: "0.5s" }}
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
