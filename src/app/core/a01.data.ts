export type Tone = 'ok' | 'warn' | 'bad' | 'info';

export type Cell = string | { readonly t: string; readonly tone?: Tone; readonly strong?: boolean };

export interface DocTable {
  readonly kind: 'table';
  readonly number: string;
  readonly caption: string;
  readonly columns: readonly string[];
  readonly rows: readonly (readonly Cell[])[];
  readonly note?: string;
  readonly wide?: boolean;
}

export interface Principle {
  readonly code: string;
  readonly name: string;
  readonly statement: string;
  readonly rationale: string;
  readonly implications: string;
  readonly proposed?: boolean;
}

export interface ImageFigure {
  readonly kind: 'image';
  readonly src: string;
  readonly thumb: string;
  readonly alt: string;
  readonly ratio: string;
}

export type Figure = ImageFigure;

export type DocBlock =
  | { readonly kind: 'p'; readonly text: string; readonly lead?: boolean }
  | { readonly kind: 'h3'; readonly text: string }
  | { readonly kind: 'quote'; readonly text: string; readonly source?: string }
  | { readonly kind: 'callout'; readonly title: string; readonly text: string }
  | { readonly kind: 'list'; readonly ordered?: boolean; readonly items: readonly string[] }
  | DocTable
  | {
      readonly kind: 'figure';
      readonly number: string;
      readonly caption: string;
      readonly figure: Figure;
      readonly note?: string;
    }
  | { readonly kind: 'principles'; readonly items: readonly Principle[] }
  | { readonly kind: 'stats'; readonly items: readonly { value: string; label: string }[] }
  | { readonly kind: 'refs'; readonly items: readonly string[] }
  | { readonly kind: 'cta' };

export interface DocSection {
  readonly id: string;
  readonly kicker: string;
  readonly title: string;
  readonly blocks: readonly DocBlock[];
}

const high = (t: string): Cell => ({ t, tone: 'warn' });
const critical = (t: string): Cell => ({ t, tone: 'bad' });
const medium = (t: string): Cell => ({ t, tone: 'info' });
const low = (t: string): Cell => ({ t, tone: 'ok' });
const strong = (t: string): Cell => ({ t, strong: true });

export interface A01Document {
  readonly code: string;
  readonly title: string;
  readonly english: string;
  readonly version: string;
  readonly date: string;
  readonly status: string;
  readonly author: string;
  readonly reviewer: string;
  readonly summary: string;
  readonly file: { readonly name: string; readonly path: string; readonly size: string };
  readonly sections: readonly DocSection[];
}

export const A01: A01Document = {
  code: 'A-01',
  title: 'Visión de la Arquitectura',
  english: 'Architecture Vision',
  version: '2.0',
  date: '20/10/2026',
  status: 'Borrador para revisión',
  author: 'Equipo de Arquitectura Empresarial del proyecto',
  reviewer: 'Architecture Review Board (ARB)',
  summary:
    'La visión propone un Expediente Clínico Electrónico Único como eje de una arquitectura centrada en el paciente, segura, interoperable y resiliente, gobernada por una función de arquitectura formal. La primera iteración se concentra en la consulta externa.',
  file: {
    name: 'A-01_Vision_de_la_Arquitectura.pdf',
    path: '/docs/A-01_Vision_de_la_Arquitectura.pdf',
    size: '645 KB',
  },
  sections: [
    {
      id: 'resumen',
      kicker: 'Resumen',
      title: 'La visión en una página',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El Hospital de Tingo María atiende a la población de Leoncio Prado y a pacientes referidos de establecimientos de menor complejidad. Su información clínica está repartida entre historias en papel, registros de servicios y sistemas que no se comunican; la atención se organiza por servicio y no alrededor del paciente. Esta visión define el estado que la arquitectura debe alcanzar en 24 meses para revertir esa situación.',
        },
        {
          kind: 'quote',
          text: 'En un horizonte de 24 meses, el Hospital de Tingo María contará con un Expediente Clínico Electrónico Único por paciente, alineado con el marco nacional de historias clínicas electrónicas, que acompañará al paciente desde la admisión hasta el alta. Los procesos de atención, empezando por la consulta externa, estarán organizados alrededor del paciente y no de cada servicio; la información clínica estará protegida por controles de acceso por rol, cifrado y auditoría; el hospital intercambiará información con la DIRESA Huánuco, el MINSA y el SIS mediante estándares abiertos; la tecnología seguirá funcionando ante los cortes de energía y conectividad propios de la selva; y una función de arquitectura formal, gobernada por el ARB, conducirá la evolución de todo este conjunto en el tiempo.',
          source: 'Enunciado de la visión, A-01 v2.0',
        },
        {
          kind: 'stats',
          items: [
            { value: '18', label: 'interesados identificados' },
            { value: '8', label: 'principios de arquitectura' },
            { value: '7', label: 'KPI con línea base y meta' },
            { value: '11', label: 'riesgos de la transformación' },
          ],
        },
        {
          kind: 'h3',
          text: 'Cinco conclusiones',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'El problema es estructural y no solo tecnológico: información dispersa, atención por servicios y ausencia de una función que gobierne el cambio tecnológico afectan la capacidad de prevenir, proteger, recuperar y rehabilitar.',
            'Existen impulsores externos claros para actuar ahora: el marco nacional de historias clínicas electrónicas (Ley N.° 30024), la protección de datos sensibles (Ley N.° 29733), las obligaciones de gobierno digital (D. Leg. N.° 1412) y el financiamiento del SIS ligado al registro de prestaciones.',
            'La visión propone un Expediente Clínico Electrónico Único como eje de una arquitectura centrada en el paciente, segura, interoperable y resiliente frente a las condiciones de la selva, gobernada por una función de arquitectura formal.',
            'La evaluación de preparación muestra que el hospital necesita y quiere el cambio, pero aún no está listo para ejecutarlo; por eso la primera iteración se limita a la consulta externa y las carencias de patrocinio, gobierno y financiamiento se convierten en condiciones previas de la Declaración de Trabajo (A-02).',
            'El éxito se medirá con siete KPI con línea base y meta, y los riesgos de la transformación se gestionarán con un registro único que distingue el riesgo inicial del residual.',
          ],
        },
      ],
    },
    {
      id: 'contexto',
      kicker: 'Contexto',
      title: 'El hospital, su misión y los cuatro verbos',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El Hospital de Tingo María es un establecimiento de salud público de la región Huánuco, ubicado en la selva alta. Su misión se resume en cuatro verbos: prevenir, proteger, recuperar y rehabilitar. Estos verbos se usan como criterio de aceptación de la arquitectura: ninguna capacidad se incorpora si no contribuye, de forma demostrable, a al menos uno de ellos.',
        },
        {
          kind: 'table',
          number: 'Tabla 9',
          caption: 'Datos de identificación del Hospital de Tingo María',
          columns: ['Atributo', 'Descripción'],
          rows: [
            ['Denominación', 'Hospital de Tingo María'],
            [
              'Dependencia',
              'Gobierno Regional de Huánuco, a través de la Dirección Regional de Salud (DIRESA) Huánuco',
            ],
            ['Naturaleza', 'Establecimiento de salud público del Sistema Nacional de Salud'],
            [
              'Ubicación',
              'Av. Ucayali N.° 114, Tingo María, provincia de Leoncio Prado, región Huánuco, Perú',
            ],
            [
              'Ámbito de atención',
              'Población de Tingo María, de la provincia de Leoncio Prado y población referida de establecimientos de menor complejidad',
            ],
            [
              'Servicios',
              'Atención integral: prevención, protección, recuperación y rehabilitación de la salud',
            ],
            [
              'Contexto territorial',
              'Ciudad intermedia de selva alta, con lluvias intensas estacionales, conectividad limitada y población rural con barreras geográficas y económicas de acceso',
            ],
          ],
        },
        { kind: 'h3', text: 'Misión y visión institucional' },
        {
          kind: 'quote',
          text: 'La misión del Hospital es prevenir los riesgos, proteger del daño, recuperar la salud y rehabilitar las capacidades de los pacientes, en condiciones de plena accesibilidad y de atención a la persona desde su concepción hasta su muerte natural.',
          source: 'Hospital de Tingo María (s.f.)',
        },
        {
          kind: 'quote',
          text: 'Somos un Hospital, que brinda servicios de salud, orientados a la prevención, recuperación y rehabilitación de la población asignada y de referencia, con un enfoque de innovación, equidad y desarrollo humano.',
          source: 'Hospital de Tingo María (s.f.)',
        },
        {
          kind: 'p',
          text: 'En un nivel superior se ubica la misión del Gobierno Regional de Huánuco, que es «gestionar y promover el desarrollo humano y sostenible en los pobladores de la región Huánuco con respecto a la biodiversidad e interculturalidad» (Gobierno Regional de Huánuco, s.f.). La arquitectura debe contribuir a este propósito regional y no solo a la operación interna del hospital.',
        },
        { kind: 'h3', text: 'Los cuatro verbos como criterio de aceptación' },
        {
          kind: 'p',
          text: 'Prevenir, proteger, recuperar y rehabilitar son el filtro de toda decisión de arquitectura: ninguna capacidad se incorpora si no contribuye, de forma demostrable, a al menos uno de ellos.',
        },
        {
          kind: 'table',
          number: 'Tabla 10',
          caption: 'Capacidades de arquitectura asociadas a cada verbo de la misión',
          columns: ['Verbo', 'Capacidad de arquitectura asociada', 'Dominio predominante'],
          rows: [
            [
              strong('Prevenir'),
              'Registro estructurado de factores de riesgo; seguimiento de campañas y tamizajes; notificación epidemiológica oportuna',
              'Datos y aplicaciones',
            ],
            [
              strong('Proteger'),
              'Control de acceso por rol, cifrado y auditoría sobre la información clínica; seguimiento materno-infantil',
              'Tecnología y datos',
            ],
            [
              strong('Recuperar'),
              'Expediente clínico electrónico único, accesible y completo; órdenes y resultados en línea',
              'Aplicaciones y datos',
            ],
            [
              strong('Rehabilitar'),
              'Seguimiento del plan de rehabilitación y de la evolución funcional del paciente',
              'Aplicaciones',
            ],
          ],
        },
      ],
    },
    {
      id: 'objetivos',
      kicker: 'Objetivos',
      title: 'Objetivos estratégicos y metas de negocio',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Las metas de negocio (BG) registradas en la Fase Preliminar traducen los objetivos estratégicos institucionales (OEI) a resultados que la arquitectura puede apoyar. En el paso 3 de la Fase A se confirman y se precisan para que sean medibles. La vigencia de los OEI debe ser confirmada por la Oficina de Planeamiento y Presupuesto (supuesto S-A-01).',
        },
        {
          kind: 'table',
          number: 'Tabla 11',
          caption: 'Objetivos estratégicos institucionales',
          columns: ['Código', 'Objetivo estratégico institucional', 'Indicador declarado'],
          wide: true,
          rows: [
            [
              'OEI.01',
              'Promover el hábito saludable y la prevención de enfermedades',
              'Porcentaje de personas con hábito de fumar',
            ],
            [
              'OEI.02',
              'Optimizar el funcionamiento y reducir la discapacidad en personas con afecciones de salud',
              'Porcentaje de pacientes que completan con éxito su proceso de rehabilitación',
            ],
            [
              'OEI.03',
              'Resguardar la vida y proteger la salud de la persona desde su concepción hasta su muerte natural',
              'Tasa de mortalidad infantil (defunciones de menores de un año por cada 1000 nacidos vivos)',
            ],
            [
              'OEI.04',
              'Apoyar la formación y especialización de los recursos humanos, asignando campo clínico y personal para docencia e investigación',
              'Número de programas de formación especializada',
            ],
          ],
          note: 'En la versión 1.0 la tasa de mortalidad infantil se expresaba como «número de muertes»; se corrige a tasa para que el indicador sea comparable entre periodos.',
        },
        {
          kind: 'table',
          number: 'Tabla 12',
          caption: 'Metas de negocio confirmadas y su relación con los objetivos estratégicos',
          columns: ['Código', 'Meta de negocio', 'Precisión incorporada en la Fase A', 'OEI relacionado'],
          wide: true,
          rows: [
            [
              'BG-001',
              'Velar por la salud de los ciudadanos',
              'Disponer de información clínica completa y oportuna de cada paciente en todos los servicios',
              'OEI.01, OEI.02, OEI.03',
            ],
            [
              'BG-002',
              'Brindar una atención buena y rápida',
              'Reducir los tiempos de espera y las repeticiones de trámites en consulta externa',
              'OEI.03',
            ],
            [
              'BG-003',
              'Fortalecer la capacitación y el aprendizaje',
              'Asegurar formación continua y medible del personal de salud',
              'OEI.04',
            ],
            [
              'BG-004',
              'Fortalecer la gestión estratégica institucional',
              'Disponer de los indicadores estratégicos con datos vigentes para la toma de decisiones',
              'OEI.01 a OEI.04',
            ],
          ],
        },
      ],
    },
    {
      id: 'impulsores',
      kicker: 'Cambio',
      title: 'Por qué cambiar ahora',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Los impulsores de cambio explican por qué el hospital debe transformarse en este momento. TOGAF distingue entre impulsores externos, que la organización no controla, e internos, que nacen de su propia situación (The Open Group, 2011, cap. 7).',
        },
        {
          kind: 'table',
          number: 'Tabla 16',
          caption: 'Impulsores de cambio confirmados',
          columns: ['Código', 'Impulsor', 'Tipo', 'Evidencia o fuente', 'Prioridad'],
          wide: true,
          rows: [
            [
              'IC-01',
              'Marco nacional de historia clínica electrónica: toda solución de historia clínica electrónica debe alinearse al RENHICE y a la norma técnica de gestión de la historia clínica',
              'Externo, normativo',
              'Ley N.° 30024 (2013); D.S. N.° 009-2017-SA (2017); NTS N.° 139-MINSA/2018/DGAIN (Ministerio de Salud, 2018)',
              high('Alta'),
            ],
            [
              'IC-02',
              'Obligaciones de gobierno digital: interoperabilidad, seguridad digital y servicios digitales al ciudadano',
              'Externo, normativo',
              'D. Leg. N.° 1412 (2018); D.S. N.° 029-2021-PCM (2021)',
              medium('Media'),
            ],
            [
              'IC-03',
              'Protección reforzada de los datos de salud, considerados datos sensibles',
              'Externo, normativo',
              'Ley N.° 29733 (2011)',
              high('Alta'),
            ],
            [
              'IC-04',
              'Financiamiento de prestaciones del SIS ligado al registro completo y oportuno de las atenciones',
              'Externo, financiero',
              'Normativa del SIS sobre registro de prestaciones',
              high('Alta'),
            ],
            [
              'IC-05',
              'Historias clínicas dispersas, consulta lenta o incompleta y duplicación de registros',
              'Interno, operativo',
              'Evaluación de capacidades (A-04)',
              high('Alta'),
            ],
            [
              'IC-06',
              'Tiempos de espera elevados en consulta externa y reprocesos entre admisión, consulta, laboratorio y farmacia',
              'Interno, operativo',
              'Petición de Trabajo D-06',
              high('Alta'),
            ],
            [
              'IC-07',
              'Infraestructura tecnológica limitada y no priorizada, vulnerable a cortes de energía y conectividad inestable',
              'Interno, tecnológico',
              'Evaluación de capacidades (A-04)',
              high('Alta'),
            ],
            [
              'IC-08',
              'Ausencia de una función que gobierne el cambio tecnológico; decisiones concentradas en proveedores',
              'Interno, de gobierno',
              'Evaluación de la función de arquitectura (A-04)',
              critical('Crítica'),
            ],
            [
              'IC-09',
              'Necesidad de coordinar referencias, contrarreferencias y reportes con la DIRESA y el MINSA',
              'Externo, estratégico',
              'Requisitos de reporte sectorial',
              high('Alta'),
            ],
          ],
          note: 'La norma de gobierno digital aplicable es el Decreto Legislativo N.° 1412; la Ley N.° 31112 regula el control previo de operaciones de concentración empresarial y no guarda relación con el proyecto.',
        },
        { kind: 'h3', text: 'Factores habilitantes' },
        {
          kind: 'p',
          text: 'Los valores institucionales de serenidad, integridad, honestidad y humildad, junto con la voluntad expresada en la misión y la visión, favorecen la aceptación del cambio y se aprovechan en la estrategia de comunicación (A-03).',
        },
        { kind: 'h3', text: 'Restricciones de negocio' },
        {
          kind: 'p',
          text: 'Las restricciones son condiciones que la arquitectura no puede cambiar y debe respetar. Las más determinantes para la visión son tres: la atención no puede detenerse durante la implementación; el presupuesto anual es cerrado y no admite recursos extraordinarios; y la interoperabilidad regional depende de decisiones de la DIRESA y del MINSA.',
        },
      ],
    },
    {
      id: 'interesados',
      kicker: 'Interesados',
      title: 'Quiénes importan y qué esperan',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Se identificaron 18 interesados, se clasificaron con la matriz poder/interés que recomienda TOGAF y se definió una estrategia de involucramiento para cada cuadrante. Sus preocupaciones se relacionan con las vistas de arquitectura que las responderán, y sus expectativas se resumen en ocho requisitos de alto nivel.',
        },
        {
          kind: 'table',
          number: 'Tabla 18',
          caption: 'Catálogo de interesados del proyecto',
          columns: ['Código', 'Interesado', 'Grupo', 'Poder', 'Interés', 'Preocupación principal'],
          wide: true,
          rows: [
            [
              'INT-01',
              'Pacientes, familiares y comunidad usuaria',
              'Usuarios externos',
              'Bajo',
              'Alto',
              'Tiempo de atención, trato, privacidad de su información',
            ],
            [
              'INT-02',
              'Personal médico',
              'Usuarios clínicos',
              'Alto',
              'Alto',
              'Rapidez de registro, acceso a la historia completa, no duplicar trabajo',
            ],
            [
              'INT-03',
              'Personal de enfermería',
              'Usuarios clínicos',
              'Medio',
              'Alto',
              'Registro de cuidados y medicación sin carga adicional',
            ],
            [
              'INT-04',
              'Personal de apoyo al diagnóstico y tratamiento (laboratorio, imágenes, farmacia)',
              'Usuarios clínicos',
              'Medio',
              'Alto',
              'Recibir órdenes claras y devolver resultados en línea',
            ],
            [
              'INT-05',
              'Personal administrativo (admisión, citas, archivo, caja)',
              'Usuarios administrativos',
              'Medio',
              'Alto',
              'Simplificar trámites y evitar registros duplicados',
            ],
            [
              'INT-06',
              'Dirección Ejecutiva (patrocinador)',
              'Gobierno',
              'Alto',
              'Alto',
              'Cumplimiento normativo, uso eficiente del presupuesto, imagen institucional',
            ],
            [
              'INT-07',
              'Dirección Asistencial',
              'Gobierno',
              'Alto',
              'Alto',
              'Calidad y continuidad de la atención',
            ],
            [
              'INT-08',
              'Dirección de Administración',
              'Gobierno',
              'Alto',
              'Medio',
              'Adquisiciones viables y sostenibles',
            ],
            [
              'INT-09',
              'Oficina de Planeamiento y Presupuesto',
              'Gobierno',
              'Alto',
              'Medio',
              'Programación presupuestal e indicadores estratégicos',
            ],
            [
              'INT-10',
              'Oficina de Sistemas y Información (OSI)',
              'Operación tecnológica',
              'Medio',
              'Alto',
              'Estabilidad, carga operativa, costo de licencias y soporte',
            ],
            [
              'INT-11',
              'Oficina de Recursos Humanos',
              'Soporte',
              'Medio',
              'Medio',
              'Capacitación del personal y gestión del cambio',
            ],
            [
              'INT-12',
              'DIRESA Huánuco',
              'Externo regulador',
              'Alto',
              'Medio',
              'Reportes oportunos, referencias y vigilancia epidemiológica',
            ],
            [
              'INT-13',
              'Gobierno Regional de Huánuco',
              'Externo financiador',
              'Alto',
              'Bajo',
              'Inversión pública alineada con prioridades regionales',
            ],
            [
              'INT-14',
              'Ministerio de Salud (MINSA)',
              'Externo regulador',
              'Alto',
              'Bajo',
              'Cumplimiento de estándares de historia clínica electrónica e interoperabilidad',
            ],
            [
              'INT-15',
              'Seguro Integral de Salud (SIS)',
              'Externo financiador',
              'Medio',
              'Medio',
              'Registro completo y oportuno de las prestaciones',
            ],
            [
              'INT-16',
              'SUSALUD',
              'Externo supervisor',
              'Medio',
              'Bajo',
              'Calidad de la atención y derechos de los usuarios',
            ],
            [
              'INT-17',
              'Proveedor del sistema de información actual',
              'Externo contractual',
              'Medio',
              'Alto',
              'Continuidad de su contrato y del soporte',
            ],
            [
              'INT-18',
              'Otros proveedores de bienes y servicios tecnológicos',
              'Externo contractual',
              'Bajo',
              'Medio',
              'Requisitos claros y niveles de servicio',
            ],
          ],
        },
        { kind: 'h3', text: 'Matriz poder/interés y estrategia de involucramiento' },
        {
          kind: 'table',
          number: 'Tabla 19',
          caption: 'Clasificación de interesados según la matriz poder/interés',
          columns: ['Cuadrante', 'Estrategia', 'Interesados', 'Acciones concretas'],
          wide: true,
          rows: [
            [
              strong('Actores clave'),
              'Gestionar de cerca',
              'INT-02, INT-06, INT-07',
              'Participan en el ARB o en sesiones de validación; aprueban la Visión y el escenario EB-01',
            ],
            [
              strong('Mantener satisfechos'),
              'Consultar en decisiones que les afectan',
              'INT-08, INT-09, INT-12, INT-13, INT-14',
              'Reuniones por hito; oficios formales; revisión de objetivos, presupuesto e interoperabilidad',
            ],
            [
              strong('Mantener informados'),
              'Informar y consultar',
              'INT-01, INT-03, INT-04, INT-05, INT-10, INT-17',
              'Sesiones de trabajo, encuestas, boletines internos y cartelería en salas de espera',
            ],
            [
              strong('Esfuerzo mínimo'),
              'Monitorear',
              'INT-11, INT-15, INT-16, INT-18',
              'Comunicaciones por hito y consulta puntual',
            ],
          ],
          note: 'Los pacientes (INT-01) no tienen acceso a la intranet; se informan mediante cartelería, avisos en salas de espera y encuestas de satisfacción. Los canales, mensajes y calendario se detallan en el Plan de Comunicaciones (A-03).',
        },
        {
          kind: 'figure',
          number: 'Figura 1',
          caption: 'Matriz poder/interés de los interesados',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-01-matriz-poder-interes.png',
            thumb: '/img/a01/thumbs/figura-01-matriz-poder-interes.jpg',
            alt: 'Matriz de poder e interés de los interesados del hospital, con los cuadrantes de actores clave, mantener satisfechos, mantener informados y esfuerzo mínimo.',
            ratio: '1672 / 941',
          },
          note: 'Los actores clave validan la visión y el escenario EB-01; los externos de mayor poder condicionan el presupuesto y la interoperabilidad.',
        },
        { kind: 'h3', text: 'Preocupaciones y vistas de arquitectura' },
        {
          kind: 'table',
          number: 'Tabla 20',
          caption: 'Relación entre preocupaciones de los interesados y vistas de arquitectura',
          columns: ['Preocupación', 'Interesados', 'Vista que la atiende', 'Fase'],
          wide: true,
          rows: [
            [
              '¿Cómo será el recorrido del paciente en consulta externa?',
              'INT-01, INT-02, INT-05, INT-07',
              'Vista de procesos de negocio (EB-01)',
              'B',
            ],
            [
              '¿Quién puede ver qué información clínica?',
              'INT-01, INT-02, INT-06, INT-10',
              'Vista de seguridad y acceso a datos',
              'C',
            ],
            [
              '¿Qué sistemas existen hoy y cuáles cambian?',
              'INT-10, INT-17, INT-08',
              'Vista de portafolio de aplicaciones (base y objetivo)',
              'C',
            ],
            [
              '¿Qué infraestructura se necesita y cuánto costará?',
              'INT-08, INT-09, INT-10',
              'Vista de infraestructura y costos',
              'D y E',
            ],
            [
              '¿Cómo se intercambiará información con el sector?',
              'INT-12, INT-14, INT-15',
              'Vista de interoperabilidad',
              'C y D',
            ],
            [
              '¿Se cumplirán los indicadores estratégicos?',
              'INT-06, INT-09',
              'Vista de objetivos e indicadores',
              'A y B',
            ],
          ],
        },
        { kind: 'h3', text: 'Requisitos de alto nivel' },
        {
          kind: 'p',
          text: 'Los siguientes requisitos resumen lo que los interesados esperan de la arquitectura. Ingresan al proceso de Gestión de Requisitos y se refinarán en las Fases B a D.',
        },
        {
          kind: 'table',
          number: 'Tabla 21',
          caption: 'Requisitos de alto nivel de los interesados',
          columns: ['Código', 'Requisito', 'Interesados de origen', 'Meta o principio'],
          wide: true,
          rows: [
            [
              'RQ-01',
              'El médico debe ver en una sola pantalla la historia clínica completa del paciente, incluidos resultados de laboratorio e imágenes.',
              'INT-02, INT-07',
              'BG-001, PA-05',
            ],
            [
              'RQ-02',
              'El paciente debe registrarse una sola vez y ser identificado de forma única en todos los servicios.',
              'INT-05, INT-01',
              'BG-002, PA-08',
            ],
            [
              'RQ-03',
              'Toda consulta o modificación del expediente debe quedar registrada con usuario, fecha y hora.',
              'INT-06, INT-01',
              'PA-03, PA-04',
            ],
            [
              'RQ-04',
              'La atención debe poder continuar ante una caída del sistema o de la conectividad.',
              'INT-02, INT-07, INT-10',
              'PA-02',
            ],
            [
              'RQ-05',
              'Las prestaciones de asegurados deben registrarse completas para su reporte al SIS.',
              'INT-15, INT-09',
              'BG-004',
            ],
            [
              'RQ-06',
              'La Dirección debe consultar los indicadores estratégicos actualizados sin elaborar reportes manuales.',
              'INT-06, INT-09',
              'BG-004',
            ],
            [
              'RQ-07',
              'La solución debe intercambiar información con el sector usando estándares abiertos.',
              'INT-12, INT-14',
              'PA-07',
            ],
            [
              'RQ-08',
              'El personal debe recibir capacitación medible antes y después de cada cambio.',
              'INT-11, INT-02, INT-03',
              'BG-003',
            ],
          ],
        },
      ],
    },
    {
      id: 'problema',
      kicker: 'Problema',
      title: 'La situación actual y sus brechas',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Hoy, cuando un paciente acude a consulta externa en el Hospital de Tingo María, su información clínica se encuentra repartida entre historias en papel, registros de distintos servicios y sistemas que no se comunican entre sí. El médico no siempre tiene a la vista los antecedentes, los resultados de laboratorio o las atenciones previas; el paciente repite datos y trámites en admisión, laboratorio y farmacia; y la Dirección no dispone de indicadores actualizados para decidir. Al mismo tiempo, la información de salud, que la ley califica como sensible, no cuenta con controles de acceso y auditoría institucionalizados, y la infraestructura tecnológica es frágil frente a los cortes de energía y conectividad propios de la zona.',
        },
        {
          kind: 'p',
          text: 'Este problema afecta directamente los cuatro verbos de la misión y no puede resolverse con la compra aislada de un sistema, porque la causa de fondo es la ausencia de una arquitectura y de una función que la gobierne.',
        },
        {
          kind: 'callout',
          title: 'Un caso concreto: control de diabetes',
          text: 'Un paciente asegurado acude por un control de diabetes. Debe hacer fila en admisión para obtener un turno, el archivo busca su historia física, el médico no cuenta con el resultado del examen de glucosa realizado la semana anterior y solicita repetirlo, la receta se escribe a mano y en farmacia el paciente vuelve a dar sus datos. La atención completa toma buena parte de la mañana y la información generada queda repartida en varios registros.',
        },
        { kind: 'h3', text: 'Resumen de la evaluación de capacidades' },
        {
          kind: 'p',
          text: 'La evaluación detallada, con la escala de madurez utilizada, se encuentra en el entregable A-04. Aquí se resumen sus resultados.',
        },
        {
          kind: 'table',
          number: 'Tabla 22',
          caption: 'Resumen del estado actual y aspiración de las capacidades evaluadas',
          columns: ['Capacidad', 'Rendimiento actual', 'Aspiración', 'Hallazgo principal'],
          wide: true,
          rows: [
            [
              'Información clínica del paciente',
              'Moderado bajo (2/5)',
              'Alto (4/5)',
              'La historia clínica está dispersa y su consulta es lenta o incompleta.',
            ],
            [
              'Continuidad de la atención',
              'Moderado aceptable (3/5)',
              'Alto (4/5)',
              'La atención se organiza alrededor de los servicios y no del paciente.',
            ],
            [
              'Seguridad de los datos',
              'Moderado aceptable (3/5)',
              'Alto (4/5)',
              'Existen controles, pero no están institucionalizados ni auditados.',
            ],
            [
              'Usabilidad de las aplicaciones',
              'Moderado bajo (2/5)',
              'Alto (4/5)',
              'Las aplicaciones no se diseñaron alrededor del trabajo clínico.',
            ],
            [
              'Infraestructura tecnológica',
              'Bajo (1/5)',
              'Alto (4/5)',
              'No priorizada; vulnerable a cortes de energía y de conectividad.',
            ],
            [
              'Función de arquitectura',
              'Inexistente (0/5)',
              'Formalizada (3/5)',
              'No existe unidad responsable ni inventario de sistemas.',
            ],
          ],
          note: 'Escala de madurez de 0 a 5: 0 = inexistente, 1 = bajo, 2 = moderado bajo, 3 = moderado aceptable, 4 = alto, 5 = optimizado. El detalle de la evaluación está en A-04.',
        },
        {
          kind: 'figure',
          number: 'Figura 2',
          caption: 'Capacidades del hospital: nivel actual (AS-IS)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-02-capacidades-asis.png',
            thumb: '/img/a01/thumbs/figura-02-capacidades-asis.jpg',
            alt: 'Gráfico de capacidades del hospital en el estado actual: información clínica, continuidad, seguridad, usabilidad, infraestructura y función de arquitectura, todas por debajo de la aspiración.',
            ratio: '2880 / 1640',
          },
          note: 'Predominan los niveles bajos: la infraestructura (1/5) y la función de arquitectura (0/5) son las capacidades más débiles.',
        },
        {
          kind: 'figure',
          number: 'Figura 3',
          caption: 'Capacidades del hospital: nivel objetivo (TO-BE)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-03-capacidades-tobe.png',
            thumb: '/img/a01/thumbs/figura-03-capacidades-tobe.jpg',
            alt: 'Gráfico de capacidades del hospital en el estado objetivo: las seis capacidades alcanzan niveles altos, con la función de arquitectura formalizada.',
            ratio: '1320 / 690',
          },
          note: 'Todas las capacidades suben de nivel; las mayores mejoras (+3) están en infraestructura y en función de arquitectura.',
        },
        { kind: 'h3', text: 'Resumen de la preparación para la transformación' },
        {
          kind: 'p',
          text: 'TOGAF recomienda evaluar, antes de comprometer recursos, si la organización está lista para el cambio, mediante factores de preparación (The Open Group, 2011, cap. 30). La evaluación completa se incorpora en A-04.',
        },
        {
          kind: 'table',
          number: 'Tabla 23',
          caption: 'Evaluación preliminar de preparación para la transformación',
          columns: ['Factor de preparación', 'Estado actual', 'Estado requerido', 'Riesgo'],
          wide: true,
          rows: [
            [
              'Visión compartida',
              'Parcial: la misión es clara, pero la visión tecnológica no está difundida',
              'Visión validada por actores clave',
              medium('Medio'),
            ],
            [
              'Voluntad y determinación',
              'Presente en la Dirección; incierta en el personal',
              'Compromiso de jefaturas médicas',
              medium('Medio'),
            ],
            ['Necesidad', 'Reconocida por todas las áreas', 'Mantener', low('Bajo')],
            [
              'Caso de negocio',
              'Inexistente',
              'Caso de negocio cualitativo aprobado',
              critical('Alto'),
            ],
            [
              'Financiamiento',
              'Sin partida asignada',
              'Presupuesto de corto plazo aprobado en A-02',
              critical('Alto'),
            ],
            [
              'Patrocinio y liderazgo',
              'Dirección interesada, patrocinador por designar formalmente',
              'Patrocinador designado y activo',
              critical('Alto'),
            ],
            [
              'Gobierno',
              'ARB por constituir formalmente',
              'ARB con acta de instalación',
              critical('Alto'),
            ],
            [
              'Capacidad de TI para ejecutar',
              'Baja: dotación limitada de la OSI',
              'Enlace dedicado y apoyo externo',
              critical('Alto'),
            ],
            [
              'Capacidad de las áreas para ejecutar',
              'Limitada por la carga asistencial',
              'Tiempo protegido para sesiones de trabajo',
              medium('Medio'),
            ],
            [
              'Capacidad para implementar y operar',
              'Baja: infraestructura no priorizada',
              'Plan de infraestructura por etapas',
              critical('Alto'),
            ],
          ],
          note: 'La evaluación es preliminar y se basa en la información disponible en la Fase Preliminar. Se confirmará con entrevistas a los actores clave antes del cierre de la fase.',
        },
        {
          kind: 'figure',
          number: 'Figura 4',
          caption: 'Preparación para el cambio: estado actual y estado requerido',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-04-preparacion.png',
            thumb: '/img/a01/thumbs/figura-04-preparacion.jpg',
            alt: 'Tablero de preparación para el cambio con diez factores evaluados: seis en estado crítico, tres parciales y uno favorable.',
            ratio: '1672 / 940',
          },
          note: 'Seis de los diez factores están en estado crítico; el único favorable es la necesidad de cambiar.',
        },
        {
          kind: 'stats',
          items: [
            { value: '10', label: 'factores evaluados' },
            { value: '6', label: 'críticos' },
            { value: '3', label: 'parciales' },
            { value: '1', label: 'favorable' },
          ],
        },
        { kind: 'h3', text: 'Síntesis de brechas' },
        {
          kind: 'table',
          number: 'Tabla 24',
          caption: 'Síntesis de brechas identificadas',
          columns: ['Código', 'Brecha', 'Impacto en la misión', 'Prioridad'],
          wide: true,
          rows: [
            [
              'BR-01',
              'Seguridad de la información no institucionalizada',
              'Proteger',
              high('Alta'),
            ],
            [
              'BR-02',
              'Atención no centrada en el paciente',
              'Recuperar, rehabilitar',
              high('Alta'),
            ],
            ['BR-03', 'Baja usabilidad de las aplicaciones', 'Recuperar', medium('Media')],
            [
              'BR-04',
              'Infraestructura tecnológica no priorizada',
              'Todos los verbos',
              high('Alta'),
            ],
            [
              'BR-05',
              'Función de arquitectura propuesta en el Modelo Organizacional (D-02) pero no formalizada mediante resolución',
              'Todos los verbos',
              critical('Crítica'),
            ],
            [
              'BR-06',
              'Ausencia de inventario de sistemas e infraestructura',
              'Todos los verbos',
              high('Alta'),
            ],
            [
              'BR-07',
              'Ausencia de partida presupuestal recurrente para la función de arquitectura',
              'Todos los verbos',
              medium('Media'),
            ],
            [
              'BR-08',
              'Vigencia del instrumento de planificación estratégica no confirmada',
              'Prevenir',
              high('Alta'),
            ],
          ],
          note: 'BR-05: la Fase Preliminar ya propuso la función de arquitectura; lo pendiente es su formalización, registrada como condición previa de A-02.',
        },
      ],
    },
    {
      id: 'alcance',
      kicker: 'Alcance',
      title: 'Qué cubre la primera iteración',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'La primera iteración del ADM se concentra en la cadena de atención de consulta externa, porque concentra el mayor flujo de pacientes y permite demostrar resultados con un alcance manejable. TOGAF define el alcance en cuatro dimensiones: amplitud, profundidad, horizonte temporal y dominios de arquitectura (The Open Group, 2011, cap. 7). El alcance definitivo se formaliza en A-02.',
        },
        {
          kind: 'table',
          number: 'Tabla 25',
          caption: 'Alcance de la primera iteración en las cuatro dimensiones de TOGAF',
          columns: ['Dimensión', 'Definición para la primera iteración'],
          wide: true,
          rows: [
            [
              strong('Amplitud'),
              'Hospital de Tingo María, con foco en la cadena de atención de consulta externa: admisión, citas, triaje, consulta, órdenes de laboratorio e imágenes, prescripción y dispensación. Hospitalización y emergencia se modelan solo a nivel de contexto (v0.1) para asegurar que el expediente sea compatible con ellas en iteraciones posteriores.',
            ],
            [
              strong('Profundidad'),
              'Arquitectura de nivel estratégico y de segmento: procesos de nivel 1 y 2, entidades de datos lógicas, portafolio de aplicaciones y servicios tecnológicos. El diseño detallado de soluciones queda para las Fases E a G y para los proyectos de implementación.',
            ],
            [
              strong('Horizonte temporal'),
              'Arquitectura objetivo a 24 meses; desarrollo de la arquitectura en 6 meses (Mes 1 a Mes 6).',
            ],
            [
              strong('Dominios'),
              'Negocio, datos, aplicaciones y tecnología, con la seguridad como preocupación transversal.',
            ],
          ],
        },
        {
          kind: 'p',
          text: 'Fuera del alcance de esta iteración: abastecimiento y logística detallados, administración financiera, adquisición de software, implementación física de la infraestructura y operación posterior a la implementación. Estos temas se mencionan solo como contexto o como dependencias.',
        },
      ],
    },
    {
      id: 'vision',
      kicker: 'Visión',
      title: 'El estado objetivo y sus principios',
      blocks: [
        {
          kind: 'quote',
          text: 'En un horizonte de 24 meses, el Hospital de Tingo María contará con un Expediente Clínico Electrónico Único por paciente, alineado con el marco nacional de historias clínicas electrónicas, que acompañará al paciente desde la admisión hasta el alta. Los procesos de atención, empezando por la consulta externa, estarán organizados alrededor del paciente y no de cada servicio; la información clínica estará protegida por controles de acceso por rol, cifrado y auditoría; el hospital intercambiará información con la DIRESA Huánuco, el MINSA y el SIS mediante estándares abiertos; la tecnología seguirá funcionando ante los cortes de energía y conectividad propios de la selva; y una función de arquitectura formal, gobernada por el ARB, conducirá la evolución de todo este conjunto en el tiempo.',
          source: 'Enunciado de la visión',
        },
        {
          kind: 'p',
          text: 'Los principios son reglas generales y duraderas que orientan cómo la organización usa y despliega sus recursos de información (The Open Group, 2011, cap. 23). En el paso 7 de la Fase A se confirman los siete principios definidos en la Fase Preliminar y se propone uno adicional, con el formato recomendado por TOGAF: nombre, enunciado, fundamento e implicaciones.',
        },
        {
          kind: 'principles',
          items: [
            {
              code: 'PA-01',
              name: 'Primacía de los principios',
              statement:
                'Todas las áreas del hospital aplican estos principios en sus decisiones de información y tecnología.',
              rationale:
                'Solo así se obtiene una arquitectura coherente y no un conjunto de soluciones aisladas.',
              implications: 'Toda excepción debe ser aprobada por el ARB y quedar registrada.',
            },
            {
              code: 'PA-02',
              name: 'Continuidad del servicio',
              statement:
                'La atención al paciente no se interrumpe por fallas o cambios tecnológicos.',
              rationale:
                'La continuidad de la atención es una obligación legal y ética del hospital.',
              implications:
                'Toda implantación incluye coexistencia, plan de reversión y procedimientos de contingencia en papel.',
            },
            {
              code: 'PA-03',
              name: 'Control de acceso',
              statement: 'Cada usuario accede solo a la información que su rol requiere.',
              rationale: 'Reduce el riesgo de uso indebido de información clínica.',
              implications:
                'Se requiere gestión de identidades, perfiles por rol y revisión periódica de accesos.',
            },
            {
              code: 'PA-04',
              name: 'Seguridad de los datos',
              statement:
                'La información clínica se protege en su confidencialidad, integridad y disponibilidad.',
              rationale: 'Los datos de salud son datos sensibles según la Ley N.° 29733.',
              implications:
                'Cifrado en tránsito y en reposo, auditoría inalterable y datos de prueba anonimizados.',
            },
            {
              code: 'PA-05',
              name: 'Facilidad de uso',
              statement:
                'Las aplicaciones se diseñan alrededor del trabajo real del personal clínico.',
              rationale:
                'Un sistema difícil de usar no se adopta y la información queda incompleta.',
              implications:
                'Pruebas de usabilidad con personal clínico antes de cada puesta en producción.',
            },
            {
              code: 'PA-06',
              name: 'Respuesta gestionada al cambio',
              statement:
                'Los cambios de arquitectura se evalúan y aprueban antes de ejecutarse.',
              rationale:
                'Evita decisiones aisladas y dependencias no controladas de proveedores.',
              implications:
                'Todo cambio pasa por solicitud formal y evaluación de impacto ante el ARB.',
            },
            {
              code: 'PA-07',
              name: 'Adaptabilidad',
              statement:
                'La arquitectura crece por etapas y se adapta a nuevos servicios y normas.',
              rationale: 'El presupuesto es limitado y la normativa evoluciona.',
              implications:
                'Preferencia por estándares abiertos, como HL7 FHIR (HL7 International, 2019), y por componentes reemplazables.',
            },
            {
              code: 'PA-08',
              name: 'Los datos son un activo compartido',
              statement:
                'Los datos maestros (paciente, profesional, servicio) tienen un dueño, una única fuente y una calidad medida.',
              rationale:
                'Sin identificación única del paciente no existe expediente único.',
              implications:
                'Se designan dueños de datos y reglas de calidad; requiere aprobación del ARB para incorporarse.',
              proposed: true,
            },
          ],
        },
      ],
    },
    {
      id: 'concepto',
      kicker: 'Solución',
      title: 'Concepto y bloques de construcción',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El concepto de la solución representa en un solo diagrama cómo se relacionan los elementos de la visión. Los bloques de construcción de arquitectura (ABB) describen las capacidades que la solución necesita, sin atarse todavía a productos concretos.',
        },
        { kind: 'h3', text: 'Atributos de la visión' },
        {
          kind: 'list',
          items: [
            'Centrada en el paciente: el recorrido de atención se diseña desde su experiencia y no desde la estructura de los servicios.',
            'Segura: la información clínica se protege como dato sensible, con identidad, control de acceso y auditoría.',
            'Interoperable: el expediente se conecta con el laboratorio, la farmacia y los sistemas del sector mediante interfaces formales.',
            'Resiliente: la atención continúa ante cortes de energía o de red, y la información se sincroniza al restablecerse el servicio.',
            'Gobernada: una función de arquitectura y un ARB deciden, priorizan y controlan la evolución tecnológica.',
          ],
        },
        {
          kind: 'figure',
          number: 'Figura 5',
          caption: 'Concepto de la solución de la arquitectura objetivo',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-05-concepto-solucion.png',
            thumb: '/img/a01/thumbs/figura-05-concepto-solucion.jpg',
            alt: 'Diagrama del concepto de solución: el Expediente Clínico Electrónico Único recibe la atención de consulta externa y entrega información a la Dirección y al sector, con seguridad, infraestructura y gobierno como soportes transversales.',
            ratio: '1672 / 941',
          },
          note: 'Todo lo que ocurre en la atención alimenta un solo expediente; la información sale sola hacia la Dirección y hacia el sector, con seguridad, infraestructura y gobierno como soportes transversales.',
        },
        {
          kind: 'p',
          text: 'TOGAF distingue entre bloques de construcción de arquitectura (ABB), que describen qué capacidad se necesita sin atarse a un producto, y bloques de construcción de solución (SBB), que son los productos o desarrollos concretos que se seleccionan en la Fase E (The Open Group, 2011). En la Fase A solo se identifican ABB; su descripción completa está en A-05.',
        },
        {
          kind: 'table',
          number: 'Tabla 28',
          caption: 'Bloques de construcción de arquitectura identificados',
          columns: ['Código', 'Bloque de construcción (ABB)', 'Dominio', 'Objetivo que soporta'],
          wide: true,
          rows: [
            ['BB-01', 'Servicio de expediente clínico electrónico', 'Datos y aplicaciones', 'OA-01'],
            ['BB-02', 'Servicio de identificación única de pacientes', 'Datos', 'OA-01, OA-02'],
            ['BB-03', 'Servicio de gestión de citas y flujo de atención', 'Negocio y aplicaciones', 'OA-02'],
            ['BB-04', 'Servicio de identidad, control de acceso y auditoría', 'Tecnología y datos', 'OA-03'],
            ['BB-05', 'Servicio de interoperabilidad sectorial', 'Aplicaciones y tecnología', 'OA-04'],
            ['BB-06', 'Servicio de indicadores y analítica', 'Datos y aplicaciones', 'OA-07'],
            ['BB-07', 'Plataforma de capacitación', 'Aplicaciones', 'OA-06'],
            [
              'BB-08',
              'Infraestructura resiliente (cómputo, respaldo, energía y conectividad)',
              'Tecnología',
              'OA-01 a OA-07',
            ],
          ],
        },
      ],
    },
    {
      id: 'dominios',
      kicker: 'Arquitectura',
      title: 'AS-IS y TO-BE por dominio',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'En TOGAF el AS-IS se denomina arquitectura base y el TO-BE, arquitectura objetivo. En la Fase A ambas se presentan en versión 0.1 para los cuatro dominios y se detallan en las Fases B, C y D. De la comparación se derivan los siete objetivos de arquitectura.',
        },
        {
          kind: 'table',
          number: 'Tabla 26',
          caption: 'Resumen de las arquitecturas base y objetivo v0.1 por dominio',
          columns: ['Dominio', 'Arquitectura base v0.1 (situación actual)', 'Arquitectura objetivo v0.1 (situación deseada)'],
          wide: true,
          rows: [
            [
              strong('Negocio'),
              'Procesos organizados por servicio; el paciente repite trámites en admisión, laboratorio y farmacia; registros en papel y en sistemas separados; indicadores elaborados manualmente.',
              'Cadena de atención de consulta externa centrada en el paciente, con una sola admisión, citas programadas, órdenes y resultados en línea y seguimiento de indicadores automático.',
            ],
            [
              strong('Datos'),
              'Historia clínica física y registros clínicos fragmentados; posibles duplicados de pacientes; sin clasificación de sensibilidad ni dueños de datos.',
              'Expediente clínico único con identificador único de paciente; entidades maestras (paciente, profesional, unidad, servicio, medicamento) con dueño y reglas de calidad; clasificación de sensibilidad en cuatro niveles.',
            ],
            [
              strong('Aplicaciones'),
              'Sistemas sectoriales probables, por verificar en el inventario (BR-06): HIS-MINSA, aplicativo de registro de prestaciones del SIS, SISMED, SIGA y SIAF, NotiSP, RefCon y el sistema hospitalario del proveedor actual.',
              'Portafolio integrado: Expediente Clínico Electrónico Único, gestión de citas, tablero de indicadores, plataforma de capacitación y servicio de interoperabilidad, conectados mediante interfaces versionadas.',
            ],
            [
              strong('Tecnología'),
              'Servidores físicos limitados, almacenamiento disperso, red sin segmentar, conectividad externa limitada, sin plan formal de respaldo ni protección eléctrica suficiente.',
              'Servidores virtualizados y consolidados, almacenamiento centralizado con respaldo local y externo, red segmentada con prioridad para el tráfico clínico, enlace redundante, alimentación ininterrumpida para equipos críticos y modo de contingencia ante caídas.',
            ],
          ],
          note: 'Los sistemas de la arquitectura base son los que suelen utilizar los establecimientos públicos de salud del Perú; su existencia, versión y uso real deben confirmarse durante el levantamiento del inventario.',
        },
        {
          kind: 'figure',
          number: 'Figura 6',
          caption: 'Vista por capas de los cuatro dominios: arquitectura actual (AS-IS)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-06-capas-asis.jpg',
            thumb: '/img/a01/thumbs/figura-06-capas-asis.jpg',
            alt: 'Vista por capas de la arquitectura actual: negocio, datos, aplicaciones y tecnología del Hospital de Tingo María, con los sistemas y registros existentes.',
            ratio: '2752 / 1536',
          },
          note: 'Los sistemas y los datos aparecen aislados: la ausencia de conexiones entre aplicaciones es el problema central.',
        },
        {
          kind: 'figure',
          number: 'Figura 7',
          caption: 'Vista por capas de los cuatro dominios: arquitectura objetivo (TO-BE)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-07-capas-tobe.jpg',
            thumb: '/img/a01/thumbs/figura-07-capas-tobe.jpg',
            alt: 'Vista por capas de la arquitectura objetivo: negocio, datos, aplicaciones y tecnología integrados alrededor del Expediente Clínico Electrónico Único y del servicio de interoperabilidad.',
            ratio: '2752 / 1536',
          },
          note: 'Todo converge en el Expediente Clínico Electrónico Único y sale al sector por un solo servicio de interoperabilidad.',
        },
        { kind: 'h3', text: 'Objetivos de arquitectura' },
        {
          kind: 'table',
          number: 'Tabla 27',
          caption: 'Objetivos de arquitectura y su relación con las metas de negocio',
          columns: ['Código', 'Objetivo de arquitectura', 'Meta de negocio', 'Impulsor que atiende'],
          wide: true,
          rows: [
            [
              'OA-01',
              'Implantar un expediente clínico electrónico único, accesible y completo por paciente',
              'BG-001',
              'IC-01, IC-05',
            ],
            ['OA-02', 'Reducir el tiempo de espera en consulta externa', 'BG-002', 'IC-06'],
            [
              'OA-03',
              'Proteger los datos clínicos mediante control de acceso por rol, cifrado y auditoría',
              'BG-001',
              'IC-03',
            ],
            [
              'OA-04',
              'Habilitar la interoperabilidad con la DIRESA, el MINSA y el SIS',
              'BG-004',
              'IC-04, IC-09',
            ],
            [
              'OA-05',
              'Formalizar y poner en operación la función de arquitectura empresarial',
              'BG-004',
              'IC-08',
            ],
            [
              'OA-06',
              'Disponer de una plataforma de capacitación y aprendizaje para el personal de salud',
              'BG-003',
              'IC-02',
            ],
            [
              'OA-07',
              'Disponer de un tablero de control con los indicadores estratégicos',
              'BG-004',
              'IC-02, IC-04',
            ],
          ],
        },
      ],
    },
    {
      id: 'escenario',
      kicker: 'Escenario',
      title: 'EB-01: consulta externa antes y después',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El escenario de negocio es una técnica que TOGAF recomienda en la Fase A para descubrir requisitos a partir de una situación real. El escenario EB-01 describe el entorno, los actores, el proceso actual y el objetivo, los objetivos SMART y el resultado esperado.',
        },
        { kind: 'h3', text: 'Entorno' },
        {
          kind: 'p',
          text: 'Entorno de negocio: alta demanda en horario de mañana, personal administrativo limitado, pacientes provenientes de zonas rurales que viajan varias horas y prestaciones financiadas en gran parte por el SIS.',
        },
        {
          kind: 'p',
          text: 'Entorno técnico: estaciones de trabajo con antigüedad variable, red interna sin segmentar, conectividad externa limitada y cortes de energía ocasionales durante la temporada de lluvias.',
        },
        {
          kind: 'table',
          number: 'Tabla 29',
          caption: 'Actores del escenario EB-01',
          columns: ['Actor', 'Tipo', 'Rol en el escenario'],
          wide: true,
          rows: [
            ['Paciente', 'Humano', 'Solicita y recibe la atención'],
            ['Personal de admisión y citas', 'Humano', 'Identifica al paciente y asigna la cita'],
            ['Personal de enfermería (triaje)', 'Humano', 'Registra signos vitales y prioridad'],
            [
              'Médico',
              'Humano',
              'Consulta la historia, registra el diagnóstico, emite órdenes y receta',
            ],
            ['Personal de laboratorio', 'Humano', 'Procesa la orden y registra el resultado'],
            ['Personal de farmacia', 'Humano', 'Dispensa según la receta electrónica'],
            [
              'Expediente Clínico Electrónico Único',
              'Sistema',
              'Concentra el registro de toda la atención',
            ],
            [
              'Servicio de interoperabilidad',
              'Sistema',
              'Envía la prestación al SIS y la información requerida por el sector',
            ],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 30',
          caption: 'Comparación del proceso actual y el proceso objetivo de consulta externa',
          columns: ['Etapa', 'Proceso actual', 'Proceso objetivo'],
          wide: true,
          rows: [
            [
              '1. Admisión',
              'Fila presencial; búsqueda de la historia física',
              'Cita programada; identificación única con el DNI; historia disponible al instante',
            ],
            [
              '2. Triaje',
              'Registro en formato de papel',
              'Registro de signos vitales directamente en el expediente',
            ],
            [
              '3. Consulta',
              'Médico sin resultados previos a la vista',
              'Médico con antecedentes, resultados y atenciones previas en una sola pantalla',
            ],
            [
              '4. Órdenes',
              'Orden escrita que el paciente lleva al laboratorio',
              'Orden electrónica que llega directamente al laboratorio',
            ],
            [
              '5. Resultados',
              'Resultado impreso que el paciente debe recoger',
              'Resultado registrado en el expediente y visible para el médico',
            ],
            [
              '6. Receta y dispensación',
              'Receta manuscrita; datos repetidos en farmacia',
              'Receta electrónica; farmacia dispensa sin volver a registrar datos',
            ],
            [
              '7. Registro de la prestación',
              'Digitación posterior para el reporte al SIS',
              'Registro generado automáticamente a partir de la atención',
            ],
          ],
        },
        {
          kind: 'figure',
          number: 'Figura 8',
          caption: 'Proceso de atención en consulta externa EB-01: situación actual (AS-IS)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-08-bpmn-asis.jpg',
            thumb: '/img/a01/thumbs/figura-08-bpmn-asis.jpg',
            alt: 'Diagrama BPMN del proceso actual de consulta externa, con ocho carriles y el paciente trasladando órdenes, resultados y recetas entre servicios.',
            ratio: '3168 / 1344',
          },
          note: 'El paciente actúa como mensajero entre consultorio, laboratorio y farmacia; el examen se repite si no hay resultados previos.',
        },
        {
          kind: 'figure',
          number: 'Figura 9',
          caption: 'Proceso de atención en consulta externa EB-01: situación objetivo (TO-BE)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-09-bpmn-tobe.jpg',
            thumb: '/img/a01/thumbs/figura-09-bpmn-tobe.jpg',
            alt: 'Diagrama BPMN del proceso objetivo de consulta externa, con ocho carriles, orden y resultados electrónicos y reporte automático al SIS.',
            ratio: '3168 / 1344',
          },
          note: 'Los resultados anteriores siempre están en el expediente; el reporte al SIS y al MINSA lo genera el sistema.',
        },
        {
          kind: 'stats',
          items: [
            { value: '8', label: 'carriles' },
            { value: '9→0', label: 'documentos en papel' },
            { value: '5→1', label: 'registros por paciente' },
            { value: '3→0', label: 'documentos que traslada el paciente' },
            { value: '21→0', label: 'tareas con problemas' },
            { value: '0→10', label: 'tareas automáticas' },
          ],
        },
        {
          kind: 'p',
          text: 'Flujo objetivo: cita programada → admisión con DNI → triaje → consulta médica → orden electrónica de laboratorio → resultado en el expediente → receta electrónica → dispensación → registro automático de la prestación.',
        },
        { kind: 'h3', text: 'Objetivos del escenario (SMART)' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Reducir el tiempo entre la llegada del paciente y el inicio de la consulta a 30 minutos o menos en un plazo de 24 meses.',
            'Lograr que el 95 % de las consultas externas tengan registro completo en el expediente electrónico en un plazo de 24 meses.',
            'Eliminar la repetición de datos personales del paciente entre admisión, laboratorio y farmacia al finalizar la primera implantación.',
          ],
        },
        { kind: 'h3', text: 'Resultado esperado' },
        {
          kind: 'p',
          text: 'El paciente realiza su atención en menos tiempo y sin repetir trámites; el médico decide con información completa; el hospital evita exámenes repetidos y registra todas las prestaciones; y la Dirección obtiene indicadores sin trabajo manual. El escenario debe ser validado por la Dirección Asistencial y por al menos dos jefaturas médicas antes del cierre de la fase.',
        },
      ],
    },
    {
      id: 'valor',
      kicker: 'Valor',
      title: 'Beneficios, KPI y caso de negocio',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El paso 9 de la Fase A pide expresar el valor que la arquitectura entregará a cada interesado y definir cómo se medirá. Cada KPI tiene fórmula, línea base, meta, fuente, frecuencia y responsable: sin línea base no es posible demostrar mejora.',
        },
        {
          kind: 'table',
          number: 'Tabla 31',
          caption: 'Propuesta de valor para los interesados clave',
          columns: ['Interesado', 'Propuesta de valor'],
          wide: true,
          rows: [
            [
              'Pacientes y familiares',
              'Menos tiempo de espera, sin repetir datos, y la seguridad de que su información solo la ve quien debe verla',
            ],
            [
              'Personal médico y de enfermería',
              'Toda la información del paciente en un solo lugar; menos papel y menos exámenes repetidos',
            ],
            [
              'Personal de apoyo y administrativo',
              'Órdenes claras, menos digitación y menos reclamos por demoras',
            ],
            [
              'Dirección Ejecutiva',
              'Cumplimiento normativo demostrable, decisiones basadas en indicadores vigentes y mejor imagen institucional',
            ],
            [
              'Planeamiento y Presupuesto',
              'Inversión priorizada por etapas y vinculada a resultados medibles',
            ],
            [
              'OSI',
              'Un mapa claro de los sistemas, menos soluciones aisladas y menor dependencia de un solo proveedor',
            ],
            ['DIRESA, MINSA y SIS', 'Información oportuna, estandarizada y completa'],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 32',
          caption: 'Indicadores clave de desempeño de la arquitectura objetivo',
          columns: ['KPI', 'Objetivo', 'Fórmula', 'Línea base', 'Meta', 'Fuente y frecuencia', 'Responsable'],
          wide: true,
          rows: [
            [
              'KPI-01',
              'OA-01',
              'Consultas con registro completo en el expediente electrónico ÷ total de consultas × 100',
              '0 % electrónico; completitud en papel por medir mediante auditoría de una muestra (Mes 3)',
              '60 % a 12 meses; 95 % a 24 meses',
              'Auditoría de historias clínicas; trimestral',
              'Dirección Asistencial',
            ],
            [
              'KPI-02',
              'OA-02',
              'Promedio de minutos desde la llegada a admisión hasta el inicio de la consulta',
              'Por medir mediante cronometraje durante dos semanas (Mes 3)',
              '30 minutos o menos a 24 meses',
              'Registro de tiempos; mensual',
              'Jefatura de Consulta Externa',
            ],
            [
              'KPI-03',
              'OA-03',
              'Accesos al expediente con registro de auditoría ÷ total de accesos × 100',
              '0 % (no existe auditoría sistematizada)',
              '100 % desde la puesta en producción',
              'Bitácora de auditoría; mensual',
              'OSI',
            ],
            [
              'KPI-04',
              'OA-04',
              'Número de interfaces sectoriales operativas',
              '0 interfaces automatizadas',
              '1 interfaz a 12 meses; 3 a 24 meses',
              'Catálogo de interfaces; semestral',
              'OSI',
            ],
            [
              'KPI-05',
              'OA-05',
              'Función de arquitectura formalizada (resolución emitida y ARB instalado)',
              'No formalizada',
              'Formalizada al cierre de la Fase A (Mes 2)',
              'Resolución directoral y acta del ARB; única',
              'Dirección Ejecutiva',
            ],
            [
              'KPI-06',
              'OA-06',
              'Horas de capacitación por profesional de salud al año',
              'Por obtener del registro de Recursos Humanos (Mes 2)',
              '40 horas o más',
              'Plataforma de capacitación; semestral',
              'Oficina de Recursos Humanos',
            ],
            [
              'KPI-07',
              'OA-07',
              'Indicadores estratégicos con dato vigente ÷ total de indicadores × 100',
              'Por medir al revisar el último reporte del Plan Operativo Institucional',
              '100 % a 24 meses',
              'Tablero de indicadores; trimestral',
              'Planeamiento y Presupuesto',
            ],
          ],
        },
        {
          kind: 'figure',
          number: 'Figura 10',
          caption: 'Indicadores clave: línea base frente a meta',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-10-kpis.png',
            thumb: '/img/a01/thumbs/figura-10-kpis.jpg',
            alt: 'Tablero de los siete indicadores clave con su línea base y su meta: registro completo, espera, auditoría, interoperabilidad, función de arquitectura, capacitación e indicadores vigentes.',
            ratio: '1672 / 941',
          },
          note: 'KPI-02, KPI-06 y KPI-07 aún no tienen línea base; KPI-05 se cumple en la propia Fase A.',
        },
        { kind: 'h3', text: 'Caso de negocio cualitativo' },
        {
          kind: 'p',
          text: 'La cuantificación económica se realizará en las Fases E y F, cuando se conozcan las alternativas de solución. En esta fase se presenta un caso de negocio cualitativo que permite a la Dirección decidir si continuar.',
        },
        {
          kind: 'table',
          number: 'Tabla 33',
          caption: 'Beneficios y costos esperados',
          columns: ['Categoría', 'Descripción'],
          wide: true,
          rows: [
            [
              strong('Beneficios tangibles'),
              'Menos exámenes repetidos; menos horas de digitación; registro completo de prestaciones para su reporte al SIS; menos tiempo de búsqueda de historias físicas.',
            ],
            [
              strong('Beneficios intangibles'),
              'Mejor experiencia del paciente; decisiones clínicas más seguras; cumplimiento normativo; mejor imagen institucional.',
            ],
            [
              strong('Costos de corto plazo'),
              'Equipo de arquitectura, herramientas de modelado, capacitación en el método y sesiones de gobierno (detalle en A-02).',
            ],
            [
              strong('Costos de largo plazo'),
              'Software clínico, infraestructura, conectividad, protección eléctrica, integración sectorial, capacitación del personal y gestión del cambio (se cuantifican en las Fases D a F).',
            ],
            [
              strong('Costo de no actuar'),
              'Persistencia de tiempos de espera, riesgo de incumplimiento de la protección de datos, pérdida de prestaciones no registradas y dependencia creciente de soluciones aisladas.',
            ],
          ],
        },
      ],
    },
    {
      id: 'riesgos',
      kicker: 'Riesgos',
      title: 'Riesgos de la transformación',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El paso 10 de la Fase A pide identificar los riesgos de la transformación —no solo los del proyecto— y valorarlos en dos momentos: el riesgo inicial, antes de mitigar, y el riesgo residual, después de aplicar la mitigación (The Open Group, 2011, cap. 31). Este registro consolida y reemplaza los riesgos dispersos de la versión 1.0.',
        },
        {
          kind: 'table',
          number: 'Tabla 34',
          caption: 'Registro de riesgos de la transformación',
          columns: ['Código', 'Riesgo', 'Categoría', 'Inicial', 'Mitigación', 'Residual', 'Responsable'],
          wide: true,
          rows: [
            [
              'R-A-01',
              'Resistencia del personal médico a registrar en el sistema por percibirlo como carga adicional',
              'Personas',
              critical('Alto'),
              'Enlace clínico en el equipo; pruebas de usabilidad (PA-05); implantación gradual por consultorio',
              medium('Medio'),
              'Dirección Asistencial',
            ],
            [
              'R-A-02',
              'Cortes de energía y caídas de conectividad interrumpen la atención',
              'Tecnología y entorno',
              critical('Alto'),
              'Alimentación ininterrumpida, operación local sin depender de internet y contingencia en papel',
              medium('Medio'),
              'OSI',
            ],
            [
              'R-A-03',
              'Dependencia del proveedor actual y datos en formato cerrado dificultan la migración',
              'Contractual',
              critical('Alto'),
              'Exigir exportación en formatos abiertos; cláusulas de salida en contratos',
              medium('Medio'),
              'Dirección de Administración',
            ],
            [
              'R-A-04',
              'No se designa formalmente al patrocinador ni se instala el ARB',
              'Gobierno',
              critical('Alto'),
              'Incluirlo como condición previa de A-02; agenda de la sesión constitutiva',
              low('Bajo'),
              'Dirección Ejecutiva',
            ],
            [
              'R-A-05',
              'No se asigna presupuesto para el desarrollo ni para la implementación',
              'Financiero',
              critical('Alto'),
              'Caso de negocio; implementación por etapas; búsqueda de financiamiento regional',
              medium('Medio'),
              'Planeamiento y Presupuesto',
            ],
            [
              'R-A-06',
              'Los objetivos estratégicos no están vigentes y la arquitectura pierde su referencia',
              'Estratégico',
              critical('Alto'),
              'Solicitud formal del instrumento vigente antes de la semana 6',
              low('Bajo'),
              'Planeamiento y Presupuesto',
            ],
            [
              'R-A-07',
              'Rotación del personal y pérdida del conocimiento adquirido',
              'Personas',
              medium('Medio'),
              'Documentación en el Repositorio; transferencia de conocimiento desde el inicio',
              low('Bajo'),
              'Oficina de Recursos Humanos',
            ],
            [
              'R-A-08',
              'Duplicados y errores en los datos de pacientes impiden el expediente único',
              'Datos',
              critical('Alto'),
              'Depuración de datos maestros y validación de identidad con el DNI',
              medium('Medio'),
              'OSI',
            ],
            [
              'R-A-09',
              'La interoperabilidad depende de decisiones de la DIRESA y del MINSA',
              'Externo',
              medium('Medio'),
              'Coordinación temprana mediante oficios; adoptar estándares nacionales vigentes',
              medium('Medio'),
              'Dirección Ejecutiva',
            ],
            [
              'R-A-10',
              'El inventario de sistemas no se levanta y retrasa las Fases C y D',
              'Proyecto',
              critical('Alto'),
              'Enlace de la OSI responsable con fecha comprometida en el ARB',
              low('Bajo'),
              'OSI',
            ],
            [
              'R-A-11',
              'Exposición de datos personales durante el levantamiento de información',
              'Legal',
              medium('Medio'),
              'Acceso solo a información agregada o anonimizada (restricción CN-A-01)',
              low('Bajo'),
              'Arquitecto líder',
            ],
          ],
        },
      ],
    },
    {
      id: 'cierre',
      kicker: 'Cierre',
      title: 'Cronograma, criterios y conclusiones',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'La Fase A se cierra con la aprobación de la Declaración de Trabajo de Arquitectura (A-02) en la semana 8, lo que autoriza el inicio de la Fase B. El cronograma es único y debe replicarse en A-02 y A-03.',
        },
        {
          kind: 'table',
          number: 'Tabla 38',
          caption: 'Cronograma unificado del desarrollo de la arquitectura',
          columns: ['Periodo', 'Fase del ADM', 'Hito de cierre'],
          wide: true,
          rows: [
            [
              'Antes del Mes 1',
              'Fase Preliminar (concluida)',
              'Petición de Trabajo de Arquitectura (D-06) emitida',
            ],
            [
              'Mes 1 (semanas 1 a 4)',
              'Fase A: establecimiento, interesados, metas, capacidades',
              'Interesados y metas validados',
            ],
            [
              'Mes 2 (semanas 5 a 8)',
              'Fase A: alcance, visión, valor, riesgos y Declaración de Trabajo',
              strong('Declaración de Trabajo aprobada por el patrocinador y el ARB (cierre de la Fase A)'),
            ],
            ['Mes 3', 'Fase B: arquitectura de negocio', 'Arquitectura de negocio aprobada'],
            [
              'Mes 3 y Mes 4',
              'Fase C: arquitecturas de datos y aplicaciones',
              'Arquitecturas de sistemas de información aprobadas',
            ],
            ['Mes 4', 'Fase D: arquitectura tecnológica', 'Arquitectura tecnológica aprobada'],
            [
              'Mes 5',
              'Fases E y F: oportunidades, soluciones y planificación de la migración',
              'Hoja de ruta y plan de migración aprobados',
            ],
            [
              'Mes 6',
              'Fase G: gobierno de la implementación',
              'Contratos de arquitectura y plan de gobierno entregados',
            ],
          ],
          note: 'La implementación física de las soluciones se ejecuta después del Mes 6 mediante proyectos propios, bajo el gobierno de la Fase G y la gestión de cambios de la Fase H.',
        },
        { kind: 'h3', text: 'Criterios de cierre de la Fase A' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'La Visión de la Arquitectura (A-01) ha sido validada por los actores clave (INT-02, INT-06 e INT-07) y el escenario EB-01 por la Dirección Asistencial.',
            'Las metas de negocio y los principios han sido confirmados por el ARB.',
            'Los KPI han sido convalidados por la Oficina de Planeamiento y Presupuesto.',
            'El Plan de Comunicaciones (A-03) y la Evaluación de Capacidades (A-04) han sido aprobados por el ARB.',
            'La Declaración de Trabajo de Arquitectura (A-02) ha sido firmada por el patrocinador y aprobada por el ARB, con número de acta.',
          ],
        },
        {
          kind: 'p',
          text: 'Estado actual de la fase: en desarrollo (Mes 1 de la primera iteración del ADM).',
        },
        { kind: 'h3', text: 'Conclusiones' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'El Hospital de Tingo María enfrenta un problema estructural y no solo tecnológico: la información clínica dispersa, la atención organizada por servicios y la ausencia de una función que gobierne el cambio tecnológico afectan directamente su capacidad de prevenir, proteger, recuperar y rehabilitar.',
            'Existen impulsores externos claros para actuar ahora, principalmente el marco nacional de historias clínicas electrónicas (Ley N.° 30024), la protección de datos sensibles (Ley N.° 29733), las obligaciones de gobierno digital (D. Leg. N.° 1412) y la dependencia del financiamiento del SIS respecto del registro de prestaciones.',
            'La visión propone un Expediente Clínico Electrónico Único como eje de una arquitectura centrada en el paciente, segura, interoperable y resiliente frente a las condiciones de la selva, gobernada por una función de arquitectura formal.',
            'La evaluación de preparación muestra que el hospital necesita y quiere el cambio, pero aún no está listo para ejecutarlo. Por ello, la primera iteración se limita a la consulta externa y las carencias de patrocinio, gobierno y financiamiento se convierten en condiciones previas de la Declaración de Trabajo.',
            'El éxito se medirá con siete KPI con línea base y meta, y los riesgos de la transformación se gestionarán con un registro único que distingue el riesgo inicial del residual.',
          ],
        },
        {
          kind: 'quote',
          text: '“Una sola historia clínica digital por paciente, que solo ve quien debe verla y que se comunica sola con el sector.”',
        },
        { kind: 'h3', text: 'Referencias' },
        {
          kind: 'refs',
          items: [
            'Congreso de la República del Perú. (2011). Ley N.° 29733, Ley de Protección de Datos Personales. Diario Oficial El Peruano.',
            'Congreso de la República del Perú. (2013). Ley N.° 30024, Ley que crea el Registro Nacional de Historias Clínicas Electrónicas. Diario Oficial El Peruano.',
            'Josey, A. (2011). TOGAF® versión 9.1: Guía de bolsillo. Van Haren Publishing.',
            'Poder Ejecutivo del Perú. (2018). Decreto Legislativo N.° 1412, que aprueba la Ley de Gobierno Digital. Diario Oficial El Peruano.',
            'The Open Group. (2011). TOGAF® Version 9.1. Van Haren Publishing.',
          ],
        },
        { kind: 'cta' },
      ],
    },
  ],
};

export const A01_SECTIONS = A01.sections.map(({ id, title }) => ({ id, title }));
