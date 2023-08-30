import { Injectable } from '@angular/core';
import { Usuario } from '../pages/usuarios/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuario[] = [
    {
      id: '1',
      usuario: 'panshoots',
      contrasenia: '123456'
    }
  ]

  constructor() { }

  getAll() {
    return [...this.usuarios]
  }

  getUser(user: string, pass: string) {
    return {
      ...this.usuarios.find(aux => {
        return aux.usuario === user && aux.contrasenia === pass
      })
    }
  }

  deleteUser(id: string) {
    this.usuarios = this.usuarios.filter( aux => {
      return aux.id !== id
    })
  }

  addUser(usuario:string, contrasenia:string) {
    this.usuarios.push({
      usuario, contrasenia, id: this.usuarios.length + 1 + ""
    })
  }
  
}
