package com.sjs7477.shopeazy.Model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("orderDetails")
public class OrderDetails {
   private String username;
   private String address;
   private String uniqueId;
   private String imgUrl;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    private String itemName;
   private int qty;
   private int price;
  private String orderDate;

  public OrderDetails(String username,String address, String uniqueId, String imgUrl, String itemName, int qty, int price, String orderDate){
      this.username = username;
      this.address = address;
      this.imgUrl = imgUrl;
      this.uniqueId = uniqueId;
      this.itemName = itemName;
      this.qty = qty;
      this.price = price;
      this.orderDate = orderDate;
  }
}
