import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IJugador } from 'src/app/interfaces/ijugador';

@Injectable({
  providedIn: 'root'
})
export class CrudfirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getCollection(name: string) {
    return this.firestore.collection<IJugador>(name).valueChanges({idField: 'id'});
  }

  createJugador(name: string, data:IJugador) {
    return this.firestore.collection<IJugador>(name).add(data);
  }

  updateJugador(name: string, documentId: string, data: IJugador) {
    return this.firestore.collection<IJugador>(name).doc(documentId).update(data);
  }

  deleteJugador(name: string, documentId: string) {
    return this.firestore.collection<IJugador>(name).doc(documentId).delete();
  }

  getJugadorById(name: string, documentId: string) {
    return this.firestore.collection<IJugador>(name).doc(documentId).valueChanges();
  }
}
