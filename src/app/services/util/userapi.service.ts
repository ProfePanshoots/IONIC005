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

  apiURL = "https://jsonserver005d.onrender.com";

  constructor(private http: HttpClient) { }

  listJugadores(): Observable<IJugadores> {
    return this.http.get<IJugadores>(`${this.apiURL}/jugadores`);
  }

  addJugaador(jugador: IJugador): Observable<IJugador> {
    return this.http.post<IJugador>(`${this.apiURL}/jugadores`, jugador);
  }

  getJugador(id: Number): Observable<IJugadores> {
    return this.http.get<IJugadores>(`${this.apiURL}/jugadores/?id=${id}`);
  }

  updateJugador(jugador: any): Observable<IJugadores> {
    return this.http.put<IJugadores>(`${this.apiURL}/jugadores/${jugador.id}`, jugador);
  }

  deleteJugador(jugador: any): Observable<IJugadores> {
    return this.http.delete<IJugadores>(`${this.apiURL}/jugadores/${jugador.id}`);
  }

  
}
