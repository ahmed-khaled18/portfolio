import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { ContactFormComponent } from './contact-form';
import type { ContactFormField } from '../../contact.model';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  const mockFormFields: ContactFormField[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Your name',
      required: true,
      icon: 'bi-person',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'your@email.com',
      required: true,
      icon: 'bi-envelope',
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      placeholder: 'Subject',
      required: true,
      icon: 'bi-chat-dots',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Your message',
      required: true,
      icon: 'bi-pencil-square',
      rows: 4,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent, ReactiveFormsModule],
      providers: [provideZonelessChangeDetection(), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('formFields', mockFormFields);
    fixture.componentRef.setInput('submitButtonText', 'Send');
    fixture.componentRef.setInput('successMessage', 'Success!');
    fixture.componentRef.setInput('errorMessage', 'Error!');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with all fields', () => {
    expect(component.contactForm).toBeTruthy();
    expect(component.contactForm.get('name')).toBeTruthy();
    expect(component.contactForm.get('email')).toBeTruthy();
    expect(component.contactForm.get('subject')).toBeTruthy();
    expect(component.contactForm.get('message')).toBeTruthy();
  });

  it('should mark form as invalid when required fields are empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should validate email format', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBeTruthy();

    emailControl?.setValue('valid@email.com');
    expect(emailControl?.hasError('email')).toBeFalsy();
  });

  it('should validate minimum length', () => {
    const nameControl = component.contactForm.get('name');
    nameControl?.setValue('a');
    expect(nameControl?.hasError('minlength')).toBeTruthy();

    nameControl?.setValue('Valid Name');
    expect(nameControl?.hasError('minlength')).toBeFalsy();
  });

  it('should mark form as valid when all required fields are filled correctly', () => {
    component.contactForm.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      subject: 'Test Subject',
      message: 'This is a test message with enough characters',
    });
    expect(component.contactForm.valid).toBeTruthy();
  });

  it('should mark all fields as touched when submitting invalid form', () => {
    component.onSubmit();
    expect(component.contactForm.get('name')?.touched).toBeTruthy();
    expect(component.contactForm.get('email')?.touched).toBeTruthy();
  });
});
