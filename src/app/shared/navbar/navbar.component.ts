import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
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
    }
  ];
}
