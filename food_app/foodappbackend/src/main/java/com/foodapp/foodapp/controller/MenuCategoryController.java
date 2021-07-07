package com.foodapp.foodapp.controller;

// import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.MenuCategory;
// import com.foodapp.foodapp.entity.MenuItem;
import com.foodapp.foodapp.service.MenuCategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/menuCategory")
@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET,RequestMethod.POST})
public class MenuCategoryController {

  @Autowired
  private MenuCategoryService menuCategoryService;

  @GetMapping(value = "/findMenuCategory")
  public ResponseEntity<Optional<MenuCategory>> find(long id) {
    Optional<MenuCategory> menuCategory = menuCategoryService.get(id);
    if(!menuCategory.isEmpty())
      return new ResponseEntity<Optional<MenuCategory>>(menuCategory, HttpStatus.OK);
    else
      return new ResponseEntity<Optional<MenuCategory>>(menuCategory, HttpStatus.NO_CONTENT);
  }

  @GetMapping(value = "/list")
  public ResponseEntity<List<MenuCategory>> list() {
    List<MenuCategory> menuCategorys = menuCategoryService.list();
    if(!menuCategorys.isEmpty())
      return new ResponseEntity<List<MenuCategory>>(menuCategorys, HttpStatus.OK);
    else  
      return new ResponseEntity<List<MenuCategory>>(menuCategorys, HttpStatus.NO_CONTENT);
  }

  // @GetMapping(value = "/addMenuCategory")
  // public ResponseEntity<String> addMenuCategory() {
  //   menuCategoryService.create(new MenuCategory(null, "name", "description", new ArrayList<MenuItem>()));
  //   return new ResponseEntity<>("MenuCategory added!", HttpStatus.OK);
  // }

  @GetMapping(value = "/deleteMenuCategory")
  public ResponseEntity<String> deleteMenuCategory(long id) {
    return new ResponseEntity<>("Not implemented yet :P!", HttpStatus.OK);
  }

  @GetMapping(value ="/getMenuCategoriesbyUser")
  public ResponseEntity<List<MenuCategory>> getMenuCategoriesbyUser (Long userId){
    return new ResponseEntity<List<MenuCategory>>(menuCategoryService.findByUser(), HttpStatus.OK);
  }

}
