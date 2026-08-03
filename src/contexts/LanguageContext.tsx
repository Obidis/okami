import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

type Language = 'es' | 'en';

// Allow nested objects and arrays of objects in translations
type TranslationValue = 
  | string 
  | string[] 
  | number 
  | boolean
  | { [key: string]: TranslationValue }
  | TranslationValue[];

interface Translations {
  [key: string]: TranslationValue;
}

type LanguageContextType = {
  language: Language;
  t: (key: string, vars?: Record<string, string | number>) => string;
  tArray: (key: string) => string[];
  tObject: <T extends object>(key: string) => T;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  es: {
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
        { title: 'Web Profesional', description: 'Creamos una web pensada para explicar lo que haces con claridad, transmitir confianza y convertir las visitas en nuevas oportunidades para tu negocio.', icon: 'web', image: '/images/services/diseno-web.webp', alt: 'Diseño web profesional responsive mostrado en portátil y móvil' },
        { title: 'Ficha de Google', description: 'Configuramos y optimizamos tu Perfil de Empresa para que tu negocio aparezca en Google y Google Maps cuando tus clientes buscan servicios en tu zona.', icon: 'map', image: '/images/services/ficha-google.webp', alt: 'Perfil de empresa de Google Maps en dispositivo móvil' },
        { title: 'Posicionamiento SEO', description: 'Trabajamos un ecosistema SEO en evolución: analizamos las expresiones y palabras clave con las que te buscan tus clientes, optimizamos tus contenidos y reforzamos tu presencia para que Google entienda mejor tu negocio y te muestre en búsquedas relevantes.', icon: 'search', image: '/images/services/seo.webp', alt: 'Gráfico de crecimiento de tráfico orgánico y posicionamiento SEO' },
        { title: 'Dominio y Hosting', description: 'Tu negocio cuenta con dominio propio y un entorno seguro, rápido y siempre disponible. Nosotros nos ocupamos de la parte técnica para que tú te centres en tu actividad.', icon: 'server', image: '/images/services/dominio-hosting.webp', alt: 'Servidor cloud y certificado SSL para hosting seguro' },
        { title: '5 Cuentas de Correo', description: 'Incluye hasta 5 cuentas de email corporativo asociadas a tu dominio para reforzar una imagen más profesional, coherente y de confianza ante tus clientes.', icon: 'mail', image: '/images/services/correo.webp', alt: 'Bandeja de entrada de email corporativo en escritorio' },
        { title: 'Mantenimiento', description: 'Incluye soporte técnico y mantenimiento continuo para que puedas solicitar actualizaciones, mejoras y cambios puntuales cuando los necesites.', icon: 'settings', image: '/images/services/mantenimiento.webp', alt: 'Panel de control de mantenimiento y actualizaciones web' }
      ]
    },
    features: {
      title: '¿Por qué elegirnos?',
      subtitle: '',
      items: [
        { title: 'Enfoque Mobile-First', description: 'Diseñamos pensando primero en los dispositivos móviles, donde la mayoría de tus clientes te buscan.', image: '/images/services/Mobile-first.webp', alt: 'Diseño responsive mobile-first en smartphone y tablet' },
        { title: 'SEO Avanzado', description: 'Optimizamos cada aspecto técnico y de contenido para maximizar tu visibilidad en buscadores.', image: '/images/services/seo-avanzado.webp', alt: 'Gráfico de palabras clave y análisis SEO técnico' },
        { title: 'Soporte Personalizado', description: 'Acompañamiento continuo desde el lanzamiento hasta el crecimiento continuo de tu presencia digital.', image: '/images/services/Soporte-Personalizado.webp', alt: 'Equipo de soporte técnico asistiendo a cliente' }
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
  },
  en: {
    nav: { home: 'Home', services: 'Services', about: 'About Us', contact: 'Contact' },
    hero: {
      title: 'Ōkami',
      subtitle: 'Visibility for local businesses on the web',
      highlights: ['Professional Website', 'Google Business Profile', 'SEO Positioning', 'Domain & Hosting', '5 Email Accounts', 'Maintenance'],
      cta: 'Request Consultation'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions for your digital business',
      items: [
        { title: 'Professional Website', description: 'We create a website designed to explain what you do with clarity, convey trust, and turn visits into new business opportunities.', icon: 'web', image: '/images/services/diseno-web.webp', alt: 'Professional responsive web design shown on laptop and mobile' },
        { title: 'Google Business Profile', description: 'We set up and optimize your Business Profile so your business appears in Google and Google Maps when customers search for services in your area.', icon: 'map', image: '/images/services/ficha-google.webp', alt: 'Google Maps business profile on mobile device' },
        { title: 'SEO Positioning', description: 'We work on an evolving SEO ecosystem: we analyze the expressions and keywords your customers use to find you, optimize your content, and strengthen your presence so Google better understands your business and shows you in relevant searches.', icon: 'search', image: '/images/services/seo.webp', alt: 'Organic traffic growth chart and SEO positioning graph' },
        { title: 'Domain & Hosting', description: 'Your business has its own domain and a secure, fast, always-available environment. We handle the technical aspects so you can focus on your activity.', icon: 'server', image: '/images/services/dominio-hosting.webp', alt: 'Cloud server and SSL certificate for secure hosting' },
        { title: '5 Email Accounts', description: 'Includes up to 5 corporate email accounts associated with your domain to reinforce a more professional, consistent, and trustworthy image to your customers.', icon: 'mail', image: '/images/services/correo.webp', alt: 'Corporate email inbox on desktop' },
        { title: 'Maintenance', description: 'Includes technical support and ongoing maintenance so you can request updates, improvements, and punctual changes when you need them.', icon: 'settings', image: '/images/services/mantenimiento.webp', alt: 'Maintenance dashboard and web updates panel' }
      ]
    },
    features: {
      title: 'Why Choose Us?',
      subtitle: '',
      items: [
        { title: 'Mobile-First Approach', description: 'We design thinking first about mobile devices, where most of your customers search for you.', image: '/images/services/Mobile-first.webp', alt: 'Mobile-first responsive design on smartphone and tablet' },
        { title: 'Advanced SEO', description: 'We optimize every technical and content aspect to maximize your visibility in search engines.', image: '/images/services/seo-avanzado.webp', alt: 'Keyword chart and technical SEO analysis graph' },
        { title: 'Personalized Support', description: 'Ongoing accompaniment from launch to continuous growth of your digital presence.', image: '/images/services/Soporte-Personalizado.webp', alt: 'Technical support team assisting client' }
      ]
    },
    about: {
      title: 'Why Ōkami?',
      subtitle: 'Because we\'re by your side to help you achieve your goals.',
      description: [
        'At Ōkami we specialize in Web Design and Development, and we\'re also an independent Digital Marketing Agency.',
        'We\'re committed to accompanying and assisting entrepreneurs and businesses, so they achieve results that lead them to a renowned market position, selling more and growing their Brands.',
        'The scale and scope of any project can sometimes seem overwhelming, but if you accept our proposal, we\'ll face any challenge together.'
      ],
      workflow: {
        title: 'Work Flow',
        subtitle: 'Our work process',
        steps: [
          { title: 'Research', description: 'We gather and leverage all published information about your industry and product/service to identify potential differentiators and competitive advantages.' },
          { title: 'Planning', description: 'We design a tailored strategy based on your business goals and detected opportunities.' },
          { title: 'Development', description: 'We execute the plan with technical precision, creating robust, scalable, results-oriented web solutions.' },
          { title: 'Results', description: 'We measure, analyze, and continuously optimize to maximize your return on investment.' }
        ]
      }
    },
    contact: {
      title: 'Contact Us', subtitle: 'Ready to take your business to the next level?', email: 'Email', phone: 'Contact Phone', description: 'How we can help you', submit: 'Send Inquiry', submitError: 'Error sending message. Please try again.', placeholder: { email: 'example@yourcompany.com', phone: '+1 555 000 000', description: 'Tell us about your project or inquiry...' }
    },
    cookiePolicy: {
      title: 'Cookie Policy — Ōkami', whatAreCookies: '1. What are cookies?', whatAreCookiesText: 'A cookie is a small text file downloaded to your device when accessing certain web pages. It allows a website, among other things, to store and retrieve information about a user\'s browsing habits or their device.', typesOfCookies: '2. What types of cookies does this website use?', technical: { title: 'Technical cookies (first-party)', description: 'Necessary for the website to function correctly, manage navigation, and remember policy acceptance.' }, analytics: { title: 'Analytics cookies (third-party - Google Analytics)', description: 'Allow us to quantify the number of users and perform statistical measurement and analysis of website usage to improve our products or services.' }, advertising: { title: 'Behavioral advertising cookies (third-party - Google Ads)', description: 'Store information about user behavior through continuous observation of browsing habits, allowing a specific profile to be developed for displaying personalized advertising on the Google network.' }, cookieDetails: '3. Detail of cookies used', table: { provider: 'Provider', name: 'Name', purpose: 'Purpose', duration: 'Duration', type: 'Type', okamiPurpose: 'Maintain user session and record cookie preference.', okamiDuration: 'Session / 1 year', analyticsPurpose: 'Identify unique users to generate aggregated traffic statistics.', analyticsDuration: '2 years / 24 hours', adsPurpose: 'Track ad conversions, measure campaign effectiveness, and display personalized ads on the Google network.', adsDuration: 'Variable (up to 6 months / 2 years)' }, management: '4. Cookie management and deactivation', managementText: 'You can allow, block, or delete cookies installed on your device through your browser settings. If you block technical cookies, some sections of the Ōkami website may not function correctly.', browsers: { chrome: 'Configure cookies in Google Chrome', firefox: 'Configure cookies in Mozilla Firefox', edge: 'Configure cookies in Microsoft Edge', safari: 'Configure cookies in Safari (Apple)' }, gaOptout: 'You can also specifically disable Google Analytics tracking via the Google Analytics Opt-out Browser Add-on.'
    },
    cookieBanner: {
      description: 'At Ōkami we use first-party, analytics (Google Analytics), and advertising (Google Ads) cookies to optimize website functionality, analyze your browsing, and show you ads based on your interests. You can accept all cookies by clicking \'Accept\', configure your preferences in \'Configure\', or reject their use by clicking \'Reject\'.',
      accept: 'Accept', reject: 'Reject', configure: 'Configure', settingsTitle: 'Cookie Settings', settingsDescription: 'You can configure which types of cookies you want to accept. Technical cookies are necessary for basic site functionality and cannot be disabled.',
      necessary: 'Technical cookies', necessaryDesc: 'Required for site operation, session management, and preferences.',
      analytics: 'Analytics cookies', analyticsDesc: 'Help us understand how you interact with the website (Google Analytics).',
      advertising: 'Advertising cookies', advertisingDesc: 'Allow personalized ads based on your browsing (Google Ads).',
      savePreferences: 'Save preferences', cancel: 'Cancel', close: 'Close'
    },
    privacyPolicy: {
      title: 'Privacy Policy — Ōkami', responsible: '1. Data Controller', company: 'Company', taxId: 'Tax ID', taxIdValue: 'Pending registration', address: 'Address', addressValue: 'Pending registration', email: 'Email',
      dataCollected: '2. Personal Data We Collect', contactData: 'Contact Data', contactDataDesc: 'Name, surname, email address, and phone number.', navigationData: 'Navigation Data', navigationDataDesc: 'IP address, device type, and cookies (see our Cookie Policy).',
      purpose: '3. Purpose of Processing', purpose1: 'Respond to inquiries: Handle messages sent through the contact form.', purpose2: 'Manage services: Send quotes or provide contracted services.', purpose3: 'Send newsletters: Send commercial emails only if you have checked the acceptance box.',
      legitimacy: '4. Legal Basis for Processing', consent: 'Your written consent', consentDesc: 'By checking the boxes before submitting your data.', contract: 'Contract execution', contractDesc: 'When you hire us for a service or purchase a product.',
      retention: '5. Data Retention Period', necessaryTime: 'Necessary time', necessaryTimeDesc: 'We keep your data only for as long as the business relationship lasts or to respond to your inquiry.', legalObligation: 'Legal obligation', legalObligationDesc: 'We retain certain data to comply with mandatory tax laws.',
      recipients: '6. Data Recipients', noSale: 'We do not sell data: We never share your personal data with third parties for commercial purposes.', providers: 'Technical providers: Only companies providing us technical services (like web hosting) have access, under strict confidentiality agreements.',
      rights: '7. Your Rights (ARCO Rights)', rightsIntro: 'You have the right to control your personal data. You can request at any time:', access: 'Access', accessDesc: 'Know what data we have about you.', rectification: 'Rectification', rectificationDesc: 'Correct data if it is inaccurate.', erasure: 'Erasure', erasureDesc: 'Delete your data from our system.', objection: 'Objection', objectionDesc: 'Request that we stop using your data for a specific purpose.', exerciseRights: 'To exercise these rights, email jjsantosfernandez@proton.me attaching a copy of your ID document.'
    },
    serviceDetails: { features: 'Features', related: 'Related Services' },
    footer: { copyright: '© {year} Ōkami.Ltd. All rights reserved.', links: { title: 'Quick Links', home: 'Home', about: 'About Us', services: 'Services', contact: 'Contact' }, legal: { title: 'Legal', cookies: 'Cookie Policy', privacy: 'Privacy Policy', terms: 'Legal Notice' }, social: { title: 'Follow Us', github: 'GitHub', discord: 'Discord', linkedin: 'LinkedIn' } },
    legalNotice: {
      title: 'Legal Notice — Ōkami', identification: { title: '1. Identifying Information', owner: 'Owner', taxId: 'Tax ID', taxIdValue: 'Pending registration', address: 'Registered Address', addressValue: 'Pending registration', email: 'Email', phone: 'Phone', phoneValue: 'Pending registration', registry: 'Registry Data', registryValue: 'Self-employed / Pending registry registration' },
      users: { title: '2. Users and Terms of Use', text1: 'Access to and/or use of this Ōkami portal grants the status of USER. By browsing this website, you fully accept the conditions reflected herein.', text2: 'The website provides access to a multitude of information, services, or data on the Internet belonging to Ōkami. The USER assumes responsibility for the use of the portal.', text3: 'Such responsibility extends to any registration required to access certain services or content.' },
      ip: { title: '3. Intellectual and Industrial Property', text1: 'Ōkami, either directly or as assignee, holds all intellectual and industrial property rights to its website, as well as the elements contained therein (including but not limited to: images, sound, audio, video, software or texts; trademarks or logos, color combinations, structure and design, etc.).', text2: 'All rights reserved. Reproduction, distribution, and public communication, including making available, of all or part of the contents of this website for commercial purposes, in any medium and by any technical means, is expressly prohibited without the express written authorization of Ōkami.' },
      liability: { title: '4. Disclaimer of Liability', text: 'Ōkami shall not be liable, under any circumstances, for damages of any nature that may arise, including but not limited to: errors or omissions in the contents, lack of availability of the portal, or the transmission of viruses or malicious or harmful programs in the contents, despite having adopted all necessary technological measures to prevent this.' },
      modifications: { title: '5. Modifications and Links', text1: 'Ōkami reserves the right to make, without prior notice, any modifications it deems appropriate to its portal, being able to change, delete, or add both the content and services provided through it and the way in which they appear presented or located on its portal.', text2: 'In the event that the website contains links or hyperlinks to other Internet sites, Ōkami shall exercise no control over such sites and contents. In no case shall it assume any responsibility for the contents of any link belonging to a third-party website.' },
      exclusion: { title: '6. Right of Exclusion', text: 'Ōkami reserves the right to deny or withdraw access to the portal and/or the services offered without prior notice, at its own request or that of a third party, to those users who breach these General Terms of Use.' },
      jurisdiction: { title: '7. Applicable Law and Jurisdiction', text: 'The relationship between Ōkami and the USER shall be governed by current Spanish law. Any dispute shall be submitted to the Courts and Tribunals of the city of Madrid, unless the law provides otherwise by consumer and user protection regulations.' }
    }
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('okami-lang') as Language | null;
    if (saved) return saved;
    const browserLang = navigator.language.substring(0, 2) as Language;
    return (browserLang === 'es' || browserLang === 'en') ? browserLang : 'es';
  });

  useEffect(() => {
    localStorage.setItem('okami-lang', language);
  }, [language]);

  const getValue = useCallback((key: string): TranslationValue => {
    const keys = key.split('.');
    let value: TranslationValue = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, TranslationValue>)[k];
      } else {
        return key;
      }
    }
    return value;
  }, [language]);

  const t = useCallback((key: string, vars?: Record<string, string | number>): string => {
    const value = getValue(key);
    if (typeof value === 'string' && vars) {
      return Object.keys(vars).reduce((str, k) => str.replace(`{${k}}`, String(vars[k])), value);
    }
    return String(value);
  }, [getValue]);

  const tArray = useCallback((key: string): string[] => {
    const value = getValue(key);
    if (Array.isArray(value)) {
      return value.filter((v): v is string => typeof v === 'string') as string[];
    }
    return [];
  }, [getValue]);

  const tObject = useCallback(<T extends object>(key: string): T => {
    const value = getValue(key);
    return (value && typeof value === 'object' && !Array.isArray(value)) ? value as T : {} as T;
  }, [getValue]);

  const value = useMemo(() => ({ language, t, tArray, tObject, setLanguage }), [language, t, tArray, tObject]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};