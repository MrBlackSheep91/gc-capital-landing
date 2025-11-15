"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp, Users, Target, Zap, Download, RefreshCw, Filter } from "lucide-react"
import { toast } from "sonner"

interface Lead {
  id: string
  name: string
  email: string
  whatsapp: string
  productoRecomendado: string
  scoreConfianza: number
  paisDetectado: string
  interes: string
  tiempoDisponible: string
  objetivo: string
  experienciaPrevia: string
  inversionPrevia: string
  nivelConocimiento: string
  createdAt: string
}

export default function DashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filterProduct, setFilterProduct] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchLeads()
  }, [])

  useEffect(() => {
    filterLeads()
  }, [leads, filterProduct, searchTerm])

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/leads?limit=100")
      if (!response.ok) throw new Error("Error al cargar leads")
      const data = await response.json()
      setLeads(data.leads || [])
      toast.success(`${data.leads?.length || 0} leads cargados`)
    } catch (error) {
      console.error("Error:", error)
      toast.error("Error al cargar los leads")
      setLeads([])
    } finally {
      setLoading(false)
    }
  }

  const filterLeads = () => {
    let filtered = leads

    if (filterProduct !== "all") {
      filtered = filtered.filter(l => l.productoRecomendado === filterProduct)
    }

    if (searchTerm) {
      filtered = filtered.filter(l =>
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredLeads(filtered)
  }

  const downloadCSV = () => {
    const headers = ["Nombre", "Email", "WhatsApp", "Producto", "Confianza", "País", "Fecha"]
    const rows = filteredLeads.map(l => [
      l.name,
      l.email,
      l.whatsapp,
      l.productoRecomendado,
      l.scoreConfianza,
      l.paisDetectado,
      new Date(l.createdAt).toLocaleDateString()
    ])

    const csv = [headers, ...rows].map(row => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    toast.success("CSV descargado")
  }

  const stats = {
    total: leads.length,
    copyTrading: leads.filter(l => l.productoRecomendado === "copy_trading").length,
    mentoria: leads.filter(l => l.productoRecomendado === "mentoria").length,
    skool: leads.filter(l => l.productoRecomendado === "skool").length,
    hotLeads: leads.filter(l => l.scoreConfianza >= 80).length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-[#c2a255]/5 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-[#1a1a1a] mb-2">
            📊 Dashboard de Leads
          </h1>
          <p className="text-[#2d2d2d] font-medium">
            Gestiona y visualiza todos los leads calificados desde YouTube
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 border-2 border-[#c2a255]/30 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#2d2d2d] font-semibold">Total Leads</p>
                <p className="text-3xl font-black text-[#1a1a1a]">{stats.total}</p>
              </div>
              <Users className="h-8 w-8 text-[#c2a255]" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-[#c2a255]/30 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#2d2d2d] font-semibold">Copy Trading</p>
                <p className="text-3xl font-black text-[#c2a255]">{stats.copyTrading}</p>
              </div>
              <Zap className="h-8 w-8 text-[#c2a255]" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-[#c2a255]/30 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#2d2d2d] font-semibold">Mentoría</p>
                <p className="text-3xl font-black text-[#c2a255]">{stats.mentoria}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-[#c2a255]" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-[#c2a255]/30 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#2d2d2d] font-semibold">Skool</p>
                <p className="text-3xl font-black text-[#c2a255]">{stats.skool}</p>
              </div>
              <Target className="h-8 w-8 text-[#c2a255]" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-red-300 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-700 font-semibold">🔥 Hot Leads</p>
                <p className="text-3xl font-black text-red-600">{stats.hotLeads}</p>
              </div>
              <Zap className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 border-2 border-[#c2a255]/30 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por nombre o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-2 border-[#c2a255]/30 focus:border-[#c2a255]"
              />
            </div>
            <select
              value={filterProduct}
              onChange={(e) => setFilterProduct(e.target.value)}
              className="px-4 py-2 border-2 border-[#c2a255]/30 rounded-lg focus:border-[#c2a255] font-semibold text-[#1a1a1a]"
            >
              <option value="all">Todos los Productos</option>
              <option value="copy_trading">Copy Trading</option>
              <option value="mentoria">Mentoría</option>
              <option value="skool">Skool</option>
            </select>
            <Button
              onClick={fetchLeads}
              className="bg-gradient-to-r from-[#c2a255] to-[#d4b875] text-white font-bold"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Actualizar
            </Button>
            <Button
              onClick={downloadCSV}
              variant="outline"
              className="border-2 border-[#c2a255] text-[#c2a255] font-bold"
            >
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg border-2 border-[#c2a255]/30 shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <p className="text-[#2d2d2d] font-semibold">Cargando leads...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-[#2d2d2d] font-semibold">No hay leads que coincidan con los filtros</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#c2a255]/10 to-[#d4b875]/10 border-b-2 border-[#c2a255]/30">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#1a1a1a]">Nombre</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#1a1a1a]">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#1a1a1a]">WhatsApp</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#1a1a1a]">Producto</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#1a1a1a]">Confianza</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#1a1a1a]">País</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#1a1a1a]">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, idx) => (
                    <tr
                      key={lead.id}
                      className={`border-b border-[#c2a255]/10 hover:bg-[#c2a255]/5 transition-colors ${
                        lead.scoreConfianza >= 80 ? "bg-red-50/50" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-[#1a1a1a]">{lead.name}</td>
                      <td className="px-6 py-4 text-sm text-[#2d2d2d]">{lead.email}</td>
                      <td className="px-6 py-4 text-sm text-[#2d2d2d]">{lead.whatsapp}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full font-bold text-white ${
                          lead.productoRecomendado === "copy_trading"
                            ? "bg-[#c2a255]"
                            : lead.productoRecomendado === "mentoria"
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}>
                          {lead.productoRecomendado === "copy_trading" && "Copy Trading"}
                          {lead.productoRecomendado === "mentoria" && "Mentoría"}
                          {lead.productoRecomendado === "skool" && "Skool"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#c2a255] to-[#d4b875]"
                              style={{ width: `${lead.scoreConfianza}%` }}
                            />
                          </div>
                          <span className="font-bold text-[#c2a255]">{lead.scoreConfianza}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#1a1a1a]">{lead.paisDetectado}</td>
                      <td className="px-6 py-4 text-sm text-[#2d2d2d]">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-[#2d2d2d]">
          <p>Mostrando {filteredLeads.length} de {leads.length} leads</p>
        </div>
      </div>
    </div>
  )
}
