package com.foodapp.foodapp.controller;

import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.Menu;
import com.foodapp.foodapp.service.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/menu")
@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET,RequestMethod.POST})
public class MenuController {

  @Autowired
  private MenuService menuService;

  @GetMapping(value = "/find")
  public ResponseEntity<Optional<Menu>> find(Long id) {
    Optional<Menu> menu = menuService.get(id);
    return new ResponseEntity<Optional<Menu>>(menu, HttpStatus.OK);
  }

  @GetMapping(value = "/list")
  public ResponseEntity<List<Menu>> list() {
    List<Menu> menus = menuService.list();
    return new ResponseEntity<List<Menu>>(menus, HttpStatus.OK);
  }

  
  @GetMapping(value = "/findByUserId")
  public ResponseEntity<List<Menu>> findByUserId(long userId) {
    List<Menu> menus = menuService.findByUserId(userId);
    return new ResponseEntity<List<Menu>>(menus, HttpStatus.OK);
  }

  // @GetMapping(value = "/addOrder")
  // public ResponseEntity<String> addOrder() {
  // //orderService.create(new Order(null, new ArrayList<>(), new User(null,
  // "name", "lastName", "email", "psw"), new Date(), new Date(), "comment", new
  // OrderState(null, "description")));
  // orderService.create(new Order(null, new ArrayList<>(),null, new Date(), new
  // Date(), "comment", null));
  // return new ResponseEntity<>("Order added!", HttpStatus.OK);
  // }

  // @GetMapping(value = "/deleteOrder")
  // public ResponseEntity<String> deleteOrder(long id) {
  // return new ResponseEntity<>("Not implemented yet :P!", HttpStatus.OK);
  // }

}
