import React, { useState } from 'react';
import { X, QrCode, CreditCard, Building2, CheckCircle2, ShieldCheck, Download, Smartphone } from 'lucide-react';
import { pricingPlans, paymentMethodsInfo } from '../../data/pricingData';
import logoImg from '../../assets/logo.jpg';

export default function PaymentModal({ isOpen, onClose, selectedPlanId = 'clase-individual' }) {
  const [activePlanId, setActivePlanId] = useState(selectedPlanId);
  const [activeTab, setActiveTab] = useState('qr'); // 'qr', 'card', 'bank'
  const [copiedBank, setCopiedBank] = useState('');
  const [copiedQrNumber, setCopiedQrNumber] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Card form
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  if (!isOpen) return null;

  const currentPlan = pricingPlans.find(p => p.id === activePlanId) || pricingPlans[0];

  const handleCopy = (text, identifier) => {
    navigator.clipboard?.writeText(text);
    if (identifier === 'qr') {
      setCopiedQrNumber(true);
      setTimeout(() => setCopiedQrNumber(false), 2000);
    } else {
      setCopiedBank(identifier);
      setTimeout(() => setCopiedBank(''), 2000);
    }
  };

  const handleSimulatePayment = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/45 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Apple Clean Academic */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-[#fafafa] relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Triple AAA"
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                {isSuccess ? 'Comprobante Oficial de Pago' : 'Pasarela de Pago • Bolivia'}
              </h3>
              <p className="text-xs text-slate-500">
                {isSuccess ? 'Acreditación confirmada en el sistema académico' : 'Triple AAA • Pagos mediante QR Simple (interbancario), transferencias y tarjetas'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-md transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto border border-slate-200">
                <CheckCircle2 className="w-6 h-6 text-slate-900" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">¡Pago Registrado Exitosamente!</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Comprobante N°: <span className="font-mono font-bold text-slate-800">TRIP-BO-2025-09841</span>
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Concepto:</span>
                  <span className="font-semibold text-slate-800">{currentPlan.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Monto Acreditado:</span>
                  <span className="font-bold text-slate-900">{currentPlan.currency} {currentPlan.price}.00</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Método Utilizado:</span>
                  <span className="font-medium text-slate-800 capitalize">
                    {activeTab === 'qr' ? 'QR Simple (Bolivia - Interbancario)' : activeTab === 'card' ? 'Tarjeta Débito / Crédito' : 'Transferencia Bancaria Nacional'}
                  </span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-500">Estado:</span>
                  <span className="font-semibold text-emerald-700">Acreditado / Confirmado</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={handleReset}
                  className="py-2 px-5 bg-[#0c2340] hover:bg-[#07182b] text-white font-medium rounded-lg text-xs transition-colors shadow-xs"
                >
                  Volver al Inicio
                </button>
                <button
                  onClick={() => alert('Descarga de comprobante de pago en PDF generada.')}
                  className="py-2 px-5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Comprobante PDF</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Select Plan Toggle */}
              <div>
                <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  1. Plan Seleccionado (Precios en Bolivianos)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {pricingPlans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setActivePlanId(plan.id)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        activePlanId === plan.id
                          ? 'border-[#0c2340] bg-slate-50 ring-1 ring-[#0c2340]'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-slate-900 truncate">{plan.name.split('(')[0]}</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {plan.currency} {plan.price}
                        <span className="text-[10px] text-slate-400 font-normal ml-1">/ {plan.id === 'clase-individual' ? 'sesión' : 'mes'}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Methods Tabs */}
              <div>
                <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  2. Medio de Pago Disponible en Bolivia
                </span>
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">
                  <button
                    type="button"
                    onClick={() => setActiveTab('qr')}
                    className={`py-1.5 px-2 rounded-md flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'qr'
                        ? 'bg-white text-slate-900 font-semibold shadow-xs'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>QR Simple</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('bank')}
                    className={`py-1.5 px-2 rounded-md flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'bank'
                        ? 'bg-white text-slate-900 font-semibold shadow-xs'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Bancos Bolivia</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('card')}
                    className={`py-1.5 px-2 rounded-md flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'card'
                        ? 'bg-white text-slate-900 font-semibold shadow-xs'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Tarjetas</span>
                  </button>
                </div>
              </div>

              {/* Tab 1: QR Simple (Bolivia) */}
              {activeTab === 'qr' && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Clean Monochromatic QR */}
                    <div className="bg-white p-2.5 rounded-lg border border-slate-300 shadow-xs shrink-0 flex flex-col items-center">
                      <div className="w-32 h-32 bg-slate-900 rounded p-2 flex flex-col items-center justify-center text-white relative">
                        <div className="grid grid-cols-6 gap-1 w-full h-full opacity-85">
                          {Array.from({ length: 36 }).map((_, i) => (
                            <div
                              key={i}
                              className={`rounded-xs ${
                                (i % 2 === 0 || i % 5 === 0) ? 'bg-white' : 'bg-transparent'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="absolute bg-[#0c2340] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow border border-white/20">
                          QR SIMPLE
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1 font-medium">Interbancario Bolivia</span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <p className="font-semibold text-slate-900">
                        1. Compatible con la aplicación móvil de cualquier banco:
                      </p>
                      <p className="text-[11px] text-slate-500">
                        BNB Móvil, UniMóvil (Banco Unión), Banca Móvil BCP Bolivia, BMSC Móvil, Banco Sol, Banco FIE, Banco BISA o Tigo Money.
                      </p>
                      <p className="font-medium text-slate-800">
                        2. Escanea el código QR o transfiere al número registrado:
                      </p>

                      <div className="flex items-center gap-2 bg-white border border-slate-200 p-2 rounded-md">
                        <Smartphone className="w-4 h-4 text-slate-500 shrink-0" />
                        <span className="font-mono font-bold text-slate-900">+591 76543210</span>
                        <span className="text-[11px] text-slate-500">(Triple AAA S.R.L.)</span>
                        <button
                          type="button"
                          onClick={() => handleCopy('+59176543210', 'qr')}
                          className="ml-auto py-0.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded text-[11px] transition-colors"
                        >
                          {copiedQrNumber ? 'Copiado' : 'Copiar'}
                        </button>
                      </div>

                      <div className="text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-200 flex justify-between">
                        <span>Titular: <strong>Triple AAA S.R.L.</strong></span>
                        <span>NIT: <strong>4829104018</strong></span>
                      </div>

                      <p className="text-[11px] text-slate-500">
                        Monto exacto a transferir: <strong className="text-slate-900">{currentPlan.currency} {currentPlan.price}.00</strong>
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSimulatePayment}
                    className="w-full py-2 px-4 bg-[#0c2340] hover:bg-[#07182b] text-white font-medium rounded-lg text-xs transition-colors shadow-xs"
                  >
                    Confirmar Pago Realizado por QR Simple
                  </button>
                </div>
              )}

              {/* Tab 2: Bank Accounts (Bolivia) */}
              {activeTab === 'bank' && (
                <div className="space-y-2 bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-slate-600 font-medium">
                      Cuentas bancarias oficiales en Bolivia (Moneda: Bolivianos - Bs.):
                    </p>
                    <span className="text-[10px] text-slate-500 font-mono">NIT: 4829104018</span>
                  </div>

                  <div className="space-y-2">
                    {paymentMethodsInfo.bankAccounts.map((b) => (
                      <div key={b.bank} className="bg-white p-2.5 rounded-md border border-slate-200 text-xs space-y-1">
                        <div className="flex items-center justify-between font-semibold text-slate-900">
                          <span>{b.bank}</span>
                          <span className="text-[10px] text-slate-500 font-normal">{b.accountType} • {b.currency}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600">
                          <span>N° de Cuenta: <strong className="font-mono text-slate-900">{b.account}</strong></span>
                          <button
                            type="button"
                            onClick={() => handleCopy(b.account, b.bank + '-acc')}
                            className="text-[10px] px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 font-medium"
                          >
                            {copiedBank === b.bank + '-acc' ? 'Copiado' : 'Copiar Cuenta'}
                          </button>
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Titular: <span className="text-slate-800">{b.holder}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleSimulatePayment}
                    className="w-full py-2 px-4 bg-[#0c2340] hover:bg-[#07182b] text-white font-medium rounded-lg text-xs transition-colors mt-2 shadow-xs"
                  >
                    Confirmar Transferencia Bancaria
                  </button>
                </div>
              )}

              {/* Tab 3: Credit/Debit Card Form */}
              {activeTab === 'card' && (
                <form onSubmit={handleSimulatePayment} className="space-y-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="bg-white p-2 rounded border border-slate-200 text-[11px] text-slate-500 mb-2">
                    Aceptamos tarjetas de débito y crédito emitidas por bancos bolivianos (habilitadas para compras por Internet) y tarjetas internacionales.
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Número de Tarjeta</label>
                    <div className="relative">
                      <CreditCard className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        maxLength={19}
                        placeholder="4123 4567 8901 2345"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Titular de la Tarjeta</label>
                    <input
                      type="text"
                      required
                      placeholder="JUAN PEREZ"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] outline-none uppercase"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">Vencimiento (MM/AA)</label>
                      <input
                        type="text"
                        required
                        maxLength={5}
                        placeholder="12/28"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] outline-none font-mono text-center"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">CVV</label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        placeholder="123"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] outline-none font-mono text-center"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-[#0c2340] hover:bg-[#07182b] text-white font-medium rounded-lg text-xs transition-colors shadow-xs"
                    >
                      Pagar {currentPlan.currency} {currentPlan.price}.00 con Tarjeta Segura
                    </button>
                  </div>
                </form>
              )}

              <div className="text-center text-slate-400 text-[11px] pt-1">
                Transacción segura en Bolivia • Emisión inmediata de comprobante electrónico
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
