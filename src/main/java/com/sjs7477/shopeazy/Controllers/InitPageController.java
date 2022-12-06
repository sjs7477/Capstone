package com.sjs7477.shopeazy.Controllers;

import com.mongodb.client.result.UpdateResult;
import com.sjs7477.shopeazy.Model.OrderDetails;
import com.sjs7477.shopeazy.Model.initPage;
import com.sjs7477.shopeazy.Model.cart;
import com.sjs7477.shopeazy.Model.productList;
import com.sjs7477.shopeazy.repository.addOrder;
import com.sjs7477.shopeazy.repository.addToCartRepository;
import com.sjs7477.shopeazy.repository.initPageRepository;
import com.sjs7477.shopeazy.repository.productListRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
public class InitPageController {
    @Autowired
    initPageRepository initDetailsRepo;
    @Autowired
    productListRepository productListRepo;
    @Autowired
    addToCartRepository cartRepo;

    @Autowired
    addOrder orderRepo;
    @Autowired
    MongoTemplate mongoTemplate;
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
            initDetailsRepo.insert(new initPage(username,password));
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

    @RequestMapping({"/addTocart"})
    public List<cart> addToCart(@RequestParam("username") String username, @RequestParam("product") String product,
                                @RequestParam("qty") int qty, @RequestParam("price") Double price, @RequestParam("imgUrl") String imgUrl){
        System.out.println("Entered the method addToCart");
        List<cart> details = cartRepo.findBy(username,product);
//        String jsonString;

        if(details.isEmpty()){
            System.out.println("details");
            cartRepo.insert(new cart(username,product,qty,price,imgUrl));
        }
        System.out.println("Created the record!!");
        System.out.println("details is "+details);
       // System.out.println("jsonString "+jsonString);
        return details;
    }

    @RequestMapping({"/addOrder"})
    public void addOrder(@RequestParam("username") String username, @RequestParam("address") String address,
                         @RequestParam("imgUrl") String imgUrl,@RequestParam("product") String product,@RequestParam("qty") int qty,@RequestParam("price") int price ){
        String uniqueID = UUID.randomUUID().toString();
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date date = new Date();
        System.out.println("Entered the method addOrder");
        orderRepo.insert(new OrderDetails(username,address,uniqueID,imgUrl,product,qty,price,formatter.format(date)));
    }

    @RequestMapping({"/cartList"})
    public List<cart> viewCartDetails(){
        List<cart> cartDetails =  cartRepo.findAll();
        return cartDetails;
    }
    @RequestMapping({"/deleteCartItem"})
    public void deleteCartItem(@RequestParam("username") String username, @RequestParam("product") String product){
        System.out.println("Inside deleteCartItem controller");
        cartRepo.deleteByUserAndProduct(username,product);
    }
    @RequestMapping({"/updateItem"})
    public void updateCartItem(@RequestParam("username") String username, @RequestParam("product") String product, @RequestParam("qty") int qty){
            org.springframework.data.mongodb.core.query.Query query = new Query(Criteria.where("user").is(username).and("product").is(product));
            Update update = new Update();
            update.set("qty",qty);
            UpdateResult result = mongoTemplate.updateFirst(query,update,cart.class);
            System.out.println(result);
    }

    @RequestMapping({"/orderDetails"})
    public  List<OrderDetails> viewOrderDetails(@RequestParam("username") String username){
        List<OrderDetails> details = orderRepo.findItemByName(username);
        System.out.println(details);
        return details;
    }


}

