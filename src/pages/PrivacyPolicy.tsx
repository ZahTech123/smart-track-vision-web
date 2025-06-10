
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mr-4">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated on 10 June, 2025</p>

            <p className="mb-6">
              SmartTrack PNG ("SmartTrack", "we," "our," or "us") is committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you interact with us or use our services.
            </p>

            <p className="mb-6">
              This Policy applies to our website (https://smarttrackpng.com and associated subdomains), emails (e.g., support@smarttrackpng.com), events, software, mobile applications, and telematics solutions (collectively, our "Services"). By accessing or using our Services, you agree to the practices described in this Privacy Policy.
            </p>

            <p className="mb-8">
              We handle your personal data in accordance with the Papua New Guinea Data Protection Code, the General Data Protection Regulation (EU GDPR 2016/679) where applicable, and other relevant privacy legislation.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information You Provide to Us Directly</h3>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Full name</li>
              <li>Business or company name</li>
              <li>Billing or payment details</li>
              <li>Job title or role</li>
              <li>Government-issued ID (where required)</li>
              <li>Year of birth and gender</li>
              <li>Email address and phone number</li>
              <li>Password or security credentials</li>
              <li>Location and residential address</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information Collected Automatically</h3>
            
            <h4 className="text-lg font-medium text-gray-700 mb-2">Location Information:</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>IP address</li>
              <li>GPS coordinates (if location tracking is enabled)</li>
              <li>Time zone</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-700 mb-2">Device Information:</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Device make and model</li>
              <li>Unique identifiers (e.g., IMEI, MAC address)</li>
              <li>Operating system type and version</li>
              <li>Network carrier</li>
              <li>Storage and memory data</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-700 mb-2">Usage Data:</h4>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Frequency and duration of app use</li>
              <li>Features accessed</li>
              <li>User interaction logs</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Why We Collect Your Data</h2>
            <p className="mb-4">We process your data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>To provide and manage our Services</li>
              <li>To register and maintain your user account</li>
              <li>To fulfil service or purchase agreements</li>
              <li>To notify you about updates, offers, or similar services</li>
              <li>To respond to your inquiries or service requests</li>
              <li>For internal research, analysis, and service improvements</li>
              <li>To meet legal and regulatory obligations</li>
            </ul>

            <p className="mb-4">Legal bases for processing your data may include:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Your consent (e.g., signing up for an account or marketing list)</li>
              <li>Fulfilling a contract with you</li>
              <li>Our legitimate interest in operating and improving the Services</li>
              <li>Compliance with a legal obligation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How Long We Keep Your Data</h2>
            <p className="mb-6">
              We retain your personal information only as long as necessary to deliver the Services and fulfill legal obligations. Once your data is no longer required, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Rights</h2>
            <p className="mb-4">You have the following rights concerning your personal data:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li><strong>Access</strong> – Request a copy of the data we hold about you</li>
              <li><strong>Correction</strong> – Request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure</strong> – Request deletion of your data</li>
              <li><strong>Restriction</strong> – Request limits on how we use your data</li>
              <li><strong>Objection</strong> – Object to specific types of data processing</li>
              <li><strong>Portability</strong> – Request your data in a structured, machine-readable format</li>
              <li><strong>Withdraw Consent</strong> – Revoke your consent at any time, where applicable</li>
            </ul>
            <p className="mb-6">
              To exercise these rights, contact us at <a href="mailto:privacy@smarttrackpng.com" className="text-smarttrack-red hover:underline">privacy@smarttrackpng.com</a>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Who We Share Your Data With</h2>
            <p className="mb-4">We do not sell your personal information. However, we may share your data with:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Service providers (e.g., payment processors, technical support, analytics services)</li>
              <li>Business affiliates and partners involved in delivering our Services</li>
              <li>Government authorities or regulators where required by law</li>
              <li>Third parties with your explicit consent</li>
            </ul>
            <p className="mb-6">
              All third parties are required to safeguard your data and act in compliance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Automated Decision-Making</h2>
            <p className="mb-6">
              We do not make decisions based solely on automated processing, including profiling, that have legal or similarly significant effects.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Data Security</h2>
            <p className="mb-6">
              We implement technical, organizational, and legal measures to protect your information. These include access controls, encryption, and secure storage practices. However, no system can be guaranteed 100% secure, and we encourage you to use strong passwords and protect your devices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Complaints and Contact</h2>
            <p className="mb-4">
              If you believe your privacy rights have been violated or have any questions, contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="mb-2">
                📧 Email: <a href="mailto:privacy@smarttrackpng.com" className="text-smarttrack-red hover:underline">privacy@smarttrackpng.com</a>
              </p>
              <p>
                📍 Address: SmartTrack PNG, PO Box 619, BOROKO, NCD
              </p>
            </div>
            <p className="mb-6">
              If you are not satisfied with our response, you may contact the NICTA Office in Papua New Guinea or another relevant data protection authority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
