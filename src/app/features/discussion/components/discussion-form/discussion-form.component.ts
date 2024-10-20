import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  inject,
  OnInit,
  Optional,
  Self
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActionButtonComponent, InputFieldComponent, TextareaFieldComponent } from '../../../../shared/ui';
import { HttpClient } from '@angular/common/http';
import { Discussion, DiscussionAddDto } from '../../models/Discussion.model';
import { ApiService } from '../../../../shared/services/_api/api.service';
import { DiscussionService } from '../../services/discussion.service';
import { DiscussionModule } from '../../discussion.module';
import { TitleComponent } from '../../../../shared/ui/title/title.component';
import { take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discussion-form',
  templateUrl: './discussion-form.component.html',
  styleUrls: ['./discussion-form.component.sass'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    InputFieldComponent,
    TextareaFieldComponent,
    ActionButtonComponent,
    TitleComponent
  ],
  providers: [
    {
      provide: 'DiscussionService',
      useFactory: (http: HttpClient) =>
        new ApiService<Discussion, DiscussionAddDto>(http, {
          resourceEndpoint: 'api/topics',
        }
          ),
      deps: [HttpClient],
    }
  ]
})

export class DiscussionFormComponent implements OnInit {

  fb = inject(FormBuilder);
  form!: FormGroup;

  constructor(
    @Inject('DiscussionService') private discussionService: ApiService<Discussion, DiscussionAddDto>,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: new FormControl<string>(''),
      title: new FormControl<string>('', [Validators.required]),
      description: new FormControl<string>('', Validators.required)
    });
  }

  onSubmit() {
    const model: Discussion = {
      id: this.form.value.id,
      title: this.form.value.title,
      description: this.form.value.description
    };
    this.discussionService.add(model).pipe(
      take(1),
      tap(id => {
        void this.router.navigate(['/main/criteria/', id])
      })
    ).subscribe();
  }
}
