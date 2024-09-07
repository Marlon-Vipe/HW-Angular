import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  @Input() username = 'Marlon Villalona'

  teams = [
  {
    id: 1,
    name: 'Tigres del Licey'
  },
  {
    id: 2,
    name: 'Aguilas Cibaeñas'
  },
  {
    id: 3, 
    name: 'Leones del Escogido'
  },
  {
    id: 4,
    name: 'Gigantes del Cibao'
  },
  {
    id: 5,
    name: 'Toros del Este'
  },
  {
    id: 6,
    name: 'Estrellas Orientales'
  },
  ]}
