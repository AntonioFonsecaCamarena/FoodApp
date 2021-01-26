package com.foodapp.foodapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.OrderState;
import com.foodapp.foodapp.repository.OrderStateRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderStateService {

    @Autowired
    private OrderStateRepository repository;

    public Optional<OrderState> get(long id) {
        return repository.findById(id);
    }

    public List<OrderState> list() {
        Iterable<OrderState> orderStates = repository.findAll();
        List<OrderState> list = new ArrayList<OrderState>();
        orderStates.forEach(list::add);
        return list;
    }

    public OrderState create(OrderState orderState) {
        return repository.save(orderState);
    }

}
