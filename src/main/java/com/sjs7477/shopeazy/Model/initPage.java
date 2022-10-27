package com.sjs7477.shopeazy.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("logincred")
public class initPage {
        @Id
    private int _id;

        private String user;
        private String password;

    public int get_id() {
        return _id;
    }

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }

    public void set_id(int _id) {
        this._id = _id;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public initPage(int _id, String user, String password){
            super();
        System.out.println("Inside constructor of initPage");
            this._id = _id;
            this.user = user;
            this.password = password;
        }
}
