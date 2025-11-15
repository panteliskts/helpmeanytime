// ============================================
// 👨‍💻 DEVELOPER 1 - TASK 3 & 4 (Hour 4-8)
// ============================================
// 
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ ΣΤΟ GET:
// 1. Πάρε όλα τα projects από τη βάση (SELECT * FROM projects)
// 2. Πρόσθεσε filters από query params:
//    - ?status=pending (φίλτρο κατάστασης)
//    - ?category=infrastructure (φίλτρο κατηγορίας)
//    - ?lat=37.98&lng=23.72&radius=5 (φίλτρο τοποθεσίας)
// 3. Πρόσθεσε pagination:
//    - ?page=1&limit=10
// 4. Return: { projects: [...], total: 42, page: 1 }
//
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ ΣΤΟ POST:
// 1. Πάρε δεδομένα από request.json():
//    - title, description, category, location, budget_needed
// 2. Validate τα δεδομένα (π.χ. title δεν είναι κενό)
// 3. Πάρε user_id από το Supabase auth
// 4. INSERT INTO projects το νέο project με status='pending'
// 5. Return: { success: true, project: {...} }
//
// TESTING:
// curl http://localhost:3000/api/projects
// curl -X POST http://localhost:3000/api/projects -d '{"title":"Test"}'
//
// ΧΡΟΝΟΣ: 4 ώρες συνολικά
// COMMITS: 
// - "feat: implement projects read API endpoints" (μετά το GET)
// - "feat: implement projects write API endpoints" (μετά το POST)
// ============================================

// API route for projects CRUD operations
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // TODO: Πάρε query params (status, category, lat, lng, radius, page, limit)
  
  // TODO: Φτιάξε το Supabase query με filters
  
  // TODO: Return τα projects με pagination info
  
  return NextResponse.json({ projects: [] })
}

export async function POST(request: NextRequest) {
  // TODO: Πάρε τα δεδομένα από το body
  
  // TODO: Validate τα required fields
  
  // TODO: Πάρε τον user_id από το Supabase auth
  
  // TODO: INSERT το project στη βάση
  
  return NextResponse.json({ success: true })
}
