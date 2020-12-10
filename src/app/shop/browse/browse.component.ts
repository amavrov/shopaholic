import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/entities/tv.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private ps: ProductService) { }

  shopList$ : Observable<Product[]>;
  
  ngOnInit(): void {
    this.shopList$ = this.ps.loadShopList();
    var a = 1;
  }

}
