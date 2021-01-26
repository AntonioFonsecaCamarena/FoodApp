package com.foodapp.foodapp.controller;

import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.User;
import com.foodapp.foodapp.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/user")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping(value = "/findUser")
  public ResponseEntity<Optional<User>> find(long id) {
    Optional<User> user = userService.get(id);
    return new ResponseEntity<Optional<User>>(user, HttpStatus.OK);
  }

  @GetMapping(value = "/list")
  public ResponseEntity<List<User>> list() {
    List<User> users = userService.list();
    return new ResponseEntity<List<User>>(users, HttpStatus.OK);
  }

  @GetMapping(value = "/addUser")
  public ResponseEntity<String> addUser() {
    userService.create(new User(null, "name", "lastName", "email", "psw"));
    return new ResponseEntity<>("User added!", HttpStatus.OK);
  }

  @GetMapping(value = "/deleteUser")
  public ResponseEntity<String> deleteUser(long id) {
    return new ResponseEntity<>("Not implemented yet :P!", HttpStatus.OK);
  }

}
