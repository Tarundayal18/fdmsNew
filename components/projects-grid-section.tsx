// "use client"

// export default function ProjectsGridSection() {
//   const projects = [
//     { id: 1, title: "Celebrity Chef Press Kit", image: "/celebrity-chef-professional-portrait.jpg" },
//     { id: 2, title: "Corporate Deck", image: "/corporate-business-presentation-documents.jpg" },
//     { id: 3, title: "Brand Identity", image: "/brand-identity-design-system.png" },
//     { id: 4, title: "Digital Campaign", image: "/digital-marketing-campaign-design.jpg" },
//     { id: 5, title: "Luxury Fashion Lookbook", image: "/luxury-fashion-lookbook.jpg" },
//     { id: 6, title: "Startup Pitch Deck", image: "/startup-investor-pitch-deck.jpg" },
//     { id: 7, title: "Event Branding Kit", image: "/event-branding-kit.jpg" },
//     { id: 8, title: "Social Media Strategy", image: "/social-media-strategy.jpg" },
//     { id: 9, title: "Product Launch Campaign", image: "/product-launch-marketing.jpg" },
//     { id: 10, title: "Corporate Annual Report", image: "/corporate-annual-report.jpg" },
//     { id: 11, title: "Real Estate Brochure", image: "/real-estate-brochure-design.jpg" },
//     { id: 12, title: "Restaurant Menu Design", image: "/restaurant-menu-design.jpg" },
//     { id: 13, title: "E-commerce Product Photoshoot", image: "/ecommerce-product-photoshoot.jpg" },
//     { id: 14, title: "Wellness Brand Identity", image: "/wellness-brand-identity.jpg" },
//     { id: 15, title: "Travel Campaign Collateral", image: "/travel-campaign-collateral.jpg" },
//     { id: 16, title: "Tech Conference Presentation", image: "/tech-conference-presentation.jpg" },
//   ];

//   return (
//     <section className="bg-[#fff8e6] py-16 sm:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-0">

//         {/* ===== HEADER ===== */}
//         <div className="text-center mb-16">
//           <h2 className="font-oswald text-5xl sm:text-6xl lg:text-8xl font-bold text-[#2b0012]">
//             Our Awesome <br /> Work
//           </h2>
//         </div>

//         {/* ===== GRID ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {projects.map((project) => (
//             <div key={project.id} className="flex flex-col">
//               {/* IMAGE CARD */}
//               <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-gray-200 shadow-md">
//                 <img
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 hover:scale-105"
//                 />
//               </div>

//               {/* TITLE & BUTTON */}
//               <div className="flex items-center justify-between mt-4">
//                 <h3 className="font-oswald text-2xl sm:text-3xl font-bold text-[#2b0012]">
//                   {project.title}
//                 </h3>
//                 <button className="bg-yellow-300 hover:bg-yellow-400 text-[#2b0012] font-oswald font-bold px-5 py-2 rounded-full shadow-sm border border-[#2b0012]/30 transition-transform hover:scale-105">
//                   View
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

export default function ProjectsGridSection() {
  const projects = [
    { id: 1, title: "Celebrity Chef Press Kit", image: "https://via.placeholder.com/800x450?text=Celebrity+Chef+Press+Kit" },
    { id: 2, title: "Corporate Deck", image: "https://via.placeholder.com/800x450?text=Corporate+Deck" },
    { id: 3, title: "Brand Identity", image: "https://via.placeholder.com/800x450?text=Brand+Identity" },
    { id: 4, title: "Digital Campaign", image: "https://via.placeholder.com/800x450?text=Digital+Campaign" },
    { id: 5, title: "Luxury Fashion Lookbook", image: "https://via.placeholder.com/800x450?text=Luxury+Fashion+Lookbook" },
    { id: 6, title: "Startup Pitch Deck", image: "https://via.placeholder.com/800x450?text=Startup+Pitch+Deck" },
    { id: 7, title: "Event Branding Kit", image: "https://via.placeholder.com/800x450?text=Event+Branding+Kit" },
    { id: 8, title: "Social Media Strategy", image: "https://via.placeholder.com/800x450?text=Social+Media+Strategy" },
    { id: 9, title: "Product Launch Campaign", image: "https://via.placeholder.com/800x450?text=Product+Launch+Campaign" },
    { id: 10, title: "Corporate Annual Report", image: "https://via.placeholder.com/800x450?text=Corporate+Annual+Report" },
    { id: 11, title: "Real Estate Brochure", image: "https://via.placeholder.com/800x450?text=Real+Estate+Brochure" },
    { id: 12, title: "Restaurant Menu Design", image: "https://via.placeholder.com/800x450?text=Restaurant+Menu+Design" },
    { id: 13, title: "E-commerce Product Photoshoot", image: "https://via.placeholder.com/800x450?text=Ecommerce+Product+Photoshoot" },
    { id: 14, title: "Wellness Brand Identity", image: "https://via.placeholder.com/800x450?text=Wellness+Brand+Identity" },
    { id: 15, title: "Travel Campaign Collateral", image: "https://via.placeholder.com/800x450?text=Travel+Campaign+Collateral" },
    { id: 16, title: "Tech Conference Presentation", image: "https://via.placeholder.com/800x450?text=Tech+Conference+Presentation" },
  ];

  return (
    <section className="bg-[#fff8e6] py-16 sm:py-24">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-3 lg:px-0">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h2 className="font-oswald text-5xl sm:text-6xl lg:text-8xl font-bold text-[#2b0012]">
            Our Awesome <br /> Work
          </h2>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              {/* IMAGE CARD */}
              <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-gray-200 shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* TITLE & BUTTON */}
              <div className="flex items-center justify-between mt-4">
                <h3 className="font-oswald text-2xl sm:text-3xl font-bold text-[#2b0012]">
                  {project.title}
                </h3>
                <button className="bg-yellow-300 hover:bg-yellow-400 text-[#2b0012] font-oswald font-bold px-5 py-2 rounded-full shadow-sm border border-[#2b0012]/30 transition-transform hover:scale-105">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
