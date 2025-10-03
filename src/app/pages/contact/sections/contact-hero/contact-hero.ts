import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import type { ContactHero } from '../../contact.model';

@Component({
  selector: 'app-contact-hero',
  imports: [],
  templateUrl: './contact-hero.html',
  styleUrl: './contact-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactHeroComponent {
  hero: InputSignal<ContactHero> = input.required<ContactHero>();
}
