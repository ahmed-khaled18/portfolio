import type { ContactConfig } from './contact.model';

export const CONTACT_CONFIG: ContactConfig = {
  hero: {
    title: "Let's Work Together",
    subtitle: 'Get In Touch',
    description:
      "Have a project in mind or just want to chat? I'm always open to discussing new opportunities and collaborations.",
  },
  formFields: [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'John Doe',
      required: true,
      icon: 'bi-person',
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'john@example.com',
      required: true,
      icon: 'bi-envelope',
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      placeholder: 'Project Inquiry',
      required: true,
      icon: 'bi-chat-dots',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Tell me about your project...',
      required: true,
      rows: 4,
      icon: 'bi-pencil-square',
    },
  ],
  contactInfo: [
    {
      icon: 'bi-geo-alt-fill',
      label: 'Location',
      value: 'Cairo, Egypt',
      type: 'text',
    },
    {
      icon: 'bi-envelope-fill',
      label: 'Email',
      value: 'a.k.nasr18@gmail.com',
      href: 'mailto:a.k.nasr18@gmail.com',
      type: 'link',
    },
    {
      icon: 'bi-phone-fill',
      label: 'Phone',
      value: '+20 110 110 0483',
      href: 'tel:+201101100483',
      type: 'link',
    },
  ],
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
      href: 'https://wa.me/201101100483',
      title: 'WhatsApp',
      icon: 'bi-whatsapp',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
  submitButtonText: 'Send Message',
  successMessage:
    'Thank you! Your message has been sent successfully. I will get back to you soon.',
  errorMessage:
    'Oops! Something went wrong. Please try again or contact me directly via email.',
};
