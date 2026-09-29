import React, { useState } from 'react';
import { X, Lock, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [role, setRole] = useState('student'); // 'student', 'teacher', 'parent'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleReset = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    onClose();
  };

  const fillDemo = (demoRole) => {
    setRole(demoRole);
    if (demoRole === 'student') {
      setEmail('alumno.demo@tripleaaa.edu');
      setPassword('••••••••');
    } else if (demoRole === 'teacher') {
      setEmail('profesor.ciencias@tripleaaa.edu');
      setPassword('••••••••');
    } else {
      setEmail('familia.garcia@tripleaaa.edu');
      setPassword('••••••••');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-fade-in-up">
      <div 
        className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - High Logo Presence */}
        <div className="p-6 border-b border-slate-200 bg-[#f8fafc] relative flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img
              src="/logo.jpg"
              alt="Triple AAA"
              className="w-13 h-13 rounded-full object-cover border-2 border-[#008a9f]/30 shadow-sm"
            />
            <div>
              <h3 className="text-base font-bold text-[#0f3254] tracking-tight">
                Acceso a la Plataforma Virtual
              </h3>
              <p className="text-xs text-[#008a9f] font-semibold">
                Triple AAA Bolivia • Aprende · Crea · Crece
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isLoggedIn ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-[#e0f4f7] text-[#008a9f] rounded-full flex items-center justify-center mx-auto border border-[#008a9f]/30">
                <CheckCircle2 className="w-6 h-6 text-[#008a9f]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0f3254]">Sesión Iniciada con Éxito</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Bienvenido al portal institucional como{' '}
                  <span className="font-semibold text-[#008a9f] capitalize">
                    {role === 'student' ? 'Estudiante' : role === 'teacher' ? 'Docente' : 'Padre de Familia'}
                  </span>.
                </p>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-3 text-xs text-slate-600 text-left space-y-1">
                <span className="font-bold text-[#0f3254] block mb-0.5">Estado del Aula en Bolivia:</span>
                <p>• Pizarra interactiva y sala acústica en línea.</p>
                <p>• Materiales de estudio y grabaciones sincronizados.</p>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 bg-[#0f3254] hover:bg-[#092038] text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
              >
                Volver a la Página Principal
              </button>
            </div>
          ) : (
            <>
              {/* Apple-style segmented control */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-lg mb-5 text-xs font-semibold text-slate-600">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-1.5 px-2 rounded-md transition-all ${
                    role === 'student'
                      ? 'bg-white text-[#0f3254] font-bold shadow-xs'
                      : 'hover:text-[#0f3254]'
                  }`}
                >
                  Estudiante
                </button>
                <button
                  type="button"
                  onClick={() => setRole('teacher')}
                  className={`py-1.5 px-2 rounded-md transition-all ${
                    role === 'teacher'
                      ? 'bg-white text-[#0f3254] font-bold shadow-xs'
                      : 'hover:text-[#0f3254]'
                  }`}
                >
                  Profesor
                </button>
                <button
                  type="button"
                  onClick={() => setRole('parent')}
                  className={`py-1.5 px-2 rounded-md transition-all ${
                    role === 'parent'
                      ? 'bg-white text-[#0f3254] font-bold shadow-xs'
                      : 'hover:text-[#0f3254]'
                  }`}
                >
                  Padres
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0f3254] mb-1">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="nombre@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#008a9f] focus:ring-1 focus:ring-[#008a9f] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-[#0f3254]">Contraseña</label>
                    <a href="#olvido" onClick={(e) => e.preventDefault()} className="text-[11px] text-[#008a9f] hover:underline">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#008a9f] focus:ring-1 focus:ring-[#008a9f] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-[#0f3254] focus:ring-[#0f3254]" />
                    <span>Recordar sesión</span>
                  </label>
                  <span className="text-[11px] text-slate-400">Acceso Prototipo</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#0f3254] hover:bg-[#008a9f] text-white font-semibold text-xs sm:text-[13px] rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Ingresar a la Plataforma</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Demo quick fillers */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[11px] block text-center text-slate-400 mb-2">
                  Prueba rápida de ingreso demostrativo:
                </span>
                <div className="flex justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => fillDemo('student')}
                    className="text-[11px] py-1 px-2.5 rounded bg-slate-100 text-[#0f3254] hover:bg-[#e0f4f7] font-semibold transition-colors"
                  >
                    Estudiante
                  </button>
                  <button
                    type="button"
                    onClick={() => fillDemo('teacher')}
                    className="text-[11px] py-1 px-2.5 rounded bg-slate-100 text-[#0f3254] hover:bg-[#e0f4f7] font-semibold transition-colors"
                  >
                    Docente
                  </button>
                  <button
                    type="button"
                    onClick={() => fillDemo('parent')}
                    className="text-[11px] py-1 px-2.5 rounded bg-slate-100 text-[#0f3254] hover:bg-[#e0f4f7] font-semibold transition-colors"
                  >
                    Padres
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
