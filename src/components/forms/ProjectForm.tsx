// Project creation form
'use client'
import React from 'react'

interface ProjectFormProps {
  onSubmit: (data: any) => void
  initialData?: any
}

export default function ProjectForm({ onSubmit, initialData }: ProjectFormProps) {
  return (
    <form>
      {/* Title */}
      {/* Description */}
      {/* Category */}
      {/* Location */}
      {/* Budget needed */}
      {/* Submit button */}
    </form>
  )
}
