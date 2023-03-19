import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsComponent } from './pages/events/events.component';
import { MembersComponent } from './pages/members/members.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'events', component: EventsComponent },
      { path: 'members', component: MembersComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemilleroRoutingModule { }
