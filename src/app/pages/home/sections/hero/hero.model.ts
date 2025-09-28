// Hero section interfaces and types

export interface HeroPersonalInfo {
  name: string;
  title: string;
  description: string;
  profileImage: HeroImage;
}

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroSkill {
  name: string;
  cssClass?: string;
}

export interface HeroAction {
  label: string;
  icon?: string;
  href?: string;
  routerLink?: string;
  cssClass?: string;
  download?: string;
}

export interface HeroFloatingIcon {
  icon: string;
  cssClass?: string;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  animationDelay: string;
}

export interface HeroConfig {
  personalInfo: HeroPersonalInfo;
  skills: HeroSkill[];
  actions: HeroAction[];
  floatingIcons: HeroFloatingIcon[];
}
