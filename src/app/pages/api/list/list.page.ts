import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/util/userapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listaJugadores:any = [];

  constructor(private api: UserapiService, private router: Router) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.listar()
  }

  listar() {
    this.api.listJugadores().subscribe((data) => {
      //console.log(data)
      let aux = JSON.stringify(data) // TRANSFORMAMOS LA NFO DEL API
      this.listaJugadores = JSON.parse(aux) // TRANSFORMAMOS A ARREGLO
    })

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
