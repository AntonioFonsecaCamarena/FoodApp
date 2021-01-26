package com.foodapp.foodapp.repository;

import com.foodapp.foodapp.entity.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  UserRepository  extends CrudRepository<User, Long>{
    
}
