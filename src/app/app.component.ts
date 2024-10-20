import { Component } from '@angular/core';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [
    LayoutComponent,
    RouterOutlet,
    HttpClientModule
  ],
  standalone: true
})
export class AppComponent {
}
