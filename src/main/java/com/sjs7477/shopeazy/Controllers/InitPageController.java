package com.sjs7477.shopeazy.Controllers;

import com.sjs7477.shopeazy.Model.initPage;
import com.sjs7477.shopeazy.Model.productList;
import com.sjs7477.shopeazy.repository.initPageRepository;
import com.sjs7477.shopeazy.repository.productListRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class InitPageController {
    int id =1;
    @Autowired
    initPageRepository initDetailsRepo;
    @Autowired
    productListRepository productListRepo;
    @RequestMapping({"/login"})
    public initPage login(@RequestParam("username") String username){
       // message = "Admin";
        System.out.println("Entering the Controller");
        initPage details = initDetailsRepo.findItemByName(username);
        //to be changed to be gotten from Service
       //  HelloWorldService helloWorldService = new HelloWorldService();

       // helloWorldService.helloWorld(message);
        System.out.println("Password from DB is "+details.getPassword());
        System.out.println("Leaving the Controller");
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
       // return "Password for "+message+" is "+details.getPassword()+dtf.format(now);
        return details;
    }

    @RequestMapping({"/register"})
    public String register(@RequestParam("username") String username, @RequestParam("password") String password){
        System.out.println("Entered the method");
        initPage details = initDetailsRepo.findItemByName(username);
        String jsonString;
        if(details==null){
            jsonString = new JSONObject().toString();
            initDetailsRepo.insert(new initPage(id++,username,password));
        }
        else{
            jsonString = new JSONObject().put("user",details.getUser()).put("password",details.getPassword()).toString();
        }
        System.out.println("Created the record!!");
        System.out.println("jsonString "+jsonString);
        return jsonString;
    }

    @RequestMapping({"/productList"})
    public List<productList> viewProductDetails(){
        List<productList> prodDetails =  productListRepo.findAll();
        return prodDetails;
    }

}

