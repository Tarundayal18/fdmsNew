// "use client";

// import { useSearchParams } from "next/navigation";
// import { projectData } from "@/data/projectData";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
// import Navbar from "@/components/navbar";
// import ContactSection from "@/components/contact-section";
// import FooterSection from "@/components/footer-section";
// import Link from "next/link";
// import ProjectNavigation from "./projectnavigation";
// import { Suspense } from "react";

// export default function ProjectPage() {
//   return (
//     <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading project...</div>}>
//       <ProjectPageContent />
//     </Suspense>
//   );
// }

// function ProjectPageContent() {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");
//   const project = projectData.find((p) => p.id === Number(id));

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-500 font-bold text-2xl">
//         Project not found 😢
//       </div>
//     );
//   }

//   return (
//     <main className="bg-[#f5f1ed] min-h-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-16 pb-12 px-4 sm:px-8 md:px-16 lg:px-24">
//         <div className="max-w-7xl mx-auto py-12">
//           <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-oswald text-center text-[#3e1a2a] mb-4">
//             {project.title}
//           </h1>
//           <div className="flex justify-center flex-wrap gap-3 mb-8">
//             {(Array.isArray(project.tag) ? project.tag : [project.tag]).map((tag, i) => {
//               const bgColors = [
//                 "bg-[#E2DFFF]", // light purple
//                 "bg-[#FFF2B2]", // soft yellow
//                 "bg-[#FCE3F2]", // light pink
//                 "bg-[#D9F7E5]", // light mint green
//                 "bg-[#FFE5CC]", // peach
//                 "bg-[#E0F0FF]", // sky blue
//               ];
//               const bgColor = bgColors[i % bgColors.length]; // cycle through colors

//               return (
//                 <div
//                   key={i}
//                   className={`inline-block ${bgColor} px-4 py-2 rounded-full shadow-sm transition-transform hover:scale-105`}
//                 >
//                   <span className="text-sm font-semibold font-oswald text-[#3e1a2a]">
//                     {tag}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Hero Image */}
//       <section className="px-4 sm:px-8 md:px-16 lg:px-24">
//         <div className="max-w-10xl mx-auto h-screen relative">
//           <Image
//             src={project.heroImage}
//             alt={project.title}
//             fill
//             className="object-cover rounded-2xl"
//           />
//         </div>
//       </section>

//       {/* Info + Description */}
//       <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#f5f1ed]">
//         <div className="max-w-8xl mx-auto">
//           {/* Info Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
//             <div>
//               <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">CLIENT</h3>
//               <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">{project.client}</p>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">DURATION</h3>
//               <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">{project.duration}</p>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">YEAR</h3>
//               <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">{project.year}</p>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">INDUSTRY</h3>
//               <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">{project.industry}</p>
//             </div>
//           </div>

//           {/* Description */}
//           <div className="bg-opacity-60 rounded-lg">
//             <p className="text-base font-oswald sm:text-lg text-[#644651] leading-relaxed max-w-4xl mx-auto">
//               {project.description}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mockup Images (Updated) */}
//       <section className="px-4 sm:px-8 md:px-16 lg:px-24">
//         <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           {project.mockupImages.map((img, i) => (
//             <div key={i} className="relative w-full h-[450px] rounded-2xl overflow-hidden">
//               <Image
//                 src={img}
//                 alt={`Mockup ${i}`}
//                 fill
//                 className="object-cover rounded-2xl"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Challenge / Solution / Highlights / Testimonial */}
//       <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24">
//         <div className="max-w-4xl mx-auto">
//           {/* Challenge */}
//           <div className="mb-12">
//             <h2 className="text-3xl sm:text-4xl font-oswald md:text-4xl font-bold text-[#3e1a2a] mb-4">The Challenge:</h2>
//             <p className="text-base sm:text-lg font-oswald text-[#644651] leading-relaxed">{project.challenge}</p>
//           </div>

//           {/* Solution */}
//           <div className="mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold font-oswald text-[#3e1a2a] mb-6">The Solution:</h2>
//             <div className="space-y-4">
//               {project.solution.map((s, i) => (
//                 <p key={i} className="text-base sm:text-lg text-[#644651] font-oswald leading-relaxed">
//                   {s}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/* Highlights */}
//           <div className="mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-4xl font-oswald font-bold text-[#3e1a2a] mb-6">Key Highlights:</h2>
//             <div className="space-y-4">
//               {project.highlights.map((h, i) => (
//                 <div key={i} className="flex items-start gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-[#00a8cc] flex-shrink-0 mt-1" />
//                   <p className="text-base sm:text-lg text-[#644651] font-oswald leading-relaxed">{h}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonial */}
//           {project.id !== 14 && (
//             <div className="border-l-4 border-[#ffd700] pl-6">
//               <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold font-oswald text-[#3e1a2a] mb-4">Testimonial:</h2>
//               <p className="text-base sm:text-lg italic font-oswald text-[#644651] mb-3">
//                 “{project.testimonial.quote}”
//               </p>
//               <p className="text-base sm:text-lg font-oswald font-bold text-[#644651]">
//                 — {project.testimonial.author}
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       <ProjectNavigation />
//       <ContactSection />
//       <FooterSection />
//     </main>
//   );
// }


"use client";

import { useSearchParams } from "next/navigation";
import { projectData } from "@/data/projectData";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-section";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import ProjectNavigation from "./projectnavigation";
import { Suspense } from "react";

export default function ProjectPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading project...</div>}>
      <ProjectPageContent />
    </Suspense>
  );
}

function ProjectPageContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const project = projectData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-bold text-xl sm:text-2xl px-4">
        Project not found 😢
      </div>
    );
  }

  return (
    <main className="bg-[#f5f1ed] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-oswald text-center text-[#3e1a2a] mb-4 sm:mb-6 px-2">
            {project.title}
          </h1>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {(Array.isArray(project.tag) ? project.tag : [project.tag]).map((tag, i) => {
              const bgColors = [
                "bg-[#E2DFFF]", // light purple
                "bg-[#FFF2B2]", // soft yellow
                "bg-[#FCE3F2]", // light pink
                "bg-[#D9F7E5]", // light mint green
                "bg-[#FFE5CC]", // peach
                "bg-[#E0F0FF]", // sky blue
              ];
              const bgColor = bgColors[i % bgColors.length];

              return (
                <div
                  key={i}
                  className={`inline-block ${bgColor} px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm transition-transform hover:scale-105`}
                >
                  <span className="text-xs sm:text-sm font-semibold font-oswald text-[#3e1a2a]">
                    {tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero Image with Hover Zoom */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen relative overflow-hidden rounded-xl sm:rounded-2xl group">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover rounded-xl sm:rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      </section>

      {/* Info + Description */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#f5f1ed]">
        <div className="max-w-6xl mx-auto">
          {/* Info Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 text-center">
            <div className="p-3 sm:p-4">
              <h3 className="text-xs sm:text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-1 sm:mb-2">CLIENT</h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-oswald font-bold text-[#3e1a2a] break-words">{project.client}</p>
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="text-xs sm:text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-1 sm:mb-2">DURATION</h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-oswald font-bold text-[#3e1a2a]">{project.duration}</p>
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="text-xs sm:text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-1 sm:mb-2">YEAR</h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-oswald font-bold text-[#3e1a2a]">{project.year}</p>
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="text-xs sm:text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-1 sm:mb-2">INDUSTRY</h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-oswald font-bold text-[#3e1a2a] break-words">{project.industry}</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-opacity-60 rounded-lg px-2 sm:px-4">
            <p className="text-sm sm:text-base md:text-lg font-oswald text-[#644651] leading-relaxed max-w-4xl mx-auto">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mockup Images with Hover Zoom */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {project.mockupImages.map((img, i) => (
            <div key={i} className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden group">
              <Image
                src={img}
                alt={`Mockup ${i}`}
                fill
                className="object-cover rounded-xl sm:rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Challenge / Solution / Highlights / Testimonial */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Challenge */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-[#3e1a2a] mb-3 sm:mb-4">The Challenge:</h2>
            <p className="text-sm sm:text-base md:text-lg font-oswald text-[#644651] leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-oswald text-[#3e1a2a] mb-4 sm:mb-6">The Solution:</h2>
            <div className="space-y-3 sm:space-y-4">
              {project.solution.map((s, i) => (
                <p key={i} className="text-sm sm:text-base md:text-lg text-[#644651] font-oswald leading-relaxed">
                  {s}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-[#3e1a2a] mb-4 sm:mb-6">Key Highlights:</h2>
            <div className="space-y-3 sm:space-y-4">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00a8cc] flex-shrink-0 mt-0.5 sm:mt-1" />
                  <p className="text-sm sm:text-base md:text-lg text-[#644651] font-oswald leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.id !== 14 && (
            <div className="border-l-2 sm:border-l-4 border-[#ffd700] pl-4 sm:pl-6 py-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-oswald text-[#3e1a2a] mb-3 sm:mb-4">Testimonial:</h2>
              <p className="text-sm sm:text-base md:text-lg italic font-oswald text-[#644651] mb-2 sm:mb-3">
                "{project.testimonial.quote}"
              </p>
              <p className="text-sm sm:text-base md:text-lg font-oswald font-bold text-[#644651]">
                — {project.testimonial.author}
              </p>
            </div>
          )}
        </div>
      </section>

      <ProjectNavigation />
      <ContactSection />
      <FooterSection />
    </main>
  );
}