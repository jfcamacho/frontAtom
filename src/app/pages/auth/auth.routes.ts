import {Routes} from '@angular/router';

export default [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'error', loadComponent: () => import('./error').then((c) => c.Error) },
    { path: 'login', loadComponent: () => import('./login').then((c) => c.Login2) },
    { path: 'register/:email', loadComponent: () => import('./register').then((c) => c.Register) },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
