import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Arquitectura Empresarial del Hospital de Tingo María | TOGAF 9.1',
    loadComponent: () => import('./pages/home/home').then((module) => module.Home),
  },
  {
    path: 'fase/:id',
    loadComponent: () => import('./pages/phase/phase').then((module) => module.PhasePage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
