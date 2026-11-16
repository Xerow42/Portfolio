import type { Project } from "./types";

export const projects: Project[] = [
  {
  slug: "qcm-corrector",
  title: "QCM Corrector",
  status: "documented",
  featured: true,

  shortDescription:
    "A full-stack examination management platform combining secure QCM creation, automated answer-sheet grading through computer vision and machine learning, and centralized academic results management.",

  category: [
    "Full Stack Development",
    "Artificial Intelligence",
    "Computer Vision",
    "Information Systems", 
  ],

  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "OpenCV",
    "TensorFlow / Keras",
    "EasyOCR",
    "Docker",
    "GitHub Actions",
    "REST APIs",
    "Swift",
  ],

  role:
    "End-of-year engineering project developed by a team of four. I designed and developed the web application, led the PostgreSQL database architecture and implementation, contributed to machine learning model training, and subsequently strengthened the backend's authentication, authorization, testing, and deployment readiness.",

  timeframe: "2025 – 2026",

  links: [
    {
      label: "GitHub — Source Code",
      url: "https://github.com/Xerow42/qcm-corrector-web",
    },
  ],

  problem:
    "Traditional multiple-choice exam grading is time-consuming, susceptible to human error, and difficult to manage at scale. Teachers need a centralized solution to create examinations, process scanned answer sheets, monitor correction sessions, and securely manage student results. The platform must also prevent unauthorized access to academic records and modifications to examinations belonging to other teachers.",

  solution:
    "Designed a modular examination management platform connecting four components: a Next.js web application for QCM creation and results visualization, a Swift iOS application for answer-sheet acquisition, a computer vision and machine learning service for automated answer recognition, and a FastAPI backend connected to PostgreSQL. The architecture centralizes academic data and introduces authenticated access with role-based authorization.",

  features: [
    "Interactive QCM editor supporting up to 60 questions, four answer choices, single or multiple correct answers, configurable weighting, and real-time validation.",

    "Browser autosave, draft management, and QCM publication workflows synchronized with the backend.",

    "Backend authentication with signed, expiring session tokens and secure password hashing using PBKDF2-HMAC-SHA256.",

    "Role-based access control for teachers and administrators, protecting sensitive API endpoints and examination data.",

    "QCM ownership enforcement preventing teachers from viewing or overwriting examinations belonging to other teachers.",

    "Subject ownership validation and transactional database operations to protect data consistency.",

    "Dashboard and correction-session views displaying weighted scores, recognized answers, correction status, and student results.",

    "Read-only visualization of academic classes and students, including answer-sheet identifiers.",

    "Automated security regression tests covering authentication, authorization, ownership restrictions, and protected endpoints.",

    "GitHub Actions workflow validating frontend quality, TypeScript compilation, production builds, and backend security tests.",
  ],

  architecture:
    "Modular client-server architecture separating the Next.js frontend, FastAPI REST backend, PostgreSQL relational database, and AI-based grading service. The frontend communicates with the backend through authenticated HTTP/JSON requests, while database operations remain server-side. The AI service processes scanned answer sheets using computer vision and machine learning. The iOS scanning application operates as a separate client.",

  technicalImplementation: [
    "Developed a responsive web application using Next.js App Router, React, and TypeScript in strict mode, with reusable components and typed API integrations.",

    "Designed and implemented the PostgreSQL data model covering users, teachers, students, classes, subjects, QCMs, questions, answers, correction sessions, and examination results.",

    "Implemented frontend authentication integration with the FastAPI backend, signed bearer tokens, session handling, and authenticated API requests.",

    "Strengthened backend security using PBKDF2-HMAC-SHA256 password hashing, HMAC-SHA256 signed tokens, expiration validation, and role-based access restrictions.",

    "Implemented ownership checks for QCMs and subjects to prevent unauthorized modifications and cross-teacher data access.",

    "Validated authorization and transactional behavior through Python unit tests and PostgreSQL integration testing during development.",

    "Configured automated quality checks with GitHub Actions, including ESLint, TypeScript validation, Next.js production builds, Python tests, and secret detection.",

    "Contributed to machine learning model training and dataset preparation. The team's AI pipeline uses OpenCV for image alignment and grid extraction, TensorFlow/Keras for checkbox classification, and EasyOCR for handwritten information recognition.",

    "Documented system architecture, security requirements, environment configuration, and deployment procedures.",
  ],

  challenges: [
    "Coordinating a consistent PostgreSQL database architecture across four independently developed application components.",

    "Designing a flexible relational schema capable of supporting examination creation, multiple question types, correction sessions, and student results.",

    "Securing a multi-user academic platform against unauthorized QCM access, ownership takeover, and cross-teacher data modifications.",

    "Ensuring database consistency during examination updates and handling transaction rollback correctly.",

    "Integrating frontend authentication with backend security requirements while preserving existing QCM creation workflows.",

    "Maintaining automated regression tests and a reproducible build pipeline as the project evolved.",

    "Distinguishing implemented functionality from components that still require complete end-to-end deployment and integration validation.",
  ],

  results: [
    "Developed a functional Next.js interface for QCM creation, draft management, publication, dashboards, correction sessions, and academic data visualization.",

    "Designed and implemented the PostgreSQL database architecture supporting the platform's core academic entities and relationships.",

    "Introduced backend authentication and authorization protections, including role-based access control and QCM ownership enforcement.",

    "Successfully executed 27 backend unit tests covering authentication, authorization, security, and ownership regression scenarios.",

    "Validated the frontend with successful ESLint checks, TypeScript compilation, and an optimized Next.js production build.",

    "Established a GitHub Actions CI workflow and automated secret detection to improve code quality and deployment readiness.",

    "Published the project's source code, technical documentation, security improvements, and deployment instructions on GitHub.",
  ],

  futureImprovements: [
    "Deploy and validate the complete FastAPI, PostgreSQL, and AI grading infrastructure in a production environment.",

    "Complete end-to-end integration tests covering scanning, AI recognition, grading, and results delivery.",

    "Expand administrative functionality with class and student management, including CSV/Excel import.",

    "Complete and validate PDF generation and automated student result notifications.",

    "Introduce centralized monitoring, structured logging, and additional production security controls.",

    "Improve scalability and deployment automation across the web, backend, database, and AI services.",
  ],
},
  {
    slug: "dataflow",
    title: "DataFlow",
    status: "documented",
    shortDescription:
      "A weather-analytics pipeline: real historical data for Lille is validated, cleaned and loaded into PostgreSQL, then served by a FastAPI API to a React dashboard.",
    category: ["Data Engineering", "Data Science", "Full Stack Development"],
    tech: ["Python", "Pandas", "PostgreSQL", "FastAPI", "React", "Docker"],
    role: "Solo project.",
    links: [{ label: "GitHub", url: "https://github.com/Xerow42/dataflow" }],
    problem: "Many data-engineering demos are a single notebook reading a CSV. DataFlow shows a full pipeline, from ingestion to dashboard, on a real and reproducible public data source.",
    solution:
      "A Python pipeline pulls daily weather from the Open-Meteo archive API (no key required), validates, cleans and transforms it, loads it into PostgreSQL with idempotent upserts, and exposes it through FastAPI to a React + Recharts dashboard.",
    features: [
      "Five separate stages: ingest, validate, clean, transform, load.",
      "Data-quality checks that flag problems instead of silently dropping them: missing fields, bad dates, impossible ranges, duplicates, outliers, single-day gaps.",
      "Idempotent loading: a unique (location, date) constraint means re-running a range updates rows instead of duplicating them.",
      "A pipeline_runs table logs every run and feeds the dashboard's data-quality panel.",
      "Dashboard: city and date filters, KPI cards, temperature trend with 7-day rolling mean, precipitation chart.",
    ],
    architecture:
      "Open-Meteo API → ingestion (raw JSON snapshot) → validation → cleaning → transformation → PostgreSQL → FastAPI (/api/metrics, /api/trends, /api/records) → React dashboard.",
    technicalImplementation: [
      "Normalized PostgreSQL schema (locations, daily_weather, pipeline_runs) with indexes on the date columns used by range queries.",
      "The same aggregations are implemented in pandas inside the API, so one code path serves both SQLite (development) and PostgreSQL.",
      "Docker Compose for the database, pipeline and dashboard; an offline mode replays a saved snapshot for tests.",
    ],
    challenges: [
      "Missing values that the source does not provide are kept as real NULLs rather than filled in with invented numbers.",
      "Choosing scope: Spark, Kafka and Airflow are deliberately not used at this scale; the README explains what would change at larger scale.",
    ],
    results: [
      "Full validate → clean → transform → load flow verified on a real 15-day Lille sample; a repeated load produced no duplicate rows.",
      "Automated tests cover validation, cleaning, transformation and loading.",
    ],
    futureImprovements: [
      "Run the full one-year ingestion and verify the FastAPI + PostgreSQL + React stack end to end.",
      "Scheduled incremental ingestion and a CI pipeline.",
    ],
  },
  {
    slug: "visionai",
    title: "VisionAI",
    status: "documented",
    shortDescription:
      "A computer-vision app that runs a pretrained YOLO detector behind a FastAPI backend, with a React frontend for image upload and webcam capture.",
    category: ["Computer Vision", "Artificial Intelligence", "Full Stack Development"],
    tech: ["Python", "FastAPI", "React", "PyTorch", "OpenCV", "Ultralytics YOLO"],
    role: "Solo project.",
    links: [{ label: "GitHub", url: "https://github.com/Xerow42/Visionai" }],
    problem: "Integrating a pretrained detector into a real product takes more than a model call: validation, preprocessing, error handling and a usable interface.",
    solution:
      "A FastAPI backend validates and preprocesses an uploaded image or webcam frame with OpenCV, runs a pretrained YOLO26n detector (COCO, 80 classes, automatic fallback to YOLO11n), and returns detections, confidences, boxes, an annotated image and the measured inference time.",
    features: [
      "Drag-and-drop upload and webcam capture through the same /predict endpoint.",
      "Class labels, confidence scores, bounding boxes and a server-annotated image.",
      "Measured inference time on every response; /analyze endpoint for basic image statistics.",
      "File type and size validation on both sides; structured JSON errors.",
    ],
    architecture:
      "React → FastAPI /predict → validate → decode → letterbox resize (640×640) → YOLO inference → draw boxes → JSON response. A /health endpoint reports the active engine.",
    technicalImplementation: [
      "Nano YOLO models chosen for realistic CPU inference; the model loads once at startup and every response reports which engine ran.",
      "OpenCV preprocessing pipeline unit-tested independently of the model.",
      "A non-ML OpenCV fallback engine lets the whole request pipeline run offline; its results are labeled as fallback and never presented as YOLO output.",
    ],
    challenges: [
      "After installing the project on Windows, I fixed three integration bugs: an OpenCV package conflict with Ultralytics, model weights that failed to download with one Ultralytics version, and two faulty tests.",
    ],
    results: [
      "Full request pipeline (validate → preprocess → detect → annotate → respond) verified end to end.",
      "The YOLO engine loads and returns detections on a local Windows machine; no formal accuracy or speed benchmark is published yet.",
    ],
    futureImprovements: [
      "Publish an inference-time benchmark for the real YOLO engine, CPU vs GPU.",
      "Batch prediction endpoint.",
    ],
  },
  {
    slug: "documind",
    title: "DocuMind",
    status: "documented",
    shortDescription:
      "A resume-classification platform: TF-IDF and classical machine learning sort resumes into 24 professional sectors, behind a FastAPI backend and a React frontend.",
    category: ["Artificial Intelligence", "Machine Learning", "Full Stack Development"],
    tech: ["Python", "FastAPI", "React", "scikit-learn", "TF-IDF", "SQLite", "pdfplumber"],
    role: "Solo project.",
    links: [{ label: "GitHub", url: "https://github.com/Xerow42/Documind" }],
    problem: "Sorting resumes by job family by hand does not scale. DocuMind automates the first pass and keeps a searchable history of analyses.",
    solution:
      "The FastAPI backend extracts text from an uploaded PDF or TXT resume, classifies it with a TF-IDF + classical ML pipeline, extracts keywords and stores each analysis in SQLite. A React frontend covers upload, results and history.",
    features: [
      "Upload validation (type, size, empty file) and safe error messages.",
      "24 professional sectors (for example Information Technology, HR, Finance, Healthcare, Designer).",
      "Three models compared (Logistic Regression, Linear SVM, Multinomial Naive Bayes); the best is chosen by 5-fold stratified cross-validation on the training split, scored with macro-F1.",
      "Confidence score with a documented calculation, and keyword extraction from the TF-IDF weights.",
    ],
    architecture:
      "React → FastAPI → independent service modules (text extraction, preprocessing, classification, keywords) → SQLite. Training runs offline; the API only loads the saved model at startup.",
    technicalImplementation: [
      "TF-IDF (5,000 features, unigrams and bigrams) with classical models: fast, explainable, no GPU needed.",
      "Model selection by cross-validation on the training split only; the test split is evaluated once, after selection.",
      "Job-title ablation to check that the model does not rely on the resume header alone.",
      "Macro-F1 rather than accuracy, because the sectors are imbalanced (22 to 120 resumes each).",
      "Plain sqlite3 for four small tables; automated tests cover the ML pipeline, database and services.",
    ],
    challenges: [
      "The first dataset (962 rows) turned out to hold only 166 unique resumes, which would have inflated every score through train/test duplicates. I switched to a larger dataset (2,482 unique resumes) and removed exact duplicates.",
      "Labels come from the search category on the source site, not from the resume content, which caps achievable accuracy; classes such as BPO (22 resumes) are poorly learned.",
    ],
    results: [
      "Linear SVM selected by cross-validation: macro-F1 0.655 ± 0.016 (5 folds, training split).",
      "On 497 held-out resumes, evaluated once: macro-F1 0.685, accuracy 0.726.",
      "Best sectors: Information Technology and Designer (F1 0.91); weakest: BPO (0.00) and Apparel (0.36).",
      "Without the job title in the resume header, cross-validated macro-F1 is about 0.61 (partial title removal), so the model also uses the resume content.",
    ],
    futureImprovements: [
      "Calibrated probabilities for the SVM scores and hyperparameter search inside cross-validation.",
      "Merge overlapping sectors (finance, accounting, banking) and run the full stack end to end with CI.",
    ],
  },
  {
    slug: "prescolaire-crm",
    title: "Complaint-Management CRM",
    status: "documented",
    shortDescription:
      "A CRM built during an information-systems internship to track complaints, with automatic translation, sentiment analysis and e-mail replies.",
    category: ["Full Stack Development", "Artificial Intelligence", "Information Systems"],
    tech: ["Python", "Flask", "NLP", "Sentiment Analysis", "SQLite"],
    role: "IT Intern, Information Systems Department — Fédération Marocaine du Préscolaire (Rabat, Morocco).",
    timeframe: "2025 · 1 month",
    links: [{ label: "GitHub", url: "https://github.com/Xerow42/crm" }],
    problem: "Complaints had no central place to be recorded and tracked, and no simple way to spot which ones were most urgent.",
    solution: "A Flask CRM that stores complaints in SQLite and uses NLP to translate and score them, then sends replies by e-mail.",
    features: [
      "Complaint intake and tracking in a web interface.",
      "Automatic translation and sentiment analysis of each complaint.",
      "E-mail replies sent from the application; CSV import of complaint records.",
    ],
    technicalImplementation: [
      "Flask backend with the translation and sentiment steps built into the complaint flow; SQLite for persistence.",
    ],
    results: [
      "A working CRM used during the internship to process and prioritize incoming complaints.",
    ],
  },
  {
    slug: "supratours-crud",
    title: "User-Management Web App",
    status: "documented",
    shortDescription:
      "A CRUD web application for user management, built during an information-systems internship at a bus-transport company.",
    category: ["Full Stack Development", "Information Systems"],
    tech: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    role: "IT Intern, Information Systems Department — Supratours (Rabat, Morocco).",
    timeframe: "June 2024 · 1 month",
    problem: "The company needed a simple internal tool to manage user accounts, and its bus-route and ticketing site needed ongoing maintenance.",
    solution: "A PHP and MySQL web application with full create, read, update and delete operations on user records.",
    features: [
      "Create, view, edit and delete users through a web interface.",
      "MySQL database managed with phpMyAdmin on a local XAMPP server.",
    ],
    technicalImplementation: [
      "Server-rendered PHP pages with HTML/CSS and a MySQL database.",
    ],
    results: [
      "A working CRUD application, plus contributions to the maintenance of the bus-route and ticketing site.",
    ],
  },
];

export const getFeaturedProject = (): Project =>
  projects.find((project) => project.featured) ?? (projects[0] as Project);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
