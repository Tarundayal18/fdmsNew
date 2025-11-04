"use client"

import { useState } from "react"

const stepsData = [
  {
    id: 1,
    title: "Kickoff & Coffee Chats",
    description:
      "We head into the creative cave and start sketching, designing, writing, and building. You'll get updates, sneak peeks, and maybe a few happy dances along the way.",
    imageSrc: "/Container.png",
  },
  {
    id: 2,
    title: "Strategy & Concepts",
    description:
      "With a shared understanding in place, we map the plan and explore creative directions that will move the needle.",
    imageSrc: "/Container.png",
  },
  {
    id: 3,
    title: "Design & Development",
    description:
      "We bring the concepts to life with beautifully crafted design and solid builds, keeping you looped in the whole way.",
    imageSrc: "/images/step3.png",
  },
  {
    id: 4,
    title: "Launch & High Fives",
    description:
      "We go live, you look incredible, and we celebrate. Ongoing help later? Always just a message away.",
    imageSrc: "/images/step4.png",
  },
]

export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(1)
  const currentStep = stepsData.find((step) => step.id === activeStep)

  return (
    <section 
      className="w-full py-16 px-4 md:py-24 min-h-screen flex "
      style={{
        backgroundColor: 'transparent',
        backgroundImage:
        'radial-gradient(ellipse 8px 8px, rgb(250, 225, 199) 25%, rgb(246, 215, 201) 32%, rgb(245, 197, 242) 25%)',
        backgroundSize: '16px 16px',
      }}
      
    >
      <div className="max-w-[90rem] mx-auto w-full text-center">
        <div className="mb-12 md:mb-16 relative">
          <h2 className="text-5xl md:text-8xl font-oswald text-[#3b001b] font-bold leading-tight text-balance">
            Our not-so
            <br />
            secret sauce
          </h2>
          {/* <div className="absolute top-8 left-48 md:left-64 bg-green-300 text-purple-900 px-4 py-2 rounded-full text-sm md:text-base font-bold transform -rotate-12 shadow-md">
            Process
          </div> */}
        </div>

        {/* Content card */}
        <div className="bg-white from-pink-100 to-pink-50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left content */}
            <div className="order-2 md:order-1">
              <div className="flex gap-3 mb-8">
                {stepsData.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-lg md:text-xl transition-all duration-300 ${
                      activeStep === step.id
                        ? "bg-[#3b001b] text-white shadow-lg"
                        : "bg-white text-black border-2 border-black hover:scale-105"
                    }`}
                  >
                    {step.id}
                  </button>
                ))}
              </div>

              <h3 className="font-bold font-oswald text-2xl md:text-3xl text-[#3b001b] mb-4 leading-tight">{currentStep?.title}</h3>
              <p className="text-[#3b001b] text-1xl md:text-1xl font-oswald text-base md:text-lg leading-relaxed opacity-90">{currentStep?.description}</p>
            </div>

            {/* Right illustration */}
            <div className="order-1 md:order-2 relative h-64 md:h-80">
              {/* Animated PNG image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  key={`img-${activeStep}`}
                  className="relative w-full h-full flex items-center justify-center"
                  style={{
                    animation: "imageSlideIn 0.7s ease-out",
                  }}
                >
                  <img
                    src={currentStep?.imageSrc}
                    alt={currentStep?.title}
                    className="w-[80%] md:w-[60%] lg:w-[60%] h-auto object-contain mx-auto transition-all duration-300"

                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes imageSlideIn {
            0% {
              opacity: 0;
              transform: translateX(100px) scale(0.8) rotate(5deg);
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1) rotate(0deg);
            }
          }

          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  )
}