import React, { useState, useRef, useEffect } from 'react';
import { 
  Monitor, 
  PenTool, 
  Trash2, 
  Volume2, 
  Square, 
  FileText, 
  Mic
} from 'lucide-react';

export default function VirtualClassroomDemo() {
  const [activeEnfoque, setActiveEnfoque] = useState('ciencias'); // 'ciencias' or 'artes'
  const [activePortalTab, setActivePortalTab] = useState('student'); // 'student' or 'parents'

  // Canvas state for Science whiteboard
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#0f3254');
  const [brushSize, setBrushSize] = useState(2.5);
  const [hasDrawn, setHasDrawn] = useState(false);

  // Audio / Teleprompter state for Arts
  const [isRecording, setIsRecording] = useState(false);
  const [recordTimer, setRecordTimer] = useState(0);
  const [hasRecordedSample, setHasRecordedSample] = useState(false);
  const [metronomeBpm, setMetronomeBpm] = useState(80);
  const [teleprompterSpeed, setTeleprompterSpeed] = useState(2);
  const [teleprompterRunning, setTeleprompterRunning] = useState(false);
  const [teleprompterScroll, setTeleprompterScroll] = useState(0);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      if (!hasDrawn) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid(ctx, canvas.width, canvas.height);
        drawInitialDemo(ctx);
      }
    }
  }, [activeEnfoque]);

  // Teleprompter ticker
  useEffect(() => {
    let interval;
    if (teleprompterRunning) {
      interval = setInterval(() => {
        setTeleprompterScroll((prev) => (prev > 150 ? 0 : prev + teleprompterSpeed * 0.5));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [teleprompterRunning, teleprompterSpeed]);

  // Recording timer simulation
  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setRecordTimer((prev) => {
          if (prev >= 10) {
            setIsRecording(false);
            setHasRecordedSample(true);
            return 10;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      setRecordTimer(0);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const drawGrid = (ctx, w, h) => {
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    for (let x = 20; x < w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 20; y < h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  };

  const drawInitialDemo = (ctx) => {
    ctx.fillStyle = '#0f3254';
    ctx.font = '600 14px "JetBrains Mono", monospace';
    ctx.fillText('f(x) = x² - 4x + 3', 30, 45);

    // Draw coordinate axes
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(30, 160);
    ctx.lineTo(260, 160);
    ctx.moveTo(100, 70);
    ctx.lineTo(100, 210);
    ctx.stroke();

    // Draw Parabola curve with Brand Teal
    ctx.strokeStyle = '#008a9f';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(40, 90);
    ctx.quadraticCurveTo(100, 230, 200, 90);
    ctx.stroke();

    ctx.fillStyle = '#0f3254';
    ctx.font = '12px sans-serif';
    ctx.fillText('• Raíces: x₁=1, x₂=3', 140, 100);
    ctx.fillText('• Vértice V(2, -1)', 140, 125);
  };

  const handleStartDraw = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = penColor;
    ctx.lineWidth = brushSize;
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const handleDraw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handleStopDraw = () => {
    setIsDrawing(false);
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx, canvas.width, canvas.height);
  };

  const handleAddFormulaStamp = (formulaText) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = penColor;
    ctx.font = '600 15px "JetBrains Mono", monospace';
    const randX = 40 + Math.random() * 120;
    const randY = 50 + Math.random() * 120;
    ctx.fillText(formulaText, randX, randY);
    setHasDrawn(true);
  };

  return (
    <section id="aula-virtual" className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008a9f]">
            Infraestructura Virtual
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f3254] mt-1 tracking-tight">
            Aula Virtual con Doble Enfoque Metodológico
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Entornos adaptados específicamente a cada disciplina: precisión de cálculo para ciencias y audio de baja latencia para artes.
          </p>
        </div>

        {/* Feature 1: Interactive Classroom Studio */}
        <div className="bg-[#fafafa] rounded-xl border border-slate-200 p-5 sm:p-6 mb-16 shadow-xs card-hover-academic">
          
          {/* Enfoque Switcher Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-slate-200 gap-4">
            <div className="flex p-1 bg-white rounded-lg border border-slate-200 shadow-xs">
              <button
                onClick={() => setActiveEnfoque('ciencias')}
                className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold flex items-center gap-2 transition-all duration-200 ${
                  activeEnfoque === 'ciencias'
                    ? 'bg-[#008a9f] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#008a9f]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Pizarra Digital Interactiva (Ciencias)</span>
              </button>

              <button
                onClick={() => setActiveEnfoque('artes')}
                className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold flex items-center gap-2 transition-all duration-200 ${
                  activeEnfoque === 'artes'
                    ? 'bg-[#8b7bb8] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#8b7bb8]'
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Sala Acústica y Escénica (Artes)</span>
              </button>
            </div>

            <span className="text-xs text-slate-500 font-medium">
              Interactúa directamente con la herramienta en vivo
            </span>
          </div>

          {/* Enfoque 1: Ciencias (Interactive Canvas Whiteboard) */}
          {activeEnfoque === 'ciencias' && (
            <div className="pt-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-lg border border-slate-200">
                {/* Pen Colors with Logo Palette */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-medium mr-1 flex items-center gap-1">
                    <PenTool className="w-3.5 h-3.5 text-[#008a9f]" /> Trazos:
                  </span>
                  {[
                    { color: '#0f3254', label: 'Azul Marino Triple AAA' },
                    { color: '#008a9f', label: 'Verde Azulado Cerúleo' },
                    { color: '#8b7bb8', label: 'Lavanda Artístico' },
                    { color: '#e09f3e', label: 'Oro Académico' },
                    { color: '#e15a4f', label: 'Rojo Carmesí' }
                  ].map((c) => (
                    <button
                      key={c.color}
                      onClick={() => setPenColor(c.color)}
                      style={{ backgroundColor: c.color }}
                      className={`w-5 h-5 rounded-full transition-all duration-200 ${
                        penColor === c.color ? 'ring-2 ring-[#0f3254] ring-offset-2 scale-110' : 'opacity-80 hover:opacity-100'
                      }`}
                      title={c.label}
                    />
                  ))}
                </div>

                {/* Quick Formula Stamps */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-slate-400 text-[11px] mr-1">Insertar Fórmula:</span>
                  <button
                    onClick={() => handleAddFormulaStamp('Δx = v₀t + ½at²')}
                    className="py-1 px-2.5 bg-slate-50 hover:bg-[#e0f4f7] hover:text-[#008a9f] text-slate-800 font-mono text-xs rounded border border-slate-200 transition-colors"
                  >
                    Δx = v₀t + ½at²
                  </button>
                  <button
                    onClick={() => handleAddFormulaStamp('E = mc²')}
                    className="py-1 px-2.5 bg-slate-50 hover:bg-[#e0f4f7] hover:text-[#008a9f] text-slate-800 font-mono text-xs rounded border border-slate-200 transition-colors"
                  >
                    E = mc²
                  </button>
                  <button
                    onClick={() => handleAddFormulaStamp('2H₂ + O₂ → 2H₂O')}
                    className="py-1 px-2.5 bg-slate-50 hover:bg-[#e0f4f7] hover:text-[#008a9f] text-slate-800 font-mono text-xs rounded border border-slate-200 transition-colors"
                  >
                    2H₂ + O₂ → 2H₂O
                  </button>
                </div>

                {/* Clear Button */}
                <button
                  onClick={handleClearCanvas}
                  className="py-1 px-3 bg-white hover:bg-red-50 hover:text-red-700 text-slate-700 border border-slate-300 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Limpiar</span>
                </button>
              </div>

              {/* Canvas Board Area */}
              <div className="relative rounded-lg overflow-hidden border border-slate-300 bg-white cursor-crosshair shadow-inner">
                <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-[#0f3254] border border-[#008a9f]/30 pointer-events-none">
                  Pizarra Compartida en Tiempo Real • Prof. Carlos Mendoza
                </div>

                <div className="absolute bottom-3 right-3 z-10 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-slate-500 border border-slate-200 pointer-events-none">
                  Haz clic y arrastra con el ratón para trazar fórmulas o diagramas
                </div>

                <canvas
                  ref={canvasRef}
                  width={900}
                  height={300}
                  onMouseDown={handleStartDraw}
                  onMouseMove={handleDraw}
                  onMouseUp={handleStopDraw}
                  onMouseLeave={handleStopDraw}
                  className="w-full h-72 block"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600 pt-1">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="font-semibold text-[#0f3254] block mb-0.5">Pizarra Multicapa:</span>
                  Tutor y alumno grafican simultáneamente con trazado de alta precisión vectorial.
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="font-semibold text-[#008a9f] block mb-0.5">Exportación en PDF:</span>
                  Todo apunte se guarda de forma automática en el expediente del alumno.
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="font-semibold text-[#8b7bb8] block mb-0.5">Simuladores PhET y GeoGebra:</span>
                  Visualización de funciones matemáticas y leyes de la física en vivo.
                </div>
              </div>
            </div>
          )}

          {/* Enfoque 2: Artes (Audio & Speech Room) */}
          {activeEnfoque === 'artes' && (
            <div className="pt-5 space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Audio Visualizer & Metronome */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-[#8b7bb8]" />
                      <h4 className="text-xs font-bold text-[#0f3254] uppercase tracking-wider">
                        Monitor Acústico de Baja Latencia
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-[#008a9f] bg-[#e0f4f7] px-2 py-0.5 rounded border border-[#008a9f]/30">
                      Latencia: &lt;15ms
                    </span>
                  </div>

                  {/* Audio Bars with Brand Colors */}
                  <div className="h-24 bg-slate-50 rounded-lg p-3 flex items-end justify-between gap-1 border border-slate-200">
                    {[15, 30, 60, 85, 40, 75, 95, 60, 30, 80, 100, 70, 45, 90, 65, 35, 80, 50, 25].map((val, idx) => (
                      <div
                        key={idx}
                        style={{ height: `${isRecording ? (val * (0.6 + Math.random() * 0.4)) : val * 0.25}%` }}
                        className="flex-1 bg-gradient-to-t from-[#8b7bb8] to-[#008a9f] rounded-t-xs transition-all duration-150"
                      />
                    ))}
                  </div>

                  {/* Metronome & Rehearsal Recorder */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="text-slate-500 font-medium">Metrónomo:</span>
                        <span className="font-mono font-bold text-[#e09f3e]">{metronomeBpm} BPM</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="160"
                        value={metronomeBpm}
                        onChange={(e) => setMetronomeBpm(Number(e.target.value))}
                        className="w-full accent-[#008a9f] cursor-pointer"
                      />
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-slate-500 font-medium">Ensayo:</span>
                        <span className="font-mono text-slate-700 font-semibold">{recordTimer}s / 10s</span>
                      </div>
                      <button
                        onClick={() => setIsRecording(!isRecording)}
                        className={`w-full py-1.5 px-2 rounded text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                          isRecording 
                            ? 'bg-[#e15a4f] text-white' 
                            : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {isRecording ? <Square className="w-3 h-3 fill-white" /> : <Mic className="w-3 h-3 text-[#8b7bb8]" />}
                        <span>{isRecording ? 'Detener' : 'Grabar Ensayo (10s)'}</span>
                      </button>
                    </div>
                  </div>

                  {hasRecordedSample && (
                    <div className="bg-[#e0f4f7] border border-[#008a9f]/30 p-2.5 rounded-lg text-xs text-[#0f3254] flex items-center justify-between">
                      <span>✓ Muestra de ensayo grabada con éxito.</span>
                      <button className="text-[11px] underline font-bold text-[#008a9f]">Reproducir</button>
                    </div>
                  )}
                </div>

                {/* Teleprompter for Oratory / Theatre */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#8b7bb8]" />
                        <h4 className="text-xs font-bold text-[#0f3254] uppercase tracking-wider">
                          Teleprompter de Oratoria y Guion
                        </h4>
                      </div>
                      <button
                        onClick={() => setTeleprompterRunning(!teleprompterRunning)}
                        className={`py-1 px-3 rounded text-xs font-semibold transition-all duration-200 ${
                          teleprompterRunning 
                            ? 'bg-[#0f3254] text-white' 
                            : 'bg-[#f1edf7] text-[#8b7bb8] hover:bg-[#8b7bb8] hover:text-white border border-[#8b7bb8]/30'
                        }`}
                      >
                        {teleprompterRunning ? 'Pausar' : 'Iniciar Lectura'}
                      </button>
                    </div>

                    <div className="h-44 bg-slate-50 rounded-lg p-4 overflow-hidden border border-slate-200 relative">
                      <div 
                        style={{ transform: `translateY(-${teleprompterScroll}px)` }}
                        className="transition-transform duration-100 text-xs sm:text-[13px] text-slate-700 space-y-3 font-normal select-none"
                      >
                        <p className="font-bold text-[#0f3254]">
                          [GUION DE ORATORIA: DISCURSO PERSUASIVO]
                        </p>
                        <p>
                          "Estimada audiencia: El conocimiento no es un destino estático, sino una herramienta viva que expande nuestras oportunidades..."
                        </p>
                        <p className="text-[#8b7bb8] text-xs italic font-medium">
                          (Pausa de 2 segundos. Mirada frontal a cámara y respiración diafragmática).
                        </p>
                        <p>
                          "Cuando articulamos nuestras ideas con claridad y convicción, toda meta académica o profesional es alcanzable."
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 mt-3">
                    * El docente modula la velocidad del texto en pantalla durante la práctica en vivo.
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Feature 2: Student & Parent Portals Showcase */}
        <div>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008a9f]">
              Seguimiento Institucional
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f3254] mt-1 tracking-tight">
              Paneles para el Estudiante y la Familia
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Registro continuo de materiales didácticos, tareas y reportes de desempeño bimestrales.
            </p>
          </div>

          {/* Portal Tabs Switcher */}
          <div className="flex p-1 bg-slate-100 rounded-lg w-fit mb-8 border border-slate-200 shadow-xs">
            <button
              onClick={() => setActivePortalTab('student')}
              className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                activePortalTab === 'student'
                  ? 'bg-[#0f3254] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0f3254]'
              }`}
            >
              Panel del Estudiante (Dashboard)
            </button>
            <button
              onClick={() => setActivePortalTab('parents')}
              className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                activePortalTab === 'parents'
                  ? 'bg-[#0f3254] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0f3254]'
              }`}
            >
              Informe de Progreso (Padres)
            </button>
          </div>

          {/* Tab 1: Student Dashboard Content */}
          {activePortalTab === 'student' && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Science Materials */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h4 className="font-bold text-xs text-[#0f3254] uppercase tracking-wider">
                      Biblioteca de Ciencias Exactas
                    </h4>
                    <span className="text-[11px] text-[#008a9f] font-semibold">PDFs y Formularios</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { title: 'Guía N°4: Álgebra — Factorización y Productos Notables', size: '2.4 MB', date: '28 Sep', tag: 'Ejercicios' },
                      { title: 'Formulario Completo de Cinemática y Leyes de Newton', size: '1.1 MB', date: '25 Sep', tag: 'Física' },
                      { title: 'Banco de Preguntas Exámenes de Admisión Bolivia', size: '4.8 MB', date: '20 Sep', tag: 'Química' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70 hover:border-[#008a9f]/50 transition-colors text-xs">
                        <div>
                          <p className="font-semibold text-slate-900">{item.title}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{item.size} • Actualizado {item.date}</p>
                        </div>
                        <span className="text-[10px] bg-[#e0f4f7] border border-[#008a9f]/30 text-[#008a9f] px-2 py-0.5 rounded font-mono font-semibold">
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arts Materials */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h4 className="font-bold text-xs text-[#0f3254] uppercase tracking-wider">
                      Recursos de Expresión y Artes
                    </h4>
                    <span className="text-[11px] text-[#8b7bb8] font-semibold">Pistas y Textos</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { title: 'Pista de Vocalización en Escala Mayor (Tono F3 a C5)', size: '6.2 MB', date: '27 Sep', tag: 'Audio MP3' },
                      { title: 'Monólogo de Improvisación: Estructura Dramática', size: '0.8 MB', date: '24 Sep', tag: 'Teatro' },
                      { title: 'Plantilla de Estructuración de Discurso Persuasivo', size: '1.4 MB', date: '19 Sep', tag: 'Oratoria' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200/70 hover:border-[#8b7bb8]/50 transition-colors text-xs">
                        <div>
                          <p className="font-semibold text-slate-900">{item.title}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{item.size} • Actualizado {item.date}</p>
                        </div>
                        <span className="text-[10px] bg-[#f1edf7] border border-[#8b7bb8]/30 text-[#8b7bb8] px-2 py-0.5 rounded font-mono font-semibold">
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Tab 2: Parents & Progress Report Card Content */}
          {activePortalTab === 'parents' && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs animate-fade-in-up">
              <div className="max-w-3xl space-y-6">
                
                {/* Header of Report Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#f8fafc] p-4 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#008a9f]">Informe Bimensual de Desempeño</span>
                    <h4 className="text-sm font-bold text-[#0f3254] mt-0.5">Estudiante: Mateo Ramírez | 5to de Secundaria (Bolivia)</h4>
                    <p className="text-xs text-slate-500">Tutores: Ing. Valeria Domínguez & Mtra. Daniela Cárdenas</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">Calificación Global</span>
                    <span className="text-lg font-bold text-[#0f3254]">96 / 100</span>
                  </div>
                </div>

                {/* Double metrics: Academic vs Artistic */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Academic Metrics */}
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
                    <span className="text-xs font-bold text-[#008a9f] uppercase tracking-wider block">
                      Rendimiento Académico (Ciencias)
                    </span>

                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex justify-between mb-1 text-slate-600">
                          <span>Resolución de Problemas (Física)</span>
                          <span className="font-bold text-[#0f3254]">92 / 100</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#008a9f] h-full rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1 text-slate-600">
                          <span>Deducción de Fórmulas y Álgebra</span>
                          <span className="font-bold text-[#0f3254]">85 / 100</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#008a9f] h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Artistic Metrics */}
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
                    <span className="text-xs font-bold text-[#8b7bb8] uppercase tracking-wider block">
                      Evolución Expresiva (Artes)
                    </span>

                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex justify-between mb-1 text-slate-600">
                          <span>Seguridad Escénica y Dicción</span>
                          <span className="font-bold text-[#0f3254]">95%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#8b7bb8] h-full rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1 text-slate-600">
                          <span>Respiración y Apoyo Vocal</span>
                          <span className="font-bold text-[#0f3254]">88%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#8b7bb8] h-full rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60 text-xs text-slate-600 space-y-1">
                  <span className="font-bold text-[#0f3254] block">Dictamen Pedagógico:</span>
                  <p>
                    "El alumno evidencia un progreso constante en la estructuración de problemas de cinemática y una mejora notoria en proyección vocal ante presentaciones públicas."
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
