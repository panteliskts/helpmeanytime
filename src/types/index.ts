// ============================================
// 👨‍💻 DEVELOPER 2 - TASK 2 (Hour 2-4)
// ============================================
// 
// ΟΙ TYPES ΥΠΑΡΧΟΥΝ ΗΔΗ! ✅
//
// Έχεις έτοιμα:
// - User (με roles: citizen, volunteer, business, municipality)
// - Project (με όλα τα fields που χρειάζεσαι)
// - Pledge (3 types: time, money, materials)
// - ProjectStatus (pending_approval, approved, in_progress, κλπ)
//
// ΤΙ ΜΠΟΡΕΙΣ ΝΑ ΠΡΟΣΘΕΣΕΙΣ (προαιρετικό):
// 1. Validation schemas (αν χρησιμοποιείς Zod)
// 2. API Response types:
//    type ApiResponse<T> = { data: T, error?: string }
// 3. Input types για forms:
//    type ProjectInput = Omit<Project, 'id' | 'createdAt'>
//
// Αυτά τα types θα τα χρησιμοποιείς ΠΑΝΤΟΥ!
//
// ΧΡΟΝΟΣ: 2 ώρες (ή skip αν είναι OK)
// COMMIT: "feat: add type definitions and validation"
// ============================================

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
