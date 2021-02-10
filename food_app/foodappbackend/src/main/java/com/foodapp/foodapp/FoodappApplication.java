package com.foodapp.foodapp;

import java.util.ArrayList;
import java.util.List;

import com.foodapp.foodapp.entity.MenuCategory;
import com.foodapp.foodapp.entity.MenuItem;
import com.foodapp.foodapp.entity.User;
import com.foodapp.foodapp.repository.MenuCategoryRepository;
import com.foodapp.foodapp.repository.MenuItemRepository;
import com.foodapp.foodapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FoodappApplication implements CommandLineRunner {
	
	@Autowired
	UserRepository userRepo;
	@Autowired
	MenuCategoryRepository menuCategoryRepo;
	@Autowired
	MenuItemRepository menuItemRepo;

	public static void main(String[] args) {
		SpringApplication.run(FoodappApplication.class, args);
	}

	@Override
	public void run (String... args) throws Exception {

		//Create and Save default Users
		userRepo.save(new User(null, "Jose Antonio", "Fonseca Camarena", "tonybaang@gmail.com", "123456"));
		userRepo.save(new User(null, "Mariana", "Ochoa", "mariocho@gmail.com", "123456"));
		userRepo.save(new User(null, "Tigre Toño", "Kellogs", "tonytigger@kellogs.com", "esRiquisimo"));
		userRepo.save(new User(null, "Ash", "Ketchum", "catchem@all.com", "missigno"));
		userRepo.save(new User(null, "Britney", "Spears", "b.spears@hotmail.com", "oopsIdiditagain"));

		//Create and Save  default Category Menus
		List<MenuItem> ensaladasItems = new ArrayList<MenuItem>();
		ensaladasItems.add(menuItemRepo.save(new MenuItem(null, "Ensalada Caesar", "Ensalada con lechuga, tomate y pollo a la plancha.", 90, null)));
		ensaladasItems.add(menuItemRepo.save(new MenuItem(null, "Ensalada Griega", "Si eres fan de las ensaladas saludables y también te encanta la pasta, no dejes pasar esta ensalada griega con pasta.", 95, null)));
		ensaladasItems.add(menuItemRepo.save(new MenuItem(null, "Ensalada Quinoa", "Las ensaladas son platillos ideales, pues pueden componerse de diversos ingredientes y prepararse de muchas maneras.", 100, null)));
		menuCategoryRepo.save(new MenuCategory(null, "Ensaladas", "Sigue tu dieta con las mejores ensaladas.", ensaladasItems ));

		
		List<MenuItem> bebidasItems = new ArrayList<MenuItem>();
		bebidasItems.add(menuItemRepo.save(new MenuItem(null, "Coca Cola 355ml", "Refresco en botella de vidrio frio o al tiempo.", 25, null)));
		bebidasItems.add(menuItemRepo.save(new MenuItem(null, "Pepsi 355ml", "Refresco en botella de vidrio frio o al tiempo.", 25, null)));
		bebidasItems.add(menuItemRepo.save(new MenuItem(null, "Agua de Orchata", "Agua de orchata hecha al dia azucarada.", 25, null)));
		menuCategoryRepo.save(new MenuCategory(null, "Bebidas", "Aguas, refrescos y mas para saciar tu sed.", bebidasItems));

		List<MenuItem> postresItems = new ArrayList<MenuItem>();
		postresItems.add(menuItemRepo.save(new MenuItem(null, "Pay de Queso", "Delicioso Pay hecho al dia.", 25, null)));
		postresItems.add(menuItemRepo.save(new MenuItem(null, "Jericalla", "Tradicional Jericalla hecha por nosotros al dia.", 25, null)));
		menuCategoryRepo.save(new MenuCategory(null, "Postres", "Para complementar tu rica comida con un gustito.", postresItems));

		List<MenuItem> grillItems   = new ArrayList<MenuItem>();
		grillItems.add(menuItemRepo.save(new MenuItem(null, "Beef Steack 350gr", "Corte asado al carbon acompañado de 2 guarniciones.", 120, null)));
		grillItems.add(menuItemRepo.save(new MenuItem(null, "Orden Arrachera 350gr", "Corte asado al carbon acompañado de 2 guarniciones.", 145, null)));
		grillItems.add(menuItemRepo.save(new MenuItem(null, "Choriquezo", "Chorizo azado a la parrilla acompañado de queso fundido.", 70, null)));
		menuCategoryRepo.save(new MenuCategory(null, "Grill", "Sacia ese carnivoro que vive en ti.", grillItems));


	}



}
