import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = "http://localhost:8080/productList";
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
}
