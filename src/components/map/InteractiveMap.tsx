// Interactive map component using Leaflet
'use client'
import React from 'react'

interface MapProps {
  center?: [number, number]
  zoom?: number
  projects?: any[]
}

export default function InteractiveMap({ 
  center = [37.9838, 23.7275], // Athens coordinates
  zoom = 13,
  projects = []
}: MapProps) {
  return (
    <div className="h-full w-full">
      {/* Map container */}
      {/* Will implement Leaflet map here */}
    </div>
  )
}
