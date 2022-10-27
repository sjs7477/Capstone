import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  @Input() addedToWishlist: boolean;

  showDetails =false;
  constructor() { }

  ngOnInit() {

  }

  viewDetails(){
    this.showDetails = true;
  }
  minimizeDetails(){
    this.showDetails = false;
  }

  addToCart(){
    alert(this.productItem.name+" added to cart!!");
  }
}
