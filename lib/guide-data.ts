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
    title: 'Bienvenido a KazLauncher',
    intro:
      'KazLauncher esta basado en hru pensado para su uso privado en eventos y series de mi autoria o en colaboracion, facilitando la instalacion de modpacks y actualizacion de los mismos.',
    steps: [
      {
        title: '¿Qué es KazLauncher?',
        description:
          'Escrito en Python con autorizacion de uso de API por parte de Mojang y validado por Microsoft, utiliza Java Adoptium para correr Minecraft aumentando el rendimiento y de por defecto utiliza flags de aikar para manejar el uso de memoria mejorando el rendimiento general',
        screenshot: {
          caption: 'Captura de la pantalla principal del launcher al abrirlo.',
          src: 'launcher_1.png'
        },
      },
      {
        title: 'Requisitos del sistema',
        description:
          'Realmente no pide mucho',
        notes: [
          'Sistema operativo: Windows 10/11.',
          'Memoria RAM recomendada: 4 GB o más.',
          'Java: este se instala solo ntp.',
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
      'No necesita instalacion es directamente descargar y abrir y listo.',
    steps: [
      {
        title: 'Paso 1 - Descarga',
        description:
          'El enlace sera enviado en el discord correspondiente revisa los canales: Avisos, recursos, descargas depende la colab',
        screenshot: {
          caption: 'simplemente descarga.',
        },
      },
      {
        title: 'Paso 2 — Ejecutar',
        description:
          'Simplemente da doble clic y se abrira solo',
        screenshot: {
          caption: 'es todo',
        },
      },
    ],
  },
  {
    id: 'instalacion',
    label: 'Instalar',
    group: 'Instalación',
    title: 'Instalar Modpack',
    intro:
      'Instalar Modpack',
    steps: [
      {
        title: 'Paso 1 — Modpacks',
        description:
          'Haz clic en la pestaña "ModPacks"',
        screenshot: {
          caption: 'Captura de la ventana Modpacks.',
          src: 'Screenshot_2.png'
        },
      },
      {
        title: 'Paso 2 — instalar',
        description:
          'da 1 clic en el evento o serie que quieres instalar y presiona instalar, te pedira una contraseña la cual proveera el anfitrion del evento/serie en cuestion.',
        screenshot: {
          caption: 'Captura del paso final',
          src: 'Screenshot_3.png'
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
        title: 'Error al actualizar el modpack',
        description:
          'Error 403, por lo general es algun error de conexion o el servidor de modpacks saturado, espera unos minutos y vuelve a intentar',
        notes: [
          'Comprueba que tienes la versión correcta de Java.',
          'Reinicia el ordenador e inténtalo de nuevo.',
        ],
      },
      {
        title: 'Error al iniciar sesión',
        description:
          'No tienes el minecraft comprado o microsoft esta teniendo problemas para enviarnos la informacion de forma correcta, en este caso estamos investigando que causa que se detecte que no tienes minecraft cuando si lo tienes.',
        screenshot: {
          caption: 'Captura del mensaje de error de inicio de sesión.',
        },
      },
    ],
  },
]
