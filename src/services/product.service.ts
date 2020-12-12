import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Product } from '../entities/Product.model'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Observable<Product[]>;
  
  constructor(private firestore: AngularFirestore) {
  }
  
  itemsCollection: AngularFirestoreCollection<Product>;
  items$: Observable<Product[]>;
  item$: Observable<Product>


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
    this.firestore.doc('Products/' + product.uid).delete();
  }

  updateProduct(product: Product){
    var id = product.uid;
    delete product.uid;
    this.firestore.doc('Products/' + id).update(product);
  }

  purchaseProductsFromCart(userId : string){ 
    this.firestore.collection("Carts").doc(userId.toString()).delete();
  }

  addProductToCart(product : Product, userId : string){
    this.firestore.collection('Carts').doc(userId.toString()).set(product);
  }

  getUserCart(userId : string){
    this.itemsCollection = this.firestore.collection('Carts');
    return this.item$ = this.itemsCollection.doc(userId.toString()).valueChanges()
  }
}

