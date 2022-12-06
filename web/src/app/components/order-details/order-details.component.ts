import {Component, Input, OnInit} from '@angular/core';
import {OrderinfoService} from "../../services/orderinfo.service";
import {Orderinfo} from "../../models/orderinfo.model";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() order: any;
  username:string = localStorage.getItem("currentUser");
  confirmList:Orderinfo[] = [];
  total:number;
  calcDate:string;
  constructor(private orderService:OrderinfoService, private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    this.getConfirmationDetails(this.username);
  }
  getConfirmationDetails(username:string){
    this.orderService.getConfirmation(username).subscribe((details)=>{
      console.log(details);
      this.confirmList = details;
      this.calcTotal();
    });
  }
  calcTotal() {
    this.total = 0;
    this.confirmList.forEach(item => {
      this.total += (item.qty * item.price);
    });
  }
  // checkCancellation(){
  //   let curDate = +new Date();
  //   let calcDate = +new Date(this.order.orderDate);
  //   console.log(curDate-calcDate);
  // }
  logOut(){
    this.loginService.setUserName(null);
    this.router.navigateByUrl("/login");
    localStorage.removeItem('currentUser');
  }

}
