import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore'
import {Tv} from '../entities/tv.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  getTvs(){
    return this.firestore.collection('Tvs').snapshotChanges();
  }

  createTv(tv: Tv){
    return this.firestore.collection('Tvs').add(tv);
  }

  deleteTv(tv: Tv){
    this.firestore.doc('Tvs/' + tv.id).delete();
  }

  updateTv(tv: Tv){
    var id = tv.id;
    delete tv.id;
    this.firestore.doc('Tvs/' + id).update(tv);
  }
}
