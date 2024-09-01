import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({  // Este componente envuelve a todos.
  selector: 'app-root', // Forma en que se refiere a este componente en otro sitio.
  standalone: true, // Si queremos usar un modulo dentro de este componente, se usa en los {imports}
  imports: [RouterOutlet, UserComponent],  // Aqui es que se usa
  templateUrl: './app.component.html', // Esto es lo que renderiza
  styleUrl: './app.component.css',// Esto es lo que renderiza tambien
})
export class AppComponent { 
  title = 'Vipe Web';
}
