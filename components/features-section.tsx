export default function FeaturesSection() {
    const features = [
      {
        title: "Deadlines? We Eat Them.",
        description: "We sprint with ideas faster than coffee kicks in — your timelines are safe with us.",
        bgColor: "bg-[#d4f4dd]",
        image: "/img01.png",
      },
      {
        title: "No Fine Print Games.",
        description: "Clear, upfront pricing — the only surprise you’ll get is how good the work looks.",
        bgColor: "bg-[#f5d4e8]",
        image: "/img02.png",
      },
      {
        title: "One-Stop Creative Circus",
        description: "Designs, brands, websites, campaigns — everything under one roof, minus the juggling clowns.",
        bgColor: "bg-[#fef6c8]",
        image: "/img03.png",
      },
    ]
  
    return (
      <section className="w-full bg-[#fef6e8] py-16 px-4 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Illustration Container */}
                <div
                  className="mb-6 flex h-70 w-70 items-center justify-center rounded-full p-8"
                >
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="h-full w-full object-contain"
                  />
                </div>
  
                {/* Title */}
                <h3 className="mb-4 font-oswald text-2xl font-bold leading-tight text-[#3d1a1f] md:text-3xl">
                  {feature.title}
                </h3>
  
                {/* Description */}
                <p className="max-w-sm w-65 text-base font-oswald leading-relaxed text-[#3d1a1f]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  