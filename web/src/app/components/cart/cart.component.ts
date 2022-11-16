import {Component, Input, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem } from "../../models/cart-item.model";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   user = localStorage.getItem('currentUser');
  @Input() cartItem: any;
  cartItems = [];

  cartTotal = 0;

  constructor(private loginService:LoginService, private router:Router, private cartService:CartService) { }

  ngOnInit() {
    //this.handleSubscription();
    this.loadCartItems();
    this.calcCartTotal();
  }

  //Needs to be fixed
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      console.log(items);
      for(let i=0;i<items.length;i++){
        if(items[i].user ==this.user){
          this.cartItems.push(items[i]);
          // console.log(items[i].user);
          // console.log(this.user);
         // items.pop();
        }
        this.calcCartTotal();
      }
      console.log(this.user);
      // if(items.user==this.user){

      // }
      console.log("Inside");
      console.log(this.cartItems);
    });
  }


  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }
  logOut(){
    this.loginService.setUserName(null);
    this.router.navigateByUrl("/login");
    localStorage.removeItem('currentUser');
  }
}
