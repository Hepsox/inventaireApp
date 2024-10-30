import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'http://localhost:3000/product';

  createProduct(product: Product): Observable<Product> {
    console.log(product);
    return this.http.post<any>(this._BASE_URL, product);
  }
}
