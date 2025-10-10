export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  name: string;
  icon: string; // Devicon class name (e.g., 'devicon-angular-plain')
  color?: string; // Optional custom color
  level?: SkillLevel;
  stars?: number; // 1-5 rating (can be decimal like 4.5)
  category: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface SkillsConfig {
  pageTitle: string;
  pageDescription: string;
  categories: SkillCategory[];
}
