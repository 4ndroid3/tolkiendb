import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

constructor(private firestore: AngularFirestore) { }

  agregarPersona(personaje: any): Promise<any> {
    return this.firestore.collection('personajes').add(personaje)
  }

  getPersonas(): Observable<any> {
    return this.firestore.collection('personajes', ref => ref.orderBy('raza', 'desc')).snapshotChanges();

  }
}
