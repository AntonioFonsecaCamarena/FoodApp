package com.foodapp.foodapp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.MenuCategory;
import com.foodapp.foodapp.entity.MenuItem;
import com.foodapp.foodapp.service.MenuCategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/menuCategory")
public class MenuCategoryController {

  @Autowired
  private MenuCategoryService menuCategoryService;

  @GetMapping(value = "/findMenuCategory")
  public ResponseEntity<Optional<MenuCategory>> find(long id) {
    Optional<MenuCategory> menuCategory = menuCategoryService.get(id);
    return new ResponseEntity<Optional<MenuCategory>>(menuCategory, HttpStatus.OK);
  }

  @GetMapping(value = "/list")
  public ResponseEntity<List<MenuCategory>> list() {
    List<MenuCategory> menuCategorys = menuCategoryService.list();
    return new ResponseEntity<List<MenuCategory>>(menuCategorys, HttpStatus.OK);
  }

  @GetMapping(value = "/addMenuCategory")
  public ResponseEntity<String> addMenuCategory() {
    menuCategoryService.create(new MenuCategory(null, "name", "description", new ArrayList<MenuItem>()));
    return new ResponseEntity<>("MenuCategory added!", HttpStatus.OK);
  }

  @GetMapping(value = "/deleteMenuCategory")
  public ResponseEntity<String> deleteMenuCategory(long id) {
    return new ResponseEntity<>("Not implemented yet :P!", HttpStatus.OK);
  }

}
