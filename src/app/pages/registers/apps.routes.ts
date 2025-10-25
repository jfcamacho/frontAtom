import { Routes } from '@angular/router';

export default [
    {
        path: 'manageEvents',
        loadComponent: () => import('./event/event.component').then((c) => c.EventComponent),
        data: { breadcrumb: 'Administrar Tareas' }
    }
] as Routes;
