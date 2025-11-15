// TypeScript types and interfaces for the application

export interface User {
  id: string
  email: string
  name: string
  role: 'citizen' | 'volunteer' | 'business' | 'municipality'
  avatar?: string
  createdAt: Date
}

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  status: ProjectStatus
  location: Location
  creatorId: string
  creator?: User
  budgetNeeded: number
  budgetPledged: number
  images?: string[]
  pledges?: Pledge[]
  municipalityApproved: boolean
  municipalityNotes?: string
  createdAt: Date
  updatedAt: Date
}

export interface Pledge {
  id: string
  projectId: string
  userId: string
  user?: User
  type: PledgeType
  amount?: number // for money
  hours?: number // for time
  materials?: string // description of materials
  description: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: Date
}

export interface Location {
  lat: number
  lng: number
  address: string
  district?: string
}

export type ProjectCategory = 
  | 'infrastructure' 
  | 'parks' 
  | 'community' 
  | 'environment' 
  | 'culture' 
  | 'safety'
  | 'other'

export type ProjectStatus = 
  | 'draft'
  | 'pending_approval'
  | 'approved'
  | 'in_progress'
  | 'completed'
  | 'rejected'

export type PledgeType = 'time' | 'money' | 'materials'

export interface MunicipalityStats {
  totalProjects: number
  pendingApprovals: number
  activeProjects: number
  completedProjects: number
  totalPledges: number
  totalVolunteers: number
}

export interface DashboardStats {
  myProjects: number
  myPledges: number
  hoursContributed: number
  moneyContributed: number
}
