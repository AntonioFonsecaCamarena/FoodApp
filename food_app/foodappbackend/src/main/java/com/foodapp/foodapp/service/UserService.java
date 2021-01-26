package com.foodapp.foodapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.User;
import com.foodapp.foodapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public Optional<User> get(long id) {
        return repository.findById(id);
    }

    public List<User> list() {
        Iterable<User> users = repository.findAll();
        List<User> list = new ArrayList<User>();
        users.forEach(list::add);
        return list;
    }

    public User create(User user) {
        return repository.save(user);
    }

}
