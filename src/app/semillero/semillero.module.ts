import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemilleroRoutingModule } from './semillero-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EventsComponent } from './pages/events/events.component';
import { MembersComponent } from './pages/members/members.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ProjectsComponent,
    EventsComponent,
    MembersComponent,
    ContactComponent,
    
  ],
  imports: [
    CommonModule,
    SemilleroRoutingModule,
    SharedModule
  ]
})
export class SemilleroModule { }
