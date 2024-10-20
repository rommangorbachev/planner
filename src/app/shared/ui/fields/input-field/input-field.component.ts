import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFieldComponent,
      multi: true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  constructor(private cd: ChangeDetectorRef) {
  }
  value: string = '';
  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.cd.markForCheck();
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  writeValue(value: string) {
    this.value = value;
    this.cd.markForCheck(); // Обновляем представление вручную
  }

  // Метод для обновления значения поля внутри компонента
  updateValue(event: any) {
    this.value = event.target.value;
    this.onChange(this.value); // Вызываем обработчик изменений
    this.onTouch(this.value); // Вызываем обработчик "прикосновения"
  }
}
