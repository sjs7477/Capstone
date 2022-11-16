import {Product} from "./product";

export class CartItem {
    id: number;
    user: string;
    productName: string;
    qty: number;
    price: number;

    constructor(id: number, product: Product, qty = 1,username:string) {
        this.id = id;
        this.productName = product.name;
        this.price = product.price;
        this.qty = qty;
        this.user = username;
    }
}
