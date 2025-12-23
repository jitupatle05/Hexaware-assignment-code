import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
      { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
      { path: 'works', loadComponent: () => import('./components/work-page/work-page.component').then(m => m.WorkPageComponent) },
      { path: 'culture', loadComponent: () => import('./components/culture/culture.component').then(m => m.CultureComponent) },
      { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
      { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) }
    ]
    }
];                            