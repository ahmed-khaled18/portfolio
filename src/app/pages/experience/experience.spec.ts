import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Experience } from './experience';
import { EXPERIENCE_CONFIG } from './experience.config';

describe('Experience', () => {
  let component: Experience;
  let fixture: ComponentFixture<Experience>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Experience);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have config property', () => {
      expect(component['config']).toBeDefined();
      expect(component['config']).toEqual(EXPERIENCE_CONFIG);
    });
  });

  describe('Page Header', () => {
    it('should render page title', () => {
      const title = compiled.querySelector('h1');
      expect(title).toBeTruthy();
      expect(title?.textContent?.trim()).toBe(EXPERIENCE_CONFIG.pageTitle);
    });

    it('should render page description', () => {
      const description = compiled.querySelector('.lead');
      expect(description).toBeTruthy();
      expect(description?.textContent?.trim()).toBe(
        EXPERIENCE_CONFIG.pageDescription
      );
    });
  });

  describe('Timeline Structure', () => {
    it('should render timeline container', () => {
      const timeline = compiled.querySelector('.timeline');
      expect(timeline).toBeTruthy();
    });

    it('should render correct number of experience items', () => {
      const experienceItems = compiled.querySelectorAll('.card');
      expect(experienceItems.length).toBe(EXPERIENCE_CONFIG.experiences.length);
    });

    it('should render timeline markers for each experience', () => {
      const markers = compiled.querySelectorAll('.timeline-marker');
      expect(markers.length).toBe(EXPERIENCE_CONFIG.experiences.length);
    });
  });

  describe('Experience Details', () => {
    const firstExperience = EXPERIENCE_CONFIG.experiences[0];

    it('should render company logo', () => {
      const logo = compiled.querySelector('.company-logo img');
      expect(logo).toBeTruthy();
      expect(logo?.getAttribute('alt')).toContain(firstExperience.company);
    });

    it('should render position title', () => {
      const position = compiled.querySelector('h2');
      expect(position?.textContent?.trim()).toBe(firstExperience.position);
    });

    it('should render company name', () => {
      const company = compiled.querySelector('.text-primary');
      expect(company?.textContent).toContain(firstExperience.company);
    });

    it('should render company link when provided', () => {
      const link = compiled.querySelector(
        'a[target="_blank"]'
      ) as HTMLAnchorElement;
      expect(link).toBeTruthy();
      if (firstExperience.link) {
        expect(link?.href).toContain(firstExperience.link);
      }
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('should render location and location type', () => {
      const locationInfo = compiled.querySelector('.text-muted.small');
      expect(locationInfo?.textContent).toContain(firstExperience.location);
      expect(locationInfo?.textContent).toContain(firstExperience.locationType);
    });

    it('should render date badge', () => {
      const badge = compiled.querySelector('.badge.bg-primary');
      expect(badge).toBeTruthy();
      expect(badge?.textContent).toContain('Present');
    });

    it('should render job description', () => {
      const description = compiled.querySelector('p.text-muted.mb-4');
      expect(description?.textContent?.trim()).toBe(
        firstExperience.description
      );
    });
  });

  describe('Achievements Section', () => {
    const firstExperience = EXPERIENCE_CONFIG.experiences[0];

    it('should render achievements section when achievements exist', () => {
      const achievementsHeader = Array.from(
        compiled.querySelectorAll('h4')
      ).find(h4 => h4.textContent?.includes('Key Achievements'));
      expect(achievementsHeader).toBeTruthy();
    });

    it('should render all achievements', () => {
      const achievementsList = compiled.querySelectorAll('ul.list-unstyled li');
      expect(achievementsList.length).toBe(firstExperience.achievements.length);
    });

    it('should render achievement checkmark icons', () => {
      const checkIcons = compiled.querySelectorAll('li .bi-check-circle-fill');
      expect(checkIcons.length).toBe(firstExperience.achievements.length);
    });

    it('should render each achievement text', () => {
      const achievementsList = Array.from(
        compiled.querySelectorAll('ul.list-unstyled li')
      );
      firstExperience.achievements.forEach((achievement, index) => {
        expect(achievementsList[index].textContent?.trim()).toContain(
          achievement
        );
      });
    });
  });

  describe('Technologies Section', () => {
    const firstExperience = EXPERIENCE_CONFIG.experiences[0];

    it('should render technologies section when technologies exist', () => {
      const techHeader = Array.from(compiled.querySelectorAll('h4')).find(h4 =>
        h4.textContent?.includes('Technologies Used')
      );
      expect(techHeader).toBeTruthy();
    });

    it('should render all technology badges', () => {
      const techBadges = compiled.querySelectorAll('.tech-badge');
      expect(techBadges.length).toBe(firstExperience.technologies.length);
    });

    it('should render each technology name', () => {
      const techBadges = Array.from(compiled.querySelectorAll('.tech-badge'));
      firstExperience.technologies.forEach((tech, index) => {
        expect(techBadges[index].textContent?.trim()).toBe(tech);
      });
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive classes on timeline', () => {
      const timeline = compiled.querySelector('.timeline');
      expect(timeline?.classList.contains('ps-5')).toBe(true);
    });

    it('should have responsive gap classes', () => {
      const flexContainer = compiled.querySelector('.gap-3');
      expect(flexContainer).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      const h1 = compiled.querySelector('h1');
      const h2 = compiled.querySelector('h2');
      const h3 = compiled.querySelector('h3');
      const h4 = compiled.querySelector('h4');

      expect(h1).toBeTruthy();
      expect(h2).toBeTruthy();
      expect(h3).toBeTruthy();
      expect(h4).toBeTruthy();
    });

    it('should have alt text for company logo', () => {
      const logo = compiled.querySelector('.company-logo img');
      const alt = logo?.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt).toContain(EXPERIENCE_CONFIG.experiences[0].company);
    });

    it('should have proper link attributes for external links', () => {
      const externalLink = compiled.querySelector('a[target="_blank"]');
      expect(externalLink?.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });

  describe('Bootstrap Classes', () => {
    it('should use Bootstrap card component', () => {
      const card = compiled.querySelector('.card');
      expect(card?.classList.contains('border-0')).toBe(true);
      expect(card?.classList.contains('shadow-sm')).toBe(true);
      expect(card?.classList.contains('rounded-3')).toBe(true);
    });

    it('should use Bootstrap badge component', () => {
      const badge = compiled.querySelector('.badge');
      expect(badge?.classList.contains('bg-primary')).toBe(true);
    });

    it('should use Bootstrap utility classes', () => {
      const container = compiled.querySelector('.container');
      expect(container).toBeTruthy();

      const flexBox = compiled.querySelector('.d-flex');
      expect(flexBox).toBeTruthy();
    });
  });
});
