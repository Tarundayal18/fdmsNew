"use client";

import { useRouter } from "next/navigation";
import { projectData } from "@/data/projectData";

export default function MinimumProjectsGrid() {
  const router = useRouter();

  // Show only first 4 projects
  const projects = projectData.slice(0, 4);

  const handleClick = (projectId: number) => {
    router.push(`/project/mainproject?id=${projectId}`);
  };

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
            <div
              key={project.id}
              onClick={() => handleClick(project.id)}
              className="flex flex-col cursor-pointer group"
            >
              {/* IMAGE CARD */}
              <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-gray-200 shadow-md">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TITLE & BUTTON */}
              <div className="flex items-center justify-between mt-4">
                <h3 className="font-oswald text-2xl sm:text-3xl font-bold text-[#2b0012]">
                  {project.title}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(project.id);
                  }}
                  className="bg-yellow-300 hover:bg-[#fbe941] text-[#3e1827] font-oswald font-bold px-5 py-2 rounded-full shadow-sm border border-[#3e1827]/30 transition-transform hover:scale-105"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ===== VIEW ALL BUTTON ===== */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => router.push("/projects")}
            className="bg-[#ffe64d] text-[#2b0012] font-oswald font-semibold text-lg px-6 text-sm py-2 rounded-full shadow-[6px_6px_0_#2b0012] transition-all hover:translate-y-[2px]"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
