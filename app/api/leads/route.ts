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
    const limit = searchParams.get('limit') || '500'

    const response = await fetch(`${backendUrl}/api/external/gc-capital?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error(`Backend error: ${response.status}`)
      throw new Error(`Backend error: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      data: data.leads || [],
      total: data.total || 0,
    })
  } catch (error) {
    console.error('❌ Error al obtener leads:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Error al obtener leads',
        data: [],
        total: 0,
      },
      { status: 500 }
    )
  }
}
