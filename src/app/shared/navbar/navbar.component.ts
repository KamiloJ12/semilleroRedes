import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
  icono?: string; 
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menu: MenuItem[] = [
    {
      texto: 'inicio',
      ruta: '/semillero/inicio'
    },
    {
      texto: '¿Quiene somos?',
      ruta: './semillero/quienes'
    },
    {
      texto: 'Proyectos',
      ruta: './semillero/projects'
    },
    {
      texto: 'Eventos',
      ruta: './semillero/events'
    },
    {
      texto: 'Integrantes',
      ruta: './semillero/members'
    },
    {
      texto: 'Contactos',
      ruta: './semillero/contact'
    },
    {
      icono: 'fa-solid fa-user-bounty-hunter',
      texto: '',
      ruta: ''

    }

  ];
}
