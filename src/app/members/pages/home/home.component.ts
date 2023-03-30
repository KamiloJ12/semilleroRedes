import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Miembro } from 'src/app/shared/interfaces/miembro';
import { Rol } from 'src/app/shared/interfaces/rol';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  miembroActivo: Miembro | null = null;
  miembros: Miembro[] = [];
  miembrosSeleccionados: Miembro[] = [];

  rolActivo: Rol | null = null;
  roles: Rol[] = [];
  rolesSeleccionados: Rol[] = [];

  loading: boolean = false;
  
  menuItems: MenuItem[] = [];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.miembros = [
      {
        id: 1850,
        nombre: 'Camilo Jaimes',
        correo: 'cristiancamilojv@ufps.edu.co',
        fecha_ingreso: '30 de octubre de 2022',
        celular: '3014202551'
      },
      {
        id: 8502,
        nombre: 'Angie Jaimes',
        correo: 'angieestefaniajave@ufps.edu.co',
        fecha_ingreso: '14 de julio de 2022',
        celular: '3045202123'
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
                this.router.navigate(['./miembros/editar', this.miembroActivo.id]);
              }else {
                this.router.navigate(['./miembros/roles/editar', this.rolActivo?.id]);
              }
            }
          },
          {
            label: 'Eliminar',
            icon: 'pi pi-times',
            command: () => {
              alert('delete - '+ this.miembroActivo?.id);
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