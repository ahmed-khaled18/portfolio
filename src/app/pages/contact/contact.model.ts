// Contact page interfaces and types

export interface ContactFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  required: boolean;
  rows?: number;
  icon: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
  type: 'text' | 'link';
}

export interface SocialLink {
  href: string;
  title: string;
  icon: string;
  target?: string;
  rel?: string;
}

export interface ContactHero {
  title: string;
  subtitle: string;
  description: string;
}

export interface ContactConfig {
  hero: ContactHero;
  formFields: ContactFormField[];
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
  submitButtonText: string;
  successMessage: string;
  errorMessage: string;
}

export interface FormStatus {
  submitting: boolean;
  success: boolean;
  error: boolean;
  message: string;
}
