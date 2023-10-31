import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IJugador } from 'src/app/interfaces/ijugador';
import { IJugadores } from 'src/app/interfaces/ijugadores';
import { CrudfirebaseService } from 'src/app/services/firebase/crudfirebase.service';
import { UserapiService } from 'src/app/services/util/userapi.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  jugador! : IJugador | undefined;

  constructor(
    private api: UserapiService,
    private router: Router,
    private route: ActivatedRoute,
    private fireServices: CrudfirebaseService
  ) { }

  ngOnInit() {
    this.getJugador()
  }

  ionViewWillEnter() {
    this.getJugador()
  }

  getJugador() {
    const jugadorId = this.route.snapshot.paramMap.get('id');
    
    if ( jugadorId ) {
      this.fireServices.getJugadorById('Jugadores', jugadorId).subscribe( (jugador) => {
        this.jugador = jugador || {} as IJugador;
        this.jugador.id = jugadorId;
      });
    }
  }

  updateJugador() {
    //this.api.updateJugador(this.jugador).subscribe()
    const jugadorId = this.route.snapshot.paramMap.get('id');
    if ( jugadorId && this.jugador ) {
      this.fireServices.updateJugador('Jugadores',jugadorId,this.jugador);
      this.router.navigate(['/apilist'])
    }
    
  }

}
