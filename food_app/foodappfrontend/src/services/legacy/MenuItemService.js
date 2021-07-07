import axios from 'axios'

const MENUITEM_URL = 'http://localhost:8080/menuItem/';

export default class MenuItemService {

    findById(id){
       return axios.get(MENUITEM_URL+'findMenuItem', {
            params: {
                id: id
            }
        }).catch(error =>{
            console.log(error + " - > The menu element: " + id + " is not found on the DB.")
        });
    }

    getMenuItems(){
        return axios.get(MENUITEM_URL+'list');
    }

    saveNewMenuItem(menuItemForm){
       axios.post(MENUITEM_URL+'addMenuItem', menuItemForm)
        .then(response =>{
            alert('Saved');
        }).catch(error =>{
            alert('There was a problem, consult the logs');
            console.log(error)
        })
    }

}