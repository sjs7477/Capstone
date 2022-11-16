import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api';

import {CartItem} from "../models/cart-item.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url:string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/cartList';
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.url);
  }
}
