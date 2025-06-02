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

    // MutationObserver to remove Simplemaps.com link
    const observer = new MutationObserver(() => {
      const trialLink = document.querySelector('a[href="https://simplemaps.com"]')
      if (trialLink) {
        trialLink.remove()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      document.body.removeChild(mapdataScript)
      document.body.removeChild(renderScript)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Client Locations in India</h2>

      {/* Map */}
      <div id="map" className="w-full min-h-[5px]" />
      
    </div>
  )
}
