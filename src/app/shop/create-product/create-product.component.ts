import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Product } from '../../../entities/Product.model';
import { ProductService } from '../../../services/product.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  exportAs: 'ngForm'
})
export class CreateProductComponent implements OnInit {

  newProductForm : Product;

  constructor(private ps: ProductService, public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  CreateProduct(regForm: NgForm) {
    this.newProductForm = regForm.form.value;
    this.save();
  }

  save() {
    this.ps.createProduct(this.newProductForm);
    this.router.navigate(['/shop/browse'])
  }

}
