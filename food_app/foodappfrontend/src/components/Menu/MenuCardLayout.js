import React, { Component } from 'react';
import MenuService from '../../services/MenuService';
import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'

export default class MenuCardLayout extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: props.location.state.id,
            name: 'loading...',
            description: 'loading...',
            // price: props.item.price,
            // menuCategory: props.item.menuCategory,
            // show: true
        }
        console.log('card state')
        console.log(this.state)
    }


    componentDidMount() {
        MenuService.findById(this.state.id).then((response) => {
            console.log('------------');
            console.log(response);
            if (response !== undefined && response.status === 200) {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    // price: response.data.price,
                    // menuItems: response.data.menuItems,
                    // show: true
                })
            } else {alert(this.state.id)}
        });
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    prueba de servicio 1<br />
                    {this.state.id}<br />
                    {this.state.name}<br />
                    {this.state.description}<br />
                </Card.Body>
            </Card>);
    }


}