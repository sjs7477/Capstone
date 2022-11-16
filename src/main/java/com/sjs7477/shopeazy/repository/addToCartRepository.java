package com.sjs7477.shopeazy.repository;

import com.mongodb.client.result.UpdateResult;
import com.sjs7477.shopeazy.Model.cart;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface addToCartRepository extends MongoRepository<cart, String> {
    @Query("{user: '?0', product: '?1'}")
    List<cart> findBy(String user, String product);
    void deleteByUserAndProduct(String user, String product);

}
