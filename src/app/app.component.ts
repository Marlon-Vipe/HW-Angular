import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Vipe Web';
  result_add: number = 0;
  result_substract: number = 0;
  
  sumar() {
    this.result_add = 5 + 3;
  }

  restar(){
    this.result_substract = 10-5;
  }
}
