"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import "@fontsource/playfair-display"; // Defaults to 400
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";


interface TopoJSON {
  type: "Topology";
  objects: {
    [key: string]: {
      type: "GeometryCollection";
      geometries: any[]; // You can define this more specifically if needed
    };
  };
  arcs: any;
  transform: any;
}

const locations = [
  {
    state: "Mahārāshtra",
    label: "Mumbai",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Karnātaka",
    label: "Karnataka",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Rājasthān",
    label: "Kota",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Delhi",
    label: "Delhi – Capital Territory",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Madhya Pradesh",
    label: "Madhya Pradesh",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Goa",
    label: "Goa (HQ)",
    description: "Warehousing and shipping operations. JK Cargocare Headquarters.",
  },
  {
    state: "Gujarāt",
    label: "Gujarat",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Tamil Nādu",
    label: "Tamil Nadu (Pan-India)",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Uttar Pradesh",
    label: "Uttar Pradesh",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Bihār",
    label: "Bihar",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Kerala",
    label: "Kerala",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Chhattīsgarh",
    label: "Chhattisgarh",
    description: "Inland transport operations and regional coordination.",
  },
  {
    state: "Andhra Pradesh",
    label: "Andhra Pradesh",
    description: "Inland transport operations and regional coordination.",
  },
];


type Location = {
  state: string;
  label: string;
  description: string;
};

export function InteractiveMap() {
  const mapRef = useRef(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<Location | null>(null);

  useEffect(() => {
    const width = 800;
    const height = 600;

    // Clean up any existing SVG
    d3.select(mapRef.current).select("svg").remove();

    const svg = d3
      .select(mapRef.current)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", "w-full h-auto");

    const projection = d3
      .geoMercator()
      .scale(1000)
      .center([82.8, 22.6])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    d3.json("/map_images/assets/geoBoundaries-IND-ADM1.topojson").then(
      (data) => {
        const topoData = data as TopoJSON;
        const objectKey = Object.keys(topoData.objects)[0];
        const states = feature(
          topoData,
          topoData.objects[objectKey]
        ) as GeoJSON.FeatureCollection;

        svg
          .selectAll("path")
          .data(states.features)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", "#e5e7eb")
          .attr("stroke", "#9ca3af")
          .attr("stroke-width", 0.7);

        locations.forEach((loc) => {
          const matchedState = states.features.find(
            (f) =>
              f.properties?.shapeName?.toLowerCase() === loc.state.toLowerCase()
          );

          if (matchedState) {
            const [x, y] = path.centroid(matchedState);

            svg
              .append("image")
              .attr("href", "/map_images/assets/images/location-marker.webp")
              .attr("x", x - 12)
              .attr("y", y - 24)
              .attr("width", 24)
              .attr("height", 24)
              .style("cursor", "pointer")
              .on("click", () => setSelected(loc))

              .on("mouseover", function () {
                // Clear any existing tooltip immediately
                svg.select("#tooltip").remove();

                // Scale up marker
                d3.select(this)
                  .transition()
                  .duration(150)
                  .attr("width", 28)
                  .attr("height", 28)
                  .attr("x", x - 14)
                  .attr("y", y - 28);

                // Add fresh tooltip
                svg
                  .append("text")
                  .attr("id", "tooltip")
                  .attr("x", x - 10)
                  .attr("y", y - 30)
                  .attr("width", 200)
                  .attr("height", 60)
                  .style("font-family", "'Playfair Display', serif")
                  .style("font-size", "16px")
                  .style("font-weight", "500")
                  .style("color", "#111827")
                  .text(loc.label);
              })
              .on("mouseout", function () {
                // Reset marker size
                d3.select(this)
                  .transition()
                  .duration(150)
                  .attr("width", 24)
                  .attr("height", 24)
                  .attr("x", x - 12)
                  .attr("y", y - 24);

                // Remove tooltip immediately (no delay to prevent overlap)
                svg.select("#tooltip").remove();
              });


          }
        });
      }
    );
  }, []);

  useEffect(() => {
    if (selected && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [selected]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-3xl mx-auto">
        {/* Map Section */}
        <div ref={mapRef} className="w-full aspect-[4/3]" />

        {/* Info Card Section */}
        {selected && (
          <div ref={cardRef} className="mt-8">
            <div className="bg-white border border-gray-300 rounded-xl shadow-xl p-6 max-w-2xl mx-auto transition-all duration-300 hover:shadow-blue-400 hover:shadow-2xl relative z-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {selected.label}
              </h2>
              <p className="text-gray-600">{selected.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
