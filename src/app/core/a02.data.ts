import type { A01Document, Cell, DocBlock, DocSection, DocTable, Tone } from './a01.data';

const high = (t: string): Cell => ({ t, tone: 'warn' });
const critical = (t: string): Cell => ({ t, tone: 'bad' });
const medium = (t: string): Cell => ({ t, tone: 'info' });
const low = (t: string): Cell => ({ t, tone: 'ok' });
const strong = (t: string): Cell => ({ t, strong: true });

export const A02: A01Document = {
  code: 'A-02',
  title: 'Declaración de Trabajo de Arquitectura',
  english: 'Statement of Architecture Work',
  version: '2.0',
  date: '20/10/2026',
  pages: 28,
  status: 'Borrador para aprobación',
  author: 'Equipo de Arquitectura Empresarial del proyecto',
  reviewer: 'Architecture Review Board (ARB)',
  summary:
    'Fija los acuerdos de alcance, enfoque, roles, cronograma y criterios de aceptación del trabajo de arquitectura. Convierte la visión de la Fase A en un compromiso ejecutable de seis meses y 24 semanas, con patrocinio único, gobierno del ARB, presupuesto referencial y condiciones previas explícitas para autorizar la Fase B.',
  file: {
    name: 'A-02_Declaracion_de_Trabajo_de_Arquitectura.pdf',
    path: '/docs/A-02_Declaracion_de_Trabajo_de_Arquitectura.pdf',
    size: '553 KB',
  },
  sections: [
    {
      id: 'que-es-declaracion',
      kicker: 'Lámina 1',
      title: '¿Qué es la Declaración de Trabajo?',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Es el contrato entre el patrocinador y el equipo de arquitectura: qué se hará, quién lo hará, en qué plazo, con qué recursos y cómo se aceptará el trabajo.',
        },
        {
          kind: 'callout',
          title: 'Cierra la Fase A',
          text: 'Su aprobación cierra la Fase A y autoriza el inicio de la Fase B.',
        },
        {
          kind: 'table',
          number: 'Tabla 4',
          caption: 'Contenido que TOGAF exige y dónde está',
          columns: ['Contenido típico (TOGAF 9.1)', 'Sección'],
          rows: [
            ['Petición y antecedentes', '2'],
            ['Descripción y alcance del proyecto', '6'],
            ['Resumen de la Visión de la Arquitectura', '3'],
            ['Enfoque de gestión', '8'],
            ['Procedimiento de cambio de alcance', '9'],
            ['Roles, responsabilidades y entregables', '10'],
            ['Criterios y procedimiento de aceptación', '11'],
            ['Plan y cronograma', '12'],
            ['Aprobaciones', '19'],
          ],
        },
        {
          kind: 'p',
          text: 'Además se incluyen: patrocinio, objetivos, limitaciones, condiciones previas, presupuesto y riesgos.',
        },
      ],
    },
    {
      id: 'respuesta-peticion',
      kicker: 'Lámina 2',
      title: 'Respuesta a la Petición de la Dirección',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Cada cambio que pidió la Dirección tiene un objetivo de arquitectura que lo atiende.',
        },
        {
          kind: 'table',
          number: 'Tabla 6',
          caption: 'Cambios solicitados en la Petición de Trabajo (D-06) y respuesta',
          columns: ['N.°', 'Cambio solicitado', 'Respuesta', 'Objetivo'],
          rows: [
            [
              '1',
              'Automatizar el flujo de consulta externa',
              'Foco de la primera iteración',
              'OA-02',
            ],
            ['2', 'Expediente único y accesible', 'Eje de la arquitectura objetivo', 'OA-01'],
            ['3', 'Reducir tiempos de espera', 'Se adopta, con línea base en el Mes 3', 'OA-02'],
            [
              '4',
              'Seguridad y privacidad de la información clínica',
              'Preocupación transversal',
              'OA-03',
            ],
            [
              '5',
              'Seguimiento de indicadores del Plan Operativo',
              'Se adopta, sujeto a la vigencia del plan',
              'OA-07',
            ],
          ],
        },
        {
          kind: 'p',
          text: 'Además, la Visión añadió tres objetivos para que lo anterior sea sostenible: interoperabilidad sectorial (OA-04), función de arquitectura formal (OA-05) y capacitación del personal (OA-06).',
        },
      ],
    },
    {
      id: 'resumen-vision',
      kicker: 'Lámina 3',
      title: 'Resumen de la visión',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El trabajo que se contrata busca llegar a un Expediente Clínico Electrónico Único en 24 meses.',
        },
        {
          kind: 'figure',
          number: 'Figura 1',
          caption: 'Concepto de la solución resumido',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-05-concepto-solucion.png',
            thumb: '/img/a01/thumbs/figura-05-concepto-solucion.jpg',
            alt: 'Diagrama del concepto de la solución: el Expediente Clínico Electrónico Único recibe la cadena de atención de consulta externa y entrega indicadores estratégicos e interoperabilidad con el MINSA, la DIRESA y el SIS, con seguridad, infraestructura resiliente y gobierno como soportes transversales.',
            ratio: '1672 / 941',
          },
          note: 'Es la versión resumida de la Figura 5 del A-01. Recuerda al patrocinador qué está aprobando: no la compra de un sistema, sino el diseño de esta arquitectura.',
        },
        {
          kind: 'table',
          number: '',
          caption: 'Qué muestra la figura',
          columns: ['Elemento', 'Significado'],
          rows: [
            [
              'Paciente → cadena de atención de consulta externa',
              'El recorrido del paciente alimenta el expediente',
            ],
            [
              'Expediente Clínico Electrónico Único (centro)',
              'Una sola historia clínica por paciente',
            ],
            ['Indicadores estratégicos', 'La Dirección obtiene datos sin reportes manuales'],
            ['Interoperabilidad ↔ MINSA, DIRESA y SIS', 'La información sale sola hacia el sector'],
            [
              'Seguridad, infraestructura resiliente y gobierno (líneas punteadas)',
              'Soportes transversales de toda la arquitectura',
            ],
          ],
        },
      ],
    },
    {
      id: 'patrocinio-gobierno',
      kicker: 'Lámina 4',
      title: 'Patrocinio y gobierno',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Un solo patrocinador, un ARB que decide y un comité que da seguimiento.',
        },
        {
          kind: 'figure',
          number: 'Figura 2',
          caption: 'Estructura de gobierno y escalamiento',
          figure: {
            kind: 'image',
            src: '/img/a02/figura-02-gobierno.png',
            thumb: '/img/a02/thumbs/figura-02-gobierno.jpg',
            alt: 'Organigrama de gobierno y escalamiento: el Patrocinador dirige al Architecture Review Board, este al Comité de Seguimiento, el comité al equipo de arquitectura y el equipo a las áreas del hospital y enlaces; las flechas punteadas ascienden desde el equipo al comité, al ARB y al patrocinador.',
            ratio: '2200 / 930',
          },
          note: 'Las flechas continuas bajan: dirección y supervisión. Las flechas punteadas suben: escalamiento de problemas, del equipo al comité, al ARB y al patrocinador.',
        },
        {
          kind: 'table',
          number: '',
          caption: 'Qué muestra la figura',
          columns: ['Nivel', 'Integrantes', 'Decide sobre', 'Frecuencia'],
          rows: [
            [
              strong('Patrocinador'),
              'Director(a) Ejecutivo(a)',
              'Aprobación final, recursos y cambios críticos',
              'Hitos y escalamientos',
            ],
            [
              strong('Architecture Review Board (ARB)'),
              'Dirección Ejecutiva (preside), Dirección Asistencial, Dirección de Administración, Planeamiento y Presupuesto, OSI; el arquitecto líder es secretario sin voto',
              'Aprobación de entregables, excepciones y cambios mayores',
              'Quincenal',
            ],
            [
              strong('Comité de Seguimiento'),
              'Arquitecto líder, arquitectos de dominio, enlace clínico y enlace de la OSI',
              'Avance, riesgos y cambios menores',
              'Semanal y mensual',
            ],
            [
              strong('Equipo de arquitectura'),
              'Arquitectos y enlaces',
              'Elaborar los entregables',
              'Continuo',
            ],
          ],
        },
        {
          kind: 'callout',
          title: 'Corrección respecto a la versión 1.0',
          text: 'Había cuatro «patrocinadores»; ahora hay uno solo, y los demás son responsables de área.',
        },
      ],
    },
    {
      id: 'objetivos-criterios',
      kicker: 'Lámina 5',
      title: 'Objetivos y criterios de éxito',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El trabajo de arquitectura entrega diseños en el Mes 6; la arquitectura implementada se mide a los 24 meses.',
        },
        {
          kind: 'table',
          number: 'Tabla 9',
          caption: 'Objetivos de arquitectura y criterios de éxito',
          columns: ['Objetivo', 'Resultado al Mes 6', 'Indicador a 24 meses'],
          wide: true,
          rows: [
            [
              'OA-01 Expediente único',
              'Arquitectura de datos y aplicaciones del expediente aprobada',
              'KPI-01: 95 % de consultas con registro completo',
            ],
            [
              'OA-02 Menor tiempo de espera',
              'Proceso objetivo de consulta externa aprobado',
              'KPI-02: ≤ 30 minutos',
            ],
            [
              'OA-03 Seguridad de los datos',
              'Arquitectura de seguridad y matriz de acceso por rol',
              'KPI-03: 100 % de accesos auditados',
            ],
            [
              'OA-04 Interoperabilidad',
              'Catálogo de interfaces acordado con el sector',
              'KPI-04: 3 interfaces operativas',
            ],
            [
              'OA-05 Función de arquitectura',
              'Función formalizada y ARB instalado (Mes 2)',
              'KPI-05: formalizada al cierre de la Fase A',
            ],
            [
              'OA-06 Capacitación',
              'Requisitos y arquitectura de la plataforma',
              'KPI-06: ≥ 40 horas por profesional al año',
            ],
            [
              'OA-07 Indicadores',
              'Modelo de indicadores y fuentes de datos',
              'KPI-07: 100 % de indicadores vigentes',
            ],
          ],
        },
      ],
    },
    {
      id: 'alcance',
      kicker: 'Lámina 6',
      title: 'Alcance del trabajo',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Diseñamos y planificamos la consulta externa; no compramos ni implementamos.',
        },
        {
          kind: 'table',
          number: 'Tabla 10',
          caption: 'Alcance en las cuatro dimensiones de TOGAF',
          columns: ['Dimensión', 'Alcance acordado'],
          wide: true,
          rows: [
            [
              strong('Amplitud'),
              'Cadena de consulta externa: admisión, citas, triaje, consulta, órdenes, prescripción, dispensación y registro de la prestación. Hospitalización y emergencia solo como contexto',
            ],
            [
              strong('Profundidad'),
              'Nivel estratégico y de segmento; sin diseño detallado de soluciones',
            ],
            [strong('Horizonte'), 'Desarrollo en 6 meses; arquitectura objetivo a 24 meses'],
            [
              strong('Dominios'),
              'Negocio, datos, aplicaciones y tecnología; seguridad transversal',
            ],
          ],
        },
        { kind: 'h3', text: 'Fuera del alcance' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Logística y finanzas en detalle.',
            'Diseño detallado de hospitalización y emergencia.',
            'Compra o desarrollo de software.',
            'Implementación física y migración de datos.',
            'Operación y mantenimiento de las soluciones.',
          ],
        },
      ],
    },
    {
      id: 'limitaciones',
      kicker: 'Lámina 7',
      title: 'Limitaciones',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El trabajo se hace dentro de límites legales, presupuestales y organizacionales.',
        },
        {
          kind: 'table',
          number: '',
          caption: 'Limitaciones del trabajo de arquitectura',
          columns: ['Tipo', 'Limitación principal', 'Efecto'],
          wide: true,
          rows: [
            [
              'Organizacional',
              'Sin acceso a datos personales de pacientes',
              'Solo información agregada o anonimizada',
            ],
            [
              'Organizacional',
              'Sin inventario de sistemas',
              'Se levanta en el Mes 3 y condiciona las Fases C y D',
            ],
            [
              'Organizacional',
              'La atención no puede detenerse',
              'Toda transición incluye coexistencia y reversión',
            ],
            ['Presupuestaria', 'Presupuesto anual cerrado', 'Implementación por etapas'],
            [
              'Normativa',
              'Ley N.° 29733: datos de salud sensibles',
              'Cifrado, control de acceso y auditoría',
            ],
            [
              'Normativa',
              'Ley N.° 30024 y norma de historia clínica',
              'El expediente debe alinearse al RENHICE',
            ],
            [
              'Externa',
              'La interoperabilidad depende de la DIRESA y del MINSA',
              'Coordinación temprana por oficio',
            ],
          ],
        },
      ],
    },
    {
      id: 'enfoque-gestion',
      kicker: 'Lámina 8',
      title: 'Enfoque de gestión y procedimiento de cambio',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El proyecto se controla con reuniones fijas, informes y un procedimiento claro para cualquier cambio.',
        },
        {
          kind: 'table',
          number: 'Tabla 15',
          caption: 'Seguimiento del proyecto',
          columns: ['Mecanismo', 'Frecuencia', 'Destinatario'],
          rows: [
            ['Reunión de equipo', 'Semanal', 'Equipo y enlaces'],
            ['Informe de avance', 'Mensual', 'Comité y ARB'],
            ['Sesión del ARB', 'Quincenal', 'ARB'],
            ['Informe de cierre de fase', 'Al cierre de cada fase', 'Patrocinador'],
          ],
        },
        { kind: 'h3', text: 'Escalamiento' },
        {
          kind: 'p',
          text: 'Si el equipo no resuelve un problema en 5 días hábiles, pasa al Comité; luego al ARB; y si afecta presupuesto, plazo total u objetivos, al patrocinador.',
        },
        {
          kind: 'table',
          number: 'Tabla 16',
          caption: 'Niveles de cambio y quién decide',
          columns: ['Nivel', 'Criterio', 'Decide'],
          rows: [
            [
              low('Menor'),
              'No afecta objetivos, plazo de fase ni presupuesto',
              'Comité de Seguimiento',
            ],
            [medium('Mayor'), 'Afecta el alcance de un dominio o el plazo de una fase', 'ARB'],
            [
              critical('Crítico'),
              'Afecta objetivos, plazo total o presupuesto',
              'Patrocinador, previa recomendación del ARB',
            ],
          ],
        },
        { kind: 'h3', text: 'Pasos del procedimiento' },
        {
          kind: 'p',
          text: 'Solicitud → registro (SC-nn) → evaluación de impacto en 5 días → decisión → comunicación → actualización de los documentos.',
        },
      ],
    },
    {
      id: 'roles-entregables',
      kicker: 'Lámina 9',
      title: 'Roles y entregables',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: '21 entregables comprometidos, cada uno con su responsable y su semana de entrega.',
        },
        {
          kind: 'table',
          number: 'Tabla 18',
          caption: 'Entregables por fase',
          columns: ['Fase', 'Entregables', 'Semana'],
          wide: true,
          rows: [
            ['A', 'A-01 a A-05', '5 a 7'],
            ['B', 'B-01 Arquitectura de negocio · B-02 Requisitos de negocio', '12'],
            [
              'C',
              'C-01 Datos · C-02 Aplicaciones · C-03 Requisitos de sistemas de información',
              '15',
            ],
            ['D', 'TEC-01 Tecnología · TEC-02 Requisitos tecnológicos', '16'],
            ['E', 'E-01 Hoja de ruta inicial · E-02 Estrategia de migración', '18'],
            ['F', 'F-01 Plan de implementación y migración', '20'],
            [
              'G y H',
              'G-01 Gobierno · G-02 Contratos · G-03 Conformidad · H-01 Gestión del cambio',
              '23',
            ],
            [
              'Transversal',
              'GR-01 Registro de requisitos · GV-01 Registro de decisiones',
              'Continuo',
            ],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 19',
          caption: 'Matriz RACI de los entregables principales',
          columns: [
            'Entregable',
            'Patrocinador',
            'ARB',
            'Arquitecto líder',
            'Arquitectos de dominio',
            'Enlace clínico',
            'OSI',
          ],
          wide: true,
          rows: [
            ['A-01 Visión', strong('A'), 'C', strong('R'), 'C', 'C', 'C'],
            ['A-02 Declaración de Trabajo', strong('A'), 'C', strong('R'), 'C/I', 'I', 'C'],
            ['Fase B: negocio', 'I', strong('A'), 'C', strong('R'), 'C', 'I'],
            ['Fase C: datos y aplicaciones', 'I', strong('A'), 'C', strong('R'), 'C', 'C'],
            ['Fase D: tecnología', 'I', strong('A'), 'C', strong('R'), 'I', 'C'],
            ['Hoja de ruta y migración', strong('A'), 'C', strong('R'), 'C', 'C', 'C'],
          ],
          note: 'R = responsable · A = aprueba · C = consultado · I = informado.',
        },
      ],
    },
    {
      id: 'criterios-aceptacion',
      kicker: 'Lámina 10',
      title: 'Criterios de aceptación',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Un entregable solo se aprueba si cumple seis criterios generales y los específicos de su fase.',
        },
        { kind: 'h3', text: 'Criterios generales' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Forma: plantilla, control de versiones y distribución.',
            'Trazabilidad con metas, principios y objetivos.',
            'Consistencia con los entregables aprobados.',
            'Validación de los consultados.',
            'Sin datos personales de pacientes.',
            'Resumen ejecutivo comprensible para la Dirección.',
          ],
        },
        { kind: 'h3', text: 'Procedimiento' },
        {
          kind: 'p',
          text: 'Entrega con una semana de anticipación → observaciones en 5 días (bloqueantes o no bloqueantes) → corrección en 5 días → decisión del ARB (aprobado, aprobado con observaciones o rechazado) → acta. Dos rechazos seguidos se escalan al patrocinador.',
        },
      ],
    },
    {
      id: 'plan-cronograma',
      kicker: 'Lámina 11',
      title: 'Plan de trabajo y cronograma',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: '24 semanas, de la Fase A a la Fase G, con 8 hitos de control.',
        },
        {
          kind: 'figure',
          number: 'D-24',
          caption: 'Cronograma de 24 semanas del desarrollo de la arquitectura (Gantt)',
          figure: {
            kind: 'image',
            src: '/img/a02/d-24-cronograma.png',
            thumb: '/img/a02/thumbs/d-24-cronograma.jpg',
            alt: 'Diagrama de Gantt de 24 semanas con las fases A a G, el cierre del ciclo y la gestión de requisitos continua, distribuidos en seis meses.',
            ratio: '1920 / 1080',
          },
          note: 'Las Fases C y D se superponen porque el inventario de aplicaciones y el de infraestructura se levantan juntos. La implementación física empieza después de la semana 24.',
        },
        { kind: 'h3', text: 'Qué muestra el diagrama (Tabla 21)' },
        {
          kind: 'table',
          number: 'Tabla 21',
          caption: 'Cronograma del desarrollo de la arquitectura por mes',
          columns: ['Fase', 'Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6'],
          wide: true,
          rows: [
            ['A. Visión', '■■■■', '■■■■', '', '', '', ''],
            ['B. Negocio', '', '', '■■■■', '', '', ''],
            ['C. Datos y aplicaciones', '', '', '■■', '■■■', '', ''],
            ['D. Tecnología', '', '', '', '■■■■', '', ''],
            ['E. Oportunidades y soluciones', '', '', '', '', '■■', ''],
            ['F. Planificación de la migración', '', '', '', '', '■■', ''],
            ['G. Gobierno de la implementación', '', '', '', '', '', '■■■'],
            ['Cierre', '', '', '', '', '', '■'],
            ['Gestión de requisitos', '■■■■', '■■■■', '■■■■', '■■■■', '■■■■', '■■■■'],
          ],
          note: 'Cada cuadro representa una semana aproximada. Las Fases C y D se superponen parcialmente porque el inventario tecnológico se levanta junto con el de aplicaciones.',
        },
        {
          kind: 'table',
          number: 'Tabla 23',
          caption: 'Hitos de control',
          columns: ['Hito', 'Descripción', 'Semana'],
          rows: [
            [
              strong('H1'),
              strong('Declaración de Trabajo aprobada (cierre de la Fase A)'),
              strong('8'),
            ],
            ['H2', 'Arquitectura de negocio aprobada', '12'],
            ['H3', 'Arquitecturas de datos y aplicaciones aprobadas', '15'],
            ['H4', 'Arquitectura tecnológica aprobada', '16'],
            ['H5', 'Hoja de ruta inicial aprobada', '18'],
            ['H6', 'Plan de implementación aprobado', '20'],
            ['H7', 'Modelo de gobierno aprobado', '23'],
            ['H8', 'Cierre del ciclo', '24'],
          ],
        },
      ],
    },
    {
      id: 'condiciones-previas',
      kicker: 'Lámina 12',
      title: 'Condiciones previas',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'La Declaración solo surte efecto si antes se resuelven los factores críticos de preparación.',
        },
        {
          kind: 'table',
          number: 'Tabla 24',
          caption: 'Condiciones previas a la aprobación',
          columns: ['N.°', 'Condición', 'Evidencia', 'Semana'],
          wide: true,
          rows: [
            ['1', 'Autorización formal de la Dirección', 'Memorando o resolución', '2'],
            ['2', 'Designación del patrocinador y responsables', 'Resolución directoral', '2'],
            ['3', 'Instalación del ARB', 'Acta de instalación', '2'],
            ['4', 'Formalización de la función de arquitectura', 'Resolución directoral', '8'],
            ['5', 'Designación del enlace clínico y de la OSI', 'Memorando', '2'],
            ['6', 'Planificación estratégica y POI vigentes', 'Documentos aprobados', '4'],
            [
              '7',
              'Presupuesto validado y certificación presupuestal',
              'Informe y certificación',
              '7',
            ],
            ['8', 'Aprobación de A-01, A-03 y A-04 por el ARB', 'Acta del ARB', '7'],
          ],
        },
      ],
    },
    {
      id: 'presupuesto',
      kicker: 'Lámina 13',
      title: 'Presupuesto',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Se compromete solo el presupuesto para desarrollar la arquitectura; el de implementación se calcula en las Fases E y F.',
        },
        {
          kind: 'table',
          number: 'Tabla 25',
          caption: 'Presupuesto referencial de corto plazo',
          columns: ['Concepto', 'Importe (S/)'],
          rows: [
            ['Arquitecto líder (6 meses)', '42 000'],
            ['Arquitecto de negocio (5 meses)', '27 500'],
            ['Arquitecto de datos (4 meses)', '22 000'],
            ['Arquitecto de aplicaciones y tecnología (4 meses)', '22 000'],
            ['Herramienta de modelado (Archi, gratuita)', '0'],
            ['Capacitación en TOGAF y ArchiMate', '8000'],
            ['Repositorio, levantamiento y sesiones de gobierno', '6500'],
            [strong('Subtotal'), strong('128 000')],
            ['Contingencia (10 %)', '12 800'],
            [strong('Total referencial'), strong('140 800')],
          ],
        },
        { kind: 'h3', text: 'Alternativa de ahorro' },
        {
          kind: 'p',
          text: 'Asignar personal propio o un convenio con la UNAS para incorporar practicantes de la FIIS.',
        },
        {
          kind: 'p',
          text: 'Presupuesto de implementación (Tabla 26): software, infraestructura, conectividad, integración, migración, capacitación y soporte se cuantifican en las Fases D a G.',
        },
      ],
    },
    {
      id: 'riesgos-cierre',
      kicker: 'Lámina 14',
      title: 'Riesgos del proyecto y cierre',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Los riesgos del proyecto se mitigan sobre todo con decisiones tempranas de la Dirección.',
        },
        {
          kind: 'table',
          number: 'Tabla 28',
          caption: 'Riesgos principales del proyecto',
          columns: ['Riesgo', 'Inicial', 'Mitigación', 'Residual'],
          wide: true,
          rows: [
            [
              'R-D-01 La Declaración no se firma',
              high('Alto'),
              'Llevar las condiciones previas a la sesión de instalación del ARB',
              low('Bajo'),
            ],
            [
              'R-D-02 El presupuesto no se valida a tiempo',
              high('Alto'),
              'Presentarlo en la semana 4; alternativa de convenio',
              medium('Medio'),
            ],
            [
              'R-D-03 El inventario no se completa',
              high('Alto'),
              'Enlace de la OSI con dedicación protegida',
              low('Bajo'),
            ],
            [
              'R-D-06 El alcance crece sin control',
              medium('Medio'),
              'Procedimiento de cambio estricto',
              low('Bajo'),
            ],
          ],
        },
        { kind: 'h3', text: 'Conclusiones' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'La Declaración convierte la visión en un compromiso ejecutable.',
            'El alcance se limita a la consulta externa porque el hospital aún no está listo para todo a la vez.',
            'Gobierno, procedimiento de cambio y RACI permiten controlar el proyecto.',
            'La inversión referencial es de S/ 140 800 en seis meses.',
            'Su firma cierra la Fase A y autoriza la Fase B.',
          ],
        },
        { kind: 'cta' },
      ],
    },
  ],
};
