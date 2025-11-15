// API route for pledges CRUD operations
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Get all pledges
  return NextResponse.json({ pledges: [] })
}

export async function POST(request: NextRequest) {
  // Create new pledge
  return NextResponse.json({ success: true })
}
