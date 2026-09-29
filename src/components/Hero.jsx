import React from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';
import SmartSearch from './SmartSearch';

export default function Hero({ onOpenBooking, onOpenLogin, onSelectSubject }) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#fafafa] border-b border-slate-200/80 overflow-hidden">
      
      {/* Subtle brand ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#e0f4f7]/40 via-[#f1edf7]/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Official Logo Crest Banner */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <div className="relative group cursor-pointer mb-4">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#008a9f]/30 to-[#8b7bb8]/30 rounded-full blur-sm group-hover:blur transition-all duration-300"></div>
            <img
              src="/logo.jpg"
              alt="Triple AAA - Apoyo Académico Artístico"
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Institutional Motto Ribbon */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1edf7] border border-[#8b7bb8]/30 text-[#0f3254] text-xs font-semibold tracking-wide shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008a9f]"></span>
            <span>Aprende • Crea • Crece</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b7bb8]"></span>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-widest text-[#008a9f]">
            Triple AAA Bolivia • Clases Virtuales 1 a 1
          </span>
        </div>

        {/* Main Title - Clean, Crisp, Brand Palette */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-[#0f3254] tracking-tight leading-[1.18] mb-5">
            Domina las <span className="text-[#008a9f] underline decoration-[#008a9f]/30 decoration-2 underline-offset-4">ciencias</span> y potencia tu <span className="text-[#8b7bb8] underline decoration-[#8b7bb8]/30 decoration-2 underline-offset-4">arte</span> con clases virtuales personalizadas
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Formación individualizada con rigor académico y libertad creativa. Pizarras interactivas para <strong className="text-[#0f3254] font-semibold">Matemáticas, Física y Química</strong>, y salas de alta fidelidad acústica para <strong className="text-[#0f3254] font-semibold">Teatro, Oratoria y Canto</strong>.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto py-3 px-7 bg-[#0f3254] hover:bg-[#092038] text-white font-semibold text-sm rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Agendar Clase Virtual</span>
              <ArrowRight className="w-4 h-4 text-[#008a9f]" />
            </button>

            <a
              href="#catalogo"
              className="w-full sm:w-auto py-3 px-6 bg-white hover:bg-[#f8fafc] text-[#0f3254] font-semibold text-sm rounded-lg border border-slate-300 hover:border-[#0f3254]/40 transition-all duration-200 shadow-xs"
            >
              Explorar Catálogo de Materias
            </a>
          </div>

          {/* Institutional Quality Indicators */}
          <div className="pt-3 pb-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-500 border-t border-slate-200/80 max-w-2xl mx-auto">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#008a9f]"></span>
              Docentes Universitarios Verificados
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#8b7bb8]"></span>
              Pizarras PhET y GeoGebra
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#e09f3e]"></span>
              Google Meet y Zoom HD
            </span>
          </div>
        </div>

        {/* Clean Smart Search Integration */}
        <div className="mt-10">
          <SmartSearch 
            onSelectSubject={onSelectSubject}
            onOpenBooking={onOpenBooking}
          />
        </div>

      </div>
    </section>
  );
}
