// export default function FounderNoteSection() {
//   return (
//     <section className="bg-[#fdebdb] px-4 py-20">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           {/* Profile Circle */}
//           <div className="flex justify-center md:justify-start">
//             <div className="relative w-80 h-80 flex-shrink-0">


//               {/* Profile image circle */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="
//     w-70 h-70                /* 📱 mobile (smallest) */
//     sm:w-56 sm:h-56          /* 📱📲 small tablets */
//     md:w-72 md:h-72          /* 💻 medium screens */
//     lg:w-75 lg:h-75         /* 🖥️ large desktops */
//     rounded-full 
//     bg-gradient-to-br from-orange-200 to-orange-100 
//     flex items-center justify-center 
//     border-4 border-white shadow-lg overflow-hidden
//   ">
//                   <img
//                     src="/owner.png"  // <-- make sure this is in /public folder
//                     alt="Profile"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>


//             </div>
//           </div>

//           {/* Founder Note Content */}
//           <div>
//             <h2 className="font-oswald font-bold text-5xl md:text-6xl text-[#3d1f2d] mb-6">Founder's Note</h2>

//             <div className="space-y-6 text-[#3d1f2d] font-oswald text-base leading-relaxed mb-8">
//               <p>
//                 Bored of the 9-to-5 rut, I started this agency with just me, my laptop, and a vision. What began as a
//                 one-person hustle soon grew into a team that shares my obsession with creativity and deadlines. At our
//                 core, we promise this: we don't charge until you're 100% satisfied. I personally review every design—if
//                 I don't love it, it doesn't leave our desk (my team hates me for this, but clients love it).
//               </p>

//               <p>
//                 Time is our biggest currency. If you're serious about your brand, let's talk. Together, we'll create
//                 something unforgettable.
//               </p>
//             </div>

//             {/* Founder Info */}
//             <div>
//               <h3 className="font-oswald font-bold text-xl text-[#3d1f2d]">Sauhitya Garabadu</h3>
//               <p className="font-oswald text-[#3d1f2d] mb-4">Founder & Creative Director</p>

//               {/* LinkedIn Icon */}
//               <a href="#" className="inline-block text-[#3d1f2d] hover:text-[#f  f9a56] transition">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


export default function FounderNoteSection() {
  return (
    <section className="bg-[#fdebdb] px-4 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="w-80 h-80 flex items-center justify-center">
              <div className="
                w-70 h-70
                sm:w-56 sm:h-56
                md:w-72 md:h-72
                lg:w-75 lg:h-75
                rounded-full
                bg-gradient-to-br from-orange-200 to-orange-100
                flex items-center justify-center
                border-4 border-white shadow-lg overflow-hidden
              ">
                <img
                  src="/owner.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="font-oswald font-bold text-5xl md:text-6xl text-[#3d1f2d] mb-6">
              Founder's Note
            </h2>

            <div className="space-y-6 text-[#3d1f2d] font-oswald text-base leading-relaxed mb-8">
              <p>
                Bored of the 9-to-5 rut, I started this agency with just me, my laptop, and a vision. 
                What began as a one-person hustle soon grew into a team that shares my obsession with 
                creativity and deadlines. At our core, we promise this: we don't charge until you're 
                100% satisfied. I personally review every design—if I don't love it, it doesn't leave 
                our desk (my team hates me for this, but clients love it).
              </p>

              <p>
                Time is our biggest currency. If you're serious about your brand, let's talk. 
                Together, we'll create something unforgettable.
              </p>
            </div>

            {/* Founder Info */}
            <div>
              <h3 className="font-oswald font-bold text-xl text-[#3d1f2d]">
                Sauhitya Garabadu
              </h3>
              <p className="font-oswald text-[#3d1f2d] mb-4">
                Founder & Creative Director
              </p>

              {/* LinkedIn Icon */}
              <a href="#" className="inline-block text-[#3d1f2d] hover:text-[#ff9a56] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
