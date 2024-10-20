import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../shared/services/_api/api.service';
import { Discussion, DiscussionAddDto } from '../../models/Discussion.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discussion-map',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './discussion-map.component.html',
  styleUrl: './discussion-map.component.sass',
  providers: [
    {
      provide: 'DiscussionService',
      useFactory: (http: HttpClient) =>
        new ApiService<Discussion, DiscussionAddDto>(http, {
          resourceEndpoint: 'api/maps',
        }),
      deps: [HttpClient],
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscussionMapComponent implements OnInit {
  map$!: Observable<any>
  constructor(
    private route: ActivatedRoute,
    @Inject('DiscussionService') private discussionService: ApiService<any, any>) {
  }
  get topicId(): string {
    return this.route.snapshot.params['id'];
  }
  ngOnInit() {
    this.map$ = this.discussionService.getList({topicId: this.route.snapshot.params['id']});
  }
}
