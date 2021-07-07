import axios from 'axios';

const BASE_URL = 'http://localhost:8080/menu';

const getMenubyUser = (user) => {
    console.log('Menu Service');
    console.log('getMenubyUser : ' + user);
    return axios.get(BASE_URL + "/getMenubyUser");
};

export const menuAPI = { getMenubyUser };