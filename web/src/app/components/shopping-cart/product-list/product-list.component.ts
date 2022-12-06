import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

   productList: Product[] = [];
     // [{"id":1001,"name":"Men's Round Neck Half Sleeve T-Shirt","description":"Solid colors are 100% Airlume combed and ring-spun cotton. Shoulder to shoulder taping. Fabric weight: 4.2oz/yd. Tear away label. The prism colors are 99% combed and ring spun cotton.",
//
//     "price":15,"imageUrl":"https://m.media-amazon.com/images/I/61H+2saNeTL._UX679_.jpg"},
//
//
//
//     {"id":1002,"name":"Wedgie's straight fit Jean","description":"This vintage-inspired style includes special construction to highlight your curves and give your butt an extra lift. Trust us, you need this jean in your closet. The cheekiest jeans in your closet. Inspired by vintage Levi's® jeans. Designed with a special construction to lift and flatter your backside. Made with a classic straight leg",
//       "price":64.98,"imageUrl":"https://m.media-amazon.com/images/I/719aiQEI7kL._AC_UX679_.jpg"},
//
//     {"id":1003,"name":"Hooded Fleece Jacket","description":"Simple Joys by Carter's Toddler Boys' Hooded Fleece Jacket with Sherpa Lining. 100% Cotton and can be rinsed and washed. Available in many sizes and is washer friendly. Colors are steam dyed and will not come off. No return policy on this product","price":16,"imageUrl":"https://m.media-amazon.com/images/I/912doBcTIfL._AC_UY879_.jpg"}
//       ,
//
//     {"id":1004,"name":"Samsung 65 inch LED TV","description":"Whatever you watch, the Quantum Processor 4K transforms it to 4K with machine learning-based AI. Action movies, sports and games look fluid up to 4K 120Hz with Motion Xcelerator Turbo. See bold detail delivered by dedicated warm and cool Dual LED backlights that adjust in real time. Enjoy vivid, lifelike color, regardless of brightness from 100% Color Volume* with Quantum Dot. Go beyond HDTV with Quantum HDR that delivers a vivid spectrum of color and contrast to your Smart TV. Just ask Alexa, Google Assistant or Bixby to open your apps, change channels, control smart home devices and more","price":947.99,"imageUrl":"https://m.media-amazon.com/images/I/81fWbLbFP7L._AC_SX679_.jpg"},
//
//
//     {"id":1005,"name":"Arlo indoor camera home facility","description":"Simple to set up, easy to connect - Plug the home camera to any outlet indoors, and utilize the wifi camera features by connecting directly to Wi-Fi without a hub. Smarter alerts, quicker action - With an Arlo Secure plan, receive notifications for people, vehicles, and packages, dial emergency response or phone a friend right from your mobile device. Security with privacy for every room – Place the video camera on a shelf or mount to a wall with the included wall mount to find the perfect spot for your camera. Ward off unwanted guests - Deter intruders by triggering the built-in siren automatically, or manually from the Arlo app to improve your home and apartment security","price":97.5,"imageUrl":"https://m.media-amazon.com/images/I/618Vpx36NdL._AC_SX679_.jpg"},
//
//     {"id":1006,"name":"Apple IPAD air 5th Gen","description":"10.9-inch Liquid Retina display with True Tone, P3 wide color, and an antireflective coating. Apple M1 chip with Neural Engine. 12MP Wide camera. 12MP Ultra Wide front camera with Center Stage. Up to 256GB of storage. Available in blue, purple, pink, starlight, and space gray","price":519,"imageUrl":"https://m.media-amazon.com/images/I/61XZQXFQeVL.__AC_SY445_SX342_QL70_FMwebp_.jpg"},
//
//     {"id":1007,"name":"King Koil luxury air mattress","description":"King Koil is LUXURY! Factory 1-year warranty provided by the manufacturer included in your purchase! - King Koil enhanced queen airbed technology with a - soft flocking layer and a built-in pillow. Built for maximum comfort - we stand behind our quality & warranty! warranty details in packaging and with airbed purchase. Extra thick durable waterproof comfort quilt top with extra spinal support - firm mattress provides good sleeping posture - sueded top keeps bedding in place. The built-in pump features separate inflate and deflate knobs for simple and fast inflation.","price":117.25,"imageUrl":"https://m.media-amazon.com/images/I/71PSr9wCcnL._AC_SX679_.jpg"},
//   ];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
     this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      console.log(products);
      this.productList = products;
    })
  }
}
