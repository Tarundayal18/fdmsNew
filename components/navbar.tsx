
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setAnimationKey(prev => prev + 1)
    }
  }, [isOpen, showServices])

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/projects", label: "projects" },
    { href: "/contact", label: "contact" },
  ]

  const services = [
    { label: "Branding & Identity", href: "/branding-identity" },
    { label: "Social Media", href: "/social-media" },
    { label: "Websites & Mobile Apps", href: "/websites-mobile-apps" },
    { label: "Performance Marketing", href: "/performance-marketing" },
  ]

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px) rotate(-8deg) scale(0.85);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.6) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
        }

        .rotate-slight-left {
          transform: rotate(-2deg);
        }
        
        .rotate-slight-right {
          transform: rotate(2deg);
        }
        
        .rotate-tiny-right {
          transform: rotate(1deg);
        }
        
        .rotate-tiny-left {
          transform: rotate(-1deg);
        }
      `}</style>

      {/* Navbar (transparent, floats above content) */}
      <nav className="absolute top-0 left-0 right-0 w-full z-40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/mainlogo.png" // image public folder ke andar honi chahiye
                alt="Studio Logo"
                width={120} // apni requirement ke hisaab se adjust kar sakte ho
                height={40}
                className="object-contain"
                style={{ marginTop: 20 }}
              />
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-200 mt-6 hover:bg-[#c0ecbf] transition px-6 py-2 rounded-2xl font-oswald font-bold text-[#2b0012] text-2xl"
            >
              MENU
            </button>

          </div>
        </div>
      </nav>

      {/* Fullscreen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm animate-fade-in"></div>

          <div className="relative z-10 flex flex-col h-full">
            {/* Header with logo and close button */}
            <div className="max-w-8xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/mainlogo.png" // image public folder ke andar honi chahiye
                    alt="Studio Logo"
                    width={120} // apni requirement ke hisaab se adjust kar sakte ho
                    height={40}
                    className="object-contain"
                    style={{ marginTop: 20 }}
                  />
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setShowServices(false)
                  }}
                  className="bg-green-200 mt-6 hover:bg-[#c0ecbf] transition px-6 py-2 rounded-2xl font-oswald font-bold text-[#2b0012] text-2xl"
                >
                  CLOSE
                </button>
              </div>
            </div>

            {/* Menu content */}
            <div className="flex-1 flex items-center justify-center px-4 py-8">
              {!showServices ? (
                <div className="w-full max-w-3xl" key={`main-${animationKey}`}>
                  {/* First Row: Home, About, Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-slide-up rotate-slight-left hover:scale-105 hover:rotate-2 cursor-pointer"
                      style={{ animationDelay: '0.05s' }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={navLinks[0].href} className="block w-full h-full">
                        {navLinks[0].label}
                      </Link>
                    </div>

                    <div
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-slide-up rotate-tiny-right hover:scale-105 hover:rotate-2 cursor-pointer"
                      style={{ animationDelay: '0.15s' }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={navLinks[1].href} className="block w-full h-full">
                        {navLinks[1].label}
                      </Link>
                    </div>

                    <button
                      onClick={() => setShowServices(true)}
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-slide-up rotate-tiny-left hover:scale-105 hover:rotate-2 flex items-center justify-center gap-2"
                      style={{ animationDelay: '0.25s' }}
                    >
                      services
                      <ChevronDown size={24} />
                    </button>
                  </div>

                  {/* Second Row: Projects, Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <div
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-slide-up rotate-slight-right hover:scale-105 hover:rotate-2 cursor-pointer"
                      style={{ animationDelay: '0.35s' }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={navLinks[2].href} className="block w-full h-full">
                        {navLinks[2].label}
                      </Link>
                    </div>

                    <div
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-slide-up rotate-slight-left hover:scale-105 hover:rotate-2 cursor-pointer"
                      style={{ animationDelay: '0.45s' }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={navLinks[3].href} className="block w-full h-full">
                        {navLinks[3].label}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-3xl" key={`services-${animationKey}`}>
                  {/* First Row: Home, About, Services (with up arrow) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-scale-in rotate-slight-left hover:scale-105 hover:rotate-2 cursor-pointer"
                      style={{ animationDelay: '0.05s' }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={navLinks[0].href} className="block w-full h-full">
                        {navLinks[0].label}
                      </Link>
                    </div>

                    <div
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-scale-in rotate-tiny-right hover:scale-105 hover:rotate-2 cursor-pointer"
                      style={{ animationDelay: '0.1s' }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={navLinks[1].href} className="block w-full h-full">
                        {navLinks[1].label}
                      </Link>
                    </div>

                    <button
                      onClick={() => setShowServices(false)}
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-scale-in rotate-tiny-left hover:scale-105 hover:rotate-2 flex items-center justify-center gap-2"
                      style={{ animationDelay: '0.15s' }}
                    >
                      services
                      <ChevronUp size={24} />
                    </button>
                  </div>

                  {/* Service Items - Grid Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {services.map((service, index) => (
                      <div
                        key={service.href}
                        className={`bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-5 px-8 text-center font-oswald text-xl sm:text-2xl italic text-gray-900 shadow-lg animate-scale-in hover:scale-105 hover:rotate-1 cursor-pointer ${index % 2 === 0 ? 'rotate-tiny-right' : 'rotate-tiny-left'
                          }`}
                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href={service.href} className="block w-full h-full">
                          {service.label}
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Third Row: Projects, Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <div
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-scale-in rotate-slight-right hover:scale-105 hover:rotate-2 cursor-pointer"
                      style={{ animationDelay: '0.6s' }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={navLinks[2].href} className="block w-full h-full">
                        {navLinks[2].label}
                      </Link>
                    </div>

                    <div
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 rounded-full py-6 px-10 text-center font-oswald text-2xl sm:text-3xl italic text-gray-900 shadow-lg animate-scale-in rotate-slight-left hover:scale-105 hover:rotate-2 cursor-pointer"
                      style={{ animationDelay: '0.7s' }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={navLinks[3].href} className="block w-full h-full">
                        {navLinks[3].label}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}