import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  breadCrumbItems!: MenuItem[];
  home!: MenuItem;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: '¿Quiene somos?' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/semillero' };
  }
}
