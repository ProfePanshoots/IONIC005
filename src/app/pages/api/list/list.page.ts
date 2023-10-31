import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJugador } from 'src/app/interfaces/ijugador';
import { CrudfirebaseService } from 'src/app/services/firebase/crudfirebase.service';
import { UserapiService } from 'src/app/services/util/userapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listaJugadores!: IJugador[];

  constructor(
    private api: UserapiService, 
    private router: Router,
    private fireServices: CrudfirebaseService
  ) { }

  ngOnInit() {
    this.listar()
  }

  ionViewWillEnter() {
    this.listar()
  }

  listar() {
    this.fireServices.getCollection('Jugadores').subscribe((jugadores) => {
      this.listaJugadores = jugadores
    });
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

  addJugador() {
    this.router.navigate(['/apiadd']);
  }
}
