import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Navbar({ onOpenLogin, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full apple-blur border-b border-[#e5e5e7] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Official Brand Logo & Academic Identity - High Presence */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative">
              <img
                src={logoImg}
                alt="Triple AAA - Apoyo Académico Artístico"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#008a9f]/30 shadow-sm group-hover:scale-105 group-hover:border-[#008a9f] transition-all duration-300"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#008a9f] border-2 border-white"></span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-[#0f3254] tracking-tight group-hover:text-[#008a9f] transition-colors">
                  Triple AAA
                </span>

              </div>
              <p className="text-xs text-[#0f3254]/80 font-semibold tracking-tight -mt-0.5">
                Apoyo Académico Artístico
              </p>
              <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
                Aprende • Crea • Crece
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links - Clean Minimalist Academic */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-[#0f3254]/80">
            <a
              href="#ciencias"
              className="hover:text-[#008a9f] transition-colors py-1 relative group/link"
            >
              <span>Ciencias Exactas</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#008a9f] group-hover/link:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#artes"
              className="hover:text-[#8b7bb8] transition-colors py-1 relative group/link"
            >
              <span>Talleres Artísticos</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8b7bb8] group-hover/link:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#docentes"
              className="hover:text-[#0f3254] transition-colors py-1"
            >
              Docentes
            </a>
            <a
              href="#aula-virtual"
              className="hover:text-[#0f3254] transition-colors py-1"
            >
              Aula Virtual
            </a>
            <a
              href="#precios"
              className="hover:text-[#0f3254] transition-colors py-1"
            >
              Aranceles y Planes
            </a>
          </nav>

          {/* Action Buttons (Right side) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Login / Virtual Classroom Modal Trigger */}
            <button
              onClick={onOpenLogin}
              className="py-2 px-4 rounded-lg border border-slate-300 hover:border-[#0f3254] text-[#0f3254] hover:bg-slate-50 font-semibold text-xs sm:text-[13px] transition-all duration-200"
            >
              Iniciar Sesión
            </button>

            {/* Book Class CTA - Brand Navy with Teal Glow on hover */}
            <button
              onClick={() => onOpenBooking()}
              className="py-2 px-5 rounded-lg bg-[#0f3254] hover:bg-[#092038] text-white font-semibold text-xs sm:text-[13px] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Reservar Clase
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenLogin}
              className="py-1 px-2.5 text-[#0f3254] hover:bg-slate-100 rounded-lg text-xs font-semibold border border-slate-300"
            >
              Ingresar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in-up">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-700">
            <a
              href="#ciencias"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#e0f4f7] text-[#0f3254]"
            >
              <span>Ciencias Exactas (Matemáticas, Física, Química, Biología)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#artes"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#f1edf7] text-[#0f3254]"
            >
              <span>Talleres Artísticos (Teatro, Oratoria, Canto)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#docentes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Perfiles de Docentes y Metodología
            </a>
            <a
              href="#aula-virtual"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Aula Virtual y Pizarra Digital
            </a>
            <a
              href="#precios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Aranceles y Planes (Bolivia)
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 px-4 rounded-lg border border-slate-300 text-slate-800 font-semibold text-xs text-center"
            >
              Iniciar Sesión / Aula Virtual
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-lg bg-[#0f3254] text-white font-semibold text-xs text-center shadow-xs"
            >
              Reservar y Agendar Clase
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
