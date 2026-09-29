import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, Calendar, CheckCircle2 } from 'lucide-react';

export default function VideoPresentationModal({ isOpen, onClose, teacher, onBookTeacher }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    let interval;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1.5));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen || !teacher) return null;

  const isScience = teacher.category === 'ciencias';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs overflow-y-auto animate-fade-in-up">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Apple Clean Academic with Brand Colors */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-[#f8fafc] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-11 h-11 rounded-full object-cover border-2 border-[#008a9f]/30"
            />
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm text-[#0f3254]">{teacher.name}</h4>
                <span className={`text-[10px] px-2 py-0.5 rounded font-semibold border ${
                  isScience 
                    ? 'bg-[#e0f4f7] text-[#008a9f] border-[#008a9f]/30' 
                    : 'bg-[#f1edf7] text-[#8b7bb8] border-[#8b7bb8]/30'
                }`}>
                  {isScience ? 'Metodología Ciencias' : 'Muestra Vocal / Escénica'}
                </span>
              </div>
              <p className="text-xs text-slate-500">{teacher.title}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors"
            aria-label="Cerrar video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Simulation */}
        <div className="relative bg-slate-950 aspect-video flex flex-col justify-between p-4 overflow-hidden">
          {/* Animated Background Simulation */}
          <div className="absolute inset-0 opacity-40">
            {isScience ? (
              <div className="w-full h-full flex items-center justify-center p-6">
                <div className="w-full max-w-lg font-mono text-xs text-slate-300 space-y-2 select-none">
                  <p className="text-[#008a9f] font-semibold">// Demostración en Pizarra Digital</p>
                  <p>Teorema Fundamental: ∫[a,b] f'(x) dx = f(b) - f(a)</p>
                  <div className="h-10 border-b border-l border-slate-700 relative">
                    <div className="absolute bottom-0 left-0 right-0 h-8 border-t border-[#008a9f] rounded-t-full"></div>
                  </div>
                  <p className="text-slate-400">Cinemática: v = v₀ + at  |  Δx = v₀t + ½at²</p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex items-center gap-1.5 h-16 px-8">
                  {[24, 45, 78, 92, 60, 35, 80, 100, 70, 50, 85, 60, 40, 95, 75, 50, 85, 30].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${isPlaying ? (h * (0.6 + Math.random() * 0.4)) : h * 0.2}%` }}
                      className="w-2 bg-[#8b7bb8] rounded-xs transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Top Bar */}
          <div className="relative z-10 flex justify-between items-start">
            <span className="bg-white/10 backdrop-blur-md text-white font-medium text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
              Video Demostrativo
            </span>
            <span className="bg-black/60 text-white/90 text-xs px-2 py-0.5 rounded font-mono">
              {teacher.videoSnippet?.duration || '2:00 min'}
            </span>
          </div>

          {/* Caption over the video */}
          <div className="relative z-10 bg-black/70 backdrop-blur-md p-3 rounded-lg border border-white/10 text-white text-xs max-w-lg mx-auto">
            <p className="font-semibold text-white mb-0.5">
              "{teacher.videoSnippet?.title}"
            </p>
            <p className="text-slate-300 text-[11px]">
              {teacher.videoSnippet?.description}
            </p>
          </div>

          {/* Video Controls Bar */}
          <div className="relative z-10 space-y-2">
            <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
              <div 
                className="bg-[#008a9f] h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 rounded text-white hover:bg-white/10 transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                </button>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Volume2 className="w-3.5 h-3.5 text-[#008a9f]" />
                  <span>Audio Optimizado</span>
                </div>
              </div>

              <span className="font-mono text-[11px] text-slate-400">
                0:{Math.floor(progress * 0.9).toString().padStart(2, '0')} / {teacher.videoSnippet?.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Video Highlights & Booking Call to Action */}
        <div className="p-5 space-y-4">
          <div>
            <span className="text-[11px] font-bold text-[#0f3254] uppercase tracking-wider block mb-2">
              Aspectos destacados de su pedagogía:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {teacher.videoSnippet?.highlights?.map((highlight, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008a9f] shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-semibold">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between border-t border-slate-100">
            <div className="text-xs text-slate-500">
              <span className="font-bold text-[#0f3254]">Horarios disponibles: </span>
              {teacher.availabilitySummary}
            </div>

            <button
              onClick={() => {
                onClose();
                onBookTeacher(teacher);
              }}
              className="w-full sm:w-auto py-2 px-4 bg-[#0f3254] hover:bg-[#008a9f] text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar Clase con {teacher.name.split(' ')[1]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
