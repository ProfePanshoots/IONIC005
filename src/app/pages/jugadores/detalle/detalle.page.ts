import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { JugadoresserviceService } from 'src/app/services/jugadoresservice.service';
import { Jugador } from '../jugadores.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  jugador!: Jugador;

  constructor(private router:Router,private toastController: ToastController,private alertController:AlertController,private activatedRoute: ActivatedRoute,private jugadoresService: JugadoresserviceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.jugador = this.jugadoresService.getJugador(aux);
        console.log(this.jugador)
      }
    })
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });
    toast.present()
  }

  async deleteJugador() {
    //this.mensajeToast('Jugador Eliminado!');
    const alert = await this.alertController.create({
      header: 'Eliminar Jugador',
      message: 'Estás seguro de que desea eliminar al jugador?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            if ( this.jugador && this.jugador.id !== undefined) {
              this.jugadoresService.deleteJugador(this.jugador.id)
              this.mensajeToast('Jugador Eliminado!');
              this.router.navigate(['/jugadores'])
            } else {
              this.mensajeToast('ERROR: Jugador no definido');
            }
          }
        },
        {
          text: 'No',
          handler: () => {
            this.mensajeToast('Acción cancelada!');
          }
        }
      ]
    });
    await alert.present();
    let resultado = await alert.onDidDismiss();
  }

}
