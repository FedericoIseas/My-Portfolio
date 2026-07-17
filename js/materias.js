/* ============================================================
   materias.js — Plan de Estudios Data & Business Logic
   ============================================================ */

const planEstudios = [
  {
    semesterId: "semestre1",
    semesterNameES: "Semestre 1",
    semesterNameEN: "Semester 1",
    subjects: [
      {
        nameES: "Álgebra y Geometría",
        nameEN: "Algebra and Geometry",
        status: "approved",
        grade: 8,
        type: "equivalency",
        summaryES: "Geometría analítica, sistemas de ecuaciones lineales, matrices, determinantes, vectores, espacios vectoriales, transformaciones lineales, valores y vectores característicos, formas bilineales y cuadráticas, y estructuras algebraicas.",
        summaryEN: "Analytical geometry, systems of linear equations, matrices, determinants, vectors, vector spaces, linear transformations, eigenvalues and eigenvectors, bilinear and quadratic forms, and algebraic structures."
      },
      {
        nameES: "Análisis Matemático",
        nameEN: "Mathematical Analysis",
        status: "approved",
        grade: 10,
        type: "equivalency",
        summaryES: "Funciones, límites, continuidad, derivadas, aplicaciones de la derivada, integrales, técnicas de integración, funciones paramétricas y polares, sucesiones, series, series de Taylor y Maclaurin, ecuaciones diferenciales y transformada de Laplace.",
        summaryEN: "Functions, limits, continuity, derivatives, applications of derivatives, integrals, integration techniques, parametric and polar functions, sequences, series, Taylor and Maclaurin series, differential equations, and Laplace transform."
      },
      {
        nameES: "Idioma Extranjero I",
        nameEN: "Foreign Language I",
        status: "in_progress"
      },
      {
        nameES: "Lógica Simbólica",
        nameEN: "Symbolic Logic",
        status: "approved",
        grade: 8,
        type: "promotion",
        summaryES: "Lógica proposicional, razonamiento deductivo, lógica de predicados, teoría de conjuntos, álgebra de Boole y circuitos lógicos.",
        summaryEN: "Propositional logic, deductive reasoning, predicate logic, set theory, Boolean algebra, and logical circuits."
      },
      {
        nameES: "Programación Lógica",
        nameEN: "Logic Programming",
        status: "approved",
        grade: 8,
        type: "promotion",
        summaryES: "Algoritmos, pseudocódigo, programación estructurada, estructuras de control, arreglos, búsqueda, ordenamiento, subalgoritmos y registros.",
        summaryEN: "Algorithms, pseudocode, structured programming, control structures, arrays, searching, sorting, sub-algorithms, and records."
      },
      {
        nameES: "Sistemas de Información",
        nameEN: "Information Systems",
        status: "approved",
        grade: 9,
        type: "promotion",
        summaryES: "Teoría de sistemas, información en las organizaciones, sistemas de información, toma de decisiones, ERP, CRM, SCM, e-Business y e-Procurement.",
        summaryEN: "Systems theory, information in organizations, information systems, decision making, ERP, CRM, SCM, e-Business, and e-Procurement."
      }
    ]
  },
  {
    semesterId: "semestre2",
    semesterNameES: "Semestre 2",
    semesterNameEN: "Semester 2",
    subjects: [
      {
        nameES: "Arquitectura del Computador",
        nameEN: "Computer Architecture",
        status: "approved",
        grade: 9,
        type: "equivalency",
        summaryES: "Sistemas de numeración, circuitos digitales, arquitectura de computadores, modelo de Von Neumann, memorias, motherboard, buses, microprocesadores, arquitecturas RISC y CISC, almacenamiento, dispositivos de entrada/salida, procesamiento de audio y video, e impresión.",
        summaryEN: "Number systems, digital circuits, computer architecture, Von Neumann model, memories, motherboard, buses, microprocessors, RISC and CISC architectures, storage, input/output devices, audio and video processing, and printing."
      },
      {
        nameES: "Cálculo Avanzado",
        nameEN: "Advanced Calculus",
        status: "approved",
        grade: 10,
        type: "equivalency",
        summaryES: "Vectores, geometría del espacio, funciones vectoriales, derivadas parciales, funciones de varias variables, integrales múltiples, cálculo vectorial, campos vectoriales e integrales de línea y de superficie.",
        summaryEN: "Vectors, geometry of space, vector functions, partial derivatives, functions of several variables, multiple integrals, vector calculus, vector fields, and line and surface integrals."
      },
      {
        nameES: "Idioma Extranjero II",
        nameEN: "Foreign Language II",
        status: "pending"
      },
      {
        nameES: "Matemática Discreta",
        nameEN: "Discrete Mathematics",
        status: "approved",
        grade: 9,
        type: "promotion",
        summaryES: "Números enteros, funciones, técnicas de conteo, principios de conteo, aritmética modular, congruencias, grafos, árboles y estructuras algebraicas.",
        summaryEN: "Integers, functions, counting techniques, counting principles, modular arithmetic, congruences, graphs, trees, and algebraic structures."
      },
      {
        nameES: "Programación Orientada a Objetos",
        nameEN: "Object Oriented Programming",
        status: "in_progress"
      }
    ]
  },
  {
    semesterId: "semestre3",
    semesterNameES: "Semestre 3",
    semesterNameEN: "Semester 3",
    subjects: [
      {
        nameES: "Algoritmos y Estructuras de Datos I",
        nameEN: "Algorithms and Data Structures I",
        status: "pending"
      },
      {
        nameES: "Grupo y Liderazgo",
        nameEN: "Groups and Leadership",
        status: "approved",
        grade: 8,
        type: "promotion",
        summaryES: "Psicología positiva, psicología organizacional positiva, bienestar organizacional, resiliencia, comunicación, equipos de trabajo, liderazgo positivo, liderazgo auténtico y liderazgo transformacional.",
        summaryEN: "Positive psychology, positive organizational psychology, organizational well-being, resilience, communication, work teams, positive leadership, authentic leadership, and transformational leadership."
      },
      {
        nameES: "Estadística y Probabilidad",
        nameEN: "Statistics and Probability",
        status: "in_progress"
      },
      {
        nameES: "Idioma Extranjero III",
        nameEN: "Foreign Language III",
        status: "pending"
      },
      {
        nameES: "Lenguajes Formales y Computabilidad",
        nameEN: "Formal Languages and Computability",
        status: "in_progress"
      },
      {
        nameES: "Taller de Algoritmos y Estructura de Datos I",
        nameEN: "Algorithms and Data Structures Workshop I",
        status: "pending"
      },
      {
        nameES: "Práctica Solidaria",
        nameEN: "Solidarity Practice",
        status: "pending"
      }
    ]
  },
  {
    semesterId: "semestre4",
    semesterNameES: "Semestre 4",
    semesterNameEN: "Semester 4",
    subjects: [
      {
        nameES: "Administración",
        nameEN: "Management",
        status: "approved",
        grade: 8,
        type: "promotion",
        summaryES: "Fundamentos de administración, organizaciones, proceso administrativo, planificación, organización, dirección, control, toma de decisiones, estrategia, estructuras organizacionales, liderazgo, motivación y comunicación.",
        summaryEN: "Fundamentals of management, organizations, administrative process, planning, organizing, directing, controlling, decision making, strategy, organizational structures, leadership, motivation, and communication."
      },
      {
        nameES: "Algoritmos y Estructura de Datos II",
        nameEN: "Algorithms and Data Structures II",
        status: "pending"
      },
      {
        nameES: "Bases de Datos I",
        nameEN: "Databases I",
        status: "in_progress"
      },
      {
        nameES: "Idioma Extranjero IV",
        nameEN: "Foreign Language IV",
        status: "pending"
      },
      {
        nameES: "Taller de Algoritmos y Estructura de Datos II",
        nameEN: "Algorithms and Data Structures Workshop II",
        status: "pending"
      }
    ]
  },
  {
    semesterId: "semestre5",
    semesterNameES: "Semestre 5",
    semesterNameEN: "Semester 5",
    subjects: [
      {
        nameES: "Análisis y Diseño de Software",
        nameEN: "Software Analysis and Design",
        status: "pending"
      },
      {
        nameES: "Idioma Extranjero V",
        nameEN: "Foreign Language V",
        status: "pending"
      },
      {
        nameES: "Principios de Economía",
        nameEN: "Principles of Economics",
        status: "in_progress"
      },
      {
        nameES: "Pruebas de Sistemas",
        nameEN: "Systems Testing",
        status: "pending"
      },
      {
        nameES: "Sistemas Operativos",
        nameEN: "Operating Systems",
        status: "pending"
      }
    ]
  },
  {
    semesterId: "semestre6",
    semesterNameES: "Semestre 6",
    semesterNameEN: "Semester 6",
    subjects: [
      {
        nameES: "Comunicaciones",
        nameEN: "Communications",
        status: "pending"
      },
      {
        nameES: "Desarrollo Emprendedor",
        nameEN: "Entrepreneurial Development",
        status: "pending"
      },
      {
        nameES: "Idioma Extranjero VI",
        nameEN: "Foreign Language VI",
        status: "pending"
      },
      {
        nameES: "Ingeniería de Software",
        nameEN: "Software Engineering",
        status: "pending"
      },
      {
        nameES: "Seminario de Práctica de Informática",
        nameEN: "Computer Science Practice Seminar",
        status: "pending"
      },
      {
        nameES: "Algoritmos Concurrentes y Paralelos",
        nameEN: "Concurrent and Parallel Algorithms",
        status: "approved",
        grade: 7,
        type: "equivalency",
        summaryES: "Programación concurrente, hilos, sincronización, sistemas distribuidos, comunicación entre procesos, programación paralela, arquitecturas paralelas, concurrencia, patrones de paralelismo y rendimiento.",
        summaryEN: "Concurrent programming, threads, synchronization, distributed systems, interprocess communication, parallel programming, parallel architectures, concurrency, parallelism patterns, and performance."
      }
    ]
  },
  {
    hissMilestone: "efip1",
    milestoneNameES: "--- EFIP I - Analista Universitario en Sistemas de Computación ---",
    milestoneNameEN: "--- EFIP I - Associate's Degree in Systems Analysis ---"
  },
  {
    semesterId: "semestre7",
    semesterNameES: "Semestre 7",
    semesterNameEN: "Semester 7",
    subjects: [
      {
        nameES: "Desarrollo de Aplicaciones con Base de Datos",
        nameEN: "Database Applications Development",
        status: "pending"
      },
      {
        nameES: "Emprendimientos Universitarios",
        nameEN: "University Ventures",
        status: "pending"
      },
      {
        nameES: "Seguridad Informática",
        nameEN: "Information Security",
        status: "pending"
      },
      {
        nameES: "Sistemas Operativos II (Redes)",
        nameEN: "Operating Systems II (Networks)",
        status: "pending"
      }
    ]
  },
  {
    semesterId: "semestre8",
    semesterNameES: "Semestre 8",
    semesterNameEN: "Semester 8",
    subjects: [
      {
        nameES: "Administración de Proyectos",
        nameEN: "Project Management",
        status: "pending"
      },
      {
        nameES: "Auditoría de Sistemas",
        nameEN: "Systems Auditing",
        status: "pending"
      },
      {
        nameES: "Base de Datos II",
        nameEN: "Databases II",
        status: "pending"
      },
      {
        nameES: "Desarrollo Web",
        nameEN: "Web Development",
        status: "pending"
      },
      {
        nameES: "Programación Cliente (Servidor)",
        nameEN: "Client (Server) Programming",
        status: "pending"
      }
    ]
  },
  {
    semesterId: "semestre9",
    semesterNameES: "Semestre 9",
    semesterNameEN: "Semester 9",
    subjects: [
      {
        nameES: "Calidad de Software",
        nameEN: "Software Quality",
        status: "pending"
      },
      {
        nameES: "Herramientas Matemáticas VI (Modelos de Simulación)",
        nameEN: "Mathematical Tools VI (Simulation Models)",
        status: "pending"
      },
      {
        nameES: "Inteligencia Artificial",
        nameEN: "Artificial Intelligence",
        status: "pending"
      },
      {
        nameES: "Práctica Profesional de Informática",
        nameEN: "Professional Computer Science Internship",
        status: "pending"
      }
    ]
  },
  {
    semesterId: "semestre10",
    semesterNameES: "Semestre 10",
    semesterNameEN: "Semester 10",
    subjects: [
      {
        nameES: "Gestión de Proyectos de Infraestructura",
        nameEN: "Infrastructure Project Management",
        status: "pending"
      },
      {
        nameES: "Práctica Solidaria II", // Named differently to differentiate or keep original
        nameEN: "Solidarity Practice II",
        status: "pending"
      },
      {
        nameES: "Seminario Final de Informática",
        nameEN: "Final Computer Science Seminar",
        status: "pending"
      },
      {
        nameES: "Ética y Deontología Profesional",
        nameEN: "Ethics and Professional Deontology",
        status: "pending"
      }
    ]
  },
  {
    hissMilestone: "efip2",
    milestoneNameES: "--- EFIP II - Licenciatura en Informática ---",
    milestoneNameEN: "--- EFIP II - Bachelor's Degree in Computer Science ---"
  }
];

// Helper to calculate statistics
function getPlanStatistics() {
  let total = 0;
  let approved = 0;
  let inProgress = 0;
  let pending = 0;

  // Intermediate title (first 6 semesters: semestre1 to semestre6)
  let interTotal = 0;
  let interApproved = 0;
  let interInProgress = 0;
  let interPending = 0;

  planEstudios.forEach(block => {
    if (block.subjects) {
      const isInter = ["semestre1", "semestre2", "semestre3", "semestre4", "semestre5", "semestre6"].includes(block.semesterId);
      block.subjects.forEach(sub => {
        total++;
        if (sub.status === "approved") approved++;
        else if (sub.status === "in_progress") inProgress++;
        else pending++;

        if (isInter) {
          interTotal++;
          if (sub.status === "approved") interApproved++;
          else if (sub.status === "in_progress") interInProgress++;
          else interPending++;
        }
      });
    }
  });

  return { 
    total, approved, inProgress, pending,
    interTotal, interApproved, interInProgress, interPending
  };
}
