import { Component, OnInit } from '@angular/core';
import { NavButtonComponent } from '../../ui';
import { EventType, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { filter, Subject, takeUntil } from 'rxjs';


const slideInOutAnimation = trigger('slideInOutAnimation', [
  state('selected', style({
    transform: 'translateY(-50%) scale(1.2)',
    zIndex: '1'
  })),
  state('notSelected', style({
    transform: 'translateY(0) scale(1)',
    zIndex: '0'
  })),
  transition('selected => notSelected', [
    animate('0.3s')
  ]),
  transition('notSelected => selected', [
    animate('0.3s')
  ])
]);

export interface MenuItem {
  id: number;
  label: string;
  selected: boolean;
  link?: string;
  linkParams?: string;
  iconPath?: string;
  iconAlign: 'left' | 'right' | 'center';
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NavButtonComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.sass',
  animations: [slideInOutAnimation]
})
export class NavBarComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  menuItems: MenuItem[] = [
    {
      id: 1,
      label: 'Просмотр всех тем',
      selected: false,
      link: '/main/discussions',
      iconPath: './assets/images/home-icon.svg',
      iconAlign: 'center'
    },
    {
      id: 2,
      label: 'Создать тему',
      selected: false,
      link: '/main/create-discussion',
      iconPath: './assets/images/create.svg',
      iconAlign: 'center'
    },
    {
      id: 3,
      label: 'Просмотр карты',
      selected: false,
      link: '/main',
      linkParams: 'id',
      iconPath: './assets/images/map.svg',
      iconAlign: 'center'
    }
  ];

  constructor(private router: Router) {
    router.events.forEach(event => {
      if(event.type === EventType.NavigationEnd) {
        this.menuItems = this.menuItems.map(item => {
          if(item.link === event.url) {
            return {...item, selected: true}
          } else {
            return item
          }
        })
      }
    })
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.unsubscribe$)
    // @ts-ignore
    ).subscribe((event: NavigationEnd) => {
      this.menuItems = this.menuItems.map(item => ({
        ...item,
        selected: item.link === event.url
      }));
    });
  }

  onMenuItemClick(selectedItem: any) {
    this.menuItems.forEach(item => item.selected = false);
    selectedItem.selected = true;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
