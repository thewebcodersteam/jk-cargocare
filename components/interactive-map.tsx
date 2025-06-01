"use client"

import { useEffect } from "react"

export function InteractiveMap() {
  useEffect(() => {
    const mapdataScript = document.createElement("script")
    mapdataScript.src = "/mapdata.js"
    mapdataScript.async = true
    document.body.appendChild(mapdataScript)

    const renderScript = document.createElement("script")
    renderScript.src = "/countrymap.js"
    renderScript.async = true
    document.body.appendChild(renderScript)

    return () => {
      document.body.removeChild(mapdataScript)
      document.body.removeChild(renderScript)
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Client Locations in India</h2>

      {/* Map Wrapper */}
      <div className="w-full flex justify-center items-center border shadow-md rounded-md overflow-hidden bg-white">
        <div
          id="map"
          className="w-full min-h-[600px] flex justify-center items-center"
        ></div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-4">
        Click on the location markers or states to view client details.
      </p>
    </div>
  )
}
