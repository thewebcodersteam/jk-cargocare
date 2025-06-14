"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"

const locations = [
  {
    state: "Mahārāshtra",
    label: "Mumbai",
    description: "Main logistics hub handling imports & exports.",
  },
  {
    state: "Karnātaka",
    label: "Karnataka",
    description: "South India coordination and tech support center.",
  },
  {
    state: "Rājasthān",
    label: "Kota",
    description: "Regional office for warehousing and distribution.",
  },
  {
    state: "Delhi",
    label: "Delhi – Capital Territory",
    description: "Corporate client liaison and customs clearance.",
  },
  {
    state: "Madhya Pradesh",
    label: "Madhya Pradesh",
    description: "Inland distribution point and container storage.",
  },
  {
    state: "Goa",
    label: "HQ",
    description: "JK Cargocare Headquarters – Command center.",
  },
  {
    state: "Gujarāt",
    label: "Gujarat",
    description: "Port and sea logistics – Haz cargo handling.",
  },
  {
    state: "Tamil Nādu",
    label: "Tamil Nadu (Pan-India)",
    description: "Pan-India operational base and partner network.",
  },
  {
    state: "Uttar Pradesh",
    label: "Uttar Pradesh",
    description: "Northern distribution coordination and warehousing.",
  },
  {
    state: "Bihār",
    label: "Bihar",
    description: "Pan-India partner network and emerging trade route.",
  },
  {
    state: "Kerala",
    label: "Kerala",
    description: "Coastal shipping, port logistics, and regional hub.",
  },
  {
    state: "Chhattīsgarh",
    label: "Chhattisgarh",
    description: "Mineral transport and central India logistics.",
  },
  {
    state: "Andhra Pradesh",
    label: "Andhra Pradesh",
    description: "Eastern corridor and Vizag port operations.",
  },
]

type Location = {
  state: string
  label: string
  description: string
}

export function InteractiveMap() {
  const mapRef = useRef(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [selected, setSelected] = useState<Location | null>(null)

  useEffect(() => {
    const width = 800
    const height = 600

    const svg = d3
      .select(mapRef.current)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", "w-full h-auto")

    const projection = d3
      .geoMercator()
      .scale(1000)
      .center([82.8, 22.6])
      .translate([width / 2, height / 2])

    const path = d3.geoPath().projection(projection)

    d3.json("/map_images/assets/geoBoundaries-IND-ADM1.topojson").then((data) => {
      const objectKey = Object.keys(data.objects)[0]
      const states = feature(data, data.objects[objectKey])

      svg
        .selectAll("path")
        .data(states.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#e5e7eb") // Tailwind gray-200
        .attr("stroke", "#9ca3af") // Tailwind gray-400
        .attr("stroke-width", 0.7)

      locations.forEach((loc) => {
        const matchedState = states.features.find(
          (f) => f.properties.shapeName?.toLowerCase() === loc.state.toLowerCase()
        )

        if (matchedState) {
          const [x, y] = path.centroid(matchedState)

          svg
            .append("image")
            .attr("href", "/map_images/assets/images/location-marker.png")
            .attr("x", x - 12)
            .attr("y", y - 24)
            .attr("width", 24)
            .attr("height", 24)
            .style("cursor", "pointer")
            .on("click", () => setSelected(loc))
            .on("mouseover", function () {
              svg
                .append("text")
                .attr("id", "tooltip")
                .attr("x", x + 10)
                .attr("y", y - 15)
                .attr("fill", "#000")
                .attr("font-size", 12)
                .text(loc.label)
            })
            .on("mouseout", function () {
              svg.select("#tooltip").remove()
            })
        }
      })
    })
  }, [])

  useEffect(() => {
    if (selected && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }, 100)
    }
  }, [selected])

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-3xl mx-auto">
        {/* Map Section */}
        <div ref={mapRef} className="w-full aspect-[4/3]" />

        {/* Info Card Section */}
        {selected && (
          <div ref={cardRef} className="mt-8">
            <div className="bg-white border border-gray-300 rounded-xl shadow-xl p-6 max-w-2xl mx-auto transition-all duration-300 hover:shadow-blue-400 hover:shadow-2xl relative z-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{selected.label}</h2>
              <p className="text-gray-600">{selected.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
