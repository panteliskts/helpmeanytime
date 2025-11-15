// ============================================
// 👨‍💻 DEVELOPER 2 - TASK 1 (Hour 0-2)
// ============================================
// 
// ΤΑ MOCK DATA ΥΠΑΡΧΟΥΝ ΗΔΗ! ✅
// 
// Έχεις έτοιμα:
// - mockUsers: 3 users (citizen, volunteer, business)
// - mockProjects: 3 projects με διαφορετικά status
// - mockPledges: 4 pledges (money, time, materials)
//
// ΤΙ ΜΠΟΡΕΙΣ ΝΑ ΚΑΝΕΙΣ (προαιρετικό):
// 1. Πρόσθεσε περισσότερα projects (5-10 total)
// 2. Πρόσθεσε περισσότερα pledges
// 3. Χρησιμοποίησε αυτά στα API routes για testing
//    ΠΡΙΝ συνδέσεις τη database!
//
// ΠΑΡΑΔΕΙΓΜΑ ΧΡΗΣΗΣ στο API:
// import { mockProjects } from '@/lib/mockData'
// return NextResponse.json({ projects: mockProjects })
//
// ΧΡΟΝΟΣ: Μέρος των 2 ωρών (ή skip αν αρκούν αυτά)
// ============================================

// Mock data for development and demo purposes
import { Project, User, Pledge } from '@/types'

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'maria@example.gr',
    name: 'Μαρία Παπαδοπούλου',
    role: 'citizen',
    createdAt: new Date('2025-01-01')
  },
  {
    id: '2',
    email: 'nikos@example.gr',
    name: 'Νίκος Αθανασίου',
    role: 'volunteer',
    createdAt: new Date('2025-01-02')
  },
  {
    id: '3',
    email: 'store@hardware.gr',
    name: 'Κατάστημα Οικοδομικών Υλικών',
    role: 'business',
    createdAt: new Date('2025-01-03')
  }
]

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Επισκευή Πεζοδρομίου Κολωνάκι',
    description: 'Το πεζοδρόμιο στη γωνία Σκουφά και Πατριάρχου Ιωακείμ έχει μεγάλες ρωγμές και αποτελεί κίνδυνο',
    category: 'infrastructure',
    status: 'pending_approval',
    location: {
      lat: 37.9757,
      lng: 23.7400,
      address: 'Σκουφά & Πατριάρχου Ιωακείμ, Κολωνάκι',
      district: 'Κολωνάκι'
    },
    creatorId: '1',
    budgetNeeded: 500,
    budgetPledged: 150,
    municipalityApproved: false,
    createdAt: new Date('2025-11-01'),
    updatedAt: new Date('2025-11-01')
  },
  {
    id: '2',
    title: 'Ανάπλαση Πάρκου Πεδίου Άρεως',
    description: 'Προτείνουμε τη φύτευση νέων δέντρων και την τοποθέτηση νέων παγκακιών',
    category: 'parks',
    status: 'approved',
    location: {
      lat: 37.9947,
      lng: 23.7358,
      address: 'Πάρκο Πεδίου Άρεως',
      district: 'Άνω Πατήσια'
    },
    creatorId: '2',
    budgetNeeded: 2000,
    budgetPledged: 1200,
    municipalityApproved: true,
    createdAt: new Date('2025-10-15'),
    updatedAt: new Date('2025-11-05')
  },
  {
    id: '3',
    title: 'Βάψιμο Κοινοτικού Κέντρου',
    description: 'Το κοινοτικό κέντρο χρειάζεται ανανέωση. Ζητάμε εθελοντές και υλικά',
    category: 'community',
    status: 'in_progress',
    location: {
      lat: 37.9697,
      lng: 23.7289,
      address: 'Κοινοτικό Κέντρο Ψυρρή',
      district: 'Ψυρρή'
    },
    creatorId: '1',
    budgetNeeded: 800,
    budgetPledged: 800,
    municipalityApproved: true,
    createdAt: new Date('2025-10-01'),
    updatedAt: new Date('2025-11-10')
  }
]

export const mockPledges: Pledge[] = [
  {
    id: '1',
    projectId: '1',
    userId: '1',
    type: 'money',
    amount: 50,
    description: 'Συμβολή για επισκευή',
    status: 'confirmed',
    createdAt: new Date('2025-11-02')
  },
  {
    id: '2',
    projectId: '1',
    userId: '2',
    type: 'time',
    hours: 5,
    description: 'Θα βοηθήσω στην εργασία',
    status: 'confirmed',
    createdAt: new Date('2025-11-03')
  },
  {
    id: '3',
    projectId: '2',
    userId: '2',
    type: 'time',
    hours: 10,
    description: 'Φύτευση δέντρων',
    status: 'confirmed',
    createdAt: new Date('2025-10-20')
  },
  {
    id: '4',
    projectId: '3',
    userId: '3',
    type: 'materials',
    materials: 'Χρώματα και εργαλεία',
    description: 'Δωρεά χρωμάτων και ρολών',
    status: 'confirmed',
    createdAt: new Date('2025-10-05')
  }
]
