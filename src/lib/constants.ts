// Constants and configuration
export const APP_NAME = 'PolisPraxis'
export const APP_DESCRIPTION = 'Bridging Citizens & Municipality for Collaborative Civic Projects'

// Athens coordinates
export const ATHENS_CENTER: [number, number] = [37.9838, 23.7275]
export const DEFAULT_ZOOM = 13

// Project categories with Greek labels
export const PROJECT_CATEGORIES = [
  { value: 'infrastructure', label: 'Υποδομές', icon: '🏗️' },
  { value: 'parks', label: 'Πάρκα & Πράσινο', icon: '🌳' },
  { value: 'community', label: 'Κοινότητα', icon: '👥' },
  { value: 'environment', label: 'Περιβάλλον', icon: '🌍' },
  { value: 'culture', label: 'Πολιτισμός', icon: '🎨' },
  { value: 'safety', label: 'Ασφάλεια', icon: '🛡️' },
  { value: 'other', label: 'Άλλο', icon: '📌' },
] as const

// Project statuses
export const PROJECT_STATUSES = {
  draft: { label: 'Πρόχειρο', color: 'gray' },
  pending_approval: { label: 'Αναμονή Έγκρισης', color: 'yellow' },
  approved: { label: 'Εγκρίθηκε', color: 'green' },
  in_progress: { label: 'Σε Εξέλιξη', color: 'blue' },
  completed: { label: 'Ολοκληρώθηκε', color: 'green' },
  rejected: { label: 'Απορρίφθηκε', color: 'red' },
} as const

// Pledge types
export const PLEDGE_TYPES = [
  { value: 'time', label: 'Χρόνος', icon: '⏰' },
  { value: 'money', label: 'Χρήματα', icon: '💰' },
  { value: 'materials', label: 'Υλικά', icon: '🛠️' },
] as const

// User roles
export const USER_ROLES = {
  citizen: 'Δημότης',
  volunteer: 'Εθελοντής',
  business: 'Επιχείρηση',
  municipality: 'Δήμος',
} as const
