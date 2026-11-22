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
  email: "khalil.lamrabet@student.junia.com",
  phone: "+33 7 43 72 14 47",
  linkedin: { label: "linkedin.com/in/khalillam12", url: "https://www.linkedin.com/in/khalillam12" },
  github: { label: "github.com/Xerow42", url: "https://github.com/Xerow42" },
  /** Square, ≥400px source recommended. See README > Profile photo. */
  photo: "/photo.png",
  tagline:
  "Fourth-year engineering student at JUNIA ISEN, specializing in Big Data and Artificial Intelligence. I build data pipelines, machine-learning applications, and full-stack tools — turning ideas and raw data into working software.",
   
  aboutParagraphs: [
  "I'm a fourth-year engineering student at JUNIA ISEN in Lille, specializing in Big Data and Artificial Intelligence. After completing my first three years at JUNIA Maroc, I continued my engineering studies in France to deepen my knowledge of data-driven systems and software development. I've always been curious about how technology works, but what motivates me most is turning that understanding into something practical.",

  "I learn best by building. Through projects like DataFlow, DocuMind, and VisionAI, I've explored different aspects of data engineering, machine learning, computer vision, and full-stack development. I enjoy working across the entire process — understanding a problem, designing a solution, developing it, and verifying that it works. DataFlow, for example, taught me how much reliable data processing, testing, and deployment matter beyond simply writing code.",

  "Outside of engineering, I'm passionate about sports and maintain a disciplined training routine. It has taught me consistency, patience, and the importance of improving through regular effort. I bring the same mindset to my technical projects. I'm currently looking for an internship where I can contribute, learn from experienced engineers, and challenge myself on real-world problems in Data Engineering, AI, or Software Engineering. I'm based in Lille and open to opportunities across France and Belgium.",
],
  targetRoles: [
  "Data Engineering",
  "Artificial Intelligence",
  "Machine Learning Engineering",
  "Data Science",
  "Software Engineering",
],
} as const;

export const education: TimelineEntry[] = [
  {
  period: "2023 — present",
  title: "Engineering Degree (Bac+5), 4th Year — Big Data & Artificial Intelligence",
  org: "JUNIA ISEN / JUNIA Maroc",
  location: "Rabat, Morocco (2023–2026) · Lille, France (2026–present)",
  bullets: [
    "Engineering curriculum covering machine learning, data engineering, algorithms, databases, and software development.",
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
  items: [
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "SQL",
    "Pandas",
    "ETL Pipelines",
    "Data Validation & Cleaning",
    "Data Modeling (MCD/MLD)",
  ],
},
  {
  label: "Artificial Intelligence & Machine Learning",
  items: [
    "Machine Learning",
    "Classification & Regression",
    "Natural Language Processing (NLP)",
    "Sentiment Analysis",
    "Computer Vision",
    "OpenCV",
    "EasyOCR",
    "TensorFlow / Keras",
    "Ultralytics YOLO",
    "scikit-learn",
    "TF-IDF",
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
