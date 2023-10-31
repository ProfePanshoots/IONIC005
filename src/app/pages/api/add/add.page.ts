import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJugador } from 'src/app/interfaces/ijugador';
import { CrudfirebaseService } from 'src/app/services/firebase/crudfirebase.service';
import { UserapiService } from 'src/app/services/util/userapi.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  jugador: IJugador = {
    nombre: 'TEST',
    genero: 'TEST'
  }

  constructor(
    //private api: UserapiService,
    private router: Router,
    private fireservices: CrudfirebaseService
  ) { }

  ngOnInit() {
  }

  addJugador() {
    //this.api.addJugaador(this.jugador).subscribe()
    this.fireservices.createJugador('Jugadores', this.jugador);
    this.router.navigate(['/apilist'])
  }

}
