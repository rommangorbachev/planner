import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../../../shared/ui/input-field/input-field.component';
import { tap } from 'rxjs';

@Component({
  selector: 'app-discussion-form',
  templateUrl: './discussion-form.component.html',
  styleUrls: ['./discussion-form.component.sass'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputFieldComponent
  ]
})
export class DiscussionFormComponent implements OnInit {
    fb = inject(FormBuilder);
    form!: FormGroup;

    ngOnInit() {
      this.form = this.fb.group({
        id: [],
        title: [null, Validators.required],
        description: [null]
      })
      this.form.valueChanges.pipe(tap(d => console.log(d))).subscribe()
    }
}
