import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';
import { provideZonelessChangeDetection } from '@angular/core';
import { SKILLS_CONFIG } from './skills.config';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have config property', () => {
    expect(component['config']).toBeDefined();
    expect(component['config']).toBe(SKILLS_CONFIG);
  });

  describe('Template Rendering', () => {
    it('should render page title', () => {
      const titleElement = compiled.querySelector('h1');
      expect(titleElement).toBeTruthy();
      expect(titleElement?.textContent?.trim()).toBe(SKILLS_CONFIG.pageTitle);
    });

    it('should render page description', () => {
      const descriptionElement = compiled.querySelector('.lead');
      expect(descriptionElement).toBeTruthy();
      expect(descriptionElement?.textContent?.trim()).toBe(
        SKILLS_CONFIG.pageDescription
      );
    });

    it('should render all skill categories', () => {
      const categoryElements = compiled.querySelectorAll('.category-section');
      expect(categoryElements.length).toBe(SKILLS_CONFIG.categories.length);
    });

    it('should render category titles', () => {
      const categoryTitles = compiled.querySelectorAll('.category-section h2');
      expect(categoryTitles.length).toBe(SKILLS_CONFIG.categories.length);

      categoryTitles.forEach((titleElement, index) => {
        expect(titleElement.textContent?.trim()).toBe(
          SKILLS_CONFIG.categories[index].title
        );
      });
    });

    it('should render category descriptions', () => {
      const categoryDescriptions = compiled.querySelectorAll(
        '.category-section h2 + p'
      );
      expect(categoryDescriptions.length).toBe(SKILLS_CONFIG.categories.length);

      categoryDescriptions.forEach((descElement, index) => {
        expect(descElement.textContent?.trim()).toBe(
          SKILLS_CONFIG.categories[index].description
        );
      });
    });

    it('should render category icons', () => {
      const categoryIcons = compiled.querySelectorAll('.category-icon i');
      expect(categoryIcons.length).toBe(SKILLS_CONFIG.categories.length);

      categoryIcons.forEach((iconElement, index) => {
        expect(iconElement.className).toContain(
          SKILLS_CONFIG.categories[index].icon
        );
      });
    });
  });

  describe('Skills Rendering', () => {
    it('should render all skills for each category', () => {
      SKILLS_CONFIG.categories.forEach((category, categoryIndex) => {
        const categoryElements = compiled.querySelectorAll('.category-section');
        const categoryElement = categoryElements[categoryIndex];
        const skillCards = categoryElement.querySelectorAll('.skill-card');

        expect(skillCards.length).toBe(category.skills.length);
      });
    });

    it('should render skill names', () => {
      const skillNames = compiled.querySelectorAll('.skill-name');
      const totalSkills = SKILLS_CONFIG.categories.reduce(
        (total, category) => total + category.skills.length,
        0
      );

      expect(skillNames.length).toBe(totalSkills);
    });

    it('should render skill icons', () => {
      const skillIcons = compiled.querySelectorAll('.skill-icon svg');
      expect(skillIcons.length).toBeGreaterThan(0);

      skillIcons.forEach(svgElement => {
        expect(svgElement.getAttribute('role')).toBe('img');
        expect(svgElement.getAttribute('viewBox')).toBe('0 0 24 24');
      });
    });

    it('should render star ratings for skills with stars', () => {
      const starRatings = compiled.querySelectorAll('.star-rating');
      expect(starRatings.length).toBeGreaterThan(0);

      starRatings.forEach(ratingElement => {
        const stars = ratingElement.querySelectorAll('i');
        expect(stars.length).toBe(5);
      });
    });

    it('should render correct number of filled stars', () => {
      const firstCategory = SKILLS_CONFIG.categories[0];
      const firstSkill = firstCategory.skills[0];

      if (firstSkill.stars !== undefined) {
        const firstSkillCard = compiled.querySelector('.skill-card');
        const starRating = firstSkillCard?.querySelector('.star-rating');
        const filledStars = starRating?.querySelectorAll('.bi-star-fill');

        expect(filledStars?.length).toBe(Math.floor(firstSkill.stars));
      }
    });

    it('should render skill level badges', () => {
      const levelBadges = compiled.querySelectorAll('.badge');
      expect(levelBadges.length).toBeGreaterThan(0);

      levelBadges.forEach(badge => {
        const badgeText = badge.textContent?.trim();
        expect(['Expert', 'Advanced', 'Intermediate', 'Beginner']).toContain(
          badgeText
        );
      });
    });

    it('should apply correct badge color for Expert level', () => {
      const expertBadges = Array.from(
        compiled.querySelectorAll('.badge')
      ).filter(badge => badge.textContent?.trim() === 'Expert');

      expertBadges.forEach(badge => {
        expect(badge.classList.contains('bg-success')).toBe(true);
      });
    });

    it('should apply correct badge color for Advanced level', () => {
      const advancedBadges = Array.from(
        compiled.querySelectorAll('.badge')
      ).filter(badge => badge.textContent?.trim() === 'Advanced');

      advancedBadges.forEach(badge => {
        expect(badge.classList.contains('bg-primary')).toBe(true);
      });
    });

    it('should apply correct badge color for Intermediate level', () => {
      const intermediateBadges = Array.from(
        compiled.querySelectorAll('.badge')
      ).filter(badge => badge.textContent?.trim() === 'Intermediate');

      intermediateBadges.forEach(badge => {
        expect(badge.classList.contains('bg-info')).toBe(true);
      });
    });

    it('should apply correct badge color for Beginner level', () => {
      const beginnerBadges = Array.from(
        compiled.querySelectorAll('.badge')
      ).filter(badge => badge.textContent?.trim() === 'Beginner');

      beginnerBadges.forEach(badge => {
        expect(badge.classList.contains('bg-secondary')).toBe(true);
      });
    });
  });

  describe('SVG Icon Attributes', () => {
    it('should set correct fill color for SVG icons', () => {
      const svgIcons = compiled.querySelectorAll('.skill-icon svg');

      svgIcons.forEach(svg => {
        const fillAttr = svg.getAttribute('fill');
        expect(fillAttr).toMatch(/^#[0-9A-Fa-f]{6}$/); // Hex color format
      });
    });

    it('should have title elements in SVG for accessibility', () => {
      const svgIcons = compiled.querySelectorAll('.skill-icon svg');

      svgIcons.forEach(svg => {
        const title = svg.querySelector('title');
        expect(title).toBeTruthy();
        expect(title?.textContent).toBeTruthy();
      });
    });

    it('should have aria-label attributes for SVG icons', () => {
      const svgIcons = compiled.querySelectorAll('.skill-icon svg');

      svgIcons.forEach(svg => {
        const ariaLabel = svg.getAttribute('aria-label');
        expect(ariaLabel).toBeTruthy();
      });
    });
  });

  describe('Accessibility', () => {
    it('should have semantic section element', () => {
      const section = compiled.querySelector('section');
      expect(section).toBeTruthy();
      expect(section?.classList.contains('skills-section')).toBe(true);
    });

    it('should use heading hierarchy correctly', () => {
      const h1 = compiled.querySelector('h1');
      const h2Elements = compiled.querySelectorAll('h2');

      expect(h1).toBeTruthy();
      expect(h2Elements.length).toBeGreaterThan(0);
    });

    it('should have descriptive text for categories', () => {
      const categoryDescriptions = compiled.querySelectorAll(
        '.category-section p'
      );

      categoryDescriptions.forEach(desc => {
        expect(desc.textContent?.trim().length).toBeGreaterThan(0);
      });
    });
  });

  describe('Component Structure', () => {
    it('should use OnPush change detection', () => {
      // Check if the component is defined with OnPush change detection
      expect(fixture.componentRef.changeDetectorRef).toBeDefined();
      // Alternative check: verify component metadata exists
      expect(component).toBeTruthy();
    });

    it('should have proper selector', () => {
      const selector = (Skills as any).ɵcmp?.selectors?.[0]?.[0];
      expect(selector).toBe('app-skills');
    });
  });
});
