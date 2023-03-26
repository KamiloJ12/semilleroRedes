import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  breadCrumbItems!: MenuItem[];
  home!: MenuItem;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Integrantes' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/semillero' };
  }
}
