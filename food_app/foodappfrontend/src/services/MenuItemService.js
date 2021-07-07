import axios from 'axios';

const BASE_URL = 'http://localhost:8080/menuItem';

const getMenuItemsbyUser = (user) => {
    console.log('Menu Items Service');
    console.log('getMenuItemsbyUser : ' + user);
    return axios.get(BASE_URL + "/getMenuItemsbyUser");
};

export const menuItemAPI = { getMenuItemsbyUser };