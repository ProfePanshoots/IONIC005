import { Component, OnInit } from '@angular/core';
import { JugadoresserviceService } from 'src/app/services/jugadoresservice.service';
import { Jugador } from './jugadores.model';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

  listaJugadores: Jugador[] = [];

  constructor(private jugadoresservices: JugadoresserviceService) { }

  ngOnInit() {
    this.listaJugadores = this.jugadoresservices.getAll();
    //console.log(this.listaJugadores);
  }

  ionViewWillEnter() {
    this.listaJugadores = this.jugadoresservices.getAll();
  }

}
