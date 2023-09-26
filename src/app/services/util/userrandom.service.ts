import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserrandomService {

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<any> {
    return this.http.get('https://randomuser.me/api')
  }
}
