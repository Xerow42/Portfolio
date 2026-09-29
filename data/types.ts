export type ProjectCategory =
  | "Big Data"
  | "Data Engineering"
  | "Artificial Intelligence"
  | "Machine Learning"
  | "Data Science"
  | "Computer Vision"
  | "Software Engineering"
  | "Full Stack Development"
  | "Information Systems";

export type ProjectLink = {
  label: string;
  url: string;
};

/**
 * A project can be in one of two states:
 * - "documented": every narrative field below is filled with verified facts.
 * - "summary": only the facts explicitly provided are shown (title, description, tech,
 *   category). No problem/solution/results copy is invented for these — the detail page
 *   shows a plain "write-up in progress" notice instead. See README > Content status.
 */
export type ProjectStatus = "documented" | "summary";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  shortDescription: string;
  category: ProjectCategory[];
  tech: string[];
  featured?: boolean;
  role?: string;
  timeframe?: string;
  links?: ProjectLink[];
  /** Populated only for status "documented" projects. */
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  technicalImplementation?: string[];
  challenges?: string[];
  results?: string[];
  futureImprovements?: string[];
};
