// "use client"

// export default function AnimatedIconsSection() {
//   const icons = [
//     { id: 1, symbol: "🍀", color: "bg-teal-300" },
//     { id: 2, symbol: "✦", color: "bg-yellow-200" },
//     { id: 3, symbol: "✚", color: "bg-orange-300" },
//     { id: 4, symbol: "◆", color: "bg-amber-200" },
//     { id: 5, symbol: "✦", color: "bg-orange-300" },
//     { id: 6, symbol: "🍀", color: "bg-teal-300" },
//     { id: 7, symbol: "✚", color: "bg-orange-300" },
//     { id: 8, symbol: "◆", color: "bg-amber-200" },
//   ]

//   const stats = [
//     { number: "40", suffix: "+", label: "Brands launched" },
//     { number: "250", suffix: "+", label: "Projects Delivered" },
//     { number: "500", suffix: "+", label: "Moodboards created" },
//     { number: "94", suffix: "%", label: "Happy clients" },
//   ]

//   return (
//     <section className="relative bg-gradient-to-b from-green-200 via-blue-100 to-purple-200 px-4 py-16 md:py-20 lg:py-24"
//     style={{
//       backgroundColor: 'transparent',
//       backgroundImage: 'radial-gradient(white 1px, transparent 1px), linear-gradient(to bottom right, #c9f6cc, #d7d0ff)',
//       backgroundSize: '20px 20px',
      
//     }}
//     >
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mb-12 text-center md:mb-16 lg:mb-20">
//           <h2 className="font-oswald text-5xl font-bold text-[#3b001b] md:text-6xl lg:text-7xl">
//             We built the
//             <br />
//             <span className="relative inline-block">
//               rocket, they flew
//               <span className="absolute -left-8 -top-4 inline-block -rotate-12 transform rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-purple-900 md:-left-12 md:-top-6 md:px-4 md:py-2 md:text-sm lg:-left-16 lg:-top-8">
//                 Brands
//               </span>
//             </span>
//           </h2>
//         </div>

//         {/* Animated Icons */}
//         <div className="mb-16 overflow-hidden md:mb-20 lg:mb-24">
//           <div className="flex gap-4 md:gap-6">
//             {/* First set of icons */}
//             <div className="animate-scroll flex gap-4 md:gap-6">
//               {icons.map((icon) => (
//                 <div
//                   key={`${icon.id}-1`}
//                   className={`${icon.color} flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-purple-900 md:h-20 md:w-20 md:text-3xl lg:h-24 lg:w-24 lg:text-4xl`}
//                 >
//                   {icon.symbol}
//                 </div>
//               ))}
//             </div>
//             {/* Second set for seamless loop */}
//             <div className="animate-scroll flex gap-4 md:gap-6">
//               {icons.map((icon) => (
//                 <div
//                   key={`${icon.id}-2`}
//                   className={`${icon.color} flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-purple-900 md:h-20 md:w-20 md:text-3xl lg:h-24 lg:w-24 lg:text-4xl`}
//                 >
//                   {icon.symbol}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="rounded-4xl bg-[#f6c2f4] px-6 py-5 md:px-8 md:py-5 lg:px-12 lg:py-5">
//           {/* <div className="mb-8 md:mb-12">
//             <span className="inline-block -rotate-12 transform rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-purple-900 md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2">
//               Numbers
//             </span>
//           </div> */}

//           <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:gap-12">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="font-oswald text-4xl font-bold text-[#3b001b] md:text-5xl lg:text-6xl">
//                   {stat.number}
//                   <span className="text-[#ff7081]">{stat.suffix}</span>
//                 </div>
//                 <p className="mt-2 text-sm font-semibold text-[#3b001b] md:mt-3 md:text-base lg:text-lg">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client";
import React from "react";

export default function AnimatedIconsSection() {
  const icons = [
    { id: 1, symbol: "🍀", color: "bg-teal-300" },
    { id: 2, symbol: "✦", color: "bg-yellow-200" },
    { id: 3, symbol: "✚", color: "bg-orange-300" },
    { id: 4, symbol: "◆", color: "bg-amber-200" },
    { id: 5, symbol: "✦", color: "bg-orange-300" },
    { id: 6, symbol: "🍀", color: "bg-teal-300" },
    { id: 7, symbol: "✚", color: "bg-orange-300" },
    { id: 8, symbol: "◆", color: "bg-amber-200" },
  ];

  const stats = [
    { number: "9", suffix: "+", label: "years of experience" },
    { number: "60", suffix: "+", label: "brands launched" },
    { number: "1000", suffix: "+", label: "projects delivered" },
    { number: "98", suffix: "%", label: "On Time Guarantee" },
  ];

  return (
    <section
      className="relative px-4 py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(white 1px, transparent 1px), linear-gradient(to bottom right, #c9f6cc, #d7d0ff)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="text-5xl font-bold text-[#3b001b] md:text-6xl lg:text-7xl">
            We built the
            <br />
            <span className="relative inline-block">
              rocket, they flew
              <span className="absolute -left-8 -top-4 inline-block -rotate-12 transform rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-purple-900 md:-left-12 md:-top-6 md:px-4 md:py-2 md:text-sm lg:-left-16 lg:-top-8">
                Brands
              </span>
            </span>
          </h2>
        </div>

        {/* Animated Floating Icons */}
        <div className="mb-16 md:mb-20 lg:mb-24 h-32 md:h-40 lg:h-48 flex items-center overflow-hidden">
          <div className="flex animate-snake-scroll gap-6 md:gap-8 lg:gap-10">
            {[...Array(3)].map((_, repeatIndex) =>
              icons.map((icon, index) => (
                <div
                  key={`${icon.id}-${repeatIndex}`}
                  className={`${icon.color} flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl text-2xl font-bold text-purple-900 md:h-24 md:w-24 md:text-3xl lg:h-28 lg:w-28 lg:text-4xl shadow-lg animate-float-${
                    index % 4
                  }`}
                  style={{
                    animationDelay: `${index * 0.25}s`,
                  }}
                >
                  {icon.symbol}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-4xl bg-[#f6c2f4] px-6 py-5 md:px-8 md:py-5 lg:px-12 lg:py-5">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#3b001b] md:text-5xl lg:text-6xl">
                  {stat.number}
                  <span className="text-[#ff7081]">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#3b001b] md:mt-3 md:text-base lg:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
