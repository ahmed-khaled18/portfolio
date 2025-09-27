import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_CONFIG } from './footer.config';
import type { FooterConfig } from './footer.model';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly currentYear: number = new Date().getFullYear();
  readonly config: FooterConfig = FOOTER_CONFIG;
}
