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
      import('./features/home-component/home.component')
      .then(c => c.HomeComponent)
  },
  {
    path: 'quiz',
    loadComponent: () =>
      import('./features/quiz-component/quiz.component')
      .then(c => c.QuizComponent)
  },
  {
    path: 'result',
    loadComponent: () =>
      import('./features/result-component/result.component')
      .then(c => c.ResultComponent)
  },
  {
    path: '**',
      redirectTo: 'home'
  }
];