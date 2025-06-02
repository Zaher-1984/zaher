
export interface Language {
  lang: string;
  proficiency: string;
}

export interface PersonalInfo {
  name: string;
  title: string; 
  location: string;
  email: string;
  skype: string; // Kept for data structure consistency, though not used in UI
  profileImageUrl: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  nationality: string;
  languages: Language[];
  linkedinUrl?: string; // Added LinkedIn URL
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  department?: string;
  year: string | number;
}

export interface Skill {
  name: string;
  details?: string; 
}

export interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export interface TrainingItem {
  name: string;
  issuer?: string;
  details?: string;
}