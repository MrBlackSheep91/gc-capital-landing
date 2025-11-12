"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OnboardingPage() {
  const [formData, setFormData] = useState({
    // DATOS PERSONALES
    fullName: "",
    email: "",
    phone: "",
    youtubeChannel: "",
    skoolCommunity: "",

    // MODELO DE NEGOCIO
    currentRevenue: "",
    activeMembers: "",
    monthlyPrice: "",
    retentionRate: "",

    // COPY TRADING - BOTS
    botName1: "",
    botStrategy1: "",
    botAsset1: "",
    botWinRate1: "",
    botDrawdown1: "",
    botMonthlyROI1: "",

    botName2: "",
    botStrategy2: "",
    botAsset2: "",
    botWinRate2: "",
    botDrawdown2: "",
    botMonthlyROI2: "",

    // RESULTADOS Y TRACK RECORD
    yearsTrading: "",
    totalStudents: "",
    successfulStudents: "",
    avgStudentROI: "",

    // PROPUESTA DE VALOR
    mainBenefit1: "",
    mainBenefit2: "",
    mainBenefit3: "",
    uniqueApproach: "",

    // OBJETIVOS
    targetClients: "",
    revenueGoal6Months: "",
    minimumCapital: "",

    // SOCIAL PROOF
    testimonial1Name: "",
    testimonial1Text: "",
    testimonial1Result: "",

    testimonial2Name: "",
    testimonial2Text: "",
    testimonial2Result: "",

    // PROCESO Y FAQ
    process1: "",
    process2: "",
    process3: "",
    process4: "",

    faq1Question: "",
    faq1Answer: "",
    faq2Question: "",
    faq2Answer: "",
    faq3Question: "",
    faq3Answer: "",

    // DISCLAIMERS Y LEGAL
    riskDisclaimer: "",
    legalEntity: "",

    // NOTAS ADICIONALES
    additionalNotes: ""
  })

  const [currentSection, setCurrentSection] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Enviar a N8N webhook o guardar en base de datos
    console.log("Datos de Gustavo:", formData)

    // Simular envío
    setSubmitted(true)
  }

  const totalSections = 9

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <CardTitle className="text-3xl text-green-600">¡Información Recibida!</CardTitle>
            <CardDescription className="text-lg mt-2">
              Gracias Gustavo. Maicol va a personalizar tu landing page con todos estos datos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Próximos Pasos:</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✅ Maicol revisará toda tu información</li>
                <li>✅ Personalizará la landing con tus datos reales</li>
                <li>✅ Te enviará preview en 24-48 horas</li>
                <li>✅ Iteraremos hasta que quede perfecta</li>
              </ul>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4">Respuestas enviadas a:</p>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded">{formData.email}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🚀 Onboarding GC Capital
          </h1>
          <p className="text-gray-600 text-lg">
            Gustavo, completá esta info para personalizar tu landing page
          </p>
          <div className="mt-4">
            <div className="flex items-center justify-center gap-2">
              <div className="text-sm text-gray-500">
                Sección {currentSection} de {totalSections}
              </div>
              <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${(currentSection / totalSections) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* SECCIÓN 1: DATOS PERSONALES */}
          {currentSection === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>1️⃣ Datos Personales y Presencia Online</CardTitle>
                <CardDescription>Info básica y redes sociales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Nombre Completo *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Gustavo Contreras"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email de Contacto *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="gustavo@ejemplo.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">WhatsApp (con código país) *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+598 99 123 456"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="youtubeChannel">Canal de YouTube (URL completa)</Label>
                  <Input
                    id="youtubeChannel"
                    name="youtubeChannel"
                    value={formData.youtubeChannel}
                    onChange={handleInputChange}
                    placeholder="https://www.youtube.com/@gustavocontreras"
                  />
                </div>

                <div>
                  <Label htmlFor="skoolCommunity">Comunidad Skool (URL si tenés)</Label>
                  <Input
                    id="skoolCommunity"
                    name="skoolCommunity"
                    value={formData.skoolCommunity}
                    onChange={handleInputChange}
                    placeholder="https://skool.com/tu-comunidad"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* SECCIÓN 2: MODELO DE NEGOCIO ACTUAL */}
          {currentSection === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>2️⃣ Modelo de Negocio Actual</CardTitle>
                <CardDescription>Revenue y métricas de tu negocio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="currentRevenue">Revenue Mensual Actual (USD)</Label>
                  <Input
                    id="currentRevenue"
                    name="currentRevenue"
                    value={formData.currentRevenue}
                    onChange={handleInputChange}
                    placeholder="5000"
                  />
                  <p className="text-xs text-gray-500 mt-1">Aproximado de suscripciones/mentorías</p>
                </div>

                <div>
                  <Label htmlFor="activeMembers">Miembros Activos (Skool u otra comunidad)</Label>
                  <Input
                    id="activeMembers"
                    name="activeMembers"
                    value={formData.activeMembers}
                    onChange={handleInputChange}
                    placeholder="150"
                  />
                </div>

                <div>
                  <Label htmlFor="monthlyPrice">Precio Mensual de Suscripción (USD)</Label>
                  <Input
                    id="monthlyPrice"
                    name="monthlyPrice"
                    value={formData.monthlyPrice}
                    onChange={handleInputChange}
                    placeholder="37"
                  />
                </div>

                <div>
                  <Label htmlFor="retentionRate">Tasa de Retención Mensual (%)</Label>
                  <Input
                    id="retentionRate"
                    name="retentionRate"
                    value={formData.retentionRate}
                    onChange={handleInputChange}
                    placeholder="75"
                  />
                  <p className="text-xs text-gray-500 mt-1">% de miembros que se quedan mes a mes</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* SECCIÓN 3: BOT 1 - COPY TRADING */}
          {currentSection === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>3️⃣ Bot/Sistema #1 (Principal)</CardTitle>
                <CardDescription>Datos del primer bot de copy trading</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="botName1">Nombre del Bot *</Label>
                  <Input
                    id="botName1"
                    name="botName1"
                    value={formData.botName1}
                    onChange={handleInputChange}
                    placeholder="GC-Tech"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="botAsset1">Activo que Opera *</Label>
                  <Input
                    id="botAsset1"
                    name="botAsset1"
                    value={formData.botAsset1}
                    onChange={handleInputChange}
                    placeholder="NASDAQ (US100)"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="botStrategy1">Estrategia/Estilo de Trading</Label>
                  <Textarea
                    id="botStrategy1"
                    name="botStrategy1"
                    value={formData.botStrategy1}
                    onChange={handleInputChange}
                    placeholder="Swing trading con setup ICT, opera solo en NY session..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="botWinRate1">Win Rate (%)</Label>
                    <Input
                      id="botWinRate1"
                      name="botWinRate1"
                      value={formData.botWinRate1}
                      onChange={handleInputChange}
                      placeholder="68"
                    />
                  </div>

                  <div>
                    <Label htmlFor="botDrawdown1">Drawdown Máx (%)</Label>
                    <Input
                      id="botDrawdown1"
                      name="botDrawdown1"
                      value={formData.botDrawdown1}
                      onChange={handleInputChange}
                      placeholder="8.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="botMonthlyROI1">ROI Mensual Prom (%)</Label>
                    <Input
                      id="botMonthlyROI1"
                      name="botMonthlyROI1"
                      value={formData.botMonthlyROI1}
                      onChange={handleInputChange}
                      placeholder="12.5"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* SECCIÓN 4: BOT 2 (OPCIONAL) */}
          {currentSection === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>4️⃣ Bot/Sistema #2 (Opcional)</CardTitle>
                <CardDescription>Si tenés un segundo bot, completá esto. Si no, dejalo en blanco.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="botName2">Nombre del Bot</Label>
                  <Input
                    id="botName2"
                    name="botName2"
                    value={formData.botName2}
                    onChange={handleInputChange}
                    placeholder="GC-Gold"
                  />
                </div>

                <div>
                  <Label htmlFor="botAsset2">Activo que Opera</Label>
                  <Input
                    id="botAsset2"
                    name="botAsset2"
                    value={formData.botAsset2}
                    onChange={handleInputChange}
                    placeholder="XAU/USD (Oro)"
                  />
                </div>

                <div>
                  <Label htmlFor="botStrategy2">Estrategia/Estilo de Trading</Label>
                  <Textarea
                    id="botStrategy2"
                    name="botStrategy2"
                    value={formData.botStrategy2}
                    onChange={handleInputChange}
                    placeholder="Scalping en oro, múltiples entradas diarias..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="botWinRate2">Win Rate (%)</Label>
                    <Input
                      id="botWinRate2"
                      name="botWinRate2"
                      value={formData.botWinRate2}
                      onChange={handleInputChange}
                      placeholder="72"
                    />
                  </div>

                  <div>
                    <Label htmlFor="botDrawdown2">Drawdown Máx (%)</Label>
                    <Input
                      id="botDrawdown2"
                      name="botDrawdown2"
                      value={formData.botDrawdown2}
                      onChange={handleInputChange}
                      placeholder="6.2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="botMonthlyROI2">ROI Mensual Prom (%)</Label>
                    <Input
                      id="botMonthlyROI2"
                      name="botMonthlyROI2"
                      value={formData.botMonthlyROI2}
                      onChange={handleInputChange}
                      placeholder="8.3"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* SECCIÓN 5: TRACK RECORD Y RESULTADOS */}
          {currentSection === 5 && (
            <Card>
              <CardHeader>
                <CardTitle>5️⃣ Track Record y Resultados</CardTitle>
                <CardDescription>Tus resultados y los de tus alumnos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="yearsTrading">Años Operando Profesionalmente</Label>
                  <Input
                    id="yearsTrading"
                    name="yearsTrading"
                    value={formData.yearsTrading}
                    onChange={handleInputChange}
                    placeholder="5"
                  />
                </div>

                <div>
                  <Label htmlFor="totalStudents">Total de Alumnos/Clientes que Tuviste</Label>
                  <Input
                    id="totalStudents"
                    name="totalStudents"
                    value={formData.totalStudents}
                    onChange={handleInputChange}
                    placeholder="300"
                  />
                </div>

                <div>
                  <Label htmlFor="successfulStudents">Alumnos con Resultados Positivos</Label>
                  <Input
                    id="successfulStudents"
                    name="successfulStudents"
                    value={formData.successfulStudents}
                    onChange={handleInputChange}
                    placeholder="180"
                  />
                  <p className="text-xs text-gray-500 mt-1">Aprox cuántos lograron rentabilidad</p>
                </div>

                <div>
                  <Label htmlFor="avgStudentROI">ROI Promedio de Alumnos (% mensual)</Label>
                  <Input
                    id="avgStudentROI"
                    name="avgStudentROI"
                    value={formData.avgStudentROI}
                    onChange={handleInputChange}
                    placeholder="8"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* SECCIÓN 6: PROPUESTA DE VALOR */}
          {currentSection === 6 && (
            <Card>
              <CardHeader>
                <CardTitle>6️⃣ Propuesta de Valor Única</CardTitle>
                <CardDescription>¿Por qué elegirte a vos y no a otro trader?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="mainBenefit1">Beneficio Principal #1</Label>
                  <Input
                    id="mainBenefit1"
                    name="mainBenefit1"
                    value={formData.mainBenefit1}
                    onChange={handleInputChange}
                    placeholder="Sistema probado en cuenta real con +5 años"
                  />
                </div>

                <div>
                  <Label htmlFor="mainBenefit2">Beneficio Principal #2</Label>
                  <Input
                    id="mainBenefit2"
                    name="mainBenefit2"
                    value={formData.mainBenefit2}
                    onChange={handleInputChange}
                    placeholder="0 trabajo manual - bot 100% automatizado"
                  />
                </div>

                <div>
                  <Label htmlFor="mainBenefit3">Beneficio Principal #3</Label>
                  <Input
                    id="mainBenefit3"
                    name="mainBenefit3"
                    value={formData.mainBenefit3}
                    onChange={handleInputChange}
                    placeholder="Drawdown controlado <10% siempre"
                  />
                </div>

                <div>
                  <Label htmlFor="uniqueApproach">¿Qué hace ÚNICO tu approach de trading?</Label>
                  <Textarea
                    id="uniqueApproach"
                    name="uniqueApproach"
                    value={formData.uniqueApproach}
                    onChange={handleInputChange}
                    placeholder="Combino ICT con Larry Williams, opero solo setups A+, nunca persigo mercado..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* SECCIÓN 7: OBJETIVOS Y PRICING */}
          {currentSection === 7 && (
            <Card>
              <CardHeader>
                <CardTitle>7️⃣ Objetivos y Estructura de Precios</CardTitle>
                <CardDescription>Metas de crecimiento y capital mínimo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="targetClients">Meta de Clientes en 6 Meses</Label>
                  <Input
                    id="targetClients"
                    name="targetClients"
                    value={formData.targetClients}
                    onChange={handleInputChange}
                    placeholder="100"
                  />
                </div>

                <div>
                  <Label htmlFor="revenueGoal6Months">Meta de Revenue Mensual en 6 Meses (USD)</Label>
                  <Input
                    id="revenueGoal6Months"
                    name="revenueGoal6Months"
                    value={formData.revenueGoal6Months}
                    onChange={handleInputChange}
                    placeholder="15000"
                  />
                </div>

                <div>
                  <Label htmlFor="minimumCapital">Capital Mínimo para Entrar (USD)</Label>
                  <Input
                    id="minimumCapital"
                    name="minimumCapital"
                    value={formData.minimumCapital}
                    onChange={handleInputChange}
                    placeholder="200"
                  />
                  <p className="text-xs text-gray-500 mt-1">¿Cuánto necesita un cliente para empezar?</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* SECCIÓN 8: SOCIAL PROOF (TESTIMONIOS) */}
          {currentSection === 8 && (
            <Card>
              <CardHeader>
                <CardTitle>8️⃣ Social Proof - Testimonios</CardTitle>
                <CardDescription>2 testimonios de clientes/alumnos exitosos (si tenés)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                  <h4 className="font-semibold text-gray-900">Testimonio #1</h4>
                  <div>
                    <Label htmlFor="testimonial1Name">Nombre del Cliente</Label>
                    <Input
                      id="testimonial1Name"
                      name="testimonial1Name"
                      value={formData.testimonial1Name}
                      onChange={handleInputChange}
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <Label htmlFor="testimonial1Text">Testimonio (texto)</Label>
                    <Textarea
                      id="testimonial1Text"
                      name="testimonial1Text"
                      value={formData.testimonial1Text}
                      onChange={handleInputChange}
                      placeholder="Gracias a Gustavo logré mi primera cuenta fondeada en 3 meses..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="testimonial1Result">Resultado Específico</Label>
                    <Input
                      id="testimonial1Result"
                      name="testimonial1Result"
                      value={formData.testimonial1Result}
                      onChange={handleInputChange}
                      placeholder="+47% en 6 meses"
                    />
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4 space-y-3">
                  <h4 className="font-semibold text-gray-900">Testimonio #2 (Opcional)</h4>
                  <div>
                    <Label htmlFor="testimonial2Name">Nombre del Cliente</Label>
                    <Input
                      id="testimonial2Name"
                      name="testimonial2Name"
                      value={formData.testimonial2Name}
                      onChange={handleInputChange}
                      placeholder="María González"
                    />
                  </div>

                  <div>
                    <Label htmlFor="testimonial2Text">Testimonio (texto)</Label>
                    <Textarea
                      id="testimonial2Text"
                      name="testimonial2Text"
                      value={formData.testimonial2Text}
                      onChange={handleInputChange}
                      placeholder="El bot de Gustavo me cambió la vida..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="testimonial2Result">Resultado Específico</Label>
                    <Input
                      id="testimonial2Result"
                      name="testimonial2Result"
                      value={formData.testimonial2Result}
                      onChange={handleInputChange}
                      placeholder="+$12k en 4 meses"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* SECCIÓN 9: PROCESO Y FAQ */}
          {currentSection === 9 && (
            <Card>
              <CardHeader>
                <CardTitle>9️⃣ Proceso y FAQs</CardTitle>
                <CardDescription>Pasos para que un cliente empiece + preguntas frecuentes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Proceso (4 pasos para empezar)</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="process1">Paso 1</Label>
                      <Input
                        id="process1"
                        name="process1"
                        value={formData.process1}
                        onChange={handleInputChange}
                        placeholder="Llenar formulario de calificación"
                      />
                    </div>
                    <div>
                      <Label htmlFor="process2">Paso 2</Label>
                      <Input
                        id="process2"
                        name="process2"
                        value={formData.process2}
                        onChange={handleInputChange}
                        placeholder="Abrir cuenta en M4Markets"
                      />
                    </div>
                    <div>
                      <Label htmlFor="process3">Paso 3</Label>
                      <Input
                        id="process3"
                        name="process3"
                        value={formData.process3}
                        onChange={handleInputChange}
                        placeholder="Conectar bot a tu cuenta"
                      />
                    </div>
                    <div>
                      <Label htmlFor="process4">Paso 4</Label>
                      <Input
                        id="process4"
                        name="process4"
                        value={formData.process4}
                        onChange={handleInputChange}
                        placeholder="Bot empieza a operar automático"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Top 3 Preguntas Frecuentes</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="faq1Question">FAQ #1 - Pregunta</Label>
                      <Input
                        id="faq1Question"
                        name="faq1Question"
                        value={formData.faq1Question}
                        onChange={handleInputChange}
                        placeholder="¿Cuánto necesito para empezar?"
                      />
                      <Label htmlFor="faq1Answer" className="mt-2">Respuesta</Label>
                      <Textarea
                        id="faq1Answer"
                        name="faq1Answer"
                        value={formData.faq1Answer}
                        onChange={handleInputChange}
                        placeholder="El mínimo es $200 USD..."
                        rows={2}
                      />
                    </div>

                    <div>
                      <Label htmlFor="faq2Question">FAQ #2 - Pregunta</Label>
                      <Input
                        id="faq2Question"
                        name="faq2Question"
                        value={formData.faq2Question}
                        onChange={handleInputChange}
                        placeholder="¿Es seguro?"
                      />
                      <Label htmlFor="faq2Answer" className="mt-2">Respuesta</Label>
                      <Textarea
                        id="faq2Answer"
                        name="faq2Answer"
                        value={formData.faq2Answer}
                        onChange={handleInputChange}
                        placeholder="Sí, el bot solo replica trades..."
                        rows={2}
                      />
                    </div>

                    <div>
                      <Label htmlFor="faq3Question">FAQ #3 - Pregunta</Label>
                      <Input
                        id="faq3Question"
                        name="faq3Question"
                        value={formData.faq3Question}
                        onChange={handleInputChange}
                        placeholder="¿Puedo retirar mi dinero cuando quiera?"
                      />
                      <Label htmlFor="faq3Answer" className="mt-2">Respuesta</Label>
                      <Textarea
                        id="faq3Answer"
                        name="faq3Answer"
                        value={formData.faq3Answer}
                        onChange={handleInputChange}
                        placeholder="100%, tu dinero siempre está en TU cuenta..."
                        rows={2}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="additionalNotes">Notas Adicionales para Maicol</Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Cualquier otra cosa que quieras que incluya en la landing..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navegación */}
          <div className="flex justify-between items-center mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentSection(Math.max(1, currentSection - 1))}
              disabled={currentSection === 1}
            >
              ← Anterior
            </Button>

            <div className="text-sm text-gray-600">
              {currentSection} / {totalSections}
            </div>

            {currentSection < totalSections ? (
              <Button
                type="button"
                onClick={() => setCurrentSection(Math.min(totalSections, currentSection + 1))}
              >
                Siguiente →
              </Button>
            ) : (
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                ✅ Enviar Todo
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
