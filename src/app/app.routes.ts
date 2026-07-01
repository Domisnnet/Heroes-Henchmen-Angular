import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home-component',
        pathMatch: 'full'
    },
    {
        path: 'home-component',
        loadComponent: () =>
            import('./features/home-component/home.component')
                .then((c) => c.HomeComponent)
    },
    {
        path: 'quiz-component',
        loadComponent: () =>
            import('./features/quiz-component/quiz.component')
                .then((c) => c.QuizComponent)
    },
    {
        path: 'result-component',
        loadComponent: () =>
            import('./features/result-component/result.component')
                .then((c) => c.ResultComponent)
    },
    {
        path: '**',
        redirectTo: 'home-component'
    }
];