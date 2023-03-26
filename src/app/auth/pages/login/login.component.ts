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
        name: 'Titulo # 1',
        price: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Titulo # 2',
        price: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'Titulo # 3',
        price: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ];
  }

  login(): void {
    this.router.navigate(['/inicio']);
  }

}
