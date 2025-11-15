// ============================================
// 👨‍💻 DEVELOPER 2 - TASK 4 (Hour 6-8)
// ============================================
// 
// Custom hook για Pledges - THE WOW FACTOR HOOK!
//
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ:
// 1. Φτιάξε functions:
//    - fetchPledges(projectId) -> GET /api/pledges?projectId=xxx
//    - createPledge(data) -> POST /api/pledges
//    - fetchStats(projectId) -> GET /api/pledges/stats?projectId=xxx
//
// 2. State management:
//    - pledges: Pledge[]
//    - stats: { total_money, total_hours, total_materials, progress }
//    - loading: boolean
//
// 3. (BONUS) Real-time subscriptions:
//    - Χρησιμοποίησε Supabase real-time
//    - Όταν κάποιος κάνει pledge, ανανέωσε αυτόματα τα stats!
//
// ΠΑΡΑΔΕΙΓΜΑ ΧΡΗΣΗΣ:
// const { pledges, stats, createPledge } = usePledges(projectId)
// 
// <div>Progress: {stats.progress_percentage}%</div>
// <button onClick={() => createPledge({ type: 'money', amount: 50 })}>
//   Pledge €50
// </button>
//
// Αυτό θα το χρησιμοποιείς στο PledgeCounter component!
//
// ΧΡΟΝΟΣ: 2 ώρες
// ============================================

'use client'
import { useState, useEffect } from 'react'
import { Pledge } from '@/types'
// import { supabase } from '@/lib/supabase' // για real-time

interface PledgeStats {
  total_money: number
  total_hours: number
  total_materials: number
  pledge_count: number
  progress_percentage: number
  breakdown: {
    money_pledges: number
    time_pledges: number
    materials_pledges: number
  }
}

export function usePledges(projectId?: string) {
  const [pledges, setPledges] = useState<Pledge[]>([])
  const [stats, setStats] = useState<PledgeStats | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // TODO: Φτιάξε fetchPledges function
  const fetchPledges = async (projectId: string) => {
    setLoading(true)
    try {
      // TODO: Call GET /api/pledges?projectId=xxx
      // const response = await fetch(`/api/pledges?projectId=${projectId}`)
      // const data = await response.json()
      // setPledges(data.pledges)
    } catch (err) {
      setError('Failed to fetch pledges')
    } finally {
      setLoading(false)
    }
  }
  
  // TODO: Φτιάξε fetchStats function - ΤΟ ΠΙΟ ΣΗΜΑΝΤΙΚΟ!
  const fetchStats = async (projectId: string) => {
    try {
      // TODO: Call GET /api/pledges/stats?projectId=xxx
      // const response = await fetch(`/api/pledges/stats?projectId=${projectId}`)
      // const data = await response.json()
      // setStats(data.stats)
    } catch (err) {
      setError('Failed to fetch stats')
    }
  }
  
  // TODO: Φτιάξε createPledge function
  const createPledge = async (pledgeData: {
    project_id: string
    type: 'money' | 'time' | 'materials'
    amount?: number
    hours?: number
    materials?: string
  }) => {
    try {
      // TODO: Call POST /api/pledges
      // const response = await fetch('/api/pledges', {
      //   method: 'POST',
      //   body: JSON.stringify(pledgeData)
      // })
      
      // Refresh pledges and stats
      // await fetchPledges(pledgeData.project_id)
      // await fetchStats(pledgeData.project_id)
    } catch (err) {
      setError('Failed to create pledge')
    }
  }
  
  // TODO: BONUS - Real-time subscriptions
  // useEffect(() => {
  //   if (!projectId) return
  //   
  //   const subscription = supabase
  //     .channel('pledges')
  //     .on('postgres_changes', 
  //       { event: '*', schema: 'public', table: 'pledges' },
  //       (payload) => {
  //         console.log('New pledge!', payload)
  //         fetchStats(projectId) // Ανανέωσε τα stats!
  //       }
  //     )
  //     .subscribe()
  //   
  //   return () => {
  //     subscription.unsubscribe()
  //   }
  // }, [projectId])
  
  // Auto-fetch όταν έχουμε projectId
  useEffect(() => {
    if (projectId) {
      fetchPledges(projectId)
      fetchStats(projectId)
    }
  }, [projectId])
  
  return {
    pledges,
    stats,
    loading,
    error,
    fetchPledges,
    fetchStats,
    createPledge,
  }
}
