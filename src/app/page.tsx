import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { ArrowRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import AnimatedCounter from "@/components/AnimatedCounter";

export default async function Home() {
  const supabase = await createClient();

  const [slidesRes, statsRes, sectorsRes, impactRes, newsRes, galleryRes, projectsRes] = await Promise.all([
    supabase.from("hero_slides").select("*").eq("is_published", true).order("sort_order"),
    supabase.from("stats").select("*").order("sort_order"),
    supabase.from("investment_sectors").select("*").eq("is_published", true).order("sort_order"),
    supabase.from("impact_stories").select("*").order("sort_order"),
    supabase.from("news").select("*").eq("is_published", true).order("published_at", { ascending: false }).limit(3),
    supabase.from("gallery").select("*").order("sort_order").limit(10),
    supabase.from("projects").select("*").eq("is_published", true).order("created_at", { ascending: false }).limit(3),
  ]);

  const slides = slidesRes.data || [];
  const stats = statsRes.data || [];
  const sectors = sectorsRes.data || [];
  const impacts = impactRes.data || [];
  const news = newsRes.data || [];
  const gallery = galleryRes.data || [];
  const projects = projectsRes.data || [];

  return (
    <>
      <HeroSlider slides={slides} />

      <section className="bg-primary-dark py-20 relative z-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              <h3 className="font-sans text-5xl text-accent font-light mb-2">
                {stat.prefix}
                <span className="font-sans text-5xl text-accent font-light">
                  <AnimatedCounter target={parseInt(stat.value.replace(/,/g, ""))} />
                </span>
                <span>{stat.suffix}</span>
              </h3>
              <p className="text-xs uppercase tracking-widest text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Mandate</span>
            <h2 className="font-serif text-4xl mb-6 text-gray-900">Driving Bauchi Towards a Prosperous Future</h2>
            <p className="mb-4 leading-relaxed">The Bauchi State Development Initiative (BDI) is a dedicated initiative established to pivot the state&apos;s economy from dependency to self-sufficiency.</p>
            <p className="mb-8 leading-relaxed">Our approach is rooted in transparency, strategic alignment with global sustainability goals, and an unwavering commitment to socio-economic upliftment.</p>
            <Link href="/about/bdi" className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest hover:gap-3 transition-all">
              Learn More About BDI <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="reveal-on-scroll relative h-[500px]" style={{ transitionDelay: "150ms" }}>
            <Image src="https://res.cloudinary.com/drnrbfltr/image/upload/v1783920838/729b4485-708a-4014-b4f1-5aeb36ee77d7_rq7y8y.png" alt="BDI Team" fill className="object-cover" unoptimized />
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-accent -z-10"></div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">Investment Landscape</span>
            <h2 className="font-serif text-4xl mb-4 text-gray-900">Strategic Growth Sectors</h2>
            <div className="w-10 h-px bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <div key={sector.id} className="reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <Link href={`/investments/${sector.slug}`} className="group block bg-white border border-gray-200 p-10 relative overflow-hidden transition-all duration-400 hover:shadow-xl hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent transition-all duration-400 group-hover:h-full"></div>
                  <h3 className="font-serif text-2xl mb-4 text-gray-900">{sector.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">{sector.short_description}</p>
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Opportunities <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="bg-gray-50 py-32">
          <div className="container mx-auto px-6">
            <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
              <div>
                <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">Development</span>
                <h2 className="font-serif text-4xl text-gray-900">Active Projects</h2>
              </div>
              <Link href="/projects" className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest hover:gap-3 transition-all border-b border-primary pb-1 hover:border-accent hover:text-accent">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <div key={project.id} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <Link href={`/projects/${project.id}`} className="group block bg-white border border-gray-200 overflow-hidden relative transition-all duration-400 hover:shadow-xl hover:-translate-y-1 hover:border-transparent h-full">
                    <div className="relative h-56 overflow-hidden">
                      <Image 
                        src={project.image_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized 
                      />
                    </div>
                    <div className="p-8 flex flex-col h-full">
                      <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-6 flex-grow">{project.description}</p>
                      <span className="text-primary text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                        View Project <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal-on-scroll">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Footprint</span>
            <h2 className="font-serif text-4xl mb-12 text-gray-900">Creating Measurable Impact</h2>
            <div className="space-y-8">
              {impacts.slice(0, 3).map((item, i) => (
                <div key={item.id} className="flex gap-6 pb-8 border-b border-gray-200 group">
                  <span className="font-serif text-4xl text-gray-200 group-hover:text-accent/30 transition-colors">0{i + 1}</span>
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/impact" className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest mt-8 hover:gap-3 transition-all">
              See Full Impact <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: "150ms" }}>
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">Media & Updates</span>
            <h3 className="font-serif text-3xl mb-8 text-gray-900">Latest News</h3>
            <div className="space-y-8">
              {news.map((article) => (
                <Link key={article.id} href={`/media/news/${article.slug}`} className="flex gap-6 group">
                  <div className="w-24 h-24 flex-shrink-0 relative overflow-hidden">
                    <Image src={article.image_url} alt={article.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" unoptimized />
                  </div>
                  <div>
                    <span className="text-xs text-accent font-semibold uppercase tracking-widest">
                      {new Date(article.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                    <h4 className="font-serif text-lg mt-1 group-hover:text-primary transition-colors text-gray-900">{article.title}</h4>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/media/news" className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest mt-8 hover:gap-3 transition-all">
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- HORIZONTAL SCROLLABLE GALLERY SECTION --- */}
      {gallery.length > 0 && (
        <section className="py-32 bg-primary-dark overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
              <div>
                <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">Visual Stories</span>
                <h2 className="font-serif text-4xl text-white">Capturing Our Journey</h2>
              </div>
              <Link 
                href="/media/gallery" 
                className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest hover:gap-3 transition-all border-b border-accent pb-1 hover:text-white hover:border-white"
              >
                View Full Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Scrollable Track - Hides scrollbar using pure Tailwind arbitrary variants */}
          <div className="pl-6 md:pl-[calc((100vw-1200px)/2+24px)] flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
            {gallery.map((item, i) => (
              <div 
                key={item.id} 
                className="reveal-on-scroll group relative min-w-[320px] md:min-w-[420px] h-[450px] md:h-[500px] flex-shrink-0 overflow-hidden cursor-pointer snap-start"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Image 
                  src={item.image_url} 
                  alt={item.caption || "Gallery Image"} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  sizes="420px"
                  unoptimized 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-white text-base font-medium leading-relaxed drop-shadow-lg">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
            <div className="min-w-[calc((100vw-1200px)/2)] md:min-w-[24px] flex-shrink-0"></div>
          </div>
        </section>
      )}

      <section className="bg-primary py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-5xl text-white mb-6">Ready to Invest in Bauchi?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">Join a growing list of visionary investors shaping the future of Northern Nigeria.</p>
          <Link href="/contact" className="inline-block border border-accent text-accent px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent hover:text-primary-dark transition-all">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}