import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "qcm-corrector",
    title: "QCM Corrector",
    status: "documented",
    featured: true,
    shortDescription:
      "A platform where teachers create multiple-choice exams and scanned answer sheets are graded automatically with computer vision and machine learning.",
    category: ["Full Stack Development", "Artificial Intelligence", "Computer Vision", "Information Systems"],
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "OpenCV", "TensorFlow / Keras", "EasyOCR", "Docker", "Swift"],
    role: "End-of-year engineering project, team of 4. I built the web application and led the database design; teammates built the FastAPI backend, the AI grading service and the iOS scanning app.",
    timeframe: "2025 – 2026",
    links: [{ label: "GitHub — web app", url: "https://github.com/Xerow42/qcm-corrector-web" }],
    problem: "Grading multiple-choice exams by hand is slow and error-prone, and teachers lack one place to create a QCM, track graded copies and review doubtful results.",
    solution:
      "Four cooperating parts: a web app to build and publish QCMs and review results, an iOS app to photograph answer sheets, an AI service that reads them, and a FastAPI backend on PostgreSQL.",
    features: [
      "QCM editor: up to 60 questions with 4 choices, single or multiple answers, per-question weighting, live completeness check.",
      "Autosave in the browser, explicit draft and publish steps synced with the backend.",
      "Dashboard and per-session results: weighted score, detected answers, valid / to-check status.",
      "Read-only view of classes and students with their sheet identifiers.",
    ],
    architecture:
      "The web app only talks to the FastAPI backend over HTTP/JSON; the backend alone accesses PostgreSQL and calls the AI service that turns a scanned sheet into detected answers.",
    technicalImplementation: [
      "Next.js (App Router) and TypeScript in strict mode, with a typed API client and safe, user-facing error messages.",
      "PostgreSQL schema I designed (conceptual and logical models): users, QCMs, questions, answers, sessions, drafts, with account and candidate inheritance.",
      "AI service (teammates): OpenCV perspective correction and grid detection, a TensorFlow/Keras checkbox classifier trained on 40,000+ samples, EasyOCR for names.",
    ],
    challenges: [
      "Keeping the interface honest about what is implemented: role-based login, e-mailing results and PDF generation are not part of this web snapshot.",
      "Coordinating one database schema across a team of four.",
    ],
    results: [
      "Working web app: QCM creation and publication, dashboard, session results, class view.",
      "Documented PostgreSQL schema for the whole platform (docs/DATABASE.md in the repository).",
    ],
    futureImprovements: [
      "Real authentication with backend-checked roles.",
      "Class and student management with CSV/Excel import; PDF generation; e-mailing of results.",
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
      "A resume-classification platform: TF-IDF and classical machine learning sort resumes into 9 job categories, behind a FastAPI backend and a React frontend.",
    category: ["Artificial Intelligence", "Machine Learning", "Full Stack Development"],
    tech: ["Python", "FastAPI", "React", "scikit-learn", "TF-IDF", "SQLite", "pdfplumber"],
    role: "Solo project.",
    links: [{ label: "GitHub", url: "https://github.com/Xerow42/Documind" }],
    problem: "Sorting resumes by job family by hand does not scale. DocuMind automates the first pass and keeps a searchable history of analyses.",
    solution:
      "The FastAPI backend extracts text from an uploaded PDF or TXT resume, classifies it with a TF-IDF + classical ML pipeline, extracts keywords and stores each analysis in SQLite. A React frontend covers upload, results and history.",
    features: [
      "Upload validation (type, size, empty file) and safe error messages.",
      "9 categories: Data Science, Data Engineering, Software Engineering, Web Development, Cybersecurity, Database Administration, DevOps/Cloud, Business Analysis, Human Resources.",
      "Three models compared on one split (Logistic Regression, Linear SVM, Multinomial Naive Bayes); the best is chosen by macro-F1.",
      "Confidence score with a documented calculation, and keyword extraction from the TF-IDF weights.",
    ],
    architecture:
      "React → FastAPI → independent service modules (text extraction, preprocessing, classification, keywords) → SQLite. Training runs offline; the API only loads the saved model at startup.",
    technicalImplementation: [
      "TF-IDF (5,000 features, unigrams and bigrams) with classical models: fast, explainable, no GPU needed.",
      "Macro-F1 rather than accuracy, because the source dataset is class-imbalanced.",
      "Plain sqlite3 for four small tables; automated tests cover the ML pipeline, database and services.",
    ],
    challenges: [
      "The public Kaggle resume dataset must be downloaded with a Kaggle account, so the model has not been trained on it yet; the training and evaluation scripts were checked on a small labeled test fixture only.",
      "The FastAPI routes and the React app have not been run end to end yet.",
    ],
    results: [
      "Complete pipeline, backend services and frontend pages implemented; tests pass on the ML pipeline and service layer.",
      "No accuracy or F1 figures are published, because training on the real dataset is still to be done.",
    ],
    futureImprovements: [
      "Train on the full dataset and publish the real macro-F1.",
      "Run the full stack end to end; add k-fold cross-validation.",
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
