import { Routes } from '@angular/router';
import type { Type } from '@angular/core';

type ComponentModule = Record<string, Type<unknown>>;

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m: ComponentModule) => m['Home']),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills/skills').then((m: ComponentModule) => m['Skills']),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects').then(
        (m: ComponentModule) => m['Projects']
      ),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./pages/experience/experience').then(
        (m: ComponentModule) => m['Experience']
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(
        (m: ComponentModule) => m['Contact']
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
