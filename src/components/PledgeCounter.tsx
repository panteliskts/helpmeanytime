// Pledge counter component - Shows time/money/materials pledged
'use client'
import React from 'react'
import { Pledge, PledgeType } from '@/types'

interface PledgeCounterProps {
  pledges: Pledge[]
  type: PledgeType
}

export default function PledgeCounter({ pledges, type }: PledgeCounterProps) {
  const typePledges = pledges.filter(p => p.type === type)
  
  const total = typePledges.reduce((sum, pledge) => {
    if (type === 'money') return sum + (pledge.amount || 0)
    if (type === 'time') return sum + (pledge.hours || 0)
    return sum + 1 // materials count
  }, 0)
  
  const getIcon = () => {
    switch(type) {
      case 'time': return '⏰'
      case 'money': return '💰'
      case 'materials': return '🛠️'
    }
  }
  
  const getLabel = () => {
    switch(type) {
      case 'time': return `${total} ώρες`
      case 'money': return `€${total}`
      case 'materials': return `${total} δωρεές`
    }
  }
  
  return (
    <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow">
      <span className="text-2xl">{getIcon()}</span>
      <div>
        <p className="text-sm text-gray-600 capitalize">{type}</p>
        <p className="text-xl font-bold">{getLabel()}</p>
        <p className="text-xs text-gray-500">{typePledges.length} συμμετοχές</p>
      </div>
    </div>
  )
}
