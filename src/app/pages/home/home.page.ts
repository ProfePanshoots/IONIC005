import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/util/mensajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private mensajesUtil: MensajesService) { }

  ngOnInit() {
    this.mensajesUtil.mensajeToast('success','Bienvenido',2000,'bottom')
  }

}
