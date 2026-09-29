export const teachersData = [
  {
    id: 'carlos-mendoza',
    name: 'Prof. Carlos Mendoza',
    title: 'Lic. en Matemáticas Puras y Magíster en Docencia Universitaria',
    specialty: 'Ciencias Exactas - Álgebra, Cálculo y Geometría',
    category: 'ciencias',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviews: 128,
    classesGiven: '420+ clases',
    experience: '9 años de experiencia pedagógica',
    bio: 'Especialista en desmitificar las matemáticas. Mi método se enfoca en que el alumno comprenda el "por qué" de cada fórmula antes de memorizarla, logrando que resuelva problemas complejos con absoluta autonomía.',
    availabilitySummary: 'Lun, Mié y Sáb (Tardes)',
    availableSlots: [
      { day: 'Lunes', times: ['15:00', '16:30', '18:00', '19:30'] },
      { day: 'Miércoles', times: ['16:00', '17:30', '19:00'] },
      { day: 'Sábado', times: ['09:00', '10:30', '12:00', '15:00'] }
    ],
    videoSnippet: {
      type: 'science',
      title: 'Demostración Dinámica: Deducción del Teorema Fundamental del Cálculo sin memorización',
      duration: '1:45 min',
      description: 'Mira cómo el Prof. Carlos utiliza GeoGebra y la pizarra digital interactiva para desglosar problemas de cálculo con fluidez.',
      highlights: ['Uso de Pizarra Digital en tiempo real', 'Método de resolución en 4 pasos', 'Resolución de dudas al instante']
    },
    subjects: ['Matemáticas', 'Álgebra', 'Cálculo', 'Geometría']
  },
  {
    id: 'valeria-dominguez',
    name: 'Ing. Valeria Domínguez',
    title: 'Ingeniera Mecatrónica y Docente de Física Universitaria',
    specialty: 'Ciencias Exactas - Física Clásica, Mecánica y Circuitos',
    category: 'ciencias',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    reviews: 94,
    classesGiven: '380+ clases',
    experience: '7 años capacitando postulantes a ingeniería',
    bio: 'Combino la teoría física con simuladores computacionales interactivos. Mis alumnos ven en la pantalla la simulación exacta del tiro parabólico o la caída de voltaje, haciendo que la física sea intuitiva y apasionante.',
    availabilitySummary: 'Mar, Jue y Vie (Tardes y Noches)',
    availableSlots: [
      { day: 'Martes', times: ['16:00', '17:30', '19:00'] },
      { day: 'Jueves', times: ['15:30', '17:00', '18:30', '20:00'] },
      { day: 'Viernes', times: ['16:00', '17:30', '19:00'] }
    ],
    videoSnippet: {
      type: 'science',
      title: 'Laboratorio Virtual: Leyes de Newton con Simulación Interactiva PhET',
      duration: '2:10 min',
      description: 'Una muestra de cómo la Ing. Valeria convierte un ejercicio abstracto de fricción en una experiencia práctica virtual.',
      highlights: ['Simuladores interactivos PhET', 'Diagramas de cuerpo libre dinámicos', 'Enfoque práctico para exámenes']
    },
    subjects: ['Física', 'Mecánica', 'Termodinámica', 'Electricidad']
  },
  {
    id: 'daniela-cardenas',
    name: 'Mtra. Daniela Cárdenas',
    title: 'Cantante Profesional y Especialista en Pedagogía Vocal Contemporánea',
    specialty: 'Expresión Artística - Canto Moderno y Salud Vocal',
    category: 'artes',
    image: 'https://images.unsplash.com/photo-1580894732454-defbe4124976?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    reviews: 130,
    classesGiven: '510+ clases',
    experience: '10 años en escenarios y entrenamiento vocal online',
    bio: 'Enseño técnica vocal saludable para cantar sin fatiga ni desafinación. A través de una sala virtual con audio HD sin compresión molesta, ajustamos la respiración, el apoyo diafragmático y la interpretación emocional.',
    availabilitySummary: 'Lun, Jue y Sáb (Mañanas y Tardes)',
    availableSlots: [
      { day: 'Lunes', times: ['10:00', '11:30', '16:00', '17:30'] },
      { day: 'Jueves', times: ['16:00', '17:30', '19:00'] },
      { day: 'Sábado', times: ['10:00', '11:30', '15:00', '16:30'] }
    ],
    videoSnippet: {
      type: 'art',
      title: 'Técnica Vocal: Respiración Diafragmática y Resonadores Faciales',
      duration: '1:50 min',
      description: 'Muestra de calentamiento vocal y ejercicios guiados con piano en vivo y corrección de postura en tiempo real.',
      highlights: ['Audio estéreo HD sin pérdida', 'Pistas de acompañamiento en vivo', 'Corrección postural y emisión vocal']
    },
    subjects: ['Canto', 'Técnica Vocal', 'Afinación', 'Respiración']
  },
  {
    id: 'elena-rostova',
    name: 'Mgtr. Elena Rostova',
    title: 'Comunicadora Social, Locutora y Coach de Oratoria y Liderazgo',
    specialty: 'Comunicación Estratégica - Oratoria, Persuasión y Voz',
    category: 'artes',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviews: 145,
    classesGiven: '460+ clases',
    experience: '8 años entrenando oradores para debates y exposiciones',
    bio: 'Te ayudo a transformar el miedo a hablar en público en tu mayor ventaja competitiva. Trabajamos dicción, modulación, lenguaje corporal y estructuración del discurso con teleprompter interactivo.',
    availabilitySummary: 'Mar, Mié y Vie (Tardes)',
    availableSlots: [
      { day: 'Martes', times: ['17:00', '18:30', '20:00'] },
      { day: 'Miércoles', times: ['15:00', '16:30', '18:00'] },
      { day: 'Viernes', times: ['16:30', '18:00', '19:30'] }
    ],
    videoSnippet: {
      type: 'art',
      title: 'Masterclass: El Método Gancho para Iniciar Cualquier Presentación',
      duration: '2:00 min',
      description: 'Observa cómo la Mgtr. Elena entrena a una alumna universitaria para su sustentación de tesis con dicción impecable.',
      highlights: ['Prácticas con Teleprompter en pantalla', 'Eliminación guiada de muletillas', 'Técnicas de modulación tonal']
    },
    subjects: ['Oratoria', 'Dicción', 'Persuasión', 'Manejo del Pánico Escénico']
  },
  {
    id: 'fernando-arismendi',
    name: 'Lic. Fernando Arismendi',
    title: 'Químico Farmacéutico y Divulgador Científico',
    specialty: 'Ciencias Naturales - Estequiometría y Química Orgánica',
    category: 'ciencias',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviews: 82,
    classesGiven: '310+ clases',
    experience: '6 años de docencia escolar y preuniversitaria',
    bio: 'La química no es memorizar la tabla periódica, es entender cómo interactúan los átomos. Enseño balance de reacciones por tanteo y redox con analogías sencillas y modelos 3D que disipan cualquier duda.',
    availabilitySummary: 'Lun, Mié y Vie (Tardes)',
    availableSlots: [
      { day: 'Lunes', times: ['16:00', '17:30', '19:00'] },
      { day: 'Miércoles', times: ['17:00', '18:30'] },
      { day: 'Viernes', times: ['15:00', '16:30', '18:00'] }
    ],
    videoSnippet: {
      type: 'science',
      title: 'Química Molecular: Visualización Tridimensional de Enlaces Covalentes',
      duration: '1:35 min',
      description: 'El Lic. Fernando muestra cómo rotar moléculas en 3D en la pantalla compartida para entender la geometría VSEPR.',
      highlights: ['Modelado 3D de moléculas', 'Trucos mnemotécnicos de nomenclatura', 'Ejercicios tipo examen paso a paso']
    },
    subjects: ['Química', 'Estequiometría', 'Química Orgánica']
  },
  {
    id: 'sebastian-cordero',
    name: 'Prof. Sebastián Cordero',
    title: 'Actor de Teatro y Formador en Expresión Dramática',
    specialty: 'Expresión Artística - Teatro, Improvisación y Presencia Escénica',
    category: 'artes',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    reviews: 110,
    classesGiven: '390+ clases',
    experience: '11 años en compañías teatrales y docencia artística',
    bio: 'El teatro virtual es una herramienta fascinante para descubrir la propia expresividad. Realizamos juegos de improvisación guiada, ejercicios corporales y preparación de escenas teatrales frente a la cámara.',
    availabilitySummary: 'Mar, Jue y Sáb (Tardes)',
    availableSlots: [
      { day: 'Martes', times: ['16:00', '17:30', '19:00'] },
      { day: 'Jueves', times: ['16:00', '17:30', '19:00'] },
      { day: 'Sábado', times: ['15:00', '16:30', '18:00'] }
    ],
    videoSnippet: {
      type: 'art',
      title: 'Taller en Vivo: Ejercicios de Improvisación y Desinhibición Frente a Cámara',
      duration: '2:15 min',
      description: 'Sebastián guiando una sesión divertida de creación de personajes con retroalimentación instantánea de postura y voz.',
      highlights: ['Dinámicas lúdicas de desinhibición', 'Análisis de grabaciones al instante', 'Creación guiada de personajes']
    },
    subjects: ['Teatro', 'Improvisación', 'Expresión Corporal', 'Actuación']
  }
];
