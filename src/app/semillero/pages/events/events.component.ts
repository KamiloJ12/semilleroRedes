import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  breadCrumbItems!: MenuItem[];
  home!: MenuItem;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Eventos' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/semillero' };
  }
}
