package com.foodapp.foodapp.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    // @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    // @JoinColumn(name = "fk_menuCategory", nullable = false, updatable = false)
    private Set<MenuItem> menuItems;

    @ManyToOne
    @JsonIgnore
    private User user;

    public Menu(String name, String description, Set<MenuItem> menuItems, User user) {
        this.name = name;
        this.description = description;
        this.menuItems = menuItems;
        this.user = user;
    }

}
