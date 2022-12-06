export class Orderinfo {
    username:string
    address:string
    uniqueId:string
    imgUrl:string
    itemName:string
    qty:number
    price:number
    orderDate:string

    constructor(username,address,uniqueId,imgUrl,itemName,qty,price,orderDate){
        this.username = username;
        this.address = address;
        this.uniqueId = uniqueId;
        this.imgUrl = imgUrl;
        this.itemName = itemName;
        this.orderDate = orderDate;
        this.qty = qty;
        this.price = price;
    }
}
