package com.foodapp.foodapp.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="orders") //Orders is a reserverd work on most DB engines.
public class Order {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @OneToMany
    private List<MenuItem> item;
    @OneToOne
    private User requester;
    private Date requestTime;
    private Date deliveryTime;
    private String comments;
    @OneToOne
    private OrderState state;

}
