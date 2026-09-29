import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Cómo me conecto a mi clase virtual y qué plataforma utilizan?',
      a: 'Todas las clases se realizan 100% en vivo a través de Google Meet o Zoom en salas privadas. Al agendar en el calendario, el sistema genera automáticamente un enlace único de acceso que también recibirás por correo y WhatsApp.'
    },
    {
      q: '¿Qué herramientas se utilizan para las clases de Ciencias (Matemáticas, Física, Química)?',
      a: 'El docente comparte la Pizarra Digital Interactiva con herramientas de GeoGebra y simuladores PhET. El estudiante puede resolver ejercicios de forma compartida en tiempo real y descargar todos los apuntes en formato PDF.'
    },
    {
      q: '¿Para las clases de Canto, Teatro y Oratoria se requieren equipos profesionales?',
      a: 'No es indispensable. Cualquier auricular con micrófono estándar o integrado de laptop funciona perfectamente gracias a que la sala virtual cuenta con optimización de audio estéreo de baja latencia.'
    },
    {
      q: '¿Puedo reprogramar una clase si tengo un imprevisto escolar?',
      a: 'Sí. Puedes reprogramar tu clase con un mínimo de 4 horas de anticipación comunicándote por nuestro canal de soporte o desde tu panel de usuario.'
    },
    {
      q: '¿Cómo reciben los padres el reporte de progreso?',
      a: 'En los paquetes mensuales, los padres reciben un reporte quincenal que detalla el avance en resolución de ejercicios analíticos y el desarrollo de habilidades escénicas y vocales.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#fafafa] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Preguntas Frecuentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
            Consultas Habituales sobre el Servicio Virtual
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Detalles sobre metodología, requerimientos técnicos y sistema de reprogramación.
          </p>
        </div>

        {/* Clean Accordion - Apple Style */}
        <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-lg">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-[14px] text-slate-900 hover:text-slate-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
