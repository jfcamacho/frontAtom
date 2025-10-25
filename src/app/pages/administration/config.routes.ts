import { Routes } from "@angular/router";

export default [
    { path: '', redirectTo: 'activity', pathMatch: 'full' },
    { path: 'tarea', data: { breadcrumb: 'Administrar tipos de tarea' }, loadComponent: () => import('./tarea/tarea.component').then((c) => c.TareaComponent) }
] as Routes