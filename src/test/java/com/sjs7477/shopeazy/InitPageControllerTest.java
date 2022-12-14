package com.sjs7477.shopeazy;


import com.sjs7477.shopeazy.Controllers.InitPageController;
import com.sjs7477.shopeazy.Model.cart;
import com.sjs7477.shopeazy.Model.initPage;
import com.sjs7477.shopeazy.Model.productList;
import com.sjs7477.shopeazy.repository.addToCartRepository;
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
import static org.mockito.Mockito.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class InitPageControllerTest {
@LocalServerPort
    private int port;
@Autowired
    private TestRestTemplate testRestTemplate;
    @MockBean
    addToCartRepository cartRepo;
    @MockBean
    private productListRepository productRepo;
    @Autowired
    private InitPageController initPageController;

    // Test product list attributes

    @Test
    public void viewProductDetailsTest(){
    when(productRepo.findAll()).thenReturn(Stream.
            of(new productList(1,"Books","For reading",22,"ImageUrlhere")).collect(Collectors.toList()));
        assertEquals(1,initPageController.viewProductDetails().size());
    }

    @Test
    public void viewCartDetailsTest(){
        when(cartRepo.findAll()).thenReturn(Stream.of(new cart("user","product",3,2.5,"imageUrl")).collect(Collectors.toList()));
        assertEquals(1,initPageController.viewCartDetails().size());
    }
@Test
    public void deleteCartItemTestHappy(){
        String username = "user1";
        String product = "product1";
        initPageController.deleteCartItem(username,product);
        verify(cartRepo,times(1)).deleteByUserAndProduct(username,product);
}

    @Test
    public void deleteCartItemTestFailure(){
        String username = "user1";
        String product = "product1";
       // initPageController.deleteCartItem(username,product);
        verify(cartRepo,times(0)).deleteByUserAndProduct(username,product);
    }

}
