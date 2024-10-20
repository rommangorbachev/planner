import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionService } from './services/discussion.service';
import { CriteriaListComponent } from './components/criteria-list/criteria-list.component';
import { CriteriaCreateComponent } from './components/criteria-create/criteria-create.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CriteriaListComponent,
    CriteriaCreateComponent
  ],
  providers: [
    DiscussionService
  ]
})
export class DiscussionModule {
}
