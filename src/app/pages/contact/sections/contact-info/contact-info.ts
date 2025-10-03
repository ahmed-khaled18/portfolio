import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import type { ContactInfo, SocialLink } from '../../contact.model';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfoComponent {
  contactInfo: InputSignal<ContactInfo[]> = input.required<ContactInfo[]>();
  socialLinks: InputSignal<SocialLink[]> = input.required<SocialLink[]>();
}
