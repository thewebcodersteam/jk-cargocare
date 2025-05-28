"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const clients = [
  { name: "Zuari Agro Chemicals", logo: "/placeholder.svg?height=80&width=160" },
  { name: "West Coast Paper Mills", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Chambal Fertilizers", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Marico", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Coromandel", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Grasim", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Avestra", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Agrimass", logo: "/placeholder.svg?height=80&width=160" },
  { name: "WCI Shipping", logo: "/placeholder.svg?height=80&width=160" },
]

export function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 3))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0">
            <div className="grid grid-cols-3 gap-8">
              {clients.slice(slideIndex * 3, slideIndex * 3 + 3).map((client, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
