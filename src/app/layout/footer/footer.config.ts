import type { FooterConfig } from './footer.model';

export const FOOTER_CONFIG: FooterConfig = {
  personalInfo: {
    name: 'Ahmed Khaled Nasr (@ahmedknasr.dev)',
    description:
      'Full Stack Developer passionate about creating innovative web solutions and delivering exceptional user experiences.',
  },
  socialLinks: [
    {
      href: 'https://github.com/ahmedknasr-dev',
      title: 'GitHub',
      icon: 'bi-github',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'https://www.linkedin.com/in/ahmedknasr/',
      title: 'LinkedIn',
      icon: 'bi-linkedin',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'https://x.com/ahmedknasr',
      title: 'X',
      icon: 'bi-twitter-x',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'https://www.facebook.com/ahmedknasr.dev',
      title: 'Facebook',
      icon: 'bi-facebook',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'https://www.instagram.com/ahmedknasr.dev/',
      title: 'Instagram',
      icon: 'bi-instagram',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'mailto:a.k.nasr18@gmail.com',
      title: 'Email',
      icon: 'bi-envelope',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: 'https://wa.me/201101100483',
      title: 'WhatsApp',
      icon: 'bi-whatsapp',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
  navigationLinks: [
    { label: 'Home', route: '/' },
    { label: 'Experience', route: '/experience' },
    { label: 'Projects', route: '/projects' },
    { label: 'Skills', route: '/skills' },
    { label: 'Contact', route: '/contact' },
  ],
  services: [
    {
      icon: 'bi-code-slash',
      title: 'Web Development',
    },
    {
      icon: 'bi-phone',
      title: 'Mobile Development',
    },
    {
      icon: 'bi-gear',
      title: 'Technical Consulting',
    },
  ],
  contactInfo: [
    {
      icon: 'bi-geo-alt',
      label: 'Location',
      value: 'Cairo, Egypt',
      type: 'text',
    },
    {
      icon: 'bi-envelope',
      label: 'Email',
      value: 'a.k.nasr18@gmail.com',
      href: 'mailto:a.k.nasr18@gmail.com',
      type: 'link',
    },
    {
      icon: 'bi-phone',
      label: 'Phone',
      value: '+20 110 110 0483',
      href: 'tel:+201101100483',
      type: 'link',
    },
  ],
  copyright: {
    text: 'ahmedknasr.dev | Ahmed Khaled Nasr. All rights reserved.',
  },
};
