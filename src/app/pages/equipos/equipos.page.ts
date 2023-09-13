import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  digimons: any[] = [];
  personajes: any[] = [];

  paginaActual = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`;
    this.httpClient.get<any>(url).subscribe(result => {
      this.digimons = result.content;
    })
  }

  cargarMasDatos() {
    this.paginaActual++;
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`;
    this.httpClient.get<any>(url).subscribe(result => {
      this.digimons = this.digimons.concat(result.content);
    })
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarDatos();
  }

  cargarAnteriorPagina() {
    if (this.paginaActual <= 0) {
      this.paginaActual = 0;
      this.cargarDatos();
    } else {
      this.paginaActual--;
      this.cargarDatos();
    }
    
  }

}
