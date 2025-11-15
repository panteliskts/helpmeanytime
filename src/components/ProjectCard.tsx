// Project card component for grid displays
import React from 'react'

interface ProjectCardProps {
  project: any
  onClick?: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {/* Project image */}
      {/* Title */}
      {/* Status badge */}
      {/* Progress bar */}
      {/* Pledge count */}
    </div>
  )
}
