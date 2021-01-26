package com.foodapp.foodapp.repository;

import com.foodapp.foodapp.entity.Order;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  OrderRepository  extends CrudRepository<Order, Long>{
    
}
