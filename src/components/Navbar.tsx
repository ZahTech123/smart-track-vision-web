
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleCustomerLogin = () => {
    window.open('https://monitoring.smarttrackpng.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className={`text-2xl font-bold ${scrolled ? "text-smarttrack-black" : "text-white"}`}>
            <span className="text-smarttrack-red">Smart</span> Track
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className={`font-medium transition-colors ${scrolled ? "text-smarttrack-black hover:text-smarttrack-red" : "text-white hover:text-smarttrack-red"}`}>
            Benefits
          </a>
          <a href="#features" className={`font-medium transition-colors ${scrolled ? "text-smarttrack-black hover:text-smarttrack-red" : "text-white hover:text-smarttrack-red"}`}>
            Features
          </a>
          <a href="#how-it-works" className={`font-medium transition-colors ${scrolled ? "text-smarttrack-black hover:text-smarttrack-red" : "text-white hover:text-smarttrack-red"}`}>
            How It Works
          </a>
          <a href="#contact" className={`font-medium transition-colors ${scrolled ? "text-smarttrack-black hover:text-smarttrack-red" : "text-white hover:text-smarttrack-red"}`}>
            Contact
          </a>
          <Button
            onClick={handleCustomerLogin}
            variant="outline"
            className={`border-2 font-medium transition-all ${
              scrolled 
                ? "border-smarttrack-red text-smarttrack-red hover:bg-smarttrack-red hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-smarttrack-black"
            }`}
          >
            Customer Login
          </Button>
          <Link to="/quote">
            <Button className="bg-smarttrack-red hover:bg-smarttrack-red-light text-white">
              Get a Quote
            </Button>
          </Link>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" className={`p-2 ${scrolled ? "text-smarttrack-black" : "text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
