import { Routes } from '@angular/router'
import { AppLayout } from './app/layout/components/app.layout';
import { authGuard } from '@/guards/auth.guard';

export const routes: Routes = [

    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', redirectTo: '/auth', pathMatch: 'full' },
            {
                path: 'dashboards',
                canActivate: [authGuard],
                data: { breadcrumb: 'Home' },
                loadChildren: () => import('./app/pages/dashboard/dashboard.routes')
            },
            {
                path: 'profile',
                data: { breadcrumb: 'User Management' },
                loadChildren: () => import('./app/pages/usermanagement/usermanagement.routes')
            },
            {
                path: 'config',
                data: { breadcrumb: 'Configuración' },
                loadChildren: () => import('./app/pages/administration/config.routes')
            },
            {
                path: 'apps',
                data: { breadcrumb: 'Apps' },
                loadChildren: () => import('./app/pages/registers/apps.routes')
            },
        ]
    },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    {
        path: 'notfound',
        loadComponent: () => import('./app/pages/notfound/notfound').then((c) => c.Notfound)
    },
    { path: '**', redirectTo: '/notfound' }
];
