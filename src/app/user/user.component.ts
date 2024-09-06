import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "Marlon Villalona"
  isLoggedIn = false; // Esta funcionando como un state
  signOut = false;

  greet(){ // Metodo para ejecutarlo y llamarlo en el user html
    alert('Hi!');
  }
}