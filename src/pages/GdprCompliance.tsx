import LegalPageLayout from "@/components/LegalPageLayout";

const GdprCompliance = () => (
  <LegalPageLayout title="GDPR and Your Data">
    <p>
      SmartTrack PNG is based in Papua New Guinea. The EU General Data Protection Regulation (GDPR) does not automatically apply because someone in the EU can view a PNG website. It may apply to particular processing if a business offers goods or services to people in the EU or monitors their behaviour there. This page explains how to raise a GDPR-related request. Our <a href="/privacy-policy">Privacy Policy</a> describes the information handled through this public website.
    </p>

    <h2>Information you provide</h2>
    <p>
      When you request a quote, the website asks for your name, email address, phone number, selected plan, and number of vehicles. You may also provide a company name and a message. The quote form uses EmailJS to send the request and may send a confirmation email. Our Privacy Policy describes other information that may be involved in SmartTrack services.
    </p>

    <h2>Your rights where the GDPR applies</h2>
    <p>
      Depending on the processing and applicable law, you may have rights to be informed, access and correct your data, request erasure or restricted processing, object to certain processing, receive portable data, and withdraw consent where consent is the basis for processing. Some requests are subject to legal conditions and exceptions. You may also have the right to complain to a relevant data protection authority.
    </p>

    <h2>How to make a request</h2>
    <p>
      Email <a href="mailto:info@terunapng.com">info@terunapng.com</a> with the request and enough information for us to locate the relevant records. We may ask for information needed to verify your identity before disclosing or changing personal data. We will assess the request under the law that applies and respond within the applicable time period.
    </p>

    <h2>Further information</h2>
    <p>
      The <a href="https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en" target="_blank" rel="noopener noreferrer">European Commission’s data protection guide</a> explains GDPR principles and individual rights. For questions about SmartTrack's handling of your data, contact us directly.
    </p>
  </LegalPageLayout>
);

export default GdprCompliance;
