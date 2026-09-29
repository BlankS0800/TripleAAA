import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StepsSection({ onOpenBooking }) {
  const steps = [
    {
      step: '01',
      title: 'Elige tu área formativa',
      subtitle: 'Ciencias Exactas o Expresión Artística',
      description: 'Selecciona reforzamiento académico en Matemáticas, Física, Química y Biología, o desarrollo de habilidades en Teatro, Oratoria y Canto.'
    },
    {
      step: '02',
      title: 'Selecciona al docente especialista',
      subtitle: 'Perfil universitario y experiencia pedagógica',
      description: 'Examina su trayectoria profesional, áreas de especialización y video demostrativo de metodología para elegir al tutor ideal.'
    },
    {
      step: '03',
      title: 'Reserva tu horario y conéctate',
      subtitle: 'Sincronización en tiempo real sin cruces',
      description: 'Elige fecha y hora en el calendario interactivo. Recibe al instante tu enlace privado de Google Meet / Zoom y accede a tu aula virtual.'
    }
  ];

  return (
    <section className="py-16 bg-[#fafafa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Proceso de Inscripción
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
            ¿Cómo empezar tus clases en Triple AAA?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Tres pasos estructurados para acceder a tutoría individual de alto nivel académico y artístico.
          </p>
        </div>

        {/* Steps Grid - Apple-style clean cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-slate-400 mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>PASO {item.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                </div>

                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Sesiones 100% virtuales y en vivo
              </div>
            </div>
          ))}
        </div>

        {/* Bottom clean action link */}
        <div className="mt-8 text-center sm:text-left">
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#0c2340] hover:underline"
          >
            <span>Ver disponibilidad horaria en el calendario</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
