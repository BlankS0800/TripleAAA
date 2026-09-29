import React, { useState } from 'react';
import { PlayCircle, Calendar, Star, Clock } from 'lucide-react';
import { teachersData } from '../data/teachersData';

export default function TeachersSection({ onOpenBooking, onOpenVideoModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTeachers = activeFilter === 'all'
    ? teachersData
    : teachersData.filter(t => t.category === activeFilter);

  return (
    <section id="docentes" className="py-16 sm:py-20 bg-[#fafafa] border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008a9f]">
            Cuerpo Docente • Bolivia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f3254] mt-1 tracking-tight">
            Especialistas Universitarios y Artistas Profesionales
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Perfiles con metodología comprobada, videos de presentación y calendarios de disponibilidad sincronizados.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg w-fit mb-12 border border-slate-200/70 shadow-xs">
          <button
            onClick={() => setActiveFilter('all')}
            className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-[#0f3254] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#0f3254]'
            }`}
          >
            Todos ({teachersData.length})
          </button>
          <button
            onClick={() => setActiveFilter('ciencias')}
            className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
              activeFilter === 'ciencias'
                ? 'bg-[#008a9f] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#008a9f]'
            }`}
          >
            Docentes de Ciencias
          </button>
          <button
            onClick={() => setActiveFilter('artes')}
            className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
              activeFilter === 'artes'
                ? 'bg-[#8b7bb8] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#8b7bb8]'
            }`}
          >
            Docentes de Arte & Oratoria
          </button>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => {
            const isScience = teacher.category === 'ciencias';

            return (
              <div
                key={teacher.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs card-hover-academic transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo with clean badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs border backdrop-blur-sm ${
                        isScience 
                          ? 'bg-white/95 text-[#008a9f] border-[#008a9f]/30' 
                          : 'bg-white/95 text-[#8b7bb8] border-[#8b7bb8]/30'
                      }`}>
                        {isScience ? 'Ciencias Exactas' : 'Expresión Artística'}
                      </span>
                    </div>

                    {/* Rating badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-200 flex items-center gap-1 text-xs font-semibold text-slate-800 shadow-xs">
                      <Star className="w-3.5 h-3.5 fill-[#e09f3e] text-[#e09f3e]" />
                      <span>{teacher.rating}</span>
                      <span className="text-[10px] text-slate-400">({teacher.reviews})</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h4 className="text-base font-bold text-[#0f3254]">{teacher.name}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 mb-3">{teacher.title}</p>

                    {/* Video Teaser Button */}
                    <button
                      onClick={() => onOpenVideoModal(teacher)}
                      className="w-full mb-4 py-2 px-3 rounded-lg bg-slate-50 hover:bg-[#e0f4f7] text-[#0f3254] hover:text-[#008a9f] border border-slate-200 hover:border-[#008a9f]/40 font-semibold text-xs flex items-center justify-between transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4 text-[#008a9f]" />
                        <span>Ver Metodología en Video</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {teacher.videoSnippet?.duration}
                      </span>
                    </button>

                    {/* Bio excerpt */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      "{teacher.bio}"
                    </p>

                    {/* Availability block */}
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="font-semibold flex items-center gap-1 text-[#0f3254]">
                          <Clock className="w-3 h-3 text-[#008a9f]" />
                          Disponibilidad:
                        </span>
                        <span className="text-[10px] font-medium text-[#008a9f]">
                          Horarios sincronizados
                        </span>
                      </div>
                      <p className="text-slate-800 font-medium text-xs">
                        {teacher.availabilitySummary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenBooking(teacher.subjects[0], teacher.name)}
                    className="w-full py-2 px-3 bg-[#0f3254] hover:bg-[#008a9f] text-white font-semibold text-xs rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar con {teacher.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
