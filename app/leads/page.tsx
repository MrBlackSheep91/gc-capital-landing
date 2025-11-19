'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Download, RefreshCw, Users, CheckCircle2, AlertCircle, Flame } from 'lucide-react'
import { LeadScoreBadge } from '@/components/lead-score-badge'

interface Lead {
  id: string
  nombre: string | null
  email: string | null
  whatsapp: string | null
  intereses: string[]
  retoMayor: string | null
  metaProximoAno: string | null
  operaActualmente: string | null
  haPerdidoDinero: string | null
  capitalDisponible: string | null
  gananciaMensualDeseada: string | null
  tiempoDisponible: string | null
  toleranciaRiesgo: string | null
  objetivoPrincipal: string | null
  cuandoEmpezar: string | null
  submitted: boolean
  utmSource: string | null
  utmCampaign: string | null
  pais: string | null
  // Scoring fields
  score: number | null
  scoreCapital: number | null
  scoreExperience: number | null
  scoreTiming: number | null
  scoreObjective: number | null
  scoreCompleteness: number | null
  classification: 'super-hot' | 'hot' | 'warm' | 'cold' | 'unqualified' | null
  priority: number | null
  createdAt: string
  updatedAt: string
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSubmitted, setFilterSubmitted] = useState<'all' | 'completed' | 'incomplete'>('all')
  const [filterClassification, setFilterClassification] = useState<'all' | 'super-hot' | 'hot' | 'warm' | 'cold' | 'unqualified'>('all')

  useEffect(() => {
    fetchLeads()
  }, [])

  useEffect(() => {
    filterLeads()
  }, [leads, searchTerm, filterSubmitted, filterClassification])

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/leads?limit=500')
      const data = await response.json()
      
      if (data.data) {
        setLeads(data.data)
      }
    } catch (error) {
      console.error('Error fetching leads:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterLeads = () => {
    let filtered = leads

    // Filtro por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.whatsapp?.includes(searchTerm)
      )
    }

    // Filtro por estado de completitud
    if (filterSubmitted === 'completed') {
      filtered = filtered.filter(lead => lead.submitted)
    } else if (filterSubmitted === 'incomplete') {
      filtered = filtered.filter(lead => !lead.submitted)
    }

    // Filtro por clasificación
    if (filterClassification !== 'all') {
      filtered = filtered.filter(lead => lead.classification === filterClassification)
    }

    setFilteredLeads(filtered)
  }

  const downloadCSV = () => {
    const headers = [
      'Nombre',
      'Email',
      'WhatsApp',
      'Intereses',
      'Reto Mayor',
      'Meta Próximo Año',
      'Opera Actualmente',
      'Ha Perdido Dinero',
      'Capital Disponible',
      'Ganancia Mensual Deseada',
      'Tiempo Disponible',
      'Tolerancia Riesgo',
      'Objetivo Principal',
      'Cuándo Empezar',
      'Completado',
      'Fuente',
      'Campaña',
      'País',
      'Fecha Creación'
    ]

    const rows = filteredLeads.map(lead => [
      lead.nombre || '',
      lead.email || '',
      lead.whatsapp || '',
      lead.intereses.join('; '),
      lead.retoMayor || '',
      lead.metaProximoAno || '',
      lead.operaActualmente || '',
      lead.haPerdidoDinero || '',
      lead.capitalDisponible || '',
      lead.gananciaMensualDeseada || '',
      lead.tiempoDisponible || '',
      lead.toleranciaRiesgo || '',
      lead.objetivoPrincipal || '',
      lead.cuandoEmpezar || '',
      lead.submitted ? 'Sí' : 'No',
      lead.utmSource || '',
      lead.utmCampaign || '',
      lead.pais || '',
      new Date(lead.createdAt).toLocaleString('es-UY')
    ])

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `leads-${new Date().toISOString().split('T')[0]}.csv`)
    link.click()
  }

  const stats = {
    total: leads.length,
    completed: leads.filter(l => l.submitted).length,
    incomplete: leads.filter(l => !l.submitted).length,
    superHot: leads.filter(l => l.classification === 'super-hot').length,
    hot: leads.filter(l => l.classification === 'hot').length,
    warm: leads.filter(l => l.classification === 'warm').length,
    cold: leads.filter(l => l.classification === 'cold').length,
    avgScore: leads.length > 0 ? Math.round(leads.reduce((sum, l) => sum + (l.score || 0), 0) / leads.length) : 0
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">Leads GC Capital</h1>
          <p className="text-gray-400">Sistema de captura y gestión de leads</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-[#2d2d2d]/50 border-[#c2a255]/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Total de Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#c2a255]">{stats.total}</div>
              <p className="text-xs text-gray-500 mt-1">Todos los leads capturados</p>
            </CardContent>
          </Card>

          <Card className="bg-[#2d2d2d]/50 border-[#c2a255]/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Completados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">{stats.completed}</div>
              <p className="text-xs text-gray-500 mt-1">Formularios completados</p>
            </CardContent>
          </Card>

          <Card className="bg-[#2d2d2d]/50 border-[#c2a255]/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Incompletos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-500">{stats.incomplete}</div>
              <p className="text-xs text-gray-500 mt-1">Formularios sin completar</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Actions */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Buscar por nombre, email o WhatsApp..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#1a1a1a] border-[#c2a255]/30 text-white"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={filterSubmitted}
                onChange={(e) => setFilterSubmitted(e.target.value as any)}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#c2a255]/30 text-white rounded-lg"
              >
                <option value="all">Todos</option>
                <option value="completed">Completados</option>
                <option value="incomplete">Incompletos</option>
              </select>

              <Button
                onClick={fetchLeads}
                variant="outline"
                className="border-[#c2a255]/30 text-[#c2a255] hover:bg-[#c2a255]/10"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>

              <Button
                onClick={downloadCSV}
                className="bg-[#c2a255] hover:bg-[#d4b366] text-[#1a1a1a]"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar CSV
              </Button>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <Card className="bg-[#2d2d2d]/50 border-[#c2a255]/20">
          <CardHeader>
            <CardTitle className="text-white">
              {filteredLeads.length} de {leads.length} leads
            </CardTitle>
            <CardDescription>
              {loading ? 'Cargando...' : `Mostrando ${filteredLeads.length} resultados`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12 text-gray-400">Cargando leads...</div>
            ) : filteredLeads.length === 0 ? (
              <div className="text-center py-12 text-gray-400">No se encontraron leads</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#c2a255]/20">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Nombre</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Email</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">WhatsApp</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Capital</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Objetivo</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Estado</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-[#c2a255]/10 hover:bg-[#1a1a1a]/50">
                        <td className="py-3 px-4 text-white">{lead.nombre || '-'}</td>
                        <td className="py-3 px-4 text-gray-400 text-xs">{lead.email || '-'}</td>
                        <td className="py-3 px-4 text-gray-400 text-xs">{lead.whatsapp || '-'}</td>
                        <td className="py-3 px-4 text-gray-400 text-xs">{lead.capitalDisponible || '-'}</td>
                        <td className="py-3 px-4 text-gray-400 text-xs">{lead.objetivoPrincipal || '-'}</td>
                        <td className="py-3 px-4">
                          {lead.submitted ? (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              ✓ Completado
                            </Badge>
                          ) : (
                            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                              ⏳ Incompleto
                            </Badge>
                          )}
                        </td>
                        <td className="py-3 px-4 text-gray-500 text-xs">
                          {new Date(lead.createdAt).toLocaleDateString('es-UY')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
