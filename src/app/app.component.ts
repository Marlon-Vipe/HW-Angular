import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({  // Este componente envuelve a todos.
  selector: 'app-root', // Forma en que se refiere a este componente en otro sitio.
  standalone: true, // Si queremos usar un modulo dentro de este componente, se usa en los {imports}
  imports: [RouterOutlet],  // Aqui es que se usa
  templateUrl: './app.component.html', // Esto es lo que renderiza
  styleUrl: './app.component.css',// Esto es lo que renderiza tambien
})
export class AppComponent { 
  title = 'Vipe Web';
  result_add: number = 0;
  result_substract: number = 0;
  result_mult: number = 0;
  result_div: number = 0;
  
  sumar() {
    this.result_add = 5 + 3;
  }

  restar(){
    this.result_substract = 10-5;
  }

  multiplicar(){
    this.result_mult = 10*5;
  }

  dividir(){
    this.result_div = 10/5;
  }
}
