import { useState, useEffect } from 'react';
import MenuCategory from "./MenuCategory";
import { menuCategoryAPI } from "../../services/MenuCategoryService"

const MenuCategoryContainer = () => {
    const [menuCategoriesList, setMenuCategoriesList] = useState([]);
    const [componentReady, setComponentReady] = useState(false);


    //Getting all the Menus Categories From a User
    useEffect(() => {
        console.log('Getting Menus Categories from a User...');
        menuCategoryAPI.getMenuCategoriesbyUser(null).then(response => {
            console.log(response);
            setMenuCategoriesList(response.data);
            setComponentReady(true);
        })
    }, []);

    if (componentReady) {
        return <div>Administrator Landing
            {menuCategoriesList.map(menuCategory =>
            <MenuCategory data={menuCategory} key={menuCategory.id} />
        )}
        </div>;
    } else {
        return <div>Loading Categories...</div>
    }


}

export default MenuCategoryContainer;