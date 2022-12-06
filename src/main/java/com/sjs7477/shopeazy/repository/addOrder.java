package com.sjs7477.shopeazy.repository;

import com.sjs7477.shopeazy.Model.OrderDetails;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface addOrder extends MongoRepository<OrderDetails,String> {
    @Query("{username: '?0'}")
    List<OrderDetails> findItemByName(String username);
}
