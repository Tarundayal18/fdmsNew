// "use client"

// export default function FooterSection() {
//   return (
//     <div className="w-full bg-gradient-to-b from-[#FFE878] to-[white] py-12 px-6 md:px-12">
//       <div className="w-full mx-auto">
//         <footer className="bg-[#3D001B] text-white rounded-3xl p-8 md:p-12 font-oswald">
//           {/* Main Footer Content */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 justify-items-center text-center md:text-left">
//   {/* Contact Info */}
//   <div className="space-y-6 w-full md:w-auto">
//     <div>
//       <h3 className="text-[#FFE878] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
//         PHONE
//       </h3>
//       <p className="text-white text-base sm:text-lg">(217) 555-0134</p>
//     </div>
//     <div>
//       <h3 className="text-[#FFE878] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
//         Email
//       </h3>
//       <p className="text-white text-base sm:text-lg">agenius@email.com</p>
//     </div>
//     <div>
//       <h3 className="text-[#FFE878] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
//         Address
//       </h3>
//       <p className="text-white text-base sm:text-lg">
//         123 Main Street, Suite 200, Austin, TX 78701
//       </p>
//     </div>
//     <div>
//       <h3 className="text-[#FFE878] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
//         Opening Hours
//       </h3>
//       <p className="text-white text-base sm:text-lg">Mon to Sat: 9.00am - 8.30pm</p>
//       <p className="text-white text-base sm:text-lg">Sun: Closed</p>
//     </div>
//   </div>

//   {/* Navigation Links */}
//   <div className="space-y-3 w-full md:w-auto">
//     <ul className="space-y-3">
//       {["Home", "Services", "Benefits", "Portfolio", "Reviews", "About"].map((item) => (
//         <li key={item}>
//           <a
//             href="#"
//             className="text-[#FFE878] hover:text-white transition font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
//           >
//             {item}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>

//   {/* Social Media Links */}
//   <div className="space-y-3 w-full md:w-auto">
//     <ul className="space-y-3">
//       {["LinkedIn", "Facebook", "Twitter", "Instagram", "YouTube"].map((item) => (
//         <li key={item}>
//           <a
//             href="#"
//             className="text-[#FFE878] hover:text-white transition font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
//           >
//             {item}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>
// </div>


//           {/* Brand Name */}
//           <div className="border-[#F09FA8] pt-8">
//             <section className="flex flex-1 items-center justify-center">
//               <h1
//                 className="font-black text-center leading-none
//                      text-[80px] sm:text-[140px] md:text-[200px] lg:text-[260px] xl:text-[320px]"
//                 style={{
//                   background: "linear-gradient(to bottom, #F09FA8 0%, #3D001B 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 AGENIUS
//               </h1>
//             </section>
//             <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#F09FA8] mt-8">
//               <p>Built in Framer</p>
//               <p>©Template by RealMehedi</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   )
// }



"use client"

import Image from 'next/image'

export default function FooterSection() {
  return (
    <div className="w-full bg-[#f5f0e8] py-8 px-6 font-['Oswald']">
      <div className="max-w-[1450px] mx-auto">
        <footer className="bg-[#2b0f1b] text-white rounded-3xl px-12 py-6 relative overflow-hidden">
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <h2
              className="font-black font-oswald text-[320px] leading-none opacity-[0.07] select-none"
              style={{
                color: 'rgba(255, 255, 255, 0.49)',
              }}
            >
              FdMS
            </h2>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Top Section - 3 Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-24 mb-24 t:10">
              {/* Left Column - Brand */}
              <div className="space-y-3">
                {/* Logo Image */}
                <div className="mb-4">
                  <Image
                    src="/mainlogo.png"
                    alt="FdMS Logo"
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-400 text-sm">Fun, friendly, scroll-stopping creativity.</p>
              </div>

              {/* Middle Column - SITE */}
              <div>
                <ul className="space-y-3">
                  {["Home", "Services", "Benefits", "Porfolio", "Reviews", "About"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition text-base font-medium"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - CONTACT */}
              <div>
                <div className="space-y-3">
                  <a
                    href="mailto:godigital@fdms.ec.in"
                    className="text-gray-300 hover:text-white transition text-base font-medium block"
                  >
                    godigital@fdms.co.in
                  </a>
                  <a
                    href="tel:+917718064819"
                    className="text-gray-300 hover:text-white transition text-base font-medium block"
                  >
                    +91 77180 64819
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="border-t border-gray-700/30 pt-8">
              <p className="text-gray-500 text-sm text-center">
                © 2025 FdMS. In partnership with Krezine.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}