import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {CartComponent} from "../cart/cart.component";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart-item.model";
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {OrderinfoService} from "../../services/orderinfo.service";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm:FormGroup;
  model: any = {}
  user = localStorage.getItem('currentUser');
  cartItems = [];
  cartItemLength =0;
  cartTotal = 0;
  constructor(private loginService:LoginService, private router:Router, private cartService:CartService, private builder: FormBuilder,private orderService:OrderinfoService) { }

  ngOnInit() {
    this.buildForm();
    this.loadCartItems();
    this.calcCartTotal();
  }
  buildForm(){
    this.checkoutForm = this.builder.group({
      fname: ['', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      addr: ['', [Validators.required]],
      cardname: ['', [Validators.required]],
      city: ['', [Validators.required]],
      cardnum: ['', [Validators.required, Validators.pattern(/^(0|[1-9]\d*){16}$/)]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*){3}$/)]],
      expyr: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*){4}$/)]],
      expmonth: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*){2}$/)]]
    })
  }
  logOut(){
    this.loginService.setUserName(null);
    this.router.navigateByUrl("/login");
    localStorage.removeItem('currentUser');
  }
  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      console.log(items);
      for(let i=0;i<items.length;i++){
        if(items[i].user ==this.user){
          this.cartItems.push(items[i]);
        }
        this.calcCartTotal();
        console.log(this.cartItems);
      }
    });
  }


  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
    this.cartItemLength = this.cartItems.length;
  }

  submitOrder(){
    for(let i=0;i<this.cartItems.length;i++) {
      this.orderService.getOrderDetails(this.user, this.model.addr,this.cartItems[i].imgUrl,this.cartItems[i].product,this.cartItems[i].qty,this.cartItems[i].price).subscribe();
    }
    this.router.navigateByUrl("/orders");
  }

}
