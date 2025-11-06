"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We specialize in branding, web design, content creation, social media management, and creative strategy. Basically, if it needs a creative touch, we're your people!",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "It varies! A simple branding project might take a few weeks, while a full website build can take a couple of months. We'll give you a clear timeline upfront.",
  },
  {
    id: 3,
    question: "How do you ensure the work matches my vision?",
    answer:
      "Communication is key. We start with a deep dive into your goals and have regular check-ins and feedback rounds to make sure we're always on the same page.",
  },
  {
    id: 4,
    question: "Do you offer revisions?",
    answer:
      "Absolutely. We include a set number of revision rounds in every project to ensure you're 100% happy with the final result.",
  },
  {
    id: 5,
    question: "Can you work with my existing brand guidelines?",
    answer:
      "For sure. We're experts at adapting to existing brand identities and can help you build upon them consistently and creatively.",
  },
  {
    id: 6,
    question: "What's the payment structure like?",
    answer:
      "We typically require a 50% deposit to kick things off, with the remaining balance due upon project completion. We can be flexible for larger projects.",
  },
  {
    id: 7,
    question: "Do you offer ongoing support after the project is completed?",
    answer:
      "Yes, we do! We offer a range of support and retainer packages to help you with ongoing needs, whether it's content updates, site maintenance, or new creative assets.",
  },
]

export default function FaqSection() {
  const [expandedId, setExpandedId] = useState<number | null>(2)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="w-full px-4 py-12 md:py-20" style={{ backgroundColor: "#F09FA8" }}>
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-8xl md:text-10xl font-bold mb-4" style={{ color: "#3B001B", fontFamily: "Oswald" }}>
            You ask,
            <br />
            we answer.
          </h1>
          {/* <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: "#FFFACD" }}>
            <span className="text-sm md:text-base font-bold" style={{ color: "#3B001B", fontFamily: "Oswald" }}>
              FAQs
            </span>
          </div> */}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 md:space-y-3">
          {faqItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              {/* Question Button */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 md:px-8 py-2 md:py-2 rounded-2xl flex items-center justify-between hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#FFFACD" }}
              >
                <h3
                  className="text-lg md:text-xl font-bold text-left flex-1"
                  style={{ color: "#3B001B", fontFamily: "Oswald" }}
                >
                  {item.question}
                </h3>
                <div
                  className="flex-shrink-0 ml-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#A8D8D8" }}
                >
                  {expandedId === item.id ? (
                    <ChevronUp size={24} style={{ color: "#3B001B" }} />
                  ) : (
                    <ChevronDown size={24} style={{ color: "#3B001B" }} />
                  )}
                </div>
              </button>

              {/* Answer - appears below as separate box */}
              {expandedId === item.id && (
                <div className="mt-4 md:mt-5 ml-4 md:ml-8 mr-4 md:mr-0 animate-in fade-in duration-300">
                  <div
                    className="rounded-3xl font-oswald p-5 md:p-6 text-sm md:text-base leading-relaxed"
                    style={{ backgroundColor: "#A8D8D8", color: "#3B001B" }}
                  >
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
