import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'challenge',
    loadComponent: () => import('./pages/challenge/challenge.component').then(m => m.ChallengeComponent)
  }
];
