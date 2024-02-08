import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/main.component').then(c => c.MainComponent)
  }, {
    path: 'discussion',
    loadComponent: () => import('./main/main.component').then(c => c.MainComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
