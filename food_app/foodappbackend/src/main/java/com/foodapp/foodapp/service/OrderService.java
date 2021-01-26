package com.foodapp.foodapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.foodapp.foodapp.entity.Order;
import com.foodapp.foodapp.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    public Optional<Order> get(long id) {
        return repository.findById(id);
    }

    public List<Order> list() {
        Iterable<Order> orders = repository.findAll();
        List<Order> list = new ArrayList<Order>();
        orders.forEach(list::add);
        return list;
    }

    public Order create(Order order) {
        return repository.save(order);
    }

}
