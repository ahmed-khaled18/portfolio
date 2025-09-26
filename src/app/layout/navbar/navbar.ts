import {
  Component,
  ChangeDetectionStrategy,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVBAR_CONFIG } from './navbar.config';
import { NavbarConfig } from './navbar.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup.escape)': 'closeOffcanvas()',
  },
})
export class Navbar {
  protected readonly config: NavbarConfig = NAVBAR_CONFIG;
  protected readonly isOffcanvasOpen: WritableSignal<boolean> =
    signal<boolean>(false);

  protected toggleOffcanvas(): void {
    this.isOffcanvasOpen.update((isOpen: boolean) => !isOpen);
  }

  protected closeOffcanvas(): void {
    this.isOffcanvasOpen.set(false);
  }
}
