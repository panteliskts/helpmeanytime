// Progress bar component for pledge tracking
'use client'
import React from 'react'

interface ProgressBarProps {
  current: number
  target: number
  label?: string
  color?: string
  showPercentage?: boolean
}

export default function ProgressBar({ 
  current, 
  target, 
  label,
  color = 'blue',
  showPercentage = true
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((current / target) * 100), 100)
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">{label}</span>
          {showPercentage && <span className="text-sm text-gray-600">{percentage}%</span>}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`bg-${color}-500 h-3 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
