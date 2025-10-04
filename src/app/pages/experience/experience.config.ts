import type { ExperienceConfig } from './experience.model';

export const EXPERIENCE_CONFIG: ExperienceConfig = {
  pageTitle: 'Professional Experience',
  pageDescription: 'My journey in building innovative software solutions',
  experiences: [
    {
      company: 'Progressio Solutions',
      companyLogo: 'assets/images/progressio_solutions_logo.jpeg',
      position: 'Full Stack Developer',
      location: 'Cairo, Egypt',
      locationType: 'Hybrid',
      startDate: '2024-04',
      endDate: 'Present',
      description:
        'Developing and maintaining full-stack web applications using modern technologies. Leading frontend architecture decisions and implementing scalable solutions.',
      achievements: [
        'Architected and developed multiple enterprise-level web applications',
        'Improved application performance by 40% through code optimization and best practices',
        'Mentored junior developers and conducted code reviews',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
      ],
      technologies: ['Angular', 'TypeScript', 'Python', 'FastAPI', 'Git'],
      link: 'https://progressiosolutions.com',
    },
  ],
};
