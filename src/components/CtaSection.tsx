
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-smarttrack-red relative overflow-hidden">
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
            Join hundreds of businesses that trust SmartTrack for their vehicle tracking needs. Get started today with a free demo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-smarttrack-red hover:bg-gray-100 text-lg px-8">
              Get a Free Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
