import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Tv } from '../../../entities/tv.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  exportAs: 'ngForm'
})
export class CreateProductComponent implements OnInit {

  newProductForm : Tv;

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
  }

  CreateProduct(regForm: NgForm) {
    this.newProductForm = regForm.form.value;
    this.save();
  }

  save() {
    this.ps.createTv(this.newProductForm);
  }

}
