package com.foodapp.foodapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.MenuCategory;
import com.foodapp.foodapp.repository.MenuCategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuCategoryService {

    @Autowired
    private MenuCategoryRepository repository;

    public Optional<MenuCategory> get(long id) {
        return repository.findById(id);
    }

    public List<MenuCategory> list() {
        Iterable<MenuCategory> categories = repository.findAll();
        List<MenuCategory> list = new ArrayList<MenuCategory>();
        categories.forEach(list::add);
        return list;
    }

    public MenuCategory create(MenuCategory menuCategory) {
        return repository.save(menuCategory);
    }

    public List<MenuCategory> findByUser() {
        //TODO checar esto
        Iterable<MenuCategory> categories = repository.findAll();
        List<MenuCategory> list = new ArrayList<MenuCategory>();
        categories.forEach(list::add);
        return list;
    }

}
