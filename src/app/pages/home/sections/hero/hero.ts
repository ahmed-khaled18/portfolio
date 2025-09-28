import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HERO_CONFIG } from './hero.config';
import { HeroConfig } from './hero.model';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  config: HeroConfig = HERO_CONFIG;
}
