"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function DiscoveryGustavoPage() {
  const [formData, setFormData] = useState({
    // SITUACIÓN ACTUAL
    ingresoMensualActual: "",
    numeroClientesActuales: "",
    ticketPromedioMensual: "",
    tasaRetencionClientes: "",
    tiempoPromedioCliente: "",

    // METAS Y OBJETIVOS
    metaIngresos6Meses: "",
    metaIngresos12Meses: "",
    numeroLeadsNecesariosMes: "",
    tasaConversionActual: "",
    tasaConversionObjetivo: "",

    // PROCESO ACTUAL
    comoConsiguesClientesHoy: "",
    tiempoDedicadoVentasSemana: "",
    toolsActualesMarketing: "",
    mayoresDolorProceso: "",
    queTeQuitariaMasTiempo: "",

    // PRESUPUESTO E INVERSIÓN
    presupuestoAdsMensual: "",
    inversionPrevia Marketing: "",
    inversionDispuestaLanding: "",
    modeloPagoPreferido: "",
    razonModeloPago: "",

    // URGENCIA Y TIMING
    urgenciaProyecto: "",
    fechaLanzamientoIdeal: "",
    consecuenciasNoLanzarYa: "",

    // CAPACIDAD Y COMPROMISO
    horasSemanalesDisponibles: "",
    quienHaraSeguimientoLeads: "",
    tieneEquipoSoporte: "",

    // EXPERIENCIA PREVIA
    tuvoLandingAntes: "",
    queNoFuncionoAntes: "",
    queSiFuncionoAntes: "",
    principalFrustracion: "",

    // COMPETENCIA Y DIFERENCIACIÓN
    quienMasOfreceEsto: "",
    porQueDeberianElegirte: "",
    tuMejorCasoDeExito: "",

    // EXPECTATIVAS DEL PROYECTO
    queEsExitoParaTi: "",
    queNecesitasDeMaparaSerExitoso: "",
    temasQueTeMantieneDespiertoNoche: "",

    // VISIÓN A LARGO PLAZO
    dondeTeVesEn2Anos: "",
    esteProyectoTeAcercaAEsa Vision: "",
    queOtrasCosasNecesitasParaLlegar: "",

    // NOTAS ADICIONALES
    notasAdicionales: ""
  })

  const [currentSection, setCurrentSection] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const totalSections = 10

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Enviar a N8N webhook o guardar en archivo JSON
    console.log("Discovery Gustavo Data:", formData)

    setSubmitted(true)
  }

  const nextSection = () => {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              ¡Gracias, Gustavo!
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Tu información ha sido recibida correctamente.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">📊 Próximos Pasos:</h3>
              <ul className="space-y-2 text-blue-800">
                <li>1️⃣ Maicol analizará tus respuestas (24-48h)</li>
                <li>2️⃣ Recibirás 3 propuestas de acuerdo comercial</li>
                <li>3️⃣ Agendaremos reunión para definir términos</li>
                <li>4️⃣ Una vez acordado, inicio de desarrollo</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2">💡 Mientras Tanto:</h3>
              <ul className="space-y-2 text-amber-800">
                <li>• Prepara casos de éxito de clientes actuales</li>
                <li>• Piensa en testimonios que podemos usar</li>
                <li>• Define tu presupuesto mensual para ads</li>
                <li>• Lista objeciones comunes de prospectos</li>
              </ul>
            </div>

            <Button
              onClick={() => window.location.href = '/'}
              className="w-full"
              size="lg"
            >
              Volver a la Landing
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🤝 Discovery: Acuerdo Comercial
          </h1>
          <p className="text-lg text-gray-600">
            Para Gustavo Contreras - GC Capital
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Completa este formulario para que podamos diseñar el acuerdo perfecto para ti.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Sección {currentSection} de {totalSections}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round((currentSection / totalSections) * 100)}% Completado
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#c2a255] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentSection / totalSections) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>
                {currentSection === 1 && "📊 Situación Actual"}
                {currentSection === 2 && "🎯 Metas y Objetivos"}
                {currentSection === 3 && "⚙️ Proceso Actual"}
                {currentSection === 4 && "💰 Presupuesto e Inversión"}
                {currentSection === 5 && "⏰ Urgencia y Timing"}
                {currentSection === 6 && "🤝 Capacidad y Compromiso"}
                {currentSection === 7 && "📈 Experiencia Previa"}
                {currentSection === 8 && "🏆 Competencia y Diferenciación"}
                {currentSection === 9 && "✨ Expectativas del Proyecto"}
                {currentSection === 10 && "🚀 Visión a Largo Plazo"}
              </CardTitle>
              <CardDescription>
                {currentSection === 1 && "Datos de tu negocio actual"}
                {currentSection === 2 && "¿A dónde quieres llegar?"}
                {currentSection === 3 && "¿Cómo trabajas hoy?"}
                {currentSection === 4 && "¿Cuánto puedes invertir?"}
                {currentSection === 5 && "¿Qué tan urgente es esto?"}
                {currentSection === 6 && "¿Cuánto tiempo puedes dedicar?"}
                {currentSection === 7 && "¿Qué has probado antes?"}
                {currentSection === 8 && "¿Qué te hace único?"}
                {currentSection === 9 && "¿Qué necesitas de Maicol?"}
                {currentSection === 10 && "¿Cuál es tu visión de futuro?"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">

              {/* SECCIÓN 1: SITUACIÓN ACTUAL */}
              {currentSection === 1 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="ingresoMensualActual">¿Cuál es tu ingreso mensual ACTUAL del copy trading? (USD)</Label>
                    <Input
                      id="ingresoMensualActual"
                      name="ingresoMensualActual"
                      type="number"
                      placeholder="Ej: 5000"
                      value={formData.ingresoMensualActual}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="numeroClientesActuales">¿Cuántos clientes/copy traders ACTIVOS tienes hoy?</Label>
                    <Input
                      id="numeroClientesActuales"
                      name="numeroClientesActuales"
                      type="number"
                      placeholder="Ej: 30"
                      value={formData.numeroClientesActuales}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ticketPromedioMensual">¿Cuánto paga cada cliente en PROMEDIO al mes? (USD)</Label>
                    <Input
                      id="ticketPromedioMensual"
                      name="ticketPromedioMensual"
                      type="number"
                      placeholder="Ej: 150"
                      value={formData.ticketPromedioMensual}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tasaRetencionClientes">¿Qué % de clientes se quedan después de 3 meses?</Label>
                    <Input
                      id="tasaRetencionClientes"
                      name="tasaRetencionClientes"
                      type="number"
                      placeholder="Ej: 80"
                      value={formData.tasaRetencionClientes}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tiempoPromedioCliente">¿Cuántos meses dura un cliente contigo en promedio?</Label>
                    <Input
                      id="tiempoPromedioCliente"
                      name="tiempoPromedioCliente"
                      type="number"
                      placeholder="Ej: 12"
                      value={formData.tiempoPromedioCliente}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 2: METAS Y OBJETIVOS */}
              {currentSection === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="metaIngresos6Meses">Meta de ingresos mensuales en 6 MESES (USD)</Label>
                    <Input
                      id="metaIngresos6Meses"
                      name="metaIngresos6Meses"
                      type="number"
                      placeholder="Ej: 15000"
                      value={formData.metaIngresos6Meses}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaIngresos12Meses">Meta de ingresos mensuales en 12 MESES (USD)</Label>
                    <Input
                      id="metaIngresos12Meses"
                      name="metaIngresos12Meses"
                      type="number"
                      placeholder="Ej: 30000"
                      value={formData.metaIngresos12Meses}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="numeroLeadsNecesariosMes">¿Cuántos LEADS necesitas por mes para alcanzar esas metas?</Label>
                    <Input
                      id="numeroLeadsNecesariosMes"
                      name="numeroLeadsNecesariosMes"
                      type="number"
                      placeholder="Ej: 100"
                      value={formData.numeroLeadsNecesariosMes}
                      onChange={handleInputChange}
                    />
                    <p className="text-xs text-gray-500">Si no sabes, escribe tu mejor estimado</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tasaConversionActual">¿Qué % de leads se convierte en clientes HOY? (conversion rate)</Label>
                    <Input
                      id="tasaConversionActual"
                      name="tasaConversionActual"
                      type="number"
                      placeholder="Ej: 20"
                      value={formData.tasaConversionActual}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tasaConversionObjetivo">¿Qué conversion rate sería INCREÍBLE para ti?</Label>
                    <Input
                      id="tasaConversionObjetivo"
                      name="tasaConversionObjetivo"
                      type="number"
                      placeholder="Ej: 35"
                      value={formData.tasaConversionObjetivo}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 3: PROCESO ACTUAL */}
              {currentSection === 3 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="comoConsiguesClientesHoy">¿Cómo consigues clientes HOY? (describe tu proceso completo)</Label>
                    <Textarea
                      id="comoConsiguesClientesHoy"
                      name="comoConsiguesClientesHoy"
                      placeholder="Ej: Publicaciones orgánicas en Instagram, reels, DMs, llamadas de cierre..."
                      value={formData.comoConsiguesClientesHoy}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tiempoDedicadoVentasSemana">¿Cuántas horas por SEMANA dedicas a conseguir clientes?</Label>
                    <Input
                      id="tiempoDedicadoVentasSemana"
                      name="tiempoDedicadoVentasSemana"
                      type="number"
                      placeholder="Ej: 15"
                      value={formData.tiempoDedicadoVentasSemana}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="toolsActualesMarketing">¿Qué herramientas de marketing usas HOY? (Instagram, WhatsApp, email, etc.)</Label>
                    <Textarea
                      id="toolsActualesMarketing"
                      name="toolsActualesMarketing"
                      placeholder="Ej: Instagram orgánico, WhatsApp Business, grupo de Telegram..."
                      value={formData.toolsActualesMarketing}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mayoresDolorProceso">¿Cuál es tu MAYOR DOLOR con el proceso actual?</Label>
                    <Textarea
                      id="mayoresDolorProceso"
                      name="mayoresDolorProceso"
                      placeholder="Ej: Paso horas respondiendo preguntas básicas por WhatsApp..."
                      value={formData.mayoresDolorProceso}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="queTeQuitariaMasTiempo">Si pudieras automatizar UNA COSA, ¿qué te quitaría más tiempo?</Label>
                    <Textarea
                      id="queTeQuitariaMasTiempo"
                      name="queTeQuitariaMasTiempo"
                      placeholder="Ej: Calificar leads antes de hablar con ellos..."
                      value={formData.queTeQuitariaMasTiempo}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 4: PRESUPUESTO E INVERSIÓN */}
              {currentSection === 4 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="presupuestoAdsMensual">¿Cuánto puedes invertir MENSUALMENTE en Facebook/Google Ads? (USD)</Label>
                    <Input
                      id="presupuestoAdsMensual"
                      name="presupuestoAdsMensual"
                      type="number"
                      placeholder="Ej: 500"
                      value={formData.presupuestoAdsMensual}
                      onChange={handleInputChange}
                    />
                    <p className="text-xs text-gray-500">Si no tienes presupuesto aún, escribe 0</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inversionPreviaMarketing">¿Cuánto has invertido EN TOTAL en marketing antes? (landing, ads, etc.)</Label>
                    <Input
                      id="inversionPreviaMarketing"
                      name="inversionPreviaMarketing"
                      type="number"
                      placeholder="Ej: 2000"
                      value={formData.inversionPreviaMarketing}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inversionDispuestaLanding">¿Cuánto estás dispuesto a invertir en landing + sistema? (USD)</Label>
                    <Input
                      id="inversionDispuestaLanding"
                      name="inversionDispuestaLanding"
                      type="number"
                      placeholder="Ej: 3000"
                      value={formData.inversionDispuestaLanding}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="text-xs text-gray-500">Sé honesto. Esto ayuda a diseñar la propuesta correcta.</p>
                  </div>

                  <div className="space-y-2">
                    <Label>¿Qué modelo de pago prefieres?</Label>
                    <RadioGroup value={formData.modeloPagoPreferido} onValueChange={(val) => handleRadioChange("modeloPagoPreferido", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fee-fijo" id="fee-fijo" />
                        <Label htmlFor="fee-fijo">Fee fijo (pago inicial completo)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="revenue-share" id="revenue-share" />
                        <Label htmlFor="revenue-share">Revenue share (% de ingresos mensuales)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="hybrid" />
                        <Label htmlFor="hybrid">Híbrido (fee inicial + % mensual)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="equity" id="equity" />
                        <Label htmlFor="equity">Equity/Sociedad (Maicol como socio)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nose" id="nose" />
                        <Label htmlFor="nose">No sé, necesito ayuda para decidir</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="razonModeloPago">¿Por qué prefieres ese modelo?</Label>
                    <Textarea
                      id="razonModeloPago"
                      name="razonModeloPago"
                      placeholder="Ej: Prefiero fee fijo porque ya tengo el capital y quiero ownership completo..."
                      value={formData.razonModeloPago}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 5: URGENCIA Y TIMING */}
              {currentSection === 5 && (
                <>
                  <div className="space-y-2">
                    <Label>¿Qué tan urgente es este proyecto para ti?</Label>
                    <RadioGroup value={formData.urgenciaProyecto} onValueChange={(val) => handleRadioChange("urgenciaProyecto", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="muy-urgente" id="muy-urgente" />
                        <Label htmlFor="muy-urgente">🔥 MUY URGENTE (necesito esto funcionando YA)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="urgente" id="urgente" />
                        <Label htmlFor="urgente">⏰ Urgente (próximas 2-4 semanas)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medio" id="medio" />
                        <Label htmlFor="medio">📅 Normal (1-2 meses está bien)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible">🧘 Flexible (cuando sea posible)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fechaLanzamientoIdeal">¿Cuál sería tu fecha IDEAL de lanzamiento?</Label>
                    <Input
                      id="fechaLanzamientoIdeal"
                      name="fechaLanzamientoIdeal"
                      type="date"
                      value={formData.fechaLanzamientoIdeal}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="consecuenciasNoLanzarYa">¿Qué pasa si NO lanzas esto pronto?</Label>
                    <Textarea
                      id="consecuenciasNoLanzarYa"
                      name="consecuenciasNoLanzarYa"
                      placeholder="Ej: Pierdo oportunidad de campaña navideña, competencia se adelanta, etc."
                      value={formData.consecuenciasNoLanzarYa}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 6: CAPACIDAD Y COMPROMISO */}
              {currentSection === 6 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="horasSemanalesDisponibles">¿Cuántas horas por SEMANA puedes dedicar a este proyecto?</Label>
                    <Input
                      id="horasSemanalesDisponibles"
                      name="horasSemanalesDisponibles"
                      type="number"
                      placeholder="Ej: 10"
                      value={formData.horasSemanalesDisponibles}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="text-xs text-gray-500">Incluye: revisión de landing, follow-up de leads, reuniones</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quienHaraSeguimientoLeads">¿Quién hará el seguimiento de leads? (tú, asistente, alguien más)</Label>
                    <Input
                      id="quienHaraSeguimientoLeads"
                      name="quienHaraSeguimientoLeads"
                      placeholder="Ej: Yo personalmente para hot leads, asistente para el resto"
                      value={formData.quienHaraSeguimientoLeads}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tieneEquipoSoporte">¿Tienes equipo de soporte? (asistentes, ventas, community managers)</Label>
                    <Textarea
                      id="tieneEquipoSoporte"
                      name="tieneEquipoSoporte"
                      placeholder="Ej: Sí, tengo un community manager part-time y un asistente virtual"
                      value={formData.tieneEquipoSoporte}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 7: EXPERIENCIA PREVIA */}
              {currentSection === 7 && (
                <>
                  <div className="space-y-2">
                    <Label>¿Tuviste landing page antes?</Label>
                    <RadioGroup value={formData.tuvoLandingAntes} onValueChange={(val) => handleRadioChange("tuvoLandingAntes", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="si" id="landing-si" />
                        <Label htmlFor="landing-si">Sí</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="landing-no" />
                        <Label htmlFor="landing-no">No, esta sería mi primera</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="queNoFuncionoAntes">Si tuviste landing antes, ¿QUÉ NO FUNCIONÓ?</Label>
                    <Textarea
                      id="queNoFuncionoAntes"
                      name="queNoFuncionoAntes"
                      placeholder="Ej: El diseño era feo, nadie entendía la oferta, conversion rate bajísimo..."
                      value={formData.queNoFuncionoAntes}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="queSiFuncionoAntes">¿Qué SÍ funcionó en el pasado? (cualquier estrategia de marketing)</Label>
                    <Textarea
                      id="queSiFuncionoAntes"
                      name="queSiFuncionoAntes"
                      placeholder="Ej: Testimonios en video generaron mucha confianza, webinars convirtieron super bien..."
                      value={formData.queSiFuncionoAntes}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="principalFrustracion">¿Cuál ha sido tu MAYOR FRUSTRACIÓN con marketing/ventas hasta ahora?</Label>
                    <Textarea
                      id="principalFrustracion"
                      name="principalFrustracion"
                      placeholder="Ej: Invierto tiempo y no veo resultados, no sé si mi mensaje resuena, leads no califican..."
                      value={formData.principalFrustracion}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 8: COMPETENCIA Y DIFERENCIACIÓN */}
              {currentSection === 8 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="quienMasOfreceEsto">¿Quién MÁS ofrece copy trading en tu nicho? (competidores)</Label>
                    <Textarea
                      id="quienMasOfreceEsto"
                      name="quienMasOfreceEsto"
                      placeholder="Ej: Juan Pérez, María López, la empresa XYZ..."
                      value={formData.quienMasOfreceEsto}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="porQueDeberianElegirte">¿Por qué deberían elegirte a TI y no a ellos?</Label>
                    <Textarea
                      id="porQueDeberianElegirte"
                      name="porQueDeberianElegirte"
                      placeholder="Ej: Tengo 5 años de track record comprobado, drawdown más bajo del mercado, soporte 24/7..."
                      value={formData.porQueDeberianElegirte}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tuMejorCasoDeExito">¿Cuál es tu MEJOR caso de éxito? (el que más te enorgullece)</Label>
                    <Textarea
                      id="tuMejorCasoDeExito"
                      name="tuMejorCasoDeExito"
                      placeholder="Ej: Un cliente empezó con $500 y en 18 meses tiene $12,000 activos, todo con copy trading..."
                      value={formData.tuMejorCasoDeExito}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 9: EXPECTATIVAS DEL PROYECTO */}
              {currentSection === 9 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="queEsExitoParaTi">¿Qué es ÉXITO para ti en este proyecto? (sé súper específico)</Label>
                    <Textarea
                      id="queEsExitoParaTi"
                      name="queEsExitoParaTi"
                      placeholder="Ej: Landing que genera 80 leads/mes con 25% conversion rate, sistema que me ahorra 10h/semana..."
                      value={formData.queEsExitoParaTi}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="queNecesitasDeMaparaSerExitoso">¿Qué necesitas DE MAICOL para que esto sea exitoso?</Label>
                    <Textarea
                      id="queNecesitasDeMaparaSerExitoso"
                      name="queNecesitasDeMaparaSerExitoso"
                      placeholder="Ej: Necesito que entienda mi negocio, que me guíe en decisiones, soporte rápido si algo falla..."
                      value={formData.queNecesitasDeMaparaSerExitoso}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="temasQueTeMantieneDespiertoNoche">¿Qué te mantiene despierto por la noche con respecto a tu negocio?</Label>
                    <Textarea
                      id="temasQueTeMantieneDespiertoNoche"
                      name="temasQueTeMantieneDespiertoNoche"
                      placeholder="Ej: Miedo a que el mercado cambie, que clientes se vayan, que no pueda escalar..."
                      value={formData.temasQueTeMantieneDespiertoNoche}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 10: VISIÓN A LARGO PLAZO */}
              {currentSection === 10 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="dondeTeVesEn2Anos">¿Dónde te ves en 2 AÑOS con tu negocio de copy trading?</Label>
                    <Textarea
                      id="dondeTeVesEn2Anos"
                      name="dondeTeVesEn2Anos"
                      placeholder="Ej: Quiero tener 500 clientes activos, equipo de 5 personas, ingresos de $50k/mes..."
                      value={formData.dondeTeVesEn2Anos}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>¿Este proyecto te acerca a esa visión?</Label>
                    <RadioGroup value={formData.esteProyectoTeAcercaAEsaVision} onValueChange={(val) => handleRadioChange("esteProyectoTeAcercaAEsaVision", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="si-mucho" id="vision-si-mucho" />
                        <Label htmlFor="vision-si-mucho">Sí, es FUNDAMENTAL para llegar ahí</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="si-ayuda" id="vision-si-ayuda" />
                        <Label htmlFor="vision-si-ayuda">Sí, ayuda bastante</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tal-vez" id="vision-tal-vez" />
                        <Label htmlFor="vision-tal-vez">Tal vez, no estoy seguro</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-directamente" id="vision-no-directamente" />
                        <Label htmlFor="vision-no-directamente">No directamente</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="queOtrasCosasNecesitasParaLlegar">¿Qué OTRAS cosas necesitas para llegar a esa visión? (además de landing)</Label>
                    <Textarea
                      id="queOtrasCosasNecesitasParaLlegar"
                      name="queOtrasCosasNecesitasParaLlegar"
                      placeholder="Ej: Equipo de ventas, capital para ads, mejor broker, software de CRM..."
                      value={formData.queOtrasCosasNecesitasParaLlegar}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notasAdicionales">Notas adicionales (cualquier cosa que no hayamos cubierto)</Label>
                    <Textarea
                      id="notasAdicionales"
                      name="notasAdicionales"
                      placeholder="Todo lo que creas relevante..."
                      value={formData.notasAdicionales}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>
                </>
              )}

            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevSection}
              disabled={currentSection === 1}
            >
              ← Anterior
            </Button>

            {currentSection < totalSections ? (
              <Button type="button" onClick={nextSection}>
                Siguiente →
              </Button>
            ) : (
              <Button type="submit" className="bg-[#c2a255] hover:bg-[#a88d48]">
                Enviar Respuestas ✓
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
