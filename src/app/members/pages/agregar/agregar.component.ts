import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  miembro: any = {};
  rol: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    if( this.router.url.includes('editar') ) {
      if( this.router.url.includes('roles') ) {
        this.activatedRoute.params.subscribe( id => this.rol.id = id );
      } else {
        this.activatedRoute.params.subscribe( id => this.miembro.id = id );
      }
      /* this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.heroesService.getHeroePorId( id ) )
        )
        .subscribe( heroe => this.heroe = heroe ); */
    }
  }

  cancelar(): void {
    this.router.navigate(['/miembros/listado']);
  }

}
