import { Component, Input } from '@angular/core';
import { TeamsComponent } from '../teams/teams.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TeamsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() username = 'Marlon Villalona'
  isLoggedIn = false; // Esta funcionando como un state
  signOut = false;
  favTeam = '';

  getFavoriteTeam(gameName: string){
    this.favTeam = gameName;
  }

  greet(){ // Metodo para ejecutarlo y llamarlo en el user html
    alert('Hi!');
  }
}