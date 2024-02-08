import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  InputFieldComponent,
  TextareaFieldComponent,
  ActionButtonComponent} from '../../../../shared/ui';


@Component({
  selector: 'app-discussion-form',
  templateUrl: './discussion-form.component.html',
  styleUrls: ['./discussion-form.component.sass'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputFieldComponent,
    TextareaFieldComponent,
    ActionButtonComponent
  ]
})
export class DiscussionFormComponent implements OnInit {
    fb = inject(FormBuilder);
    form!: FormGroup;

    ngOnInit() {
      this.form = this.fb.group({
        id: [''],
        title: [null, Validators.required],
        description: [null]
      })
    }

  onSubmit() {

  }
}
