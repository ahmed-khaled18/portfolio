import { Component, ChangeDetectionStrategy } from '@angular/core';
import type { SkillsConfig } from './skills.model';
import { SKILLS_CONFIG } from './skills.config';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly config: SkillsConfig = SKILLS_CONFIG;
}
