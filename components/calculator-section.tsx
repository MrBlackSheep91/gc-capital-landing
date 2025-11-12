"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { TrendingUp, DollarSign, Calendar, Percent } from "lucide-react"

type Strategy = "tech" | "gold" | "dual"

interface StrategyConfig {
  name: string
  monthlyReturn: number
  color: string
}

const strategies: Record<Strategy, StrategyConfig> = {
  tech: { name: "GC-Tech (NAS100)", monthlyReturn: 0.10, color: "#3b82f6" },
  gold: { name: "GC-Gold (XAU)", monthlyReturn: 0.075, color: "#c2a255" },
  dual: { name: "Estrategia Dual", monthlyReturn: 0.0875, color: "#10b981" }
}

export function CalculatorSection() {
  const [capital, setCapital] = useState<number>(500)
  const [strategy, setStrategy] = useState<Strategy>("dual")
  const [months, setMonths] = useState<number>(12)

  const config = strategies[strategy]
  const monthlyProfit = capital * config.monthlyReturn
  const yearlyProfit = monthlyProfit * months
  const compoundGrowth = capital * Math.pow(1 + config.monthlyReturn, months)
  const totalCompoundProfit = compoundGrowth - capital

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-UY', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const formatPercent = (value: number) => {
    return `${(value * 100).toFixed(1)}%`
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#211915] to-[#1a1410]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculá Tu Crecimiento
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubrí cuánto podría generar tu capital con nuestros bots de copy trading
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Card */}
          <Card className="bg-[#2a2018] border-[#c2a255]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-[#c2a255]" />
                Configurá Tu Inversión
              </CardTitle>
              <CardDescription className="text-gray-400">
                Ajustá los parámetros para ver tu proyección
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Capital Input */}
              <div className="space-y-2">
                <Label htmlFor="capital" className="text-white">
                  Capital Inicial (USD)
                </Label>
                <Input
                  id="capital"
                  type="number"
                  value={capital}
                  onChange={(e) => setCapital(Number(e.target.value))}
                  min={200}
                  step={100}
                  className="bg-[#211915] border-[#c2a255]/30 text-white text-lg h-12"
                />
                <p className="text-sm text-gray-500">
                  Mínimo: $200 USD
                </p>
              </div>

              {/* Strategy Selection */}
              <div className="space-y-3">
                <Label className="text-white">Estrategia</Label>
                <RadioGroup
                  value={strategy}
                  onValueChange={(value) => setStrategy(value as Strategy)}
                  className="space-y-3"
                >
                  {Object.entries(strategies).map(([key, config]) => (
                    <div
                      key={key}
                      className="flex items-center space-x-3 bg-[#211915] p-4 rounded-lg border border-[#c2a255]/20 hover:border-[#c2a255]/40 transition-colors"
                    >
                      <RadioGroupItem
                        value={key}
                        id={key}
                        className="border-[#c2a255]"
                      />
                      <Label
                        htmlFor={key}
                        className="flex-1 cursor-pointer text-white"
                      >
                        <div className="flex justify-between items-center">
                          <span>{config.name}</span>
                          <span
                            className="font-semibold"
                            style={{ color: config.color }}
                          >
                            {formatPercent(config.monthlyReturn)}/mes
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Time Period */}
              <div className="space-y-2">
                <Label htmlFor="months" className="text-white flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Período (meses)
                </Label>
                <Input
                  id="months"
                  type="number"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  min={1}
                  max={60}
                  className="bg-[#211915] border-[#c2a255]/30 text-white text-lg h-12"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="bg-gradient-to-br from-[#2a2018] to-[#211915] border-[#c2a255]/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-[#c2a255]" />
                Tu Proyección
              </CardTitle>
              <CardDescription className="text-gray-400">
                Con {config.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Capital Inicial */}
              <div className="bg-[#211915]/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-1">Capital Inicial</p>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(capital)}
                </p>
              </div>

              {/* Ganancia Mensual Simple */}
              <div className="bg-[#211915]/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-1">Ganancia Mensual (promedio)</p>
                <p className="text-2xl font-bold text-[#c2a255]">
                  +{formatCurrency(monthlyProfit)}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {formatPercent(config.monthlyReturn)} sobre capital
                </p>
              </div>

              {/* Ganancia Total Simple */}
              <div className="bg-[#211915]/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-1">
                  Ganancia Total en {months} {months === 1 ? "mes" : "meses"} (sin reinversión)
                </p>
                <p className="text-3xl font-bold text-emerald-600">
                  +{formatCurrency(yearlyProfit)}
                </p>
              </div>

              {/* Crecimiento Compuesto */}
              <div className="bg-gradient-to-br from-[#c2a255]/20 to-transparent p-4 rounded-lg border border-[#c2a255]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="h-5 w-5 text-[#c2a255]" />
                  <p className="text-white font-semibold">Con Reinversión (Compuesto)</p>
                </div>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c2a255] to-[#d4af37] mb-2">
                  {formatCurrency(compoundGrowth)}
                </p>
                <p className="text-sm text-gray-400">
                  Ganancia: <span className="text-[#c2a255] font-semibold">+{formatCurrency(totalCompoundProfit)}</span>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {formatPercent((compoundGrowth - capital) / capital)} ROI total
                </p>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-gray-500 bg-[#211915]/30 p-3 rounded">
                * Proyecciones basadas en performance histórica promedio.
                Resultados pasados no garantizan resultados futuros.
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          <div className="bg-[#2a2018] p-6 rounded-lg text-center border border-[#c2a255]/10">
            <p className="text-3xl font-bold text-[#c2a255]">92%</p>
            <p className="text-sm text-gray-400 mt-1">Meses Positivos<br/>(Dual Strategy)</p>
          </div>
          <div className="bg-[#2a2018] p-6 rounded-lg text-center border border-[#c2a255]/10">
            <p className="text-3xl font-bold text-[#c2a255]">0.4%</p>
            <p className="text-sm text-gray-400 mt-1">Máximo<br/>Drawdown</p>
          </div>
          <div className="bg-[#2a2018] p-6 rounded-lg text-center border border-[#c2a255]/10">
            <p className="text-3xl font-bold text-[#c2a255]">10+</p>
            <p className="text-sm text-gray-400 mt-1">Años de<br/>Experiencia</p>
          </div>
          <div className="bg-[#2a2018] p-6 rounded-lg text-center border border-[#c2a255]/10">
            <p className="text-3xl font-bold text-[#c2a255]">$150k+</p>
            <p className="text-sm text-gray-400 mt-1">Retiros<br/>Confirmados</p>
          </div>
        </div>
      </div>
    </section>
  )
}
