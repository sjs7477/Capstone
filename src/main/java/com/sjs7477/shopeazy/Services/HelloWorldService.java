package com.sjs7477.shopeazy.Services;

import com.sjs7477.shopeazy.DAO.HelloWorldDAO;
import org.springframework.stereotype.Service;

@Service
public class HelloWorldService {
    public String helloWorld(String message){
        System.out.println("Entering the Service");
        // to be changed to be gotten from DAO
        HelloWorldDAO helloWorldDAO = new HelloWorldDAO();
       helloWorldDAO.getPasswordItemByName(message);
        System.out.println("Leaving the Service");
        return message;
    }
}
