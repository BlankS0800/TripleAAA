import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { testimonialsData, statsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Resultados Comprobados
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
            Experiencias de Alumnos y Familias
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Mejora de calificaciones en materias de ciencias y desarrollo de seguridad expresiva en artes y comunicación.
          </p>
        </div>

        {/* Stats Strip - Minimalist Apple Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {statsData.map((stat, i) => (
            <div key={i} className="p-4 border-l-2 border-slate-800 bg-slate-50/70 rounded-r-lg">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight block">
                {stat.value}
              </span>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => {
            const isScience = item.category === 'ciencias';

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top user meta */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-semibold text-slate-900 text-sm">{item.name}</h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                        <p className="text-xs text-slate-500">{item.role}</p>
                      </div>
                    </div>

                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="mb-3">
                    <span className="text-[11px] font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 inline-block">
                      {item.resultBadge}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{item.categoryLabel}</span>
                  <span>Alumno Verificado</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
