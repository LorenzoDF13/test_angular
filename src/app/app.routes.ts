import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BillPageComponent } from './pages/bill-page/bill-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: 'bill/:id',
    /*redirectTo: ({ queryParams }) => {
      if (queryParams['id'] !== undefined) return `/bill/${queryParams['id']}`;
      return '/';
    },*/
    component: BillPageComponent,
  },
];
