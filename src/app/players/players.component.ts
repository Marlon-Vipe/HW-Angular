import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  players = [
    {
      id: 1,
      name: 'Aaron Judge'
    },
    {
      id: 2,
      name: 'Juan Soto'
    },
    {
      id: 3, 
      name: 'Fernando Tatis Jr.'
    },
    {
      id: 4,
      name: 'Vladimir Guerrero Jr.'
    },
    {
      id: 5,
      name: 'Jose Ramirez'
    },
    {
      id: 6,
      name: 'Ketel Marte'
    },
    ]
}
