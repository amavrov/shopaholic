import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Product } from '../../../entities/tv.model';
import { ProductService } from '../../../services/product.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  exportAs: 'ngForm'
})
export class CreateProductComponent implements OnInit {

  newProductForm : Product;

  constructor(private ps: ProductService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  CreateProduct(regForm: NgForm) {
    this.newProductForm = regForm.form.value;
    this.save();
  }

  save() {
    this.ps.createProduct(this.newProductForm);
  }

}
