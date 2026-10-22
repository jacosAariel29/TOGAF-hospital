import type { A01Document, Cell } from './a01.data';

const confirm = (t: string): Cell => ({ t, tone: 'ok' });
const probable = (t: string): Cell => ({ t, tone: 'info' });
const verify = (t: string): Cell => ({ t, tone: 'warn' });
const strong = (t: string): Cell => ({ t, strong: true });
const high = (t: string): Cell => ({ t, tone: 'bad' });
const medium = (t: string): Cell => ({ t, tone: 'warn' });

export const A05: A01Document = {
  code: 'A-05',
  title: 'Definición de la Arquitectura',
  english: 'Architecture Definition Document, draft',
  version: '2.0 · arquitectura 0.1',
  date: '20/10/2026',
  pages: 30,
  status: 'Borrador para aprobación',
  author: 'Equipo de Arquitectura Empresarial del proyecto',
  reviewer: 'Architecture Review Board (ARB)',
  summary:
    'Primera definición formal de la arquitectura del Hospital de Tingo María para la consulta externa: arquitecturas base y objetivo en los dominios de negocio, datos, aplicaciones y tecnología, con niveles de confianza explícitos, brechas, impacto y una propuesta de transición sin fechas que avanza de los fundamentos al piloto y a la consulta externa completa.',
  file: {
    name: 'A-05_Definicion_de_la_Arquitectura.pdf',
    path: '/docs/A-05_Definicion_de_la_Arquitectura.pdf',
    size: '837 KB',
  },
  sections: [
    {
      id: 'borrador-v01',
      kicker: 'Lámina 1',
      title: '¿Qué es un borrador v0.1?',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'En la Fase A, TOGAF pide solo una primera versión de la arquitectura actual y objetivo; el detalle se completa en las Fases B, C y D.',
        },
        {
          kind: 'table',
          number: 'Tabla 4',
          caption: 'Contenido que TOGAF exige y grado de desarrollo',
          columns: ['Contenido', 'Grado en v0.1'],
          rows: [
            ['Alcance, objetivos, restricciones y principios', 'Completo'],
            ['Arquitectura base (AS-IS)', 'Preliminar, por verificar'],
            ['Modelos de negocio, datos, aplicaciones y tecnología', 'Preliminar'],
            ['Justificación del enfoque', 'Completo'],
            ['Análisis de brechas', 'Preliminar'],
            ['Evaluación de impacto', 'Preliminar'],
            ['Arquitectura de transición', 'Propuesta'],
            ['Correspondencia con el Repositorio', 'Inicial'],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 5',
          caption: 'Niveles de confianza de la información',
          columns: ['Nivel', 'Significado'],
          rows: [
            [
              confirm('Confirmado'),
              'Viene de documentos institucionales o de la Fase Preliminar',
            ],
            [
              probable('Probable'),
              'Es habitual en hospitales públicos del Perú, pero no se ha verificado',
            ],
            [
              verify('Por verificar'),
              'Supuesto del equipo que se comprobará en las Fases B a D',
            ],
          ],
        },
        {
          kind: 'p',
          text: 'Próximas versiones: negocio 1.0 en la semana 12, datos y aplicaciones 1.0 en la semana 15, tecnología 1.0 en la semana 16.',
        },
      ],
    },
    {
      id: 'objetivos-dominio',
      kicker: 'Lámina 2',
      title: 'Objetivos por dominio',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Cada objetivo de arquitectura se logra con el aporte de varios dominios.',
        },
        {
          kind: 'table',
          number: 'Tabla 6',
          caption: 'Contribución de cada dominio a los objetivos',
          columns: ['Objetivo', 'Negocio', 'Datos', 'Aplicaciones', 'Tecnología'],
          wide: true,
          rows: [
            ['OA-01 Expediente único', '●', '●', '●', '○'],
            ['OA-02 Menor tiempo de espera', '●', '○', '●', '○'],
            ['OA-03 Seguridad de los datos', '○', '●', '○', '●'],
            ['OA-04 Interoperabilidad', '○', '●', '●', '●'],
            ['OA-05 Función de arquitectura', '●', '', '', ''],
            ['OA-06 Capacitación', '●', '', '●', '○'],
            ['OA-07 Indicadores', '●', '●', '●', ''],
          ],
          note: '● contribución principal · ○ contribución de soporte.',
        },
        {
          kind: 'p',
          text: 'Restricciones que más condicionan el diseño: la atención no puede detenerse; los datos de salud son sensibles (Ley 29733); el expediente debe alinearse al RENHICE (Ley 30024); el presupuesto es cerrado; y la interoperabilidad depende del sector.',
        },
      ],
    },
    {
      id: 'negocio-cadena-valor',
      kicker: 'Lámina 3',
      title: 'Negocio: cadena de valor y capacidades',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'La arquitectura se piensa desde el recorrido del paciente, no desde la estructura de los servicios.',
        },
        {
          kind: 'figure',
          number: 'Figura 1',
          caption: 'Cadena de valor del paciente en el Hospital de Tingo María',
          figure: {
            kind: 'image',
            src: '/img/a05/figura-01-cadena-valor.png',
            thumb: '/img/a05/thumbs/figura-01-cadena-valor.jpg',
            alt: 'Cadena de valor del paciente: acceso, evaluación, diagnóstico, tratamiento, seguimiento y registro, con la información clínica como soporte transversal.',
            ratio: '2200 / 1080',
          },
          note: 'Las etapas de acceso a tratamiento se modelan en detalle para la consulta externa; la etapa de seguimiento incluye los controles ambulatorios y la rehabilitación.',
        },
        {
          kind: 'table',
          number: 'Tabla',
          caption: 'Etapas de la cadena de valor, qué ocurre y capacidades',
          columns: ['Etapa', 'Qué ocurre', 'Capacidades'],
          rows: [
            ['1. Acceso', 'Citas y admisión', 'CB-07'],
            ['2. Evaluación', 'Triaje y consulta', 'CB-01'],
            ['3. Diagnóstico', 'Laboratorio e imágenes', 'CB-08'],
            ['4. Tratamiento', 'Prescripción y procedimientos', 'CB-04'],
            ['5. Seguimiento', 'Controles y rehabilitación', 'CB-01'],
            ['6. Registro y reporte', 'Prestación e indicadores', 'CB-06, CB-09'],
            [
              'Soporte (debajo de todas)',
              'Información clínica, seguridad, TI, personal, logística',
              'CB-02, CB-05, CB-10',
            ],
          ],
        },
        { kind: 'h3', text: 'Lectura de la figura' },
        {
          kind: 'p',
          text: 'Las etapas 1 a 4 se modelan en detalle para la consulta externa. La información clínica (CB-02) aparece como soporte de todas las etapas: es la capacidad que las conecta.',
        },
      ],
    },
    {
      id: 'negocio-procesos',
      kicker: 'Lámina 4',
      title: 'Negocio: procesos AS-IS y TO-BE',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Negocio: de procesos fragmentados a un flujo único.',
        },
        {
          kind: 'figure',
          number: 'D-03',
          caption: 'Proceso de consulta externa EB-01: situación actual (AS-IS)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-08-bpmn-asis.jpg',
            thumb: '/img/a01/thumbs/figura-08-bpmn-asis.jpg',
            alt: 'Diagrama BPMN del proceso de consulta externa EB-01 en su situación actual, con el paciente trasladando órdenes, resultados y recetas entre servicios.',
            ratio: '3168 / 1344',
          },
        },
        {
          kind: 'figure',
          number: 'D-04',
          caption: 'Proceso de consulta externa EB-01: situación objetivo (TO-BE)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-09-bpmn-tobe.jpg',
            thumb: '/img/a01/thumbs/figura-09-bpmn-tobe.jpg',
            alt: 'Diagrama BPMN del proceso de consulta externa EB-01 en su situación objetivo, con orden y resultados electrónicos y reporte automático al SIS.',
            ratio: '3168 / 1344',
          },
        },
        {
          kind: 'p',
          text: 'Son las mismas imágenes que las Figuras 8 y 9 del A-01.',
        },
        {
          kind: 'table',
          number: 'Tabla 9',
          caption: 'Procesos de la consulta externa en la arquitectura base y objetivo (v0.1)',
          columns: ['Proceso', 'AS-IS (base v0.1)', 'Confianza', 'TO-BE (objetivo v0.1)'],
          wide: true,
          rows: [
            [
              'P-01 Citas',
              'Turnos el mismo día por orden de llegada',
              probable('Probable'),
              'Citas programadas por especialidad',
            ],
            [
              'P-02 Admisión',
              'Registro en sistemas separados; búsqueda de la historia física',
              probable('Probable'),
              'Identificación con DNI validada en línea; identificador único',
            ],
            [
              'P-03 Triaje',
              'Formato de papel',
              verify('Por verificar'),
              'Signos vitales en el expediente',
            ],
            [
              'P-04 Consulta',
              'Historia física, a veces incompleta',
              confirm('Confirmado'),
              'Expediente completo; diagnóstico con CIE-10',
            ],
            [
              'P-05 Órdenes',
              'Orden escrita que lleva el paciente',
              probable('Probable'),
              'Orden electrónica al laboratorio',
            ],
            [
              'P-06 Resultados',
              'Resultado impreso que recoge el paciente',
              probable('Probable'),
              'Resultado en el expediente con aviso al médico',
            ],
            [
              'P-07 Receta y dispensación',
              'Receta manuscrita; datos repetidos',
              probable('Probable'),
              'Receta electrónica con verificación de stock',
            ],
            [
              'P-08 Registro de la prestación',
              'Digitación posterior',
              probable('Probable'),
              'Prestación generada desde la atención',
            ],
            [
              'P-09 Seguimiento',
              'Controles programados a mano',
              verify('Por verificar'),
              'Cita de control generada en la consulta',
            ],
          ],
          note: 'El detalle de estos procesos, con sus tiempos y responsables, se modelará en la Fase B (B-01). El escenario de negocio completo está en A-01, sección 12.',
        },
        {
          kind: 'p',
          text: 'Lectura de los diagramas: en el AS-IS hay 9 documentos en papel, 5 registros del mismo paciente y 21 tareas con problemas; en el TO-BE, 0 papeles, 1 expediente único y 10 tareas automáticas.',
        },
      ],
    },
    {
      id: 'datos-asis-tobe',
      kicker: 'Lámina 5',
      title: 'Datos: AS-IS y TO-BE',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Datos: de registros dispersos a un expediente único.',
        },
        {
          kind: 'figure',
          number: 'D-05',
          caption: 'Arquitectura de datos actual (AS-IS): registros fragmentados',
          figure: {
            kind: 'image',
            src: '/img/a05/d-05-datos-asis.png',
            thumb: '/img/a05/thumbs/d-05-datos-asis.jpg',
            alt: 'Diagrama de la arquitectura de datos actual: registros fragmentados del paciente en la historia clínica, los sistemas sectoriales y los servicios de apoyo.',
            ratio: '4400 / 3020',
          },
        },
        {
          kind: 'table',
          number: 'Tabla 11',
          caption: 'Situación actual de los datos',
          columns: ['Aspecto', 'Situación actual', 'Confianza'],
          wide: true,
          rows: [
            [
              'Historia clínica',
              'Principalmente en papel; partes en sistemas separados',
              confirm('Confirmado'),
            ],
            [
              'Identificación del paciente',
              'Cada sistema lo registra por separado; posibles duplicados',
              probable('Probable'),
            ],
            [
              'Diagnósticos',
              'Con CIE-10 en los aplicativos sectoriales, no siempre en la historia',
              probable('Probable'),
            ],
            [
              'Resultados',
              'En registros del servicio y en papel',
              probable('Probable'),
            ],
            ['Dueños de datos', 'No designados', confirm('Confirmado')],
            [
              'Clasificación de sensibilidad',
              'Inexistente',
              confirm('Confirmado'),
            ],
            ['Calidad de datos', 'No medida', confirm('Confirmado')],
          ],
        },
        {
          kind: 'figure',
          number: 'Figura 2',
          caption: 'Modelo conceptual de datos del expediente (v0.1)',
          figure: {
            kind: 'image',
            src: '/img/a05/figura-02-modelo-datos.png',
            thumb: '/img/a05/thumbs/figura-02-modelo-datos.jpg',
            alt: 'Modelo conceptual de datos del expediente: entidades maestras y transaccionales conectadas alrededor del paciente y la atención.',
            ratio: '2788 / 3600',
          },
          note: 'Modelo conceptual. El modelo lógico, con atributos y reglas completas, se elabora en la Fase C (C-01).',
        },
        {
          kind: 'table',
          number: 'Tabla 12',
          caption: 'Entidades de datos de la arquitectura objetivo',
          columns: ['Tipo', 'Entidades', 'Dueño del dato'],
          wide: true,
          rows: [
            [
              strong('Maestras (5)'),
              'Paciente, Profesional, Unidad, Servicio, Medicamento',
              'Dirección Asistencial, Recursos Humanos, Planeamiento, Farmacia',
            ],
            [
              strong('Transaccionales (7)'),
              'Cita, Atención, Diagnóstico, Orden, Resultado, Prescripción, Prestación',
              'Admisión, Dirección Asistencial, servicios de apoyo, Estadística',
            ],
          ],
        },
        { kind: 'h3', text: 'Lectura de la figura' },
        {
          kind: 'list',
          items: [
            'Todo gira alrededor de Paciente y Atención.',
            'Una atención genera diagnósticos, órdenes y prescripciones; cada orden produce un resultado.',
            'Cada atención se reporta como una prestación: el reporte al SIS ya no es una digitación aparte.',
          ],
        },
      ],
    },
    {
      id: 'datos-sensibilidad',
      kicker: 'Lámina 6',
      title: 'Datos: sensibilidad y requisitos',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 13',
          caption: 'Niveles de sensibilidad y controles',
          columns: ['Nivel', 'Ejemplos', 'Controles'],
          wide: true,
          rows: [
            [
              '1 Público',
              'Horarios, directorio de servicios',
              'Integridad de la publicación',
            ],
            [
              '2 Interno',
              'Datos del profesional, citas sin contenido clínico',
              'Acceso por rol',
            ],
            [
              '3 Confidencial',
              'Identificación del paciente, atenciones, diagnósticos, órdenes, resultados',
              'Acceso por rol, cifrado y auditoría de cada acceso',
            ],
            [
              '4 Restringido',
              'Salud mental, VIH, violencia, resultados genéticos',
              'Todo lo anterior + acceso solo del equipo tratante y justificación',
            ],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 14',
          caption: 'Requisitos de datos clave',
          columns: ['Código', 'Requisito', 'Principio'],
          wide: true,
          rows: [
            [
              'RD-01',
              'Identificador único por paciente, vinculado a su DNI',
              'PA-08',
            ],
            [
              'RD-02',
              'La evolución clínica no se borra; las correcciones conservan la versión anterior',
              'PA-02, PA-04',
            ],
            [
              'RD-04',
              'Entornos de prueba solo con datos anonimizados',
              'PA-04',
            ],
            ['RD-05', 'Exportación en formatos abiertos', 'PA-07'],
            ['RD-06', 'Diagnósticos codificados con CIE-10', 'PA-08'],
          ],
        },
      ],
    },
    {
      id: 'aplicaciones-asis-tobe',
      kicker: 'Lámina 7',
      title: 'Aplicaciones: AS-IS y TO-BE',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'De nueve sistemas aislados a un portafolio integrado alrededor del expediente.',
        },
        {
          kind: 'figure',
          number: 'D-07',
          caption: 'Arquitectura de aplicaciones actual (AS-IS): sistemas aislados',
          figure: {
            kind: 'image',
            src: '/img/a05/d-07-aplicaciones-asis.png',
            thumb: '/img/a05/thumbs/d-07-aplicaciones-asis.jpg',
            alt: 'Diagrama de la arquitectura de aplicaciones actual: sistemas sectoriales y del proveedor aislados, cada uno con su propio registro del paciente.',
            ratio: '3886 / 4400',
          },
        },
        {
          kind: 'table',
          number: 'Tabla 16',
          caption: 'Portafolio de aplicaciones base (por verificar)',
          columns: ['Código', 'Aplicación actual (por verificar)', 'Propósito'],
          wide: true,
          rows: [
            ['APB-01', 'HIS-MINSA', 'Registro de atenciones para el sector'],
            [
              'APB-02',
              'Aplicativo de prestaciones del SIS',
              'Formato Único de Atención para el financiamiento',
            ],
            ['APB-03', 'SISMED', 'Medicamentos e insumos'],
            ['APB-04', 'SIGA', 'Logística'],
            ['APB-05', 'SIAF', 'Presupuesto'],
            ['APB-06', 'NotiSP', 'Vigilancia'],
            ['APB-07', 'RefCon', 'Referencias'],
            [
              'APB-08',
              'Sistema del proveedor actual',
              'Admisión y registros parciales',
            ],
            ['APB-09', 'Registros del laboratorio', 'Resultados'],
          ],
          note: 'La característica común de la arquitectura base es que cada aplicación registra sus propios datos del paciente y no se comunica con las demás, lo que obliga a digitar varias veces la misma información.',
        },
        {
          kind: 'figure',
          number: 'Figura 3',
          caption: 'Cooperación entre aplicaciones en la arquitectura objetivo',
          figure: {
            kind: 'image',
            src: '/img/a05/figura-03-cooperacion-aplicaciones.png',
            thumb: '/img/a05/thumbs/figura-03-cooperacion-aplicaciones.jpg',
            alt: 'Diagrama de cooperación de las aplicaciones objetivo alrededor del Expediente Clínico Electrónico Único, el índice maestro y el servicio de interoperabilidad.',
            ratio: '4400 / 1770',
          },
        },
        {
          kind: 'table',
          number: 'Tabla 17',
          caption: 'Portafolio de aplicaciones objetivo',
          columns: ['Código', 'Aplicación objetivo', 'Propósito'],
          wide: true,
          rows: [
            [
              'AP-01',
              strong('Expediente Clínico Electrónico Único'),
              'Registro clínico único por paciente',
            ],
            [
              'AP-02',
              'Gestión de citas y flujo de atención',
              'Citas, admisión y tiempos de espera',
            ],
            [
              'AP-03',
              'Índice maestro de pacientes',
              'Identificador único compartido',
            ],
            [
              'AP-04',
              'Identidad, acceso y auditoría',
              'Perfiles por rol y registro de accesos',
            ],
            [
              'AP-05',
              'Servicio de interoperabilidad',
              'Intercambio con MINSA, SIS, DIRESA y PIDE',
            ],
            ['AP-06', 'Tablero de indicadores', 'Indicadores estratégicos'],
            [
              'AP-07',
              'Plataforma de capacitación',
              'Horas de capacitación por profesional',
            ],
            [
              'APB-01 a APB-07',
              'Sistemas sectoriales',
              strong('Se mantienen y se integran'),
            ],
          ],
        },
        { kind: 'h3', text: 'Lectura de las figuras' },
        {
          kind: 'list',
          items: [
            'En el D-07 cada sistema registra al paciente por su cuenta y no se comunica con los demás.',
            'En la Figura 3 todo converge en el expediente: citas e índice maestro lo alimentan; laboratorio y SISMED se conectan con él; el sector se alcanza solo a través del servicio de interoperabilidad; y el servicio de identidad protege a todas las aplicaciones.',
          ],
        },
      ],
    },
    {
      id: 'aplicaciones-interfaces',
      kicker: 'Lámina 8',
      title: 'Aplicaciones: interfaces',
      blocks: [
        {
          kind: 'table',
          number: 'Tabla 19',
          caption: 'Catálogo preliminar de interfaces',
          columns: ['Código', 'De → A', 'Información', 'Estándar'],
          wide: true,
          rows: [
            [
              'IF-01',
              'Citas → Expediente',
              'Cita y admisión',
              'API REST interna',
            ],
            [
              'IF-02',
              'Expediente y sistemas sectoriales → Tablero',
              'Datos agregados',
              'Extracción periódica (ETL)',
            ],
            [
              'IF-03',
              'Interoperabilidad → MINSA (RENHICE)',
              'Documentos de la historia clínica',
              'Estándar del MINSA; HL7 FHIR preferente',
            ],
            [
              'IF-04',
              'Recursos Humanos → Capacitación',
              'Datos del profesional',
              'Servicio interno',
            ],
            [
              'IF-05',
              'Identidad → todas las aplicaciones',
              'Autenticación y auditoría',
              'Identidad federada',
            ],
            [
              'IF-06',
              'Índice maestro → RENIEC vía PIDE',
              'Validación de identidad',
              'Servicio de la PIDE',
            ],
            [
              'IF-07',
              'Expediente → SIS',
              'Prestación del asegurado',
              'Mecanismo del SIS',
            ],
            [
              'IF-08',
              'Expediente ↔ Laboratorio e imágenes',
              'Órdenes, resultados e imágenes',
              'HL7 FHIR y DICOM',
            ],
            [
              'IF-09',
              'Expediente → SISMED',
              'Prescripción y dispensación',
              'Según lo que permita el sistema',
            ],
          ],
        },
        {
          kind: 'p',
          text: 'Correcciones respecto a la versión 1.0: IF-02 ya no usa FHIR para el tablero (usa ETL); IF-04 ya no sale del sistema de citas de pacientes, sino de Recursos Humanos.',
        },
      ],
    },
    {
      id: 'tecnologia-asis-tobe',
      kicker: 'Lámina 9',
      title: 'Tecnología: AS-IS y TO-BE',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'De una infraestructura frágil a una plataforma que resiste las condiciones de la selva.',
        },
        {
          kind: 'figure',
          number: 'D-09',
          caption: 'Arquitectura tecnológica actual (AS-IS)',
          figure: {
            kind: 'image',
            src: '/img/a05/d-09-tecnologia-asis.png',
            thumb: '/img/a05/thumbs/d-09-tecnologia-asis.jpg',
            alt: 'Diagrama de la arquitectura tecnológica actual: servidores físicos, almacenamiento disperso, red sin segmentar y un solo enlace de conectividad.',
            ratio: '2200 / 850',
          },
        },
        {
          kind: 'table',
          number: 'Tabla 20',
          caption: 'Situación actual de la tecnología',
          columns: ['Componente', 'Situación actual', 'Confianza'],
          wide: true,
          rows: [
            [
              'Cómputo',
              'Servidores físicos limitados, sin virtualización',
              confirm('Confirmado'),
            ],
            [
              'Almacenamiento',
              'Disperso en servidores y equipos de usuario',
              confirm('Confirmado'),
            ],
            [
              'Respaldo',
              'No sistemático, sin pruebas de recuperación',
              probable('Probable'),
            ],
            [
              'Red interna',
              'Red sin segmentar; el tráfico clínico y el administrativo comparten la misma red',
              confirm('Confirmado'),
            ],
            [
              'Conectividad externa',
              'Un solo enlace, con ancho de banda limitado',
              probable('Probable'),
            ],
            [
              'Energía',
              'Cortes ocasionales en temporada de lluvias; protección ininterrumpida insuficiente',
              probable('Probable'),
            ],
            [
              'Estaciones de trabajo',
              'Antigüedad variable; no todos los consultorios tienen equipo',
              verify('Por verificar'),
            ],
            [
              'Seguridad',
              'Antivirus en equipos; sin gestión centralizada de identidades ni registro de eventos',
              probable('Probable'),
            ],
          ],
        },
        {
          kind: 'figure',
          number: 'D-10',
          caption: 'Arquitectura tecnológica objetivo (TO-BE): plataforma resiliente',
          figure: {
            kind: 'image',
            src: '/img/a05/d-10-tecnologia-tobe.png',
            thumb: '/img/a05/thumbs/d-10-tecnologia-tobe.jpg',
            alt: 'Diagrama de la arquitectura tecnológica objetivo: centro de datos local virtualizado, red segmentada, doble conectividad, energía protegida y respaldo.',
            ratio: '3800 / 3100',
          },
        },
        {
          kind: 'table',
          number: 'Tabla 21',
          caption: 'Componentes de la plataforma tecnológica objetivo',
          columns: ['Componente', 'Estándar objetivo', 'Principio asociado', 'Brecha que atiende'],
          wide: true,
          rows: [
            [
              'Cómputo',
              'Servidores virtualizados y consolidados en un centro de datos local, con capacidad de crecimiento',
              'PA-07',
              'BR-04',
            ],
            [
              'Almacenamiento',
              'Almacenamiento centralizado con redundancia de discos',
              'PA-02, PA-04',
              'BR-04',
            ],
            [
              'Respaldo',
              'Esquema de tres copias, en dos medios distintos y una fuera del hospital; pruebas de recuperación periódicas',
              'PA-02',
              'BR-04',
            ],
            [
              'Red interna',
              'Red segmentada (clínica, administrativa, invitados y gestión), con prioridad para el tráfico clínico',
              'PA-03',
              'BR-01, BR-04',
            ],
            [
              'Conectividad externa',
              'Dos enlaces de proveedores distintos, con conmutación automática',
              'PA-02',
              'BR-04',
            ],
            [
              'Energía',
              'Sistemas de alimentación ininterrumpida para servidores, red y consultorios; grupo electrógeno para el centro de datos',
              'PA-02',
              'BR-04',
            ],
            [
              'Estaciones de trabajo',
              'Equipo en cada consultorio, triaje, admisión, laboratorio y farmacia',
              'PA-05',
              'BR-03',
            ],
            [
              'Seguridad',
              'Gestión centralizada de identidades, cortafuegos, cifrado y registro centralizado de eventos',
              'PA-03, PA-04',
              'BR-01',
            ],
          ],
        },
        {
          kind: 'h3',
          text: 'Lectura de los diagramas — cuatro decisiones para la selva (sección 6.3)',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Núcleo local: la atención no depende de internet.',
            'Modo de contingencia: registro local y sincronización posterior.',
            'Energía protegida para todo lo que sostiene la atención.',
            'Envío diferido al sector: colas que reintentan cuando vuelve la conexión.',
          ],
        },
      ],
    },
    {
      id: 'vista-capas',
      kicker: 'Lámina 10',
      title: 'Vista integrada por capas',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Los cuatro dominios en una sola imagen: negocio arriba, tecnología abajo.',
        },
        {
          kind: 'figure',
          number: 'D-11',
          caption: 'Vista por capas de la arquitectura actual (AS-IS)',
          figure: {
            kind: 'image',
            src: '/img/a01/figura-06-capas-asis.jpg',
            thumb: '/img/a01/thumbs/figura-06-capas-asis.jpg',
            alt: 'Vista por capas de la arquitectura actual: negocio, datos, aplicaciones y tecnología del Hospital de Tingo María, con los sistemas y registros existentes.',
            ratio: '2752 / 1536',
          },
        },
        {
          kind: 'p',
          text: 'Es la misma imagen que la Figura 6 del A-01.',
        },
        {
          kind: 'figure',
          number: 'Figura 4',
          caption: 'Vista por capas de la arquitectura objetivo para la consulta externa',
          figure: {
            kind: 'image',
            src: '/img/a05/figura-04-capas-tobe.png',
            thumb: '/img/a05/thumbs/figura-04-capas-tobe.jpg',
            alt: 'Vista por capas de la arquitectura objetivo para la consulta externa: negocio, aplicaciones, datos y tecnología integrados.',
            ratio: '4132 / 4400',
          },
          note: 'Vista equivalente al punto de vista «por capas» de ArchiMate. En la Fase B se modelará en ArchiMate con la herramienta Archi.',
        },
        {
          kind: 'table',
          number: 'Tabla',
          caption: 'Comparación de la vista por capas: AS-IS y TO-BE',
          columns: ['Capa', 'AS-IS (D-11)', 'TO-BE (Figura 4)'],
          wide: true,
          rows: [
            [
              'Negocio',
              'Procesos por servicio, con papel en cada paso',
              'Cita → admisión → triaje → consulta → apoyo al diagnóstico → receta → registro',
            ],
            [
              'Aplicaciones',
              'Sistemas aislados',
              'Citas, expediente, índice maestro, interoperabilidad, tablero, identidad y auditoría',
            ],
            [
              'Datos',
              'Copias del paciente en cada sistema',
              'Datos maestros y transaccionales en una sola fuente',
            ],
            [
              'Tecnología',
              'Servidores físicos, red sin segmentar, un solo enlace',
              'Centro de datos virtualizado, red segmentada, doble conectividad, energía protegida y respaldo',
            ],
          ],
        },
        {
          kind: 'p',
          text: 'Lectura: cada capa sirve a la de arriba. En el AS-IS las capas no están conectadas entre sí de forma ordenada; en el TO-BE todo se apoya en el expediente y en una plataforma resiliente.',
        },
      ],
    },
    {
      id: 'decisiones',
      kicker: 'Lámina 11',
      title: 'Decisiones de arquitectura',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Cada decisión importante está justificada y ligada a un principio.',
        },
        {
          kind: 'table',
          number: 'Tabla 23',
          caption: 'Decisiones de arquitectura',
          columns: ['Código', 'Decisión', 'Por qué', 'Principio'],
          wide: true,
          rows: [
            [
              'DA-01',
              'El expediente único es el eje de la arquitectura',
              'Habilita a todas las demás capacidades',
              'PA-08',
            ],
            [
              'DA-02',
              strong('Integrar los sistemas sectoriales, no reemplazarlos'),
              'Son obligatorios o de otras entidades',
              'PA-06, PA-07',
            ],
            [
              'DA-03',
              'Núcleo en un centro de datos local, con respaldo externo',
              'La conectividad limitada haría depender la atención de internet',
              'PA-02',
            ],
            [
              'DA-04',
              'Estándares abiertos: HL7 FHIR, DICOM, CIE-10',
              'Interoperabilidad y menor dependencia del proveedor',
              'PA-07',
            ],
            [
              'DA-05',
              'Seguridad como servicio transversal',
              'Mismo nivel de protección en todo el portafolio',
              'PA-03, PA-04',
            ],
            [
              'DA-06',
              'Implementar por estados de transición',
              'Presupuesto cerrado y hospital aún no listo',
              'PA-02, PA-07',
            ],
          ],
        },
      ],
    },
    {
      id: 'brechas-impacto',
      kicker: 'Lámina 12',
      title: 'Brechas e impacto',
      blocks: [
        {
          kind: 'table',
          number: 'Tablas 24 a 27',
          caption: 'Brechas por dominio',
          columns: ['Dominio', 'Se elimina o reemplaza', 'Es nuevo'],
          wide: true,
          rows: [
            [
              'Negocio',
              'Turnos por orden de llegada, búsqueda de historia física, orden escrita, digitación posterior, indicadores manuales',
              'Procedimiento de contingencia',
            ],
            [
              'Datos',
              'Registros del paciente separados en cada sistema',
              'Índice maestro, dueños de datos, 4 niveles de sensibilidad, reglas de calidad',
            ],
            [
              'Aplicaciones',
              '(El sistema del proveedor se decide en la Fase E)',
              'Expediente, citas, índice maestro, identidad, interoperabilidad, tablero, capacitación',
            ],
            [
              'Tecnología',
              'Servidores físicos, red plana, un solo enlace',
              'Virtualización, segmentación, doble enlace, energía protegida, identidades y monitoreo',
            ],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 28',
          caption: 'Impacto de la arquitectura objetivo',
          columns: ['Ámbito', 'Impacto', 'Intensidad', 'Respuesta'],
          wide: true,
          rows: [
            [
              'Médicos y enfermería',
              'Del papel al registro electrónico',
              high('Alta'),
              'Pruebas de usabilidad y acompañamiento',
            ],
            [
              'Admisión y archivo',
              'Cambio de funciones',
              high('Alta'),
              'Redefinición de roles con Recursos Humanos',
            ],
            [
              'OSI',
              'Nuevos servicios críticos y roles',
              high('Alta'),
              'Paquete de fortalecimiento de la OSI',
            ],
            [
              'Proveedor actual',
              'Posible cambio de su contrato',
              medium('Media'),
              'Comunicación formal y contratos de arquitectura',
            ],
            [
              'Pacientes',
              'Atención más rápida; cambios en citas',
              medium('Media'),
              'Información en salas de espera',
            ],
            [
              'Presupuesto',
              'Inversión en software, infraestructura y personal',
              high('Alta'),
              'Implementación por etapas',
            ],
          ],
        },
      ],
    },
    {
      id: 'estados-transicion',
      kicker: 'Lámina 13',
      title: 'Estados de transición',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'No se cambia todo de golpe; se avanza en cuatro estados, cada uno con coexistencia y reversión.',
        },
        {
          kind: 'figure',
          number: 'Figura 5',
          caption: 'Secuencia de los estados de transición',
          figure: {
            kind: 'image',
            src: '/img/a05/figura-05-estados-transicion.png',
            thumb: '/img/a05/thumbs/figura-05-estados-transicion.jpg',
            alt: 'Secuencia de transición: arquitectura base, TA-1 Fundamentos, TA-2 Piloto de consulta externa, TA-3 Consulta externa completa y arquitectura objetivo a 24 meses; TA-4 sigue como iteración posterior en línea discontinua.',
            ratio: '2200 / 800',
          },
          note: 'La arquitectura objetivo a 24 meses se alcanza con TA-3; TA-4 queda para un nuevo ciclo del ADM y se representa con línea discontinua.',
        },
        {
          kind: 'table',
          number: 'Tabla 29',
          caption: 'Estados de transición propuestos',
          columns: ['Estado', 'Nombre', 'Contenido principal', 'Valor que entrega'],
          wide: true,
          rows: [
            [
              'TA-1',
              strong('Fundamentos'),
              'Gobierno operativo, inventario, virtualización, red segmentada, energía protegida, identidad y auditoría, índice maestro con depuración de duplicados',
              'Base segura e identificación única del paciente',
            ],
            [
              'TA-2',
              strong('Piloto de consulta externa'),
              'Expediente y citas en una especialidad piloto, en coexistencia con la historia física; laboratorio en línea',
              'Evidencia real de menos espera y registro completo',
            ],
            [
              'TA-3',
              strong('Consulta externa completa'),
              'Todas las especialidades, receta electrónica, interfaces con SIS y RENHICE, tablero y capacitación',
              'Metas de KPI-01, KPI-02 y KPI-04',
            ],
            [
              'TA-4',
              strong('Siguiente iteración'),
              'Hospitalización y emergencia',
              'Continuidad del cuidado en todo el hospital',
            ],
          ],
          note: 'Cada estado de transición incluirá coexistencia con el sistema anterior y un mecanismo de reversión, conforme al principio PA-02.',
        },
        { kind: 'h3', text: 'Lectura de la figura' },
        {
          kind: 'list',
          items: [
            'La secuencia va de la arquitectura base a la arquitectura objetivo a 24 meses; el TA-4 queda para un nuevo ciclo del ADM.',
            'No tiene fechas de ejecución: se detalla y se programa en las Fases E y F.',
            'Corrección respecto a la versión 1.0: antes se programaba la migración en los meses 4 a 6, lo que contradecía el A-02 (la implementación está fuera de los seis meses).',
          ],
        },
      ],
    },
    {
      id: 'bloques-conclusiones',
      kicker: 'Lámina 14',
      title: 'Bloques de construcción y conclusiones',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'En la Fase A se definen qué capacidades se necesitan (ABB); los productos concretos (SBB) se eligen en la Fase E.',
        },
        {
          kind: 'table',
          number: 'Tabla 30',
          caption: 'Bloques de construcción de arquitectura',
          columns: ['ABB', 'Nombre', 'Opciones de solución a evaluar en la Fase E'],
          wide: true,
          rows: [
            [
              'BB-01',
              'Servicio de expediente clínico electrónico',
              'Solución del MINSA, ampliar el sistema actual, producto de mercado o desarrollo propio',
            ],
            [
              'BB-02',
              'Identificación única de pacientes',
              'Módulo del expediente o componente independiente',
            ],
            [
              'BB-03',
              'Citas y flujo de atención',
              'Módulo del expediente o producto independiente',
            ],
            [
              'BB-04',
              'Identidad, acceso y auditoría',
              'Solución de código abierto o incluida en la plataforma',
            ],
            [
              'BB-05',
              'Interoperabilidad sectorial',
              'Plataforma de integración abierta o servicio del proveedor',
            ],
            [
              'BB-06',
              'Indicadores y analítica',
              'Herramienta de inteligencia de negocios',
            ],
            [
              'BB-07',
              'Plataforma de capacitación',
              'Plataforma abierta o del sector',
            ],
            [
              'BB-08',
              'Infraestructura resiliente',
              'Equipamiento propio o servicios administrados',
            ],
          ],
        },
        { kind: 'h3', text: 'Conclusiones' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Primera definición concreta de los cuatro dominios, con nivel de confianza en cada elemento.',
            'El AS-IS repite el mismo patrón en todos los dominios: información duplicada, papel y tecnología frágil.',
            'El TO-BE se organiza alrededor del expediente único y el índice maestro, integra los sistemas sectoriales y se apoya en una plataforma local y resiliente.',
            'Las decisiones están justificadas y ligadas a principios.',
            'La transición avanza en orden de menor riesgo: fundamentos → piloto → consulta externa completa.',
          ],
        },
        { kind: 'cta' },
      ],
    },
  ],
};
