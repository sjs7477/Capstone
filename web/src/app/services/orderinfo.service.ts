import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {Orderinfo} from "../models/orderinfo.model";
import {CartItem} from "../models/cart-item.model";
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class OrderinfoService {
  hitUrl ="";
  orderurl = "http://localhost:8080/addOrder";
  orderDetailsurl = "http://localhost:8080/orderDetails";
  constructor(private http: HttpClient) { }

  getOrderDetails(username: String, address:String,imgUrl:String,product:String,qty:number,price:number ): Observable<Orderinfo[]> {
    this.hitUrl = this.orderurl+"?username="+username+"&address="+address+"&imgUrl="+imgUrl+"&product="+product+"&qty="+qty+"&price="+price;
    console.log(this.hitUrl);
    return this.http.get<Orderinfo[]>(this.hitUrl);
  }
  getConfirmation(username:string): Observable<Orderinfo[]>{
    let hiturl="";
    hiturl=this.orderDetailsurl+"?username="+username;
    return this.http.get<Orderinfo[]>(hiturl);
  }
}
