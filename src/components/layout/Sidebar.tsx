// Sidebar component for dashboards
'use client'
import React from 'react'

interface SidebarProps {
  children: React.ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-lg">
      {/* Sidebar navigation */}
      {children}
    </aside>
  )
}
