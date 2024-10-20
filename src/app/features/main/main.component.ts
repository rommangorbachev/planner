import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { DiscussionFormComponent } from '../discussion/components/discussion-form/discussion-form.component';
import { DiscussionListComponent } from '../discussion/components/discussion-list/discussion-list.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LayoutComponent,
    DiscussionFormComponent,
    DiscussionListComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent {

}
