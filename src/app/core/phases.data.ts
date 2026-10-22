export interface Phase {
  readonly id: string;
  readonly numeral: string;
  readonly order: number;
  readonly name: string;
  readonly detail?: string;
  readonly summary: string;
}

export const PHASES: readonly Phase[] = [
  {
    id: 'preliminar',
    numeral: 'P',
    order: 0,
    name: 'Fase Preliminar',
    summary:
      'Establecer la capacidad de arquitectura del hospital: organización, principios y marco de trabajo.',
  },
  {
    id: 'a',
    numeral: 'A',
    order: 1,
    name: 'Visión de la Arquitectura',
    summary: 'Definir la visión de la arquitectura, su alcance y el plan de trabajo aprobado.',
  },
  {
    id: 'b',
    numeral: 'B',
    order: 2,
    name: 'Arquitectura de Negocio',
    summary: 'Diseñar la arquitectura de negocio en su estado actual (AS-IS) y objetivo (TO-BE).',
  },
  {
    id: 'c',
    numeral: 'C',
    order: 3,
    name: 'Arquitecturas de Sistemas de Información',
    detail: 'Datos y Aplicaciones',
    summary: 'Diseñar las arquitecturas de datos y de aplicaciones, AS-IS y TO-BE.',
  },
  {
    id: 'd',
    numeral: 'D',
    order: 4,
    name: 'Arquitectura Tecnológica',
    summary: 'Definir la arquitectura tecnológica que sustenta los sistemas de información.',
  },
  {
    id: 'e',
    numeral: 'E',
    order: 5,
    name: 'Oportunidades y Soluciones',
    summary: 'Identificar oportunidades y soluciones para cerrar las brechas de arquitectura.',
  },
  {
    id: 'f',
    numeral: 'F',
    order: 6,
    name: 'Planificación de la Migración',
    summary: 'Priorizar y planificar la hoja de ruta de implementación por etapas.',
  },
  {
    id: 'g',
    numeral: 'G',
    order: 7,
    name: 'Gobierno de la Implementación',
    summary: 'Establecer el gobierno de la implementación de la arquitectura objetivo.',
  },
  {
    id: 'h',
    numeral: 'H',
    order: 8,
    name: 'Gestión del Cambio de la Arquitectura',
    summary: 'Gestionar el cambio de la arquitectura de forma continua y controlada.',
  },
];

export function phaseLabel(phase: Phase): string {
  return phase.id === 'preliminar' ? 'Fase Preliminar' : `Fase ${phase.numeral}`;
}

export function phaseHeading(phase: Phase): string {
  return phase.detail ? `${phase.name} (${phase.detail})` : phase.name;
}

export function findPhase(id: string | null | undefined): Phase | undefined {
  return PHASES.find((phase) => phase.id === id);
}

export function neighbourPhases(phase: Phase): {
  previous?: Phase;
  next?: Phase;
} {
  return {
    previous: PHASES.find((item) => item.order === phase.order - 1),
    next: PHASES.find((item) => item.order === phase.order + 1),
  };
}
