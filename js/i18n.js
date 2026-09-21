/* ============================================================
   i18n.js — Internationalisation & Content Data
   ============================================================
   All translatable text and content data (projects, experience,
   skills, courses, etc.) lives here so it can be edited in one
   place without touching the HTML.
   ============================================================ */

const translations = {

  /* =========================================================
     ESPAÑOL (default)
     ========================================================= */
  es: {
    // ---- Navbar ----
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Skills',
    'nav.formation': 'Formación',
    'nav.contact': 'Contacto',
    'nav.cv': 'Descargar CV',
    'nav.lang': 'EN',

    // ---- Hero ----
    'hero.subtitle': 'Desarrollador fullstack en formación | Especialista en PKI',
    'hero.description': 'Construyo software seguro y confiable combinando mi experiencia en PKI e infraestructura crítica con desarrollo fullstack. Trabajo con IA agéntica como parte de mi flujo diario. Curso la Licenciatura en Informática en Universidad Siglo 21.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.cv': 'Descargar CV',
    'hero.progress.total': 'Licenciatura en Informática',
    'hero.progress.inter': 'Título Intermedio (Analista)',

    // ---- Section titles ----
    'section.projects.title': 'Proyectos',
    'section.projects.subtitle': 'Soluciones que diseñé y construí de punta a punta',
    'section.experience.title': 'Experiencia',
    'section.experience.subtitle': 'Trayectoria profesional en tecnología e infraestructura crítica',
    'section.skills.title': 'Skills',
    'section.skills.subtitle': 'Tecnologías y herramientas con las que trabajo',
    'section.formation.title': 'Formación',
    'section.formation.subtitle': 'Educación, certificaciones e idiomas',
    'section.contact.title': 'Hablemos',
    'section.contact.subtitle': 'Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme.',

    // ---- Formation sub-headings ----
    'formation.education': 'Educación',
    'formation.courses': 'Cursos y Certificaciones',
    'formation.languages': 'Idiomas',

    // ---- Projects ----
    'projects.featured': 'Proyecto destacado',
    'projects.details.toggle': 'Ver arquitectura',
    'projects.details.toggle.open': 'Ocultar detalles',
    'projects.link.demo': 'Ir al sitio',
    'projects.link.repo': 'Repositorio',

    // ---- Experience ----
    'experience.present': 'Presente',
    'experience.highlight': 'Proyecto destacado',

    // ---- Skills categories ----
    'skills.dev': 'Desarrollo',
    'skills.infra': 'Infraestructura y seguridad',
    'skills.db': 'Bases de datos',
    'skills.mgmt': 'Gestión',

    // ---- Education ----
    'education.degree': 'Licenciatura en Informática',
    'education.school': 'Universidad Siglo 21',
    'education.status': 'EN CURSO',
    'education.detail.btn': 'Ver materias cursadas',

    // ---- Courses ----
    'courses.cert': 'Ver certificado',

    // ---- Languages section ----
    'lang.es.name': 'Español',
    'lang.es.level': 'Nativo',
    'lang.en.name': 'Inglés',
    'lang.en.reading': 'Lectura y comprensión: Técnico avanzado',
    'lang.en.speaking': 'Habla: Básico',

    // ---- Contact ----
    'contact.heading': 'Hablemos',
    'contact.text': 'Estoy abierto a nuevas oportunidades y colaboraciones. Si tenés un proyecto interesante o una posición en la que encaje mi perfil ¡Escribime!.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.message.placeholder': 'Contame sobre tu proyecto o propuesta...',

    // ---- Footer ----
    'footer.copy': '© {year} Federico Iseas. Todos los derechos reservados.',

    // ---- Educacion page ----
    'edu.back': 'Volver al inicio',
    'edu.title': 'Plan de Estudios',
    'edu.subtitle': 'Licenciatura en Informática — Universidad Siglo 21',
    'edu.stats.title.total': 'Licenciatura en Informática',
    'edu.stats.title.inter': 'Analista Universitario en Sistemas de Computación',
    'edu.stats.approved': 'materias aprobadas',
    'edu.stats.of': 'de',
    'edu.status.approved': 'Aprobada',
    'edu.status.in_progress': 'Cursando',
    'edu.status.pending': 'Pendiente',
    'edu.type.promotion': 'Promocionada',
    'edu.type.final': 'Con final',
    'edu.type.equivalency': 'Por equivalencia',

    // ============================================================
    // DATA: Projects
    // ============================================================
    projects: [
      {
        id: 'signumid',
        title: 'SignumID (signumID.com.ar)',
        featured: true,
        image: 'resources/img/preview-SignumID.webp',
        description: 'Proyecto personal que combina mi experiencia profesional en PKI con desarrollo fullstack: plataforma de firma y validación de documentos electrónicos con soporte para múltiples estándares (PAdES, CAdES, XAdES), verificación de cadenas de confianza contra TSLs de varios países, chequeo de revocación (OCSP/CRL) y sellado de tiempo.',
        stack: ['React', 'Node.js', 'Express', 'Go', 'SQLite', 'pkijs'],
        highlights: [
          'Arquitectura de 3 capas: SPA React + Backend Node.js/Express + Agente local en Go para acceso a hardware criptográfico (token USB vía PowerShell/Certificate Store de Windows).',
          'Backend con Express 5, SQLite (better-sqlite3), y librerías criptográficas de bajo nivel (pkijs, asn1js, xadesjs) para parseo y verificación de firmas digitales.',
          'Validación multi-formato con patrón Strategy (un validador especializado por estándar: CAdES/PAdES/XAdES/OOXML) orquestados por un servicio central.',
          'Integración con servicios externos: TSA (sellos de tiempo RFC 3161), OCSP/CRL para revocación, y descarga/parseo de TSLs (Trust Service Lists) de 5 países de Latinoamérica.',
          'Seguridad: rate limiting, Helmet, whitelist de dominios, procesamiento de archivos en memoria (sin almacenamiento persistente de documentos).',
        ],
        links: {
          demo: 'https://signumid.com.ar'
        }
      },
      {
        id: 'planificador-futbol',
        title: 'Planificador Táctico de Fútbol',
        featured: false,
        image: 'resources/img/preview-Planificador.webp',
        description: 'Aplicación web interactiva para cuerpos técnicos de fútbol: gestión de plantel, pizarras tácticas vectoriales (SVG) con drag & drop y soporte táctil, y generación de fichas técnicas imprimibles en PDF.',
        stack: ['React', 'Vite', 'CSS'],
        highlights: [],
        links: {
          repo: 'https://github.com/FedericoIseas/Planificador-tactica-futbol'
        }
      },
      {
        id: 'cuit-generator',
        title: 'Generador de CUITs',
        featured: false,
        image: 'resources/img/preview-CuitGenerator.webp',
        description: 'Herramienta web para generación y validación de CUITs/CUILs argentinos. Implementa el algoritmo oficial de cálculo del dígito verificador con soporte para personas físicas y jurídicas, ideal para pruebas en sistemas de facturación y administración tributaria.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        highlights: [],
        links: {
          demo: 'https://federicoiseas.github.io/CUITGenerator/',
          repo: 'https://github.com/FedericoIseas/CUITGenerator'
        }
      },
      {
        id: 'bot-facturador',
        title: 'Bot Facturador',
        featured: false,
        image: 'resources/img/preview-BotFacturador.webp',
        description: 'Bot de Telegram para generación automatizada de facturas electrónicas. Integra con los Web Services de AFIP (WSFE) para emisión de comprobantes fiscales válidos, simplificando la facturación para monotributistas y pequeñas empresas.',
        stack: ['Node.js', 'Express', 'MongoDB', 'AFIP SDK'],
        highlights: [],
        links: {
          repo: 'https://github.com/FedericoIseas/Facturador-ARCA-DEMO'
        }
      }
    ],
    // ============================================================
    // DATA: Experience
    // ============================================================
    experience: [
      {
        title: 'Coordinador de Firma Digital',
        company: 'Secretaría de Innovación, Ciencia y Tecnología de la Nación',
        period: 'Sept 2025',
        periodEnd: 'present',
        location: 'CABA',
        current: true,
        bullets: [
          'Liderazgo técnico y operativo de un equipo de +15 personas.',
          'Lideró la migración integral de 4 equipos criptográficos HSM, garantizando la continuidad del servicio.',
          'Referente técnico principal para la operación, soporte N3 y continuidad de la infraestructura PKI.',
          'Gestión y seguimiento de proyectos de certificación digital e implementación de integraciones.',
          'Administrador de la Autoridad Certificante AC ONTI.',
          'Participación regular en mesas de intercambio técnico con países de Latinoamérica y organismos internacionales, impulsando la adopción de la firma digital.',
          'Utilización y conocimiento de plataformas del Estado Nacional (GDE y TAD).',
          'Elaboración de reportes de gestión técnica y respuestas para auditorías internas y externas.'
        ],
        highlight: 'Migración de HSM — Liderazgo técnico de la migración de 4 equipos HSM en producción.'
      },
      {
        title: 'Administrador de Autoridad Certificante y Soporte N3',
        company: 'Secretaría de Innovación, Ciencia y Tecnología de la Nación',
        period: 'Sept 2022',
        periodEnd: 'Ago 2025',
        location: 'CABA',
        current: false,
        bullets: [
          'Administración, soporte y mantenimiento de la AC ONTI.',
          'Referente principal de consulta respecto a la firma digital por hardware.',
          'Mantenimiento de infraestructura en Windows Server y operación de Hardware Security Modules (HSM).',
          'Diseño y ejecución de consultas complejas en SQL Server para automatización de reportes operativos.',
          'Resolución de +1000 incidentes anuales de soporte avanzado Nivel 3.',
          'Diseño, implementación y mantenimiento de la TSL de la República Argentina.',
          'Consultoría de referencia a otros países para la implementación de sus propias listas de confianza.',
          'Definición de requerimientos técnicos y pruebas funcionales del Validador de Firmas (validadordefirmas.gob.ar), utilizado por +2 millones de personas.',
          'Capacitación en Firma Digital para Autoridades de Registro de todo el país.'
        ],
        highlight: 'TSL Argentina (estándar ETSI TS 119 612) · Validador de Firmas (validadordefirmas.gob.ar — +2M usuarios en 2025).'
      },
      {
        title: 'Oficial de Registro y Asistente Técnico',
        company: 'Secretaría de Innovación, Ciencia y Tecnología de la Nación',
        period: 'Sept 2021',
        periodEnd: 'Oct 2022',
        location: 'CABA',
        current: false,
        bullets: [
          'Gestión de solicitudes de certificados digitales.',
          'Asistencia técnica y procedimental a suscriptores y Autoridades de Registro.',
          'Soporte técnico Nivel 1 con resolución de +200 incidentes anuales.'
        ],
        highlight: ''
      },
      {
        title: 'Asistente de Desarrollo Freelance',
        company: 'Colaboración independiente',
        period: 'Ene 2019',
        periodEnd: 'Dic 2019',
        location: 'La Plata',
        current: false,
        bullets: [
          'Desarrollo de funcionalidades puntuales (botones, funciones de interacción) para páginas web de terceros en HTML, CSS y JavaScript.',
          'Primer acercamiento práctico a la programación web, colaborando con un desarrollador externo.'
        ],
        highlight: ''
      },
      {
        title: 'Atención al Público',
        company: 'Varias empresas',
        period: 'Ene 2016',
        periodEnd: 'Ago 2021',
        location: 'Chascomús / La Plata',
        current: false,
        bullets: [
          'Atención al cliente, gestión de pedidos y manejo de caja.'
        ],
        highlight: ''
      }
    ],

    // ============================================================
    // DATA: Skills
    // ============================================================
    skills: [
      {
        category: 'skills.dev',
        icon: 'code',
        items: ['JavaScript', 'React', 'Node.js', 'Go', 'HTML', 'CSS', 'Git', 'APIs REST', 'Desarrollo agéntico con IA']
      },
      {
        category: 'skills.infra',
        icon: 'security',
        items: ['PKI', 'Firma Digital', 'HSM', 'Windows Server', 'TSL', 'Certificados X.509']
      },
      {
        category: 'skills.db',
        icon: 'database',
        items: ['SQL Server', 'MongoDB', 'SQLite', 'Supabase']
      },
      {
        category: 'skills.mgmt',
        icon: 'groups',
        items: ['JIRA Service Desk', 'GDE', 'TAD', 'Documentación técnica', 'Liderazgo de equipos']
      }
    ],

    // ============================================================
    // DATA: Courses
    // ============================================================
    courses: [
      {
        title: 'Luna Network HSM 7 Certification Course',
        provider: 'Complus SA (Partner oficial Thales)',
        year: '2025',
        certLink: ''
      },
      {
        title: 'Inteligencia Artificial: herramientas para potenciar nuestro trabajo',
        provider: 'Aioxnis',
        year: '2025',
        certLink: 'resources/docs/certificaciones/IA-herramientas-para-potenciar-nuestro-trabajo(2025).pdf'
      }
    ],

    // ============================================================
    // DATA: Subjects (Education page)
    // ============================================================
    // Removed subjects array, now loaded from materias.js
    subjects: []
  },

  /* =========================================================
     ENGLISH
     ========================================================= */
  en: {
    // ---- Navbar ----
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.formation': 'Background',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',
    'nav.lang': 'ES',

    // ---- Hero ----
    'hero.subtitle': 'Fullstack developer in training | PKI Specialist',
    'hero.description': 'I build secure and reliable software combining my expertise in PKI and critical infrastructure with fullstack development. I use agentic AI as part of my daily workflow. Currently pursuing a Bachelor\'s in Computer Science at Universidad Siglo 21.',
    'hero.cta.projects': 'View projects',
    'hero.cta.cv': 'Download CV',
    'hero.progress.total': "Bachelor's in Computer Science",
    'hero.progress.inter': "Associate's Degree (Systems Analysis)",

    // ---- Section titles ----
    'section.projects.title': 'Projects',
    'section.projects.subtitle': 'Solutions I designed and built end to end',
    'section.experience.title': 'Experience',
    'section.experience.subtitle': 'Professional background in technology and critical infrastructure',
    'section.skills.title': 'Skills',
    'section.skills.subtitle': 'Technologies and tools I work with',
    'section.formation.title': 'Background',
    'section.formation.subtitle': 'Education, certifications & languages',
    'section.contact.title': "Let's talk",
    'section.contact.subtitle': "I'm open to new opportunities and collaborations. Don't hesitate to reach out.",

    // ---- Formation sub-headings ----
    'formation.education': 'Education',
    'formation.courses': 'Courses & Certifications',
    'formation.languages': 'Languages',

    // ---- Projects ----
    'projects.featured': 'Featured project',
    'projects.details.toggle': 'View architecture',
    'projects.details.toggle.open': 'Hide details',
    'projects.link.demo': 'Visit site',
    'projects.link.repo': 'Repository',

    // ---- Experience ----
    'experience.present': 'Present',
    'experience.highlight': 'Highlight',

    // ---- Skills categories ----
    'skills.dev': 'Development',
    'skills.infra': 'Infrastructure & Security',
    'skills.db': 'Databases',
    'skills.mgmt': 'Management',

    // ---- Education ----
    'education.degree': "Bachelor's in Computer Science",
    'education.school': 'Universidad Siglo 21',
    'education.status': 'IN PROGRESS',
    'education.detail.btn': 'View coursework',

    // ---- Courses ----
    'courses.cert': 'View certificate',

    // ---- Languages section ----
    'lang.es.name': 'Spanish',
    'lang.es.level': 'Native',
    'lang.en.name': 'English',
    'lang.en.reading': 'Reading & comprehension: Advanced technical',
    'lang.en.speaking': 'Speaking: Basic',

    // ---- Contact ----
    'contact.heading': "Let's talk",
    'contact.text': "I'm open to new opportunities and collaborations. If you have an interesting project or a position that fits my profile, feel free to write me.",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.message.placeholder': 'Tell me about your project or proposal...',

    // ---- Footer ----
    'footer.copy': '© {year} Federico Iseas. All rights reserved.',

    // ---- Education page ----
    'edu.back': 'Back to home',
    'edu.title': 'Curriculum Plan',
    'edu.subtitle': "Bachelor's in Computer Science — Universidad Siglo 21",
    'edu.stats.title.total': "Bachelor's Degree in Computer Science",
    'edu.stats.title.inter': "Associate's Degree in Systems Analysis (Intermediate Title)",
    'edu.stats.approved': 'subjects approved',
    'edu.stats.of': 'of',
    'edu.status.approved': 'Approved',
    'edu.status.in_progress': 'In progress',
    'edu.status.pending': 'Pending',
    'edu.type.promotion': 'Passed by promotion',
    'edu.type.final': 'Passed by final exam',
    'edu.type.equivalency': 'By equivalency',

    // ============================================================
    // DATA: Projects (EN)
    // ============================================================
    projects: [
      {
        id: 'signumid',
        title: 'SignumID (signumID.com.ar)',
        featured: true,
        image: 'resources/img/preview-SignumID.webp',
        description: 'Personal project combining my professional PKI expertise with fullstack development: a platform for signing and validating electronic documents with support for multiple standards (PAdES, CAdES, XAdES), trust chain verification against TSLs from multiple countries, revocation checking (OCSP/CRL) and timestamping.',
        stack: ['React', 'Node.js', 'Express', 'Go', 'SQLite', 'pkijs'],
        highlights: [
          '3-layer architecture: React SPA + Node.js/Express Backend + Local Agent in Go for cryptographic hardware access (USB token via PowerShell/Windows Certificate Store).',
          'Backend with Express 5, SQLite (better-sqlite3), and low-level cryptographic libraries (pkijs, asn1js, xadesjs) for parsing and verifying digital signatures.',
          'Multi-format validation using Strategy pattern (one specialized validator per standard: CAdES/PAdES/XAdES/OOXML) orchestrated by a central service.',
          'Integration with external services: TSA (RFC 3161 timestamps), OCSP/CRL for revocation, and download/parsing of TSLs (Trust Service Lists) from 5 Latin American countries.',
          'Security: rate limiting, Helmet, domain whitelist, in-memory file processing (no persistent document storage).',
        ],
        links: {
          demo: 'https://signumid.com.ar'
        }
      },
      {
        id: 'planificador-futbol',
        title: 'Football Tactical Planner',
        featured: false,
        image: 'resources/img/preview-Planificador.webp',
        description: 'Interactive web application for football coaching staffs: squad management, vector tactical boards (SVG) with drag & drop and touch support, and generation of printable technical reports in PDF.',
        stack: ['React', 'Vite', 'CSS'],
        highlights: [],
        links: {
          repo: 'https://github.com/FedericoIseas/Planificador-tactica-futbol'
        }
      },
      {
        id: 'cuit-generator',
        title: 'CUIT Generator',
        featured: false,
        image: 'resources/img/preview-CuitGenerator.webp',
        description: 'Web tool for generating and validating Argentine CUITs/CUILs (tax IDs). Implements the official check-digit algorithm with support for individuals and legal entities, ideal for testing billing and tax administration systems.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        highlights: [],
        links: {
          demo: 'https://federicoiseas.github.io/CUITGenerator/',
          repo: 'https://github.com/FedericoIseas/CUITGenerator'
        }
      },
      {
        id: 'bot-facturador',
        title: 'Invoice Bot',
        featured: false,
        image: 'resources/img/preview-BotFacturador.webp',
        description: 'Telegram bot for automated electronic invoice generation. Integrates with AFIP Web Services (WSFE) for issuing valid tax receipts, simplifying invoicing for freelancers and small businesses.',
        stack: ['Node.js', 'Express', 'MongoDB', 'AFIP SDK'],
        highlights: [],
        links: {
          repo: 'https://github.com/FedericoIseas/Facturador-ARCA-DEMO'
        }
      }
    ],
    // ============================================================
    // DATA: Experience (EN)
    // ============================================================
    experience: [
      {
        title: 'Digital Signature Coordinator',
        company: 'National Secretariat of Innovation, Science & Technology',
        period: 'Sep 2025',
        periodEnd: 'present',
        location: 'Buenos Aires',
        current: true,
        bullets: [
          'Technical and operational leadership of a +15 member team.',
          'Led the comprehensive migration of 4 cryptographic HSM appliances, ensuring service continuity.',
          'Principal technical reference for operation, L3 support, and continuity of the PKI infrastructure.',
          'Management and follow-up of digital certification projects and implementation of integrations.',
          'Administrator of the AC ONTI Certification Authority.',
          'Regular participation in technical exchange roundtables with Latin American countries and international organizations, driving digital signature adoption in the public and private sectors.',
          'Use and knowledge of National Government platforms (GDE and TAD).',
          'Preparation of technical management reports and responses to internal and external audits.'
        ],
        highlight: 'HSM Migration — Technical lead for the migration of 4 production HSM appliances.'
      },
      {
        title: 'Certification Authority Administrator & L3 Support',
        company: 'National Secretariat of Innovation, Science & Technology',
        period: 'Sep 2022',
        periodEnd: 'Aug 2025',
        location: 'Buenos Aires',
        current: false,
        bullets: [
          'Administration, support, and maintenance of AC ONTI.',
          'Principal reference consultant for hardware-based digital signatures.',
          'Infrastructure maintenance on Windows Server and Hardware Security Modules (HSM) operation.',
          'Design and execution of complex SQL Server queries for operational report automation.',
          'Resolution of 1,000+ L3 advanced support incidents annually.',
          'Design, implementation, and maintenance of the Trust Service List (TSL) of the Argentine Republic.',
          'Reference consultancy for other countries in implementing their own trust lists.',
          'Technical requirements definition and functional testing of the Signature Validator (validadordefirmas.gob.ar), used by +2 million people.',
          'Digital Signature training for Registration Authorities nationwide.'
        ],
        highlight: 'Argentine TSL (ETSI TS 119 612 standard) · Signature Validator (validadordefirmas.gob.ar — 2M+ users in 2025).'
      },
      {
        title: 'Registration Officer & Technical Assistant',
        company: 'National Secretariat of Innovation, Science & Technology',
        period: 'Sep 2021',
        periodEnd: 'Oct 2022',
        location: 'Buenos Aires',
        current: false,
        bullets: [
          'Management of digital certificate requests.',
          'Technical and procedural assistance to subscribers and Registration Authorities.',
          'Level 1 technical support with resolution of +200 annual incidents.'
        ],
        highlight: ''
      },
      {
        title: 'Freelance Development Assistant',
        company: 'Independent collaboration',
        period: 'Jan 2019',
        periodEnd: 'Dec 2019',
        location: 'La Plata',
        current: false,
        bullets: [
          'Development of specific features (buttons, interaction functions) for third-party websites in HTML, CSS and JavaScript.',
          'First hands-on approach to web programming, collaborating with an external developer.'
        ],
        highlight: ''
      },
      {
        title: 'Customer Service',
        company: 'Various companies',
        period: 'Jan 2016',
        periodEnd: 'Aug 2021',
        location: 'Chascomús / La Plata',
        current: false,
        bullets: [
          'Customer service, order management and cash handling.'
        ],
        highlight: ''
      }
    ],

    // ============================================================
    // DATA: Skills (EN)
    // ============================================================
    skills: [
      {
        category: 'skills.dev',
        icon: 'code',
        items: ['JavaScript', 'React', 'Node.js', 'Go', 'HTML', 'CSS', 'Git', 'APIs REST', 'Agentic AI development']
      },
      {
        category: 'skills.infra',
        icon: 'security',
        items: ['PKI', 'Digital Signature', 'HSM', 'Windows Server', 'TSL', 'X.509 Certificates']
      },
      {
        category: 'skills.db',
        icon: 'database',
        items: ['SQL Server', 'MongoDB', 'SQLite', 'Supabase']
      },
      {
        category: 'skills.mgmt',
        icon: 'groups',
        items: ['JIRA Service Desk', 'GDE', 'TAD', 'Technical documentation', 'Team leadership']
      }
    ],

    // ============================================================
    // DATA: Courses (EN)
    // ============================================================
    courses: [
      {
        title: 'Luna Network HSM 7 Certification Course',
        provider: 'Complus SA (Official Thales Partner)',
        year: '2025',
        certLink: ''
      },
      {
        title: 'Artificial Intelligence: tools to boost our work',
        provider: 'Aioxnis',
        year: '2025',
        certLink: 'resources/docs/certificaciones/IA-herramientas-para-potenciar-nuestro-trabajo(2025).pdf'
      }
    ],

    // Removed subjects array, now loaded from materias.js
    subjects: []
  }
};

/* ============================================================
   i18n Engine
   ============================================================ */

let currentLang = 'es';

/**
 * Get a translation by key. Supports {year} interpolation.
 * @param {string} key — dot-notation key (e.g. 'nav.home')
 * @returns {string}
 */
function t(key) {
  const val = translations[currentLang][key];
  if (typeof val === 'string') {
    return val.replace('{year}', new Date().getFullYear());
  }
  return val !== undefined ? val : key;
}

/**
 * Get data array (projects, experience, etc.) for the current language.
 * @param {string} key — data key (e.g. 'projects')
 * @returns {Array}
 */
function getData(key) {
  return translations[currentLang][key] || [];
}

/**
 * Apply translations to all elements with data-i18n attribute.
 * Also handles data-i18n-placeholder.
 */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (typeof translated === 'string') {
      el.textContent = translated;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const translated = t(key);
    if (typeof translated === 'string') {
      el.innerHTML = translated;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    el.setAttribute('aria-label', t(key));
  });
}

/**
 * Set language and persist to localStorage.
 * @param {string} lang — 'es' or 'en'
 */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  applyTranslations();

  // Re-render dynamic sections
  if (typeof renderDynamicSections === 'function') {
    renderDynamicSections();
  }
}

/**
 * Initialize language from localStorage (default: 'es').
 */
function initLanguage() {
  const saved = localStorage.getItem('portfolio-lang');
  currentLang = saved || 'es';
  document.documentElement.setAttribute('lang', currentLang);
}
