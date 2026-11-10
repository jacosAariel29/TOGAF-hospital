import { type A01Document } from './a01.data';

export const B02: A01Document = {
  code: 'B-02',
  title: 'Especificaci\u00f3n de Requisitos de Arquitectura de Negocio',
  english: 'Business Architecture Requirements Specification',
  version: '1.0',
  date: '05/11/2026',
  pages: 38,
  status: 'Borrador para revisi\u00f3n',
  author: 'Equipo de Arquitectura Empresarial del proyecto',
  reviewer: 'Architecture Review Board (ARB)',
  summary:
    'Convierte la arquitectura de negocio de B-01 en requisitos verificables: medidas de \u00e9xito, contratos de servicio, directrices, especificaciones e implementaci\u00f3n, requisitos de interoperabilidad y de gesti\u00f3n de servicios, restricciones, supuestos, requisitos de negocio, t\u00e9cnicos y de datos, y matriz de trazabilidad.',
  file: {
    name: 'B-02_Especificacion_de_Requisitos_de_Arquitectura_de_Negocio.pdf',
    path: '/docs/B-02_Especificacion_de_Requisitos_de_Arquitectura_de_Negocio.pdf',
    size: '0.5 MB',
  },
  sections: [
    {
      id: 'resumen',
      kicker: 'Resumen',
      title: 'Los requisitos de la arquitectura de negocio',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'B-02 complementa a B-01 y no lo sustituye: B-01 define la arquitectura de negocio y B-02 especifica los requisitos verificables que esa arquitectura debe cumplir, con criterios de aceptaci\u00f3n y trazabilidad hacia las Fases C a F.',
        },
        {
          kind: 'stats',
          items: [
            { value: '7', label: 'medidas de \u00e9xito (KPI-01 a KPI-07)' },
            { value: '3', label: 'contratos de servicio (BS-01 a BS-03)' },
            { value: '2', label: 'directrices de implementaci\u00f3n (IG-01, IG-02)' },
            { value: '1', label: 'especificaci\u00f3n de implementaci\u00f3n (IS-01)' },
          ],
        },
        {
          kind: 'figure',
          number: 'Figura 1',
          caption: 'Ciclo de vida de un requisito en el proyecto',
          figure: {
            kind: 'image',
            src: '/img/b02/figura-01-flujo-ars.png',
            thumb: '/img/b02/thumbs/figura-01-flujo-ars.png',
            alt: 'Ciclo de vida de un requisito',
            ratio: '16 / 9',
          },
        },
      ],
    },
    {
      id: 'salidas',
      kicker: 'Correspondencia',
      title: 'Salidas de la Fase B cubiertas',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 4',
          caption: 'Salidas de la Fase B cubiertas por este documento',
          columns: ['Salida de la Fase B (TOGAF 9.1)', 'D\u00f3nde se cubre', 'Estado'],
          rows: [
            [
              'Declaraci\u00f3n de Trabajo actualizada si es necesario',
              'B-01, secci\u00f3n 9; A-02 v2.1',
              'Cubierta sin cambio de alcance',
            ],
            [
              'Principios de negocio, objetivos y motivaciones validados',
              'B-01, secciones 2.2 y 2.3; Tabla 15',
              'Cubierta',
            ],
            [
              'Principios de arquitectura de negocio elaborados',
              'B-01, secci\u00f3n 2.3 (PN-01 a PN-05)',
              'Cubierta',
            ],
            [
              'Versi\u00f3n preliminar del ADD con arquitectura base y objetivo',
              'B-01, secciones 2.4 y 2.5',
              'Cubierta',
            ],
            [
              'Especificaci\u00f3n de Requisitos de Arquitectura',
              'Este documento, secciones 1 a 5',
              'Cubierta',
            ],
          ],
        },
      ],
    },
    {
      id: 'kpi',
      kicker: 'Medidas de \u00e9xito',
      title: 'Medidas de \u00e9xito de la arquitectura de negocio',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 6',
          caption: 'Medidas de \u00e9xito de la arquitectura de negocio',
          columns: ['C\u00f3digo', 'Indicador', 'L\u00ednea base', 'Meta', 'Responsable'],
          rows: [
            [
              'KPI-01',
              'Tiempo de espera en consulta externa',
              '95 min',
              '< 45 min',
              'Direcci\u00f3n Asistencial',
            ],
            ['KPI-02', 'Experiencia del paciente', '62 %', '> 85 %', 'Direcci\u00f3n Asistencial'],
            [
              'KPI-03',
              'Accesos indebidos a la historia cl\u00ednica',
              'Sin medici\u00f3n',
              '0 incidentes',
              'OSI',
            ],
            ['KPI-04', 'Disponibilidad del sistema', '92 %', '> 99 % en horario', 'OSI'],
            [
              'KPI-05',
              'Prestaciones registradas a tiempo',
              '40 %',
              '> 95 %',
              'Oficina de Estad\u00edstica',
            ],
            [
              'KPI-06',
              'Tiempo de consolidaci\u00f3n de indicadores',
              '15 d\u00edas',
              '< 2 d\u00edas',
              'Planeamiento',
            ],
            ['KPI-07', 'Decisiones con evidencia', '30 %', '> 80 %', 'Planeamiento'],
          ],
          note: 'Se conservan los siete indicadores de A-01 y se precisan su f\u00f3rmula, l\u00ednea base, meta y responsable.',
        },
      ],
    },
    {
      id: 'contratos',
      kicker: 'Contratos',
      title: 'Contratos de servicio y directrices',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 7',
          caption: 'Contratos de servicio de negocio (BS)',
          columns: ['C\u00f3digo', 'Servicio', 'Compromiso'],
          rows: [
            [
              'BS-01',
              'Atenci\u00f3n en consulta externa',
              'El paciente es atendido con una sola admisi\u00f3n y su informaci\u00f3n disponible en todos los servicios.',
            ],
            [
              'BS-02',
              'Entrega de resultados de laboratorio e im\u00e1genes',
              'Los resultados est\u00e1n disponibles en el expediente antes del control.',
            ],
            [
              'BS-03',
              'Dispensaci\u00f3n de medicamentos',
              'La prescripci\u00f3n electr\u00f3nica se valida y dispensa en el mismo acto.',
            ],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 8',
          caption: 'Directrices de implementaci\u00f3n (IG)',
          columns: ['C\u00f3digo', 'Directriz'],
          rows: [
            [
              'IG-01',
              'Toda soluci\u00f3n debe respetar los principios PA-01 a PA-08 y los principios de negocio PN-01 a PN-05.',
            ],
            [
              'IG-02',
              'Ning\u00fan requisito puede eliminarse sin una decisi\u00f3n del ARB registrada en GR-01.',
            ],
          ],
        },
      ],
    },
    {
      id: 'interoperabilidad',
      kicker: 'Interoperabilidad',
      title: 'Requisitos de interoperabilidad',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 9',
          caption: 'Interfaces de integraci\u00f3n (IF)',
          columns: ['C\u00f3digo', 'Interfaz', 'Descripci\u00f3n'],
          rows: [
            [
              'IF-01',
              'Identidad del paciente',
              'Consulta y alta del paciente en el repositorio maestro de identidad.',
            ],
            [
              'IF-02',
              'Laboratorio e im\u00e1genes',
              'Env\u00edo de \u00f3rdenes y recepci\u00f3n de resultados en el expediente.',
            ],
            [
              'IF-03',
              'Farmacia',
              'Validaci\u00f3n y dispensaci\u00f3n de la prescripci\u00f3n electr\u00f3nica.',
            ],
            [
              'IF-04',
              'SIS',
              'Env\u00edo de la prestaci\u00f3n registrada al Seguro Integral de Salud.',
            ],
            ['IF-05', 'DIRESA y MINSA', 'Intercambio de informaci\u00f3n con la red asistencial.'],
          ],
          note: 'Las interfaces se implementan mediante est\u00e1ndares abiertos y se verifican en la Fase D.',
        },
      ],
    },
    {
      id: 'restricciones',
      kicker: 'Restricciones',
      title: 'Restricciones y supuestos',
      blocks: [
        {
          kind: 'list',
          items: [
            'CN-B-01 Presupuesto de la primera etapa aprobado por la Direcci\u00f3n Ejecutiva.',
            'CN-B-02 Conectividad intermitente en la selva; se requiere modo de contingencia.',
            'CN-B-03 Disponibilidad del personal cl\u00ednico para las sesiones de trabajo.',
            'CN-B-04 Vigencia del instrumento de planificaci\u00f3n institucional.',
            'S-B-01 El ARB aprueba la hoja de ruta antes de iniciar la implementaci\u00f3n.',
            'S-B-02 Los datos maestros de paciente y profesional existen en fuentes parcialmente depuradas.',
          ],
        },
      ],
    },
    {
      id: 'rq',
      kicker: 'Requisitos de negocio',
      title: 'Requisitos de negocio (RQ)',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 10',
          caption: 'Requisitos de negocio priorizados',
          columns: ['C\u00f3digo', 'Requisito', 'Prioridad (MoSCoW)'],
          rows: [
            ['RQ-01', 'Identificador \u00fanico del paciente en todos los servicios', 'M'],
            ['RQ-02', 'Expediente cl\u00ednico electr\u00f3nico \u00fanico por paciente', 'M'],
            ['RQ-03', 'Una sola admisi\u00f3n por atenci\u00f3n', 'M'],
            ['RQ-04', '\u00d3rdenes y resultados en l\u00ednea', 'M'],
            ['RQ-05', 'Prescripci\u00f3n electr\u00f3nica', 'M'],
            ['RQ-06', 'Registro autom\u00e1tico de la prestaci\u00f3n al SIS', 'M'],
            ['RQ-07', 'Tablero de indicadores de gesti\u00f3n', 'S'],
            ['RQ-08', 'Modo de contingencia ante fallas', 'M'],
          ],
        },
      ],
    },
    {
      id: 'rt-rd',
      kicker: 'Requisitos t\u00e9cnicos y de datos',
      title: 'Requisitos t\u00e9cnicos (RT) y de datos (RD)',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 11',
          caption: 'Requisitos t\u00e9cnicos y de datos',
          columns: ['C\u00f3digo', 'Requisito', 'Tipo'],
          rows: [
            ['RT-01', 'Tiempo de respuesta de consulta del expediente < 3 s', 'T\u00e9cnico'],
            ['RT-02', 'Disponibilidad 99 % en horario asistencial', 'T\u00e9cnico'],
            ['RT-03', 'Cifrado de datos en tr\u00e1nsito y en reposo', 'T\u00e9cnico'],
            ['RD-01', 'Paciente, profesional y servicio con identificador \u00fanico', 'Dato'],
            ['RD-02', 'Cat\u00e1logo de diagn\u00f3sticos y procedimientos estandarizado', 'Dato'],
            ['RD-03', 'Historia cl\u00ednica con estructura compartida', 'Dato'],
          ],
        },
      ],
    },
    {
      id: 'trazabilidad',
      kicker: 'Trazabilidad',
      title: 'Matriz de trazabilidad',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 20',
          caption: 'Trazabilidad requisito - proceso - componente',
          columns: ['Requisito', 'Proceso (B-01)', 'Componente candidato'],
          rows: [
            ['RQ-01', 'P-02 Admisi\u00f3n', 'L-01 Identidad'],
            ['RQ-02', 'P-04 Consulta', 'L-02 Expediente \u00fanico'],
            ['RQ-03', 'P-02 Admisi\u00f3n', 'L-03 Admisi\u00f3n y citas'],
            ['RQ-04', 'P-05 \u00d3rdenes', 'L-04 \u00d3rdenes y resultados'],
            ['RQ-05', 'P-07 Prescripci\u00f3n', 'L-05 Prescripci\u00f3n electr\u00f3nica'],
            ['RQ-06', 'P-08 Registro de prestaci\u00f3n', 'L-06 Registro y SIS'],
            ['RQ-07', 'P-09 Seguimiento', 'L-07 Indicadores y tablero'],
          ],
          note: 'Insumo para la gesti\u00f3n de requisitos GR-01 y para las Fases C a F.',
        },
      ],
    },
    {
      id: 'aceptacion',
      kicker: 'Aceptaci\u00f3n',
      title: 'Aceptaci\u00f3n y control de cambios',
      blocks: [
        {
          kind: 'p',
          text: 'La aceptaci\u00f3n de los requisitos se formaliza en el ARB. Ning\u00fan requisito se elimina sin una decisi\u00f3n del ARB registrada en GR-01. Los cambios se analizan por impacto antes de aprobarse.',
        },
        {
          kind: 'figure',
          number: 'Figura 2',
          caption: 'Flujo de aceptaci\u00f3n de requisitos',
          figure: {
            kind: 'image',
            src: '/img/b02/figura-02-flujo-aceptacion.png',
            thumb: '/img/b02/thumbs/figura-02-flujo-aceptacion.png',
            alt: 'Flujo de aceptaci\u00f3n de requisitos',
            ratio: '16 / 9',
          },
        },
      ],
    },
    {
      id: 'cierre',
      kicker: 'Cierre',
      title: 'Conclusiones',
      blocks: [
        {
          kind: 'list',
          items: [
            'B-02 convierte la arquitectura de negocio de B-01 en requisitos verificables con criterios de aceptaci\u00f3n.',
            'Los requisitos RQ, RT y RD se trazan a procesos y componentes candidatos, y alimentan las Fases C a F.',
            'La aceptaci\u00f3n formal se realiza en el ARB y los cambios se gestionan mediante GR-01.',
          ],
        },
        { kind: 'cta' },
      ],
    },
  ],
};
