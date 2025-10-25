import { Routes } from '@angular/router';
import { UserCreate } from './usercreate';

export default [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'create', data: { breadcrumb: 'Create' }, component: UserCreate }
] as Routes;
