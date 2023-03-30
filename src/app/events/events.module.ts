import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from "../shared/shared.module";

import { AgregarComponent } from './pages/agregar/agregar.component';
import { EventsRoutingModule } from './events-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HomeComponent,
        AgregarComponent
    ],
    imports: [
        CommonModule,
        EventsRoutingModule,
        SharedModule,
        PrimeNgModule,
        FormsModule
    ]
})
export class EventsModule { }
