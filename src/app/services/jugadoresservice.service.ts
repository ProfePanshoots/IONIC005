import { Injectable } from '@angular/core';
import { Jugador } from '../pages/jugadores/jugadores.model';

@Injectable({
  providedIn: 'root'
})
export class JugadoresserviceService {

  jugadores: Jugador[] = [
    {
      id: '1',
      nombre: 'Kobe Bryant',
      imagen: 'https://media.cnn.com/api/v1/images/stellar/prod/200126210422-27-kobe-bryant-gallery-restricted.jpg?q=x_3,y_0,h_1403,w_2494,c_crop/w_800'
    },
    {
      id: '2',
      nombre: 'Allen Iverson',
      imagen: 'https://www.metroworldnews.com/resizer/AmyQrYZaL096UI6H2mEt_JVOtDE=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/I3OZ5YS6BFGNFJLHHTRRDBDKEI.jpg'
    },
    {
      id: '3',
      nombre: 'Kevin Durant',
      imagen: 'https://i2.wp.com/livebasketballbr.com/wp-content/uploads/2023/03/durant-iso021623.jpg?fit=1920%2C1080&ssl=1'
    },
  ]

  constructor() { }

  getAll() {
    return [...this.jugadores]
  }

  getJugador(id: string) {
    return {
      ...this.jugadores.find(aux => {
        return aux.id === id
      })
    }
  }

  deleteJugador(id: string) {
    this.jugadores = this.jugadores.filter( aux => {
      return aux.id !== id
    })
  }

  addJugador(nombre:string, imagen:string) {
    this.jugadores.push({
      nombre, imagen, id: this.jugadores.length + 1 + ""
    })
  }

}
