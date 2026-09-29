import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, Mail, Phone, Video, CheckCircle2, Copy, BookOpen } from 'lucide-react';
import { teachersData } from '../../data/teachersData';

export default function BookingModal({ isOpen, onClose, preselectedCourse, preselectedTeacher, onOpenPayment }) {
  const [selectedCategory, setSelectedCategory] = useState('ciencias');
  const [selectedSubject, setSelectedSubject] = useState('Matemáticas');
  const [selectedTeacherId, setSelectedTeacherId] = useState(teachersData[0].id);
  const [selectedDate, setSelectedDate] = useState('2025-10-06');
  const [selectedTime, setSelectedTime] = useState('16:00');
  
  // Student form
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentLevel, setStudentLevel] = useState('Secundaria');
  const [learningGoal, setLearningGoal] = useState('');
  
  // State
  const [isBooked, setIsBooked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (preselectedTeacher) {
      const teacher = teachersData.find(t => t.name === preselectedTeacher || t.id === preselectedTeacher);
      if (teacher) {
        setSelectedTeacherId(teacher.id);
        setSelectedCategory(teacher.category);
        if (teacher.subjects && teacher.subjects[0]) {
          setSelectedSubject(teacher.subjects[0]);
        }
      }
    } else if (preselectedCourse) {
      setSelectedSubject(preselectedCourse);
      const matchingTeacher = teachersData.find(t => 
        t.subjects.some(s => s.toLowerCase().includes(preselectedCourse.toLowerCase()) || preselectedCourse.toLowerCase().includes(s.toLowerCase()))
      );
      if (matchingTeacher) {
        setSelectedTeacherId(matchingTeacher.id);
        setSelectedCategory(matchingTeacher.category);
      }
    }
  }, [preselectedCourse, preselectedTeacher, isOpen]);

  if (!isOpen) return null;

  const currentTeacher = teachersData.find(t => t.id === selectedTeacherId) || teachersData[0];

  const calendarDays = [
    { dayName: 'Lun', dateNum: '6', fullDate: '2025-10-06' },
    { dayName: 'Mar', dateNum: '7', fullDate: '2025-10-07' },
    { dayName: 'Mié', dateNum: '8', fullDate: '2025-10-08' },
    { dayName: 'Jue', dateNum: '9', fullDate: '2025-10-09' },
    { dayName: 'Vie', dateNum: '10', fullDate: '2025-10-10' },
    { dayName: 'Sáb', dateNum: '11', fullDate: '2025-10-11' },
    { dayName: 'Lun', dateNum: '13', fullDate: '2025-10-13' },
    { dayName: 'Mar', dateNum: '14', fullDate: '2025-10-14' }
  ];

  const availableHours = ['09:00', '10:30', '15:00', '16:30', '17:30', '19:00'];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!studentName || !studentEmail) return;
    setIsBooked(true);
  };

  const simulatedMeetingLink = `https://meet.google.com/aaa-${selectedSubject.toLowerCase().slice(0, 3)}-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(simulatedMeetingLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleResetModal = () => {
    setIsBooked(false);
    setStudentName('');
    setStudentEmail('');
    setStudentPhone('');
    setLearningGoal('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/45 backdrop-blur-xs overflow-y-auto animate-fade-in-up">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Prominent Logo & Academic Identity */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-[#f8fafc] relative flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img
              src="/logo.jpg"
              alt="Triple AAA"
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#008a9f]/30 shadow-sm"
            />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0f3254] tracking-tight">
                {isBooked ? 'Confirmación de Clase Agendada' : 'Agendamiento de Clase Virtual • Bolivia'}
              </h3>
              <p className="text-xs text-[#008a9f] font-semibold">
                {isBooked ? 'Enlace generado y guardado en tu expediente' : 'Triple AAA • Aprende · Crea · Crece'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-md transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isBooked ? (
            /* Confirmation View */
            <div className="space-y-5 text-center py-2">
              <div className="w-12 h-12 bg-[#e0f4f7] text-[#008a9f] rounded-full flex items-center justify-center mx-auto border border-[#008a9f]/30">
                <CheckCircle2 className="w-6 h-6 text-[#008a9f]" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#0f3254]">
                  ¡Clase Confirmada, {studentName}!
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Código de Reserva: <span className="font-mono font-bold text-[#008a9f]">AAA-BO-2025-{Math.floor(1000 + Math.random() * 9000)}</span>
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-4 text-left space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 font-semibold block uppercase text-[10px]">Materia</span>
                    <span className="font-bold text-[#0f3254] flex items-center gap-1.5 mt-0.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#008a9f]" />
                      {selectedSubject}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block uppercase text-[10px]">Docente Asignado</span>
                    <span className="font-bold text-[#0f3254] flex items-center gap-1.5 mt-0.5">
                      <User className="w-3.5 h-3.5 text-[#8b7bb8]" />
                      {currentTeacher.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block uppercase text-[10px]">Fecha y Horario</span>
                    <span className="font-bold text-[#0f3254] flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-[#e09f3e]" />
                      {selectedDate} a las {selectedTime} hrs
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block uppercase text-[10px]">Modalidad</span>
                    <span className="font-bold text-[#008a9f] flex items-center gap-1.5 mt-0.5">
                      <Video className="w-3.5 h-3.5 text-[#008a9f]" />
                      100% Virtual en Vivo (60 min)
                    </span>
                  </div>
                </div>

                {/* Meeting Link Box */}
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-[#0f3254] block mb-1">
                    Enlace de Acceso al Aula Virtual (Google Meet / Zoom):
                  </span>
                  <div className="flex items-center gap-2 bg-white border border-[#008a9f]/30 p-2 rounded-md">
                    <input
                      type="text"
                      readOnly
                      value={simulatedMeetingLink}
                      className="bg-transparent font-mono text-xs text-[#0f3254] font-semibold w-full outline-none select-all"
                    />
                    <button
                      onClick={handleCopyLink}
                      className="shrink-0 py-1 px-2.5 bg-[#e0f4f7] hover:bg-[#008a9f] hover:text-white text-[#008a9f] text-xs font-semibold rounded transition-colors flex items-center gap-1"
                    >
                      {copiedLink ? <span>¡Copiado!</span> : <span>Copiar Enlace</span>}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Enviamos una copia con este enlace a <strong>{studentEmail}</strong>.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                {onOpenPayment && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenPayment();
                    }}
                    className="flex-1 py-2.5 px-4 bg-[#0f3254] hover:bg-[#008a9f] text-white font-semibold rounded-lg text-xs transition-colors shadow-xs"
                  >
                    Proceder al Pago / Ver QR Simple
                  </button>
                )}
                <button
                  onClick={handleResetModal}
                  className="py-2.5 px-4 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold rounded-lg text-xs transition-colors"
                >
                  Finalizar y Volver
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form View */
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* Step 1: Area & Subject */}
              <div>
                <span className="block text-[11px] font-bold text-[#0f3254] uppercase tracking-wider mb-2">
                  1. Selección de Disciplina
                </span>
                
                {/* Segmented Control */}
                <div className="grid grid-cols-2 gap-2 mb-3 p-1 bg-slate-100 rounded-lg">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('ciencias');
                      setSelectedSubject('Matemáticas');
                      setSelectedTeacherId(teachersData[0].id);
                    }}
                    className={`py-1.5 px-3 rounded-md text-xs font-bold transition-all ${
                      selectedCategory === 'ciencias'
                        ? 'bg-white text-[#008a9f] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Ciencias Exactas
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('artes');
                      setSelectedSubject('Canto');
                      const artTeacher = teachersData.find(t => t.category === 'artes') || teachersData[2];
                      setSelectedTeacherId(artTeacher.id);
                    }}
                    className={`py-1.5 px-3 rounded-md text-xs font-bold transition-all ${
                      selectedCategory === 'artes'
                        ? 'bg-white text-[#8b7bb8] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Expresión Artística
                  </button>
                </div>

                {/* Subject selector pills */}
                <div className="flex flex-wrap gap-1.5">
                  {(selectedCategory === 'ciencias'
                    ? ['Matemáticas', 'Física', 'Química', 'Biología']
                    : ['Canto', 'Oratoria', 'Teatro', 'Dibujo y Pintura']
                  ).map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => {
                        setSelectedSubject(subject);
                        const match = teachersData.find(t => 
                          t.subjects.some(s => s.toLowerCase().includes(subject.toLowerCase()))
                        );
                        if (match) setSelectedTeacherId(match.id);
                      }}
                      className={`text-xs py-1 px-3 rounded-md font-semibold transition-all ${
                        selectedSubject === subject
                          ? 'bg-[#0f3254] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-[#e0f4f7] hover:text-[#008a9f]'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Teacher Selection */}
              <div>
                <span className="block text-[11px] font-bold text-[#0f3254] uppercase tracking-wider mb-2">
                  2. Docente Asignado
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {teachersData
                    .filter(t => t.category === selectedCategory || t.subjects.includes(selectedSubject))
                    .map((teacher) => (
                      <div
                        key={teacher.id}
                        onClick={() => setSelectedTeacherId(teacher.id)}
                        className={`flex items-center gap-3 p-2.5 rounded-lg border cursor-pointer transition-all ${
                          selectedTeacherId === teacher.id
                            ? 'border-[#008a9f] bg-[#e0f4f7]/30 ring-1 ring-[#008a9f]'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-10 h-10 rounded-md object-cover border border-[#008a9f]/30"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#0f3254] truncate">{teacher.name}</p>
                          <p className="text-[11px] text-slate-500 truncate">{teacher.specialty}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Step 3: Date & Time */}
              <div>
                <span className="block text-[11px] font-bold text-[#0f3254] uppercase tracking-wider mb-2">
                  3. Selección de Día y Horario
                </span>
                
                {/* Clean square/rounded date chips */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 mb-3">
                  {calendarDays.map((cal) => (
                    <button
                      key={cal.fullDate}
                      type="button"
                      onClick={() => setSelectedDate(cal.fullDate)}
                      className={`flex flex-col items-center py-2 px-1 rounded-md border text-center transition-all ${
                        selectedDate === cal.fullDate
                          ? 'border-[#0f3254] bg-[#0f3254] text-white shadow-xs'
                          : 'border-slate-200 hover:border-[#008a9f]/50 text-slate-700 bg-white'
                      }`}
                    >
                      <span className={`text-[10px] uppercase font-semibold ${selectedDate === cal.fullDate ? 'text-slate-300' : 'text-slate-400'}`}>
                        {cal.dayName}
                      </span>
                      <span className="text-sm font-bold my-0.5">{cal.dateNum}</span>
                    </button>
                  ))}
                </div>

                {/* Available Hours */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-xs text-slate-500 mr-1 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#008a9f]" /> Horas:
                  </span>
                  {availableHours.map((hour) => (
                    <button
                      key={hour}
                      type="button"
                      onClick={() => setSelectedTime(hour)}
                      className={`text-xs font-semibold py-1 px-2.5 rounded-md border transition-all ${
                        selectedTime === hour
                          ? 'bg-[#0f3254] border-[#0f3254] text-white'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-[#e0f4f7] hover:text-[#008a9f]'
                      }`}
                    >
                      {hour} hrs
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Student Details */}
              <div className="bg-[#f8fafc] p-4 rounded-lg border border-slate-200 space-y-3">
                <span className="block text-[11px] font-bold text-[#0f3254] uppercase tracking-wider">
                  4. Datos del Estudiante o Tutor
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Mateo Ramírez"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-[#008a9f] focus:ring-1 focus:ring-[#008a9f] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="correo@ejemplo.com"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-[#008a9f] focus:ring-1 focus:ring-[#008a9f] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">WhatsApp para Notificaciones (Bolivia)</label>
                    <input
                      type="tel"
                      placeholder="+591 76543210"
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-[#008a9f] focus:ring-1 focus:ring-[#008a9f] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Nivel Académico</label>
                    <select
                      value={studentLevel}
                      onChange={(e) => setStudentLevel(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-[#008a9f] focus:ring-1 focus:ring-[#008a9f] outline-none font-medium text-slate-800"
                    >
                      <option value="Primaria">Primaria</option>
                      <option value="Secundaria">Secundaria</option>
                      <option value="Preuniversitario">Preuniversitario (Admisión)</option>
                      <option value="Universidad">Universidad</option>
                      <option value="Taller Libre">Taller Libre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Tema específico o dificultad (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Ecuaciones cuadráticas, Leyes de Newton, preparación de audición..."
                    value={learningGoal}
                    onChange={(e) => setLearningGoal(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-[#008a9f] focus:ring-1 focus:ring-[#008a9f] outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#0f3254] hover:bg-[#008a9f] text-white font-semibold text-xs sm:text-[13px] rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-xs hover:shadow-sm"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Confirmar y Agendar Clase Automáticamente</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
