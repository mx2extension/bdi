import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Bauchi State Development Initiative website.",
};

export default function TermsOfUsePage() {
  return (
    <main className="pb-24">
      <div className="container mx-auto px-6 max-w-4xl pt-32">
        <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">Legal</span>
        <h1 className="font-serif text-5xl text-gray-900 mb-12">Terms of Use</h1>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed
          [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-4
          [&_p]:mb-6">
          
          <p className="text-sm text-gray-400">Last updated: July 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the Bauchi State Development Initiative (BDI) website, you accept and agree to be bound by these terms and conditions. If you do not agree, please do not use this website.
          </p>

          <h2>Use of Website</h2>
          <p>
            You may use this website for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair the site or interfere with any other party&apos;s use of the site.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of BDI or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h2>Investment Information Disclaimer</h2>
          <p>
            The information provided on this website regarding investment opportunities is for general informational purposes only. It does not constitute investment advice, an offer to sell, or a solicitation of an offer to buy any securities or financial instruments. All investment decisions should be made after independent due diligence and consultation with qualified advisors.
          </p>

          <h2>External Links</h2>
          <p>
            This website may contain links to third-party websites. These links are provided for convenience only. BDI does not endorse or assume responsibility for the content of external websites.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            BDI shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use this website, including but not limited to damages for loss of profits, data, or other intangible losses.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Bauchi State.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            BDI reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site after changes constitutes acceptance of the new terms.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, please contact us at <a href="mailto:info.bdi.invest@gmail.com" className="text-primary underline">info.bdi.invest@gmail.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}