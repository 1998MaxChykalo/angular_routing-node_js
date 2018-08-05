import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: IProduct;
  constructor(private route: ActivatedRoute,
  private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.productService.getSpecifiedProduct(id)
        .subscribe(product => this.product = product);
    })
  }

}
