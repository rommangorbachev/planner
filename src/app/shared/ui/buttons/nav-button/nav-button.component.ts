import { booleanAttribute, Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'a[navButton]',
  standalone: true,
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.sass',
  imports: [
    NgClass
  ]
})
export class NavButtonComponent implements OnInit {
  @Input()
  iconAlign: 'left' | 'right' | 'center' = 'center';

  @Input()
  routerLinkActive: string | string[] = 'active-link'

  @Input()
  label: string = 'Наименование';

  @Input()
  color!: 'primary' | 'secondary';

  @Input({ transform: booleanAttribute })
  set outline(value: boolean) {
    this._outline = value !== null && `${value}` !== 'false';
  }

  @HostBinding('class.nav-button')
  _navButtom = true;

  @HostBinding('class.nav-button--outline')
  _outline = false;

  @HostBinding('class.nav-button--primary')
  get light(): boolean {
    return this.color === 'primary'
  }

  @HostBinding('class.nav-button--secondary')
  get dark(): boolean {
    return this.color === 'secondary'
  }

  constructor() {}

  ngOnInit(): void {}
}
