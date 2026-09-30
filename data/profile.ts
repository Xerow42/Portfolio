export type SkillGroup = {
  label: string;
  items: string[];
  /** Set only for the honesty-sensitive "also exploring" group. */
  note?: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  location: string;
  bullets: string[];
};

export const profile = {
  name: "Khalil Lamrabet",
  role: "Engineering Student — Big Data & Artificial Intelligence",
  location: "Lille, France",
  email: "klamrabeta19@gmail.com",
  phone: "+33 7 43 72 14 47",
  linkedin: { label: "linkedin.com/in/khalillam12", url: "https://www.linkedin.com/in/khalillam12" },
  github: { label: "github.com/Xerow42", url: "https://github.com/Xerow42" },
  /** Square, ≥400px source recommended. See README > Profile photo. */
  photo: "/photo.png",
  tagline:
    "4th-year engineering student at Junia ISEN, specializing in Big Data and Artificial Intelligence, building software systems that combine data, machine learning and modern web technologies.",
  /** Longer narrative for the About page. Kept general on personal details
   *  (no specific sport, club or achievement was provided) rather than
   *  invented for color. */
  aboutParagraphs: [
    "I'm a fourth-year engineering student at Junia ISEN, specializing in Big Data and Artificial Intelligence. What drew me to this path is the same thing that keeps me in it: I like taking a system apart to understand how each piece — the data, the model, the interface — actually works, and then putting it back together as something that runs reliably end to end.",
    "That curiosity spans the stack. On the data side, I've built pipelines that validate and load real data into PostgreSQL, and models that classify text and detect objects using TensorFlow, scikit-learn and pretrained computer-vision models. On the software side, I design relational schemas, build REST APIs with FastAPI and Flask, and ship the React and Next.js interfaces on top of them. I'm most interested in where these two worlds meet: systems where the engineering has to be solid enough for the intelligence to be useful.",
    "Outside of coursework, I hold myself to a disciplined athletic routine, and it shapes how I work as much as how I train: showing up consistently, tracking progress honestly, and improving in small, deliberate steps rather than expecting a breakthrough overnight. I bring that same mindset to engineering — building things I can actually verify work, one tested component at a time — and I'm looking for an internship where I can apply it to real, production-scale problems in Big Data, AI or software engineering.",
  ],
  targetRoles: [
    "Big Data",
    "Data Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Software Engineering",
    "Full Stack Development",
    "Information Systems",
  ],
} as const;

export const education: TimelineEntry[] = [
  {
    period: "2023 — present",
    title: "Engineering degree, 4th year (Master's 1 level) — Big Data & Artificial Intelligence",
    org: "Junia ISEN — Graduate School of Engineering",
    location: "Lille, France",
    bullets: [
      "Coursework and projects in machine learning, data engineering, algorithms, databases and software engineering.",
    ],
  },
  {
    period: "2022 — 2023",
    title: "Scientific Baccalaureate, Physics-Chemistry (PC) — Highest honours (Mention Très Bien)",
    org: "Lycée Louis-le-Grand",
    location: "Rabat,Maroc",
    bullets: [],
  },
];

export const experience: TimelineEntry[] = [
  {
    period: "2025 · 1 month",
    title: "IT Intern — Information Systems Department",
    org: "Fédération Marocaine du Préscolaire",
    location: "Rabat, Morocco",
    bullets: [
      "Built a CRM in Python / Flask to manage and track complaints, with data structured and stored in SQLite.",
      "Integrated AI/NLP modules: automatic translation and sentiment analysis applied to incoming complaints.",
      "Automated personalized e-mail replies and improved how requests were processed and prioritized.",
    ],
  },
  {
    period: "June 2024 · 1 month",
    title: "IT Intern — Information Systems Department",
    org: "Supratours",
    location: "Rabat, Morocco",
    bullets: [
      "Built a user-management web application (CRUD) with HTML/CSS, PHP and a MySQL database (XAMPP, phpMyAdmin).",
      "Contributed to the maintenance of the company's bus-route and ticketing management system.",
    ],
  },
];

/**
 * Six fixed categories, in display order. Every item already existed either
 * in this file or in a project's real tech stack (data/projects.ts) before
 * this reorganization — see README > Content for the mapping.
 */
export const skills: SkillGroup[] = [
  {
    label: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C", "PHP"],
  },
  {
    label: "Frontend Development",
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    label: "Backend Development",
    items: ["FastAPI", "Flask", "Node.js", "REST API"],
  },
  {
    label: "Databases & Data Engineering",
    items: ["PostgreSQL", "MySQL", "SQLite", "Pandas", "Conceptual / logical data modeling (MCD/MLD)"],
  },
  {
    label: "Artificial Intelligence & Machine Learning",
    items: [
      "Machine Learning",
      "Supervised / Unsupervised Learning",
      "Regression",
      "Classification",
      "Natural Language Processing (NLP)",
      "Sentiment Analysis",
      "Computer Vision / Image Processing (OpenCV)",
      "OCR (EasyOCR)",
      "TensorFlow / Keras",
      "PyTorch (Ultralytics YOLO)",
      "scikit-learn",
      "TF-IDF",
      "Linear Algebra",
      "Multivariate Calculus",
      "Principal Component Analysis (PCA)",
    ],
  },
  {
    label: "Tools & Development Environment",
    items: ["Git", "Docker", "Linux", "VS Code", "pgAdmin", "phpMyAdmin", "Automated testing (pytest, unittest)"],
  },
  {
    label: "Also exploring",
    note: "Covered in coursework or personal study, not yet used in a shipped project.",
    items: ["Spark", "Hadoop", "Kafka", "Airflow", "ETL", "Java", "AWS", "Azure", "Kubernetes"],
  },
];

export const certifications = [
  {
    org: "DeepLearning.AI",
    items: [
      "Supervised Machine Learning: Regression and Classification",
      "Advanced Learning Algorithms",
      "Unsupervised Learning, Recommenders, Reinforcement Learning",
    ],
  },
  {
    org: "Imperial College London",
    items: ["Mathematics for Machine Learning Specialization (Linear Algebra, Multivariate Calculus, PCA)"],
  },
  { org: "Meta", items: ["Programming in Python"] },
  { org: "Johns Hopkins University", items: ["HTML, CSS, and JavaScript for Web Developers"] },
  {
    org: "Ministry of Higher Education, Scientific Research and Innovation",
    items: ["Diploma in the Art of English Oratory (Dec. 2022)"],
  },
];

export const languages = [
  { name: "French", level: "C2 (TCF)" },
  { name: "English", level: "TOEIC 965 / 990" },
  { name: "Arabic", level: "Native" },
];
