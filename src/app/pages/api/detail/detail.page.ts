import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/util/userapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  jugador = {
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

  deleteJugador() {
    this.api.deleteJugador(this.jugador).subscribe()
    this.router.navigate(['apilist'])
  }

}
