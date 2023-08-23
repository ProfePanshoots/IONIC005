import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { JugadoresserviceService } from 'src/app/services/jugadoresservice.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(
    private jugadoresServices:JugadoresserviceService,
    private toastController:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  addJugador(nombre: any, imagen: any) {
    this.jugadoresServices.addJugador(nombre.value, imagen.value);
    this.mensajeToast("Jugador Agregado!");
    this.router.navigate(['/jugadores']);
  }

}
