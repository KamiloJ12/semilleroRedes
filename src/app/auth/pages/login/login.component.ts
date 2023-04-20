import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  carouselArray: any[] = [];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.carouselArray = [
      {
        image: './assets/images/logo_UFPS.png',
        name: 'Logo UFPS',
        width: '520'
      },
      {
        image: './assets/images/logo_ingieneria_sistemas.png',
        name: 'Logo Ingieneria de Sistemas',
        width: '300'
      },
      {
        image: './assets/images/logo_SIREDSE_2.png',
        name: 'Logo Semillero',
        width: '390'
      }
    ];
  }

  login(): void {
    this.router.navigate(['/inicio']);
  }

}
