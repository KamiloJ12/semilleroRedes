import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'semillero',
    loadChildren: () => import('./semillero/semillero.module').then( m => m.SemilleroModule )
  },
  {
    path: 'eventos',
    loadChildren: () => import('./events/events.module').then( m => m.EventsModule )
  },
  {
    path: 'miembros',
    loadChildren: () => import('./members/members.module').then( m => m.MembersModule )
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsModule )
  }, 
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  }, 
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  }, 
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
