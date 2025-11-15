// Supabase client configuration
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helpers
export const signUp = async (email: string, password: string, metadata?: any) => {
  // Implementation pending
}

export const signIn = async (email: string, password: string) => {
  // Implementation pending
}

export const signOut = async () => {
  // Implementation pending
}

export const getCurrentUser = async () => {
  // Implementation pending
}
