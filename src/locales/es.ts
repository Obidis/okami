import { getAssetUrl } from '../utils/assetHelper';
import type { Translations } from '../types';

export const es: Translations = {
  nav: { home: 'Inicio', services: 'Servicios', about: 'Nosotros', contact: 'Contacto' },
  hero: {
    title: 'Ōkami',
    subtitle: 'Visibilidad para comercios locales en la web',
    highlights: ['Web profesional', 'Ficha de Google', 'Posicionamiento SEO', 'Dominio y hosting', '5 cuentas de correo', 'Mantenimiento'],
    cta: 'Solicitar consulta'
  },
  services: {
    title: 'Nuestros Servicios',
    subtitle: 'Soluciones integrales para tu negocio digital',
    items: [
      { title: 'Web Profesional', description: 'Creamos una web pensada para explicar lo que haces con claridad, transmitir confianza y convertir las visitas en nuevas oportunidades para tu negocio.', icon: 'web', image: getAssetUrl('/images/services/diseno-web.webp'), alt: 'Diseño web profesional responsive mostrado en portátil y móvil' },
      { title: 'Ficha de Google', description: 'Configuramos y optimizamos tu Perfil de Empresa para que tu negocio aparezca en Google y Google Maps cuando tus clientes buscan servicios en tu zona.', icon: 'map', image: getAssetUrl('/images/services/ficha-google.webp'), alt: 'Perfil de empresa de Google Maps en dispositivo móvil' },
      { title: 'Posicionamiento SEO', description: 'Trabajamos un ecosistema SEO en evolución: analizamos las expresiones y palabras clave con las que te buscan tus clientes, optimizamos tus contenidos y reforzamos tu presencia para que Google entienda mejor tu negocio y te muestre en búsquedas relevantes.', icon: 'search', image: getAssetUrl('/images/services/seo.webp'), alt: 'Gráfico de crecimiento de tráfico orgánico y posicionamiento SEO' },
      { title: 'Dominio y Hosting', description: 'Tu negocio cuenta con dominio propio y un entorno seguro, rápido y siempre disponible. Nosotros nos ocupamos de la parte técnica para que tú te centres en tu actividad.', icon: 'server', image: getAssetUrl('/images/services/dominio-hosting.webp'), alt: 'Servidor cloud y certificado SSL para hosting seguro' },
      { title: '5 Cuentas de Correo', description: 'Incluye hasta 5 cuentas de email corporativo asociadas a tu dominio para reforzar una imagen más profesional, coherente y de confianza ante tus clientes.', icon: 'mail', image: getAssetUrl('/images/services/correo.webp'), alt: 'Bandeja de entrada de email corporativo en escritorio' },
      { title: 'Mantenimiento', description: 'Incluye soporte técnico y mantenimiento continuo para que puedas solicitar actualizaciones, mejoras y cambios puntuales cuando los necesites.', icon: 'settings', image: getAssetUrl('/images/services/mantenimiento.webp'), alt: 'Panel de control de mantenimiento y actualizaciones web' }
    ]
  },
  features: {
    title: '¿Por qué elegirnos?',
    subtitle: '',
    items: [
      { title: 'Enfoque Mobile-First', description: 'Diseñamos pensando primero en los dispositivos móviles, donde la mayoría de tus clientes te buscan.', image: getAssetUrl('/images/services/Mobile-first.webp'), alt: 'Diseño responsive mobile-first en smartphone y tablet' },
      { title: 'SEO Avanzado', description: 'Optimizamos cada aspecto técnico y de contenido para maximizar tu visibilidad en buscadores.', image: getAssetUrl('/images/services/seo-avanzado.webp'), alt: 'Gráfico de palabras clave y análisis SEO técnico' },
      { title: 'Soporte Personalizado', description: 'Acompañamiento continuo desde el lanzamiento hasta el crecimiento continuo de tu presencia digital.', image: getAssetUrl('/images/services/Soporte-Personalizado.webp'), alt: 'Equipo de soporte técnico asistiendo a cliente' }
    ]
  },
  about: {
    title: '¿Por qué Ōkami?',
    subtitle: 'Porque estamos a tu lado para ayudarte a alcanzar tus objetivos.',
    description: [
      'En Ōkami nos dedicamos al Diseño y Desarrollo Web, también somos una novel Agencia de Marketing Digital independiente.',
      'Estamos comprometidos en acompañar y asistir a emprendedores y empresas, para que obtengan resultados que los lleven a alcanzar una posición de mercado de renombre y así, vender más y hacer crecer sus Marcas.',
      'La escala y el alcance de cualquier proyecto a veces pueden parecer abrumadores, pero si aceptas nuestra propuesta, enfrentaremos juntos cualquier desafío que se presente.'
    ],
    workflow: {
      title: 'Work Flow',
      subtitle: 'Nuestro proceso de trabajo',
      steps: [
        { title: 'Investigación', description: 'Recopilamos y aprovechamos toda la información publicada, sobre tu sector y producto/servicio, para identificar posibles diferenciaciones y ventajas competitivas.' },
        { title: 'Planificación', description: 'Diseñamos una estrategia a medida basada en los objetivos de tu negocio y las oportunidades detectadas.' },
        { title: 'Desarrollo', description: 'Ejecutamos el plan con precisión técnica, creando soluciones web robustas, escalables y orientadas a resultados.' },
        { title: 'Resultados', description: 'Medimos, analizamos y optimizamos continuamente para maximizar el retorno de tu inversión.' }
      ]
    }
  },
  contact: {
    title: 'Contáctanos',
    subtitle: '¿Listo para llevar tu negocio al siguiente nivel?',
    email: 'Correo electrónico',
    phone: 'Teléfono de contacto',
    description: 'Cómo podemos ayudarte',
    submit: 'Enviar consulta',
    submitError: 'Error al enviar el mensaje. Inténtalo de nuevo.',
    placeholder: { email: 'ejemplo@tuempresa.com', phone: '+34 600 000 000', description: 'Cuéntanos sobre tu proyecto o consulta...' }
  },
  cookiePolicy: {
    title: 'Política de Cookies — Ōkami',
    whatAreCookies: '1. ¿Qué son las cookies?',
    whatAreCookiesText: 'Una cookie es un pequeño archivo de texto que se descarga en su equipo al acceder a determinadas páginas web. Permite a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.',
    typesOfCookies: '2. ¿Qué tipos de cookies utiliza esta web?',
    technical: { title: 'Cookies técnicas (propias)', description: 'Necesarias para que la web funcione correctamente, gestionar la navegación y recordar la aceptación de políticas.' },
    analytics: { title: 'Cookies de análisis (de terceros - Google Analytics)', description: 'Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen de la web para mejorar la oferta de productos o servicios.' },
    advertising: { title: 'Cookies de publicidad comportamental (de terceros - Google Ads)', description: 'Almacenan información del comportamiento de los usuarios mediante la observación de sus hábitos de navegación. Esto permite desarrollar un perfil específico para mostrar publicidad personalizada en la red de Google.' },
    cookieDetails: '3. Detalle de las cookies utilizadas',
    table: { provider: 'Proveedor', name: 'Nombre', purpose: 'Finalidad', duration: 'Duración', type: 'Tipo', okamiPurpose: 'Mantener la sesión del usuario activa y registrar su preferencia sobre el uso de cookies.', okamiDuration: 'Sesión / 1 año', analyticsPurpose: 'Identificación de usuarios únicos para generar estadísticas agregadas de tráfico.', analyticsDuration: '2 años / 24 horas', adsPurpose: 'Rastrear conversiones de anuncios, medir la eficacia de las campañas y mostrar anuncios personalizados en la red de Google.', adsDuration: 'Variable (hasta 6 meses / 2 años)' },
    management: '4. Gestión y desactivación de cookies',
    managementText: 'Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración del navegador de internet. Si bloquea las cookies técnicas, es posible que algunas secciones de la web de Ōkami no funcionen correctamente.',
    browsers: { chrome: 'Configurar cookies en Google Chrome', firefox: 'Configurar cookies en Mozilla Firefox', edge: 'Configurar cookies en Microsoft Edge', safari: 'Configurar cookies en Safari (Apple)' },
    gaOptout: 'También puede inhabilitar de forma específica el rastreo de Google Analytics mediante el Complemento de inhabilitación para navegadores de Google Analytics.'
  },
  cookieBanner: {
    description: 'En Ōkami utilizamos cookies propias, analíticas (Google Analytics) y publicitarias (Google Ads) para optimizar el funcionamiento de la web, analizar tu navegación y mostrarte anuncios basados en tus intereses. Puedes aceptar todas las cookies pulsando \'Aceptar\', configurar tus preferencias en \'Configurar\' o rechazar su uso haciendo clic en \'Rechazar\'.',
    accept: 'Aceptar', reject: 'Rechazar', configure: 'Configurar', settingsTitle: 'Configuración de Cookies', settingsDescription: 'Puedes configurar qué tipos de cookies deseas aceptar. Las cookies técnicas son necesarias para el funcionamiento básico del sitio y no pueden desactivarse.',
    necessary: 'Cookies técnicas', necessaryDesc: 'Necesarias para el funcionamiento del sitio, gestión de sesión y preferencias.',
    analytics: 'Cookies de análisis', analyticsDesc: 'Nos ayudan a entender cómo interactúas con la web (Google Analytics).',
    advertising: 'Cookies publicitarias', advertisingDesc: 'Permiten mostrar anuncios personalizados según tu navegación (Google Ads).',
    savePreferences: 'Guardar preferencias', cancel: 'Cancelar', close: 'Cerrar'
  },
  privacyPolicy: {
    title: 'Política de Privacidad — Ōkami', responsible: '1. Responsable del Tratamiento de los Datos', company: 'Titular', taxId: 'NIF/CIF', taxIdValue: 'Pendiente de registrar', address: 'Domicilio', addressValue: 'Pendiente de registrar', email: 'Correo electrónico',
    dataCollected: '2. Datos Personales que Recogemos', contactData: 'Datos de contacto', contactDataDesc: 'Nombre, apellidos, correo electrónico y número de teléfono.', navigationData: 'Datos de navegación', navigationDataDesc: 'Dirección IP, tipo de dispositivo y cookies (ver nuestra Política de Cookies).',
    purpose: '3. Finalidad del Tratamiento', purpose1: 'Responder tus consultas: Atender los mensajes que envías por el formulario de contacto.', purpose2: 'Gestionar servicios: Enviar presupuestos o prestar los servicios que contrates.', purpose3: 'Enviar boletines: Mandar correos comerciales solo si has marcado la casilla de aceptación.',
    legitimacy: '4. Legitimación para el Tratamiento', consent: 'Tu consentimiento escrito', consentDesc: 'Al marcar las casillas antes de enviar tus datos.', contract: 'Ejecución de un contrato', contractDesc: 'Cuando nos contratas para realizar un servicio o comprar un producto.',
    retention: '5. Plazo de Conservación de los Datos', necessaryTime: 'Tiempo necesario', necessaryTimeDesc: 'Guardamos tus datos solo durante el tiempo que dure la relación comercial o para responder a tu consulta.', legalObligation: 'Obligación legal', legalObligationDesc: 'Conservamos ciertos datos para cumplir con las leyes fiscales obligatorias.',
    recipients: '6. Destinatarios de los Datos', noSale: 'No vendemos datos: Nunca compartimos tus datos personales con terceros para fines comerciales.', providers: 'Proveedores técnicos: Solo tienen acceso las empresas que nos dan servicios técnicos (como el hosting de la web) bajo estrictos contratos de confidencialidad.',
    rights: '7. Tus Derechos (Derechos ARCO)', rightsIntro: 'Tienes derecho a controlar tus datos personales. Puedes pedirnos en cualquier momento:', access: 'Acceso', accessDesc: 'Saber qué datos tenemos sobre ti.', rectification: 'Rectificación', rectificationDesc: 'Modificar datos si son incorrectos.', erasure: 'Supresión', erasureDesc: 'Borrar tus datos de nuestro sistema.', objection: 'Oposición', objectionDesc: 'Pedir que dejemos de usar tus datos para un fin concreto.', exerciseRights: 'Para usar estos derechos, envía un correo a jjsantosfernandez@proton.me adjuntando una copia de tu documento de identidad.'
  },
  serviceDetails: { features: 'Características', related: 'Servicios relacionados' },
  footer: { copyright: '© {year} Ōkami.Ltd. Todos los derechos reservados.', links: { title: 'Enlaces rápidos', home: 'Inicio', about: 'Nosotros', services: 'Servicios', contact: 'Contacto' }, legal: { title: 'Legal', cookies: 'Política de Cookies', privacy: 'Política de Privacidad', terms: 'Aviso Legal' }, social: { title: 'Síguenos', github: 'GitHub', discord: 'Discord', linkedin: 'LinkedIn' } },
  legalNotice: {
    title: 'Aviso Legal — Ōkami', identification: { title: '1. Datos Identificativos', owner: 'Titular', taxId: 'NIF/CIF', taxIdValue: 'Pendiente de registrar', address: 'Domicilio social', addressValue: 'Pendiente de registrar', email: 'Correo electrónico', phone: 'Teléfono', phoneValue: 'Pendiente de registrar', registry: 'Datos registrales', registryValue: 'Autónomo / Pendiente de inscripción registral' },
    users: { title: '2. Usuarios y Condiciones de Uso', text1: 'El acceso y/o uso de este portal de Ōkami atribuye la condición de USUARIO. Al navegar por este sitio web, aceptas plenamente las condiciones aquí reflejadas.', text2: 'El sitio web proporciona el acceso a multitud de informaciones, servicios o datos en Internet pertenecientes a Ōkami. El USUARIO asume la responsabilidad del uso del portal.', text3: 'Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.' },
    ip: { title: '3. Propiedad Intelectual e Industrial', text1: 'Ōkami por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).', text2: 'Todos los derechos reservados. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización expresa y por escrito de Ōkami.' },
    liability: { title: '4. Exclusión de Responsabilidades', text: 'Ōkami no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.' },
    modifications: { title: '5. Modificaciones y Enlaces', text1: 'Ōkami se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.', text2: 'En el caso de que en la web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Ōkami no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.' },
    exclusion: { title: '6. Derecho de Exclusión', text: 'Ōkami se reserva el derecho a denegar o retirar el acceso a portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.' },
    jurisdiction: { title: '7. Legislación Aplicable y Jurisdicción', text: 'La relación entre Ōkami y el USUARIO se regirá por la normativa española vigente. Cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Madrid, salvo que la ley disponga otra cosa por normativa de consumidores y usuarios.' }
  }
};
