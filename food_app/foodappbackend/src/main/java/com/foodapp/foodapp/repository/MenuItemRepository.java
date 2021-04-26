package com.foodapp.foodapp.repository;

import java.util.List;

import com.foodapp.foodapp.entity.MenuItem;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  MenuItemRepository  extends CrudRepository<MenuItem, Long>{

    public List<MenuItem> findByMenuCategoryId(Long id);
    
}
