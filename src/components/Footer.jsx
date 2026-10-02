import React from 'react';
import { Phone, Mail, Video, Calendar } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Footer({ onOpenLogin, onOpenBooking }) {
  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-200">

          {/* Brand Col - High Logo Presence */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={logoImg}
                alt="Triple AAA - Bolivia"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#008a9f]/30 shadow-md hover:scale-105 transition-transform duration-300"
              />
              <div>
                <span className="font-extrabold text-lg sm:text-xl text-[#0f3254] tracking-tight block">
                  Triple AAA Bolivia
                </span>
                <p className="text-xs text-[#008a9f] font-bold">
                  Apoyo Académico Artístico
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Aprende • Crea • Crece
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-500 max-w-sm leading-relaxed">
              Institución especializada en reforzar el rigor en Ciencias Exactas (Matemáticas, Física, Química, Biología) y potenciar el talento en Expresión Artística (Teatro, Oratoria, Canto) en Bolivia.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => onOpenBooking()}
                className="py-2 px-4 rounded-lg bg-[#0f3254] hover:bg-[#092038] text-white font-semibold text-xs transition-all duration-200 shadow-xs hover:shadow-sm"
              >
                Agendar Clase Virtual
              </button>

              <button
                onClick={onOpenLogin}
                className="py-2 px-4 rounded-lg bg-white hover:bg-slate-50 text-[#0f3254] border border-slate-300 hover:border-[#0f3254] font-semibold text-xs transition-all duration-200"
              >
                Acceso Aula Virtual
              </button>
            </div>
          </div>

          {/* Col 2: Ciencias */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0f3254] uppercase tracking-wider">
              Ciencias Exactas
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li><a href="#ciencias" className="hover:text-[#008a9f] transition-colors">Matemáticas y Cálculo</a></li>
              <li><a href="#ciencias" className="hover:text-[#008a9f] transition-colors">Física y Cinemática</a></li>
              <li><a href="#ciencias" className="hover:text-[#008a9f] transition-colors">Química y Estequiometría</a></li>
              <li><a href="#ciencias" className="hover:text-[#008a9f] transition-colors">Biología y Genética</a></li>
              <li><a href="#aula-virtual" className="hover:text-[#008a9f] transition-colors">Pizarra GeoGebra en Vivo</a></li>
            </ul>
          </div>

          {/* Col 3: Artes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0f3254] uppercase tracking-wider">
              Talleres Artísticos
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li><a href="#artes" className="hover:text-[#8b7bb8] transition-colors">Taller de Teatro e Improvisación</a></li>
              <li><a href="#artes" className="hover:text-[#8b7bb8] transition-colors">Oratoria y Liderazgo</a></li>
              <li><a href="#artes" className="hover:text-[#8b7bb8] transition-colors">Canto y Salud Vocal</a></li>
              <li><a href="#artes" className="hover:text-[#8b7bb8] transition-colors">Dibujo y Creatividad Visual</a></li>
              <li><a href="#aula-virtual" className="hover:text-[#8b7bb8] transition-colors">Sala Acústica HD</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto Bolivia */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0f3254] uppercase tracking-wider">
              Contacto y Soporte
            </h4>
            <div className="space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#008a9f]" />
                <span>WhatsApp: +591 77777777</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#008a9f]" />
                <span>contacto@tripleaaa.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-3.5 h-3.5 text-[#8b7bb8]" />
                <span>Google Meet y Zoom HD</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-[#0f3254] block mb-0.5">Pagos Aceptados en Bolivia:</span>
              <p className="text-[11px] text-slate-500">
                QR Simple, Banco Unión, BNB, BCP Bolivia, BMSC, Tigo Money y Tarjetas.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Triple AAA Bolivia — Apoyo Académico Artístico. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#terminos" onClick={(e) => e.preventDefault()} className="hover:text-[#0f3254]">Términos de Servicio</a>
            <span>•</span>
            <a href="#privacidad" onClick={(e) => e.preventDefault()} className="hover:text-[#0f3254]">Privacidad</a>
            <span>•</span>
            <span className="text-[#008a9f] font-semibold">Educación 100% Personalizada</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
