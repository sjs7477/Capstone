package com.sjs7477.shopeazy;


import com.sjs7477.shopeazy.Model.initPage;
import com.sjs7477.shopeazy.repository.initPageRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class InitPageControllerTest {
@LocalServerPort
    private int port;
@Autowired
    private TestRestTemplate testRestTemplate;
    @Autowired
    initPageRepository initDetailsRepo;
    // happy path login
@Test
public void loginCheck(){
    String username = "Admin";
    initPage details = initDetailsRepo.findItemByName(username);
    String password = details.getPassword();
    assertEquals("1234",password);
}
//failure path login
    @Test
    public void loginCheck_2(){
        String username = "Admin";
        initPage details = initDetailsRepo.findItemByName(username);
        String password = details.getPassword();
        assertNotEquals("12345",password);
    }

    // Test product list attributes

    


}
