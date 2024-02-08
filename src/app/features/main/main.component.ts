import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../layout/layout.component';
import { DiscussionFormComponent } from '../discussion/components/discussion-form/discussion-form.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LayoutComponent,
    DiscussionFormComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

}
