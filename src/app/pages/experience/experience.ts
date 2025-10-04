import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage, DatePipe } from '@angular/common';
import type { ExperienceConfig } from './experience.model';
import { EXPERIENCE_CONFIG } from './experience.config';

@Component({
  selector: 'app-experience',
  imports: [NgOptimizedImage, DatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly config: ExperienceConfig = EXPERIENCE_CONFIG;
}
