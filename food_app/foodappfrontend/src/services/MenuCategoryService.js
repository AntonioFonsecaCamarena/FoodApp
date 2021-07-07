import axios from 'axios';

const BASE_URL = 'http://localhost:8080/menuCategory';

const getMenuCategoriesbyUser = (user) => {
    console.log('Menu Category Service');
    console.log('getMenuCategoriesbyUser : ' + user);
    return axios.get(BASE_URL + "/getMenuCategoriesbyUser");
};

export const menuCategoryAPI = { getMenuCategoriesbyUser };