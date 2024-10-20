import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { DiscussionService } from '../../services/discussion.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { TitleComponent } from '../../../../shared/ui/title/title.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../shared/services/_api/api.service';
import { Discussion, DiscussionAddDto } from '../../models/Discussion.model';
import { Observable } from 'rxjs';
import { ActionButtonComponent } from '../../../../shared/ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-discussion-list',
  standalone: true,
  imports: [
    AsyncPipe,
    TitleComponent,
    NgIf,
    ActionButtonComponent,
    RouterLink
  ],
  templateUrl: './discussion-list.component.html',
  styleUrl: './discussion-list.component.sass',
  providers: [
    {
      provide: 'DiscussionService',
      useFactory: (http: HttpClient) =>
        new ApiService<Discussion, DiscussionAddDto>(http, {
          resourceEndpoint: 'api/topics',
        }),
      deps: [HttpClient],
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscussionListComponent implements OnInit {
  topics$!: Observable<Discussion[]>
  constructor(@Inject('DiscussionService') private discussionService: ApiService<Discussion, DiscussionAddDto>) {
  }

  ngOnInit() {
    this.topics$ = this.discussionService.getList();
  }
}
