import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Product } from './product';
import { Observable } from 'rxjs';
import { IProduct } from './product.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'http://localhost:3000';
  constructor(public http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get(`${this.apiUrl}/products`) as Observable<IProduct[]>;
  }

  getSpecifiedProduct(id: number): Observable<IProduct> {
    return this.http.get(`${this.apiUrl}/products/${id}`) as Observable<IProduct>;
  }

  deleteProduct(id: number): Observable<IProduct[]> {
    return this.http.delete(`${this.apiUrl}/products/${id}`, httpOptions) as Observable<IProduct[]>;
  }


  // editProduct(productId: number, product: Product) {
  //   console.log(productId, product);
  //   return this.http.patch(`${this.apiUrl}/${productId}`, product);
  // }
}


