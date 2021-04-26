package com.foodapp.foodapp.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItem {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private float price;
    @JsonIgnore
    @ManyToOne( fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_menuCategory", nullable = false, updatable = false)
    private MenuCategory menuCategory;

    public MenuItem (String name, String description, float price, MenuCategory menuCategory){
        this.name = name;
        this.description = description;
        this.price = price;
        this.menuCategory = menuCategory;
    }

}
