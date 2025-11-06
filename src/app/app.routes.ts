import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // тут будемо додавати сторінки як дочірні маршрути (home, about, тощо)
    ]
  },
  { path: '**', redirectTo: '' }
];
