// Project marker component for map
'use client'
import React from 'react'

interface ProjectMarkerProps {
  project: any
  onClick?: () => void
}

export default function ProjectMarker({ project, onClick }: ProjectMarkerProps) {
  return (
    <div onClick={onClick}>
      {/* Custom marker with project info */}
    </div>
  )
}
