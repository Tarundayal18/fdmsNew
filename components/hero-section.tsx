"use client"

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#FFF8E7] py-12 md:py-12 overflow-hidden">
      {/* Heading Section */}
      <div className="container mx-auto px-4 text-center mb-12 md:mb-16 mt-18 sm:mt-10 md:mt-14">
        {/* AGENIUS Title with Badges */}
        <div className="relative inline-block">
          <div className="flex justify-center">
            <h1 className="font-oswald text-[120px] md:text-[140px] lg:text-[220px] font-bold text-[#3e1827] leading-none tracking-tighter" style={{ textShadow: '4px 4px 0px #fbe941' }}>
              FdMS
            </h1>
          </div>

          {/* Decorative Badges */}
          <div className="absolute -left-8 md:-left-16 top-4 md:top-8 bg-[#C8E6C9] text-[#3D1A1F] px-3 py-1 rounded-full text-xs md:text-sm font-bold rotate-[-8deg] shadow-md">
            Timeless
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 md:-top-6 bg-[#F8BBD0] text-[#3D1A1F] px-3 py-1 rounded-full text-xs md:text-sm font-bold rotate-[5deg] shadow-md">
            Creative
          </div>
          <div className="absolute -right-8 md:-right-16 top-4 md:top-8 bg-[#D1C4E9] text-[#3D1A1F] px-3 py-1 rounded-full text-xs md:text-sm font-bold rotate-[8deg] shadow-md">
            Edgy
          </div>
        </div>

        <h2 className="font-oswald text-1xl md:text-1xl lg:text-2xl font-medium text-[#3D1A1F] mb-6 md:mb-8 leading-tight">
          A Creative Agency by:

          <br />
          SAUHITYAA

        </h2>

        {/* Subheading */}
        <h2 className="font-oswald text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3D1A1F] mb-6 md:mb-8 leading-tight">
          Designed to be seen.

          <br />
          Built to be remembered.
        </h2>

        {/* CTA Button */}
        <button className="bg-[#FFE878] hover:bg-[#ffed4e] text-lg md:text-xl font-bold px-8 md:px-7 py-3 md:py-3 text-[#3b001b] font-oswald rounded-full border-b-4 border-[#3b001b] shadow-md transition-all duration-200 active:translate-y-1 active:shadow-sm">
          Book a Call
        </button>
      </div>

      {/* Full-width Background Image */}
      <div className="relative w-full flex items-center justify-center mt-8 md:mt-16">
        {/* Background with radial gradient design */}
        <div
          className="w-full h-[20rem] lg:h-[40rem] md:h-[30rem] sm:h-[20rem] xs:h-[22rem]"
          style={{
            backgroundImage: 'radial-gradient(circle at center center, #F6C2F4 0%, #FAFABF 100%), repeating-radial-gradient(circle at center center, rgb(240, 151, 197), rgb(240, 151, 197), 19px, transparent 38px, transparent 19px)',
            backgroundBlendMode: 'multiply'
          }}
        />

        {/* Top Fade Effect */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FFF8E7] to-transparent pointer-events-none z-10" />

        {/* Center Circle Video */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="relative w-64 h-64 sm:w-20 sm:h-20 md:w-[28rem] md:h-[28rem] lg:w-[37rem] lg:h-[37rem] rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/bussiness.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
