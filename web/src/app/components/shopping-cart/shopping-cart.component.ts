import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }
  logOut(){
    this.loginService.setUserName(null);
    this.router.navigateByUrl("/login");
    localStorage.removeItem('currentUser');
  }
}
