import { Injectable } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import {Product} from '../entities/tv.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Observable<Product[]>;
  
  constructor(private firestore: AngularFirestore) {
  }
  
  itemsCollection: AngularFirestoreCollection<Product>;
  items$: Observable<Product[]>;

  loadShopList() {
    this.itemsCollection = this.firestore.collection('Products');
    return this.items$ = this.itemsCollection.valueChanges()
  }

  getProducts(){
    var result = this.firestore.collection('Products').snapshotChanges();
    return result;
  }

  createProduct(product: Product){
    return this.firestore.collection('Products').add(product);
  }

  deleteProduct(product: Product){
    this.firestore.doc('Products/' + product.id).delete();
  }

  updateProduct(product: Product){
    var id = product.id;
    delete product.id;
    this.firestore.doc('Products/' + id).update(product);
  }
}
