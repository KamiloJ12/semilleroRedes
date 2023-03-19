import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .header {
        background: url("src/assets/images/background-g4d9ebd0a6.jpg") center center;
		    background-size: cover;
        width: 100%;
        height: 600px;
      }
      img {
        width: 300px;
        position: absolute;
        top: 180px;
        left: 40%;
      }
    `
  ]
})
export class HomeComponent {

}
