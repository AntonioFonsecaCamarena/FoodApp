import React, { Component } from 'react';
//import MenuItemService from '../../services/MenuItemService';

export class MenuItem extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            id: props.item.id,
            name: props.item.name,
            description: props.item.description,
            price: props.item.price,
            menuCategory: props.item.menuCategory,
            show: true
        }
    }

    /* componentDidMount() {
        MenuItemService.findById(this.state.id).then((response) => {
            if (response.status === 200) {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    menuCategory: response.data.menuCategory,
                    show: true
                })
            }
        });
    } */

    render() {
        if (this.state.show === true) {
            return (
					    <div className="menuItem container">
							<h5>{this.state.name}  <span>${this.state.price}</span></h5>
							<p>{this.state.description}</p>
						</div>
            )
        } else {
            return (<div></div>);
        }
    }
}
export default MenuItem;