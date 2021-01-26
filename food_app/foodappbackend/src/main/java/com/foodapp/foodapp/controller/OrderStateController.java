package com.foodapp.foodapp.controller;

import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.OrderState;
import com.foodapp.foodapp.service.OrderStateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/orderState")
public class OrderStateController {

  @Autowired
  private OrderStateService orderStateService;

  @GetMapping(value = "/findOrderState")
  public ResponseEntity<Optional<OrderState>> find(long id) {
    Optional<OrderState> orderState = orderStateService.get(id);
    return new ResponseEntity<Optional<OrderState>>(orderState, HttpStatus.OK);
  }

  @GetMapping(value = "/list")
  public ResponseEntity<List<OrderState>> list() {
    List<OrderState> orderStates = orderStateService.list();
    return new ResponseEntity<List<OrderState>>(orderStates, HttpStatus.OK);
  }

  @GetMapping(value = "/addOrderState")
  public ResponseEntity<String> addOrderState() {
    orderStateService.create(new OrderState(null, "description"));
    return new ResponseEntity<>("OrderState added!", HttpStatus.OK);
  }

  @GetMapping(value = "/deleteOrderState")
  public ResponseEntity<String> deleteOrderState(long id) {
    return new ResponseEntity<>("Not implemented yet :P!", HttpStatus.OK);
  }

}
