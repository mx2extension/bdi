import type { Metadata } from "next";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = { title: "About Bauchi State Government" };

const lgas = [
  "Alkaleri", "Bauchi", "Bogoro", "Dambam", "Darazo",
  "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau",
  "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi",
  "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki",
];

const ethnicGroups = [
  "Hausa", "Fulani", "Gerawa", "Sayawa", "Jarawa",
  "Bulewa", "Kare-Kare", "Kanuri", "Warjawa", "Zulawa", "Badawa",
];

const emirates = [
  { name: "Bauchi", description: "The premier emirate and seat of the state capital." },
  { name: "Katagum", description: "A historic emirate in the northern zone of the state." },
  { name: "Misau", description: "Home to the notable Maladumba lake." },
  { name: "Jama'are", description: "Located along the Jama'are river in the northern part." },
  { name: "Ningi", description: "Situated in the southern part with rich cultural heritage." },
  { name: "Dass", description: "Known for its mountainous terrain and unique traditions." },
];

const waterBodies = [
  { name: "Gongola River", type: "River" },
  { name: "Jama'are River", type: "River" },
  { name: "Gubi Dam", type: "Dam" },
  { name: "Tilden Fulani Dam", type: "Dam" },
  { name: "Maladumba Lake", type: "Lake", note: "Located in Misau LGA" },
];

export default function AboutBSG() {
  return (
    <main className="pb-24">
      {/* Hero */}
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-20">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1783840470/images_xowxrp.jpg"
            alt="Bauchi State"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Government</span>
          <h1 className="font-serif text-6xl text-white mt-4">About Bauchi State</h1>
          <p className="text-white/60 mt-4 max-w-xl leading-relaxed">
            Created in 1976 from the North Eastern State, Bauchi State is a land of rich cultural heritage, diverse ecology, and resilient people.
          </p>
        </div>
      </div>

      {/* Stats Bar — ANIMATED COUNTERS */}
      <div className="bg-primary">
        <div className="container mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <AnimatedCounter target={7500000} decimals={1} divisor={1000000} suffix="+" />
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-2">Population</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={20} suffix="+" />
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-2">Local Governments</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={6} suffix="+" />
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-2">Emirate Councils</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={49259} format="comma" suffix=" SQ.KM+" />
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-2">Land Area</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="reveal-on-scroll lg:col-span-2">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Introduction</span>
          <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-6">Overview</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Bauchi State is located between latitudes 9° 3&apos; and 12° 3&apos; north and longitudes 8° 50&apos; and 11° east. It covers a land area of 49,259.01 sq. km, representing 5.3% of Nigeria&apos;s total land mass. What is today known as Bauchi State was created in 1976 from the North Eastern State of Nigeria.
            </p>
            <p>
              According to the 1991 census, the state had a population of 3,836,333 before the creation of Gombe State in 1996. Presently, the population stands at about 7.5 million, growing at 3.3% annually. Half of the population is under the age of 15, and 41.2% fall within the working-age group (20–65 years).
            </p>
            <p>
              From the colonial era up to independence, Bauchi formed part of the Bauchi-Plateau of the then Northern Region until the 1967 state creation exercise, when together with Borno and Adamawa provinces, they constituted the former North Eastern State. Under successive leaders, the state has witnessed steady development in economic, political and socio-cultural spheres.
            </p>
          </div>
        </div>
        <div className="reveal-on-scroll bg-gray-50 p-8 h-fit border border-gray-100" style={{ transitionDelay: "200ms" }}>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-6">Key Demographics</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex justify-between border-b border-gray-200 pb-4"><span>Land Area</span><span className="font-semibold text-gray-900">49,259 km²</span></li>
            <li className="flex justify-between border-b border-gray-200 pb-4"><span>Population</span><span className="font-semibold text-gray-900">7.5 Million</span></li>
            <li className="flex justify-between border-b border-gray-200 pb-4"><span>Growth Rate</span><span className="font-semibold text-gray-900">3.3% Annually</span></li>
            <li className="flex justify-between border-b border-gray-200 pb-4"><span>Ethnic Groups</span><span className="font-semibold text-gray-900">~55 Groups</span></li>
            <li className="flex justify-between border-b border-gray-200 pb-4"><span>Senatorial Zones</span><span className="font-semibold text-gray-900">3 Zones</span></li>
            <li className="flex justify-between border-b border-gray-200 pb-4"><span>House of Reps</span><span className="font-semibold text-gray-900">12 Seats</span></li>
            <li className="flex justify-between"><span>State Assembly</span><span className="font-semibold text-gray-900">31 Members</span></li>
          </ul>
        </div>
      </section>

      {/* Vegetation & Geography */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="reveal-on-scroll">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Ecology & Geography</span>
            <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-12">Vegetation & Landscape</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal-on-scroll">
              <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Sudan Savannah</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Sudan savannah type of vegetation covers the southern part of the state. The vegetation gets richer and richer towards the South, especially along water sources or rivers. Generally, the vegetation is less uniform and grasses are shorter than what obtains further south in the forest zone of the middle belt.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The southern part of the state is also mountainous as a result of the continuation of the Jos Plateau.
                </p>
              </div>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: "150ms" }}>
              <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Sahel Savannah</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Sahel type of savannah, also known as semi-desert vegetation, becomes manifest from the middle of the state as one moves from the South to the Northern part. The characteristics of this type of vegetation comprise isolated stands of thorny shrubs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The northern part of the state is generally sandy, reflecting its proximity to the desert conditions of the far north.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Rainfall */}
      <section className="container mx-auto px-6 py-20">
        <div className="reveal-on-scroll">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Climate</span>
          <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-12">Rainfall & Weather</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal-on-scroll space-y-6 text-gray-600 leading-relaxed">
            <p>
              The vegetation types are conditioned by climatic factors, which in turn determine the amount of rainfall received in the area. In the West African sub-region, rains generally come from the south as they are carried by the South Westerlies. There is, therefore, a progressive dryness towards the north, culminating in desert conditions in the far north.
            </p>
            <p>
              In the south, it is humidly hot during the early part of the rainy season. In the north, the hot, dry and dusty weather lingers on for a while.
            </p>
          </div>
          <div className="reveal-on-scroll space-y-6" style={{ transitionDelay: "150ms" }}>
            <div className="border-l-4 border-accent pl-6">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-2">Southern Zone</h4>
              <p className="text-3xl font-serif text-gray-900">1,300mm</p>
              <p className="text-gray-500 text-sm mt-1">Rainfall per annum. Rains start earlier in April and last longer.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-2">Northern Zone</h4>
              <p className="text-3xl font-serif text-gray-900">700mm</p>
              <p className="text-gray-500 text-sm mt-1">Rainfall per annum. Rains arrive late, usually around June/July.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Political Structure */}
      <section className="bg-primary-dark">
        <div className="container mx-auto px-6 py-20">
          <div className="reveal-on-scroll">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Governance</span>
            <h2 className="font-serif text-3xl text-white mt-3 mb-12">Political Structure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "3", title: "Senatorial Zones", desc: "The state is divided into Northern, Central, and Southern zones, each with a senator representing it in the Senate." },
              { num: "12", title: "House of Representatives", desc: "Bauchi State has twelve representatives in the Federal House of Representatives." },
              { num: "31", title: "State Assembly Members", desc: "The State House of Assembly has thirty-one members representing various constituencies." },
            ].map((item, i) => (
              <div key={item.title} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="border border-white/10 p-8 hover:border-accent/30 transition-colors duration-300">
                  <p className="font-serif text-5xl text-accent mb-4">{item.num}</p>
                  <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Government Areas */}
      <section className="container mx-auto px-6 py-20">
        <div className="reveal-on-scroll">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Administration</span>
          <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-4">Local Government Areas</h2>
          <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
            Bauchi State has 20 Local Government Areas, each serving as the third tier of government and the closest administrative unit to the people.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {lgas.map((lga, i) => (
            <div key={lga} className="reveal-on-scroll" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="bg-gray-50 border border-gray-100 px-4 py-3 text-center text-sm text-gray-700 font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 cursor-default">
                {lga}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emirate Councils */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="reveal-on-scroll">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Traditional Institution</span>
            <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-4">Emirate Councils</h2>
            <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
              Bauchi State comprises six emirate councils, which play vital roles in cultural preservation, conflict resolution, and community governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {emirates.map((emirate, i) => (
              <div key={emirate.name} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm mb-4">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-2">{emirate.name} Emirate</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{emirate.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethnic Groups & Culture */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal-on-scroll">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">People & Culture</span>
            <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-6">Ethnic Groups</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Bauchi State is home to a total of 55 ethnic groups. These groups have varied customs, festivals, historical backgrounds, occupational patterns and beliefs. Despite this diversity, there are cultural similarities in the people&apos;s language, occupational practices, festivals, dress, and there is a high degree of ethnic interaction—especially in marriage and economic existence.
            </p>
            <p className="text-gray-600 leading-relaxed">The major ethnic groups include:</p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: "150ms" }}>
            <div className="flex flex-wrap gap-3 mb-8">
              {ethnicGroups.map((group) => (
                <span key={group} className="bg-primary/5 text-primary border border-primary/20 px-4 py-2 text-sm font-medium">
                  {group}
                </span>
              ))}
              <span className="bg-gray-100 text-gray-400 border border-gray-200 px-4 py-2 text-sm font-medium">+44 more groups</span>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-4">Cultural Highlights</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Varied customs and traditional festivals", "Diverse historical backgrounds and oral traditions", "Distinctive occupational patterns and craftsmanship", "High degree of inter-ethnic marriage and economic interaction", "Shared similarities in dress, language, and festivals"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rivers & Water Bodies */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="reveal-on-scroll">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Natural Resources</span>
            <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-4">Rivers & Water Bodies</h2>
            <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
              The state is watered by a number of rivers and dams. All these provide necessary conditions that support agriculture across the state.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterBodies.map((body, i) => (
              <div key={body.name} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white border border-gray-100 p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-sm shrink-0">
                    {body.type === "River" ? (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                    ) : body.type === "Dam" ? (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-3L16.5 18m0 0L12 13.5m4.5 4.5V4.5" /></svg>
                    ) : (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" /></svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-gray-900">{body.name}</h4>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">{body.type}</p>
                    {body.note && <p className="text-gray-500 text-sm mt-1">{body.note}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Political History Timeline */}
      <section className="container mx-auto px-6 py-20">
        <div className="reveal-on-scroll">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">History</span>
          <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-12">Political Evolution</h2>
        </div>

        <div className="max-w-3xl">
          <div className="relative border-l-2 border-gray-200 pl-8 space-y-12">
            {[
              { year: "Pre-1967", title: "Bauchi-Plateau, Northern Region", description: "From the colonial era up to independence, Bauchi formed part of the Bauchi-Plateau of the then Northern Region." },
              { year: "1967", title: "North Eastern State Created", description: "Together with Borno and Adamawa provinces, Bauchi constituted the former North Eastern State during the 1967 state creation exercise." },
              { year: "1976", title: "Bauchi State Created", description: "Bauchi State was carved out of the North Eastern State, establishing its identity as a distinct entity within the federation." },
              { year: "1991", title: "Census Recorded 3.8 Million", description: "The 1991 national census recorded a population of 3,836,333 for Bauchi State before the creation of Gombe State." },
              { year: "1996", title: "Gombe State Carved Out", description: "Gombe State was created from Bauchi State, reducing its land area and population. The state has since grown to about 7.5 million people." },
              { year: "Present", title: "Steady Development", description: "Under successive leaders, Bauchi State has witnessed steady development in economic, political and socio-cultural spheres, with 20 LGAs, 6 emirate councils, and a vibrant democracy." },
            ].map((event, i) => (
              <div key={event.year} className="reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-primary rounded-full border-4 border-white shadow"></div>
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest">{event.year}</span>
                  <h3 className="font-serif text-xl text-gray-900 mt-1 mb-2">{event.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}