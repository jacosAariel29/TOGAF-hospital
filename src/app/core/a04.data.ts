import type { A01Document, Cell } from './a01.data';

const high = (t: string): Cell => ({ t, tone: 'warn' });
const critical = (t: string): Cell => ({ t, tone: 'bad' });
const medium = (t: string): Cell => ({ t, tone: 'info' });
const low = (t: string): Cell => ({ t, tone: 'ok' });
const strong = (t: string): Cell => ({ t, strong: true });

export const A04: A01Document = {
  code: 'A-04',
  title: 'Evaluación de Capacidades',
  english: 'Capability Assessment',
  version: '2.0',
  date: '20/10/2026',
  pages: 26,
  status: 'Borrador para aprobación',
  author: 'Equipo de Arquitectura Empresarial del proyecto',
  reviewer: 'Architecture Review Board (ARB)',
  summary:
    'La Evaluación de Capacidades establece la línea base del Hospital de Tingo María frente a la arquitectura empresarial: diez capacidades de negocio medidas en una escala de 0 a 5, la madurez de los procesos de cambio y operación de TI, la madurez de la práctica de arquitectura según el ACMM (0,7 sobre 5) y doce factores de preparación para la transformación. Sus resultados identifican la fragmentación de la información como causa común de las capacidades más débiles y derivan ocho brechas priorizadas que orientan las Fases B a G.',
  file: {
    name: 'A-04_Evaluacion_de_Capacidades.pdf',
    path: '/docs/A-04_Evaluacion_de_Capacidades.pdf',
    size: '556 KB',
  },
  sections: [
    {
      id: 'que-evalua',
      kicker: 'Lámina 1',
      title: '¿Qué evalúa este entregable?',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Antes de diseñar el futuro, el hospital necesita saber con honestidad dónde está.',
        },
        {
          kind: 'table',
          number: 'Tabla 4',
          caption: 'Las cuatro evaluaciones que pide TOGAF',
          columns: ['Evaluación', 'Qué responde', 'Sección'],
          rows: [
            [
              strong('Capacidades del negocio'),
              '¿Qué tan bien rinde cada capacidad y cómo se realiza hoy?',
              '3',
            ],
            [
              strong('Capacidades de TI'),
              '¿Qué tan maduros son los procesos de TI y qué impacto tendrá la arquitectura en la OSI?',
              '4',
            ],
            [
              strong('Madurez de la arquitectura'),
              '¿Existe una práctica de arquitectura en el hospital?',
              '5',
            ],
            [
              strong('Preparación para la transformación'),
              '¿Está listo el hospital para cambiar?',
              '6',
            ],
          ],
        },
      ],
    },
    {
      id: 'como-se-evaluo',
      kicker: 'Lámina 2',
      title: 'Cómo se evaluó',
      blocks: [
        {
          kind: 'p',
          text: 'Fuentes de evidencia: documentos de la Fase Preliminar, documentos institucionales, entrevistas a directivos y jefaturas (semanas 3 y 4), cuestionario de preparación, observación de la consulta externa y revisión técnica con la OSI.',
        },
        {
          kind: 'table',
          number: 'Tabla 7',
          caption: 'Escala de capacidad (0 a 5)',
          columns: ['Nivel', 'Denominación', 'Significado'],
          rows: [
            ['0', 'Inexistente', 'La capacidad no existe'],
            ['1', 'Bajo', 'Informal, depende de personas'],
            ['2', 'Moderado bajo', 'Procedimientos parciales'],
            ['3', 'Moderado aceptable', 'Definida y documentada, pero no medida'],
            ['4', 'Alto', 'Gestionada con indicadores e integrada'],
            ['5', 'Óptimo', 'Mejora continua'],
          ],
        },
        { kind: 'h3', text: 'Por qué se cambió la escala' },
        {
          kind: 'p',
          text: 'La versión 1.0 usaba "moderado", "importante" o "no centrado en el paciente", que no eran comparables. Ahora todas las capacidades se miden con la misma escala numérica.',
        },
        {
          kind: 'callout',
          title: 'Advertencia',
          text: 'Las calificaciones son preliminares y se confirman con las entrevistas de las semanas 3 y 4.',
        },
      ],
    },
    {
      id: 'capacidades-negocio',
      kicker: 'Lámina 3',
      title: 'Capacidades de negocio: nivel actual y aspiración',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'De diez capacidades, nueve deben mejorar; las más débiles dependen de compartir información.',
        },
        {
          kind: 'figure',
          number: 'Figura 1',
          caption: 'Nivel actual y aspiración de las capacidades de negocio',
          figure: {
            kind: 'image',
            src: '/img/a04/figura-01-capacidades.png',
            thumb: '/img/a04/thumbs/figura-01-capacidades.jpg',
            alt: 'Gráfico de barras del nivel actual de las diez capacidades de negocio, con la aspiración marcada como línea en nivel 4.',
            ratio: '1920 / 1080',
          },
        },
        { kind: 'h3', text: 'Qué muestra la figura' },
        {
          kind: 'table',
          number: '',
          caption: 'Nivel actual y aspiración de las capacidades de negocio',
          columns: ['Código', 'Capacidad', 'Actual', 'Aspiración', 'Brecha'],
          wide: true,
          rows: [
            ['CB-01', 'Atención y continuidad del cuidado', '3', '4', '1'],
            ['CB-02', 'Gestión de la información clínica', '2', '4', '2'],
            ['CB-03', 'Gestión administrativa y financiera', '3', '3', '0'],
            ['CB-04', 'Abastecimiento y farmacia', '2', '4', '2'],
            ['CB-05', 'Seguridad y privacidad de la información', '3', '4', '1'],
            ['CB-06', 'Interoperabilidad sectorial', strong('1'), '4', strong('3')],
            ['CB-07', 'Gestión de citas y flujo de atención', strong('1'), '4', strong('3')],
            ['CB-08', 'Apoyo al diagnóstico', '2', '4', '2'],
            ['CB-09', 'Gestión estratégica e indicadores', strong('1'), '4', strong('3')],
            ['CB-10', 'Desarrollo y capacitación del personal', '2', '4', '2'],
          ],
        },
        { kind: 'h3', text: 'Lectura de la figura' },
        {
          kind: 'list',
          items: [
            'Las barras más bajas (nivel 1) son citas, interoperabilidad e indicadores: las tres dependen de compartir información.',
            'La gestión de la información clínica (CB-02) es la capacidad habilitadora: sin expediente único no mejoran la continuidad, el apoyo al diagnóstico, la interoperabilidad ni los indicadores.',
            'La gestión administrativa (CB-03) ya está en un nivel aceptable; por eso queda solo como contexto.',
          ],
        },
      ],
    },
    {
      id: 'realizacion-actual',
      kicker: 'Lámina 4',
      title: 'Cómo se realizan hoy las capacidades',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'TOGAF no solo pide el nivel de cada capacidad, sino cómo se realiza hoy: con qué procesos, sistemas e infraestructura.',
        },
        {
          kind: 'figure',
          number: 'D-01b',
          caption:
            'Cómo se realizan hoy las capacidades del Hospital de Tingo María (ArchiMate, Archi)',
          figure: {
            kind: 'image',
            src: '/img/a04/d-01b-realizacion-asis.png',
            thumb: '/img/a04/thumbs/d-01b-realizacion-asis.jpg',
            alt: 'Diagrama ArchiMate de realización de las capacidades del Hospital de Tingo María, con los procesos, sistemas e infraestructura que las soportan hoy.',
            ratio: '4160 / 1640',
          },
        },
        { kind: 'h3', text: 'Qué muestra el diagrama' },
        {
          kind: 'table',
          number: '',
          caption: 'Cómo se realizan hoy las capacidades del Hospital de Tingo María',
          columns: ['Capacidad', 'Se realiza hoy con'],
          rows: [
            [
              'CB-01 Atención y continuidad',
              'Triaje en papel, consulta con historia física, controles programados a mano',
            ],
            [
              'CB-02 Información clínica',
              'Archivo de historias clínicas físicas; sistema del proveedor actual',
            ],
            [
              'CB-04 Abastecimiento y farmacia',
              'Prescripción y dispensación manual; SISMED',
            ],
            ['CB-05 Seguridad', 'Autenticación local por sistema, sin perfiles por rol'],
            [
              'CB-06 Interoperabilidad',
              'Digitación de prestaciones; HIS-MINSA, aplicativo del SIS, NotiSP y RefCon',
            ],
            ['CB-07 Citas', 'Turnos por orden de llegada; admisión en sistemas separados'],
            [
              'CB-08 Apoyo al diagnóstico',
              'Órdenes escritas y resultados impresos; registros del laboratorio',
            ],
            ['CB-09 Indicadores', 'Consolidación manual'],
            [
              'CT-02 Infraestructura',
              'Servidores físicos, red sin segmentar, un solo enlace, estaciones antiguas',
            ],
            ['CT-03 Función de arquitectura', strong('Ningún elemento (nivel 0)')],
          ],
        },
        { kind: 'h3', text: 'Lectura del diagrama' },
        {
          kind: 'list',
          items: [
            'Los elementos en rojo claro evidencian problemas: turnos por orden de llegada, órdenes escritas, resultados impresos, receta manual, digitación, consolidación manual, archivo físico, red sin segmentar y enlace único.',
            'Hay sistemas que realizan varias capacidades a la vez sin comunicarse entre sí: el mismo paciente se registra en cuatro sistemas.',
            'La función de arquitectura no tiene nada que la realice: esa ausencia es el hallazgo.',
          ],
        },
      ],
    },
    {
      id: 'madurez-procesos-ti',
      kicker: 'Lámina 5',
      title: 'Madurez de los procesos de TI',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'La OSI trabaja de forma reactiva; los procesos de cambio y de operación están en nivel 1.',
        },
        {
          kind: 'figure',
          number: 'D-13',
          caption: 'Madurez actual y objetivo del proceso de cambio de TI',
          figure: {
            kind: 'image',
            src: '/img/a04/d-13-madurez-cambio.png',
            thumb: '/img/a04/thumbs/d-13-madurez-cambio.jpg',
            alt: 'Gráfico comparativo de la madurez actual y objetivo de los cinco procesos de cambio de TI.',
            ratio: '1920 / 1080',
          },
        },
        {
          kind: 'figure',
          number: 'D-14',
          caption: 'Madurez actual y objetivo de los procesos operativos de TI',
          figure: {
            kind: 'image',
            src: '/img/a04/d-14-procesos-operativos.png',
            thumb: '/img/a04/thumbs/d-14-procesos-operativos.jpg',
            alt: 'Gráfico comparativo de la madurez actual y objetivo de los siete procesos operativos de TI.',
            ratio: '1920 / 1080',
          },
        },
        { kind: 'h3', text: 'Qué muestran los diagramas' },
        {
          kind: 'table',
          number: 'Tabla 11',
          caption: 'Madurez actual y objetivo de los procesos de cambio de TI',
          columns: ['Proceso de cambio', 'Actual', 'Objetivo'],
          rows: [
            ['Gestión de la demanda', '1', '3'],
            ['Gobierno del diseño', '1', '4'],
            ['Gestión de proyectos de TI', '1', '3'],
            ['Control de cambios', '1', '3'],
            ['Gestión de proveedores', '1', '3'],
            [strong('Promedio'), strong('1,0'), strong('3,2')],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 12',
          caption: 'Madurez actual y objetivo de los procesos operativos de TI',
          columns: ['Proceso operativo', 'Actual', 'Objetivo'],
          rows: [
            ['Soporte a usuarios', '2', '3'],
            ['Gestión de incidentes', '1', '3'],
            ['Respaldo y recuperación', '1', '4'],
            ['Gestión de accesos', '2', '4'],
            ['Inventario y configuración', strong('0'), '3'],
            ['Continuidad ante cortes', '1', '4'],
            ['Monitoreo', '1', '3'],
            [strong('Promedio'), strong('1,1'), strong('3,4')],
          ],
        },
        { kind: 'h3', text: 'Lectura de los diagramas' },
        {
          kind: 'list',
          items: [
            'En el proceso de cambio, el diseño lo deciden los proveedores: no hay revisión de arquitectura.',
            'En la operación, el inventario está en nivel 0 y el respaldo y la continuidad en nivel 1: un corte o una falla de disco pueden detener la atención.',
          ],
        },
      ],
    },
    {
      id: 'capacidad-ti',
      kicker: 'Lámina 6',
      title: 'Capacidad instalada de TI e impacto en la OSI',
      blocks: [
        {
          kind: 'figure',
          number: 'D-15',
          caption: 'Capacidad e infraestructura de TI: nivel actual y objetivo',
          figure: {
            kind: 'image',
            src: '/img/a04/d-15-capacidad-ti.png',
            thumb: '/img/a04/thumbs/d-15-capacidad-ti.jpg',
            alt: 'Gráfico comparativo del nivel actual y objetivo de los siete componentes de capacidad e infraestructura de TI.',
            ratio: '1920 / 1080',
          },
        },
        { kind: 'h3', text: 'Qué muestra el diagrama (Tabla 13)' },
        {
          kind: 'table',
          number: 'Tabla 13',
          caption: 'Capacidad e infraestructura de TI: nivel actual y objetivo',
          columns: ['Componente', 'Actual', 'Objetivo'],
          rows: [
            ['Personal de la OSI', '1', '3'],
            ['Competencias técnicas', '1', '3'],
            ['Usabilidad de las aplicaciones', '2', '4'],
            ['Cómputo y almacenamiento', '1', '4'],
            ['Red y conectividad', '1', '4'],
            ['Energía', '1', '4'],
            ['Portafolio de aplicaciones', '2', '4'],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 14',
          caption: 'Impactos de la arquitectura objetivo sobre la OSI',
          columns: ['Impacto', 'Respuesta'],
          rows: [
            [
              'El expediente se vuelve un servicio crítico',
              'Soporte con tiempos de respuesta y contingencia',
            ],
            [
              'Nuevos roles: identidades, datos maestros, integración y seguridad',
              'Reasignación o contratación (Fases E y F)',
            ],
            [
              'Nuevas competencias: HL7 FHIR, seguridad, virtualización',
              'Plan de capacitación con Recursos Humanos',
            ],
            ['Más carga durante la coexistencia', 'Apoyo temporal en las transiciones'],
            [
              'La OSI supervisa al proveedor, en vez de depender de él',
              'Contratos de arquitectura (G-02)',
            ],
          ],
        },
        { kind: 'h3', text: 'Lectura' },
        {
          kind: 'p',
          text: 'El fortalecimiento de la OSI debe ser un paquete de trabajo propio en la hoja de ruta, no un efecto secundario de comprar software.',
        },
      ],
    },
    {
      id: 'madurez-arquitectura',
      kicker: 'Lámina 7',
      title: 'Madurez de la práctica de arquitectura (ACMM)',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'La práctica de arquitectura está en su etapa inicial: 0,7 sobre 5.',
        },
        {
          kind: 'figure',
          number: 'D-16',
          caption:
            'Madurez de la práctica de arquitectura según el ACMM: actual, Mes 6 y 24 meses',
          figure: {
            kind: 'image',
            src: '/img/a04/d-16-acmm.png',
            thumb: '/img/a04/thumbs/d-16-acmm.jpg',
            alt: 'Gráfico de la madurez de los nueve elementos del ACMM en la situación actual, al Mes 6 y a 24 meses.',
            ratio: '1920 / 1080',
          },
        },
        { kind: 'h3', text: 'Qué muestra el diagrama (Tabla 15)' },
        {
          kind: 'table',
          number: 'Tabla 15',
          caption: 'Madurez de la práctica de arquitectura según los nueve elementos del ACMM',
          columns: ['Elemento del ACMM', 'Actual', 'Mes 6', '24 meses'],
          wide: true,
          rows: [
            ['Proceso de arquitectura', '1', '2', '3'],
            ['Desarrollo de la arquitectura', '1', '2', '3'],
            ['Vínculo con el negocio', '1', '2', '3'],
            ['Participación de la alta dirección', '1', '3', '3'],
            ['Participación de las unidades operativas', strong('0'), '2', '3'],
            ['Comunicación de la arquitectura', '1', '2', '3'],
            ['Seguridad de la información', '1', '2', '3'],
            ['Gobierno de la arquitectura', strong('0'), '2', '3'],
            ['Estrategia de inversión y adquisición de TI', strong('0'), '1', '3'],
            [strong('Promedio'), strong('0,7'), strong('2,0'), strong('3,0')],
          ],
          note: 'Adaptado del Architecture Capability Maturity Model incluido en TOGAF Version 9.1 (cap. 51), por The Open Group, 2011, Van Haren Publishing.',
        },
        { kind: 'h3', text: 'Lectura del diagrama' },
        {
          kind: 'list',
          items: [
            'Un nivel bajo es lo esperado en una primera iteración; no es una falla del hospital.',
            'Lo crítico son los tres elementos en nivel 0: gobierno, participación de las áreas y estrategia de inversión. Si no suben, cualquier compra futura podría ignorar la arquitectura.',
            'Por eso el ARB y la formalización de la función de arquitectura son condiciones previas del A-02.',
          ],
        },
      ],
    },
    {
      id: 'preparacion',
      kicker: 'Lámina 8',
      title: 'Preparación para la transformación',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'El hospital necesita el cambio, pero no está listo para ejecutarlo.',
        },
        {
          kind: 'figure',
          number: 'Figura 2',
          caption: 'Estado actual y objetivo de los factores de preparación',
          figure: {
            kind: 'image',
            src: '/img/a04/figura-02-preparacion.png',
            thumb: '/img/a04/thumbs/figura-02-preparacion.jpg',
            alt: 'Gráfico comparativo del estado actual y objetivo de los doce factores de preparación para la transformación.',
            ratio: '1920 / 1080',
          },
        },
        { kind: 'h3', text: 'Qué muestra la figura (Tabla 18)' },
        {
          kind: 'table',
          number: 'Tabla 18',
          caption: 'Estado actual y objetivo de los factores de preparación',
          columns: ['Factor', 'Actual', 'Objetivo', 'Urgencia', 'Dificultad'],
          wide: true,
          rows: [
            ['F-01 Visión', '1', '3', 'Alta', 'Fácil'],
            ['F-02 Voluntad y determinación', '2', '3', 'Alta', 'Moderada'],
            ['F-03 Necesidad', strong('3'), '3', 'Baja', 'Fácil'],
            ['F-04 Caso de negocio', strong('0'), '3', 'Alta', 'Moderada'],
            ['F-05 Financiamiento', strong('0'), '3', 'Alta', 'Difícil'],
            ['F-06 Patrocinio y liderazgo', '1', '4', 'Alta', 'Fácil'],
            ['F-07 Gobierno', strong('0'), '3', 'Alta', 'Fácil'],
            ['F-08 Rendición de cuentas', '1', '3', 'Alta', 'Fácil'],
            ['F-09 Enfoque de ejecución viable', '1', '3', 'Media', 'Moderada'],
            ['F-10 Capacidad de TI', '1', '3', 'Media', 'Difícil'],
            ['F-11 Capacidad de las áreas', '1', '3', 'Alta', 'Moderada'],
            ['F-12 Capacidad para implementar y operar', '1', '3', 'Media', 'Difícil'],
          ],
          note: 'Escala de preparación: 0 ausente · 1 bajo · 2 aceptable · 3 bueno · 4 alto.',
        },
        { kind: 'h3', text: 'Lectura de la figura' },
        {
          kind: 'list',
          items: [
            'La única barra que alcanza su objetivo es la necesidad (F-03): todos reconocen que hay que cambiar.',
            'Tres factores están ausentes (nivel 0): caso de negocio, financiamiento y gobierno.',
            'Se evaluaron los 12 factores que propone TOGAF; el A-01 resume 10 de ellos.',
          ],
        },
      ],
    },
    {
      id: 'urgencia-dificultad',
      kicker: 'Lámina 9',
      title: 'Urgencia frente a dificultad',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Cruzar urgencia y dificultad dice qué resolver ya y qué planificar.',
        },
        {
          kind: 'table',
          number: 'Tabla 19',
          caption: 'Clasificación de los factores',
          columns: ['Grupo', 'Factores', 'Qué hacer'],
          wide: true,
          rows: [
            [
              strong('Urgentes y fáciles'),
              'Visión, patrocinio, gobierno, rendición de cuentas',
              'Resolver de inmediato con decisiones de la Dirección; son condiciones previas del A-02',
            ],
            [
              strong('Urgentes y difíciles'),
              'Voluntad, caso de negocio, financiamiento, capacidad de las áreas',
              'Iniciar ya y sostener con el patrocinador y el Plan de Comunicaciones',
            ],
            [
              strong('Menos urgentes pero difíciles'),
              'Enfoque de ejecución, capacidad de TI, capacidad para implementar',
              'Incluirlos como paquetes de trabajo en las Fases E y F',
            ],
            [
              strong('Sin acción adicional'),
              'Necesidad',
              'Usarla como argumento en la comunicación',
            ],
          ],
        },
        { kind: 'h3', text: 'Riesgos de preparación (Tabla 20)' },
        {
          kind: 'table',
          number: 'Tabla 20',
          caption: 'Riesgos de preparación',
          columns: ['Riesgo', 'Inicial', 'Residual'],
          rows: [
            ['R-P-01 Avanzar sin patrocinador formal', high('Alto'), low('Bajo')],
            ['R-P-02 No obtener financiamiento para implementar', high('Alto'), medium('Medio')],
            ['R-P-03 Compras de TI fuera del ARB', high('Alto'), medium('Medio')],
            ['R-P-04 El personal clínico no se apropia del cambio', high('Alto'), medium('Medio')],
            ['R-P-05 La OSI no puede operar la nueva arquitectura', high('Alto'), medium('Medio')],
          ],
        },
      ],
    },
    {
      id: 'brechas',
      kicker: 'Lámina 10',
      title: 'Brechas',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Ocho brechas, cada una respaldada por la evidencia de las evaluaciones.',
        },
        {
          kind: 'figure',
          number: 'D-18',
          caption: 'Brechas: nivel actual frente a nivel objetivo',
          figure: {
            kind: 'image',
            src: '/img/a04/d-18-brechas.png',
            thumb: '/img/a04/thumbs/d-18-brechas.jpg',
            alt: 'Gráfico de brechas que compara el nivel actual con el nivel objetivo de las ocho brechas priorizadas.',
            ratio: '1920 / 1080',
          },
        },
        { kind: 'h3', text: 'Qué muestra el diagrama (Tabla 21)' },
        {
          kind: 'table',
          number: 'Tabla 21',
          caption: 'Brechas: nivel actual frente a nivel objetivo',
          columns: ['Brecha', 'Evidencia', 'Actual → Objetivo', 'Prioridad'],
          wide: true,
          rows: [
            [
              'BR-05 Función de arquitectura no formalizada',
              'ACMM gobierno e inversión; F-07',
              '0 → 3',
              critical('Crítica'),
            ],
            [
              'BR-06 Sin inventario de sistemas',
              'Inventario y configuración en nivel 0',
              '0 → 3',
              high('Alta'),
            ],
            [
              'BR-02 Atención no centrada en el paciente',
              'CB-01, CB-02, CB-07, CB-08',
              '1-3 → 4',
              high('Alta'),
            ],
            [
              'BR-01 Seguridad no institucionalizada',
              'CB-05; ACMM seguridad',
              '3 → 4',
              high('Alta'),
            ],
            [
              'BR-04 Infraestructura y OSI no dimensionadas',
              'Tabla 13; F-10, F-12',
              '1 → 4',
              high('Alta'),
            ],
            [
              'BR-08 Planificación sin vigencia confirmada',
              'CB-09',
              '1 → 4',
              high('Alta'),
            ],
            [
              'BR-03 Baja usabilidad',
              'Usabilidad de aplicaciones',
              '2 → 4',
              medium('Media'),
            ],
            [
              'BR-07 Sin financiamiento recurrente',
              'F-04, F-05',
              '0 → 3',
              medium('Media'),
            ],
          ],
        },
        {
          kind: 'table',
          number: 'Tabla 22',
          caption: 'Brechas por verbo de la misión',
          columns: ['Verbo', 'Brechas que lo afectan'],
          rows: [
            ['Prevenir', 'BR-02, BR-06, BR-08'],
            ['Proteger', 'BR-01, BR-04'],
            ['Recuperar', 'BR-02, BR-03, BR-04'],
            ['Rehabilitar', 'BR-02, BR-03'],
            ['Todos', 'BR-05, BR-07'],
          ],
        },
      ],
    },
    {
      id: 'priorizacion',
      kicker: 'Lámina 11',
      title: 'Resolución y priorización',
      blocks: [
        {
          kind: 'p',
          lead: true,
          text: 'Primero se resuelve lo que bloquea a lo demás.',
        },
        {
          kind: 'table',
          number: 'Tabla 24',
          caption: 'Orden de prioridad',
          columns: ['Orden', 'Brecha', 'Por qué va en ese orden', 'Fase'],
          wide: true,
          rows: [
            ['1', 'BR-05 Función de arquitectura', 'Bloquea la aprobación del A-02', 'A y G'],
            ['2', 'BR-08 Planificación vigente', 'Bloquea la validación de objetivos', 'A y B'],
            ['3', 'BR-06 Inventario', 'Bloquea las Fases C y D', 'C y D'],
            ['4', 'BR-02 Atención centrada en el paciente', 'Eje de la Fase B', 'B y C'],
            ['5', 'BR-01 Seguridad', 'Requisito de la Fase C', 'C y D'],
            ['6', 'BR-04 Infraestructura y OSI', 'Requisito de las Fases D a F', 'D, E y F'],
            ['7', 'BR-03 Usabilidad', 'Requisito de la Fase C', 'B, C y G'],
            ['8', 'BR-07 Financiamiento recurrente', 'Requisito de las Fases F y G', 'F y G'],
          ],
        },
        {
          kind: 'callout',
          title: 'Corrección respecto a la versión 1.0',
          text: 'BR-05, BR-07 y BR-08 se asignaban a la Fase Preliminar, que ya concluyó. Ahora se resuelven en las fases donde realmente es posible.',
        },
      ],
    },
    {
      id: 'conclusiones',
      kicker: 'Lámina 12',
      title: 'Conclusiones',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Capacidades de negocio: nueve de diez deben mejorar; el problema común es la fragmentación de la información.',
            'TI: procesos en nivel 1, sin inventario y con infraestructura frágil; la OSI necesita nuevos roles y competencias.',
            'Arquitectura: madurez de 0,7 sobre 5; gobierno, participación de las áreas e inversión en nivel 0.',
            'Preparación: el hospital necesita el cambio, pero le faltan caso de negocio, financiamiento, patrocinio y gobierno.',
            'Brechas: ocho brechas priorizadas, cada una con principio, enfoque, fase, entregable y responsable.',
          ],
        },
        { kind: 'cta' },
      ],
    },
  ],
};
