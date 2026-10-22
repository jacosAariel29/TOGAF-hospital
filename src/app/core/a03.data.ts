import type { A01Document, Cell } from './a01.data';

const high = (t: string): Cell => ({ t, tone: 'warn' });
const medium = (t: string): Cell => ({ t, tone: 'info' });
const low = (t: string): Cell => ({ t, tone: 'ok' });
const strong = (t: string): Cell => ({ t, strong: true });

export const A03: A01Document = {
  code: 'A-03',
  title: 'Plan de Comunicaciones',
  english: 'Communications Plan',
  version: '2.0',
  date: '20/10/2026',
  pages: 20,
  status: 'Borrador para aprobación',
  author: 'Equipo de Arquitectura Empresarial del proyecto',
  reviewer: 'Architecture Review Board (ARB)',
  summary:
    'El Plan de Comunicaciones define cómo se informa y se involucra a los 18 interesados del proyecto durante todo el ciclo de desarrollo de la arquitectura. Organiza a los interesados en siete grupos, fija los mensajes clave y los límites de lo que no debe prometerse, asigna canales, responsables y un calendario sincronizado con los hitos, y establece un procedimiento para convertir la retroalimentación en requisitos y decisiones registradas.',
  file: {
    name: 'A-03_Plan_de_Comunicaciones.pdf',
    path: '/docs/A-03_Plan_de_Comunicaciones.pdf',
    size: '442 KB',
  },
  sections: [
    {
      id: 'por-que-un-plan-de-comunicaciones',
      kicker: 'Lámina 1',
      title: '¿Por qué un plan de comunicaciones?',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'La arquitectura solo tiene valor si los interesados la entienden, la aceptan y la usan.',
        },
        { kind: 'h3', text: 'Tres razones por las que en este hospital la comunicación es crítica' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'El personal clínico tiene poco tiempo, y su validación es indispensable.',
            'El cambio genera temores (más trabajo, control, reemplazo de personal) que pueden convertirse en resistencia.',
            'Parte de la arquitectura depende de entes externos (DIRESA, MINSA y SIS), que se comunican por vías formales y con plazos propios.',
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 4',
          caption: 'Contenido que TOGAF exige y dónde está',
          columns: ['Contenido típico (TOGAF 9.1)', 'Sección'],
          rows: [
            ['Interesados agrupados por necesidad de comunicación', '3'],
            ['Necesidades, mensajes clave, riesgos y factores críticos de éxito', '3, 4, 11 y 13'],
            ['Mecanismos y canales', '5 y 6'],
            ['Calendario: qué, a quién, cuándo y dónde', '7 y 8'],
          ],
        },
      ],
    },
    {
      id: 'objetivos-y-principios',
      kicker: 'Lámina 2',
      title: 'Objetivos y principios',
      blocks: [
        { kind: 'h3', text: 'Objetivos' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Lograr la aprobación oportuna de los entregables en cada hito.',
            'Obtener la validación del personal clínico, sobre todo del escenario EB-01.',
            'Reducir la incertidumbre y la resistencia.',
            'Coordinar formalmente con los entes sectoriales.',
            'Convertir las preocupaciones en requisitos o decisiones registradas.',
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 6',
          caption: 'Principios de comunicación',
          columns: ['Principio', 'En la práctica'],
          rows: [
            ['Oportunidad', 'Convocatorias con 5 días hábiles de anticipación'],
            [
              'Claridad',
              'Lenguaje técnico con la OSI, de gestión con la Dirección y sencillo con el personal y los pacientes',
            ],
            ['Honestidad', 'No prometer lo que la arquitectura no puede garantizar'],
            ['Doble vía', 'Toda comunicación ofrece una forma de responder'],
            ['Confidencialidad', 'Nunca se comunican datos de pacientes'],
            ['Respeto por la atención', 'Las sesiones clínicas no interrumpen la atención'],
          ],
        },
      ],
    },
    {
      id: 'grupos-de-interesados',
      kicker: 'Lámina 3',
      title: 'Grupos de interesados',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Los 18 interesados se organizan en 7 grupos, cada uno con un nivel de involucramiento distinto.',
        },
        {
          kind: 'figure',
          number: 'D-22',
          caption: 'Matriz poder/interés de los interesados (base de los grupos de comunicación)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-01-matriz-poder-interes.png',
            thumb: '/img/a01/thumbs/figura-01-matriz-poder-interes.jpg',
            alt: 'Matriz de poder e interés de los interesados del hospital, con los cuadrantes de actores clave, mantener satisfechos, mantener informados y esfuerzo mínimo.',
            ratio: '1672 / 941',
          },
          note: 'Es la misma imagen que la Figura 1 del A-01.',
        },
        {
          kind: 'table',
          number: 'Tabla 7',
          caption: 'Grupos de comunicación',
          columns: ['Grupo', 'Interesados', 'Involucramiento'],
          wide: true,
          rows: [
            [
              strong('G1 Gobierno y decisión'),
              'Dirección Ejecutiva, Dirección Asistencial, Dirección de Administración, Planeamiento y Presupuesto',
              'Aprobar y decidir',
            ],
            [
              strong('G2 Usuarios clínicos'),
              'Médicos, enfermería, laboratorio, imágenes y farmacia',
              'Consultar y validar',
            ],
            [
              strong('G3 Usuarios administrativos y de soporte'),
              'Personal administrativo, Recursos Humanos',
              'Informar, consultar y capacitar',
            ],
            [
              strong('G4 Operación tecnológica'),
              'Oficina de Sistemas y Información (OSI)',
              'Colaborar y revisar',
            ],
            [
              strong('G5 Entes sectoriales'),
              'DIRESA, Gobierno Regional, MINSA, SIS, SUSALUD',
              'Coordinar e informar',
            ],
            [
              strong('G6 Pacientes y comunidad'),
              'Pacientes y familiares',
              'Informar y escuchar',
            ],
            [
              strong('G7 Proveedores'),
              'Proveedor actual y otros proveedores',
              'Informar y solicitar información',
            ],
          ],
        },
        {
          kind: 'callout',
          title: 'Lectura',
          text: 'La matriz poder/interés define cuánto involucrar a cada interesado; los grupos definen cómo comunicarse con ellos.',
        },
      ],
    },
    {
      id: 'necesidades-por-grupo',
      kicker: 'Lámina 4',
      title: 'Qué necesita saber cada grupo',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 8',
          caption: 'Necesidades de información, preocupaciones y formato preferido por grupo',
          columns: ['Grupo', 'Qué necesita saber', 'Preocupación principal', 'Formato preferido'],
          wide: true,
          rows: [
            [
              'G1',
              'Avance, decisiones, riesgos y costos',
              'Presupuesto y cumplimiento legal',
              'Resumen de una página y sesión presencial',
            ],
            [
              'G2',
              'Cómo cambia su trabajo diario',
              'Carga de registro y confidencialidad',
              'Sesiones cortas y demostraciones',
            ],
            [
              'G3',
              'Qué trámites se simplifican y qué capacitación recibirán',
              'Estabilidad laboral',
              'Charlas breves y comunicados',
            ],
            [
              'G4',
              'Arquitectura técnica e inventarios',
              'Carga de trabajo y dependencia de proveedores',
              'Documentos técnicos y talleres',
            ],
            [
              'G5',
              'Interoperabilidad y normativa',
              'Cumplimiento de estándares',
              'Oficios y reuniones técnicas',
            ],
            [
              'G6',
              'Qué mejora en su atención',
              'Espera, trato y privacidad',
              'Afiches y encuestas breves',
            ],
            [
              'G7',
              'Qué información se les pedirá',
              'Continuidad del contrato',
              'Comunicaciones formales',
            ],
          ],
        },
      ],
    },
    {
      id: 'mensajes-clave',
      kicker: 'Lámina 5',
      title: 'Mensajes clave',
      blocks: [
        { kind: 'h3', text: 'Mensaje central' },
        {
          kind: 'quote',
          text: 'El Hospital de Tingo María está construyendo, paso a paso y sin detener la atención, un expediente clínico electrónico único para que cada paciente sea atendido con su información completa, en menos tiempo y con sus datos protegidos.',
        },
        {
          kind: 'table',
          number: 'Tabla 9',
          caption: 'Mensajes por grupo y lo que no se debe prometer',
          columns: ['Grupo', 'Mensaje clave', 'Lo que no se debe prometer'],
          wide: true,
          rows: [
            [
              'G1',
              'Invertir por etapas, cumplir la normativa y medir con siete indicadores',
              'Montos de implementación antes de las Fases E y F',
            ],
            [
              'G2',
              'Verán toda la historia en una pantalla y registrarán una sola vez; ustedes validan cada proceso',
              'Fechas de implantación o un producto específico',
            ],
            [
              'G3',
              'El paciente se registra una sola vez; habrá capacitación antes de cualquier cambio',
              'Que sus funciones no cambiarán',
            ],
            [
              'G4',
              'Menos soluciones aisladas y menos dependencia de un proveedor',
              'Más personal antes de la Fase F',
            ],
            [
              'G5',
              'Alineamiento con el RENHICE y estándares abiertos',
              'Fechas que dependen de decisiones sectoriales',
            ],
            [
              'G6',
              'Atención más rápida e información protegida',
              'Reducciones de tiempo antes de medir la línea base',
            ],
          ],
        },
        {
          kind: 'callout',
          title: 'Lectura',
          text: 'La columna "lo que no se debe prometer" protege la credibilidad del proyecto. Es lo que diferencia este plan de uno genérico.',
        },
      ],
    },
    {
      id: 'canales-y-lugares',
      kicker: 'Lámina 6',
      title: 'Canales y lugares',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 10',
          caption: 'Canales de comunicación, uso y lugar',
          columns: ['Canal', 'Uso', 'Lugar'],
          wide: true,
          rows: [
            ['Sesión del ARB', 'Aprobaciones y decisiones', 'Sala de la Dirección Ejecutiva'],
            [
              'Sesiones de trabajo',
              'Levantamiento y validación',
              'En el propio servicio (consultorio, laboratorio, farmacia)',
            ],
            ['Taller de validación', 'Validar el escenario EB-01', 'Auditorio'],
            [
              'Boletín "Avanzamos"',
              'Avance en lenguaje sencillo',
              'Correo, intranet y periódico mural',
            ],
            ['Repositorio de Arquitectura', 'Fuente oficial de entregables', 'Servidor institucional'],
            ['Oficio institucional', 'Comunicación con entes externos', 'Mesa de partes'],
            ['Afiches y encuestas', 'Información y opinión de pacientes', 'Salas de espera y admisión'],
          ],
        },
        {
          kind: 'callout',
          title: 'Corrección importante',
          text: 'Los pacientes no se informan por la intranet (no tienen acceso); se les informa en las salas de espera.',
        },
      ],
    },
    {
      id: 'matriz-de-comunicaciones',
      kicker: 'Lámina 7',
      title: 'Matriz de comunicaciones',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: '14 comunicaciones definidas, cada una con contenido, audiencia, frecuencia y responsable.',
        },
        {
          kind: 'table',
          number: 'Tabla 11',
          caption: 'Matriz de comunicaciones del proyecto',
          columns: ['Código', 'Comunicación', 'Audiencia', 'Frecuencia', 'Responsable'],
          wide: true,
          rows: [
            [
              'COM-01',
              'Lanzamiento del proyecto',
              'Todos los grupos internos',
              'Semana 2',
              'Patrocinador y arquitecto líder',
            ],
            ['COM-02', 'Sesión del ARB', 'G1', 'Quincenal', 'Secretario del ARB'],
            ['COM-04', 'Informe mensual de avance', 'G1', 'Mensual', 'Arquitecto líder'],
            [
              'COM-05',
              'Sesiones de trabajo con áreas',
              'G2, G3, G4',
              'Semanal durante el levantamiento',
              'Arquitectos de dominio',
            ],
            ['COM-06', 'Taller de validación', 'G1, G2', 'Semanas 6 y 11', 'Arquitecto de negocio'],
            [
              'COM-08',
              'Oficio y reunión con entes sectoriales',
              'G5',
              'Semanas 4, 13 y 20',
              'Dirección Ejecutiva',
            ],
            [
              'COM-09',
              'Información a pacientes',
              'G6',
              'En cada hito visible',
              'Equipo de arquitectura',
            ],
            ['COM-10', 'Encuesta a pacientes', 'G6', 'Semanas 10 y 22', 'Arquitecto de negocio'],
            [
              'COM-14',
              'Informe de cierre del ciclo',
              'Todos',
              'Semana 24',
              'Patrocinador y arquitecto líder',
            ],
          ],
        },
      ],
    },
    {
      id: 'distribucion-de-entregables',
      kicker: 'Lámina 8',
      title: 'Quién recibe cada entregable',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 12',
          caption: 'Matriz de distribución de entregables',
          columns: ['Entregable', 'G1', 'G2', 'G3', 'G4', 'G5'],
          wide: true,
          rows: [
            ['A-01 Visión', 'A', 'V', 'I', 'R', 'I'],
            ['A-02 Declaración de Trabajo', 'A', 'I', '', 'R', ''],
            ['B-01/B-02 Negocio', 'A', 'V', 'V', 'I', ''],
            ['C-01 Datos', 'A', 'V', '', 'R', 'I'],
            ['C-02 Aplicaciones', 'A', 'V', 'V', 'R', 'I'],
            ['TEC-01/TEC-02 Tecnología', 'A', '', '', 'V', ''],
            ['E-01/E-02 y F-01 Hoja de ruta', 'A', 'I', 'I', 'R', 'I'],
          ],
          note: 'A = aprueba · R = revisa · V = valida su ámbito · I = se informa.',
        },
        {
          kind: 'callout',
          title: 'Lectura',
          text: 'El G1 aprueba todo; el G2 valida lo clínico; el G4 valida lo técnico; los entes externos (G5) solo reciben resúmenes por oficio.',
        },
      ],
    },
    {
      id: 'calendario-de-comunicaciones',
      kicker: 'Lámina 9',
      title: 'Calendario de comunicaciones',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El calendario está sincronizado con los hitos de la Declaración de Trabajo.',
        },
        {
          kind: 'table',
          number: 'Tabla 13',
          caption: 'Calendario de comunicaciones por semana',
          columns: ['Semana', 'Comunicación', 'Grupos'],
          wide: true,
          rows: [
            [
              '2',
              'Instalación del ARB y lanzamiento del proyecto; afiche para pacientes',
              'G1 a G4, G6',
            ],
            ['4', 'Oficio de presentación a la DIRESA y al Gobierno Regional', 'G5'],
            ['6', 'Taller de validación del escenario EB-01', 'G1, G2'],
            [
              strong('8'),
              strong('Firma de la Declaración y cierre de la Fase A'),
              'G1 a G4',
            ],
            ['10', 'Primera encuesta a pacientes', 'G6'],
            ['12', 'ARB: arquitectura de negocio (H2)', 'G1'],
            ['13', 'Reunión técnica de interoperabilidad con DIRESA y MINSA', 'G4, G5'],
            ['15 y 16', 'ARB: datos, aplicaciones y tecnología (H3 y H4)', 'G1'],
            ['20', 'ARB: plan de migración (H6) y oficio al sector', 'G1, G5'],
            ['22', 'Segunda encuesta a pacientes', 'G6'],
            ['24', 'Informe de cierre del ciclo', 'Todos'],
          ],
          note: 'Además, durante las 24 semanas: Comité de Seguimiento semanal, ARB quincenal, informe mensual y boletín mensual.',
        },
      ],
    },
    {
      id: 'retroalimentacion',
      kicker: 'Lámina 10',
      title: 'Retroalimentación',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Ninguna opinión se pierde; toda retroalimentación termina en una respuesta y en un registro.',
        },
        {
          kind: 'figure',
          number: 'Figura 1',
          caption: 'Flujo de tratamiento de la retroalimentación',
          figure: {
            kind: 'image',
            src: '/img/a03/figura-01-retroalimentacion.png',
            thumb: '/img/a03/thumbs/figura-01-retroalimentacion.jpg',
            alt: 'Flujo de tratamiento de la retroalimentación: registro y clasificación, ramas de consulta, requisito, cambio de alcance y preocupación sensible, y respuesta al interesado con registro en GR-01 y GV-01.',
            ratio: '3600 / 1096',
          },
          note: 'GR-01 es el Registro de Requisitos de Arquitectura y GV-01 el Registro de Decisiones de Arquitectura (A-02, Tabla 18).',
        },
        {
          kind: 'table',
          number: 'Tabla 14',
          caption: 'Qué muestra la figura',
          columns: ['Tipo de retroalimentación', 'Qué se hace', 'Plazo'],
          wide: true,
          rows: [
            ['Consulta', 'Respuesta directa', '5 días hábiles'],
            [
              'Requisito',
              'Se registra en el Registro de Requisitos (GR-01)',
              '5 días hábiles',
            ],
            [
              'Cambio de alcance',
              'Se tramita con el procedimiento de cambio del A-02',
              'Según el nivel del cambio',
            ],
            [
              'Preocupación sensible',
              'Se aplica el protocolo de mensajes sensibles',
              'Inmediato',
            ],
          ],
        },
        { kind: 'h3', text: 'Lectura de la figura' },
        {
          kind: 'list',
          items: [
            'Todo empieza con el registro y la clasificación de lo recibido, en 2 días hábiles.',
            'Los requisitos, cambios y preocupaciones terminan en el Registro de Decisiones (GV-01).',
            'Al final, siempre se responde al interesado explicando qué se decidió y por qué.',
          ],
        },
        {
          kind: 'callout',
          title: 'Vías de entrada',
          text: 'Correo del proyecto, actas de sesiones, enlaces clínico y de la OSI, oficios externos, encuestas, buzón y libro de reclamaciones.',
        },
      ],
    },
    {
      id: 'mensajes-sensibles',
      kicker: 'Lámina 11',
      title: 'Mensajes sensibles',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Algunos temas pueden generar rumores o resistencia; el protocolo define quién habla y qué dice.',
        },
        {
          kind: 'table',
          number: 'Tabla 15',
          caption: 'Situaciones sensibles y respuesta de comunicación',
          columns: ['Situación', 'Respuesta', 'Vocero'],
          wide: true,
          rows: [
            [
              'Rumor de que el sistema reemplazará personal',
              'El objetivo es reducir trámites, no puestos; habrá capacitación',
              'Patrocinador o Dirección Asistencial',
            ],
            [
              'Temor del médico a más carga de registro',
              'Demostración con casos reales; pruebas de usabilidad antes de implantar',
              'Enlace clínico',
            ],
            [
              'Percepción de vigilancia por la auditoría',
              'La auditoría protege al paciente y también al profesional',
              'Dirección Asistencial',
            ],
            [
              'Incidente con datos',
              'Procedimiento institucional; solo declara la Dirección',
              'Patrocinador',
            ],
            [
              'Retraso de decisiones sectoriales',
              'Informar con transparencia que depende de entes externos',
              'Arquitecto líder',
            ],
          ],
        },
      ],
    },
    {
      id: 'factores-indicadores-y-riesgos',
      kicker: 'Lámina 12',
      title: 'Factores de éxito, indicadores y riesgos',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 16',
          caption: 'Factores críticos de éxito',
          columns: ['Código', 'Factor', 'Cómo se asegura'],
          wide: true,
          rows: [
            [
              'FCE-01',
              'El patrocinador respalda visiblemente el proyecto',
              'Lanzamiento, presidencia del ARB y comunicados firmados',
            ],
            [
              'FCE-02',
              'El personal clínico tiene tiempo protegido',
              'Resolución de la Dirección Asistencial',
            ],
            [
              'FCE-03',
              'Mensajes coherentes y honestos',
              'Basados en entregables aprobados',
            ],
            [
              'FCE-04',
              'La retroalimentación recibe respuesta',
              'Plazos controlados en el Comité',
            ],
            [
              'FCE-05',
              'Los entes sectoriales se involucran desde el inicio',
              'Oficio en la semana 4 y reunión en la semana 13',
            ],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 17',
          caption: 'Indicadores de efectividad',
          columns: ['Indicador', 'Meta'],
          rows: [
            ['Asistencia a sesiones y talleres', '≥ 80 %'],
            ['Quórum del ARB', '100 %'],
            ['Actas distribuidas en 3 días', '≥ 90 %'],
            ['Retroalimentación respondida en plazo', '≥ 90 %'],
            ['Personal que conoce el propósito del proyecto', '≥ 70 %'],
            ['Entregables aprobados en primera revisión', '≥ 80 %'],
          ],
        },
        { kind: 'h3', text: 'Riesgos principales' },
        {
          kind: 'table',
          number: 'Tabla 19',
          caption: 'Registro de riesgos de comunicación',
          columns: ['Riesgo', 'Inicial', 'Mitigación', 'Residual'],
          wide: true,
          rows: [
            [
              'R-C-01 El personal clínico no asiste',
              high('Alto'),
              'Tiempo protegido; sesiones de 45 minutos en el servicio',
              medium('Medio'),
            ],
            [
              'R-C-02 Rumores de reemplazo de personal',
              medium('Medio'),
              'Protocolo de mensajes sensibles',
              low('Bajo'),
            ],
            [
              'R-C-05 Los entes sectoriales no responden',
              medium('Medio'),
              'Oficio temprano y seguimiento',
              medium('Medio'),
            ],
            [
              'R-C-06 Expectativas excesivas',
              medium('Medio'),
              'Aplicar "lo que no se debe prometer"',
              low('Bajo'),
            ],
          ],
        },
        { kind: 'h3', text: 'Conclusiones' },
        {
          kind: 'list',
          ordered: true,
          items: [
            '18 interesados en 7 grupos, cada uno con su mensaje, canal y momento.',
            'Mensajes ligados a la visión y a los KPI, sin promesas que no se puedan cumplir.',
            'Calendario sincronizado con los hitos H1 a H8.',
            'La retroalimentación se convierte en requisitos y decisiones registradas.',
            'La efectividad se mide con seis indicadores.',
          ],
        },
        { kind: 'cta' },
      ],
    },
  ],
};
