import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/shared/interfaces/evento';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  evento: Evento | null = null; 
  text: string = '';

  ngOnInit(): void {
    
  }

  cancelar(): void {
    console.log( this.text );
  }

}
