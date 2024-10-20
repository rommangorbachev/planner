import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/main.component').then(c => c.MainComponent)
  }, {
    path: 'create-discussion',
    loadComponent: () => import('./discussion/components/discussion-form/discussion-form.component').then(c => c.DiscussionFormComponent),
    title: 'Создание темы'
  }, {
    path: 'discussions',
    loadComponent: () => import('./discussion/components/discussion-list/discussion-list.component').then(c => c.DiscussionListComponent),
    title: 'Список тем'
  }, {
    path: 'criteria/:id',
    loadComponent: () => import('./discussion/components/criteria-list/criteria-list.component').then(c => c.CriteriaListComponent),
    title: 'Критерии'
  },
  // {
  //   path: 'map/:id',
  //   loadComponent: () => import('./discussion/components/discussion-map/discussion-map.component').then(c => c.DiscussionMapComponent),
  //   title: 'Карта'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
