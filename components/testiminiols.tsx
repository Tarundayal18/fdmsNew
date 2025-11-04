"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PaginationDots from "./paginationdot"
import VideoTestimonials from "./video-testimonials"
import TestimonialCard from "./testimonial-card"

const testimonials = [
  {
    id: 1,
    name: "Tobias Green Says...",
    quote:
      '"Working with this team was a dream. Super organized, wildly creative, and just fun to talk to. They totally got our brand from day one."',
    company: "Founder, GreenSpark Innovations",
    avatar: "🌟",
    bgColor: "bg-[#f09fa8]",
    textColor: "text-[#3b001b]",
    borderColor: "border-pink-300",
  },
  {
    id: 2,
    name: "Silas Leighton Says...",
    quote:
      '"They took our messy ideas and turned them into a stunning identity. Everything feels cohesive, intentional, and us. We\'re obsessed."',
    company: "Managing Director, VentureVista",
    avatar: "👨",
    bgColor: "bg-[#f6c2f4]",
    textColor: "text-[#3b001b]",
    borderColor: "border-purple-300",
  },
  {
    id: 3,
    name: "Orion Vance Says...",
    quote:
      '"We still get compliments on our branding. It feels premium, fun, and totally fits our vibe. Couldn\'t have asked for a better team."',
    company: "CEO, Lunar Lux Co.",
    avatar: "⭐",
    bgColor: "bg-[#fefae7]",
    textColor: "text-[#3b001b]",
    borderColor: "border-yellow-200",
  },
  {
    id: 4,
    name: "Callum",
    quote:
      '"We\'ve worked with agencies, but this was different—in the best way. Creative with purpose, amazing attention to detail."',
    company: "Co-Founder, Media",
    avatar: "👤",
    bgColor: "bg-[#c7caff]",
    textColor: "text-[#3b001b]",
    borderColor: "border-blue-300",
  },
  {
    id: 5,
    name: "Callum",
    quote:
      '"We\'ve worked with agencies, but this was different—in the best way. Creative with purpose, amazing attention to detail."',
    company: "Co-Founder, Media",
    avatar: "👤",
    bgColor: "bg-[#f6c2f4]",
    textColor: "text-[#3b001b]",
    borderColor: "border-blue-300",
  },
  {
    id: 6,
    name: "Callum",
    quote:
      '"We\'ve worked with agencies, but this was different—in the best way. Creative with purpose, amazing attention to detail."',
    company: "Co-Founder, Media",
    avatar: "👤",
    bgColor: "bg-[#c0ecbf]",
    textColor: "text-[#3b001b]",
    borderColor: "border-blue-300",
  },
]

const videoTestimonials = [
  {
    id: 1,
    name: "Magnus Hawthorne",
    title: "Owner, Bayleaf",
    image: "/macbook1.jpg",
    bgColor: "bg-[#f6c2f4]",
    borderColor: "border-[#f6c2f4]",
  },
  {
    id: 2,
    name: "Thaddeus Montgomery",
    title: "Owner, Goldgarden",
    image: "/mac.jpg",
    bgColor: "bg-[#c7caff]",
    borderColor: "border-[#c7caff]",
  },
]

 export default function Tesiminiols() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2)
      } else {
        setItemsToShow(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const goToPrevious = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < itemsToShow; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return items
  }

  return (
    <main className="min-h-screen bg-[#fae0be] px-4 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h1 className="font-oswald text-6xl font-bold text-[#3b001b] md:text-6xl lg:text-8xl">
            Clients talk
            <br />
            <span className="relative inline-block">
              & we blush
              <span className="absolute -right-6 -top-3 inline-block rotate-12 transform rounded-full bg-purple-300 px-3 py-1 text-xs font-semibold text-purple-900 md:-right-10 md:-top-5 md:px-4 md:py-2 md:text-sm lg:-right-12 lg:-top-6">
                Testimonials
              </span>
            </span>
          </h1>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -right-2 -top-14 z-10 flex gap-2 md:-right-4 md:-top-16 lg:-right-6 lg:-top-20">
            <button
              onClick={goToPrevious}
              disabled={isTransitioning}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 text-white transition-transform hover:scale-110 disabled:opacity-50 md:h-12 md:w-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="md:h-6 md:w-6" />
            </button>
            <button
              onClick={goToNext}
              disabled={isTransitioning}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 text-white transition-transform hover:scale-110 disabled:opacity-50 md:h-12 md:w-12"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="md:h-6 md:w-6" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="carousel-container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {getVisibleTestimonials().map((testimonial) => (
              <div key={testimonial.id} className="carousel-item">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-12 flex justify-center gap-2 md:mt-16 lg:mt-20">
            <PaginationDots total={testimonials.length} current={currentIndex} onDotClick={goToSlide} />
          </div>
        </div>

        {/* <div className="mt-20 md:mt-24 lg:mt-32">
          <VideoTestimonials testimonials={videoTestimonials} />
        </div> */}

      </div>
    </main>
  )
}
