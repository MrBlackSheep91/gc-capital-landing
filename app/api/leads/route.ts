import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Guardar directamente en NEON usando el backend
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
    
    const response = await fetch(`${backendUrl}/api/external/gc-capital`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('❌ Error al guardar lead:', error)
    return NextResponse.json(
      { error: 'Error al guardar lead' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { leadId, field, value, submitted } = body
    
    if (!leadId) {
      return NextResponse.json(
        { error: 'leadId es requerido' },
        { status: 400 }
      )
    }

    // Actualizar campo en NEON usando el backend
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
    
    const response = await fetch(`${backendUrl}/api/external/gc-capital`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        leadId,
        field,
        value,
        submitted,
      }),
    })

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('❌ Error al actualizar lead:', error)
    return NextResponse.json(
      { error: 'Error al actualizar lead' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Obtener leads del backend
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
    const params = new URLSearchParams({
      limit: searchParams.get('limit') || '100',
    })

    const response = await fetch(`${backendUrl}/api/external/gc-capital?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({
      leads: data.leads || [],
      stats: data.stats || [],
      total: data.total || 0,
    })
  } catch (error) {
    console.error('❌ Error al obtener leads:', error)
    return NextResponse.json(
      { 
        error: 'Error al obtener leads',
        leads: [],
        stats: [],
        total: 0,
      },
      { status: 500 }
    )
  }
}
