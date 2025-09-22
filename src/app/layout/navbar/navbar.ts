import {
  Component,
  signal,
  ChangeDetectionStrategy,
  Signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem, CtaButton } from './navbar.model';
import { NAVBAR_CONFIG } from './navbar.config';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  // Signal for mobile menu state
  private mobileMenuOpen: WritableSignal<boolean> = signal<boolean>(false);

  // Computed getter for mobile menu state
  isMobileMenuOpen: Signal<boolean> = this.mobileMenuOpen.asReadonly();

  // Navigation configuration from external config
  readonly navigationItems: NavItem[] = NAVBAR_CONFIG.navigationItems;

  // CTA button configuration from external config
  readonly ctaButton: CtaButton = NAVBAR_CONFIG.ctaButton;

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((isOpen: boolean) => !isOpen);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
