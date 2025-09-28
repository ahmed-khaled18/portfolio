import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLink, provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

import { Footer } from './footer';
import { FOOTER_CONFIG } from './footer.config';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with current year', () => {
    const currentYear = new Date().getFullYear();
    expect(component.currentYear).toBe(currentYear);
  });

  it('should have footer configuration', () => {
    expect(component.config).toBeDefined();
    expect(component.config).toEqual(FOOTER_CONFIG);
  });

  describe('Template Rendering', () => {
    it('should render personal info section', () => {
      const nameElement = fixture.debugElement.query(
        By.css('h5.font-orbitron')
      );
      const descriptionElement = fixture.debugElement.query(
        By.css('p.text-light.opacity-75')
      );

      expect(nameElement.nativeElement.textContent.trim()).toBe(
        component.config.personalInfo.name
      );
      expect(descriptionElement.nativeElement.textContent.trim()).toBe(
        component.config.personalInfo.description
      );
    });

    it('should render all social links', () => {
      const socialLinks = fixture.debugElement.queryAll(
        By.css('.social-links a')
      );

      expect(socialLinks.length).toBe(component.config.socialLinks.length);

      socialLinks.forEach((link, index) => {
        const expectedLink = component.config.socialLinks[index];
        expect(link.nativeElement.href).toBe(expectedLink.href);
        expect(link.nativeElement.title).toBe(expectedLink.title);
        expect(link.nativeElement.target).toBe(expectedLink.target);
        expect(link.nativeElement.rel).toBe(expectedLink.rel);

        const icon = link.query(By.css('i'));
        expect(icon.nativeElement.className).toContain(expectedLink.icon);
      });
    });

    it('should render quick links section', () => {
      const quickLinksTitle = fixture.debugElement.query(
        By.css('.col-lg-2 h6')
      );
      const navigationListItems = fixture.debugElement.queryAll(
        By.css('.col-lg-2 ul.list-unstyled li')
      );

      expect(quickLinksTitle.nativeElement.textContent.trim()).toBe(
        'Quick Links'
      );
      expect(navigationListItems.length).toBe(
        component.config.navigationLinks.length
      );

      navigationListItems.forEach((listItem, index) => {
        const expectedLink = component.config.navigationLinks[index];
        const linkElement = listItem.query(By.css('a'));
        expect(linkElement).toBeTruthy();
        expect(linkElement.nativeElement.textContent.trim()).toBe(
          expectedLink.label
        );
      });
    });

    it('should have working router links', () => {
      const navigationLinks = fixture.debugElement.queryAll(
        By.css('.col-lg-2 ul.list-unstyled a')
      );

      navigationLinks.forEach((link, index) => {
        const expectedRoute = component.config.navigationLinks[index].route;
        // Check if RouterLink directive is applied and working
        expect(link.injector.get(RouterLink, null)).toBeTruthy();
      });
    });

    it('should render services section', () => {
      const servicesTitle = fixture.debugElement.query(
        By.css('.col-lg-3:nth-child(3) h6')
      );
      const services = fixture.debugElement.queryAll(
        By.css('.services-list li')
      );

      expect(servicesTitle.nativeElement.textContent.trim()).toBe('Services');
      expect(services.length).toBe(component.config.services.length);

      services.forEach((service, index) => {
        const expectedService = component.config.services[index];
        const icon = service.query(By.css('i'));
        const text = service.nativeElement.textContent.trim();

        expect(icon.nativeElement.className).toContain(expectedService.icon);
        expect(text).toContain(expectedService.title);
      });
    });

    it('should render contact info section', () => {
      const contactTitle = fixture.debugElement.query(
        By.css('.col-lg-3:nth-child(4) h6')
      );
      const contactItems = fixture.debugElement.queryAll(
        By.css('.col-lg-3:nth-child(4) .mb-2')
      );

      expect(contactTitle.nativeElement.textContent.trim()).toBe(
        'Contact Info'
      );
      expect(contactItems.length).toBe(component.config.contactInfo.length);

      contactItems.forEach((item, index) => {
        const expectedContact = component.config.contactInfo[index];
        const icon = item.query(By.css('i'));
        const text = item.nativeElement.textContent.trim();

        expect(icon.nativeElement.className).toContain(expectedContact.icon);
        expect(text).toContain(expectedContact.value);

        if (expectedContact.type === 'link') {
          const link = item.query(By.css('a'));
          expect(link).toBeTruthy();
          expect(link.nativeElement.href).toBe(expectedContact.href);
        }
      });
    });

    it('should render copyright with current year', () => {
      const copyrightElement = fixture.debugElement.query(
        By.css('.footer-bottom p')
      );
      const expectedCopyright = `© ${component.currentYear} ${component.config.copyright.text}`;

      expect(copyrightElement.nativeElement.textContent.trim()).toBe(
        expectedCopyright
      );
    });

    it('should have proper footer structure and classes', () => {
      const footerElement = fixture.debugElement.query(By.css('footer'));
      const containerElement = fixture.debugElement.query(By.css('.container'));
      const mainRow = fixture.debugElement.query(By.css('.row.g-4'));
      const footerBottom = fixture.debugElement.query(By.css('.footer-bottom'));

      expect(footerElement).toBeTruthy();
      expect(footerElement.nativeElement.classList).toContain('bg-dark');
      expect(footerElement.nativeElement.classList).toContain('text-light');
      expect(footerElement.nativeElement.classList).toContain('py-5');
      expect(footerElement.nativeElement.classList).toContain('mt-auto');

      expect(containerElement).toBeTruthy();
      expect(mainRow).toBeTruthy();
      expect(footerBottom).toBeTruthy();
    });

    it('should have responsive column classes', () => {
      const columns = fixture.debugElement.queryAll(By.css('.row.g-4 > div'));

      expect(columns.length).toBe(4);
      expect(columns[0].nativeElement.classList).toContain('col-lg-4');
      expect(columns[1].nativeElement.classList).toContain('col-lg-2');
      expect(columns[2].nativeElement.classList).toContain('col-lg-3');
      expect(columns[3].nativeElement.classList).toContain('col-lg-3');
    });
  });

  describe('Configuration Data', () => {
    it('should have valid social links configuration', () => {
      component.config.socialLinks.forEach(link => {
        expect(link.href).toBeTruthy();
        expect(link.title).toBeTruthy();
        expect(link.icon).toBeTruthy();
        expect(link.icon).toMatch(/^bi-/);
      });
    });

    it('should have valid navigation links configuration', () => {
      component.config.navigationLinks.forEach(link => {
        expect(link.label).toBeTruthy();
        expect(link.route).toBeTruthy();
        expect(link.route).toMatch(/^\//);
      });
    });

    it('should have valid services configuration', () => {
      component.config.services.forEach(service => {
        expect(service.title).toBeTruthy();
        expect(service.icon).toBeTruthy();
        expect(service.icon).toMatch(/^bi-/);
      });
    });

    it('should have valid contact info configuration', () => {
      component.config.contactInfo.forEach(contact => {
        expect(contact.label).toBeTruthy();
        expect(contact.value).toBeTruthy();
        expect(contact.icon).toBeTruthy();
        expect(contact.icon).toMatch(/^bi-/);

        if (contact.type === 'link') {
          expect(contact.href).toBeTruthy();
        }
      });
    });
  });
});
