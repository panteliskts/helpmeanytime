// API route for projects CRUD operations
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Get all projects or filter by query params
  return NextResponse.json({ projects: [] })
}

export async function POST(request: NextRequest) {
  // Create new project
  return NextResponse.json({ success: true })
}
