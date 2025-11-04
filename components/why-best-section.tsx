"use client"

import { Zap, Palette, Layers, Heart, Globe, CheckCircle } from "lucide-react"

const reasons = [
    {
        title: "Bold Sparks",
        description: "Ideas that smash the ordinary and spark unforgettable brand moments.",
        bgColor: "#FAFABF",
        image: "/img01.png",
    },
    {
        title: "Pixel Power",
        description: "Smart, strategic visuals that look stunning and work harder to grow your brand.",
        bgColor: "#C0ECBF",
        image: "/img02.png",
    },
    {
        title: "Flex Mode",
        description: "Agile solutions that bend, shift, and evolve with fast-changing market trends.",
        bgColor: "#FAE0BE",
        image: "/img03.png",
    },
    {
        title: "People First",
        description: "Brands built on empathy — designed to connect emotionally and feel truly human.",
        bgColor: "#FEFAE7",
        image: "/img01.png",
    },
    {
        title: "World + Street",
        description: "Global insights with a local heartbeat — making your brand big and relatable.",
        bgColor: "#F6C2F4",
        image: "/img02.png",
    },
    {
        title: "Surprise Inside",
        description: "Out-of-the-box ideas that hook attention and make your brand unforgettable.",
        bgColor: "#C7CAFF",
        image: "/img03.png",
    },
    {
        title: "Micro Magic",
        description: "Designs so refined, even the tiniest detail makes a big difference.",
        bgColor: "#FEFAE7",
        image: "/img01.png",
    },
]

export default function WhyBestSection() {
    return (
        <section className="bg-[#3e1827] py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-8xl mx-auto">
                {/* Heading */}
                <div className="relative mb-16 md:mb-20 text-center">
                    <h2 className="font-oswald text-6xl md:text-8xl font-semibold text-[#fef9e6] leading-tight inline-block">
                        Why we are
                        <br />
                        the best
                    </h2>
                </div>

                {/* Card grid */}
                <div className="space-y-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
                        {reasons.slice(0, 2).map((item, i) => (
                            <div
                                key={i}
                                className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                                style={{ backgroundColor: item.bgColor, color: "#3B001B" }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 md:w-44 md:h-34 mb-6 object-contain"
                                />
                                <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="font-oswald text-sm md:text-base leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
                        {reasons.slice(2, 5).map((item, i) => (
                            <div
                                key={i}
                                className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                                style={{ backgroundColor: item.bgColor, color: "#3B001B" }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 md:w-44 md:h-34 mb-6 object-contain"
                                />
                                <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="font-oswald text-sm md:text-base leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
                        {reasons.slice(5, 7).map((item, i) => (
                            <div
                                key={i}
                                className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                                style={{ backgroundColor: item.bgColor, color: "#3B001B" }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 md:w-44 md:h-34 mb-6 object-contain"
                                />
                                <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="font-oswald text-sm md:text-base leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
