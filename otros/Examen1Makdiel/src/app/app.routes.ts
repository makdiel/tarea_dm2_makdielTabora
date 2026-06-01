import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/user/history/history.page').then( m => m.HistoryPage)
  },
  {
    path: 'last-transactions',
    loadComponent: () => import('./pages/transactions/last-transactions/last-transactions.page').then( m => m.LastTransactionsPage)
  },
];
