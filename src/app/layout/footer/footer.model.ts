export interface SocialLink {
  href: string;
  title: string;
  icon: string;
  target?: string;
  rel?: string;
}

export interface NavigationLink {
  label: string;
  route: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
  type?: 'text' | 'link';
}

export interface FooterConfig {
  personalInfo: {
    name: string;
    description: string;
  };
  socialLinks: SocialLink[];
  navigationLinks: NavigationLink[];
  services: ServiceItem[];
  contactInfo: ContactInfo[];
  copyright: {
    text: string;
  };
}
