
import { Button } from "@/components/ui/button";
import { Monitor, Shield, Users } from "lucide-react";

const CustomerPortalSection = () => {
  const handleAccessDashboard = () => {
    window.open('https://monitoring.smarttrackpng.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="customer-portal" className="py-20 bg-gradient-to-br from-smarttrack-black to-smarttrack-black-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Access Your <span className="text-smarttrack-red">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Monitor your fleet in real-time, view reports, and manage your SmartTrack system from our secure customer portal.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-smarttrack-red rounded-full mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-400">Track your vehicles live on interactive maps</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-smarttrack-red rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Security Controls</h3>
              <p className="text-gray-400">Manage SECO and security features remotely</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-smarttrack-red rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fleet Management</h3>
              <p className="text-gray-400">Comprehensive reports and analytics</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Access Your Account?
            </h3>
            <p className="text-gray-300 mb-6">
              Log in to your SmartTrack monitoring dashboard to view your fleet's status, generate reports, and manage your tracking system.
            </p>
            
            <Button
              onClick={handleAccessDashboard}
              size="lg"
              className="bg-smarttrack-red hover:bg-smarttrack-red-light text-white font-bold px-8 py-4 text-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Access Dashboard
            </Button>
            
            <p className="text-sm text-gray-400 mt-4">
              Need help? Contact our support team at{" "}
              <a href="mailto:info@terunapng.com" className="text-smarttrack-red hover:underline">
                info@terunapng.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPortalSection;
