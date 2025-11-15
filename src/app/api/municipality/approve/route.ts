// ============================================
// 🤝 BOTH DEVELOPERS - TOGETHER (Hour 8-10)
// ============================================
// 
// Municipality Approval System - Η ΠΛΕΥΡΑ ΤΟΥ ΔΗΜΟΥ
//
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΤΕ:
// 1. Πάρτε δεδομένα από request.json():
//    {
//      project_id: 'xxx',
//      action: 'approve' | 'reject',
//      comment: 'Great initiative!',
//      municipality_funding: 200  // optional - συν-χρηματοδότηση
//    }
//
// 2. ΕΛΕΓΞΤΕ ότι ο user έχει role='municipality'
//    (Από το Supabase auth)
//
// 3. Αν action='approve':
//    UPDATE projects SET
//      status = 'approved',
//      municipality_approved = true,
//      municipality_notes = comment,
//      municipality_funding = funding
//    WHERE id = project_id
//
// 4. Αν action='reject':
//    UPDATE projects SET
//      status = 'rejected',
//      municipality_approved = false,
//      municipality_notes = comment
//
// 5. (BONUS) Στείλτε notification στον creator του project
//
// 6. Return: { success: true, project: {...} }
//
// TESTING:
// curl -X POST http://localhost:3000/api/municipality/approve \
//   -d '{"project_id":"1","action":"approve","comment":"Approved!"}'
//
// ΧΡΟΝΟΣ: 2 ώρες (μαζί και οι 2)
// COMMIT: "feat: implement municipality approval and co-funding system"
// ============================================

// API route for municipality operations
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // TODO: Πάρτε τα δεδομένα από request body
  
  // TODO: ΕΛΕΓΞΤΕ ότι ο user είναι municipality
  
  // TODO: Αν approve -> UPDATE status='approved'
  
  // TODO: Αν reject -> UPDATE status='rejected'
  
  // TODO: Προσθέστε municipality_funding αν υπάρχει
  
  // TODO: (Optional) Send notification
  
  return NextResponse.json({ success: true })
}
