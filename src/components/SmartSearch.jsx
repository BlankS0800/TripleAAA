import React, { useState } from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { teachersData } from '../data/teachersData';

export default function SmartSearch({ onSelectSubject, onSelectTeacher, onOpenBooking }) {
  const [selectedSubject, setSelectedSubject] = useState('Química');
  const [selectedLevel, setSelectedLevel] = useState('Secundaria');

  const matchingTeacher = teachersData.find(t => 
    t.subjects.some(s => s.toLowerCase().includes(selectedSubject.toLowerCase().split(' ')[0]))
  ) || teachersData[0];

  const handleSearchClick = () => {
    onSelectSubject(selectedSubject);
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#e0f4f7] text-[#008a9f]">
            <Search className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#0f3254] tracking-tight">
            Buscador de Materias y Docentes
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[#008a9f] bg-[#e0f4f7] px-2.5 py-0.5 rounded border border-[#008a9f]/20">
          Disponibilidad en Bolivia
        </span>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
        {/* Subject selector */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
            Materia o Taller
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full py-2 px-3 bg-white border border-slate-200 rounded-lg text-xs sm:text-[13px] font-medium text-slate-800 outline-none focus:border-[#008a9f] focus:ring-1 focus:ring-[#008a9f] transition-all cursor-pointer"
          >
            <optgroup label="Ciencias Exactas y Naturales">
              <option value="Matemáticas">Matemáticas (Álgebra, Cálculo, Geometría)</option>
              <option value="Física">Física (Mecánica, Circuitos, Dinámica)</option>
              <option value="Química">Química (Estequiometría, Orgánica)</option>
              <option value="Biología">Biología (Citología, Anatomía, Genética)</option>
            </optgroup>
            <optgroup label="Expresión Artística y Comunicación">
              <option value="Canto y Voz">Canto y Técnica Vocal</option>
              <option value="Oratoria">Oratoria y Estructura de Discursos</option>
              <option value="Teatro">Teatro, Actuación e Improvisación</option>
              <option value="Dibujo y Pintura">Dibujo y Creatividad Visual</option>
            </optgroup>
          </select>
        </div>

        {/* Level selector */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
            Nivel Académico
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full py-2 px-3 bg-white border border-slate-200 rounded-lg text-xs sm:text-[13px] font-medium text-slate-800 outline-none focus:border-[#008a9f] focus:ring-1 focus:ring-[#008a9f] transition-all cursor-pointer"
          >
            <option value="Primaria">Primaria (Refuerzo y comprensión)</option>
            <option value="Secundaria">Secundaria (Nivelación y exámenes)</option>
            <option value="Preuniversitario">Preuniversitario (Preparación de admisión)</option>
            <option value="Universidad">Universidad (Cálculo / Física avanzada)</option>
            <option value="Adulto / Taller">Iniciación y Taller Libre</option>
          </select>
        </div>

        {/* Action Button */}
        <div className="flex flex-col justify-end">
          <button
            onClick={handleSearchClick}
            className="w-full py-2 px-4 bg-[#0f3254] hover:bg-[#008a9f] text-white font-semibold text-xs sm:text-[13px] rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs"
          >
            <span>Consultar Docentes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Matched Teacher Recommendation */}
      {matchingTeacher && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#f8fafc] p-3 rounded-lg border border-slate-200/60">
          <div className="flex items-center gap-3">
            <img
              src={matchingTeacher.image}
              alt={matchingTeacher.name}
              className="w-10 h-10 rounded-md object-cover border border-[#008a9f]/30"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0f3254]">{matchingTeacher.name}</span>
                <span className="text-[10px] text-[#008a9f] font-semibold bg-[#e0f4f7] px-1.5 py-0.2 rounded">
                  Docente Especialista
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Horarios: {matchingTeacher.availabilitySummary}
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking(selectedSubject, matchingTeacher.name)}
            className="shrink-0 py-1.5 px-3 bg-white hover:bg-[#0f3254] hover:text-white text-[#0f3254] border border-[#0f3254]/30 rounded-md font-semibold text-xs transition-all duration-200 shadow-xs"
          >
            Agendar con este Docente
          </button>
        </div>
      )}
    </div>
  );
}
