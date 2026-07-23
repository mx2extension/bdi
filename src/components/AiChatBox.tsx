"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

/* ======================================================================
// COMPREHENSIVE WEBSITE KNOWLEDGE BASE
// ====================================================================== */

const siteLinks: Record<string, string> = {
  home: "/",
  investments: "/investments",
  investmentMap: "/investment-map",
  projects: "/projects",
  mostRecent: "/media/news",
  firm: "/firm/history",
  firmTeam: "/firm/team",
  aboutBdi: "/about/bdi",
  aboutBsg: "/about/bsg",
  mediaGallery: "/media/gallery",
  careers: "/careers",
  innovation: "/innovation",
  contact: "/contact",
  faqs: "/faqs",
  privacy: "/privacy-policy",
  terms: "/terms-of-use",
  impact: "/impact",
};

type ChatMessage = {
  id: number;
  role: "user" | "bot";
  text: string;
  isHtml?: boolean;
};

type KnowledgeItem = {
  keywords: string[];
  text: string;
  vision?: string;
  mission?: string;
  link: string;
};

const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ["bdi", "initiative", "mandate", "mission", "vision", "mx2", "about bdi", "who we are", "what is bdi", "future", "prosperous"],
    text: "The Bauchi State Development Initiative (BDI) is a long-term development initiative established under MX2 Extension ENT. Its clear mission is to unlock the full economic, social, technological, and human potential of Bauchi State. BDI believes Bauchi possesses the resources, talent, strategic location, and opportunities required to become one of Africa's leading centres for investment, innovation, entrepreneurship, education, and sustainable development. Their goal is to help position Bauchi as a globally recognised destination for business, opportunity, and progress.",
    vision: "To build a globally recognised Bauchi State that attracts investment, creates opportunities, empowers people, and serves as a leading example of sustainable development in Africa.",
    mission: "To promote the long-term development of Bauchi State by connecting people, businesses, investors, innovators, government institutions, development partners, and communities through practical initiatives that create measurable economic and social impact.",
    link: "aboutBdi"
  },
  {
    keywords: ["7-phase", "framework", "model", "strategic", "phases", "development model", "plan", "approach"],
    text: "BDI operates on a controlled, strategically phased 7-Phase Development Model: 1. Land Mapping & Digital Structuring 2. Legal Alignment & Governance 3. Controlled Public Awareness 4. Early Mover Sector Activation 5. Infrastructure & Migration 6. Investor Adoption & Reveal. There is also a Continuous Development Flywheel ensuring self-sustaining cycle of growth, reinvestment, and expansion.",
    link: "aboutBdi"
  },
  {
    keywords: ["land", "zoning", "mapping", "digital", "platform", "survey", "classified", "parcel"],
    text: "The Strategic Land Zoning & Sector Mapping Platform is the foundational phase. Every parcel of land in Bauchi State is surveyed, zoned, and classified (residential, commercial, industrial, mixed-use) into a private digital platform. This enables smart allocation and strategic decision-making for organized, future-ready development.",
    link: "aboutBdi"
  },
  {
    keywords: ["building", "sectors", "focus", "areas", "medical", "healthcare", "research", "african medicine", "security", "technology", "industries", "factories", "infrastructure", "roads", "tourism", "hospitality", "revenue", "media", "ngo", "upgrade", "modern", "businesses", "commerce"],
    text: "BDI's strategic plan spans 12 critical sectors: Medical & Healthcare, Research into African Medicine, Security Integration, Technology Development, Industries & Factories, Infrastructure & Roads, Tourism & Hospitality, Revenue Generation, Media & Communications, NGO & Development Partners, Upgrade & Modern Development, and Businesses & Commerce.",
    link: "aboutBdi"
  },
  {
    keywords: ["government", "goals", "align", "collaboration", "alongside"],
    text: "BDI supports and complements the broader development aspirations of Bauchi State. The vision aligns with the state's drive toward Economic Growth, Infrastructure Development, Youth Empowerment, Digital Transformation, Investment Promotion, and Improved Living Standards. BDI believes meaningful development is achieved when government, the private sector, communities, development organisations, and citizens work together toward shared goals.",
    link: "aboutBdi"
  },
  {
    keywords: ["investment", "promotion", "attract", "investors", "sectors", "agriculture", "energy", "tourism", "healthcare", "ict", "mining", "manufacturing", "education"],
    text: "One of BDI's core objectives is to showcase Bauchi State as one of Nigeria's most promising investment destinations. Target sectors include Agriculture, Technology, Manufacturing, Education, Tourism, Healthcare, Renewable Energy, Housing, Infrastructure, Commerce, and Small Business Development. BDI attracts Local Investors, African Investors, International Businesses, Development Organisations, Strategic Partners, and Philanthropic Institutions.",
    link: "investments"
  },
  {
    keywords: ["innovation", "technology", "findone", "campus", "findonecampus", "digital", "platform", "jobs", "scholarships", "talent"],
    text: "BDI believes technology plays a major role in modern development. They support FindOne Campus, a platform under MX2 Extension ENT. that connects students, graduates, job seekers, professionals, employers, and service providers. Users can discover job opportunities, access scholarships, find internships, explore training, access educational resources, and connect clients with skilled professionals.",
    link: "innovation"
  },
  {
    keywords: ["commerce", "entrepreneurship", "marketplace", "buy", "sell", "digital", "economy"],
    text: "BDI supports local commerce by encouraging digital participation in the economy. Their ecosystem includes an online marketplace where individuals can advertise and resell products, making it easier for businesses and residents within Bauchi State to buy, sell, and connect through digital platforms.",
    link: "aboutBdi"
  },
  {
    keywords: ["social", "impact", "community", "eli7", "extend love", "foundation", "humanitarian", "vulnerable"],
    text: "Through the Extend Love Initiative Foundation (under MX2 Extension ENT.), BDI carries out humanitarian and community development programmes aimed at supporting vulnerable communities and promoting social impact. Contact: eli7foundation@gmail.com.",
    link: "aboutBdi"
  },
  {
    keywords: ["ecosystem", "mx2", "extension", "partnership", "model"],
    text: "BDI operates within the broader ecosystem of MX2 Extension ENT., an organisation committed to building innovative solutions that create lasting value. Focus areas include Economic Development, Investment Promotion, Technology, Employment, Entrepreneurship, Community Outreach, Humanitarian Support, Digital Innovation, Commerce, and Youth Empowerment.",
    link: "aboutBdi"
  },
  {
    keywords: ["commitment", "promise", "goal", "purpose", "future", "generations"],
    text: "BDI is committed to creating lasting impact rather than temporary projects. They are building systems, partnerships, platforms, and opportunities to serve future generations. Guiding purpose: To help Bauchi State exceed expectations, become globally competitive, and emerge as one of Africa's leading centres of opportunity, investment, innovation, and sustainable development.",
    link: "aboutBdi"
  },
  {
    keywords: ["bauchi", "state", "where", "located", "position", "country", "nigeria", "africa", "geography", "coordinates"],
    text: "Bauchi State is located between latitudes 9° 3' and 12° 3' north and longitudes 8° 50' and 11° east in Northern Nigeria. It covers a land area of 49,259.01 sq. km, representing 5.3% of Nigeria's total land mass.",
    link: "aboutBsg"
  },
  {
    keywords: ["population", "people", "demographics", "census", "growth", "how many", "size"],
    text: "Bauchi State has a population of about 7.5 million people, growing at 3.3% annually. Half of the population is under the age of 15, and 41.2% fall within the working-age group (20–65 years).",
    link: "aboutBsg"
  },
  {
    keywords: ["local government", "lga", "20", "areas", "alkaleri", "list", "names"],
    text: "Bauchi State has 20 Local Government Areas: Alkaleri, Bauchi, Bogoro, Dambam, Darazo, Dass, Gamawa, Ganjuwa, Giade, Itas/Gadau, Jama'are, Katagum, Kirfi, Misau, Ningi, Shira, Tafawa Balewa, Toro, Warji, and Zaki.",
    link: "aboutBsg"
  },
  {
    keywords: ["geography", "sudan", "sahel", "savannah", "vegetation", "landscape", "terrain", "mountainous"],
    text: "The state features two main vegetation zones: The Sudan savannah in the south (richer, taller grasses, mountainous due to the Jos Plateau continuation) and the Sahel savannah in the north (semi-desert, sandy, isolated thorny shrubs). Rainfall varies from 1,300mm in the south to 700mm in the north.",
    link: "aboutBsg"
  },
  {
    keywords: ["governance", "political", "structure", "senatorial", "house", "assembly", "representatives", "zones"],
    text: "Bauchi has 3 Senatorial Zones (Northern, Central, Southern), 12 seats in the House of Representatives, and 31 members in the State House of Assembly. It has 20 Local Government Areas and 6 Emirate Councils (Bauchi, Katagum, Misau, Jama'are, Ningi, and Dass) that handle cultural preservation and community governance.",
    link: "aboutBsg"
  },
  {
    keywords: ["history", "created", "1976", "colonial", "pre-1967", "north eastern", "gombe", "timeline"],
    text: "Pre-1967: Part of Bauchi-Plateau, Northern Region. 1967: Became North Eastern State (with Borno & Adamawa). 1976: Bauchi State officially created. 1991: Census recorded 3.8 million. 1996: Gombe State carved out. Present: Steady growth with ~7.5 million people.",
    link: "aboutBsg"
  },
  {
    keywords: ["ethnic", "groups", "tribes", "hausa", "fulani", "gerawa", "sayawa", "jarawa", "bulewa", "kare-kare", "kanuri", "warjawa", "zulawa", "55", "diversity"],
    text: "Bauchi is home to 55 ethnic groups with varied customs, festivals, and beliefs. Major groups include Hausa, Fulani, Gerawa, Sayawa, Jarawa, Bulewa, Kare-Kare, Kanuri, Warjawa, and Zulawa. There is a high degree of inter-ethnic interaction, especially in marriage and economic existence.",
    link: "aboutBsg"
  },
  {
    keywords: ["emirate", "councils", "traditional", "rulers", "bauchi", "katagum", "misau", "jama'are", "ningi", "dass", "6"],
    text: "The 6 Emirate Councils are: Bauchi (premier emirate, seat of capital), Katagum (historic northern zone), Misau (home to Maladumba lake), Jama'are (along Jama'are river), Ningi (southern heritage), and Dass (mountainous terrain).",
    link: "aboutBsg"
  },
  {
    keywords: ["rivers", "dams", "water", "gongola", "jama'are", "gubi", "tilden", "fulani", "maladumba", "natural", "resources"],
    text: "Key water bodies: Gongola River, Jama'are River, Gubi Dam, Tilden Fulani Dam, and Maladumba Lake (in Misau LGA).",
    link: "aboutBsg"
  },
  {
    keywords: ["contact", "email", "phone", "reach", "talk", "address"],
    text: "You can reach BDI via email at info@bdi.gov.ng, or visit the Contact Page to send a direct message.",
    link: "contact"
  },
  {
    keywords: ["page", "link", "navigate", "find", "where is"],
    text: "Home | About (BSG & BDI) | Investments (Sectors & Map) | Projects (Active & Details) | Firm (History & Team) | Media (News & Gallery) | Careers | Innovation | Contact | FAQ",
    link: "home"
  }
];

// ======================================================================
// INTELLIGENT MATCHING & RESPONSE GENERATOR
// ======================================================================

const getBotResponse = (input: string): { text: string; isHtml: boolean } => {
  const q = input.toLowerCase().trim().replace(/[?!,.]/g, "");
  const words = q.split(/\s+/);

  let bestMatch: KnowledgeItem | null = null;
  let bestScore = 0;

  knowledgeBase.forEach((item) => {
    let score = 0;
    const textData = item.text.toLowerCase();
    const keywords = item.keywords;

    const phraseMatch = keywords.some(kw => q.includes(kw));
    if (phraseMatch) score += 15;

    words.forEach(word => {
      if (word.length < 2) return;
      if (keywords.some(kw => kw.includes(word))) score += 5;
      if (textData.includes(word)) score += 2;
    });

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  if (bestMatch) {
    const typedMatch = bestMatch as KnowledgeItem;
    const linkTextMap: Record<string, string> = {
      aboutBdi: "Learn more about BDI",
      investments: "View Investment Sectors",
      innovation: "Discover Innovation Hub & FindOne Campus",
      contact: "Contact BDI",
      aboutBsg: "Explore Bauchi State Profile",
      home: "View Site Map",
    };

    const linkText = linkTextMap[typedMatch.link] || "Learn More";
    const linkPath = siteLinks[typedMatch.link] || "/";
    const formattedText = typedMatch.text.replace(/\n/g, " ");

    return {
      text: `${formattedText} <div style="margin-top: 12px;"><a href="${linkPath}" class="text-primary font-semibold hover:underline">${linkText} →</a></div>`,
      isHtml: true
    };
  }

  if (/^(hi|hello|hey|good (morning|afternoon|evening))/.test(q)) {
    return { text: "Welcome! I'm the BDI Assistant. I know everything about Bauchi State's demographics, governance, BDI's 7-Phase Development Model, investment sectors, and all site features. Ask me anything!", isHtml: false };
  }

  return {
    text: `I can provide detailed answers about Bauchi State (population, geography, history, 55 ethnic groups, 6 Emirate Councils, etc.), BDI's 7-Phase Development Model, Investment Sectors, or help you navigate the website. Try asking:<ul style="margin-top: 12px; padding-left: 20px; list-style: disc; color: #4a5568; font-size: 14px; display: flex; flex-direction: column; gap: 8px;"><li>"What is the population of Bauchi State?"</li><li>"How many ethnic groups are in Bauchi?"</li><li>"Explain the 7-Phase Development Model"</li><li>"What are the 20 Local Government Areas?"</li><li>"How do I download an investment proposal?"</li></ul>`,
    isHtml: true
  };
};

// ======================================================================
// COMPONENT UI
// ======================================================================

const RenderBotText = ({ text }: { text: string }) => {
  const parts = text.split(/(<[^>]+>.*?<\/[^>]+>)/g);
  return (
    <div className="text-sm text-gray-700 leading-relaxed">
      {parts.map((part, i) => {
        if (part.includes("<a ") && part.includes("href=")) {
          const hrefMatch = part.match(/href="([^"]+)"/);
          const textMatch = part.replace(/<[^>]+>/g, "").trim();
          if (hrefMatch && textMatch) {
            return (
              <a
                key={i}
                href={hrefMatch[1]}
                className="text-primary font-semibold hover:underline"
              >
                {textMatch}
              </a>
            );
          }
        }
        return <span key={i} dangerouslySetInnerHTML={{ __html: part }} />;
      })}
    </div>
  );
};

export default function AiChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, role: "bot", text: "Hello! I'm the BDI Assistant. I know everything about Bauchi State and BDI. Ask me about demographics, history, the 7-Phase Model, investments, or any page on this site.", isHtml: false }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { id: Date.now(), role: "user", text: input.trim(), isHtml: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMsg.text);
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: response.text, isHtml: response.isHtml }]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-0 ${
          isOpen ? "bg-gray-800 rotate-0" : "bg-primary hover:bg-primary-dark"
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Corrected Chat SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="white" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.58 1.651-.184.704-.587 1.706-1.078 2.519a.5.5 0 0 0 .575.727c1.393-.38 2.628-.962 3.486-1.428a2.5 2.5 0 0 1 1.226-.299c.626 0 1.25.083 1.938.15Z" />
            </svg>
            <span className="absolute top-3 right-3 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-[9999] w-[calc(100%-3rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ height: "500px" }}
      >
        {/* Header */}
        <div className="bg-primary-dark px-6 py-4 flex items-center gap-3 shrink-0">
          <div className="relative w-9 h-9">
            <Image 
              src="https://res.cloudinary.com/drnrbfltr/image/upload/v1781946164/file_00000000917071f492d4f57a5487aa02_btpy4b.png" 
              alt="BDI Bot" 
              fill 
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold leading-tight">BDI Assistant</h4>
            <p className="text-white/50 text-xs">Online now</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-gray-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "bot" && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09l.813-2.846zm0 0L16.5 7.5l-2.846.813a4.5 4.5 0 00-3.09 3.09l2.846-.813z" />
                  </svg>
                </div>
              )}
              <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user" ? "bg-primary text-white rounded-br-none" : "bg-white text-gray-700 border border-gray-100 shadow-sm rounded-bl-none"
              }`}>
                {msg.isHtml ? <RenderBotText text={msg.text} /> : msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09l.813-2.846zm0 0L16.5 7.5l-2.846.813a4.5 4.5 0 00-3.09 3.09l2.846-.813z" />
                </svg>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about Bauchi State, BDI, investments..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none rounded-xl px-4 py-3 text-sm transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-primary hover:bg-primary-dark disabled:bg-gray-300 text-white w-11 h-11 rounded-xl flex items-center justify-center transition-colors shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}