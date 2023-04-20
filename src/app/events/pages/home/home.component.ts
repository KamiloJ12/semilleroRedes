import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Evento } from 'src/app/shared/interfaces/evento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventoActivo: Evento | null = null;
  eventos: Evento[] = [];
  eventosSeleccionados: Evento[] = [];

  loading: boolean = false;
  
  menuItems: MenuItem[] = [];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.eventos = [
      {
        id: 12,
        titulo: 'Evento cyberseguridad CISCO',
        descripcion: 'Un evento de cisco',
        url: '',
        fecha_inicio: '10 abril de 2023',
        fecha_fin: '2 junio de 2023'
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
              this.router.navigate(['./eventos/editar', this.eventoActivo?.id]);
            }
          },
          {
            label: 'Eliminar',
            icon: 'pi pi-times',
            command: () => {
              alert('delete - '+ this.eventoActivo?.id);
            }
          }
        ]
      }
    ];
  }

  agregar(): void {
    this.router.navigate(['./eventos/agregar']);
  }
}
