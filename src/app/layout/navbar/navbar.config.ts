import { NavbarConfig } from './navbar.model';

export const NAVBAR_CONFIG: NavbarConfig = {
  navigationItems: [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Skills', route: '/skills' },
    { label: 'Projects', route: '/projects' },
    { label: 'Experience', route: '/experience' },
    { label: 'Contact', route: '/contact' },
  ],
  ctaButton: {
    label: 'Download CV',
    href: 'assets/files/ahmed-khaled.pdf',
    external: true,
    target: '_blank',
  },
};
