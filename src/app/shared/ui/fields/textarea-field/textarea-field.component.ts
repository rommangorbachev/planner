import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { AutoResizeTextareaDirective } from '../../../directives/auto-resize-textarea.directive';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrl: './textarea-field.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AutoResizeTextareaDirective
  ],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextareaFieldComponent,
      multi: true
    }
  ]
})
export class TextareaFieldComponent {
  @Input() placeholder: string = '';

  value: string = '';
  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  writeValue(value: string) {
    this.value = value;
  }
}
