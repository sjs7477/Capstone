package com.sjs7477.shopeazy.repository;

import com.sjs7477.shopeazy.Model.initPage;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface initPageRepository extends MongoRepository<initPage,String> {
    @Query("{user: '?0'}")
    initPage findItemByName(String user);
}
