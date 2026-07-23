import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Bauchi State Development Initiative website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pb-24">
      <div className="container mx-auto px-6 max-w-4xl pt-32">
        <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">Legal</span>
        <h1 className="font-serif text-5xl text-gray-900 mb-12">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed
          [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-4
          [&_p]:mb-6">
          
          <p className="text-sm text-gray-400">Last updated: July 2026</p>

          <h2>Introduction</h2>
          <p>
            The Bauchi State Development Initiative (&quot;BDI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal identification information (name, email address, phone number) when you submit a contact form or job application.</li>
            <li>Non-personal information such as browser type, device information, and IP address for analytics purposes.</li>
            <li>Cookies and similar technologies to improve your browsing experience.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and provide requested services.</li>
            <li>Process job applications and communicate about employment opportunities.</li>
            <li>Improve our website and user experience.</li>
            <li>Send relevant updates about BDI initiatives (with your consent).</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Withdraw consent for data processing at any time.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy or your personal data, please contact us at <a href="mailto:info.bdi.invest@gmail.com" className="text-primary underline">info.bdi.invest@gmail.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}