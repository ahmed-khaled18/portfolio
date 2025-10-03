import type { SkillsConfig } from './skills.model';
import * as simpleIcons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

// Helper function to get icon data from simple-icons
function getIconData(
  iconSlug: string
): { title: string; slug: string; hex: string; path: string } | undefined {
  const iconKey: string = `si${iconSlug.charAt(0).toUpperCase()}${iconSlug.slice(1)}`;
  const icon: unknown = simpleIcons[iconKey as keyof typeof simpleIcons];
  if (icon && typeof icon === 'object' && 'path' in icon) {
    const simpleIcon: SimpleIcon = icon as SimpleIcon;
    return {
      title: simpleIcon.title,
      slug: simpleIcon.slug,
      hex: simpleIcon.hex,
      path: simpleIcon.path,
    };
  }
  return undefined;
}

export const SKILLS_CONFIG: SkillsConfig = {
  pageTitle: 'Technical Skills',
  pageDescription:
    'Technologies and tools I work with to build modern applications',
  categories: [
    {
      title: 'Frontend Development',
      icon: 'bi-display',
      description: 'Modern web interfaces and user experiences',
      skills: [
        {
          name: 'Angular',
          icon: 'angular',
          level: 'Expert',
          stars: 5,
          category: 'Frontend',
          iconData: getIconData('angular'),
        },
        {
          name: 'React',
          icon: 'react',
          level: 'Intermediate',
          stars: 3,
          category: 'Frontend',
          iconData: getIconData('react'),
        },
        {
          name: 'TypeScript',
          icon: 'typescript',
          level: 'Expert',
          stars: 5,
          category: 'Frontend',
          iconData: getIconData('typescript'),
        },
        {
          name: 'JavaScript',
          icon: 'javascript',
          level: 'Expert',
          stars: 4.5,
          category: 'Frontend',
          iconData: getIconData('javascript'),
        },
        {
          name: 'HTML5',
          icon: 'html5',
          level: 'Expert',
          stars: 5,
          category: 'Frontend',
          iconData: getIconData('html5'),
        },
        {
          name: 'CSS3',
          icon: 'css3',
          level: 'Expert',
          stars: 4.5,
          category: 'Frontend',
          iconData: getIconData('css'),
        },
        {
          name: 'SCSS',
          icon: 'sass',
          level: 'Advanced',
          stars: 4,
          category: 'Frontend',
          iconData: getIconData('sass'),
        },
        {
          name: 'Bootstrap',
          icon: 'bootstrap',
          level: 'Expert',
          stars: 4.5,
          category: 'Frontend',
          iconData: getIconData('bootstrap'),
        },
        {
          name: 'Tailwind CSS',
          icon: 'tailwindcss',
          level: 'Beginner',
          stars: 2,
          category: 'Frontend',
          iconData: getIconData('tailwindcss'),
        },
        {
          name: 'RxJS',
          icon: 'reactivex',
          level: 'Advanced',
          stars: 4,
          category: 'Frontend',
          iconData: getIconData('reactivex'),
        },
      ],
    },
    {
      title: 'Backend Development',
      icon: 'bi-server',
      description: 'Server-side technologies and APIs',
      skills: [
        {
          name: 'Node.js',
          icon: 'nodedotjs',
          level: 'Intermediate',
          stars: 3,
          category: 'Backend',
          iconData: getIconData('nodedotjs'),
        },
        {
          name: 'Express',
          icon: 'express',
          level: 'Intermediate',
          stars: 3,
          category: 'Backend',
          iconData: getIconData('express'),
        },
        {
          name: 'NestJS',
          icon: 'nestjs',
          level: 'Intermediate',
          stars: 3,
          category: 'Backend',
          iconData: getIconData('nestjs'),
        },
        {
          name: 'Python',
          icon: 'python',
          level: 'Intermediate',
          stars: 3,
          category: 'Backend',
          iconData: getIconData('python'),
        },
        {
          name: 'FastAPI',
          icon: 'fastapi',
          level: 'Intermediate',
          stars: 3,
          category: 'Backend',
          iconData: getIconData('fastapi'),
        },
      ],
    },
    {
      title: 'Database & Storage',
      icon: 'bi-database',
      description: 'Data management and persistence',
      skills: [
        {
          name: 'MongoDB',
          icon: 'mongodb',
          level: 'Intermediate',
          stars: 3,
          category: 'Database',
          iconData: getIconData('mongodb'),
        },
        {
          name: 'PostgreSQL',
          icon: 'postgresql',
          level: 'Intermediate',
          stars: 3,
          category: 'Database',
          iconData: getIconData('postgresql'),
        },
        {
          name: 'SQLite',
          icon: 'sqllight',
          level: 'Intermediate',
          stars: 3,
          category: 'Database',
          iconData: getIconData('sqlite'),
        },
        {
          name: 'typeORM',
          icon: 'typeorm',
          level: 'Intermediate',
          stars: 3,
          category: 'Database',
          iconData: getIconData('typeorm'),
        },
        {
          name: 'sqlalchemy',
          icon: 'sqlalchemy',
          level: 'Intermediate',
          stars: 3,
          category: 'Database',
          iconData: getIconData('sqlalchemy'),
        },
      ],
    },
    {
      title: 'Mobile Development',
      icon: 'bi-phone',
      description: 'Cross-platform mobile applications',
      skills: [
        {
          name: 'Ionic',
          icon: 'ionic',
          level: 'Advanced',
          stars: 4,
          category: 'Mobile',
          iconData: getIconData('ionic'),
        },
        {
          name: 'NativeScript',
          icon: 'nativescript',
          level: 'Intermediate',
          stars: 3.5,
          category: 'Mobile',
          iconData: getIconData('nativescript'),
        },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: 'bi-gear',
      description: 'Development tools and deployment',
      skills: [
        {
          name: 'Git',
          icon: 'git',
          level: 'Expert',
          stars: 4.5,
          category: 'DevOps',
          iconData: getIconData('git'),
        },
        {
          name: 'GitHub',
          icon: 'github',
          level: 'Expert',
          stars: 4.5,
          category: 'DevOps',
          iconData: getIconData('github'),
        },
        {
          name: 'Docker',
          icon: 'docker',
          level: 'Intermediate',
          stars: 3,
          category: 'DevOps',
          iconData: getIconData('docker'),
        },

        {
          name: 'Postman',
          icon: 'postman',
          level: 'Expert',
          stars: 4.5,
          category: 'DevOps',
          iconData: getIconData('postman'),
        },
        {
          name: 'npm',
          icon: 'npm',
          level: 'Expert',
          stars: 4.5,
          category: 'DevOps',
          iconData: getIconData('npm'),
        },

        {
          name: 'graphql',
          icon: 'graphql',
          level: 'Intermediate',
          stars: 3,
          category: 'DevOps',
          iconData: getIconData('graphql'),
        },
      ],
    },
    {
      title: 'Testing & Quality',
      icon: 'bi-check-circle',
      description: 'Testing frameworks and quality assurance',
      skills: [
        {
          name: 'Jest',
          icon: 'jest',
          level: 'Intermediate',
          stars: 3,
          category: 'Testing',
          iconData: getIconData('jest'),
        },
        {
          name: 'Jasmine',
          icon: 'jasmine',
          level: 'Intermediate',
          stars: 3,
          category: 'Testing',
          iconData: getIconData('jasmine'),
        },

        {
          name: 'Cypress',
          icon: 'cypress',
          level: 'Intermediate',
          stars: 3,
          category: 'Testing',
          iconData: getIconData('cypress'),
        },
        {
          name: 'eslint',
          icon: 'eslint',
          level: 'Expert',
          stars: 4.5,
          category: 'Quality',
          iconData: getIconData('eslint'),
        },
        {
          name: 'Prettier',
          icon: 'prettier',
          level: 'Expert',
          stars: 4.5,
          category: 'Quality',
          iconData: getIconData('prettier'),
        },
        {
          name: 'commitlint',
          icon: 'commitlint',
          level: 'Expert',
          stars: 4.5,
          category: 'Quality',
          iconData: getIconData('commitlint'),
        },
      ],
    },
  ],
};
