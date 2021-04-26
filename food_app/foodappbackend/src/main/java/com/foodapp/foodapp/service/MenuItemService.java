package com.foodapp.foodapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.MenuItem;
import com.foodapp.foodapp.repository.MenuItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuItemService {

    @Autowired
    private MenuItemRepository repository;

    public Optional<MenuItem> get(long id) {
        return repository.findById(id);
    }

    public List<MenuItem> list() {
        Iterable<MenuItem> menuItems = repository.findAll();
        List<MenuItem> list = new ArrayList<MenuItem>();
        menuItems.forEach(list::add);
        return list;
    }

    public List<MenuItem> findByMenuCategory(Long menuCategoryId){
        return repository.findByMenuCategoryId(menuCategoryId);
    }

    public MenuItem create(MenuItem menuItem) {
        return repository.save(menuItem);
    }

}
