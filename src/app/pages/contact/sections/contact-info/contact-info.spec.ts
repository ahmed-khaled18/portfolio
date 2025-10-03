import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ContactInfoComponent } from './contact-info';
import type { ContactInfo, SocialLink } from '../../contact.model';

describe('ContactInfoComponent', () => {
  let component: ContactInfoComponent;
  let fixture: ComponentFixture<ContactInfoComponent>;

  const mockContactInfo: ContactInfo[] = [
    {
      icon: 'bi-geo-alt-fill',
      label: 'Location',
      value: 'Test City',
      type: 'text',
    },
  ];

  const mockSocialLinks: SocialLink[] = [
    {
      href: 'https://example.com',
      title: 'Example',
      icon: 'bi-link',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInfoComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactInfoComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('contactInfo', mockContactInfo);
    fixture.componentRef.setInput('socialLinks', mockSocialLinks);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contact information', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Location');
    expect(compiled.textContent).toContain('Test City');
  });
});
