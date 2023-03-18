import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'semillero',
    loadChildren: () => import('./semillero/semillero.module').then( m => m.SemilleroModule )
  },
  {
    path: '**',
    redirectTo: 'semillero'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
