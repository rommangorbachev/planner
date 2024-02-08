import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    LayoutComponent,
    MainComponent
  ]
})
export class FeaturesModule { }
