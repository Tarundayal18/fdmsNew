"use client";

import { useRouter } from "next/navigation";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
import FooterSection from "@/components/footer-section";
import MinimumProjectsGrid from "@/components/minimum-project-grid";
import Navbar from "@/components/navbar";
import ProjectsGridSection from "@/components/projects-grid-section";
import ServicesSection from "@/components/services-section";
import StepsSection from "@/components/steps-section";
import Tesiminiols from "@/components/testiminiols";

export default function BrandingIdentityPage() {

  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: "LOGO MAGIC",
      text: "We create memorable logos and identity kits that visually define your brand's purpose and personality.",
      image: "/Link02.png",
    },
    {
      id: 2,
      title: "Pack Attack",
      text: "We design packaging and brand collaterals that make your product irresistible — on shelves or screens.",

      image: "/Link (1).png",
    },
    {
      id: 3,
      title: "Collateral Crush",
      text: "We design brochures, presentations, flyers, and digital decks that turn your brand narrative into conversion power.",

      image: "/Link (6).png",
    },
    {
      id: 4,
      title: "Identity Kit",
      text: "We create brand identity kits with everything from notepads to ID cards — where every detail speaks your brand language.",

      image: "/Link.png",
    },
    {
      id: 5,
      title: "Branding As A Service",
      text: "Monthly subscription-based branding support that adapts to your needs, billed only for usage.",

      image: "/Link (3).png",
    },
    {
      id: 6,
      title: "Brand Makeover",
      text: "We transform existing brands with complete identity revamps — fresh, relevant, and future-ready.",
      image: "/Link (4).png",
    },
  ];

  const handleCardClick = (id: number) => {
    router.push(`/services/mainServices?id=${id}`);
  };



  return (
    <main className="min-h-screen bg-[#fefce8]">
      {/* Hero Section - Tailored Solutions */}
      <Navbar />

      {/* Header Section */}
      <div className="relative bg-[#fdebdb] pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-oswald font-bold text-xl text-[#0d9488]">
            OUR SERVICES!
          </p>
          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-7xl font-bold text-[#2b0012] mb-4">
            Branding & Identity
          </h1>
          <p className="font-oswald text-xl text-[#2b0012]">
            Make your mark—boldly and beautifully.
          </p>
        </div>

        {/* Wavy divider */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16 sm:h-20 text-yellow-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative  py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-oswald sm:text-3xl lg:text-5xl font-bold text-[#4a2c2a] leading-tight">
                TAILORED SOLUTIONS FOR{" "}
                <span className="text-[#a08474] font-oswald">YOUR BUSINESS</span>
              </h1>
              <p className="text-lg font-oswald text-[#6b5144] max-w-xl leading-relaxed">
                At FdMS, we are more than a creative agency—we are your growth partners.
                Founded with a mission to transform ideas into impactful results, we
                specialize in delivering innovative strategies that drive measurable success.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center lg:[30px] lg:ml-[30px]">
              <img
                src="/Containering4.jpg"
                alt="Business Solutions Illustration"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <section className="bg-stone-50 py-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="relative w-full rounded-[2rem] overflow-hidden duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-90 sm:h-96 lg:h-[24rem] object-cover"
              />

              <div className="absolute top-8 left-8 right-8 text-white">
                {/* Title: small increase */}
                <h2 className="
    font-oswald font-bold
    text-[2.2rem]
    sm:text-[2.6rem]
    lg:text-[2.8rem]
    xl:text-[3.0rem]
    leading-tight
  "
                >{card.title}</h2>

                {/* Description: small increase */}
                <p className="
    mt-3 font-oswald
    text-[1.5rem]
    sm:text-[1.6rem]
    lg:text-[1.7rem]
    xl:text-[1.8rem]
    2xl:text-[1.8rem]
    max-w-[90%]
    leading-snug
    mt-4
  ">{card.text}</p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(card.id);
                }}
                className="absolute bottom-8 right-8 bg-white text-black rounded-full w-11 h-11 flex items-center justify-center hover:scale-110 transition-transform"
              >
                {/* Arrow: slight increase */}
                <span className="text-[1.4rem]">→</span>
              </button>
            </div>

          ))}
        </div>
      </section>

      <MinimumProjectsGrid />
      <StepsSection />
      <Tesiminiols />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}