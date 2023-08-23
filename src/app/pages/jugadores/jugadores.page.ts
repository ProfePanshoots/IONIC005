import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresserviceService } from 'src/app/services/jugadoresservice.service';
import { Jugador } from './jugadores.model';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

  listaJugadores: Jugador[] = [];

  constructor(
    private router:Router,
    private jugadoresservices: JugadoresserviceService) { }

  ngOnInit() {
    this.listaJugadores = this.jugadoresservices.getAll();
    //console.log(this.listaJugadores);
  }

  ionViewWillEnter() {
    //this.listaJugadores = this.jugadoresservices.getAll();
  }

  listar() {
    this.listaJugadores = this.jugadoresservices.getAll();
  }

  addJugador() {
    this.router.navigate(['/agregar']);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  buscarJugador(event: any) {
    const texto = event.target.value;
    if (texto && texto.trim() != '') {
      this.listaJugadores = this.listaJugadores.filter((aux: any) => {
        // BUSCANDO CUALQUIER COINCIDENCIA EN MAYUS O MINUS
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
      })
    } else {
      this.listar();
    }
  }
}
