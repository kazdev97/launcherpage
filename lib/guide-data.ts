export type Step = {
  title: string
  description: string
  // Indica si esta sección incluye un espacio para captura de pantalla
  screenshot?: {
    // Texto guía de lo que debes capturar aquí
    caption: string
    // Ruta opcional de la imagen una vez la subas a /public
    src?: string
  }
  // Lista opcional de notas o tips
  notes?: string[]
}

export type Section = {
  id: string
  label: string
  // Etiqueta corta para el menú lateral
  group: string
  title: string
  intro: string
  steps: Step[]
}

export const GROUPS = [
  'Primeros pasos',
  'Instalación',
  'Uso del launcher',
  'Solución de problemas',
] as const

export const SECTIONS: Section[] = [
  {
    id: 'introduccion',
    label: 'Introducción',
    group: 'Primeros pasos',
    title: 'Bienvenido a BlockLauncher',
    intro:
      'BlockLauncher es tu launcher de Minecraft, diseñado para que entres al juego en segundos. Aquí encontrarás todo lo que necesitas para instalarlo, configurarlo y empezar a jugar.',
    steps: [
      {
        title: '¿Qué es BlockLauncher?',
        description:
          'Escribe aquí una breve descripción de tu launcher: qué hace, para qué versiones de Minecraft sirve y qué lo hace especial.',
        screenshot: {
          caption: 'Captura de la pantalla principal del launcher al abrirlo.',
        },
      },
      {
        title: 'Requisitos del sistema',
        description:
          'Indica los requisitos mínimos: sistema operativo, memoria RAM, versión de Java, espacio en disco, etc.',
        notes: [
          'Sistema operativo: Windows 10/11, macOS o Linux.',
          'Memoria RAM recomendada: 4 GB o más.',
          'Java: incluye la versión necesaria aquí.',
        ],
      },
    ],
  },
  {
    id: 'descarga',
    label: 'Descargar',
    group: 'Instalación',
    title: 'Descargar el launcher',
    intro:
      'Sigue estos pasos para descargar BlockLauncher desde la fuente oficial y dejarlo listo para instalar.',
    steps: [
      {
        title: 'Paso 1 — Ir a la página de descargas',
        description:
          'Explica desde dónde se descarga el launcher y qué botón debe pulsar el usuario.',
        screenshot: {
          caption: 'Captura del botón de descarga en tu página web.',
        },
      },
      {
        title: 'Paso 2 — Elegir tu sistema operativo',
        description:
          'Describe cómo el usuario selecciona la versión correcta para su sistema (Windows, Mac, Linux).',
        screenshot: {
          caption: 'Captura del selector de sistema operativo.',
        },
      },
    ],
  },
  {
    id: 'instalacion',
    label: 'Instalar',
    group: 'Instalación',
    title: 'Instalar BlockLauncher',
    intro:
      'Una vez descargado el archivo, instala el launcher siguiendo estos pasos.',
    steps: [
      {
        title: 'Paso 1 — Abrir el instalador',
        description:
          'Explica cómo abrir el archivo descargado y qué hacer si el sistema muestra una advertencia.',
        screenshot: {
          caption: 'Captura de la ventana del instalador.',
        },
      },
      {
        title: 'Paso 2 — Completar la instalación',
        description:
          'Describe los clics necesarios para terminar la instalación y dónde se crea el acceso directo.',
        screenshot: {
          caption: 'Captura del paso final de instalación.',
        },
      },
    ],
  },
  {
    id: 'iniciar-sesion',
    label: 'Iniciar sesión',
    group: 'Uso del launcher',
    title: 'Iniciar sesión',
    intro:
      'Para jugar necesitas iniciar sesión con tu cuenta. Aquí te explicamos cómo.',
    steps: [
      {
        title: 'Paso 1 — Abrir el launcher',
        description:
          'Explica dónde encontrar el icono y qué aparece al abrir la aplicación por primera vez.',
        screenshot: {
          caption: 'Captura de la pantalla de inicio de sesión.',
        },
      },
      {
        title: 'Paso 2 — Escribir tus datos',
        description:
          'Detalla qué datos debe introducir el usuario y dónde hacer clic para entrar.',
        screenshot: {
          caption: 'Captura del formulario con los campos a rellenar.',
        },
        notes: ['Recuerda al usuario que no comparta su contraseña.'],
      },
    ],
  },
  {
    id: 'jugar',
    label: 'Empezar a jugar',
    group: 'Uso del launcher',
    title: 'Seleccionar versión y jugar',
    intro:
      'Con la sesión iniciada, elige la versión de Minecraft y entra al juego con un solo clic.',
    steps: [
      {
        title: 'Paso 1 — Elegir la versión',
        description:
          'Explica cómo se abre el menú de versiones y cómo seleccionar la que se quiere jugar.',
        screenshot: {
          caption: 'Captura del menú desplegable de versiones.',
        },
      },
      {
        title: 'Paso 2 — Pulsar Jugar',
        description:
          'Describe el botón principal de "Jugar" y qué ocurre al pulsarlo (descarga, carga, apertura del juego).',
        screenshot: {
          caption: 'Captura del botón Jugar resaltado.',
        },
      },
    ],
  },
  {
    id: 'configuracion',
    label: 'Configuración',
    group: 'Uso del launcher',
    title: 'Ajustes y configuración',
    intro:
      'Personaliza tu experiencia ajustando la memoria, la carpeta de juego y otras opciones.',
    steps: [
      {
        title: 'Asignar memoria RAM',
        description:
          'Explica cómo cambiar la cantidad de RAM que usa el launcher y por qué es importante.',
        screenshot: {
          caption: 'Captura del panel de ajustes de memoria.',
        },
      },
      {
        title: 'Carpeta de instalación',
        description:
          'Describe cómo cambiar la ubicación donde se guardan los archivos del juego.',
        screenshot: {
          caption: 'Captura de la opción de carpeta de instalación.',
        },
      },
    ],
  },
  {
    id: 'problemas',
    label: 'Problemas comunes',
    group: 'Solución de problemas',
    title: 'Solución de problemas',
    intro:
      'Si algo no funciona, revisa estas soluciones a los problemas más frecuentes.',
    steps: [
      {
        title: 'El launcher no abre',
        description:
          'Explica los pasos a seguir cuando el launcher no se inicia (reinstalar, comprobar Java, etc.).',
        notes: [
          'Comprueba que tienes la versión correcta de Java.',
          'Reinicia el ordenador e inténtalo de nuevo.',
        ],
      },
      {
        title: 'Error al iniciar sesión',
        description:
          'Describe qué hacer si el usuario no puede iniciar sesión correctamente.',
        screenshot: {
          caption: 'Captura del mensaje de error de inicio de sesión.',
        },
      },
    ],
  },
]
