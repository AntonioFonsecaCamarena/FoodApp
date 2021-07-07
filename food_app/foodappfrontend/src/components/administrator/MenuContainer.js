import { useState, useEffect } from 'react';
import Menu from "./Menu";
import { menuAPI } from "../../services/MenuService"
import styles from './Menu.module.css';

const MenuContainer = () => {
    const [menuList, setMenuList] = useState([]);
    const [componentReady, setComponentReady] = useState(false);


    //Getting all the Menus Categories From a User
    useEffect(() => {
        console.log('Getting Menus Categories from a User...');
        menuAPI.getMenubyUser(null).then(response => {
            console.log(response);
            setMenuList(response.data);
            setComponentReady(true);
        })
    }, []);

    if (componentReady) {
        return <div className={styles.fondo}>Administrator Landing
            {menuList.map(menu =>
            <Menu data={menu} key={menu.id} />
        )}
        </div>;
    } else {
        return <div>Loading Menus...</div>
    }


}

export default MenuContainer;