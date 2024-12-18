import { Routes } from '@angular/router';
import {ShellComponent} from '../views/base/shell/shell.component';
import { HomepageComponent } from '../views/homepage/homepage.component';

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
      }
    ],
  },
];
