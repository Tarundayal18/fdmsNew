

// "use client"

// import Image from 'next/image'

// export default function FooterSection() {
//   return (
//     <div className="w-full bg-[#f5f0e8] py-8 px-6 font-['Oswald']">
//       <div className="max-w-[1450px] mx-auto">
//         <footer className="bg-[#2b0f1b] text-white rounded-3xl px-12 py-6 relative overflow-hidden">
//           {/* Large Background Text */}
//           <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
//             <h2
//               className="font-black font-oswald text-[320px] leading-none opacity-[0.07] select-none tracking-[-0.07em]"
//               style={{
//                 color: 'rgba(255, 255, 255, 0.49)',
//               }}
//             >
//               FdMS
//             </h2>
//           </div>


//           {/* Main Content */}
//           <div className="relative z-10">
//             {/* Top Section - 3 Column Layout */}
//             <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-24 mb-24 t:10">
//               {/* Left Column - Brand */}
//               <div className="space-y-3">
//                 {/* Logo Image */}
//                 <div className="mb-4">
//                   <Image
//                     src="/mainlogo.png"
//                     alt="FdMS Logo"
//                     width={140}
//                     height={70}
//                     className="object-contain"
//                   />
//                 </div>
//                 <p className="text-gray-400 text-sm">Fun, friendly, scroll-stopping creativity.</p>
//               </div>

//               {/* Middle Column - SITE */}
//               <div>
//                 <ul className="space-y-3">
//                   {["Home", "Services", "Benefits", "Porfolio", "Reviews", "About"].map((item) => (
//                     <li key={item}>
//                       <a
//                         href="#"
//                         className="text-gray-300 hover:text-white transition text-base font-medium"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Right Column - CONTACT */}
//               <div>
//                 <div className="space-y-3">
//                   <a
//                     href="mailto:godigital@fdms.ec.in"
//                     className="text-gray-300 hover:text-white transition text-base font-medium block"
//                   >
//                     goditigal@fdms.co.in
//                   </a>
//                   <a
//                     href="tel:+917718064819"
//                     className="text-gray-300 hover:text-white transition text-base font-medium block"
//                   >
//                     +91 77180 64819
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Section - Copyright */}
//             <div className="border-t border-gray-700/30 pt-8">
//               <p className="text-gray-500 text-sm text-center">
//                 © 2025 FdMS. Unit of Fanatisch Marketing Services (P) Ltd.
//               </p>
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

          {/* Background FdMS Text */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <h2
              className="font-black font-oswald text-[320px] leading-none opacity-[0.07] select-none tracking-[-0.07em]"
              style={{ color: 'rgba(255, 255, 255, 0.49)' }}
            >
              FdMS
            </h2>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-24 mb-24">

              {/* Left Column */}
              <div className="space-y-3">
                <div className="mb-4">
                  <Image
                    src="/mainlogo.png"
                    alt="FdMS Logo"
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-400 text-sm">
                  Fun, friendly, scroll-stopping creativity.
                </p>
              </div>

              {/* Middle Column (SITE Links) */}
              <div>
                <ul className="space-y-3">
                  {[
                    { name: "Home", link: "/" },
                    { name: "Services", link: "/services/branding-identity" },
                    { name: "Projects", link: "/projects" },
                    { name: "About", link: "/about" },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link}
                        className="text-gray-300 hover:text-white transition text-base font-medium"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column (CONTACT) */}
              <div className="space-y-3">
                <a
                  href="mailto:godigital@fdms.co.in"
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

            {/* Copyright */}
            <div className="border-t border-gray-700/30 pt-8">
              <p className="text-gray-500 text-sm text-center">
                © 2025 FdMS. Unit of Fanatisch Marketing Services (P) Ltd.
              </p>
            </div>
          </div>

        </footer>
      </div>
    </div>
  )
}
