import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import type { ContactFormField, FormStatus } from '../../contact.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly http: HttpClient = inject(HttpClient);

  formFields: InputSignal<ContactFormField[]> =
    input.required<ContactFormField[]>();
  submitButtonText: InputSignal<string> = input.required<string>();
  successMessage: InputSignal<string> = input.required<string>();
  errorMessage: InputSignal<string> = input.required<string>();

  contactForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(100)],
    ],
    email: ['', [Validators.required, Validators.email]],
    subject: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
      ],
    ],
  });

  formStatus: WritableSignal<FormStatus> = signal({
    submitting: false,
    success: false,
    error: false,
    message: '',
  });

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.formStatus.set({
      submitting: true,
      success: false,
      error: false,
      message: '',
    });

    try {
      const formData: { access_key: string; [key: string]: unknown } = {
        access_key: environment.web3forms.accessKey,
        ...this.contactForm.value,
      };

      const response: { success: boolean } | undefined = await this.http
        .post<{ success: boolean }>(environment.web3forms.endpoint, formData)
        .toPromise();

      if (response?.success) {
        this.formStatus.set({
          submitting: false,
          success: true,
          error: false,
          message: this.successMessage(),
        });
        this.contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      this.formStatus.set({
        submitting: false,
        success: false,
        error: true,
        message: this.errorMessage(),
      });
    }
  }
}
