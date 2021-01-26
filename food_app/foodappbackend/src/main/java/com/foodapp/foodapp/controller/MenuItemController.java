package com.foodapp.foodapp.controller;

import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.MenuItem;
import com.foodapp.foodapp.service.MenuItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/menuItem")
public class MenuItemController {

  @Autowired
  private MenuItemService menuItemService;

  @GetMapping(value = "/findMenuItem")
  public ResponseEntity<Optional<MenuItem>> find(long id) {
    Optional<MenuItem> menuItem = menuItemService.get(id);
    return new ResponseEntity<Optional<MenuItem>>(menuItem, HttpStatus.OK);
  }

  @GetMapping(value = "/list")
  public ResponseEntity<List<MenuItem>> list() {
    List<MenuItem> menuItems = menuItemService.list();
    return new ResponseEntity<List<MenuItem>>(menuItems, HttpStatus.OK);
  }

  @GetMapping(value = "/addMenuItem")
  public ResponseEntity<String> addMenuItem() {
    menuItemService.create(new MenuItem(null, "name","description", (float) 100, "category?", 0));
    return new ResponseEntity<>("MenuItem added!", HttpStatus.OK);
  }

  @GetMapping(value = "/deleteMenuItem")
  public ResponseEntity<String> deleteMenuItem(long id) {
    return new ResponseEntity<>("Not implemented yet :P!", HttpStatus.OK);
  }

}
