import { Routes } from '@angular/router';
import { ShellComponent } from '../views/base/shell/shell.component';
import { HomepageComponent } from '../views/homepage/homepage/homepage.component';
import { ProductGridListComponent } from '../views/product/product-grid-list/product-grid-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomepageComponent,
      },
      {
        path: 'plants',
        component: ProductGridListComponent,
      }
    ],
  },
];
