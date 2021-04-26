package com.foodapp.foodapp;

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
		MenuCategory grill     = menuCategoryRepo.save(new MenuCategory("Grill", "Sacia ese carnivoro que vive en ti."));
		MenuCategory ensaladas = menuCategoryRepo.save(new MenuCategory("Ensaladas", "Sigue tu dieta con las mejores ensaladas."));
		MenuCategory bebidas   = menuCategoryRepo.save(new MenuCategory("Bebidas", "Aguas, refrescos y mas para saciar tu sed."));
		MenuCategory postres   = menuCategoryRepo.save(new MenuCategory("Postres", "Para complementar tu rica comida con un gustito."));

		//Create and Save default menu Items
		menuItemRepo.save(new MenuItem("Ensalada Caesar", "Ensalada con lechuga, tomate y pollo a la plancha.", 90, ensaladas));
		menuItemRepo.save(new MenuItem("Ensalada Griega", "Si eres fan de las ensaladas saludables y también te encanta la pasta, no dejes pasar esta ensalada griega con pasta.", 95, ensaladas));
		menuItemRepo.save(new MenuItem("Ensalada Quinoa", "Las ensaladas son platillos ideales, pues pueden componerse de diversos ingredientes y prepararse de muchas maneras.", 100, ensaladas));
		menuItemRepo.save(new MenuItem("Coca Cola 355ml", "Refresco en botella de vidrio frio o al tiempo.", 25, bebidas));
		menuItemRepo.save(new MenuItem("Pepsi 355ml", "Refresco en botella de vidrio frio o al tiempo.", 25, bebidas));
		menuItemRepo.save(new MenuItem("Agua de Orchata", "Agua de orchata hecha al dia azucarada.", 25, bebidas));
	    menuItemRepo.save(new MenuItem("Pay de Queso", "Delicioso Pay hecho al dia.", 25, postres));
		menuItemRepo.save(new MenuItem("Jericalla", "Tradicional Jericalla hecha por nosotros al dia.", 25, postres));
		menuItemRepo.save(new MenuItem("Beef Steack 350gr", "Corte asado al carbon acompañado de 2 guarniciones.", 120, grill));
		menuItemRepo.save(new MenuItem("Orden Arrachera 350gr", "Corte asado al carbon acompañado de 2 guarniciones.", 145, grill));
		menuItemRepo.save(new MenuItem("Choriquezo", "Chorizo azado a la parrilla acompañado de queso fundido.", 70, grill));

	}



}
