import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home')
      .then(c => c.Home)
  },
  {
    path: 'quiz',
    loadComponent: () =>
      import('./features/quiz/quiz')
      .then(c => c.Quiz)
  },
  {
    path: 'result',
    loadComponent: () =>
      import('./features/result/result')
      .then(c => c.Result)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];