import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContactHeroComponent } from './sections/contact-hero/contact-hero';
import { ContactFormComponent } from './sections/contact-form/contact-form';
import { ContactInfoComponent } from './sections/contact-info/contact-info';
import { CONTACT_CONFIG } from './contact.config';
import type { ContactConfig } from './contact.model';

@Component({
  selector: 'app-contact',
  imports: [ContactHeroComponent, ContactFormComponent, ContactInfoComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  config: ContactConfig = CONTACT_CONFIG;
}
