export interface NavLink {
  id: string;
  label: string;
}

export type SkillCategory =
  | 'Databases Management & Visualization'
  | 'Data Collection'
  | 'Mapping'
  | 'Website Design'
  | 'Graphic Design'
  | 'Programming'
  | 'IT Skills';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: React.ReactNode; // Optional: if we want specific icons per skill
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveLink?: string;
  repoLink?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  linkedin: string;
  github: string;
}