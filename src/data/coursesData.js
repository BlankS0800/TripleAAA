export const coursesCategories = [
  {
    id: 'ciencias',
    name: 'Ciencias Exactas y Naturales',
    subtitle: 'Rigor académico, comprensión conceptual profunda y resolución metódica de problemas.',
    badge: 'Bloque 1: Ciencias',
    accentColor: 'indigo',
    courses: [
      {
        id: 'matematicas',
        title: 'Matemáticas Avanzadas y de Refuerzo',
        area: 'Ciencias Exactas',
        badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
        iconName: 'Calculator',
        duration: '60 - 90 min / sesión',
        modality: '100% Virtual vía Zoom / Meet',
        level: 'Primaria, Secundaria, Pre y Universidad',
        description: 'Comprensión integral de conceptos matemáticos, deducción de fórmulas y resolución guiada de problemas paso a paso.',
        topics: [
          'Álgebra elemental, polinomios y factorización',
          'Geometría euclidiana y trigonometría analítica',
          'Cálculo diferencial e integral (límites, derivadas)',
          'Razonamiento lógico-matemático y preparación preuniversitaria'
        ],
        tools: ['Pizarra digital Geogebra en vivo', 'Guías de ejercicios resueltos en PDF', 'Grabación de la clase'],
        recommendedTeacher: 'Prof. Carlos Mendoza',
        rating: 4.9,
        reviewsCount: 128
      },
      {
        id: 'fisica',
        title: 'Física Teórica y Aplicada',
        area: 'Ciencias Exactas',
        badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
        iconName: 'Atom',
        duration: '60 - 90 min / sesión',
        modality: '100% Virtual vía Zoom / Meet',
        level: 'Secundaria, Bachillerato Internacional y Universidad',
        description: 'Comprende las leyes del universo a través de simuladores físicos virtuales interactivos y resolución analítica rigurosa.',
        topics: [
          'Cinemática, dinámica y leyes de Newton',
          'Trabajo, energía y conservación del movimiento',
          'Termodinámica y física de fluidos',
          'Electromagnetismo, circuitos y óptica ondulatoria'
        ],
        tools: ['Laboratorios virtuales PhET Interactive', 'Pizarra táctil para diagramas de cuerpo libre', 'Material de apoyo descargable'],
        recommendedTeacher: 'Ing. Valeria Domínguez',
        rating: 5.0,
        reviewsCount: 94
      },
      {
        id: 'quimica',
        title: 'Química General y Orgánica',
        area: 'Ciencias Naturales',
        badgeColor: 'bg-cyan-100 text-cyan-700 border-cyan-200',
        iconName: 'FlaskConical',
        duration: '60 min / sesión',
        modality: '100% Virtual vía Zoom / Meet',
        level: 'Secundaria y Preuniversitario',
        description: 'Domina las reacciones químicas, nomenclatura y cálculos moleculares con visualizaciones 3D de modelos atómicos.',
        topics: [
          'Estructura atómica y tabla periódica moderna',
          'Enlaces químicos y geometría molecular',
          'Estequiometría, balanceo de ecuaciones y reactivo limitante',
          'Química orgánica: hidrocarburos y grupos funcionales'
        ],
        tools: ['Modelador molecular 3D en pantalla', 'Formularios interactivos', 'Ejercicios de exámenes de admisión'],
        recommendedTeacher: 'Lic. Fernando Arismendi',
        rating: 4.8,
        reviewsCount: 82
      },
      {
        id: 'biologia',
        title: 'Biología Celular y Anatomía',
        area: 'Ciencias Naturales',
        badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
        iconName: 'Dna',
        duration: '60 min / sesión',
        modality: '100% Virtual vía Zoom / Meet',
        level: 'Secundaria y Nivel Superior',
        description: 'Explora la maquinaria de la vida con esquemas interactivos, microbiología celular y fisiología humana aplicada.',
        topics: [
          'Citología: estructura celular y metabolismo bioenergético',
          'Genética mendeliana, ADN y herencia molecular',
          'Anatomía humana, sistemas circulatorio, nervioso y muscular',
          'Ecología, biodiversidad y evolución biológica'
        ],
        tools: ['Atlas interactivo de anatomía 3D', 'Mapas conceptuales dinámicos', 'Tests evaluativos inmediatos'],
        recommendedTeacher: 'Dra. Mariana Salazar',
        rating: 4.9,
        reviewsCount: 76
      }
    ]
  },
  {
    id: 'artes',
    name: 'Expresión Artística y Comunicación',
    subtitle: 'Desarrollo de la confianza escénica, técnica vocal, dicción y creatividad expresiva sin fronteras.',
    badge: 'Bloque 2: Artes y Comunicación',
    accentColor: 'rose',
    courses: [
      {
        id: 'teatro',
        title: 'Taller de Teatro y Expresión Corporal',
        area: 'Expresión Artística',
        badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
        iconName: 'Masks',
        duration: '60 - 90 min / sesión',
        modality: '100% Virtual vía Zoom / Meet',
        level: 'Niños, Jóvenes y Adultos',
        description: 'Supera la timidez, desata tu creatividad y domina la presencia escénica y la actuación ante cámara.',
        topics: [
          'Desinhibición y manejo de la ansiedad escénica',
          'Expresión corporal y lenguaje no verbal',
          'Juegos de improvisación y creación de personajes',
          'Interpretación de monólogos y actuación frente a cámara'
        ],
        tools: ['Sala con cámara optimizada para movimiento', 'Grabación de escenas y retroalimentación personalizada', 'Guiones teatrales adaptados'],
        recommendedTeacher: 'Prof. Sebastián Cordero',
        rating: 5.0,
        reviewsCount: 110
      },
      {
        id: 'oratoria',
        title: 'Oratoria de Alto Impacto y Persuasión',
        area: 'Comunicación Estratégica',
        badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
        iconName: 'Mic',
        duration: '60 min / sesión',
        modality: '100% Virtual vía Zoom / Meet',
        level: 'Estudiantes escolares, universitarios y profesionales',
        description: 'Aprende a estructurar ideas convincentes, proyectar tu voz con seguridad y cautivar a cualquier audiencia.',
        topics: [
          'Técnicas de respiración diafragmática y modulación',
          'Dicción, articulación y eliminación de muletillas',
          'Estructura de discursos: inicio gancho, cuerpo y cierre memorable',
          'Oratoria para exposiciones escolares, tesis y debates'
        ],
        tools: ['Teleprompter virtual integrado', 'Ejercicios de articulación fonética en video', 'Rúbricas de evaluación de progreso'],
        recommendedTeacher: 'Mgtr. Elena Rostova',
        rating: 4.9,
        reviewsCount: 145
      },
      {
        id: 'canto',
        title: 'Canto y Técnica Vocal Personalizada',
        area: 'Expresión Artística',
        badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
        iconName: 'Music',
        duration: '60 min / sesión',
        modality: '100% Virtual vía Zoom / Meet (Audio HD)',
        level: 'Principiante a Avanzado',
        description: 'Descubre y expande tu rango vocal con salud, afinación perfecta, respiración adecuada y repertorio musical a tu gusto.',
        topics: [
          'Respiración diafragmática y apoyo costodiafragmático',
          'Afinación, colocación del sonido y resonadores vocales',
          'Vocalización personalizada para expandir registro vocal',
          'Interpretación de canciones en pop, balada, lírico y teatro musical'
        ],
        tools: ['Audio HD estéreo de baja latencia', 'Pistas de audio y afinador digital', 'Grabación de ensayos vocales para análisis'],
        recommendedTeacher: 'Mtra. Daniela Cárdenas',
        rating: 5.0,
        reviewsCount: 130
      },
      {
        id: 'dibujo',
        title: 'Dibujo, Pintura y Creatividad Visual',
        area: 'Artes Visuales',
        badgeColor: 'bg-teal-100 text-teal-700 border-teal-200',
        iconName: 'Palette',
        duration: '60 min / sesión',
        modality: '100% Virtual vía Zoom / Meet',
        level: 'Todas las edades',
        description: 'Aprende fundamentos del dibujo, proporciones, teoría del color e ilustración artística guiada en tiempo real.',
        topics: [
          'Línea, boceto inicial y construcción geométrica',
          'Luces, sombras y volumen tridimensional',
          'Teoría del color aplicada (acuarela, acrílico o lápiz)',
          'Composición visual y desarrollo del estilo personal'
        ],
        tools: ['Cámara cenital del docente para demostración de trazos', 'Paleta digital interactiva', 'Galería de retroalimentación de obras'],
        recommendedTeacher: 'Prof. Lucas Benavides',
        rating: 4.8,
        reviewsCount: 65
      }
    ]
  }
];
