"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function DiscoveryNicoPage() {
  const [formData, setFormData] = useState({
    // INFORMACIÓN BÁSICA
    nombreCompleto: "",
    email: "",
    telefono: "",
    linkedinUrl: "",
    ubicacion: "",

    // ROL Y RESPONSABILIDADES
    rolEnProyecto: "",
    porqueEstaInvolucrado: "",
    queAportaEspecificamente: "",
    habilidadesPrincipales: "",
    experienciaRelevante: "",

    // TIEMPO Y DISPONIBILIDAD
    horasSemanalesDisponibles: "",
    otrosProyectosActivos: "",
    disponibilidadProximosTresMeses: "",
    limitacionesTiempo: "",

    // APORTES TANGIBLES
    aportaCapital: "",
    montoCapitalAportar: "",
    aportaNetwork: "",
    contactosRelevantes: "",
    aportaHabilidadesTecnicas: "",
    habilidadesTecnicasDetalle: "",

    // OBJETIVOS PERSONALES
    queQuieresLograrConEsto: "",
    porQueTeInteresaEsteProyecto: "",
    definicionExitoPersonal: "",
    plazoParaVerResultados: "",

    // EXPECTATIVAS DE COMPENSACIÓN
    queEsperasRecibir: "",
    modeloPreferido: "",
    razonModeloPreferido: "",
    estaDispuestoInvertir: "",

    // COMPROMISO Y RIESGO
    queTantoPuedesComprometer: "",
    nivelToleranciaRiesgo: "",
    planBSiFracasa: "",

    // VISIÓN Y ALINEACIÓN
    dondeTeVesEn1Ano: "",
    comoEsteProyectoAyudaTuCarrera: "",
    queOtrosProyectosTeGustaria: "",

    // RELACIÓN CON GUSTAVO
    comoConocesGustavo: "",
    nivelConfianzaGustavo: "",
    proyectosAnterioresJuntos: "",

    // RELACIÓN CON MAICOL
    comoConocesMaicol: "",
    nivelConfianzaMaicol: "",
    trabajadoJuntosAntes: "",

    // EXPECTATIVAS DEL EQUIPO
    queNecesitasDeGustavo: "",
    queNecesitasDeMaicol: "",
    comoDeberiamosTrabajarJuntos: "",
    quienTendriaDecisionFinal: "",

    // PREOCUPACIONES Y MIEDOS
    mayorPreocupacionProyecto: "",
    quePodriaHacerFracasarEsto: "",
    comoManejarConflictos: "",

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
    console.log("Discovery Nico Data:", formData)

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
              ¡Gracias, Nico!
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
                <li>2️⃣ Se cruzarán datos con formulario de Gustavo</li>
                <li>3️⃣ Propuesta de acuerdo tripartito (Gus-Nico-Maicol)</li>
                <li>4️⃣ Reunión de alineación para cerrar términos</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2">💡 Mientras Tanto:</h3>
              <ul className="space-y-2 text-amber-800">
                <li>• Coordina con Gustavo expectativas mutuas</li>
                <li>• Define claramente qué puedes aportar</li>
                <li>• Piensa en tus límites (tiempo, dinero, riesgo)</li>
                <li>• Lista preguntas para la reunión de alineación</li>
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
            🤝 Discovery: Rol de Nico
          </h1>
          <p className="text-lg text-gray-600">
            Proyecto GC Capital - Copy Trading
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Completa este formulario para que podamos diseñar el acuerdo perfecto para todos.
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
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentSection / totalSections) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>
                {currentSection === 1 && "👤 Información Básica"}
                {currentSection === 2 && "💼 Rol y Responsabilidades"}
                {currentSection === 3 && "⏰ Tiempo y Disponibilidad"}
                {currentSection === 4 && "💰 Aportes Tangibles"}
                {currentSection === 5 && "🎯 Objetivos Personales"}
                {currentSection === 6 && "💵 Expectativas de Compensación"}
                {currentSection === 7 && "🎲 Compromiso y Riesgo"}
                {currentSection === 8 && "🚀 Visión y Alineación"}
                {currentSection === 9 && "🤝 Relaciones y Dinámicas"}
                {currentSection === 10 && "⚠️ Preocupaciones y Gobernanza"}
              </CardTitle>
              <CardDescription>
                {currentSection === 1 && "Datos de contacto"}
                {currentSection === 2 && "¿Qué harás en el proyecto?"}
                {currentSection === 3 && "¿Cuánto tiempo puedes dedicar?"}
                {currentSection === 4 && "¿Qué aportas concretamente?"}
                {currentSection === 5 && "¿Qué quieres lograr con esto?"}
                {currentSection === 6 && "¿Qué esperas recibir?"}
                {currentSection === 7 && "¿Qué riesgo puedes asumir?"}
                {currentSection === 8 && "¿Cómo esto ayuda tu carrera?"}
                {currentSection === 9 && "Relación con Gustavo y Maicol"}
                {currentSection === 10 && "Miedos y toma de decisiones"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">

              {/* SECCIÓN 1: INFORMACIÓN BÁSICA */}
              {currentSection === 1 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="nombreCompleto">Nombre Completo</Label>
                    <Input
                      id="nombreCompleto"
                      name="nombreCompleto"
                      placeholder="Ej: Nicolás Rodríguez"
                      value={formData.nombreCompleto}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nico@ejemplo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono (WhatsApp)</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      placeholder="+598 99 123 456"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedinUrl">LinkedIn (opcional)</Label>
                    <Input
                      id="linkedinUrl"
                      name="linkedinUrl"
                      placeholder="https://linkedin.com/in/tunombre"
                      value={formData.linkedinUrl}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ubicacion">Ubicación</Label>
                    <Input
                      id="ubicacion"
                      name="ubicacion"
                      placeholder="Ej: Montevideo, Uruguay"
                      value={formData.ubicacion}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 2: ROL Y RESPONSABILIDADES */}
              {currentSection === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="rolEnProyecto">¿Cuál es tu ROL específico en este proyecto?</Label>
                    <Textarea
                      id="rolEnProyecto"
                      name="rolEnProyecto"
                      placeholder="Ej: Socio capitalista, Co-founder, Marketing lead, Asesor estratégico..."
                      value={formData.rolEnProyecto}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="porqueEstaInvolucrado">¿Por qué estás involucrado en este proyecto?</Label>
                    <Textarea
                      id="porqueEstaInvolucrado"
                      name="porqueEstaInvolucrado"
                      placeholder="Ej: Gustavo es amigo, me interesa el nicho de trading, veo oportunidad de negocio..."
                      value={formData.porqueEstaInvolucrado}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="queAportaEspecificamente">¿Qué APORTAS específicamente? (sé súper concreto)</Label>
                    <Textarea
                      id="queAportaEspecificamente"
                      name="queAportaEspecificamente"
                      placeholder="Ej: $5,000 USD de capital, 20h/semana de tiempo, network de 500 emprendedores..."
                      value={formData.queAportaEspecificamente}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="habilidadesPrincipales">¿Cuáles son tus 3 HABILIDADES PRINCIPALES?</Label>
                    <Textarea
                      id="habilidadesPrincipales"
                      name="habilidadesPrincipales"
                      placeholder="Ej: Marketing digital (Meta Ads), Ventas B2C, Community management..."
                      value={formData.habilidadesPrincipales}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienciaRelevante">¿Qué experiencia RELEVANTE tienes para este proyecto?</Label>
                    <Textarea
                      id="experienciaRelevante"
                      name="experienciaRelevante"
                      placeholder="Ej: Lancé 3 infoproductos, manejo comunidades de +1000 personas, expertise en ads..."
                      value={formData.experienciaRelevante}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 3: TIEMPO Y DISPONIBILIDAD */}
              {currentSection === 3 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="horasSemanalesDisponibles">¿Cuántas horas por SEMANA puedes dedicar realmente?</Label>
                    <Input
                      id="horasSemanalesDisponibles"
                      name="horasSemanalesDisponibles"
                      type="number"
                      placeholder="Ej: 15"
                      value={formData.horasSemanalesDisponibles}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="text-xs text-gray-500">Sé honesto. Mejor prometer poco y cumplir mucho.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otrosProyectosActivos">¿Tienes otros proyectos activos? ¿Cuáles?</Label>
                    <Textarea
                      id="otrosProyectosActivos"
                      name="otrosProyectosActivos"
                      placeholder="Ej: Trabajo full-time en empresa X, tengo startup Y en fase beta..."
                      value={formData.otrosProyectosActivos}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>¿Cuál es tu disponibilidad los próximos 3 meses?</Label>
                    <RadioGroup value={formData.disponibilidadProximosTresMeses} onValueChange={(val) => handleRadioChange("disponibilidadProximosTresMeses", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full-time" id="full-time" />
                        <Label htmlFor="full-time">Full-time (40h+/semana)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="part-time" id="part-time" />
                        <Label htmlFor="part-time">Part-time (10-20h/semana)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="asesor" id="asesor" />
                        <Label htmlFor="asesor">Asesor (<10h/semana)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="variable" id="variable" />
                        <Label htmlFor="variable">Variable (depende del mes)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="limitacionesTiempo">¿Qué limitaciones de tiempo tienes? (viajes, otros compromisos)</Label>
                    <Textarea
                      id="limitacionesTiempo"
                      name="limitacionesTiempo"
                      placeholder="Ej: Viajo 1 semana por mes por trabajo, tengo clases los martes y jueves..."
                      value={formData.limitacionesTiempo}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 4: APORTES TANGIBLES */}
              {currentSection === 4 && (
                <>
                  <div className="space-y-2">
                    <Label>¿Aportas CAPITAL al proyecto?</Label>
                    <RadioGroup value={formData.aportaCapital} onValueChange={(val) => handleRadioChange("aportaCapital", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="si" id="capital-si" />
                        <Label htmlFor="capital-si">Sí</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="capital-no" />
                        <Label htmlFor="capital-no">No, solo tiempo/trabajo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tal-vez" id="capital-tal-vez" />
                        <Label htmlFor="capital-tal-vez">Tal vez, dependiendo del acuerdo</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="montoCapitalAportar">Si aportas capital, ¿CUÁNTO? (USD)</Label>
                    <Input
                      id="montoCapitalAportar"
                      name="montoCapitalAportar"
                      type="number"
                      placeholder="Ej: 3000"
                      value={formData.montoCapitalAportar}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>¿Aportas NETWORK/CONTACTOS relevantes?</Label>
                    <RadioGroup value={formData.aportaNetwork} onValueChange={(val) => handleRadioChange("aportaNetwork", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="si-mucho" id="network-si-mucho" />
                        <Label htmlFor="network-si-mucho">Sí, tengo network MUY relevante</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="si-algo" id="network-si-algo" />
                        <Label htmlFor="network-si-algo">Sí, algunos contactos útiles</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="network-no" />
                        <Label htmlFor="network-no">No, mi network no aplica aquí</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactosRelevantes">Si tienes network, describe QUIÉNES son esos contactos:</Label>
                    <Textarea
                      id="contactosRelevantes"
                      name="contactosRelevantes"
                      placeholder="Ej: Conozco 50 emprendedores con capital de $10k+, tengo amigo influe con 100k seguidores..."
                      value={formData.contactosRelevantes}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>¿Aportas HABILIDADES TÉCNICAS? (design, dev, video, etc.)</Label>
                    <RadioGroup value={formData.aportaHabilidadesTecnicas} onValueChange={(val) => handleRadioChange("aportaHabilidadesTecnicas", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="si" id="tecnicas-si" />
                        <Label htmlFor="tecnicas-si">Sí</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="tecnicas-no" />
                        <Label htmlFor="tecnicas-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="habilidadesTecnicasDetalle">Si respondiste Sí, describe esas habilidades:</Label>
                    <Textarea
                      id="habilidadesTecnicasDetalle"
                      name="habilidadesTecnicasDetalle"
                      placeholder="Ej: Soy diseñador gráfico, edito videos, sé Figma y Photoshop..."
                      value={formData.habilidadesTecnicasDetalle}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 5: OBJETIVOS PERSONALES */}
              {currentSection === 5 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="queQuieresLograrConEsto">¿Qué quieres LOGRAR con este proyecto? (sé honesto)</Label>
                    <Textarea
                      id="queQuieresLograrConEsto"
                      name="queQuieresLograrConEsto"
                      placeholder="Ej: Generar ingresos pasivos, aprender sobre trading, validar modelo de negocio..."
                      value={formData.queQuieresLograrConEsto}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="porQueTeInteresaEsteProyecto">¿Por qué te INTERESA este proyecto específicamente?</Label>
                    <Textarea
                      id="porQueTeInteresaEsteProyecto"
                      name="porQueTeInteresaEsteProyecto"
                      placeholder="Ej: Me gusta el nicho de finanzas, confío en Gustavo, veo potencial de escala..."
                      value={formData.porQueTeInteresaEsteProyecto}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="definicionExitoPersonal">¿Qué es ÉXITO para ti en este proyecto?</Label>
                    <Textarea
                      id="definicionExitoPersonal"
                      name="definicionExitoPersonal"
                      placeholder="Ej: Generar $2k/mes en 6 meses, aprender skills de marketing, ROI de 300%..."
                      value={formData.definicionExitoPersonal}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plazoParaVerResultados">¿En cuánto tiempo NECESITAS ver resultados?</Label>
                    <Input
                      id="plazoParaVerResultados"
                      name="plazoParaVerResultados"
                      placeholder="Ej: 6 meses"
                      value={formData.plazoParaVerResultados}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="text-xs text-gray-500">Sé realista. Negocio sólido tarda 6-12 meses.</p>
                  </div>
                </>
              )}

              {/* SECCIÓN 6: EXPECTATIVAS DE COMPENSACIÓN */}
              {currentSection === 6 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="queEsperasRecibir">¿Qué ESPERAS recibir a cambio? (dinero, equity, aprendizaje, network)</Label>
                    <Textarea
                      id="queEsperasRecibir"
                      name="queEsperasRecibir"
                      placeholder="Ej: 20% de equity, o $1,500/mes fijo, o 10% de revenue share..."
                      value={formData.queEsperasRecibir}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>¿Qué modelo de compensación prefieres?</Label>
                    <RadioGroup value={formData.modeloPreferido} onValueChange={(val) => handleRadioChange("modeloPreferido", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="equity" id="modelo-equity" />
                        <Label htmlFor="modelo-equity">Equity/Ownership (% del negocio)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="revenue-share" id="modelo-revenue" />
                        <Label htmlFor="modelo-revenue">Revenue share (% de ingresos mensuales)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fee-fijo" id="modelo-fee" />
                        <Label htmlFor="modelo-fee">Fee fijo mensual</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="roi-capital" id="modelo-roi" />
                        <Label htmlFor="modelo-roi">ROI sobre capital invertido</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nose" id="modelo-nose" />
                        <Label htmlFor="modelo-nose">No sé, necesito ayuda</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="razonModeloPreferido">¿Por qué prefieres ese modelo?</Label>
                    <Textarea
                      id="razonModeloPreferido"
                      name="razonModeloPreferido"
                      placeholder="Ej: Prefiero equity porque creo en el largo plazo, o prefiero fee fijo por estabilidad..."
                      value={formData.razonModeloPreferido}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="estaDispuestoInvertir">¿Estás dispuesto a INVERTIR (capital) sin retorno garantizado?</Label>
                    <RadioGroup value={formData.estaDispuestoInvertir} onValueChange={(val) => handleRadioChange("estaDispuestoInvertir", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="si" id="invertir-si" />
                        <Label htmlFor="invertir-si">Sí, asumo el riesgo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="invertir-no" />
                        <Label htmlFor="invertir-no">No, prefiero cobrar por mi trabajo/tiempo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="depende" id="invertir-depende" />
                        <Label htmlFor="invertir-depende">Depende del acuerdo</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </>
              )}

              {/* SECCIÓN 7: COMPROMISO Y RIESGO */}
              {currentSection === 7 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="queTantoPuedesComprometer">¿Qué TANTO puedes comprometer (tiempo/dinero) sin afectar tu vida?</Label>
                    <Textarea
                      id="queTantoPuedesComprometer"
                      name="queTantoPuedesComprometer"
                      placeholder="Ej: Puedo dar 15h/semana máximo, o invertir $3k sin problemas..."
                      value={formData.queTantoPuedesComprometer}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>¿Cuál es tu nivel de TOLERANCIA AL RIESGO?</Label>
                    <RadioGroup value={formData.nivelToleranciaRiesgo} onValueChange={(val) => handleRadioChange("nivelToleranciaRiesgo", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="alto" id="riesgo-alto" />
                        <Label htmlFor="riesgo-alto">Alto (estoy OK con perder todo)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medio" id="riesgo-medio" />
                        <Label htmlFor="riesgo-medio">Medio (puedo perder algo pero no todo)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bajo" id="riesgo-bajo" />
                        <Label htmlFor="riesgo-bajo">Bajo (necesito retorno garantizado)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="planBSiFracasa">Si el proyecto FRACASA, ¿cuál es tu plan B?</Label>
                    <Textarea
                      id="planBSiFracasa"
                      name="planBSiFracasa"
                      placeholder="Ej: Tengo trabajo estable, esto es side project. O: Pierdo $3k pero no es catastrófico..."
                      value={formData.planBSiFracasa}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 8: VISIÓN Y ALINEACIÓN */}
              {currentSection === 8 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="dondeTeVesEn1Ano">¿Dónde te ves en 1 AÑO con tu carrera/negocio?</Label>
                    <Textarea
                      id="dondeTeVesEn1Ano"
                      name="dondeTeVesEn1Ano"
                      placeholder="Ej: Quiero tener 2 fuentes de ingresos pasivos, haber lanzado mi propia marca..."
                      value={formData.dondeTeVesEn1Ano}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comoEsteProyectoAyudaTuCarrera">¿Cómo este proyecto AYUDA a tu carrera/visión?</Label>
                    <Textarea
                      id="comoEsteProyectoAyudaTuCarrera"
                      name="comoEsteProyectoAyudaTuCarrera"
                      placeholder="Ej: Me da experiencia en fintech, me conecta con traders, valida mi skill de marketing..."
                      value={formData.comoEsteProyectoAyudaTuCarrera}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="queOtrosProyectosTeGustaria">¿Qué OTROS proyectos te gustaría hacer después de este?</Label>
                    <Textarea
                      id="queOtrosProyectosTeGustaria"
                      name="queOtrosProyectosTeGustaria"
                      placeholder="Ej: Lanzar mi curso online, escalar una agencia, invertir en más negocios..."
                      value={formData.queOtrosProyectosTeGustaria}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 9: RELACIONES Y DINÁMICAS */}
              {currentSection === 9 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="comoConocesGustavo">¿Cómo conoces a Gustavo?</Label>
                    <Textarea
                      id="comoConocesGustavo"
                      name="comoConocesGustavo"
                      placeholder="Ej: Somos amigos hace 5 años, trabajamos juntos en X, nos presentó alguien..."
                      value={formData.comoConocesGustavo}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>¿Nivel de CONFIANZA con Gustavo?</Label>
                    <RadioGroup value={formData.nivelConfianzaGustavo} onValueChange={(val) => handleRadioChange("nivelConfianzaGustavo", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="alta" id="confianza-gus-alta" />
                        <Label htmlFor="confianza-gus-alta">Alta (confío plenamente)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="media" id="confianza-gus-media" />
                        <Label htmlFor="confianza-gus-media">Media (confío pero con cautela)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="baja" id="confianza-gus-baja" />
                        <Label htmlFor="confianza-gus-baja">Baja (recién nos conocemos)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="proyectosAnterioresJuntos">¿Hicieron proyectos juntos antes? ¿Cuáles?</Label>
                    <Textarea
                      id="proyectosAnterioresJuntos"
                      name="proyectosAnterioresJuntos"
                      placeholder="Ej: Sí, lanzamos un evento que fue exitoso. O: No, este sería el primero."
                      value={formData.proyectosAnterioresJuntos}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comoConocesMaicol">¿Cómo conoces a Maicol?</Label>
                    <Textarea
                      id="comoConocesMaicol"
                      name="comoConocesMaicol"
                      placeholder="Ej: No lo conozco, Gustavo me habló de él. O: Trabajamos juntos en..."
                      value={formData.comoConocesMaicol}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>¿Nivel de CONFIANZA con Maicol?</Label>
                    <RadioGroup value={formData.nivelConfianzaMaicol} onValueChange={(val) => handleRadioChange("nivelConfianzaMaicol", val)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="alta" id="confianza-maico-alta" />
                        <Label htmlFor="confianza-maico-alta">Alta (confío plenamente)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="media" id="confianza-maico-media" />
                        <Label htmlFor="confianza-maico-media">Media (confío pero con cautela)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="baja" id="confianza-maico-baja" />
                        <Label htmlFor="confianza-maico-baja">Baja (recién lo conozco)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trabajadoJuntosAntes">¿Trabajaron juntos antes? ¿Cómo fue?</Label>
                    <Textarea
                      id="trabajadoJuntosAntes"
                      name="trabajadoJuntosAntes"
                      placeholder="Ej: No, este sería el primer proyecto. O: Sí, fue buena experiencia."
                      value={formData.trabajadoJuntosAntes}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                </>
              )}

              {/* SECCIÓN 10: PREOCUPACIONES Y GOBERNANZA */}
              {currentSection === 10 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="queNecesitasDeGustavo">¿Qué NECESITAS de Gustavo para que esto funcione?</Label>
                    <Textarea
                      id="queNecesitasDeGustavo"
                      name="queNecesitasDeGustavo"
                      placeholder="Ej: Necesito que esté disponible para reuniones semanales, que sea transparente con números..."
                      value={formData.queNecesitasDeGustavo}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="queNecesitasDeMaicol">¿Qué NECESITAS de Maicol para que esto funcione?</Label>
                    <Textarea
                      id="queNecesitasDeMaicol"
                      name="queNecesitasDeMaicol"
                      placeholder="Ej: Necesito que entregue en plazos, que sea flexible con iteraciones, soporte técnico..."
                      value={formData.queNecesitasDeMaicol}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comoDeberiamosTrabajarJuntos">¿Cómo deberíamos trabajar juntos? (reuniones, comunicación, etc.)</Label>
                    <Textarea
                      id="comoDeberiamosTrabajarJuntos"
                      name="comoDeberiamosTrabajarJuntos"
                      placeholder="Ej: Reunión semanal 1h, WhatsApp para urgencias, Notion para tasks..."
                      value={formData.comoDeberiamosTrabajarJuntos}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quienTendriaDecisionFinal">¿Quién debería tener la DECISIÓN FINAL en caso de desacuerdo?</Label>
                    <Textarea
                      id="quienTendriaDecisionFinal"
                      name="quienTendriaDecisionFinal"
                      placeholder="Ej: Gustavo porque es su negocio, o votación mayoritaria, o Maicol en temas técnicos..."
                      value={formData.quienTendriaDecisionFinal}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mayorPreocupacionProyecto">¿Cuál es tu MAYOR PREOCUPACIÓN con este proyecto?</Label>
                    <Textarea
                      id="mayorPreocupacionProyecto"
                      name="mayorPreocupacionProyecto"
                      placeholder="Ej: Miedo a que no funcione y pierda dinero, o que se demore mucho, o que haya conflictos..."
                      value={formData.mayorPreocupacionProyecto}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quePodriaHacerFracasarEsto">¿Qué podría hacer FRACASAR este proyecto?</Label>
                    <Textarea
                      id="quePodriaHacerFracasarEsto"
                      name="quePodriaHacerFracasarEsto"
                      placeholder="Ej: Falta de compromiso, expectativas irreales, mala comunicación, falta de presupuesto..."
                      value={formData.quePodriaHacerFracasarEsto}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comoManejarConflictos">¿Cómo deberíamos manejar CONFLICTOS si surgen?</Label>
                    <Textarea
                      id="comoManejarConflictos"
                      name="comoManejarConflictos"
                      placeholder="Ej: Reunión de alineación, mediador externo, salida pactada..."
                      value={formData.comoManejarConflictos}
                      onChange={handleInputChange}
                      rows={3}
                      required
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
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Enviar Respuestas ✓
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
