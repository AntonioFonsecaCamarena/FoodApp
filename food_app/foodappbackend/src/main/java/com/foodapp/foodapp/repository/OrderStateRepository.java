package com.foodapp.foodapp.repository;

import com.foodapp.foodapp.entity.OrderState;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  OrderStateRepository  extends CrudRepository<OrderState, Long>{
    
}
