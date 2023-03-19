import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemilleroRoutingModule } from './semillero-routing.module';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { ProjectsComponent } from './pages/projects/projects.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    EventsComponent,
    MembersComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SemilleroRoutingModule
  ]
})
export class SemilleroModule { }
