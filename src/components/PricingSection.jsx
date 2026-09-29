import React from 'react';
import { Check, ArrowRight, ShieldCheck, QrCode, CreditCard, Building2 } from 'lucide-react';
import { pricingPlans } from '../data/pricingData';

export default function PricingSection({ onOpenBooking, onOpenPayment }) {
  return (
    <section id="precios" className="py-16 sm:py-20 bg-[#fafafa] border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Aranceles y Planes • Bolivia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
            Tarifas Transparentes sin Matrículas Forzosas
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Tarifas oficiales en Bolivianos (Bs.). Elige sesiones individuales o paquetes de acompañamiento continuo con métodos de pago locales accesibles.
          </p>
        </div>

        {/* Pricing Cards Grid - Apple-style clean grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
          {pricingPlans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-xl p-6 flex flex-col justify-between transition-all duration-200 ${
                  plan.popular
                    ? 'border-2 border-[#0c2340] shadow-sm'
                    : 'border border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {plan.badge}
                      </span>
                      {plan.popular && (
                        <span className="text-[10px] bg-slate-900 text-white font-medium px-2 py-0.5 rounded">
                          Más Elegido
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mt-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[30px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 my-2 border-y border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-semibold text-slate-700">{plan.currency}</span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{plan.price}</span>
                      <span className="text-xs text-slate-500 ml-1">/ {plan.id === 'clase-individual' ? 'sesión' : 'mes'}</span>
                    </div>
                    {plan.savings && (
                      <span className="text-[11px] font-medium text-emerald-700 mt-1 block">
                        ✓ {plan.savings}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 py-3 text-xs text-slate-600">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 mt-2 space-y-2 border-t border-slate-100">
                  <button
                    onClick={() => onOpenPayment(plan.id)}
                    className={`w-full py-2.5 px-4 rounded-lg font-medium text-xs sm:text-[13px] transition-colors flex items-center justify-center gap-1.5 ${
                      plan.popular
                        ? 'bg-[#0c2340] hover:bg-[#07182b] text-white shadow-xs'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking()}
                    className="w-full py-1 text-center text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    O agendar horario en el calendario
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accepted Payment Methods Strip - Bolivia */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-slate-700" />
                <span>Pasarela de Pago Segura • Sistema Bancario de Bolivia</span>
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Aceptamos pagos instantáneos con QR Simple interbancario de cualquier banco de Bolivia, transferencias locales y tarjetas habilitadas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-700">
                <QrCode className="w-3.5 h-3.5 text-slate-600" />
                <span>QR Simple (Todos los Bancos / Tigo Money)</span>
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-700">
                <Building2 className="w-3.5 h-3.5 text-slate-600" />
                <span>Banco Unión, BNB, BCP, BMSC</span>
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-700">
                <CreditCard className="w-3.5 h-3.5 text-slate-600" />
                <span>Tarjetas Débito / Crédito</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
