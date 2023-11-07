import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Jugadores', url: '/jugadores', icon: 'people-circle' },
    { title: 'Digimones', url: '/equipos', icon: 'people' },
    { title: 'API', url: '/apihome', icon: 'people' },
    { title: 'Estadisticas', url: '/estadisticas', icon: 'analytics' },
    { title: 'Campeón', url: '/campeon', icon: 'medal' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];
  public appApi = [
    { title: 'Inicio', url: '/apihome', icon: 'home' },
    { title: 'List', url: '/apilist', icon: 'people-circle' },
    { title: 'Add', url: '/apiadd', icon: 'people' },
    { title: 'Delete', url: '/apidelete', icon: 'people' },
    { title: 'Update', url: '/apiupdate', icon: 'analytics' },
    { title: 'Detail', url: '/apidetail', icon: 'medal' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor(private router: Router, private translateService: TranslateService) {
    this.translateService.setDefaultLang('fr');
    this.translateService.addLangs(['es','en']);
  }

  monstrarMenu() {
    return this.router.url !== '/login';
  }

  mostrarMenuApi() {
    const aux = ['apihome','apiadd','apidelete','apiupdate','apilist','apidetail']
    return aux.includes(this.router.url.substring(1)) // ELIMINAMOS EL "/"
    //return this.router.url == '/apihome';
  }


}
