import React, { useState } from 'react';
import { Clock, Video, Calendar, Star } from 'lucide-react';
import { coursesCategories } from '../data/coursesData';

export default function CatalogSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'ciencias', 'artes'

  const filteredCategories = activeTab === 'all' 
    ? coursesCategories 
    : coursesCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="catalogo" className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008a9f]">
            Catálogo Académico • Bolivia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f3254] mt-1 tracking-tight">
            Programas de Formación y Reforzamiento
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Organizado en dos bloques disciplinarios con metodologías adaptadas y clases 100% virtuales en vivo.
          </p>
        </div>

        {/* Tab Filters - Apple-style clean tabs with brand colors */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg w-fit mb-12 border border-slate-200/70 shadow-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-[#0f3254] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#0f3254]'
            }`}
          >
            Todas las Disciplinas
          </button>
          <button
            onClick={() => setActiveTab('ciencias')}
            className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
              activeTab === 'ciencias'
                ? 'bg-[#008a9f] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#008a9f]'
            }`}
          >
            Bloque 1: Ciencias Exactas
          </button>
          <button
            onClick={() => setActiveTab('artes')}
            className={`py-1.5 px-3.5 rounded-md text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
              activeTab === 'artes'
                ? 'bg-[#8b7bb8] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#8b7bb8]'
            }`}
          >
            Bloque 2: Expresión Artística
          </button>
        </div>

        {/* Render Blocks */}
        <div className="space-y-16">
          {filteredCategories.map((category) => {
            const isScience = category.id === 'ciencias';

            return (
              <div key={category.id} id={category.id} className="scroll-mt-20">
                {/* Block Header Banner - Clean & Academic */}
                <div className={`pb-4 mb-6 border-b flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 ${
                  isScience ? 'border-[#008a9f]/30' : 'border-[#8b7bb8]/30'
                }`}>
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-widest block mb-1 ${
                      isScience ? 'text-[#008a9f]' : 'text-[#8b7bb8]'
                    }`}>
                      {category.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f3254] tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-500 max-w-lg">
                    {category.subtitle}
                  </p>
                </div>

                {/* Courses Grid with card-hover-academic smooth elevation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.courses.map((course) => {
                    return (
                      <div
                        key={course.id}
                        className={`bg-white rounded-xl p-6 border shadow-xs card-hover-academic flex flex-col justify-between ${
                          isScience 
                            ? 'border-slate-200 hover:border-[#008a9f]/60' 
                            : 'border-slate-200 hover:border-[#8b7bb8]/60'
                        }`}
                      >
                        <div>
                          {/* Course Top Meta */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded border ${
                                isScience 
                                  ? 'bg-[#e0f4f7] text-[#008a9f] border-[#008a9f]/20' 
                                  : 'bg-[#f1edf7] text-[#8b7bb8] border-[#8b7bb8]/20'
                              }`}>
                                {course.area}
                              </span>
                              <h4 className="text-base sm:text-lg font-bold text-[#0f3254] mt-2 tracking-tight">
                                {course.title}
                              </h4>
                            </div>

                            <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-slate-200 shrink-0">
                              <Star className="w-3.5 h-3.5 fill-[#e09f3e] text-[#e09f3e]" />
                              <span>{course.rating}</span>
                              <span className="text-slate-400 text-[11px]">({course.reviewsCount})</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-[13px] text-slate-600 mb-4 leading-relaxed">
                            {course.description}
                          </p>

                          {/* Specs: Duration & Modality */}
                          <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs text-slate-600 font-medium">
                            <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {course.duration}
                            </span>
                            <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                              <Video className="w-3.5 h-3.5 text-[#008a9f]" />
                              {course.modality}
                            </span>
                          </div>

                          {/* Topics List */}
                          <div className="mb-4">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                              Contenidos Pedagógicos:
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                              {course.topics.map((topic, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                                    isScience ? 'bg-[#008a9f]' : 'bg-[#8b7bb8]'
                                  }`} />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Specialized Tools */}
                          <div className={`rounded-lg p-3 mb-5 border ${
                            isScience ? 'bg-[#e0f4f7]/40 border-[#008a9f]/20' : 'bg-[#f1edf7]/40 border-[#8b7bb8]/20'
                          }`}>
                            <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                              isScience ? 'text-[#008a9f]' : 'text-[#8b7bb8]'
                            }`}>
                              Herramientas del Aula Virtual:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {course.tools.map((tool, i) => (
                                <span key={i} className="text-[11px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium">
                                  ✓ {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Booking CTA Button */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                          <span className="text-xs text-slate-500">
                            Tutor: <strong className="text-[#0f3254]">{course.recommendedTeacher}</strong>
                          </span>

                          <button
                            onClick={() => onOpenBooking(course.title, course.recommendedTeacher)}
                            className={`py-2 px-3.5 rounded-lg text-xs font-semibold text-white transition-all duration-200 flex items-center gap-1.5 shadow-xs hover:shadow-sm hover:-translate-y-0.5 ${
                              isScience 
                                ? 'bg-[#0f3254] hover:bg-[#008a9f]' 
                                : 'bg-[#0f3254] hover:bg-[#8b7bb8]'
                            }`}
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Reservar y Agendar Clase</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
