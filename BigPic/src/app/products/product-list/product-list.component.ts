import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[];
  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .pipe(
        tap(res => console.log(res)),
      )
      .subscribe(res => this.products = res);
  }

  delete(id: number) {
    this.productService.deleteProduct(id)
      .subscribe((products) => {
        this.products = products;
      });
  }

}
