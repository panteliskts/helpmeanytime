// ============================================
// 👨‍💻 DEVELOPER 2 - TASK 1 (Hour 0-2)
// ============================================
// 
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ:
// Κάποιες functions υπάρχουν ήδη! Πρέπει να προσθέσεις:
//
// 1. calculatePledgeProgress():
//    - Input: { money: 250, hours: 10, materials: 3 }, budget: 500
//    - Output: ποσοστό (π.χ. 75%)
//    - Λογική: Υπολόγισε την αξία όλων (money + hours*10 + materials*50)
//
// 2. formatTime():
//    - Input: 10
//    - Output: "10 ώρες" ή "1 ώρα"
//
// 3. getStatusColor():
//    - Input: 'pending', 'approved', 'active', 'completed', 'rejected'
//    - Output: Tailwind classes (π.χ. 'bg-yellow-100 text-yellow-800')
//
// 4. getStatusText():
//    - Input: 'pending'
//    - Output: 'Εκκρεμεί έγκριση' (στα ελληνικά)
//
// 5. getCategoryIcon():
//    - Input: 'infrastructure', 'environment', 'social', 'culture'
//    - Output: emoji ή icon name (π.χ. '🏗️')
//
// ΧΡΟΝΟΣ: 2 ώρες
// COMMIT: "feat: implement utility functions and mock data"
// ============================================

// Utility functions
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}

// Format date
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('el-GR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

// Calculate progress percentage
export function calculateProgress(current: number, target: number): number {
  if (target === 0) return 0
  return Math.min(Math.round((current / target) * 100), 100)
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
