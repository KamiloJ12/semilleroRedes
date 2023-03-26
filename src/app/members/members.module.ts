import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { AgregarComponent } from './pages/agregar/agregar.component';


@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class MembersModule { }
