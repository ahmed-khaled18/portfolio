// Navigation item interface
export interface NavItem {
  label: string;
  route: string;
  fragment?: string;
  external?: boolean;
  target?: string;
}

// CTA button interface
export interface CtaButton {
  label: string;
  href: string;
  external: boolean;
  target: string;
}

// Navigation configuration interface
export interface NavbarConfig {
  navigationItems: NavItem[];
  ctaButton: CtaButton;
}
