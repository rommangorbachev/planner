import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo:'/main', pathMatch:'full' },
  { path: 'main',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  { path: '**', redirectTo:'/error?reason=NavError' }
];

