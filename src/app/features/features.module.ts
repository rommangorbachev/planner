import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { MainComponent } from './main/main.component';
import { ApiService } from '../shared/services/_api/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    LayoutComponent,
    MainComponent,
  ]
})
export class FeaturesModule { }
