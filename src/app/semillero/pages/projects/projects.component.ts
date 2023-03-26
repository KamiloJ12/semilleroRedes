
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  breadCrumbItems!: MenuItem[];
  home!: MenuItem;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Proyectos' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/semillero' };
  }
}
