import { HeroConfig } from './hero.model';

export const HERO_CONFIG: HeroConfig = {
  personalInfo: {
    name: 'Ahmed Khaled Nasr',
    title: 'Code Artist, Digital Architect | @ahmedknasr.dev',
    description:
      'Passionate full-stack software engineer with 2+ years of experience in developing scalable web applications using modern technologies like Angular, React, Node.js, NestJS, and Python FastAPI.',
    profileImage: {
      src: 'assets/images/profile.jpg',
      alt: 'ahmedknasr.dev - Ahmed Khaled Nasr - Software Engineer',
      width: 400,
      height: 400,
    },
  },
  skills: [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'NestJS' },
    { name: 'FastAPI' },
    { name: 'TypeScript' },
    { name: 'Python' },
  ],
  actions: [
    {
      label: 'Download Resume',
      href: 'assets/files/ahmed-khaled.pdf',
      download: 'Ahmed-Khaled-Resume.pdf',
    },
    {
      label: 'Get In Touch',
      routerLink: '/contact',
    },
  ],
  floatingIcons: [
    {
      icon: 'bi bi-code-slash',
      position: { top: '15%', left: '5%' },
      animationDelay: '0s',
    },
    {
      icon: 'bi bi-laptop',
      position: { top: '10%', right: '15%' },
      animationDelay: '-1s',
    },
    {
      icon: 'bi bi-database',
      position: { bottom: '30%', right: '5%' },
      animationDelay: '-2s',
    },
    {
      icon: 'bi bi-gear',
      position: { bottom: '15%', left: '15%' },
      animationDelay: '-0.5s',
    },
  ],
};
