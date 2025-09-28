import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
