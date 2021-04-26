import React, { Component } from 'react';
import MenuCategoryService from '../../services/MenuCategoryService';
import MenuCategory from './MenuCategory'

export class Menu extends Component {

     constructor(props) {
        super(props)
        this.state = {
            categoryList: []
        }
    }

    componentDidMount() {
        MenuCategoryService.getMenuCategories().then((response) => {
            if (response.status === 200) {
                this.setState({
                    categoryList: response.data
                })
            }
        });
    } 

    render() {
            return (
                    <div >
                       {
                            this.state.categoryList.map(category => 
                                    <MenuCategory Key={category.id} data={category}/>
                        )}
                     </div>
            )
    }
}

export default Menu;