import { ChangeDetectionStrategy, Component, inject, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../shared/services/_api/api.service';
import { ActionButtonComponent, InputFieldComponent, RatingPickerComponent } from '../../../../shared/ui';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CriteriaDto, Criterion } from '../../models/Criteria.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-criteria-create',
  standalone: true,
  imports: [
    ActionButtonComponent,
    InputFieldComponent,
    ReactiveFormsModule,
    RatingPickerComponent
  ],
  templateUrl: './criteria-create.component.html',
  styleUrl: './criteria-create.component.sass',
  providers: [
    {
      provide: 'CriteriaService',
      useFactory: (http: HttpClient) =>
        new ApiService<Criterion, CriteriaDto>(http, {
          resourceEndpoint: 'api/criteria'
        }),
      deps: [HttpClient]
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CriteriaCreateComponent implements OnInit {
  fb = inject(FormBuilder);
  form!: FormGroup;

  @Input({ required: true }) topicId!: string;

  constructor(
    @Inject('CriteriaService') private criteriaService: ApiService<Criterion, CriteriaDto>
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      topicId: new FormControl<string>(this.topicId),
      title: new FormControl<string>('', Validators.required),
      priority: new FormControl<number | null>(null, Validators.required)
    });

  }

  onSubmit() {
    const model: CriteriaDto = {
      topicId: this.form.value.topicId,
      title: this.form.value.title,
      priority: this.form.value.priority
    };
    this.criteriaService.add(model).pipe(
      take(1)
    ).subscribe();
  }

}
