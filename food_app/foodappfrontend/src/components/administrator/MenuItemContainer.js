import { useState, useEffect } from 'react';
import MenuItem from "./MenuItem";
import { menuItemAPI } from "../../services/MenuItemService"

const MenuItemContainer = () => {
    const [menuItemsList, setMenuItemsList] = useState([]);
    const [componentReady, setComponentReady] = useState(false);


    //Getting all the Menus Categories From a User
    useEffect(() => {
        console.log('Getting Menus Categories from a User...');
        menuItemAPI.getMenuItemsbyUser(null).then(response => {
            console.log(response);
            setMenuItemsList(response.data);
            setComponentReady(true);
        })
    }, []);

    if (componentReady) {
        return <div>Administrator Landing
            {menuItemsList.map(menuItem =>
            <div className='col-12'>
                <MenuItem data={menuItem} key={menuItem.id} />
            </div>
        )}
        </div>;
    } else {
        return <div>Loading Categories...</div>
    }


}

export default MenuItemContainer;