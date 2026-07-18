import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the leadership driving the Bauchi State Development Initiative's mandate for economic transformation.",
};

const team = [
  {
    name: "Mary Ngozichukwu Okorie",
    role: "Director of Operations",
    bio: "Manages internal operations, stakeholder engagement, and the seamless execution of BDI's programmatic interventions.",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783866068/c96ec03f-dc64-4451-a9de-55f781ed3f23.png",
    linkedin: "https://www.linkedin.com/in/okorie-mary-ngozi/",
  },
  {
    name: "Hyicenth Munachi Nwauzor",
    role: "President MX2 EXTENSION ENT.",
    bio: "Oversees the identification, due diligence, and facilitation of high-value investment opportunities across agriculture, solid minerals, infrastructure sectors etc",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783865460/87e2996c-2149-4c14-8bc4-29d3492fe21b.png",
    linkedin: "https://www.linkedin.com/in/hyicenth-casa/",
  },
  {
    name: "Chinemerem Nwankpa (King)",
    role: "Product Manager, MX2 EXTENSION ENT.",
    bio: "Leads the overarching strategy and execution of the Bauchi State Development Initiative, fostering global partnerships and aligning investments with the State Development Plan 2033.",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783864945/593eb828-05ce-470f-83d7-a2da65f33daa.png",
    linkedin: "https://www.linkedin.com/in/chinemerem-king-67a982248/",
  },
  {
    name: "Amarachi Sunday",
    role: "D.O.P Extend Love Initiative",
    bio: "Responsible for data-driven insights, policy formulation, and ensuring BDI's initiatives align with global sustainable development standards.",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783866796/3e58da7f-1e04-49a9-9518-7910b7743888.png",
    linkedin: "https://www.linkedin.com/in/amarachi-sunday-8b30891a6/",
  },
];

export default function TeamPage() {
  return (
    <main className="pb-24">
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-20">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" alt="Team" fill className="object-cover" unoptimized />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">The Firm</span>
          <h1 className="font-serif text-6xl text-white mt-4">Leadership Team</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl">The experts driving Bauchi's economic transformation.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-gray-600 leading-relaxed text-lg">
            Our leadership comprises seasoned professionals from finance, public administration, and international development. They bring a shared commitment to transparency, rigorous analysis, and the socio-economic upliftment of Bauchi State.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-8 overflow-hidden border border-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  unoptimized
                />
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-5 w-9 h-9 rounded-full border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition-colors duration-300"
                aria-label={`Connect with ${member.name} on LinkedIn`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-24 p-12 bg-gray-50 border border-gray-100 text-center">
          <h3 className="font-serif text-2xl text-gray-900 mb-4">Join the Team</h3>
          <p className="text-gray-600 mb-8">We are always looking for talented individuals who share our vision for Bauchi State.</p>
          <Link href="/careers" className="inline-block bg-primary text-white px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors">
            View Open Positions
          </Link>
        </div>
      </div>
    </main>
  );
}