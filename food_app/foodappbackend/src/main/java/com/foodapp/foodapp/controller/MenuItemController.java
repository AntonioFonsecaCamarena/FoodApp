package com.foodapp.foodapp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.foodapp.foodapp.entity.MenuItem;
import com.foodapp.foodapp.service.MenuItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/menuItem")
@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET,RequestMethod.POST})
public class MenuItemController {

  @Autowired
  private MenuItemService menuItemService;

  @GetMapping(value = "/findMenuItem")
  public ResponseEntity<Optional<MenuItem>> find(long id) {
    Optional<MenuItem> menuItem = menuItemService.get(id);
    if(!menuItem.isEmpty())
      return new ResponseEntity<Optional<MenuItem>>(menuItem, HttpStatus.OK);
    else
      return new ResponseEntity<Optional<MenuItem>>(menuItem, HttpStatus.NO_CONTENT);
  }

  @GetMapping(value = "/list")
  public ResponseEntity<List<MenuItem>> list() {
    List<MenuItem> menuItems = menuItemService.list();
    return new ResponseEntity<List<MenuItem>>(menuItems, HttpStatus.OK);
  }

  @PostMapping(value = "/addMenuItem")
  public ResponseEntity<String> addMenuItem(@RequestBody Map<String, String> menuItem) {
    try{
    menuItemService.create(new MenuItem(null, menuItem.get("name"),menuItem.get("description"), Float.parseFloat(menuItem.get("price")), null));
    return new ResponseEntity<>("MenuItem added!", HttpStatus.OK);}
    catch (Exception e){
      return new ResponseEntity<>(":(", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping(value = "/findByMenuCategory")
  public ResponseEntity<List<MenuItem>> findByMenuCategory(Long menuCategoryId) {
    List<MenuItem> menuItems = new ArrayList<MenuItem>();
    try{
    menuItems = menuItemService.findByMenuCategory(menuCategoryId);
    return new ResponseEntity<>(menuItems, HttpStatus.OK);}
    catch (Exception e){
      return new ResponseEntity<>(menuItems, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping(value = "/deleteMenuItem")
  public ResponseEntity<String> deleteMenuItem(long id) {
    return new ResponseEntity<>("Not implemented yet :P!", HttpStatus.OK);
  }

  @GetMapping(value = "/getMenuItemsbyUser")
  public ResponseEntity<List <MenuItem>> getMenuItemsbyUser(Long id) {
    return new ResponseEntity<List <MenuItem>>(menuItemService.list(), HttpStatus.OK);
  }

}
