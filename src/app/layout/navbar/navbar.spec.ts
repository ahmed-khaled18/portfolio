import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Navbar } from './navbar';
import { NAVBAR_CONFIG } from './navbar.config';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with offcanvas closed', () => {
    expect(component['isOffcanvasOpen']()).toBeFalsy();
  });

  it('should have navbar configuration', () => {
    expect(component['config']).toEqual(NAVBAR_CONFIG);
  });

  it('should toggle offcanvas state', () => {
    const initialState = component['isOffcanvasOpen']();
    component['toggleOffcanvas']();
    expect(component['isOffcanvasOpen']()).toBe(!initialState);

    component['toggleOffcanvas']();
    expect(component['isOffcanvasOpen']()).toBe(initialState);
  });

  it('should close offcanvas', () => {
    component['isOffcanvasOpen'].set(true);
    component['closeOffcanvas']();
    expect(component['isOffcanvasOpen']()).toBeFalsy();
  });

  it('should render brand name', () => {
    const brand = compiled.querySelector('.navbar-brand');
    expect(brand).toBeTruthy();
    expect(brand?.textContent?.trim()).toBe('Ahmed Khaled');
    expect(brand?.classList.contains('brand-name')).toBeTruthy();
  });

  it('should apply elegant styling to brand', () => {
    const brand = compiled.querySelector('.brand-name');
    expect(brand).toBeTruthy();
    expect(brand?.textContent?.trim()).toBe('Ahmed Khaled');
  });

  it('should render navigation items', () => {
    const navLinks = compiled.querySelectorAll('.navbar-nav .nav-link');
    expect(navLinks.length).toBe(NAVBAR_CONFIG.navigationItems.length * 2); // Desktop + Mobile

    // Check first navigation item
    const firstNavItem = NAVBAR_CONFIG.navigationItems[0];
    const firstNavLink = compiled.querySelector(
      `.nav-link[href="${firstNavItem.route}"]`
    );
    expect(firstNavLink?.textContent?.trim()).toBe(firstNavItem.label);
  });

  it('should render CTA button', () => {
    const ctaButtons = compiled.querySelectorAll(
      'a[href="assets/files/ahmed-khaled.pdf"]'
    );
    expect(ctaButtons.length).toBe(2); // Desktop + Mobile

    ctaButtons.forEach(button => {
      expect(button.textContent?.trim()).toContain('Download CV');
      expect(button.getAttribute('target')).toBe('_blank');
    });
  });

  it('should show offcanvas when toggled', () => {
    component['toggleOffcanvas']();
    fixture.detectChanges();

    const offcanvas = compiled.querySelector('.offcanvas');
    expect(offcanvas?.classList.contains('show')).toBeTruthy();
  });

  it('should show backdrop when offcanvas is open', () => {
    component['toggleOffcanvas']();
    fixture.detectChanges();

    const backdrop = compiled.querySelector('.offcanvas-backdrop');
    expect(backdrop).toBeTruthy();
  });

  it('should close offcanvas when backdrop is clicked', () => {
    component['toggleOffcanvas']();
    fixture.detectChanges();

    const backdrop = compiled.querySelector(
      '.offcanvas-backdrop'
    ) as HTMLElement;
    backdrop?.click();
    fixture.detectChanges();

    expect(component['isOffcanvasOpen']()).toBeFalsy();
  });

  it('should close offcanvas on mobile nav link click', () => {
    component['toggleOffcanvas']();
    fixture.detectChanges();

    const mobileNavLink = compiled.querySelector(
      '.offcanvas .nav-link'
    ) as HTMLElement;
    mobileNavLink?.click();

    expect(component['isOffcanvasOpen']()).toBeFalsy();
  });
});
