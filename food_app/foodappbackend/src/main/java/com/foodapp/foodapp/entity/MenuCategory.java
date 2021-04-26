package com.foodapp.foodapp.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuCategory {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String name;    
    private String description;
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "menuCategory", fetch = FetchType.LAZY)
    private List<MenuItem> menuItems;

    public MenuCategory(String name, String description){
        this.name = name;
        this.description = description;
        this.menuItems = new ArrayList<MenuItem>();
    }

}
