import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  hideMenu: boolean = false;
  menu: MenuItem[] = [
    {
      label: 'Hogar',
      icon: 'pi pi-home',
      routerLink: '/inicio'
    },
    {
      label: 'Miembros',
      icon: 'pi pi-users',
      routerLink: '/miembros'
    },
    {
      label: 'Eventos',
      icon: 'pi pi-calendar-minus',
      routerLink: '/eventos'
    },
    {
      label: 'Proyectos',
      icon: 'pi pi-briefcase',
      routerLink: '/proyectos'
    }
  ];
}
