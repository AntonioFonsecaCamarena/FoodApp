import axios from 'axios'

const MENUITEM_URL = 'http://localhost:8080/menuCategory/';

class MenuCategoryService {

    findById(id) {

        console.log('MenuCategory Service fingById');
        return axios.get(MENUITEM_URL + 'findMenuCategory', {
            params: {
                id: id
            }
        }).catch(error => {
            console.log(error + " - > The menu element: " + id + " is not found on the DB.")
        });
    }

    getMenuCategories() {
        console.log('MenuCategory Service getMenuCategories');
        return axios.get(MENUITEM_URL + 'list');
    }

    saveNewMenuCategorie(menuCategorieForm) {
        axios.post(MENUITEM_URL + 'addMenuCategory', menuCategorieForm)
            .then(response => {
                alert('Saved');
            }).catch(error => {
                alert('There was a problem, consult the logs');
                console.log(error)
            })
    }

}

export default new MenuCategoryService();