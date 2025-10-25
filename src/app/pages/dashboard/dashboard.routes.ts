import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'saas', pathMatch: 'full' },
    { path: 'saas', data: { breadcrumb: 'Resúmen' }, loadComponent: () => import('./saas/dashboardsaas').then((c) => c.DashboardSaas) }
] as Routes;
