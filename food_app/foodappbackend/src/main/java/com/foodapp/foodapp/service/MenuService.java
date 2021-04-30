package com.foodapp.foodapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.Menu;
import com.foodapp.foodapp.repository.MenuRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuService {

    @Autowired
    private MenuRepository repository;

    public Optional<Menu> get(long id) {
        return repository.findById(id);
    }

    public List<Menu> list() {
        Iterable<Menu> menus = repository.findAll();
        List<Menu> list = new ArrayList<Menu>();
        menus.forEach(list::add);
        return list;
    }

    public List<Menu> findByUserId(long userId){
        return repository.findByUserId(userId);
    }

    // public MenuItem create(Menu menu) {
    //     return repository.save(menu);
    // }

}
