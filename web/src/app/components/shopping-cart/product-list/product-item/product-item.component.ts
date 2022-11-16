import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  usersUrl: string;
  @Input() productItem: Product;

  @Input() addedToWishlist: boolean;

  showDetails =false;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/addTocart?';
  }

  ngOnInit() {

  }

  viewDetails(){
    this.showDetails = true;
  }
  minimizeDetails(){
    this.showDetails = false;
  }

  addToCart() {
    this.http.get(this.usersUrl+"username="+localStorage.getItem('currentUser')+"&product="+this.productItem.name
        +"&qty="+1+"&price="+this.productItem.price+"&imgUrl="+this.productItem.imageUrl)
        .subscribe(data => {
          if (Object.keys(data).length != 0) {
            alert( this.productItem.name +" already present in cart!!");
          }
          else{
            alert(this.productItem.name+" added to cart");
          }
        }, err=>console.log(err));
  }
}
