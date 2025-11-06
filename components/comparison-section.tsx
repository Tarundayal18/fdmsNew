"use client"

import type React from "react"

interface ComparisonItem {
  icon: React.ReactNode
  text: string
}

interface ComparisonSectionProps {
  leftTitle?: string
  rightTitle?: string
  leftItems?: ComparisonItem[]
  rightItems?: ComparisonItem[]
}

// Icon Components - Sad Face for Left Side
// Common Sad Face Icon (for Other Agencies)
const SadIcon = () => (
  <svg
    className="w-5 h-5 text-[#3b001b]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
    <circle cx="15" cy="9" r="1.5" fill="currentColor" />
    {/* Sad mouth */}
    <path
      d="M9 16c0-1.5 1.5-3 3-3s3 1.5 3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
)

// Agenius icons (flat brown, no bg)
const StarIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const ChatIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const SmileIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
  </svg>
)

const ChartIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M3 3v18h18M7 16l4-4 4 4 6-6" />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const TagIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1" fill="currentColor" />
  </svg>
)

const BoltIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
)

const FavoriteIcon = () => (
  <svg className="w-5 h-5 text-[#3b001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)


const defaultLeftItems: ComparisonItem[] = [
  { icon: <SadIcon />, text: "Generic Solutions" },
  { icon: <SadIcon />, text: "Jargon Overload" },
  { icon: <SadIcon />, text: "Boring Creativity" },
  { icon: <SadIcon />, text: "Fluff Metrics" },
  { icon: <SadIcon />, text: "One-Time Campaigners" },
  { icon: <SadIcon />, text: "Hidden Costs" },
  { icon: <SadIcon />, text: "Outdated Methods" },
  { icon: <SadIcon />, text: "Limited Scope" },
  { icon: <SadIcon />, text: "Reactive Tactics" },
  { icon: <SadIcon />, text: "Just Another Client" },
]

const defaultRightItems: ComparisonItem[] = [
  { icon: <StarIcon />, text: "Personalized Plans" },
  { icon: <ChatIcon />, text: "Plain Talk" },
  { icon: <SmileIcon />, text: "Bold Ideas" },
  { icon: <ChartIcon />, text: "Real ROI" },
  { icon: <HeartIcon />, text: "Long-Term Partners" },
  { icon: <TagIcon />, text: "Transparent Pricing" },
  { icon: <BoltIcon />, text: "Innovative Tools" },
  { icon: <BriefcaseIcon />, text: "Full-Service Experts" },
  { icon: <SearchIcon />, text: "Proactive Strategies" },
  { icon: <FavoriteIcon />, text: "Passion & Care" },
]

export default function ComparisonSection({
  leftTitle = "Other Agencies",
  rightTitle = "Agenius",
  leftItems = defaultLeftItems,
  rightItems = defaultRightItems,
}: ComparisonSectionProps) {
  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Main Heading Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="relative inline-block w-full">
            <h1 className="font-oswald font-bold text-5xl md:text-6xl lg:text-8xl text-[#3b001b] leading-tight">
              Built different
            </h1>
            <div className="flex items-center justify-center gap-4 mt-2 flex-wrap">
              <span className="font-oswald font-bold text-5xl md:text-6xl lg:text-8xl text-[#3b001b]">
                (in a good way)
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="relative">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 relative">
            {/* Left Column - Other Agencies */}
            <div className="relative">
              {/* Pink Box */}
              <div className="bg-pink-300 rounded-3xl p-6 md:p-8 lg:p-10 relative z-10">
                {/* Title Inside Box */}
                <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-4xl text-[#3b001b] mb-6 md:mb-8 text-center">
                  {leftTitle}
                </h2>

                {/* Wavy Right Edge */}
                <div className="absolute -right-4 top-0 bottom-0 w-8 flex flex-col justify-around hidden md:flex">
                  <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                </div>

                {/* Items List */}
                <div className="space-y-4 md:space-y-5">
                  {leftItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 pb-4 border-b border-gray-400 last:border-b-0">
                      <div className="w-8 h-8 rounded-full  flex items-center justify-center flex-shrink-0 text-white">
                        {item.icon}
                      </div>
                      <span className="text-gray-900 font-medium text-sm font-oswald md:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Versus Badge */}
            <div className="flex justify-center my-4 md:hidden">
              <div className="bg-gray-900 text-white px-6 py-3 rounded-full font-oswald font-bold text-lg whitespace-nowrap shadow-lg">
                Versus
              </div>
            </div>

            {/* Right Column - Agenius */}
            <div className="relative">
              {/* Yellow Box */}
              <div className="bg-yellow-200 rounded-3xl p-6 md:p-8 lg:p-10 relative z-10">
                {/* Title Inside Box */}
                <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-4xl text-[#3b001b] mb-6 md:mb-8 text-center">
                  {rightTitle}
                </h2>

                {/* Wavy Left Edge */}
                <div className="absolute -left-4 top-0 bottom-0 w-8 flex flex-col justify-around hidden md:flex">
                  <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                </div>

                {/* Items List */}
                <div className="space-y-4 md:space-y-5">
                  {rightItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 pb-4 border-b border-gray-400 last:border-b-0">
                      <div className="w-8 h-8 rounded-full   flex items-center justify-center flex-shrink-0 text-white">
                        {item.icon}
                      </div>
                      <span className="text-gray-900 font-medium text-sm font-oswald md:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Versus Badge - Centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
              <div className="bg-gray-900 text-white px-6 py-3 rounded-full font-oswald font-bold text-lg md:text-xl whitespace-nowrap shadow-lg">
                Versus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}