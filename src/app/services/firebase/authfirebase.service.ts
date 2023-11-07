import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MensajesService } from '../util/mensajes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthfirebaseService {

  constructor(
    private auth: AngularFireAuth, 
    private router:Router,
    private msjService: MensajesService
    ) { }

  async login(email: string, pass: string) {
    try {
      const usuario = await this.auth.signInWithEmailAndPassword(email, pass);
      console.log("SESION INICIADA:" + usuario);
      if (usuario) {
        this.router.navigate(['/home']);
      }
    } catch(error) {
      this.msjService.mensajeToast('warning','Credenciales incorrectas',2000,'bottom')
      //console.error("Error al iniciar sesion: ", error);
    }
  }

  async register(email: string, pass: string) {
    try {
      const usuario = await this.auth.createUserWithEmailAndPassword(email, pass);
      console.log("USUARIO CREADO:" + usuario);
      this.login(email, pass);
    } catch(error) {
      console.error("Error al iniciar sesion: ", error);
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
      console.log("SESION CERRADA:");
    } catch(error) {
      console.error("Error al cerrar sesion: ", error);
    }
  }

  checkLogin() {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        resolve(user);
      }, (error) => {
        reject(error)
      });
    });
  }
}
