import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJugadores } from 'src/app/interfaces/ijugadores';
import { UserapiService } from 'src/app/services/util/userapi.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  jugador: IJugadores = {
    id: 0,
    nombre: 'TEST',
    genero: 'TEST'
  }

  constructor(
    private api: UserapiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getJugador(this.getId())
  }

  getId() {
    let url = this.router.url
    let aux = url.split("/",3)
    let id = parseInt(aux[2])
    return id
  }

  getJugador(id: Number) {
    this.api.getJugador(id).subscribe((data:any) => {
      this.jugador = {
        id: data[0].id,
        nombre: data[0].nombre,
        genero: data[0].genero
      }
    })
  }

  updateJugador() {
    this.api.updateJugador(this.jugador).subscribe()
    this.router.navigate(['/apilist'])
  }

}
