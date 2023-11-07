import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UserrandomService } from 'src/app/services/util/userrandom.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  listaUsuarios: Usuario[] = [];
  loginForm: FormGroup;
  user: any;
  emailValue?: string;
  passValue?: string;

  constructor(
    private router: Router,
    private usuarioService: UsuariosService,
    private toastController: ToastController,
    private menu: MenuController,
    private formBuilder: FormBuilder,
    private userrandom: UserrandomService,
    private fireAuthService: AuthfirebaseService
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {
    this.menu.enable(true);
    /*
    this.userrandom.getRandomUser().subscribe((data) => {
      //console.log(data)
      this.user = data.results[0];
      this.emailValue = this.user.email;
      this.passValue = this.user.login.password;
      console.log(this.user.email + " " + this.user.login.password)
    })
    */
    this.fireAuthService.checkLogin()
    .then((user) => {
      if(user) {
        this.router.navigate(['home']);
      }
    })
    .catch((error) => {
      //console.error('Error en la autenticació:',error);
    })
  }

  login() {
    //this.usuarioService.getUser(user.value, pass.value);
    if (this.emailValue && this.passValue) {
      this.fireAuthService.login(this.emailValue, this.passValue);
      //this.mensajeToast("Bienvenido al Sistema!");
      //this.router.navigate(['home']);
    }   
  }

  register() {
    if (this.emailValue && this.passValue) {
      this.fireAuthService.register(this.emailValue, this.passValue);
      this.mensajeToast("Usuario registrado!");
      //this.router.navigate(['home']);
    } 
    //this.router.navigate(['register']);
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
