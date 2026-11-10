export interface PhaseMeta {
  readonly label: string;
  readonly value: string;
}

export interface PhaseSection {
  readonly id: string;
  readonly label: string;
}

export interface PhaseOutcome {
  readonly title: string;
  readonly description: string;
}

export interface PhaseHeadings {
  readonly outcomes: string;
  readonly steps: string;
  readonly togaf: string;
  readonly deliverables: string;
}

export interface PhaseStep {
  readonly number: number;
  readonly title: string;
  readonly description: string;
  readonly points: readonly string[];
}

export interface TogafStep {
  readonly number: number;
  readonly label: string;
}

export type DeliverableStatus = 'available' | 'planned';

export interface DeliverableDocument {
  readonly version: string;
  readonly date: string;
  readonly pages: number;
  readonly file: {
    readonly name: string;
    readonly path: string;
    readonly size: string;
  };
}

export interface PhaseDeliverable {
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly status: DeliverableStatus;
  readonly summaryAvailable: boolean;
  readonly document?: DeliverableDocument;
}

export interface PhaseContent {
  readonly english: string;
  readonly headings: PhaseHeadings;
  readonly objective: string;
  readonly simple: {
    readonly question: string;
    readonly text: string;
  };
  readonly meta: readonly PhaseMeta[];
  readonly sections: readonly PhaseSection[];
  readonly outcomes: readonly PhaseOutcome[];
  readonly steps: readonly PhaseStep[];
  readonly togafSteps: readonly TogafStep[];
  readonly deliverables: readonly PhaseDeliverable[];
  readonly exitCriteria: readonly string[];
  readonly notes: readonly string[];
}

export const PHASE_CONTENT: Readonly<Record<string, PhaseContent>> = {
  a: {
    english: 'Architecture Vision',
    headings: {
      outcomes: 'Cuatro resultados al cerrar la fase',
      steps: 'Siete pasos para construir la vision',
      togaf: 'Los once pasos de la Fase A en TOGAF 9.1',
      deliverables: 'Los cinco entregables de la fase',
    },
    objective:
      'Definir una visión clara y de alto nivel de la arquitectura objetivo, establecer el alcance del trabajo y conseguir el compromiso de los principales stakeholders antes de desarrollar en detalle las arquitecturas de negocio, datos, aplicaciones y tecnología.',
    simple: {
      question:
        '¿Qué queremos transformar, por qué lo queremos transformar y cómo debería verse la situación futura?',
      text: 'La Fase A es la foto de alto nivel del hospital cuando la arquitectura esté implementada, y del valor que eso trae. Sirve para que la Dirección y el personal se pongan de acuerdo antes de invertir esfuerzo en el detalle de las Fases B, C y D.',
    },
    meta: [
      { label: 'Entrada', value: 'Fase Preliminar: metas, impulsores y principios' },
      { label: 'Salidas', value: 'Cinco entregables (A-01 a A-05)' },
      { label: 'Aprueba', value: 'Dirección Ejecutiva y Architecture Review Board' },
      { label: 'Alimenta', value: 'Fases B, C y D, y la Gestión de Requisitos' },
    ],
    sections: [
      { id: 'simple', label: 'En términos sencillos' },
      { id: 'resultados', label: 'Qué se busca lograr' },
      { id: 'pasos', label: 'Siete pasos en el hospital' },
      { id: 'togaf', label: 'Los once pasos de TOGAF 9.1' },
      { id: 'entregables', label: 'Entregables de la fase' },
      { id: 'cierre', label: 'Criterios para cerrar la fase' },
    ],
    outcomes: [
      {
        title: 'Visión de alto nivel',
        description:
          'Una imagen compartida de la arquitectura objetivo, comprensible para la Dirección y para el personal asistencial.',
      },
      {
        title: 'Alcance del trabajo',
        description:
          'Qué procesos, áreas y capacidades entran en esta iteración y qué queda explícitamente fuera del proyecto.',
      },
      {
        title: 'Compromiso de los interesados',
        description:
          'Acuerdos con Dirección, médicos, enfermería, administración, TI y pacientes antes de invertir en el detalle.',
      },
      {
        title: 'Aprobación para continuar',
        description:
          'Respaldo formal para pasar a las Fases B, C y D con un mandato y un presupuesto claros.',
      },
    ],
    steps: [
      {
        number: 1,
        title: 'Comprender la situación y la necesidad de cambio',
        description:
          'Reconocer el punto de partida: qué ocurre hoy en el hospital y por qué es necesario transformarlo.',
        points: ['Problemas actuales', 'Necesidades del hospital', 'Drivers del cambio'],
      },
      {
        number: 2,
        title: 'Identificar a los interesados',
        description:
          'Reconocer a todas las personas y entidades queinfluyen en la arquitectura o sofre sus efectos, y recoger sus preocupaciones.',
        points: [
          'Dirección',
          'Médicos',
          'Enfermería',
          'Administración',
          'TI',
          'Pacientes',
          'Otras entidades involucradas',
        ],
      },
      {
        number: 3,
        title: 'Definir el alcance',
        description:
          'Delimitar el perímetro del trabajo para evitar que la iteración crezca sin control.',
        points: ['Áreas, procesos y capacidades consideradas', 'Qué queda fuera del proyecto'],
      },
      {
        number: 4,
        title: 'Definir los objetivos de arquitectura',
        description:
          'Declarar qué se pretende conseguir mediante la arquitectura empresarial, de forma verificable.',
        points: ['Resultados esperados por la organización', 'Alineación con las metas de negocio'],
      },
      {
        number: 5,
        title: 'Construir la Visión de la Arquitectura',
        description:
          'Representar de manera conceptual y de alto nivel cómo debería funcionar el hospital en el futuro.',
        points: ['Situación objetivo en los cuatro dominios', 'Escenario de negocio de referencia'],
      },
      {
        number: 6,
        title: 'Determinar beneficios, riesgos y restricciones',
        description:
          'Anticipar el valor que se espera obtener y las dificultades que podrían aparecer durante el camino.',
        points: ['Valor esperado', 'Dificultades posibles', 'Restricciones y supuestos'],
      },
      {
        number: 7,
        title: 'Obtener aprobación para continuar',
        description:
          'Conseguir el respaldo de los responsables y stakeholders para pasar a las siguientes fases.',
        points: [
          'Revisión por el Architecture Review Board',
          'Aprobación de la Declaración de Trabajo de Arquitectura',
        ],
      },
    ],
    togafSteps: [
      { number: 1, label: 'Establecer el proyecto de arquitectura' },
      { number: 2, label: 'Identificar interesados, preocupaciones y requisitos' },
      { number: 3, label: 'Confirmar metas de negocio e impulsores' },
      { number: 4, label: 'Evaluar las capacidades del negocio' },
      { number: 5, label: 'Definir el alcance' },
      { number: 6, label: 'Confirmar los principios de arquitectura' },
      { number: 7, label: 'Desarrollar la Visión de la Arquitectura' },
      { number: 8, label: 'Definir la arquitectura objetivo (v0.1)' },
      { number: 9, label: 'Definir el valor y los indicadores' },
      { number: 10, label: 'Identificar riesgos y medidas de mitigación' },
      { number: 11, label: 'Elaborar la Declaración de Trabajo y aprobar' },
    ],
    deliverables: [
      {
        code: 'A-01',
        title: 'Visión de la Arquitectura',
        description:
          'Sintetiza la visión, el alcance, los interesados, las brechas detectadas y el valor esperado de la transformación.',
        status: 'available',
        summaryAvailable: true,
      },
      {
        code: 'A-02',
        title: 'Declaración de Trabajo de Arquitectura',
        description:
          'Fija los acuerdos de alcance, enfoque, roles, cronograma y criterios de aceptación del trabajo de arquitectura.',
        status: 'available',
        summaryAvailable: true,
        document: {
          version: '2.0',
          date: '20/10/2026',
          pages: 28,
          file: {
            name: 'A-02_Declaracion_de_Trabajo_de_Arquitectura.pdf',
            path: '/docs/A-02_Declaracion_de_Trabajo_de_Arquitectura.pdf',
            size: '553 KB',
          },
        },
      },
      {
        code: 'A-03',
        title: 'Plan de Comunicaciones',
        description:
          'Define cómo se informa y se involucra a los interesados durante todo el ciclo de desarrollo de la arquitectura.',
        status: 'available',
        summaryAvailable: true,
        document: {
          version: '2.0',
          date: '20/10/2026',
          pages: 20,
          file: {
            name: 'A-03_Plan_de_Comunicaciones.pdf',
            path: '/docs/A-03_Plan_de_Comunicaciones.pdf',
            size: '442 KB',
          },
        },
      },
      {
        code: 'A-04',
        title: 'Evaluación de Capacidades',
        description:
          'Diagnostica la capacidad actual del hospital para ejecutar la transformación y señala las brechas que cerrar.',
        status: 'available',
        summaryAvailable: true,
        document: {
          version: '2.0',
          date: '20/10/2026',
          pages: 26,
          file: {
            name: 'A-04_Evaluacion_de_Capacidades.pdf',
            path: '/docs/A-04_Evaluacion_de_Capacidades.pdf',
            size: '556 KB',
          },
        },
      },
      {
        code: 'A-05',
        title: 'Definición de la Arquitectura',
        description:
          'Primera definición formal de la arquitectura objetivo en los dominios de negocio, datos, aplicaciones y tecnología.',
        status: 'available',
        summaryAvailable: true,
        document: {
          version: '2.0 · arquitectura 0.1',
          date: '20/10/2026',
          pages: 30,
          file: {
            name: 'A-05_Definicion_de_la_Arquitectura.pdf',
            path: '/docs/A-05_Definicion_de_la_Arquitectura.pdf',
            size: '837 KB',
          },
        },
      },
    ],
    exitCriteria: [
      'La visión de la arquitectura y el alcance están validados por la Dirección.',
      'Los interesados clave están identificados, con sus preocupaciones y requisitos de alto nivel.',
      'Beneficios, riesgos y restricciones están documentados y son comprensibles para todos.',
      'La Declaración de Trabajo de Arquitectura (A-02) está aprobada y habilita el inicio de la Fase B.',
    ],
    notes: [
      'Los cinco entregables de la fase cuentan con resumen completo y documento formal disponible para consulta.',
      'Cada entregable tiene un dueño único dentro de la fase, para evitar duplicidades entre documentos.',
    ],
  },
  b: {
    english: 'Business Architecture',
    headings: {
      outcomes: 'Cuatro salidas clave de la Fase B',
      steps: 'Nueve pasos para definir la arquitectura de negocio',
      togaf: 'Los nueve pasos de la Fase B en TOGAF 9.1',
      deliverables: 'Entregables de la fase',
    },
    objective:
      'Desarrollar la arquitectura de negocio en su estado actual (AS-IS) y objetivo (TO-BE), validando metas, objetivos, impulsores y principios, y definiendo los componentes candidatos de la hoja de ruta para la transformacion centrada en el paciente.',
    simple: {
      question: 'Como se atiende hoy al paciente y como queremos atenderlo en 24 meses?',
      text: 'La Fase B convierte la vision aprobada en una definicion verificable del negocio: metas y objetivos, principios de negocio y de arquitectura, procesos actuales y objetivo, escenarios, brechas, arquitectura de transicion y componentes candidatos del Plan de Itinerario. Su salida principal es el Documento de Definicion de la Arquitectura de Negocio (B-01) y su Especificacion de Requisitos (B-02).',
    },
    meta: [
      { label: 'Entrada', value: 'A-01, A-02, A-04 y A-05 aprobados' },
      { label: 'Salidas', value: 'B-01, B-02 y ADD preliminar' },
      { label: 'Aprueba', value: 'Architecture Review Board (ARB) y Direccion Ejecutiva' },
      { label: 'Alimenta', value: 'Fases C, D, E y F, y la Gestion de Requisitos' },
    ],
    sections: [
      { id: 'simple', label: 'En terminos sencillos' },
      { id: 'resultados', label: 'Que se busca lograr' },
      { id: 'pasos', label: 'Nueve pasos en el hospital' },
      { id: 'togaf', label: 'Los nueve pasos de TOGAF 9.1' },
      { id: 'entregables', label: 'Entregables de la fase' },
      { id: 'cierre', label: 'Criterios para cerrar la fase' },
    ],
    outcomes: [
      {
        title: 'Principios de negocio validados',
        description:
          'Cinco principios de negocio (PN-01 a PN-05) validados con la Direccion Ejecutiva y la Direccion Asistencial.',
      },
      {
        title: 'Principios de arquitectura elaborados',
        description:
          'Los ocho principios de arquitectura (PA-01 a PA-08) se elaboran para el dominio de negocio con verificacion.',
      },
      {
        title: 'ADD preliminar con arquitectura base y objetivo',
        description:
          'Version preliminar del Documento de Definicion de la Arquitectura con las arquitecturas de negocio base y objetivo.',
      },
      {
        title: 'Declaracion de Trabajo actualizada si es necesario',
        description: 'A-02 v2.1 registra el cierre de la Fase B sin cambio de alcance.',
      },
    ],
    steps: [
      {
        number: 1,
        title: 'Validar metas, objetivos, impulsores y principios',
        description:
          'Confirmar con la Direccion las metas BG y los objetivos OA, y validar los principios PN y PA.',
        points: ['Metas y objetivos', 'Principios de negocio', 'Principios de arquitectura'],
      },
      {
        number: 2,
        title: 'Definir el alcance de la arquitectura de negocio',
        description: 'Delimitar procesos, areas y capacidades de la iteracion.',
        points: ['Alcance', 'Fuera de alcance'],
      },
      {
        number: 3,
        title: 'Modelar la arquitectura de negocio de linea base (AS-IS)',
        description: 'Describir como se atiende hoy al paciente en consulta externa.',
        points: ['Proceso EB-01 AS-IS', 'Cadena de valor actual'],
      },
      {
        number: 4,
        title: 'Modelar la arquitectura de negocio objetivo (TO-BE)',
        description: 'Disenar como se quiere atender en 24 meses.',
        points: ['Proceso EB-01 TO-BE', 'Cadena de valor objetivo'],
      },
      {
        number: 5,
        title: 'Desarrollar los escenarios EB-02 y EB-03',
        description: 'Validar la arquitectura objetivo con los actores y flujos.',
        points: ['EB-02 consulta de historia clinica', 'EB-03 registro y envio al SIS'],
      },
      {
        number: 6,
        title: 'Analizar brechas de negocio',
        description:
          'Identificar brechas de personas, procesos, herramientas, informacion, medicion, financiamiento e instalaciones.',
        points: ['Brechas BR-01 a BR-08', 'Priorizacion'],
      },
      {
        number: 7,
        title: 'Evaluar el impacto en el panorama de arquitectura',
        description: 'Resolver impactos en las arquitecturas de datos, aplicaciones y tecnologia.',
        points: ['Impacto', 'Dependencias'],
      },
      {
        number: 8,
        title: 'Definir la arquitectura de transicion y componentes candidatos',
        description: 'Estados intermedios y componentes del Plan de Itinerario.',
        points: ['Estados de transicion', 'Diez lineas de negocio'],
      },
      {
        number: 9,
        title: 'Actualizar la Declaracion de Trabajo y cerrar la Fase B',
        description: 'Emitir A-02 v2.1 y obtener la aprobacion del ARB.',
        points: ['A-02 v2.1', 'Criterios de cierre'],
      },
    ],
    togafSteps: [
      { number: 1, label: 'Seleccionar modelos de referencia, puntos de vista y herramientas' },
      { number: 2, label: 'Desarrollar la arquitectura de negocio de linea base' },
      { number: 3, label: 'Desarrollar la arquitectura de negocio objetivo' },
      { number: 4, label: 'Realizar el analisis de brechas' },
      { number: 5, label: 'Definir los componentes candidatos del Plan de Itinerario' },
      { number: 6, label: 'Resolver los impactos en el panorama de arquitectura' },
      { number: 7, label: 'Realizar la revision formal con los interesados' },
      { number: 8, label: 'Finalizar la arquitectura de negocio' },
      { number: 9, label: 'Crear el Documento de Definicion de la Arquitectura (ADD)' },
    ],
    deliverables: [
      {
        code: 'B-01',
        title: 'Definicion de la Arquitectura de Negocio',
        description:
          'Define la arquitectura de negocio base y objetivo, principios, escenarios, brechas, transicion y componentes candidatos.',
        status: 'available',
        summaryAvailable: true,
        document: {
          version: '1.0',
          date: '05/11/2026',
          pages: 80,
          file: {
            name: 'B-01_Definicion_de_la_Arquitectura_de_Negocio.pdf',
            path: '/docs/B-01_Definicion_de_la_Arquitectura_de_Negocio.pdf',
            size: '1.5 MB',
          },
        },
      },
      {
        code: 'B-02',
        title: 'Especificacion de Requisitos de Arquitectura de Negocio',
        description:
          'Especifica los requisitos verificables de la arquitectura de negocio con criterios de aceptacion y trazabilidad.',
        status: 'available',
        summaryAvailable: true,
        document: {
          version: '1.0',
          date: '05/11/2026',
          pages: 38,
          file: {
            name: 'B-02_Especificacion_de_Requisitos_de_Arquitectura_de_Negocio.pdf',
            path: '/docs/B-02_Especificacion_de_Requisitos_de_Arquitectura_de_Negocio.pdf',
            size: '0.5 MB',
          },
        },
      },
    ],
    exitCriteria: [
      'La arquitectura de negocio base y objetivo estan definidas y validadas.',
      'Los principios de negocio y de arquitectura estan aprobados.',
      'Las brechas y el impacto en el panorama estan documentados.',
      'La arquitectura de transicion y los componentes candidatos estan definidos.',
      'A-02 v2.1 esta emitida y la Fase B esta cerrada por el ARB.',
    ],
    notes: [
      'B-01 y B-02 cuentan con resumen completo y documento formal disponible para consulta.',
      'B-02 complementa a B-01 y no lo sustituye.',
    ],
  },
};

export function findPhaseContent(id: string | null | undefined): PhaseContent | undefined {
  return id ? PHASE_CONTENT[id] : undefined;
}

export function findDeliverable(
  phaseId: string | null | undefined,
  code: string | null | undefined,
): PhaseDeliverable | undefined {
  const content = findPhaseContent(phaseId);
  if (!content || !code) {
    return undefined;
  }

  return content.deliverables.find(
    (deliverable) => deliverable.code.toLowerCase() === code.toLowerCase(),
  );
}
