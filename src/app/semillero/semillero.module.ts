import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemilleroRoutingModule } from './semillero-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SemilleroRoutingModule,
    SharedModule
  ]
})
export class SemilleroModule { }
