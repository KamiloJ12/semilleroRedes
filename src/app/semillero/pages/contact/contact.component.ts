import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  breadCrumbItems!: MenuItem[];
  home!: MenuItem;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Contacto' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/semillero' };
  }
}
