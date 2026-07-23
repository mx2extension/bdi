import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about the Bauchi State Development Initiative.",
};

const faqs = [
  { q: "What is the Bauchi State Development Initiative (BDI)?", a: "BDI is a long-term development initiative established under MX2 Extension ENT. to unlock the full economic, social, technological, and human potential of Bauchi State." },
  { q: "How can I invest in Bauchi State?", a: "You can explore our investment sectors and reach out to our team via the Contact page to discuss available opportunities and partnership structures." },
  { q: "What sectors does BDI focus on?", a: "We focus on Agriculture, Solid Minerals, Tourism, Energy, Technology, Infrastructure, Healthcare, and more." },
  { q: "Is BDI a government agency?", a: "BDI operates in strategic collaboration with government development goals but is established to drive private sector-led growth and innovation." },
  { q: "How do I partner with BDI?", a: "Visit our Contact page or reach out via email at info.bdi.invest@gmail.com to discuss potential partnerships, investments, or technical collaborations." },
  { q: "What is the 7-Phase Development Model?", a: "It is BDI's strategic framework for transforming Bauchi State—ranging from foundational land mapping and legal alignment to infrastructure deployment and continuous investor adoption." },
  { q: "How does BDI support local entrepreneurs?", a: "We support local commerce by encouraging digital participation, providing platforms for market access, and fostering an environment where SMEs can thrive." }
];

export default function FAQPage() {
  return (
    <main className="pb-24 overflow-x-hidden">
      {/* Hero */}
      <div className="pt-24 sm:pt-32 min-h-[40vh] pb-16 sm:pb-20 relative bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-normal sm:tracking-widest">Support</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white mt-4">FAQ</h1>
          <p className="text-white/60 mt-4 max-w-xl leading-relaxed text-base sm:text-lg">Frequently Asked Questions</p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-gray-200 bg-white hover:shadow-sm transition-shadow">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900 list-none">
                {faq.q}
                <span className="ml-4 shrink-0 text-gray-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 mb-6">Still have questions?</p>
          <Link 
            href="/contact" 
            className="inline-block border border-accent text-accent px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent hover:text-primary-dark transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}