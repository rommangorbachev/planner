import { booleanAttribute, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
export default interface IButtonProps {
  iconPosition: string;
  color: string;
  outline: boolean;
}
@Component({
  selector: 'button[actionButton], a[actionButton]',
  standalone: true,
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class ActionButtonComponent implements OnInit , IButtonProps {
  @Input()
  iconAlign: 'left' | 'right' = 'left';

  @Input()
  color!: 'primary' | 'secondary';

  @Input({ transform: booleanAttribute })
  set outline(value: boolean) {
    this._outline = value !== null && `${value}` !== 'false';
  }

  @HostBinding('class.action-button')
  _customButton = true;

  @HostBinding('class.action-button--outline')
  _outline = false;

  @HostBinding('class.action-button--primary')
  get light(): boolean {
    return this.color === 'primary'
  }

  @HostBinding('class.action-button--secondary')
  get dark(): boolean {
    return this.color === 'secondary'
  }

  constructor() {}

  iconPosition!: string;

  ngOnInit(): void {}
}
