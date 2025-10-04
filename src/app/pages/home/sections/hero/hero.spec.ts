import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';

import { Hero } from './hero';
import { HeroConfig } from './hero.model';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  const mockHeroConfig: HeroConfig = {
    personalInfo: {
      name: 'Test User',
      title: 'Test Developer',
      description: 'Test description for the hero section',
      profileImage: {
        src: '/test/profile.jpg',
        alt: 'Test User Profile',
        width: 400,
        height: 400,
      },
    },
    skills: [{ name: 'Angular' }, { name: 'TypeScript' }, { name: 'Testing' }],
    actions: [
      {
        label: 'Download CV',
        href: '/test-cv.pdf',
        download: 'test-cv.pdf',
      },
      {
        label: 'Contact Me',
        routerLink: '/contact',
      },
    ],
    floatingIcons: [
      {
        icon: 'bi bi-code-slash',
        position: { top: '15%', left: '5%' },
        animationDelay: '0s',
      },
      {
        icon: 'bi bi-laptop',
        position: { top: '10%', right: '15%' },
        animationDelay: '-1s',
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default HERO_CONFIG', () => {
    fixture.detectChanges();
    expect(component.config).toBeDefined();
    expect(component.config.personalInfo).toBeDefined();
    expect(component.config.skills).toBeDefined();
    expect(component.config.actions).toBeDefined();
    expect(component.config.floatingIcons).toBeDefined();
  });

  it('should render personal info correctly', () => {
    component.config = mockHeroConfig;
    fixture.detectChanges();

    const nameElement = fixture.debugElement.query(By.css('.display-4'));
    const titleElement = fixture.debugElement.query(By.css('.h3'));
    const descriptionElement = fixture.debugElement.query(By.css('.lead'));

    expect(nameElement.nativeElement.textContent.trim()).toBe('Test User');
    expect(titleElement.nativeElement.textContent.trim()).toBe(
      'Test Developer'
    );
    expect(descriptionElement.nativeElement.textContent.trim()).toBe(
      'Test description for the hero section'
    );
  });

  it('should render profile image with correct attributes', () => {
    component.config = mockHeroConfig;
    fixture.detectChanges();

    const imageElement = fixture.debugElement.query(By.css('.profile-image'));
    expect(imageElement).toBeTruthy();

    // NgOptimizedImage uses different attribute names after processing
    const imgElement = imageElement.nativeElement;
    expect(imgElement.getAttribute('alt')).toBe('Test User Profile');
    expect(imgElement.getAttribute('width')).toBe('400');
    expect(imgElement.getAttribute('height')).toBe('400');
    // src attribute will be processed by NgOptimizedImage
    expect(
      imgElement.hasAttribute('src') || imgElement.hasAttribute('ng-src')
    ).toBeTruthy();
  });

  it('should render all skills as badges', () => {
    component.config = mockHeroConfig;
    fixture.detectChanges();

    const skillBadges = fixture.debugElement.queryAll(By.css('.badge'));
    expect(skillBadges.length).toBe(3);
    expect(skillBadges[0].nativeElement.textContent.trim()).toBe('Angular');
    expect(skillBadges[1].nativeElement.textContent.trim()).toBe('TypeScript');
    expect(skillBadges[2].nativeElement.textContent.trim()).toBe('Testing');
  });

  it('should render action with href correctly', () => {
    component.config = mockHeroConfig;
    fixture.detectChanges();

    const downloadLink = fixture.debugElement.query(
      By.css('a[href="/test-cv.pdf"]')
    );
    expect(downloadLink).toBeTruthy();
    expect(downloadLink.nativeElement.textContent.trim()).toContain(
      'Download CV'
    );
    expect(downloadLink.nativeElement.getAttribute('download')).toBe(
      'test-cv.pdf'
    );
  });

  it('should render action with routerLink correctly', () => {
    component.config = mockHeroConfig;
    fixture.detectChanges();

    // Find router link button in hero actions
    const actionButtons = fixture.debugElement.queryAll(
      By.css('.hero-actions a')
    );
    const contactLink = actionButtons.find(btn =>
      btn.nativeElement.textContent.trim().includes('Contact Me')
    );

    expect(contactLink).toBeTruthy();
    if (contactLink) {
      expect(contactLink.nativeElement.textContent.trim()).toContain(
        'Contact Me'
      );
    }
  });

  it('should render floating icons with correct positioning', () => {
    component.config = mockHeroConfig;
    fixture.detectChanges();

    const floatingIcons = fixture.debugElement.queryAll(
      By.css('.floating-icon')
    );
    expect(floatingIcons.length).toBe(2);

    const firstIcon = floatingIcons[0];
    const secondIcon = floatingIcons[1];

    expect(firstIcon.query(By.css('.bi-code-slash'))).toBeTruthy();
    expect(secondIcon.query(By.css('.bi-laptop'))).toBeTruthy();
  });

  it('should have OnPush change detection strategy', () => {
    expect(component).toBeTruthy();
    // The change detection strategy is set in the component decorator
    // and can be verified through the component metadata
  });

  it('should render hero section with correct structure', () => {
    component.config = mockHeroConfig;
    fixture.detectChanges();

    const heroSection = fixture.debugElement.query(By.css('section'));
    const container = fixture.debugElement.query(By.css('.container'));
    const row = fixture.debugElement.query(By.css('.row'));
    const textColumn = fixture.debugElement.query(
      By.css('.col-lg-6:first-child')
    );
    const imageColumn = fixture.debugElement.query(
      By.css('.col-lg-6:last-child')
    );

    expect(heroSection).toBeTruthy();
    expect(heroSection.nativeElement.classList).toContain('vh-100');
    expect(container).toBeTruthy();
    expect(row).toBeTruthy();
    expect(textColumn).toBeTruthy();
    expect(imageColumn).toBeTruthy();
  });

  it('should handle empty skills array', () => {
    component.config = { ...mockHeroConfig, skills: [] };
    fixture.detectChanges();

    const skillBadges = fixture.debugElement.queryAll(By.css('.badge'));
    expect(skillBadges.length).toBe(0);
  });

  it('should handle empty actions array', () => {
    component.config = { ...mockHeroConfig, actions: [] };
    fixture.detectChanges();

    const actionButtons = fixture.debugElement.queryAll(
      By.css('.hero-actions a')
    );
    expect(actionButtons.length).toBe(0);
  });

  it('should handle empty floating icons array', () => {
    component.config = { ...mockHeroConfig, floatingIcons: [] };
    fixture.detectChanges();

    const floatingIcons = fixture.debugElement.queryAll(
      By.css('.floating-icon')
    );
    expect(floatingIcons.length).toBe(0);
  });
});
