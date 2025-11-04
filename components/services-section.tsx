// "use client"

// import { useState } from "react"
// import { ChevronDown, X } from "lucide-react"

// interface ServiceItem {
//     id: string
//     title: string
//     subtitle: string
//     description: string
//     menuItems: string[]
//     bgColor: string
//     expandedBgColor: string
//     image1: string
//     image2: string
// }

// const services: ServiceItem[] = [
//     {
//         id: "branding",
//         title: "Branding & Identity",
//         subtitle: "Make your mark—boldly and beautifully.",
//         description:
//             "Your brand is so much more than just a logo—it's your personality, your story, your vibe. We help bring that to life with a look and feel that's uniquely you. Whether you're just getting started or ready for a glow-up, we craft everything from logos to full-on brand systems that speak your truth.",
//         menuItems: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Content Marketing"],
//         bgColor: "bg-[#FAE0BE]",
//         expandedBgColor: "bg-[#FAE0BE]",
//         image1: "/mac.jpg",
//         image2: "/macbook1.jpg",
//     },
//     {
//         id: "web",
//         title: "Web Design and Development",
//         subtitle: "Pretty and powerful websites that actually work.",
//         description:
//             "We build websites that don't just look good—they perform. From concept to launch, we create digital experiences that engage your audience and drive results.",
//         menuItems: ["UI/UX Design", "Frontend Development", "Backend Development", "Web Performance", "SEO Optimization"],
//         bgColor: "bg-[#C0ECBF]",
//         expandedBgColor: "bg-[#C0ECBF]",
//         image1: "/web-design-interface.jpg",
//         image2: "/responsive-website-design.png",
//     },
//     {
//         id: "content",
//         title: "Content Creation",
//         subtitle: "Words, visuals, and videos that speak human.",
//         description:
//             "Content that connects. We create compelling stories across all formats—from written content to stunning visuals and engaging videos that resonate with your audience.",
//         menuItems: ["Copywriting", "Photography", "Videography", "Social Media Content", "Blog Writing"],
//         bgColor: "bg-[#F6C2F4]",
//         expandedBgColor: "bg-[#F6C2F4]",
//         image1: "/content-creation-studio.jpg",
//         image2: "/creative-content-production.jpg",
//     },
//     {
//         id: "marketing",
//         title: "Digital Marketing",
//         subtitle: "Get seen. Get clicks. Get results.",
//         description:
//             "Strategic marketing that moves the needle. We combine data-driven insights with creative excellence to build campaigns that reach the right people at the right time.",
//         menuItems: ["Social Media Marketing", "Email Campaigns", "PPC Advertising", "Analytics & Reporting", "Strategy"],
//         bgColor: "bg-[#C7CAFF]",
//         expandedBgColor: "bg-[#C7CAFF]",
//         image1: "/digital-marketing-analytics.png",
//         image2: "/marketing-campaign-dashboard.png",
//     },
// ]

// export default function ServicesSection() {
//     const [expandedId, setExpandedId] = useState<string | null>(null)

//     return (
//         <section className="bg-orange-50 py-16 px-4 md:px-8 lg:px-16">
//             {/* Heading */}
//             <div className="max-w-6xl mx-auto mb-12 flex justify-center">
//                 <div className="relative inline-block text-center">
//                     <h2
//                         className="font-oswald text-4xl md:text-6xl lg:text-8xl font-medium leading-tight"
//                         style={{ color: "#3B001B" }}
//                     >
//                         What we do (and
//                         <br />
//                         do really well)
//                     </h2>
//                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-300 px-3 py-1 rounded-full text-sm font-oswald font-bold text-purple-900 transform -rotate-12">
//                         Services
//                     </div>
//                 </div>
//             </div>


//             {/* Accordion Items */}
//             <div className="max-w-6xl mx-auto space-y-4 ">
//                 {services.map((service) => (
//                     <div key={service.id}>
//                         {/* Collapsed View */}
//                         {expandedId !== service.id && (
//                             <button
//                                 onClick={() => setExpandedId(service.id)}
//                                 className={`w-full ${service.bgColor}  p-6 rounded-2xl flex items-center justify-between hover:shadow-lg transition-all duration-300`}
//                             >
//                                 <div className="text-left">
//                                     <h3 className="font-oswald text-xl md:text-2xl font-bold text-[#3B001B]">{service.title}</h3>
//                                     <p className="text-[#3B001B] text-sm md:text-base font-medium mt-1">{service.subtitle}</p>
//                                 </div>
//                                 <div className="text-[#3B001B] text-3xl flex-shrink-0 ml-4">+</div>
//                             </button>
//                         )}

//                         {/* Expanded View */}
//                         {expandedId === service.id && (
//                             <div
//                                 className={`${service.expandedBgColor} p-8 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500`}
//                             >
//                                 {/* Header */}
//                                 <div className="flex items-start justify-between mb-6 pb-6 border-b-2 border-[#3B001B]">
//                                     <div>
//                                         <h3 className="font-oswald text-2xl md:text-3xl font-bold text-[#3B001B]">{service.title}</h3>
//                                         <p className="text-[#3B001B] text-sm md:text-base font-medium mt-2">{service.subtitle}</p>
//                                     </div>
//                                     <button
//                                         onClick={() => setExpandedId(null)}
//                                         className="text-[#3B001B]  hover:text-purple-700 transition-colors flex-shrink-0 ml-4"
//                                     >
//                                         <X size={32} />
//                                     </button>
//                                 </div>

//                                 {/* Content Grid */}
//                                 <div className="grid grid-cols-1 lg:grid-cols-3">
//                                     {/* Left Sidebar - Menu Items */}
//                                     <div className="lg:col-span-1 flex flex-col items-start space-y-2">
//                                         {service.menuItems.map((item, index) => (
//                                             <button
//                                                 key={index}
//                                                 className="w-1/2 text-left px-4 py-2 bg-white rounded-lg text-[#3B001B] font-medium text-sm md:text-base hover:bg-purple-100 transition-colors"
//                                             >
//                                                 {item}
//                                             </button>
//                                         ))}
//                                     </div>


//                                     {/* Right Content - Description and Images */}
//                                     <div className="lg:col-span-2">
//                                         <p className="text-[#3B001B] font-medium  text-sm md:text-base leading-relaxed mb-6">{service.description}</p>

//                                         {/* Images Grid */}
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                             <div className="relative group">
//                                                 <img
//                                                     src={service.image1 || "/placeholder.svg"}
//                                                     alt={`${service.title} showcase 1`}
//                                                     className="w-full h-48 md:h-64 object-cover rounded-2xl"
//                                                 />
//                                                 <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-purple-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
//                                                     <ChevronDown size={20} className="rotate-90" />
//                                                 </button>
//                                             </div>
//                                             <img
//                                                 src={service.image2 || "/placeholder.svg"}
//                                                 alt={`${service.title} showcase 2`}
//                                                 className="w-full h-48 md:h-64 object-cover rounded-2xl"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }



"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface ServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  bgColor: string
}

interface SubService {
  id: string
  title: string
  description: string
  image: string
}


const services: ServiceItem[] = [
  {
    id: "branding",
    title: "Branding & Identity",
    subtitle: "Make your mark—boldly and beautifully.",
    bgColor: "bg-[#fdebdb]",
  },
  {
    id: "web",
    title: "Social Media",
    subtitle: "Creative content and strategies that stop the scroll.",
    bgColor: "bg-[#d6f0d7]",
  },
  {
    id: "content",
    title: "Websites & Mobile Apps",
    subtitle: "Pretty and powerful digital experiences that work.",
    bgColor: "bg-[#f0d6f0]",
  },
  {
    id: "marketing",
    title: "Performance Marketing",
    subtitle: "Data-driven campaigns that deliver real results.",
    bgColor: "bg-[#d6e2f0]",
  },
]

const subServices: Record<string, SubService[]> = {
  branding: [
    {
      id: "logo",
      title: "Logo Magic",
      description:
        "We create memorable logos and identity kits that visually define your brand's purpose and personality.",
      image: "/Brand Makeover.png",
    },
    {
      id: "pack",
      title: "Pack Attack",
      description:
        "We design packaging and brand collaterals that make your product irresistible — on shelves or screens.",
      image: "/Container (1).png",
    },
    {
      id: "collateral",
      title: "Collateral Crush",
      description:
        "We design brochures, presentations, flyers, and digital decks that turn your brand narrative into conversion power.",
      image: "/Container (2).png",
    },
    {
      id: "identity",
      title: "Identity Kit",
      description:
        "We create brand identity kits with everything from notepads to ID cards — where every detail speaks your brand language.",
      image: "/Container (3).png",
    },
    {
      id: "Branding As A Service",
      title: "Identity Kit",
      description:
        "Monthly subscription-based branding support that adapts to your needs, billed only for usage.",
      image: "/Container (4).png",
    },
    {
      id: "Brand Makeover",
      title: "Identity Kit",
      description:
        "We transform existing brands with complete identity revamps — fresh, relevant, and future-ready.",
      image: "/Container (5).png",
    },
  ],
  web: [
    {
      id: "Post Packs",
      title: "Post Packs",
      description: "Monthly or quarterly bundled social media solutions that make your brand stay consistent, engaging, and relevant.",
      image: "/ui-ux-design-interface.png",
    },
    {
      id: "Pay & Play",
      title: "Pay & Play",
      description: "A flexible social media service billed only on per-post usage with monthly reports.",
      image: "/web-development-code.png",
    },
    {
      id: "CXO Glow",
      title: "CXO Glow",
      description: "We discreetly manage and grow LinkedIn profiles for CXOs, founders, and busy professionals.",
      image: "/backend-server-architecture.jpg",
    },
    {
      id: "Buzz Builder",
      title: "Buzz Builder",
      description: "We create custom social campaigns designed to meet specific objectives within realistic budgets.",
      image: "/seo-analytics-dashboard.png",
    },
  ],
  marketing: [
    {
      id: "Search Surge",
      title: "Search Surge",
      description: "We plan, create, and optimize search ad campaigns that drive real ROI.",
      image: "/placeholder.svg?height=200&width=250&query=writing desk with typewriter",
    },
    {
      id: "Social Spark",
      title: "Social Spark.",
      description: "We craft paid social campaigns that build awareness, engagement, and conversions.",
      image: "/placeholder.svg?height=200&width=250&query=photography studio lighting",
    },
    {
      id: "Data Drill",
      title: "Data Drill",
      description: "We integrate multi-channel analytics for 360° marketing insights and smarter business decisions.",
      image: "/placeholder.svg?height=200&width=250&query=video production camera",
    },
    {
      id: "Growth Grind",
      title: "Growth Grind",
      description: "We create custom goal-based marketing plans that deliver measurable growth.",
      image: "/placeholder.svg?height=200&width=250&query=social media marketing strategy",
    },
  ],
  content: [
    {
      id: "Code Craft",
      title: "Code Craft",
      description: "We design and build websites from scratch — fast, secure, and uniquely yours.",
      image: "/social-media-marketing-campaigns.jpg",
    },
    {
      id: "Plug & Play",
      title: "Plug & Play",
      description: "We develop dynamic websites on platforms like WordPress, Shopify, and Wix for quick, cost-efficient launches.",
      image: "/email-marketing-automation.png",
    },
    {
      id: "Shop Stop",
      title: "Shop Stop",
      description: "A 12-month subscription plan that covers your website, hosting, and ongoing marketing.",
      image: "/ppc-advertising-dashboard.jpg",
    },
    {
      id: "App Attack",
      title: "App Attack",
      description: "We design and develop mobile apps for Android and iOS — built to grow your digital reach.",
      image: "/analytics-dashboard-metrics.jpg",
    },
  ],
}

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="bg-orange-50 py-16 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12 flex justify-center">
        <div className="relative inline-block text-center">
          <h2 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight" style={{ color: "#3B001B" }}>
            What we do (and
            <br />
            do really well)
          </h2>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-300 px-3 py-1 rounded-full text-sm font-bold text-purple-900 transform -rotate-12">
            Services
          </div>
        </div>
      </div>

      {/* Accordion Items */}
      <div className="max-w-8xl mx-auto space-y-4">
        {services.map((service) => (
          <div key={service.id}>
            {/* Collapsed View */}
            {expandedId !== service.id && (
              <button
                onClick={() => setExpandedId(service.id)}
                className={`w-full ${service.bgColor} p-6 md:p-8 rounded-2xl flex items-center justify-between hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-left">
                  <h3 className="font-bold text-xl md:text-2xl text-[#3B001B]">{service.title}</h3>
                  <p className="text-[#3B001B] text-sm md:text-base font-medium mt-1">{service.subtitle}</p>
                </div>
                <div className="text-[#3B001B] text-3xl flex-shrink-0 ml-4">+</div>
              </button>
            )}

            {/* Expanded View */}
            {expandedId === service.id && (
              <div className={`${service.bgColor} p-8 md:p-12 rounded-2xl overflow-hidden animate-expand`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-8 pb-6 border-b-2 border-[#3B001B]">
                  <div>
                    <h3 className="font-bold text-2xl md:text-3xl text-[#3B001B]">{service.title}</h3>
                    <p className="text-[#3B001B] text-sm md:text-base font-medium mt-2">{service.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="text-[#3B001B] hover:text-purple-700 transition-colors flex-shrink-0 ml-4"
                  >
                    <X size={32} />
                  </button>
                </div>

                {/* Grid of Sub Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {subServices[service.id]?.map((subService) => (
                    <div key={subService.id} className="flex flex-col">
                      {/* Title */}
                      <h4 className="font-bold text-lg text-[#3B001B] mb-2 underline">{subService.title}</h4>

                      {/* Description */}
                      <p className="text-[#3B001B] text-sm font-medium leading-relaxed mb-4">
                        {subService.description}
                      </p>

                      {/* Image */}
                      <img
                        src={subService.image || "/placeholder.svg"}
                        alt={subService.title}
                        className=" h-40 md:h-70 md:w-90 object-cover rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
