// ============================================
// 👨‍💻 DEVELOPER 2 - TASK 3 (Hour 4-6)
// ============================================
// 
// 🎯 ΤΟ CORE FEATURE - THE WOW FACTOR!
//
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ ΣΤΟ GET:
// 1. Πάρε query params: ?projectId=xxx&userId=yyy
// 2. SELECT * FROM pledges WHERE project_id = xxx
// 3. JOIN με users για να πάρεις user info
// 4. Group by type αν χρειάζεται
// 5. Return: { pledges: [...] }
//
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ ΣΤΟ POST (Η ΠΙΟIMPORTANT FUNCTION!):
// 1. Πάρε δεδομένα από request.json():
//    {
//      project_id: 'xxx',
//      type: 'money' | 'time' | 'materials',
//      amount: 50,        // αν type='money'
//      hours: 10,         // αν type='time'
//      materials: 'Paint' // αν type='materials'
//    }
//
// 2. VALIDATION:
//    - Αν type='money', πρέπει amount > 0
//    - Αν type='time', πρέπει hours > 0
//    - Αν type='materials', πρέπει materials != empty
//
// 3. Πάρε user_id από Supabase auth
//
// 4. INSERT INTO pledges το νέο pledge
//
// 5. UPDATE το project:
//    - Αν type='money': pledged_money += amount
//    - Αν type='time': pledged_hours += hours
//    - Αν type='materials': pledged_materials += 1
//
// 6. Return: { success: true, pledge: {...} }
//
// TESTING:
// curl -X POST http://localhost:3000/api/pledges \
//   -d '{"project_id":"1","type":"money","amount":50}'
//
// ΧΡΟΝΟΣ: 2 ώρες
// COMMIT: "feat: implement pledges API - create and read"
// ============================================

// API route for pledges CRUD operations
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // TODO: Πάρε projectId από query params
  
  // TODO: SELECT * FROM pledges WHERE project_id = xxx
  
  // TODO: JOIN με users table
  
  // TODO: Return τα pledges
  
  return NextResponse.json({ pledges: [] })
}

export async function POST(request: NextRequest) {
  // TODO: Πάρε τα δεδομένα από request body
  
  // TODO: VALIDATE τα δεδομένα (type, amount/hours/materials)
  
  // TODO: Πάρε user_id από Supabase auth
  
  // TODO: INSERT INTO pledges
  
  // TODO: UPDATE το project (pledged_money, pledged_hours, κλπ)
  
  return NextResponse.json({ success: true })
}
