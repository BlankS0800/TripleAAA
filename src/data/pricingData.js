export const pricingPlans = [
  {
    id: 'clase-individual',
    name: 'Clase Individual / Por Hora',
    badge: 'Flexibilidad Total',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    popular: false,
    price: 50,
    currency: 'Bs.',
    period: 'por sesión (60 min)',
    description: 'Ideal para resolver dudas puntuales antes de un examen o preparar una presentación o audición específica.',
    features: [
      '1 sesión de 60 minutos 100% personalizada',
      'Elección libre de docente y horario sincronizado',
      'Acceso a pizarra digital o sala de audio HD',
      'Grabación de la clase disponible por 30 días',
      'Material y ejercicios en PDF resueltos'
    ],
    ctaText: 'Reservar Clase Individual',
    categoryTarget: 'Ambas Áreas'
  },
  {
    id: 'paquete-seguimiento',
    name: 'Paquete Mensual (4 Sesiones)',
    badge: 'Recomendado para Refuerzo',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    popular: true,
    price: 180,
    savings: 'Ahorras Bs. 20',
    currency: 'Bs.',
    period: 'por mes (4 sesiones de 60 min)',
    description: 'Perfecto para acompañamiento continuo en materias desafiantes (física/cálculo) o progreso vocal constante.',
    features: [
      '4 sesiones de 60 minutos mensuales programadas',
      'Mismo docente de cabecera garantizado',
      'Plan pedagógico y metas mensuales personalizadas',
      'Informes de progreso quincenales para el alumno o padres',
      'Soporte de consultas rápidas por WhatsApp entre clases',
      'Grabaciones en la nube ilimitadas durante el mes'
    ],
    ctaText: 'Elegir Paquete Mensual (4 clases)',
    categoryTarget: 'Ciencias o Artes'
  },
  {
    id: 'paquete-intensivo',
    name: 'Plan Intensivo / Bimateria (8 Sesiones)',
    badge: 'Máximo Avance',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    popular: false,
    price: 340,
    savings: 'Ahorras Bs. 60',
    currency: 'Bs.',
    period: 'por mes (8 sesiones de 60 min)',
    description: 'La opción predilecta para combinar Ciencias + Expresión Artística, o preparación preuniversitaria rigurosa.',
    features: [
      '8 sesiones al mes (ej. 2 clases por semana)',
      'Permite combinar materias (ej. Matemáticas + Oratoria)',
      'Acceso prioritario a horarios estelares y fines de semana',
      'Simulacros de examen o presentaciones de ensayo grabadas',
      'Panel de estudiante y reporte integral para padres',
      'Material didáctico y bancos de preguntas exclusivas'
    ],
    ctaText: 'Elegir Plan Intensivo (8 clases)',
    categoryTarget: 'Integral Ciencias + Artes'
  }
];

export const paymentMethodsInfo = {
  qrMethods: [
    { 
      name: 'QR Simple (Bolivia)', 
      tag: 'Interbancario', 
      holder: 'Triple AAA S.R.L.',
      nit: '4829104018',
      phone: '+591 76543210',
      description: 'Compatible con BNB, Banco Unión, BCP Bolivia, Mercantil Santa Cruz, Banco FIE, Banco Sol, Banco Ganadero, Banco BISA y Tigo Money.'
    },
    { 
      name: 'Tigo Money', 
      tag: 'Billetera Móvil', 
      number: '76543210', 
      holder: 'Triple AAA Bolivia' 
    }
  ],
  bankAccounts: [
    { 
      bank: 'Banco Unión', 
      accountType: 'Caja de Ahorro',
      currency: 'Bolivianos (Bs.)', 
      account: '10000049281729', 
      holder: 'Triple AAA S.R.L.',
      nit: '4829104018'
    },
    { 
      bank: 'Banco Nacional de Bolivia (BNB)', 
      accountType: 'Cuenta Corriente',
      currency: 'Bolivianos (Bs.)', 
      account: '2000-482910-12', 
      holder: 'Triple AAA S.R.L.',
      nit: '4829104018'
    },
    { 
      bank: 'Banco de Crédito de Bolivia (BCP)', 
      accountType: 'Caja de Ahorro',
      currency: 'Bolivianos (Bs.)', 
      account: '201-5082194-3-11', 
      holder: 'Triple AAA S.R.L.',
      nit: '4829104018'
    },
    { 
      bank: 'Banco Mercantil Santa Cruz (BMSC)', 
      accountType: 'Caja de Ahorro',
      currency: 'Bolivianos (Bs.)', 
      account: '4010-829174-01', 
      holder: 'Triple AAA S.R.L.',
      nit: '4829104018'
    }
  ],
  cardsAccepted: ['Visa Débito / Crédito', 'Mastercard Débito / Crédito', 'Habilitadas para compras por Internet / Red Enlace']
};
