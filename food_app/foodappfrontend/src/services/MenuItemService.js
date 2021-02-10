import axios from 'axios'

const MENUITEM_URL = 'http://localhost:8080/menuItem/';

class MenuItemService {

    getMenuItems(){
        console.log('_______________________');
        console.log(axios.get(MENUITEM_URL+'list'));
        return axios.get(MENUITEM_URL+'list');
    }

    saveNewMenuItem(menuItemForm){
        console.log('--->');
        console.log(menuItemForm);
        axios.post(MENUITEM_URL+'addMenuItem', menuItemForm)
        .then(response =>{
            console.log('____==___');
            console.log(response);
            alert('todo bueno');
        }).catch(error =>{
            alert('todo malo :(');
            console.log('____ERROR__');
            console.log(error)
        })
    }

}

export default new MenuItemService();