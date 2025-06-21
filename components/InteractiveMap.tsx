"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import Spinner from "./base_components/Spinner";

interface TopoJSON {
  type: "Topology";
  objects: {
    [key: string]: {
      type: "GeometryCollection";
      geometries: any[];
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
    description:
      "Warehousing and shipping operations. JK Cargocare Headquarters.",
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

export default function InteractiveMap() {
  const mapRef = useRef(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<Location | null>(null);
  const [mapVisible, setMapVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Set up native intersection observer
  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMapVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, []);

  // D3 map logic when map becomes visible
  useEffect(() => {
    if (!mapVisible) return;

    const width = 800;
    const height = 600;

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
                svg.select("#tooltip").remove();
                d3.select(this)
                  .transition()
                  .duration(150)
                  .attr("width", 28)
                  .attr("height", 28)
                  .attr("x", x - 14)
                  .attr("y", y - 28);

                svg
                  .append("text")
                  .attr("id", "tooltip")
                  .attr("x", x - 10)
                  .attr("y", y - 30)
                  .style("font-family", "'Playfair Display', serif")
                  .style("font-size", "16px")
                  .style("font-weight", "500")
                  .style("fill", "#111827")
                  .text(loc.label);
              })
              .on("mouseout", function () {
                d3.select(this)
                  .transition()
                  .duration(150)
                  .attr("width", 24)
                  .attr("height", 24)
                  .attr("x", x - 12)
                  .attr("y", y - 24);

                svg.select("#tooltip").remove();
              });
          }
        });
        setMapLoaded(true);
      }
    );
  }, [mapVisible]);

  // Scroll to info card when a marker is clicked
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
        {/* Trigger point for observer */}
        <div
          ref={triggerRef}
          className="relative w-full aspect-[4/3] rounded-lg overflow-hidden"
        >
          {/* Map container always rendered */}
          <div
            ref={mapRef}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
              mapLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Spinner overlay */}
          {!mapLoaded && mapVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
              <Spinner />
            </div>
          )}
        </div>

        {/* Info card below the map */}
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
