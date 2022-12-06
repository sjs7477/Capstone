import { Component, OnInit, Input } from '@angular/core';
import {CartComponent} from "../cart.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;
  constructor(private cartcomponent:CartComponent, private http:HttpClient) { }

  ngOnInit() {
  }

  deleteItem(){
      let userUrl = "http://localhost:8080/deleteCartItem?";
      this.http.get(userUrl+"username="+this.cartItem.user+"&product="+this.cartItem.product).subscribe();
      this.cartcomponent.ngOnInit();
      window.location.reload();
  }

  updateTotal(){
      if(this.cartItem.qty >0){
    this.cartcomponent.calcCartTotal();
    let userUrl = "http://localhost:8080/updateItem?";
      this.http.get(userUrl+"username="+this.cartItem.user+"&product="+this.cartItem.product+"&qty="+this.cartItem.qty).subscribe();
      window.location.reload();
      }
      else{
          window.location.reload();
          alert("Please enter a valid quantity");
      }
  }

}
