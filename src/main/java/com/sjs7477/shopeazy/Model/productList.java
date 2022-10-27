package com.sjs7477.shopeazy.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("productlist")
public class productList {
    @Id
    private int _id;

    private String name;
    private String description;
    private int price;
    private String imageUrl;

    public int get_id() {
        return _id;
    }

    public void set_id(int _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public productList(int _id,String name, String description, int price, String imageUrl){
            super();
            this._id = _id;
            this.name = name;
            this.description = description;
            this.price = price;
            this.imageUrl = imageUrl;
    }

}
