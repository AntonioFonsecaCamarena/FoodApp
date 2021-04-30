package com.foodapp.foodapp.repository;

import java.util.List;

import com.foodapp.foodapp.entity.Menu;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends CrudRepository<Menu, Long> {

    public List<Menu> findByUserId(Long userId);

}
