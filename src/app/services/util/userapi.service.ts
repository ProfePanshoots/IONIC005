import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJugador } from 'src/app/interfaces/ijugador';
import { IJugadores } from 'src/app/interfaces/ijugadores';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http: HttpClient) { }

  listJugadores(): Observable<IJugadores> {
    return this.http.get<IJugadores>(`${environment.apiURL}/jugadores`);
  }

  addJugaador(jugador: IJugador): Observable<IJugador> {
    return this.http.post<IJugador>(`${environment.apiURL}/jugadores`, jugador);
  }

  getJugador(id: Number): Observable<IJugadores> {
    return this.http.get<IJugadores>(`${environment.apiURL}/jugadores/?id=${id}`);
  }

  updateJugador(jugador: any): Observable<IJugadores> {
    return this.http.put<IJugadores>(`${environment.apiURL}/jugadores/${jugador.id}`, jugador);
  }

  deleteJugador(jugador: any): Observable<IJugadores> {
    return this.http.delete<IJugadores>(`${environment.apiURL}/jugadores/${jugador.id}`);
  }

  
}
