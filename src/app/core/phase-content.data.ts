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
    objective:
      'Definir una visión clara y de alto nivel de la arquitectura objetivo, establecer el alcance del trabajo y conseguir el compromiso de los principales stakeholders antes de desarrollar en detalle las arquitecturas de negocio, datos, aplicaciones y tecnología.',
    simple: {
      question: '¿Qué queremos transformar, por qué lo queremos transformar y cómo debería verse la situación futura?',
      text:
        'La Fase A es la foto de alto nivel del hospital cuando la arquitectura esté implementada, y del valor que eso trae. Sirve para que la Dirección y el personal se pongan de acuerdo antes de invertir esfuerzo en el detalle de las Fases B, C y D.',
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
        points: [
          'Áreas, procesos y capacidades consideradas',
          'Qué queda fuera del proyecto',
        ],
      },
      {
        number: 4,
        title: 'Definir los objetivos de arquitectura',
        description:
          'Declarar qué se pretende conseguir mediante la arquitectura empresarial, de forma verificable.',
        points: [
          'Resultados esperados por la organización',
          'Alineación con las metas de negocio',
        ],
      },
      {
        number: 5,
        title: 'Construir la Visión de la Arquitectura',
        description:
          'Representar de manera conceptual y de alto nivel cómo debería funcionar el hospital en el futuro.',
        points: [
          'Situación objetivo en los cuatro dominios',
          'Escenario de negocio de referencia',
        ],
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
