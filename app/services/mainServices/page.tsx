'use client'

import { Suspense } from "react";
import AnimatedIconsSection from "@/components/animated-icons-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import StepsSection from "@/components/steps-section";
import Tesiminiols from "@/components/testiminiols";
import { servicePageData } from "@/data/servicepageData";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


function MainServiceContent() {

  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id")); // default 1 agar id na mile

  const service = servicePageData.find((item) => item.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false)

   // NEW ⭐ Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // NEW ⭐ Web3Forms Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f",
      ...formData,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsModalOpen(false);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };


  if (!service) {
    return <p className="text-center text-xl py-10">Service not found</p>;
  }

 

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal */}
          <div
            className="bg-[#FFF8B8] rounded-lg shadow-2xl w-full max-w-sm relative p-4 md:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-[#3D1A1F] hover:text-[#5D2A2F] text-xl font-bold transition-colors"
            >
              ✕
            </button>

            {/* Modal Title */}
            <h2 className="font-oswald text-2xl md:text-3xl font-bold text-[#3D1A1F] mb-5">
              Need a custom quote?
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block font-oswald text-base font-semibold text-[#3D1A1F] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                   value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#3D1A1F] focus:border-[#5D2A2F] outline-none py-1.5 text-[#3D1A1F] font-oswald transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-oswald text-base font-semibold text-[#3D1A1F] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                   value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#3D1A1F] focus:border-[#5D2A2F] outline-none py-1.5 text-[#3D1A1F] font-oswald transition-colors"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block font-oswald text-base font-semibold text-[#3D1A1F] mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  name="phone"
                   value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#3D1A1F] focus:border-[#5D2A2F] outline-none py-1.5 text-[#3D1A1F] font-oswald transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-oswald text-base font-semibold text-[#3D1A1F] mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  name="message"
                   value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#3D1A1F] focus:border-[#5D2A2F] outline-none py-1.5 text-[#3D1A1F] font-oswald resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#FFE066] hover:bg-[#FFD633] text-[#3D1A1F] font-oswald font-bold text-base px-6 py-2.5 rounded-full border-b-2 border-[#3D1A1F] shadow-md transition-all duration-200 active:translate-y-1 active:shadow-sm w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

      )}
      <main className="font-sans bg-white">
        <Navbar />


        {/* Hero Section with CTA */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#f3f4f6] min-h-screen flex items-center">
          <div className="max-w-8xl mx-auto text-center">
            <div className="flex justify-center items-center gap-3 mb-8">

              
              <div className="flex -space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 font-oswald rounded-full bg-yellow-300 border-2 border-white flex items-center justify-center text-sm font-bold text-gray-900">
                  JD
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 font-oswald rounded-full bg-amber-900 border-2 border-white flex items-center justify-center text-sm font-bold text-white">
                  AK
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 font-oswald rounded-full bg-gray-600 border-2 border-white flex items-center justify-center text-sm font-bold text-white">
                  RK
                </div>
              </div>
              <p className="text-[#3b001b] font-oswald text-sm md:text-base font-semibold">Trusted by founders.</p>
            </div>
            {/* Founder Avatars */}
            <h1 className="text-6xl font-oswald md:text-7xl lg:text-8xl font-bold text-[#3b001b] mb-6 leading-tight">
              {/* Google Ads that spend smart, not just spend more. */}
              {service.mainheading}

            </h1>
            

            {/* Main Heading */}
            <h1 className="text-2xl font-oswald md:text-3xl lg:text-5xl font-bold text-[#3b001b] mb-6 leading-tight max-w-4xl mx-auto">
              {/* Google Ads that spend smart, not just spend more. */}
              {service.heading}

            </h1>

            {/* Subheading */}
            <p className="text-lg font-oswald md:text-md text-[#3b001b] mb-10">
              {/* We plan, create, and optimize search ad campaigns that drive real ROI. */}
              {service.subheading}

            </p>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-900 font-oswald text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-800 transition-colors text-base md:text-lg"
              style={{
                backgroundColor: "#FFE680",
                color: "#3B001B",
                fontFamily: "Oswald",
                border: "3px solid #3B001B",
                boxShadow: "0 4px 0 #3B001B",
              }}>
              Book A Call
            </button>
          </div>
        </section>

        <section className="w-full bg-[#f3f4f6] flex justify-center px-4 md:px-8 py-10">
          <div className="w-full max-w-8xl">
            <div className="w-full h-screen rounded-3xl overflow-hidden shadow-xl">
              <img
                src={service.MainImage}
                alt={service.heading}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>


        <AnimatedIconsSection />


        {/* Diagonal Striped Banner Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
          <style>{`
            @keyframes slideLeft {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
            
            @keyframes slideRight {
              from {
                transform: translateX(-50%);
              }
              to {
                transform: translateX(0);
              }
            }
            
            .animate-slide-left {
              animation: slideLeft 60s linear infinite;
            }
            
            .animate-slide-right {
              animation: slideRight 60s linear infinite;
            }
          `}</style>

          <div className="relative h-64 md:h-80 flex items-center justify-center">
            {/* Orange Stripe */}
            <div
              className="absolute top-8 md:top-12 left-0 w-full h-20 md:h-25 bg-[#ff5c36] transform -skew-y-3 overflow-hidden z-10"
            >
              <div className="flex items-center h-full overflow-hidden">
                <div className="flex items-center gap-4 md:gap-8 px-4 text-white font-bold text-xl md:text-2xl whitespace-nowrap animate-slide-left">
                  <span>Collateral Crush</span>
                  <span className="text-3xl">×</span>
                  <span>Identity Kit</span>
                  <span className="text-3xl">×</span>
                  <span>Branding As A Service</span>
                  <span className="text-3xl">×</span>
                  <span>Brand Makeover</span>
                  <span className="text-3xl">×</span>
                  <span>Post Packs</span>
                  <span className="text-3xl">×</span>
                  <span>Pay & Play</span>
                  <span className="text-3xl">×</span>
                  <span>Cxo Glow</span>
                  <span className="text-3xl">×</span>
                  <span>Identity Kit</span>
                  <span className="text-3xl">×</span>
                  <span>Branding As A Service</span>
                  <span className="text-3xl">×</span>
                  <span>Brand Makeover</span>
                  <span className="text-3xl">×</span>
                  <span>Post Packs</span>
                  <span className="text-3xl">×</span>
                  <span>Pay & Play</span>
                  <span className="text-3xl">×</span>
                </div>
              </div>
            </div>

            {/* Navy Stripe */}
            <div
              className="absolute bottom-8 md:bottom-12 left-0 w-full h-20 md:h-25 bg-[#111827] transform skew-y-3 overflow-hidden z-20"
            >
              <div className="flex items-center h-full overflow-hidden">
                <div className="flex items-center gap-4 md:gap-8 px-4 text-white font-bold text-xl md:text-2xl whitespace-nowrap animate-slide-right">
                  <span>100+ Customers</span>
                  <span className="text-2xl">×</span>
                  <span>Senior Designer</span>
                  <span className="text-2xl">×</span>
                  <span>10+ Years of Experience</span>
                  <span className="text-2xl">×</span>
                  <span>100+ Customers</span>
                  <span className="text-2xl">×</span>
                  <span>Senior Designer</span>
                  <span className="text-2xl">×</span>
                  <span>10+ Years of Experience</span>
                  <span className="text-2xl">×</span>
                  <span>100+ Customers</span>
                  <span className="text-2xl">×</span>
                  <span>Senior Designer</span>
                  <span className="text-2xl">×</span>
                  <span>10+ Years of Experience</span>
                  <span className="text-2xl">×</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Service Cards Section */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#3e1827]">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {/* Mint Green Card */}
            <div className="bg-green-100 rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-oswald md:text-4xl font-bold text-[#3e1827] mb-4">What We Actually Do</h2>
              <p className="text-[#3e1827] font-oswald text-base md:text-lg leading-relaxed">
                {/* We run strategic Google Ads campaigns with focused keyword research, ad copywriting, and conversion
              tracking to maximize performance and minimize wastage. */}
                {service.serviceCards[0].description}
              </p>
            </div>

            {/* Pink Card */}
            <div className="bg-pink-200 rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-oswald md:text-4xl font-bold text-[#3e1827] mb-4">Why We're Not Like Everyone Else</h2>
              <p className="text-[#3e1827] font-oswald text-base md:text-lg leading-relaxed">
                {/* Others chase clicks. We chase conversions. Every ad we run is tracked, tested, and tuned for
              profitability. */}
                {service.serviceCards[1].description}

              </p>
            </div>

            {/* Cream Card */}
            <div className="bg-[#fdebdb] rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-oswald md:text-4xl font-bold text-[#3e1827] mb-4">The Real Problem (And Why It Hurts)</h2>
              <p className="text-[#3e1827] font-oswald text-base md:text-lg leading-relaxed">
                {/* Brands burn budgets on irrelevant clicks, poor tracking, and unoptimized campaigns that don’t deliver meaningful leads. */}
                {service.serviceCards[2].description}

              </p>
            </div>

            {/* Cream Card */}
            <div className="bg-[#d6e2f0] rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-oswald md:text-4xl font-bold text-[#3e1827] mb-4">How We Fix It</h2>
              <p className="text-[#3e1827] font-oswald text-base md:text-lg leading-relaxed">
                {/* We constantly refine campaigns using data and insight — not assumptions — to deliver maximum ROI at minimum cost. */}
                {service.serviceCards[3].description}

              </p>
            </div>

            {/* Cream Card */}
            <div className="bg-amber-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-oswald md:text-4xl font-bold text-[#3e1827] mb-4">What You Get (The Value)</h2>
              <p className="text-[#3e1827] font-oswald text-base md:text-lg leading-relaxed">
                {/* More visibility, better leads, and stronger returns — Google Ads that finally make financial sense. */}
                {service.serviceCards[4].description}
              </p>
            </div>
          </div>
        </section>

        <ServicesSection />
        <Tesiminiols />
        <StepsSection />
        <FaqSection />
        <ContactSection />
        <FooterSection />

      </main>
    </>
  )
}

export default function MainServicePage() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-lg">Loading...</div>}>
      <MainServiceContent />
    </Suspense>
  )
}