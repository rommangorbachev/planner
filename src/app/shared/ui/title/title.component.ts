import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.sass'
})
export class TitleComponent {
  @Input({required: true}) title: string = 'Пустой заголовок'
}
