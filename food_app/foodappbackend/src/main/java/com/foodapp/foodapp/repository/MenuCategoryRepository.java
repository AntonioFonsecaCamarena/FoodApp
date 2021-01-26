package com.foodapp.foodapp.repository;

import com.foodapp.foodapp.entity.MenuCategory;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  MenuCategoryRepository  extends CrudRepository<MenuCategory, Long>{
    
}
