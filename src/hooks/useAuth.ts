// ============================================
// 👨‍💻 DEVELOPER 1 - TASK 2 (Hour 2-4)
// ============================================
// 
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ:
// 1. Φτιάξε functions για:
//    - signUp(email, password, role) - Εγγραφή χρήστη
//    - signIn(email, password) - Login
//    - signOut() - Logout
//    - getCurrentUser() - Πάρε τον συνδεδεμένο χρήστη
// 
// 2. Πρόσθεσε state management με useState:
//    - user (ο τρέχων χρήστης)
//    - loading (αν φορτώνει)
//    - error (αν έχει σφάλμα)
//
// 3. Χρησιμοποίησε το supabase.auth από το src/lib/supabase.ts
//
// 4. Φτιάξε role detection:
//    - Citizen (δημότης)
//    - Volunteer (εθελοντής)
//    - Municipality (δήμος)
//
// ΠΑΡΑΔΕΙΓΜΑ ΧΡΗΣΗΣ:
// const { user, loading, signIn, signOut } = useAuth()
// 
// ΧΡΟΝΟΣ: 2 ώρες
// COMMIT: "feat: implement authentication system with user roles"
// ============================================

'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export function useAuth() {
  // TODO: Φτιάξε state για user, loading, error
  
  // TODO: Φτιάξε signUp function
  
  // TODO: Φτιάξε signIn function
  
  // TODO: Φτιάξε signOut function
  
  // TODO: Φτιάξε getCurrentUser function
  
  // TODO: useEffect για να ελέγχεις αν ο χρήστης είναι logged in
  
  return {
    user: null,
    loading: false,
    error: null,
    signIn: async () => {},
    signUp: async () => {},
    signOut: async () => {},
  }
}
