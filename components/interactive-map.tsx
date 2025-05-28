"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const states = [
  {
    name: "Goa",
    position: { top: "65%", left: "25%" },
    services: ["Headquarters", "Warehousing", "All Services"],
    isHQ: true,
  },
  {
    name: "Maharashtra",
    position: { top: "55%", left: "30%" },
    services: ["Freight Transport", "Manpower Services"],
  },
  {
    name: "Gujarat",
    position: { top: "45%", left: "20%" },
    services: ["Chemical Transport", "Bulk Cargo"],
  },
  {
    name: "Rajasthan",
    position: { top: "35%", left: "25%" },
    services: ["Long Distance Transport", "ODC Services"],
  },
  {
    name: "Madhya Pradesh",
    position: { top: "45%", left: "35%" },
    services: ["Freight Solutions", "Field Operations"],
  },
  {
    name: "Karnataka",
    position: { top: "70%", left: "35%" },
    services: ["Manufacturing Support", "Warehousing"],
  },
  {
    name: "Tamil Nadu",
    position: { top: "80%", left: "40%" },
    services: ["Port Operations", "Inbound Shipments"],
  },
]

export function InteractiveMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null)
  const [selectedState, setSelectedState] = useState<string | null>(null)

  const getStateInfo = (stateName: string) => {
    return states.find((state) => state.name === stateName)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-8 min-h-[500px]">
        {/* India Map Outline (simplified) */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <path
              d="M100 50 L300 50 L350 100 L320 200 L280 250 L200 280 L120 250 L80 200 L70 150 Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* State Pins */}
        {states.map((state) => (
          <div
            key={state.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={state.position}
            onMouseEnter={() => setHoveredState(state.name)}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => setSelectedState(selectedState === state.name ? null : state.name)}
          >
            <div
              className={`relative transition-all duration-200 ${
                hoveredState === state.name || selectedState === state.name ? "scale-125" : ""
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 border-white shadow-lg ${
                  state.isHQ ? "bg-red-500" : "bg-blue-500"
                } ${hoveredState === state.name ? "animate-pulse" : ""}`}
              ></div>

              {/* State Label */}
              <div
                className={`absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs font-medium whitespace-nowrap transition-opacity ${
                  hoveredState === state.name || selectedState === state.name ? "opacity-100" : "opacity-0"
                }`}
              >
                {state.name}
                {state.isHQ && <span className="text-red-500 ml-1">(HQ)</span>}
              </div>
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
          <div className="text-sm font-medium mb-2">Legend</div>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Headquarters</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Service Location</span>
            </div>
          </div>
        </div>
      </div>

      {/* State Information Card */}
      {selectedState && (
        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">
              {selectedState}
              {getStateInfo(selectedState)?.isHQ && <span className="text-red-500 text-sm ml-2">(Headquarters)</span>}
            </h3>
            <div>
              <h4 className="font-medium mb-2">Available Services:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {getStateInfo(selectedState)?.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      <div className="text-center mt-4 text-gray-600 text-sm">
        Hover over or click the pins to see our services in each state
      </div>
    </div>
  )
}
