export interface Experience {
  company: string;
  companyLogo?: string;
  position: string;
  location: string;
  locationType: 'Remote' | 'Hybrid' | 'On-site';
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

export interface ExperienceConfig {
  pageTitle: string;
  pageDescription: string;
  experiences: Experience[];
}
