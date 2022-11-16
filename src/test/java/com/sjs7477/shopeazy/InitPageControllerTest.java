package com.sjs7477.shopeazy;


import com.sjs7477.shopeazy.Controllers.InitPageController;
import com.sjs7477.shopeazy.Model.initPage;
import com.sjs7477.shopeazy.Model.productList;
import com.sjs7477.shopeazy.repository.initPageRepository;
import com.sjs7477.shopeazy.repository.productListRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class InitPageControllerTest {
@LocalServerPort
    private int port;
@Autowired
    private TestRestTemplate testRestTemplate;
    @MockBean
    initPageRepository initDetailsRepo;
    @MockBean
    private productListRepository productRepo;
    @Autowired
    private InitPageController initPageController;

    // happy path login
@Test
public void loginCheck(){
    String username = "Admin";
   // InitPageController mock = org.mockito.Mockito.mock (InitPageController.class);
    when(initDetailsRepo.findItemByName(username)).thenReturn((initPage) Stream.
            of(new initPage("Admin","1234")).collect(Collectors.toList()));
    assertEquals("1234",initPageController.login(username).getPassword());
}
//public void loginCheck(){
//    String username = "Admin";
//    String password = "1234"
//    assertEquals("Admin",username);
//    assertEquals("1234",password);
//}


    // Test product list attributes

    @Test
    public void viewProductDetailsTest(){
    when(productRepo.findAll()).thenReturn(Stream.
            of(new productList(1,"Books","For reading",22,"ImageUrlhere")).collect(Collectors.toList()));
        assertEquals(1,initPageController.viewProductDetails().size());
    }


}
