import { type A01Document } from './a01.data';

export const B01: A01Document = {
  code: 'B-01',
  title: 'Definici\u00f3n de la Arquitectura de Negocio',
  english: 'Business Architecture Definition',
  version: '1.0',
  date: '05/11/2026',
  pages: 80,
  status: 'Borrador para revisi\u00f3n',
  author: 'Equipo de Arquitectura Empresarial del proyecto',
  reviewer: 'Architecture Review Board (ARB)',
  summary:
    'Define la arquitectura de negocio del Hospital de Tingo Mar\u00eda para la primera iteraci\u00f3n del ciclo ADM, centrada en la cadena de atenci\u00f3n de consulta externa: metas y objetivos, cinco principios de negocio y ocho de arquitectura elaborados, arquitectura base y objetivo, escenarios EB-02 y EB-03, an\u00e1lisis de brechas, arquitectura de transici\u00f3n, componentes candidatos del Plan de Itinerario y actualizaci\u00f3n de la Declaraci\u00f3n de Trabajo.',
  file: {
    name: 'B-01_Definicion_de_la_Arquitectura_de_Negocio.pdf',
    path: '/docs/B-01_Definicion_de_la_Arquitectura_de_Negocio.pdf',
    size: '1.5 MB',
  },
  sections: [
    {
      id: 'resumen',
      kicker: 'Resumen',
      title: 'La arquitectura de negocio en una p\u00e1gina',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Este documento convierte la visi\u00f3n aprobada en la Fase A en una definici\u00f3n verificable del negocio: qu\u00e9 se quiere lograr, qu\u00e9 principios lo gobiernan, c\u00f3mo se atiende hoy al paciente, c\u00f3mo se quiere atender en 24 meses y qu\u00e9 brechas, impactos y componentes de hoja de ruta se derivan de ese cambio.',
        },
        {
          kind: 'stats',
          items: [
            { value: '5', label: 'principios de negocio (PN-01 a PN-05)' },
            { value: '8', label: 'principios de arquitectura elaborados' },
            { value: '8', label: 'bloques de construcci\u00f3n (BB-01 a BB-08)' },
            { value: '10', label: 'componentes candidatos del itinerario' },
          ],
        },
        {
          kind: 'p',
          text: 'La arquitectura base muestra un negocio organizado alrededor de los servicios y no del paciente: el paciente repite tr\u00e1mites en admisi\u00f3n, laboratorio y farmacia; la historia cl\u00ednica est\u00e1 dispersa entre papel y registros digitales aislados; los tiempos de espera no se miden; los indicadores estrat\u00e9gicos se consolidan manualmente. La arquitectura objetivo reorganiza la cadena de valor alrededor del paciente, con una sola admisi\u00f3n, identificaci\u00f3n \u00fanica, \u00f3rdenes y resultados en l\u00ednea, prescripci\u00f3n electr\u00f3nica, registro autom\u00e1tico de la prestaci\u00f3n y seguimiento de indicadores.',
        },
        {
          kind: 'quote',
          text: 'La arquitectura base muestra un negocio organizado alrededor de los servicios y no del paciente. La arquitectura objetivo reorganiza la cadena de valor alrededor del paciente y de la informaci\u00f3n compartida, sin cambiar la misi\u00f3n del hospital ni sus funciones.',
          source: 'B-01, secciones 2.4 y 2.5',
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
          caption: 'Correspondencia con las salidas de la Fase B',
          columns: ['Salida de la Fase B (TOGAF 9.1)', 'D\u00f3nde se cubre', 'Estado'],
          rows: [
            [
              'Declaraci\u00f3n de Trabajo actualizada si es necesario',
              'B-01, secci\u00f3n 9; A-02 v2.1',
              'Cubierta sin cambio de alcance',
            ],
            [
              'Principios de negocio, objetivos y motivaciones validados',
              'B-01, secciones 2.2 y 2.3',
              'Cubierta',
            ],
            [
              'Principios de arquitectura de negocio elaborados',
              'B-01, secci\u00f3n 2.3 (PN-01 a PN-05, PA-01 a PA-08)',
              'Cubierta',
            ],
            [
              'Versi\u00f3n preliminar del ADD con arquitectura base y objetivo',
              'B-01, secciones 2.4 y 2.5',
              'Cubierta',
            ],
          ],
          note: 'B-02 detalla la Especificaci\u00f3n de Requisitos de Arquitectura que complementa este documento.',
        },
      ],
    },
    {
      id: 'metas',
      kicker: 'Metas y restricciones',
      title: 'Metas, objetivos y restricciones de negocio',
      blocks: [
        {
          kind: 'p',
          text: 'Las metas de negocio (BG-001 a BG-004) y los objetivos de arquitectura (OA-01 a OA-08) se validan con la Direcci\u00f3n Ejecutiva y la Oficina de Planeamiento y Presupuesto. Las restricciones (CN-B-01 a CN-B-07) condicionan el dise\u00f1o y se trasladan a B-02 como restricciones de arquitectura.',
        },
        {
          kind: 'list',
          items: [
            'BG-001 Atenci\u00f3n centrada en el paciente y continuidad asistencial.',
            'BG-002 Reducci\u00f3n de tiempos de espera y de tr\u00e1mites en consulta externa.',
            'BG-003 Informaci\u00f3n cl\u00ednica \u00fanica, segura e interoperable.',
            'BG-004 Gesti\u00f3n basada en evidencia y mejora continua.',
            'Restricciones clave: presupuesto de la primera etapa, conectividad intermitente en la selva, vigencia del instrumento de planificaci\u00f3n y disponibilidad del personal cl\u00ednico para las sesiones de trabajo.',
          ],
        },
      ],
    },
    {
      id: 'principios',
      kicker: 'Principios',
      title: 'Principios de negocio y de arquitectura',
      blocks: [
        {
          kind: 'principles',
          items: [
            {
              code: 'PN-01',
              name: 'El paciente es el centro de la atenci\u00f3n',
              statement:
                'Los procesos se dise\u00f1an desde la experiencia del paciente y no desde la conveniencia de cada servicio.',
              rationale:
                'La misi\u00f3n del hospital y la meta BG-001 lo exigen; la fragmentaci\u00f3n actual es la principal causa del problema.',
              implications:
                'Una sola admisi\u00f3n; el paciente no traslada documentos ni repite datos; los tiempos se miden de punta a punta.',
            },
            {
              code: 'PN-02',
              name: 'La informaci\u00f3n se registra una sola vez y se comparte',
              statement:
                'Todo dato cl\u00ednico se captura en el punto donde se genera y se reutiliza en los dem\u00e1s procesos.',
              rationale:
                'La duplicaci\u00f3n de registros consume tiempo cl\u00ednico y genera errores.',
              implications:
                'Identificador \u00fanico; expediente compartido; interfaces en lugar de redigitaci\u00f3n.',
            },
            {
              code: 'PN-03',
              name: 'La continuidad de la atenci\u00f3n prevalece',
              statement: 'Ning\u00fan cambio tecnol\u00f3gico puede interrumpir la atenci\u00f3n.',
              rationale: 'Es una obligaci\u00f3n legal y \u00e9tica; principio PA-02.',
              implications:
                'Coexistencia, modo de contingencia, registro en papel con carga posterior y reversi\u00f3n.',
            },
            {
              code: 'PN-04',
              name: 'Privacidad y consentimiento',
              statement:
                'Solo accede a la informaci\u00f3n cl\u00ednica quien tiene un rol asistencial o una autorizaci\u00f3n v\u00e1lida.',
              rationale:
                'Los datos de salud son sensibles (Ley N.\u00b0 29733) y el paciente debe confiar en el hospital.',
              implications:
                'Acceso por rol, justificaci\u00f3n de acceso a datos restringidos, auditor\u00eda y consentimiento informado.',
            },
            {
              code: 'PN-05',
              name: 'Decisi\u00f3n basada en evidencia y mejora continua',
              statement:
                'Las decisiones de cambio se sustentan en datos medidos y se revisan peri\u00f3dicamente.',
              rationale:
                'La meta BG-004 y el principio PA-06 lo requieren; hoy los indicadores se consolidan manualmente.',
              implications:
                'L\u00ednea base antes de cambiar; tablero de indicadores; revisi\u00f3n en el ARB.',
            },
            {
              code: 'PA-01',
              name: 'Primac\u00eda de los principios',
              statement:
                'Todas las \u00e1reas aplican los principios en sus decisiones de informaci\u00f3n y tecnolog\u00eda.',
              rationale:
                'Ning\u00fan servicio puede adoptar una soluci\u00f3n que contradiga la arquitectura aprobada.',
              implications: 'Las excepciones se solicitan al ARB y quedan registradas.',
              proposed: false,
            },
            {
              code: 'PA-02',
              name: 'Continuidad del servicio',
              statement:
                'La atenci\u00f3n no se interrumpe por fallas o cambios tecnol\u00f3gicos.',
              rationale: 'El negocio debe poder operar incluso sin sistema.',
              implications:
                'Procedimiento de contingencia en cada proceso cr\u00edtico; coexistencia durante la transici\u00f3n.',
            },
            {
              code: 'PA-03',
              name: 'Control de acceso',
              statement: 'Cada usuario accede solo a la informaci\u00f3n que su rol requiere.',
              rationale:
                'Los roles cl\u00ednicos y administrativos se definen antes de habilitar accesos.',
              implications:
                'Matriz de acceso por rol; revisi\u00f3n peri\u00f3dica; baja oportuna de accesos.',
            },
            {
              code: 'PA-04',
              name: 'Seguridad de los datos',
              statement:
                'La informaci\u00f3n cl\u00ednica se protege en confidencialidad, integridad y disponibilidad.',
              rationale:
                'El paciente debe confiar en que su informaci\u00f3n no se altera ni se divulga.',
              implications: 'Cifrado, auditor\u00eda inalterable, datos de prueba anonimizados.',
            },
            {
              code: 'PA-05',
              name: 'Facilidad de uso',
              statement:
                'Las aplicaciones se dise\u00f1an alrededor del trabajo real del personal cl\u00ednico.',
              rationale:
                'El registro debe caber en el tiempo de la consulta, no agregar trabajo al final del d\u00eda.',
              implications:
                'Pruebas de usabilidad con m\u00e9dicos y enfermer\u00eda antes de cada despliegue.',
            },
            {
              code: 'PA-06',
              name: 'Respuesta gestionada al cambio',
              statement: 'Los cambios se eval\u00faan y aprueban antes de ejecutarse.',
              rationale:
                'Ning\u00fan servicio cambia su forma de trabajar por decisi\u00f3n aislada de un proveedor.',
              implications:
                'Solicitud de cambio; evaluaci\u00f3n de impacto; comunicaci\u00f3n al personal.',
            },
            {
              code: 'PA-07',
              name: 'Adaptabilidad',
              statement:
                'La arquitectura crece por etapas y se adapta a nuevos servicios y normas.',
              rationale: 'El negocio debe poder incorporar nuevas prestaciones sin rehacer todo.',
              implications:
                'Procesos modulares; est\u00e1ndares abiertos; componentes reemplazables.',
            },
            {
              code: 'PA-08',
              name: 'Los datos son un activo compartido',
              statement:
                'Los datos maestros tienen due\u00f1o, fuente \u00fanica y calidad medida.',
              rationale: 'Paciente, profesional y servicio deben identificarse una sola vez.',
              implications:
                'Due\u00f1os de datos designados; reglas de calidad; depuraci\u00f3n de duplicados.',
            },
          ],
        },
      ],
    },
    {
      id: 'asis',
      kicker: 'L\u00ednea base',
      title: 'Arquitectura de negocio de l\u00ednea base (AS-IS)',
      blocks: [
        {
          kind: 'p',
          text: 'La arquitectura base describe c\u00f3mo se atiende hoy al paciente en consulta externa: admisi\u00f3n manual, historia cl\u00ednica en papel o en sistemas aislados, \u00f3rdenes en papel, prescripci\u00f3n manual y registro de la prestaci\u00f3n al SIS despu\u00e9s de la atenci\u00f3n. El paciente repite datos en cada servicio y los tiempos de espera no se miden.',
        },
        {
          kind: 'figure',
          number: 'Figura 3',
          caption:
            'Proceso de atenci\u00f3n en consulta externa EB-01: situaci\u00f3n actual (AS-IS)',
          figure: {
            kind: 'image',
            src: '/img/b01/figura-03-eb01-as-is.jpg',
            thumb: '/img/b01/thumbs/figura-03-eb01-as-is.jpg',
            alt: 'Proceso actual de atenci\u00f3n en consulta externa',
            ratio: '16 / 9',
          },
          note: 'Modelo BPMN 2.0 elaborado en Bizagi Modeler a partir de A-01, secci\u00f3n 12.4. Elaboraci\u00f3n propia.',
        },
        {
          kind: 'list',
          items: [
            'Fragmentaci\u00f3n de la informaci\u00f3n cl\u00ednica (BR-02): la historia se dispersa entre papel y registros digitales aislados.',
            'Ausencia de una funci\u00f3n de gobierno de la arquitectura (BR-05).',
            'Falta de inventario de aplicaciones y datos (BR-06).',
            'Vigencia no confirmada del instrumento de planificaci\u00f3n (BR-08).',
          ],
        },
      ],
    },
    {
      id: 'tobe',
      kicker: 'Objetivo',
      title: 'Arquitectura de negocio objetivo (TO-BE)',
      blocks: [
        {
          kind: 'p',
          text: 'La arquitectura objetivo reorganiza la cadena de valor alrededor del paciente y de la informaci\u00f3n compartida, sin cambiar la misi\u00f3n del hospital ni sus funciones. Una sola admisi\u00f3n, identificaci\u00f3n \u00fanica, \u00f3rdenes y resultados en l\u00ednea, prescripci\u00f3n electr\u00f3nica, registro autom\u00e1tico de la prestaci\u00f3n y seguimiento de indicadores.',
        },
        {
          kind: 'figure',
          number: 'Figura 4',
          caption: 'Cadena de valor del paciente: situaci\u00f3n objetivo (TO-BE)',
          figure: {
            kind: 'image',
            src: '/img/b01/figura-04-cadena-valor-to-be.png',
            thumb: '/img/b01/thumbs/figura-04-cadena-valor-to-be.png',
            alt: 'Cadena de valor objetivo del paciente',
            ratio: '16 / 9',
          },
        },
        {
          kind: 'figure',
          number: 'Figura 9',
          caption: 'Vista integrada por capas de la arquitectura objetivo',
          figure: {
            kind: 'image',
            src: '/img/b01/figura-09-vista-por-capas-to-be.jpg',
            thumb: '/img/b01/thumbs/figura-09-vista-por-capas-to-be.jpg',
            alt: 'Vista integrada por capas de la arquitectura objetivo',
            ratio: '16 / 9',
          },
        },
      ],
    },
    {
      id: 'escenarios',
      kicker: 'Escenarios',
      title: 'Escenarios EB-02 y EB-03',
      blocks: [
        {
          kind: 'p',
          text: 'EB-02 describe la consulta de la historia cl\u00ednica compartida y EB-03 el registro y env\u00edo de la prestaci\u00f3n al SIS. Ambos escenarios validan la arquitectura objetivo con los actores, los flujos y los criterios de aceptaci\u00f3n.',
        },
        {
          kind: 'figure',
          number: 'Figura 6',
          caption: 'Flujo del escenario EB-02: consulta de la historia cl\u00ednica',
          figure: {
            kind: 'image',
            src: '/img/b01/figura-06-eb02.png',
            thumb: '/img/b01/thumbs/figura-06-eb02.png',
            alt: 'Flujo del escenario EB-02',
            ratio: '16 / 9',
          },
        },
        {
          kind: 'figure',
          number: 'Figura 7',
          caption: 'Flujo del escenario EB-03: registro y env\u00edo de la prestaci\u00f3n al SIS',
          figure: {
            kind: 'image',
            src: '/img/b01/figura-07-eb03.png',
            thumb: '/img/b01/thumbs/figura-07-eb03.png',
            alt: 'Flujo del escenario EB-03',
            ratio: '16 / 9',
          },
        },
      ],
    },
    {
      id: 'brechas',
      kicker: 'Brechas',
      title: 'An\u00e1lisis de brechas',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 5',
          caption: 'Brechas de negocio priorizadas',
          columns: ['Brecha', 'Descripci\u00f3n', 'Prioridad'],
          rows: [
            ['BR-02', 'Fragmentaci\u00f3n de la informaci\u00f3n cl\u00ednica', 'Alta'],
            ['BR-05', 'Ausencia de una funci\u00f3n de gobierno de la arquitectura', 'Alta'],
            ['BR-06', 'Falta de inventario de aplicaciones y datos', 'Alta'],
            ['BR-08', 'Vigencia no confirmada del instrumento de planificaci\u00f3n', 'Alta'],
            ['BR-01', 'Procesos centrados en el servicio y no en el paciente', 'Media'],
            ['BR-03', 'Ausencia de mediciones de tiempo de espera', 'Media'],
          ],
          note: 'Las brechas se agrupan en personas, procesos, herramientas, informaci\u00f3n, medici\u00f3n, financiamiento e instalaciones. Las de mayor prioridad se trasladan a la hoja de ruta.',
        },
      ],
    },
    {
      id: 'transicion',
      kicker: 'Transici\u00f3n',
      title: 'Arquitectura de transici\u00f3n',
      blocks: [
        {
          kind: 'p',
          text: 'La arquitectura de transici\u00f3n define estados intermedios que permiten pasar de la arquitectura base a la objetivo sin interrumpir la atenci\u00f3n, con coexistencia y reversi\u00f3n en cada etapa.',
        },
        {
          kind: 'figure',
          number: 'Figura 10',
          caption: 'Secuencia de los estados de transici\u00f3n',
          figure: {
            kind: 'image',
            src: '/img/b01/figura-10-transicion.png',
            thumb: '/img/b01/thumbs/figura-10-transicion.png',
            alt: 'Secuencia de los estados de transici\u00f3n',
            ratio: '16 / 9',
          },
        },
      ],
    },
    {
      id: 'componentes',
      kicker: 'Itinerario',
      title: 'Componentes candidatos del Plan de Itinerario',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 6',
          caption: 'Componentes candidatos del Plan de Itinerario',
          columns: ['L\u00ednea', 'Componente', 'Dependencia'],
          rows: [
            ['L-01', 'Identidad del paciente y profesional', 'Fases C y D'],
            ['L-02', 'Expediente cl\u00ednico electr\u00f3nico \u00fanico', 'Fases C y D'],
            ['L-03', 'Admisi\u00f3n y citas', 'Fases C, D y E'],
            ['L-04', 'Ordenes y resultados en l\u00ednea', 'Fases C y D'],
            ['L-05', 'Prescripci\u00f3n electr\u00f3nica', 'Fases C y D'],
            ['L-06', 'Registro de la prestaci\u00f3n y SIS', 'Fases C, D y E'],
            ['L-07', 'Indicadores y tablero', 'Fases C y D'],
            ['L-08', 'Continuidad y contingencia', 'Fases D y G'],
            ['L-09', 'Capacitaci\u00f3n y cambio', 'Fases G y H'],
            ['L-10', 'Gobierno de la arquitectura', 'Fases G y H'],
          ],
          note: 'Ning\u00fan componente puede implementarse antes de que el ARB apruebe la hoja de ruta y se asegure el financiamiento de la primera etapa.',
        },
      ],
    },
    {
      id: 'a02',
      kicker: 'Declaraci\u00f3n de Trabajo',
      title: 'Actualizaci\u00f3n de la Declaraci\u00f3n de Trabajo',
      blocks: [
        {
          kind: 'p',
          text: 'La evaluaci\u00f3n concluye que no se requieren cambios de alcance en la Declaraci\u00f3n de Trabajo: se emite la versi\u00f3n 2.1 de A-02 solo para registrar el cierre de la Fase B y el estado de las condiciones previas. Los componentes candidatos se organizan en diez l\u00edneas de negocio con dependencias expl\u00edcitas hacia las Fases C, D, E y F.',
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
            'La arquitectura de negocio se define de forma verificable para la consulta externa, con metas, principios, procesos base y objetivo, escenarios y brechas.',
            'Las brechas de mayor prioridad son la fragmentaci\u00f3n de la informaci\u00f3n cl\u00ednica, la ausencia de gobierno de la arquitectura, la falta de inventario y la vigencia del instrumento de planificaci\u00f3n.',
            'No se requieren cambios de alcance en la Declaraci\u00f3n de Trabajo; se emite A-02 v2.1 para registrar el cierre de la Fase B.',
            'Los componentes candidatos alimentan la hoja de ruta de las Fases E y F y dependen de la aprobaci\u00f3n del ARB y del financiamiento de la primera etapa.',
          ],
        },
        { kind: 'cta' },
      ],
    },
  ],
};
