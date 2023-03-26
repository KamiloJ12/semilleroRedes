import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  miembroActivo: any = {};
  miembros: any[] = [];
  miembrosSeleccionados: any[] = [];

  rolActivo: any = {};
  roles: any[] = [];
  rolesSeleccionados: any[] = [];

  loading: boolean = false;
  
  menuItems: MenuItem[] = [];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.miembros = [
      {
        id: 1850,
        nombre: 'Camilo Jaimes',
        correo: 'cristiancamilojv@ufps.edu.co',
        fecha_ingreso: '30 de octubre de 2022'
      },
      {
        id: 8502,
        nombre: 'Angie Jaimes',
        correo: 'angieestefaniajave@ufps.edu.co',
        fecha_ingreso: '14 de julio de 2022'
      }
    ];

    this.roles = [
      {
        id: 230,
        apodo: 'Lider de proyecto',
        miembros: 4  
      },
      {
        id: 855,
        apodo: 'integrante',
        miembros: 15
      }
    ];

    this.menuItems = [
      {
        label: 'Opciones',
        items: [
          {
            label: 'Actualizar',
            icon: 'pi pi-refresh',
            command: () => {
              if( this.miembroActivo ){
                alert('update miembro - ' + this.miembroActivo.id);
              }else {
                alert('update rol - ' + this.rolActivo.id);
              }
            }
          },
          {
            label: 'Eliminar',
            icon: 'pi pi-times',
            command: () => {
              alert('delete - '+ this.miembroActivo.id);
            }
          }
        ]
      }
    ];
  }
  
  agregar(): void {
    this.router.navigate(['./miembros/agregar']);
  }

}