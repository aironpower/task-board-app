import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'board',
        // ¡Esta es la clave del Lazy Loading en Angular moderno!
        loadComponent: () => import('./features/board/board.component').then(c => c.BoardComponent)
      },
      {
        path: '',
        redirectTo: 'board',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '' // Redirigir a la página principal si la ruta no existe
  }
];