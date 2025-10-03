import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ContactHeroComponent } from './contact-hero';
import type { ContactHero } from '../../contact.model';

describe('ContactHeroComponent', () => {
  let component: ContactHeroComponent;
  let fixture: ComponentFixture<ContactHeroComponent>;

  const mockHero: ContactHero = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    description: 'Test Description',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactHeroComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactHeroComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('hero', mockHero);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display hero content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(mockHero.title);
    expect(compiled.textContent).toContain(mockHero.subtitle);
    expect(compiled.textContent).toContain(mockHero.description);
  });
});
