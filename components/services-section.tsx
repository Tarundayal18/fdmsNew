
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
      image: "/services/1/Logo (2).png",
    },
    {
      id: "pack",
      title: "Pack Attack",
      description:
        "We design packaging and brand collaterals that make your product irresistible — on shelves or screens.",
      image: "/services/1/Pack.png",
    },
    {
      id: "collateral",
      title: "Collateral Crush",
      description:
        "We design brochures, presentations, flyers, and digital decks that turn your brand narrative into conversion power.",
      image: "/services/1/Collateral Crush.png",
    },
    {
      id: "identity",
      title: "Identity Kit",
      description:
        "We create brand identity kits with everything from notepads to ID cards — where every detail speaks your brand language.",
      image: "/services/1/Identity Kit.png",
    },
    {
      id: "Branding As A Service",
      title: "Branding As A Service",
      description:
        "Monthly subscription-based branding support that adapts to your needs, billed only for usage.",
      image: "/services/1//Branding As A Service.png",
    },
    {
      id: "Brand Makeover",
      title: "/services/1/Brand Makeover",
      description:
        "We transform existing brands with complete identity revamps — fresh, relevant, and future-ready.",
      image: "/services/1/Branding Makeover.png",
    },
  ],
  web: [
    {
      id: "Post Packs",
      title: "Post Packs",
      description: "Monthly or quarterly bundled social media solutions that make your brand stay consistent, engaging, and relevant.",
      image: "/services/2/Post Packs.png",
    },
    {
      id: "Pay & Play",
      title: "Pay & Play",
      description: "A flexible social media service billed only on per-post usage with monthly reports.",
      image: "/services/2/Pay & Play.png",
    },
    {
      id: "CXO Glow",
      title: "CXO Glow",
      description: "We discreetly manage and grow LinkedIn profiles for CXOs, founders, and busy professionals.",
      image: "/services/2/CXO.png",
    },
    {
      id: "Buzz Builder",
      title: "Buzz Builder",
      description: "We create custom social campaigns designed to meet specific objectives within realistic budgets.",
      image: "/services/2/Buzz.png",
    },
  ],
  marketing: [
    {
      id: "Search Surge",
      title: "Search Surge",
      description: "We plan, create, and optimize search ad campaigns that drive real ROI.",
      image: "/services/4/Search Surge.png",
    },
    {
      id: "Social Spark",
      title: "Social Spark.",
      description: "We craft paid social campaigns that build awareness, engagement, and conversions.",
      image: "/services/4/Social Spark..png",
    },
    {
      id: "Data Drill",
      title: "Data Drill",
      description: "We integrate multi-channel analytics for 360° marketing insights and smarter business decisions.",
      image: "/services/4/Data Drill.png",
    },
    {
      id: "Growth Grind",
      title: "Growth Grind",
      description: "We create custom goal-based marketing plans that deliver measurable growth.",
      image: "/services/4/Growth Grind.png",
    },
  ],
  content: [
    {
      id: "Code Craft",
      title: "Code Craft",
      description: "We design and build websites from scratch — fast, secure, and uniquely yours.",
      image: "/services/3/Code Craft.png",
    },
    {
      id: "Plug & Play",
      title: "Plug & Play",
      description: "We develop dynamic websites on platforms like WordPress, Shopify, and Wix for quick, cost-efficient launches.",
      image: "/services/3/Plug and Play.png",
    },
    {
      id: "Shop Stop",
      title: "Shop Stop",
      description: "A 12-month subscription plan that covers your website, hosting, and ongoing marketing.",
      image: "/services/3/Shop Stop.png",
    },
    {
      id: "App Attack",
      title: "App Attack",
      description: "We design and develop mobile apps for Android and iOS — built to grow your digital reach.",
      image: "/services/3/App Attack.png",
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
          <h2 className="font-bold text-4xl font-oswald md:text-6xl lg:text-8xl leading-tight" style={{ color: "#3e1827" }}>
            What we do
            <br />
            (and do really well)
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
