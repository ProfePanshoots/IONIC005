import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  listaUsuarios: Usuario[] = [];
  constructor(
    private router: Router,
    private usuarioService: UsuariosService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  login(user:any, pass:any) {
    this.usuarioService.getUser(user.value, pass.value);
    this.mensajeToast("Bienvenido al Sistema!");
    this.router.navigate(['home']);
  }

  register() {
    this.router.navigate(['register']);
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

}
