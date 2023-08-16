import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Jugadores', url: '/jugadores', icon: 'people-circle' },
    { title: 'Equipos', url: '/equipos', icon: 'people' },
    { title: 'Estadisticas', url: '/estadisticas', icon: 'analytics' },
    { title: 'Campeón', url: '/campeon', icon: 'medal' },
    { title: 'Fichajes', url: '/fichaje', icon: 'person-add' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
