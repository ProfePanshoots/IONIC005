import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IJugador } from 'src/app/interfaces/ijugador';
import { CrudfirebaseService } from 'src/app/services/firebase/crudfirebase.service';
import { UserapiService } from 'src/app/services/util/userapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  jugador! : IJugador | undefined;

  constructor(
    private api: UserapiService,
    private router: Router,
    private fireServices: CrudfirebaseService,
    private route: ActivatedRoute
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

  deleteJugador() {
    //this.api.deleteJugador(this.jugador).subscribe()
    const jugadorId = this.route.snapshot.paramMap.get('id');
    if ( jugadorId ) {
      this.fireServices.deleteJugador('Jugadores', jugadorId);
      this.router.navigate(['apilist'])
    }
  }

}
