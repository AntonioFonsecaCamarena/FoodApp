package com.foodapp.foodapp.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.Order;
import com.foodapp.foodapp.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/order")
public class OrderController {

  @Autowired
  private OrderService orderService;

  @GetMapping(value = "/findOrder")
  public ResponseEntity<Optional<Order>> find(long id) {
    Optional<Order> order = orderService.get(id);
    return new ResponseEntity<Optional<Order>>(order, HttpStatus.OK);
  }

  @GetMapping(value = "/list")
  public ResponseEntity<List<Order>> list() {
    List<Order> orders = orderService.list();
    return new ResponseEntity<List<Order>>(orders, HttpStatus.OK);
  }

  @GetMapping(value = "/addOrder")
  public ResponseEntity<String> addOrder() {
    //orderService.create(new Order(null, new ArrayList<>(), new User(null, "name", "lastName", "email", "psw"), new Date(), new Date(), "comment", new OrderState(null, "description")));
    orderService.create(new Order(null, new ArrayList<>(),null, new Date(), new Date(), "comment", null));
    return new ResponseEntity<>("Order added!", HttpStatus.OK);
  }

  @GetMapping(value = "/deleteOrder")
  public ResponseEntity<String> deleteOrder(long id) {
    return new ResponseEntity<>("Not implemented yet :P!", HttpStatus.OK);
  }

}
