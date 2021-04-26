import React, { Component } from 'react';
//import MenuCategoryService from '../../services/MenuCategoryService';
//import MenuItem from '../menuNavigation/MenuItem'

export class MenuCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.data.id,
            name: props.data.name,
            description: props.data.description,
            menuItems: [],
            show: true
        }
    }

    /*
    componentDidMount() {
       //alert(this.state.id);
        MenuCategoryService.findById(this.state.id).then((response) => {
            console.log('------------');
            console.log(response);
            if (response !== undefined && response.status === 200) {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    menuItems: response.data.menuItems,
                    show: true
                })
            }
        });
    }*/

    render() {
        if (this.state.show === true) {
            return (
                    <div className='card'>
					    <div className="card-header">
							<h2>{this.state.name}</h2>
							<h2>{this.state.show}</h2>
                        </div>
                        <div className="card-body">
							<p>{this.state.description}</p>
						</div>  
                    </div>
            )
        } else {
            return (<div>testins</div>);
        }
    }
}

export default MenuCategory;