// ============================================
// 👨‍💻 DEVELOPER 1 - TASK 3 & 4 (Hour 4-8)
// ============================================
// 
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ ΣΤΟ GET:
// 1. Πάρε το project_id από το URL (params.id)
// 2. SELECT * FROM projects WHERE id = params.id
// 3. Πάρε ΚΑΙ τα pledges του project:
//    SELECT * FROM pledges WHERE project_id = params.id
// 4. Return: { project: {...}, pledges: [...] }
//
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ ΣΤΟ PATCH:
// 1. Πάρε το project_id από το URL
// 2. Πάρε τα νέα δεδομένα από request.json()
// 3. Έλεγξε ότι ο user είναι ο creator του project
// 4. UPDATE projects SET ... WHERE id = params.id
// 5. Return: { success: true, project: {...} }
//
// ΤΙ ΠΡΕΠΕΙ ΝΑ ΚΑΝΕΙΣ ΣΤΟ DELETE:
// 1. Πάρε το project_id
// 2. Έλεγξε ότι ο user είναι ο creator
// 3. DELETE FROM projects WHERE id = params.id
// 4. Return: { success: true }
//
// TESTING:
// curl http://localhost:3000/api/projects/1
// curl -X PATCH http://localhost:3000/api/projects/1 -d '{"title":"Updated"}'
// curl -X DELETE http://localhost:3000/api/projects/1
//
// ΧΡΟΝΟΣ: Μέρος των 4 ωρών
// ============================================

// API route for individual project operations
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // TODO: Πάρε το project με id = params.id
  
  // TODO: Πάρε ΚΑΙ τα pledges του
  
  // TODO: Return τα δεδομένα
  
  return NextResponse.json({ project: null })
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // TODO: Πάρε τα νέα δεδομένα
  
  // TODO: Validate ownership (είναι δικό μου το project;)
  
  // TODO: UPDATE το project
  
  return NextResponse.json({ success: true })
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // TODO: Validate ownership
  
  // TODO: DELETE το project
  
  return NextResponse.json({ success: true })
}
