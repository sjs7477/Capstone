package com.sjs7477.shopeazy.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("CartCollection")
public class cart {

    private String user;
    private String product;

    private int qty;

    private double price;

    String imgUrl;


    public String getUser() {
        return user;
    }

    public String getProduct() {
        return product;
    }

    public int getQty() {
        return qty;
    }

    public Double getPrice(){return price;}

    public String getImgUrl(){return imgUrl;}


    public void setUser(String user) {
        this.user = user;
    }

    public void setProduct(String password) {
        this.product = product;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setImgUrl(String imgUrl){this.imgUrl = imgUrl;}

    public cart(String user, String product, int qty, Double price, String imgUrl){
        super();
        System.out.println("Inside constructor of cart");
        this.user = user;
        this.product = product;
        this.qty = qty;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}
