export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  contribution: string;
  technologies: string[];
  concepts: string[];
  /** Optional: only rendered when provided. */
  result?: string;
  futureImprovements?: string;
  /** Optional: buttons are hidden when these are not set. */
  githubUrl?: string;
  demoUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
};

export type Achievement = { title: string; detail: string; year?: string };

export type Certification = {
  name: string;
  issuer: string;
  category: string;
  note?: string;
  /** Optional: only rendered when a real credential link exists. */
  credentialUrl?: string;
};
