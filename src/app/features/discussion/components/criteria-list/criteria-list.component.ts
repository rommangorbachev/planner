import { Component, Inject, OnInit } from '@angular/core';
import { ActionButtonComponent } from '../../../../shared/ui';
import { AsyncPipe, NgIf } from '@angular/common';
import { TitleComponent } from '../../../../shared/ui/title/title.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../shared/services/_api/api.service';
import { CriteriaDto, Criterion } from '../../models/Criteria.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CriteriaCreateComponent } from '../criteria-create/criteria-create.component';

@Component({
  selector: 'app-criteria-list',
  standalone: true,
  imports: [
    ActionButtonComponent,
    AsyncPipe,
    NgIf,
    TitleComponent,
    CriteriaCreateComponent
  ],
  providers: [
    {
      provide: 'CriteriaService',
      useFactory: (http: HttpClient) =>
        new ApiService<Criterion, CriteriaDto>(http, {
          resourceEndpoint: 'api/criteria',
        }),
      deps: [HttpClient],
    }
  ],
  templateUrl: './criteria-list.component.html',
  styleUrl: './criteria-list.component.sass'
})
export class CriteriaListComponent implements OnInit{
  criteria$!: Observable<Criterion[]>;
  constructor(
    private route: ActivatedRoute,
    @Inject('CriteriaService') private criteriaService: ApiService<Criterion, CriteriaDto>,
  ) {
  }
   get topicId(): string {
    return this.route.snapshot.params['id'];
  }


  ngOnInit() {
    this.criteria$ = this.criteriaService.getList({topicId: this.route.snapshot.params['id']})
  }

  editCriterion(criterion: Criterion) {
    // this.form.patchValue(criterion);
  }

  removeCriterion(id: string) {
    this.criteriaService.remove(id).pipe(
      take(1)
    ).subscribe();
  }
}
