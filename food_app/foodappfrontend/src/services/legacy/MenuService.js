import axios from 'axios'

const MENU_URL = 'http://localhost:8080/menu/';

class MenuService {

    findById(id){
       return axios.get(MENU_URL+'find', {
            params: {
                id: id
            }
        }).catch(error =>{
            console.log(error + " - > The menu element: " + id + " is not found on the DB.")
        });
    }

    findByUserId(id){
        return axios.get(MENU_URL+'findByUserId', {
             params: {
                 userId: id
             }
         }).catch(error =>{
             console.log(error + " - > The menu element: " + id + " is not found on the DB.")
         });
     }

    getMenuItems(){
        return axios.get(MENU_URL+'list');
    }

    getMenuItemsByMenuId(){
        return axios.get(MENU_URL+'getMenuItersByMenuId');
    }


    // saveNewMenuItem(menuItemForm){
    //    axios.post(MENUITEM_URL+'addMenuItem', menuItemForm)
    //     .then(response =>{
    //         alert('Saved');
    //     }).catch(error =>{
    //         alert('There was a problem, consult the logs');
    //         console.log(error)
    //     })
    // }

}

export default new MenuService();